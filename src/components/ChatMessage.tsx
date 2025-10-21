import { ChatMessage as ChatMessageType } from '@/types/meeting';
import { User, Sparkles } from 'lucide-react';
import ContextSources from './ContextSources';
import RelatedMeetings from './RelatedMeetings';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-start gap-3 animate-message-appear ${isUser ? 'flex-row-reverse' : ''}`}>
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isUser 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-gradient-to-br from-primary to-primary-glow'
      }`}>
        {isUser ? (
          <User className="w-4 h-4" />
        ) : (
          <Sparkles className="w-4 h-4 text-white" />
        )}
      </div>

      {/* Message Content */}
      <div className={`flex-1 space-y-3 ${isUser ? 'flex flex-col items-end' : ''}`}>
        <div className={`rounded-2xl px-4 py-3 inline-block max-w-[85%] ${
          isUser
            ? 'bg-[hsl(var(--chat-user-bg))] text-[hsl(var(--chat-user-text))]'
            : 'bg-[hsl(var(--chat-ai-bg))] text-[hsl(var(--chat-ai-text))]'
        }`}>
          <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
        </div>

        {/* Context Sources and Related Meetings (only for AI messages) */}
        {!isUser && message.contextSources && message.contextSources.length > 0 && (
          <div className="space-y-3 max-w-full">
            <ContextSources sources={message.contextSources} />
            {message.relatedMeetings && message.relatedMeetings.length > 0 && (
              <RelatedMeetings meetingIds={message.relatedMeetings} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
