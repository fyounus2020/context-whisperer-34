import { useState } from 'react';
import { Shield, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const PrivacyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="fixed bottom-4 right-4 max-w-md p-4 shadow-lg animate-slide-in-right z-50">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-sm text-foreground mb-1">
            Privacy-First Design
          </h4>
          <p className="text-xs text-muted-foreground mb-3">
            Your meeting data is processed securely and never stored. All insights are generated in real-time and remain private to you.
          </p>
          <Button
            size="sm"
            onClick={() => setIsVisible(false)}
            className="w-full"
          >
            Got it
          </Button>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </Card>
  );
};

export default PrivacyBanner;
