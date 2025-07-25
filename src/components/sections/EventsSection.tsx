import { useState, useRef, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import image1 from '@/assets/download1.jpg'; // Local image import

interface Event {
  id: number;
  title: string;
  year: string;
  date: string;
  location: string;
  participants: number;
  description: string;
  highlights: string[];
  images: string[];
}

const EventsSection = () => {
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);
  const [showGalleryId, setShowGalleryId] = useState<number | null>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleExpand = (id: number) => {
    setExpandedEventId(expandedEventId === id ? null : id);
    setShowGalleryId(null);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const events: Event[] = [
    {
      id: 1,
      title: "RGUKT Basar Tech Fest 2023",
      year: "2023",
      date: "March 15-17, 2023",
      location: "RGUKT Basar Campus",
      participants: 500,
      description:
        "Our flagship annual technology festival showcasing innovative projects from students across all engineering disciplines. Team Garuda presented our latest go-kart prototype with advanced features.",
      highlights: [
        "Live go-kart demonstration",
        "Technical paper presentations",
        "Innovation showcase",
        "Industry expert interactions"
      ],
      images: [image1, image1, image1, image1, image1, image1]
    },
    {
      id: 2,
      title: "National Student Racing Championship",
      year: "2023",
      date: "August 20-22, 2023",
      location: "Chennai, Tamil Nadu",
      participants: 50,
      description:
        "Competed against top engineering colleges nationwide in the premier student racing competition. Our team showcased exceptional performance and engineering excellence.",
      highlights: [
        "Secured 1st position",
        "Best design award",
        "Media coverage",
        "Industry partnerships established"
      ],
      images: [image1, image1]
    }
  ];

  const scrollGallery = (dir: 'left' | 'right') => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: dir === 'left' ? -350 : 350,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const updateArrows = () => {
      if (galleryRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
      }
    };

    const ref = galleryRef.current;
    if (ref) {
      ref.addEventListener('scroll', updateArrows);
      updateArrows();
    }
    return () => ref?.removeEventListener('scroll', updateArrows);
  }, [showGalleryId]);

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones in our journey of innovation and excellence
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.id}>
              {/* Card */}
              <div
                className="card-tech p-6 flex items-center justify-between cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => toggleExpand(event.id)}
              >
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{event.year}</span>
                      <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{event.location}</span>
                      {!isMobile && (
                        <span className="flex items-center"><Users className="h-4 w-4 mr-1" />{event.participants} participants</span>
                      )}
                    </div>
                  </div>
                </div>
                {expandedEventId === event.id ? (
                  <ChevronUp className="h-6 w-6 text-primary" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-muted-foreground" />
                )}
              </div>

              {/* Expanded Info */}
              {expandedEventId === event.id && (
                <div className="animate-fade-in-up mt-4 p-6 border border-border rounded-lg shadow bg-muted/10 space-y-6">
                  {showGalleryId !== event.id ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img src={event.images[0]} alt="event" className="rounded-lg w-full h-48 object-cover mb-4" />
                        <div className="text-sm text-muted-foreground">
                          <p><strong>Date:</strong> {event.date}</p>
                          <p><strong>Location:</strong> {event.location}</p>
                          <p><strong>Participants:</strong> {event.participants}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-muted-foreground">{event.description}</p>
                        <div>
                          <h5 className="text-primary font-semibold mb-2">Key Highlights:</h5>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {event.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          size="sm"
                          variant="accent"
                          onClick={() => setShowGalleryId(event.id)}
                        >
                          View Full Gallery
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mb-4"
                        onClick={() => setShowGalleryId(null)}
                      >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Back to Event
                      </Button>

                      <div className="relative">
                        {showLeft && (
                          <button
                            onClick={() => scrollGallery('left')}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-muted p-2 rounded-full shadow hover:scale-110 transition"
                          >
                            <ChevronLeft className="h-5 w-5 text-primary" />
                          </button>
                        )}

                        <div
                          ref={galleryRef}
                          className="flex overflow-x-auto space-x-4 px-4 py-2 rounded-lg bg-muted/30 scrollbar-thin scrollbar-thumb-primary/50 scroll-smooth"
                        >
                          {event.images.map((img, i) => (
                            <div
                              key={i}
                              className="min-w-[300px] h-[200px] bg-card rounded-lg overflow-hidden shadow hover:scale-105 transition-all duration-300"
                            >
                              <img
                                src={img}
                                alt={`gallery-${i}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>

                        {showRight && (
                          <button
                            onClick={() => scrollGallery('right')}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-muted p-2 rounded-full shadow hover:scale-110 transition"
                          >
                            <ChevronRight className="h-5 w-5 text-primary" />
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
