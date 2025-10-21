import { Calendar, CheckSquare, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const QuickActions = () => {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: `${action} initiated`,
      description: 'This would trigger the action in a production app.',
    });
  };

  return (
    <Card className="p-4">
      <h3 className="font-semibold text-sm mb-3 text-foreground">Quick Actions</h3>
      <div className="space-y-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start"
          onClick={() => handleAction('Schedule Follow-up')}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Follow-up
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start"
          onClick={() => handleAction('Create Task')}
        >
          <CheckSquare className="w-4 h-4 mr-2" />
          Create Task
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start"
          onClick={() => handleAction('Export Summary')}
        >
          <Download className="w-4 h-4 mr-2" />
          Export Summary
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start"
          onClick={() => handleAction('Share Context')}
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share Context
        </Button>
      </div>
    </Card>
  );
};

export default QuickActions;
