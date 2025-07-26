import { useState } from 'react';
import { Github, Linkedin, Mail, User, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  year: string;
  department: string;
  skills: string[];
  bio: string;
  contribution: string;
  achievements: string[];
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamsSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Arjun Reddy",
      role: "Lead Engineer",
      year: "4th Year",
      department: "Mechanical Engineering",
      skills: ["CAD Design", "Manufacturing", "Project Management"],
      bio: "Passionate about automotive engineering and sustainable transportation. Leading the mechanical design and fabrication aspects of our go-kart project.",
      contribution: "Designed the chassis and suspension system, managed the fabrication process, and coordinated team activities.",
      achievements: ["Best Design Award 2023", "Leadership Excellence", "Technical Innovation"],
      image: "/placeholder-member1.jpg",
      social: {
        github: "github.com/arjunreddy",
        linkedin: "linkedin.com/in/arjunreddy",
        email: "mahipavan04@gmail.com"
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Electronics Lead",
      year: "3rd Year",
      department: "Electrical Engineering",
      skills: ["Circuit Design", "Programming", "IoT"],
      bio: "Expert in electrical systems and IoT integration. Responsible for all electronic components and smart features of our vehicles.",
      contribution: "Developed the electrical system, implemented telemetry, and created the dashboard interface.",
      achievements: ["Innovation Award 2023", "Best Technical Paper", "Outstanding Performance"],
      image: "/placeholder-member2.jpg",
      social: {
        github: "github.com/priyasharma",
        linkedin: "linkedin.com/in/priyasharma",
        email: "priya.sharma@rgukt.ac.in"
      }
    },
    {
      id: 3,
      name: "Vikash Kumar",
      role: "Software Developer",
      year: "2nd Year",
      department: "Computer Science",
      skills: ["Python", "Data Analysis", "AI/ML"],
      bio: "Software enthusiast working on data analytics and performance optimization systems for our racing vehicles.",
      contribution: "Created performance monitoring software, data analytics dashboard, and AI-driven optimization algorithms.",
      achievements: ["Coding Excellence", "Data Science Champion", "Team Player"],
      image: "/placeholder-member3.jpg",
      social: {
        github: "github.com/vikashkumar",
        linkedin: "linkedin.com/in/vikashkumar",
        email: "vikash.kumar@rgukt.ac.in"
      }
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Design Specialist",
      year: "3rd Year",
      department: "Mechanical Engineering",
      skills: ["3D Modeling", "Simulation", "Testing"],
      bio: "Creative designer with expertise in 3D modeling and simulation. Ensures our designs are both functional and aesthetically pleasing.",
      contribution: "Created 3D models, performed simulations, and conducted extensive testing of vehicle components.",
      achievements: ["Design Excellence", "Innovation Recognition", "Quality Assurance"],
      image: "/placeholder-member4.jpg",
      social: {
        github: "github.com/snehapatel",
        linkedin: "linkedin.com/in/snehapatel",
        email: "sneha.patel@rgukt.ac.in"
      }
    },
    {
      id: 5,
      name: "Rohit Verma",
      role: "Manufacturing Lead",
      year: "4th Year",
      department: "Mechanical Engineering",
      skills: ["Manufacturing", "Quality Control", "Assembly"],
      bio: "Manufacturing expert ensuring precision and quality in every component. Oversees the entire production process.",
      contribution: "Managed manufacturing processes, quality control, and final assembly of the go-kart.",
      achievements: ["Manufacturing Excellence", "Quality Leadership", "Process Innovation"],
      image: "/placeholder-member5.jpg",
      social: {
        github: "github.com/rohitverma",
        linkedin: "linkedin.com/in/rohitverma",
        email: "rohit.verma@rgukt.ac.in"
      }
    }
  ];

  const getIcon = (role: string) => {
    return <User className="h-8 w-8 text-primary" />;
  };

  return (
    <section id="teams" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-accent mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat">
              Our <span className="bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">Team</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation and excellence in our go-kart project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="card-tech cursor-pointer group"
              onClick={() => setSelectedMember(member)}
            >
              <div className="space-y-4">
                <div className="relative">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                    {getIcon(member.role)}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-accent-foreground">{member.year[0]}</span>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.department}</p>
                  <p className="text-xs text-accent font-semibold">{member.year}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.slice(0, 2).map((skill, index) => (
                    <span key={index} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 2 && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      +{member.skills.length - 2} more
                    </span>
                  )}
                </div>
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.social.github && (
                    <Github className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                  {member.social.linkedin && (
                    <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                  {member.social.email && (
                    <Mail className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">{selectedMember?.name}</DialogTitle>
          </DialogHeader>

          {selectedMember && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                    {getIcon(selectedMember.role)}
                  </div>
                  <h3 className="text-xl font-semibold">{selectedMember.name}</h3>
                  <p className="text-primary font-medium">{selectedMember.role}</p>
                  <p className="text-sm text-muted-foreground">{selectedMember.department}</p>
                  <p className="text-xs text-accent font-semibold">{selectedMember.year}</p>
                </div>

                <div className="flex justify-center space-x-4">
                  {selectedMember.social.github && (
                    <a href={`https://${selectedMember.social.github}`} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                  {selectedMember.social.linkedin && (
                    <a href={`https://${selectedMember.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                  {selectedMember.social.email && (
                    <a href={`mailto:${selectedMember.social.email}`}>
                      <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">About</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Contribution</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedMember.contribution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Achievements</h4>
                  <ul className="space-y-1">
                    {selectedMember.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${selectedMember.social.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" className="w-full">
                      Connect with {selectedMember.name}
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

export default TeamsSection;
