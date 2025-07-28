import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Users2 } from 'lucide-react';
import vchandrasekhar from '@/assets/vchandrasekhar.jpg';

interface Mentor {
  id: number;
  name: string;
  role: string;
  department: string;
  expertise: string[];
  bio: string;
  contribution: string;
  experience: string;
  image: string;
  contact: string;
}

const MentorsSection = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Faculty Mentor",
      department: "Mechanical Engineering",
      expertise: ["Automotive Design", "Manufacturing", "CAD/CAM"],
      bio: "Dr. Rajesh Kumar is a renowned expert in automotive engineering with over 15 years of experience in vehicle design and manufacturing. He has guided numerous student projects to national recognition.",
      contribution: "Led the technical design review and provided crucial guidance on chassis optimization and safety protocols.",
      experience: "15+ years",
      image: vchandrasekhar,
      contact: "mahipavan04@gmail.com"
    },
    {
      id: 2,
      name: "Prof. Sneha Reddy",
      role: "Innovation Advisor",
      department: "Electrical Engineering",
      expertise: ["Electric Vehicles", "Battery Technology", "Power Systems"],
      bio: "Prof. Sneha Reddy specializes in electric vehicle technology and sustainable energy systems. Her research in battery optimization has been published in leading international journals.",
      contribution: "Developed the electric powertrain strategy and battery management system for our go-kart.",
      experience: "12+ years",
      image: vchandrasekhar,
      contact: "sneha.reddy@rgukt.ac.in"
    },
    {
      id: 3,
      name: "Dr. Anil Sharma",
      role: "Technical Advisor",
      department: "Computer Science",
      expertise: ["IoT", "Embedded Systems", "Data Analytics"],
      bio: "Dr. Anil Sharma brings cutting-edge technology integration to our projects. His expertise in IoT and embedded systems has revolutionized our approach to smart vehicle development.",
      contribution: "Implemented the telemetry system and real-time performance monitoring for enhanced safety and optimization.",
      experience: "10+ years",
      image: vchandrasekhar,
      contact: "anil.sharma@rgukt.ac.in"
    },
    {
      id: 4,
      name: "Prof. Manoj Varma",
      role: "Industry Liaison",
      department: "Management Studies",
      expertise: ["Project Management", "Industry Relations", "Technology Transfer"],
      bio: "Prof. Manoj Varma bridges the gap between academic research and industry applications. His connections have secured valuable partnerships and funding for our projects.",
      contribution: "Established industry partnerships and guided the team on project management and commercialization strategies.",
      experience: "18+ years",
      image: vchandrasekhar,
      contact: "manoj.varma@rgukt.ac.in"
    }
  ];

  return (
    <section id="mentors" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-4">
            {/* <Users2 className="h-10 w-10 sm:h-12 sm:w-12 text-accent mr-3 sm:mr-4" /> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat">
              <span className="bg-gradient-to-b from-[#FFD700] to-white bg-clip-text text-transparent">Guiding Mentors</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Guided by industry experts and academic leaders who shape our innovation journey
          </p>
        </div>

        <div className="relative">
          <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="flex-shrink-0 w-72 sm:w-80 card-tech cursor-pointer group transform transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedMentor(mentor)}
              >
                <div className="space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary/30">
                      <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-primary font-medium text-sm sm:text-base">{mentor.role}</p>
                    <p className="text-sm text-muted-foreground">{mentor.department}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {mentor.expertise.slice(0, 2).map((skill, index) => (
                      <span key={index} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                    {mentor.expertise.length > 2 && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        +{mentor.expertise.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-muted-foreground line-clamp-2">{mentor.contribution}</p>
                    <div className="mt-3 text-xs text-accent font-semibold">{mentor.experience} experience</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mentor Modal */}
      <Dialog open={!!selectedMentor} onOpenChange={() => setSelectedMentor(null)}>
        <DialogContent className="w-[95vw] max-w-3xl sm:max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-4">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">{selectedMentor?.name}</DialogTitle>
          </DialogHeader>

          {selectedMentor && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary/30">
                    <img src={selectedMentor.image} alt={selectedMentor.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{selectedMentor.name}</h3>
                  <p className="text-primary font-medium">{selectedMentor.role}</p>
                  <p className="text-sm text-muted-foreground">{selectedMentor.department}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Experience</span>
                    <p className="text-accent font-semibold">{selectedMentor.experience}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Contact</span>
                    <p className="text-sm text-foreground">{selectedMentor.contact}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Biography</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedMentor.bio}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Contribution to Team Garuda</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedMentor.contribution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMentor.expertise.map((skill, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${selectedMentor.contact}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button variant="hero" className="w-full">
                      Connect with Mentor
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MentorsSection;
