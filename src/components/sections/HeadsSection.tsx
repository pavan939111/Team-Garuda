




import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';
import vchandrasekhar from '@/assets/vchandrasekhar.jpg';

interface Head {
  id: number;
  name: string;
  designation: string;
  department: string;
  year: string;
  contribution: string;
  bio: string;
  achievements: string[];
  skills: string[];
  responsibilities: string[];
  image: string;
  contact: string;
}

const HeadsSection = () => {
  const [selectedHead, setSelectedHead] = useState<Head | null>(null);


    const heads: Head[] = [
    {
      id: 1,
      name: "Arjun Reddy",
      designation: "Team Captain",
      department: "Mechanical Engineering",
      year: "4th Year",
      contribution: "Leads the overall team strategy, coordinates between different departments, and represents Team Garuda in competitions and events.",
      bio: "Arjun is a passionate automotive engineer with exceptional leadership skills. He has been with Team Garuda since his second year and has led the team to multiple victories. His vision and dedication have been instrumental in establishing Team Garuda as a premier student innovation team.",
      achievements: [
        "Led team to National Championship victory 2023",
        "Best Team Leader Award - RGUKT Tech Fest 2023",
        "Outstanding Student Leader Recognition",
        "Published 3 technical papers on automotive innovation"
      ],
      skills: ["Leadership", "Project Management", "Automotive Design", "Team Coordination"],
      responsibilities: [
        "Overall team leadership and strategy",
        "Competition planning and execution",
        "Stakeholder management and external relations",
        "Team motivation and performance optimization"
      ],
      image: "/placeholder-head1.jpg",
      contact: "mahipavan04@gmail.com"
    },
    {
      id: 2,
      name: "Priya Sharma",
      designation: "Technical Head",
      department: "Electrical Engineering",
      year: "3rd Year",
      contribution: "Oversees all technical aspects of projects, ensures quality standards, and drives innovation in electrical and software systems.",
      bio: "Priya is a technical virtuoso with deep expertise in electrical systems and software development. She has revolutionized our approach to smart vehicle technology and has been the driving force behind our AI integration initiatives.",
      achievements: [
        "Innovation Excellence Award for AI Integration 2023",
        "Best Technical Project - State Level Competition",
        "Research Publication in International Journal",
        "Mentor for Junior Students in Electronics"
      ],
      skills: ["Electronics Design", "Software Development", "AI/ML", "Innovation"],
      responsibilities: [
        "Technical project oversight and quality assurance",
        "Innovation strategy and R&D direction",
        "Technical mentoring for team members",
        "Industry collaboration for technology transfer"
      ],
      image: "/placeholder-head2.jpg",
      contact: "priya.tech@rgukt.ac.in"
    },
    {
      id: 3,
      name: "Vikash Kumar",
      designation: "Operations Head",
      department: "Computer Science",
      year: "2nd Year",
      contribution: "Manages day-to-day operations, resource allocation, and ensures smooth functioning of all team activities and logistics.",
      bio: "Despite being a second-year student, Vikash has shown exceptional organizational skills and operational excellence. He ensures that all team activities run smoothly and efficiently, making him an invaluable asset to Team Garuda.",
      achievements: [
        "Operational Excellence Award 2023",
        "Most Organized Team Event - Tech Fest 2023",
        "Resource Optimization Champion",
        "Junior Leadership Recognition"
      ],
      skills: ["Operations Management", "Resource Planning", "Data Analytics", "Process Optimization"],
      responsibilities: [
        "Daily operations and logistics management",
        "Resource allocation and budget planning",
        "Event coordination and scheduling",
        "Performance monitoring and reporting"
      ],
      image: "/placeholder-head3.jpg",
      contact: "vikash.ops@rgukt.ac.in"
    },
    {
      id: 4,
      name: "Sneha Patel",
      designation: "Design Head",
      department: "Mechanical Engineering",
      year: "3rd Year",
      contribution: "Leads the design and aesthetics team, ensures all projects meet design excellence standards, and coordinates with manufacturing teams.",
      bio: "Sneha combines technical expertise with creative vision to create designs that are both functional and aesthetically pleasing. Her attention to detail and innovative approach have set new standards for design excellence in Team Garuda.",
      achievements: [
        "Best Design Award - National Competition 2023",
        "Creative Excellence Recognition",
        "Design Innovation Patent Filed",
        "Featured Designer in Engineering Magazine"
      ],
      skills: ["3D Design", "CAD/CAM", "Aesthetic Design", "Manufacturing"],
      responsibilities: [
        "Design strategy and creative direction",
        "3D modeling and simulation oversight",
        "Design-manufacturing coordination",
        "Aesthetic and functional design integration"
      ],
      image: "/placeholder-head4.jpg",
      contact: "sneha.design@rgukt.ac.in"
    }
  ];

  return (
    <section id="heads" className="py-10 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated Title Block */}
        <div className="text-center mb-8">
           <div className="flex items-center justify-center mb-4">
            {/* <Crown className="h-10 w-10 sm:h-12 sm:w-12 text-accent mr-3 sm:mr-4" /> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat">
              <span className="bg-gradient-to-b from-[#FFD700] to-white bg-clip-text text-transparent"> Administration </span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders who drive our team towards excellence and innovation
          </p>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted">
            {heads.map((head) => (
              <div
                key={head.id}
                className="flex-shrink-0 w-80 card-tech cursor-pointer group"
                onClick={() => setSelectedHead(head)}
              >
                <div className="space-y-4">
                  <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden shadow-md border border-border">
                    <img
                      src={vchandrasekhar}
                      alt="Head Icon"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {head.name}
                    </h3>
                    <p className="text-accent font-bold text-lg">{head.designation}</p>
                    <p className="text-sm text-muted-foreground">{head.department}</p>
                    <p className="text-xs text-primary font-semibold">{head.year}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {head.skills.slice(0, 2).map((skill, index) => (
                      <span key={index} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                    {head.skills.length > 2 && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        +{head.skills.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-muted-foreground line-clamp-3">{head.contribution}</p>
                  </div>

                  <div className="text-center pt-2">
                    <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-foreground">
                        {head.achievements.length} achievements
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={!!selectedHead} onOpenChange={() => setSelectedHead(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {selectedHead?.name} - {selectedHead?.designation}
            </DialogTitle>
          </DialogHeader>

          {selectedHead && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-md border border-border mb-4">
                    <img
                      src={vchandrasekhar}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{selectedHead.name}</h3>
                  <p className="text-accent font-bold text-lg">{selectedHead.designation}</p>
                  <p className="text-sm text-muted-foreground">{selectedHead.department}</p>
                  <p className="text-xs text-primary font-semibold">{selectedHead.year}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Contact</span>
                    <p className="text-sm text-foreground">{selectedHead.contact}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Biography</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedHead.bio}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {selectedHead.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedHead.skills.map((skill, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Major Achievements</h4>
                  <ul className="space-y-2">
                    {selectedHead.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${selectedHead.contact}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" className="w-full">
                      Connect with {selectedHead.name}
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

export default HeadsSection;

