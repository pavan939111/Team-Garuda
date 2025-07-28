import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Handshake } from 'lucide-react';
import logo from '@/assets/logos11.jpg';
interface Sponsor {
  id: number;
  name: string;
  logo: string;
  category: string;
  supportType: string[];
  contribution: string;
  impact: string;
  project: string;
  year: string;
  website?: string;
  description: string;
}

const SponsorshipSection = () => {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "TechCorp Industries",
      logo: logo,
      category: "Technology Partner",
      supportType: ["Technology", "Equipment", "Mentorship"],
      contribution: "₹2,50,000 in equipment and technical support",
      impact: "Enabled advanced manufacturing capabilities and precision engineering",
      project: "Go-Kart Championship 2023",
      year: "2023",
      website: "techcorp.com",
      description: "Leading technology company specializing in automotive components and manufacturing solutions."
    },
    {
      id: 2,
      name: "Green Energy Solutions",
      logo: logo,
      category: "Sustainability Partner",
      supportType: ["Funding", "Green Technology", "Research"],
      contribution: "₹1,50,000 funding and battery technology",
      impact: "Revolutionized our electric powertrain system with cutting-edge battery technology",
      project: "Electric Vehicle Innovation 2023",
      year: "2023",
      website: "greenenergy.com",
      description: "Pioneer in sustainable energy solutions and electric vehicle technology."
    },

  ];

  const getSupportTypeColor = (type: string) => {
    switch (type) {
      case 'Funding': return 'bg-accent/20 text-accent';
      case 'Technology': return 'bg-primary/20 text-primary';
      case 'Equipment': return 'bg-primary-glow/20 text-primary-glow';
      case 'Research': return 'bg-accent-glow/20 text-accent-glow';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="sponsorship" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-x-2 mb-4">
            {/* <Handshake className="h-7 w-7 md:h-12 md:w-12 text-accent" /> */}
            <h2 className="font-bold font-montserrat text-lg md:text-4xl lg:text-5xl bg-gradient-to-b from-[#FFD700] to-white bg-clip-text text-transparent whitespace-nowrap">
              Sponsorship & Partners
            </h2>
          </div>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are grateful for the support and collaboration from our esteemed sponsors and partners.
          </p>
        </div>

        <div className={`${isMobile ? 'flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted pb-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="card-tech min-w-[280px] max-w-[95vw] cursor-pointer group"
              onClick={() => setSelectedSponsor(sponsor)}
            >
              <div className="space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto rounded-xl overflow-hidden mb-4 shadow-md border border-border">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-accent-foreground">{sponsor.year.slice(-2)}</span>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {sponsor.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">{sponsor.category}</p>
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {sponsor.supportType.slice(0, 2).map((type, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full font-medium ${getSupportTypeColor(type)}`}
                    >
                      {type}
                    </span>
                  ))}
                  {sponsor.supportType.length > 2 && (
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      +{sponsor.supportType.length - 2}
                    </span>
                  )}
                </div>
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-muted-foreground line-clamp-2">{sponsor.description}</p>
                  <div className="mt-2 text-xs text-accent font-semibold">{sponsor.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Partner with Team Garuda
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our mission to revolutionize motorsport technology. We offer various partnership opportunities 
              to align with your brand values and business objectives.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=mahipavan04@gmail.com&su=Sponsorship%20Inquiry&body=Hello%20Team%20Garuda,%0D%0A%0D%0AI am interested in sponsoring your team. Please share more details.%0D%0A%0D%0ARegards,"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                Become a Sponsor
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Sponsor Detail Modal */}
      <Dialog open={!!selectedSponsor} onOpenChange={() => setSelectedSponsor(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {selectedSponsor?.name}
            </DialogTitle>
          </DialogHeader>

          {selectedSponsor && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="text-center">
                  <img src={selectedSponsor.logo} alt={selectedSponsor.name} className="w-full h-40 object-cover rounded-xl mb-4" />
                  <h3 className="text-xl font-semibold">{selectedSponsor.name}</h3>
                  <p className="text-primary font-medium">{selectedSponsor.category}</p>
                  {selectedSponsor.website && (
                    <a
                      href={`https://${selectedSponsor.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-sm hover:underline"
                    >
                      {selectedSponsor.website}
                    </a>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Year</span>
                    <p className="text-accent font-semibold">{selectedSponsor.year}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Project</span>
                    <p className="text-sm text-foreground">{selectedSponsor.project}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">About the Partnership</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedSponsor.description}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Contribution</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedSponsor.contribution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Impact</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedSponsor.impact}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Support Types</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSponsor.supportType.map((type, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getSupportTypeColor(type)}`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="hero" className="w-full" onClick={() => setShowLearnMore(true)}>
                    Know more about Sponsorship
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Learn More Modal */}
      <Dialog open={showLearnMore} onOpenChange={() => setShowLearnMore(false)}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-primary">Explore Sponsorship</DialogTitle>
          </DialogHeader>
          <img src="/sponsor-benefits.jpg" alt="Sponsorship" className="w-full rounded-lg mb-4" />
          <p className="text-muted-foreground text-sm mb-4">
            Discover how your sponsorship can drive innovation, elevate your brand visibility, and make a meaningful impact in engineering education.
          </p>
          <p className="text-lg font-semibold text-foreground">Team Garuda</p>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SponsorshipSection;
