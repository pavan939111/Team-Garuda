import { useState, useEffect } from 'react';

interface LandingScreenProps {
  onComplete: () => void;
}

const LandingScreen = ({ onComplete }: LandingScreenProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showText, setShowText] = useState(false);
  const fullText = 'WELCOME TO TEAM GARUDA by RGUKT BASAR';

  useEffect(() => {
    setTimeout(() => setShowText(true), 500);
  }, []);

  useEffect(() => {
    if (!showText) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [showText, onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {showText && (
          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat tracking-wider">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-pulse text-accent">|</span>
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-accent/20 blur-3xl -z-10 animate-pulse-glow"></div>
          </div>
        )}
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default LandingScreen;