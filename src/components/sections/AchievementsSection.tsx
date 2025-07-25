import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import image1 from '@/assets/download1.jpg';

interface Achievement {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
  details: string;
  category: string;
  position: string;
  gallery: {
    image: string;
    content: string;
  }[];
}

const AchievementsSection = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showGallery && selectedAchievement) {
      setStartIndex(0);
    }
  }, [showGallery, selectedAchievement]);

  useEffect(() => {
    if (!selectedAchievement) return;
    const visibleCount = isDesktop ? 3 : 1;
    setShowLeft(startIndex > 0);
    setShowRight(startIndex + visibleCount < selectedAchievement.gallery.length);
  }, [startIndex, selectedAchievement, isDesktop]);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'National Go-Kart Championship',
      year: '2023',
      description: 'First place in electric vehicle category',
      image: image1,
      details: 'Our team dominated the national championship with our innovative electric powertrain design...',
      category: 'Competition',
      position: '1st Place',
      gallery: [
        { image: image1, content: 'Custom-built electric powertrain.' },
        { image: image1, content: 'Streamlined aerodynamic body.' },
        { image: image1, content: 'Pit-stop strategy with team precision.' },
        { image: image1, content: 'Carbon-fiber chassis frame.' },
        { image: image1, content: 'Suspension system for track handling.' },
        { image: image1, content: 'Design simulated using FEA.' }
      ]
    },
    {
      id: 2,
      title: 'Innovation Excellence Award',
      year: '2023',
      description: 'Best technical innovation in autonomous systems',
      image: image1,
      details: 'Recognition for our groundbreaking work in AI-driven steering assistance...',
      category: 'Innovation',
      position: 'Winner',
      gallery: [
        { image: image1, content: 'AI-based steering assist system.' },
        { image: image1, content: 'Advanced onboard sensors.' },
        { image: image1, content: 'Jetson Nano for real-time inference.' }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our journey of innovation, excellence, and recognition
          </p>
        </div>

        <div className="flex space-x-6  p-5 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex-shrink-0 w-80  card-tech cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              onClick={() => {
                setSelectedAchievement(achievement);
                setShowGallery(false);
              }}
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center transition-all duration-300 group-hover:from-primary/30 group-hover:to-accent/30">
                  <img src={image1} alt="icon" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-accent">
                  {achievement.year}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold line-clamp-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {achievement.category}
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    {achievement.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedAchievement}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedAchievement(null);
            setShowGallery(false);
          }
        }}
      >
        <DialogContent className="w-[95vw] max-w-3xl sm:max-w-5xl max-h-[90vh] overflow-hidden px-4 rounded-2xl">
          {showGallery && selectedAchievement ? (
            <div className="relative h-full">
              <div className="flex items-center justify-between mb-6">
                {!isDesktop && (
                  <button
                    onClick={() => setShowGallery(false)}
                    className="bg-muted p-2 rounded-full hover:bg-muted-foreground/10 transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5 text-primary" />
                  </button>
                )}
                <h3 className="text-xl sm:text-2xl font-bold text-primary text-center w-full">
                  {selectedAchievement.title} – Gallery
                </h3>
              </div>

              <div className="relative flex items-center justify-center min-h-[480px]">
                {showLeft && (
                  <button
                    onClick={() => setStartIndex((prev) => prev - 1)}
                    className="absolute left-4 z-10 bg-background/80 border border-border p-2 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    <ChevronLeft className="h-5 w-5 text-primary" />
                  </button>
                )}

                <div className={`flex ${isDesktop ? 'space-x-6' : ''}`}>
                  {selectedAchievement.gallery
                    .slice(startIndex, startIndex + (isDesktop ? 3 : 1))
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className="w-[320px] bg-card border border-border rounded-lg shadow-md p-4 flex flex-col h-[440px] hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <div className="w-full h-48 overflow-hidden rounded-md mb-3">
                          <img
                            src={item.image}
                            alt={`gallery-${idx}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="text-center mb-2 space-x-2">
                          <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                            {selectedAchievement.category}
                          </span>
                          <span className="inline-block bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">
                            {selectedAchievement.position}
                          </span>
                        </div>
                        <div className="flex-1 text-sm text-muted-foreground">
                          <p className="leading-relaxed">{item.content}</p>
                        </div>
                      </div>
                    ))}
                </div>

                {showRight && (
                  <button
                    onClick={() => setStartIndex((prev) => prev + 1)}
                    className="absolute right-4 z-10 bg-background/80 border border-border p-2 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </button>
                )}
              </div>

              <div className="text-center py-4 mt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Showing {Math.min((isDesktop ? 3 : 1), selectedAchievement.gallery.length - startIndex)} of {selectedAchievement.gallery.length} images from {selectedAchievement.title}
                </p>
              </div>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary">
                  {selectedAchievement?.title}
                </DialogTitle>
              </DialogHeader>

              {selectedAchievement && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                      <img src={image1} alt="icon" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Year</span>
                        <span className="font-semibold">{selectedAchievement.year}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Category</span>
                        <span className="font-semibold">{selectedAchievement.category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Position</span>
                        <span className="font-semibold text-accent">{selectedAchievement.position}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Achievement Details</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedAchievement.details}</p>
                    <Button
                      variant="hero"
                      className="w-full transform transition-all duration-200 hover:scale-105 active:scale-95"
                      onClick={() => setShowGallery(true)}
                    >
                      View Full Gallery
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AchievementsSection;
