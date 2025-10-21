import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Meeting {
  id: string;
  title: string;
  date: string;
  participants: string[];
  transcript: string;
  decisions: string[];
  topics: string[];
}

interface ChatRequest {
  message: string;
  meetings: Meeting[];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, meetings }: ChatRequest = await req.json();
    console.log('Received chat request:', { message, meetingCount: meetings.length });

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    // Build context from meetings
    const meetingContext = meetings.map(m => 
      `Meeting: ${m.title} (${m.date})
Participants: ${m.participants.join(', ')}
Topics: ${m.topics.join(', ')}
Key Decisions: ${m.decisions.join('; ')}
Transcript Excerpt: ${m.transcript.substring(0, 500)}...`
    ).join('\n\n---\n\n');

    const systemPrompt = `You are an intelligent meeting assistant with access to meeting transcripts and context. 
Your role is to help users find information, make connections, and get insights from their meeting history.

When answering questions:
1. Reference specific meetings by title and date
2. Quote relevant excerpts from transcripts when applicable
3. Identify patterns and connections across multiple meetings
4. Provide context sources for your answers
5. Be concise but thorough
6. If you don't have enough information, say so clearly

Available Meeting Context:
${meetingContext}`;

    console.log('Calling Lovable AI Gateway...');
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please add credits to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    console.log('AI response received');
    
    const aiResponse = data.choices[0].message.content;
    
    // Extract relevant meeting IDs based on AI response
    // Simple heuristic: find meeting titles mentioned in the response
    const relevantMeetingIds = meetings
      .filter(m => aiResponse.toLowerCase().includes(m.title.toLowerCase()))
      .map(m => m.id)
      .slice(0, 3); // Top 3 relevant meetings

    // Create context sources
    const contextSources = relevantMeetingIds.map(id => {
      const meeting = meetings.find(m => m.id === id)!;
      return {
        meetingId: meeting.id,
        meetingTitle: meeting.title,
        relevantExcerpt: meeting.transcript.substring(0, 200) + '...',
        confidence: 0.85 + Math.random() * 0.1 // Simulated confidence score
      };
    });

    return new Response(
      JSON.stringify({
        response: aiResponse,
        contextSources,
        relatedMeetings: relevantMeetingIds
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in chat-with-context function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
