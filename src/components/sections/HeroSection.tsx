import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroGokart from '@/assets/hero-gokart.jpg';

const HeroSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  const features = [
    'Lightweight Carbon Fiber Frame',
    'Advanced Electric Powertrain',
    'Precision Smart Steering',
    'Aerodynamic Design Excellence'
  ];

  useEffect(() => {
    features.forEach((_, index) => {
      setTimeout(() => {
        setVisibleFeatures(prev => [...prev, index]);
      }, 800 + index * 400);
    });
  }, []);

  const scrollToSection = () => {
    const achievementsSection = document.querySelector('#achievements');
    if (achievementsSection) {
      achievementsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* 3D Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary),0.3)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--accent),0.2)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-montserrat leading-tight">
                <span className="block text-foreground">Team</span>
                <span
                  className="block bg-gradient-to-r from-[#FFC107] via-[#FFD700] to-[#FFB300] bg-clip-text text-transparent text-glow"
                  style={{
                    WebkitTextStroke: '1px #DAA520',
                  }}
                >
                  Garuda
                </span>
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground max-w-lg">
                Engineering Innovation in 
                <span className="text-accent font-bold ml-2">Motion</span>
              </p>
            </div>

            {/* Animated Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    visibleFeatures.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-[-20px]'
                  }`}
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                  <span className="text-foreground/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button - Updated */}
            <div className="pt-4">
              <Button 
                onClick={scrollToSection}
                className="group px-8 py-4 text-lg font-semibold rounded-xl text-black 
                           bg-gradient-to-r from-[#FFD700] to-[#FFA500]
                           shadow-[0_4px_20px_rgba(255,215,0,0.5)] 
                           hover:shadow-[0_6px_30px_rgba(255,165,0,0.7)] 
                           transition-all duration-300"
              >
                Explore Our Journey
                <ChevronDown className="ml-2 h-6 w-6 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - 3D Visualization */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] animate-float">
              {/* 3D Go-Kart Placeholder */}
              <div
                className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 rounded-2xl border border-primary/20 flex items-center justify-center"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(218, 165, 32, 0.55)',
                }}
              >
                <div className="text-center space-y-4">
                  <div className="text-6xl">🏎️</div>
                  <div className="text-lg font-semibold text-primary">3D Go-Kart Model</div>
                  <div className="text-sm text-muted-foreground">Interactive 3D View Coming Soon</div>
                </div>
              </div>

              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 via-transparent to-[#FFA500]/20 rounded-2xl animate-pulse-glow"></div>
            </div>

            {/* Tech Specs Overlay */}
            <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border">
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Top Speed:</span>
                  <span className="text-accent font-semibold">80 km/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="text-accent font-semibold">120 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Power:</span>
                  <span className="text-accent font-semibold">15 kW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary animate-pulse" />
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
