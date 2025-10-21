import { Brain } from 'lucide-react';
import ChatInterface from '@/components/ChatInterface';
import QuickActions from '@/components/QuickActions';
import PrivacyBanner from '@/components/PrivacyBanner';
import { useChatWithContext } from '@/hooks/useChatWithContext';

const Index = () => {
  const { messages, isLoading, sendMessage } = useChatWithContext();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Meeting Intelligence</h1>
              <p className="text-xs text-muted-foreground">AI-powered context assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              5 meetings indexed
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 h-[calc(100vh-120px)]">
          {/* Chat Area */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col shadow-lg">
            <ChatInterface
              messages={messages}
              onSendMessage={sendMessage}
              isLoading={isLoading}
            />
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block space-y-4">
            <QuickActions />
            
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="font-semibold text-sm mb-4 text-foreground">Context Stats</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Meetings Analyzed</span>
                    <span className="font-semibold text-foreground">5</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Key Decisions</span>
                    <span className="font-semibold text-foreground">18</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Action Items</span>
                    <span className="font-semibold text-foreground">23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Banner */}
      <PrivacyBanner />
    </div>
  );
};

export default Index;
