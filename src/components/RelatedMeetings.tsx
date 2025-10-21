import { Link2, Calendar, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockMeetings } from '@/data/mockMeetings';

interface RelatedMeetingsProps {
  meetingIds: string[];
}

const RelatedMeetings = ({ meetingIds }: RelatedMeetingsProps) => {
  const relatedMeetings = mockMeetings.filter(m => meetingIds.includes(m.id));

  if (relatedMeetings.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link2 className="w-4 h-4" />
        <span className="font-medium">Related Meetings</span>
      </div>
      <div className="space-y-2">
        {relatedMeetings.map((meeting) => (
          <Card key={meeting.id} className="p-3 hover:shadow-md transition-shadow cursor-pointer">
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-foreground">{meeting.title}</h4>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{meeting.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span>{meeting.participants.length} participants</span>
                </div>
              </div>
              {meeting.topics.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {meeting.topics.slice(0, 3).map((topic, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedMeetings;
