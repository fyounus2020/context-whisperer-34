import { ContextSource } from '@/types/meeting';
import { FileText, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ContextSourcesProps {
  sources: ContextSource[];
}

const ContextSources = ({ sources }: ContextSourcesProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <FileText className="w-4 h-4" />
        <span className="font-medium">Context Sources</span>
      </div>
      <div className="space-y-2">
        {sources.map((source, index) => (
          <Card key={index} className="p-3 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-sm text-foreground truncate">
                    {source.meetingTitle}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="w-3 h-3" />
                    <span>{Math.round(source.confidence * 100)}%</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {source.relevantExcerpt}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContextSources;
