import { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Award,
  Star,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<'right' | 'left'>('right');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showGallery && selectedAchievement) setStartIndex(0);
  }, [showGallery, selectedAchievement]);

  useEffect(() => {
    if (!selectedAchievement) return;
    const visibleCount = isDesktop ? 3 : 1;
    setShowLeft(startIndex > 0);
    setShowRight(startIndex + visibleCount < selectedAchievement.gallery.length);
  }, [startIndex, selectedAchievement, isDesktop]);

  // Auto-scroll effect
  useEffect(() => {
    if (!scrollRef.current || isHovered) return;

    const container = scrollRef.current;
    let animationFrame: number;

    const scrollStep = () => {
      if (!container) return;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (scrollDirection === 'right') {
        if (container.scrollLeft < maxScroll) {
          container.scrollLeft += 1.5; // Adjust speed here
        } else {
          setScrollDirection('left');
        }
      } else {
        if (container.scrollLeft > 0) {
          container.scrollLeft -= 1.5;
        } else {
          setScrollDirection('right');
        }
      }
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrame);
  }, [scrollDirection, isHovered]);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'National Go-Kart Championship',
      year: '2023',
      description: 'First place in electric vehicle category',
      image: image1,
      details: 'Our team dominated the national championship with our innovative electric powertrain design, showcasing cutting-edge technology and engineering excellence. The victory demonstrated our commitment to sustainable racing and technological advancement.',
      category: 'Competition',
      position: '1st Place',
      gallery: [
        { image: image1, content: 'Custom-built electric powertrain with advanced motor control.' },
        { image: image1, content: 'Streamlined aerodynamic body optimized for performance.' },
        { image: image1, content: 'Pit-stop strategy executed with team precision.' },
        { image: image1, content: 'Carbon-fiber chassis frame for maximum strength and lightness.' },
        { image: image1, content: 'Suspension system engineered for optimal track handling.' },
        { image: image1, content: 'Design validated using Finite Element Analysis (FEA).' },
      ],
    },
    {
      id: 2,
      title: 'Innovation Excellence Award',
      year: '2023',
      description: 'Best technical innovation in autonomous systems',
      image: image1,
      details: 'Recognition for our groundbreaking work in AI-driven steering assistance and autonomous navigation systems. This award highlights our commitment to pushing the boundaries of what\'s possible in racing technology.',
      category: 'Innovation',
      position: 'Winner',
      gallery: [
        { image: image1, content: 'AI-based steering assist system with real-time processing.' },
        { image: image1, content: 'Advanced onboard sensors for environmental awareness.' },
        { image: image1, content: 'Jetson Nano integration for real-time inference.' },
      ],
    },
  ];

  return (
    <section id="achievements" className="py-10 bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Enhanced Section Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-x-2 mb-4">
            <Trophy className="h-7 w-7 md:h-12 md:w-12 text-accent" />
            <h2 className="font-bold font-montserrat text-lg md:text-4xl lg:text-5xl bg-gradient-to-b from-[#FFD700] to-white bg-clip-text text-transparent whitespace-nowrap">
              Major Achievements
            </h2>
          </div>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Celebrating our journey of innovation, excellence, and recognition in the world of racing technology.
          </p>
        </div>

        {/* Enhanced Achievement Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted px-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex-shrink-0 w-80 card-tech cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-hover active:scale-95"
              onClick={() => {
                setSelectedAchievement(achievement);
                setShowGallery(false);
              }}
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img src={achievement.image} alt="achievement" className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-accent border border-accent/20">
                  <Calendar className="h-3 w-3 inline mr-1" />
                  {achievement.year}
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="badge-accent">
                    <Award className="h-3 w-3 inline mr-1" />
                    {achievement.category}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="badge-secondary">
                    <Star className="h-3 w-3 inline mr-1" />
                    {achievement.position}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Dialog */}
      <Dialog
        open={!!selectedAchievement}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedAchievement(null);
            setShowGallery(false);
          }
        }}
      >
        <DialogContent className="w-[95vw] max-w-5xl max-h-[90vh] overflow-hidden px-6 rounded-2xl border border-border/50">
          {showGallery && selectedAchievement ? (
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                {!isDesktop && (
                  <button
                    onClick={() => setShowGallery(false)}
                    className="bg-secondary p-3 rounded-full hover:bg-secondary/80 transition hover:scale-110 border border-border/50"
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
                    className="absolute left-4 z-10 bg-background/90 border border-border/50 p-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-6 w-6 text-primary" />
                  </button>
                )}

                <div className={`flex ${isDesktop ? 'space-x-6' : ''}`}>
                  {selectedAchievement.gallery
                    .slice(startIndex, startIndex + (isDesktop ? 3 : 1))
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className="w-[320px] card-glass p-6 flex flex-col h-[440px] hover:shadow-hover transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                          <img
                            src={item.image}
                            alt={`gallery-${idx}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="text-center mb-4 space-x-2">
                          <span className="badge-primary">{selectedAchievement.category}</span>
                          <span className="badge-accent">{selectedAchievement.position}</span>
                        </div>
                        <div className="flex-1 text-sm text-muted-foreground leading-relaxed">
                          <p>{item.content}</p>
                        </div>
                      </div>
                    ))}
                </div>

                {showRight && (
                  <button
                    onClick={() => setStartIndex((prev) => prev + 1)}
                    className="absolute right-4 z-10 bg-background/90 border border-border/50 p-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition backdrop-blur-sm"
                  >
                    <ChevronRight className="h-6 w-6 text-primary" />
                  </button>
                )}
              </div>

              <div className="text-center py-6 mt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Showing {Math.min((isDesktop ? 3 : 1), selectedAchievement.gallery.length - startIndex)} of {selectedAchievement.gallery.length} images from {selectedAchievement.title}
                </p>
              </div>
            </div>
          ) : (
            <>
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl font-bold text-primary">{selectedAchievement?.title}</DialogTitle>
              </DialogHeader>

              {selectedAchievement && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="h-64 rounded-lg overflow-hidden border border-border/50">
                      <img src={selectedAchievement.image} alt="achievement" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex justify-between items-center">
                        <span>Year:</span>
                        <span className="font-semibold text-foreground">{selectedAchievement.year}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Category:</span>
                        <span className="font-semibold text-foreground">{selectedAchievement.category}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Position:</span>
                        <span className="font-semibold text-accent">{selectedAchievement.position}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Achievement Details</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedAchievement.details}</p>
                    <Button
                      className="w-full hover:scale-105 active:scale-95 transition-transform"
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
