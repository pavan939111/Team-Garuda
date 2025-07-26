import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import image1 from '@/assets/download1.jpg'; // Local image

const updates = [
  {
    id: 1,
    title: 'Chassis Assembly Completed',
    image: image1,
    summary: 'The main chassis has been assembled and is ready for integration.',
    details:
      'Our team finished the chassis assembly using lightweight carbon fiber. Next, we will integrate the powertrain and electronics. This marks a major milestone in the project timeline.',
  },
  {
    id: 2,
    title: 'Battery Pack Testing',
    image: image1,
    summary: 'Battery modules have passed initial safety and performance tests.',
    details:
      'The battery pack underwent rigorous testing for safety, efficiency, and thermal management. All modules performed within expected parameters, ensuring reliable performance for the go-kart.',
  },
  // Add more updates as needed
];

const LiveUpdatesSection = () => {
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  const scrollRef = useRef(null);
  const scrollSpeed = 0.5; // pixels per frame
  const animationRef = useRef(null);

  // 🌀 Dynamic Auto Scroll
  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += scrollSpeed;
        // Loop back to start when reaching the end
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    // Cleanup
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section id="live-updates" className="py-20 bg-background">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-x-2 mb-4">
          <RefreshCw className="h-7 w-7 md:h-12 md:w-12 text-accent" />
          <h2 className="font-bold font-montserrat text-xl md:text-4xl lg:text-5xl bg-gradient-to-b from-[#FFD700] to-white bg-clip-text text-transparent whitespace-nowrap">
            Project Updates
          </h2>
        </div>
      </div>

      <div className="relative  px-10">
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-background p-2 rounded-full shadow hover:bg-muted"
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pl-6 pr-4 pb-2 scrollbar-hide"
        >
          {updates.map((update) => (
            <div
              key={update.id}
              onClick={() => setSelectedUpdate(update)}
              className="min-w-[300px] max-w-[300px] p-5 rounded-2xl bg-card shadow-md border border-border transition-transform cursor-pointer hover:scale-104 hover:border-blue-500 hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)]"
            >
              <img
                src={update.image}
                alt={update.title}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-accent">
                  {update.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
                  {update.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-background p-2 rounded-full shadow hover:bg-muted"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dialog for detail view */}
      {selectedUpdate && (
        <Dialog open={true} onOpenChange={() => setSelectedUpdate(null)}>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>{selectedUpdate.title}</DialogTitle>
            </DialogHeader>
            <img
              src={selectedUpdate.image}
              alt={selectedUpdate.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <p className="text-base text-muted-foreground">
              {selectedUpdate.details}
            </p>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default LiveUpdatesSection;
