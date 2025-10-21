export interface Meeting {
  id: string;
  title: string;
  date: string;
  participants: string[];
  duration: string;
  transcript: string;
  decisions: string[];
  actionItems: string[];
  topics: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  contextSources?: ContextSource[];
  relatedMeetings?: string[];
  timestamp: Date;
}

export interface ContextSource {
  meetingId: string;
  meetingTitle: string;
  relevantExcerpt: string;
  confidence: number;
}
