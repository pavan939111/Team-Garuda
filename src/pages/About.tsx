import { useState } from 'react';
import { ArrowLeft, Calendar, Users, Target, Award, ChevronLeft, ChevronRight, X, Settings, Cpu, Zap, Wrench, BarChart3, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

interface YearData {
  year: string;
  projectName: string;
  description: string;
  teamMembers: TeamMember[];
  timeline: TimelineEvent[];
  challenges: string[];
  learnings: string[];
  achievements: string[];
  teamCards: TeamCard[];
  albumItems: AlbumItem[];
  departments: Department[];
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  contribution: string;
}

interface TeamCard {
  id: number;
  name: string;
  role: string;
  department: string;
  category: string;
  bio: string;
  image: string;
}

interface AlbumItem {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

interface TimelineEvent {
  date: string;
  event: string;
  description: string;
}

interface Department {
  id: number;
  name: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  shortDescription: string;
  fullDescription: string;
  responsibilities: string[];
  technologies: string[];
}

const About = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2023-24');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [showDepartmentModal, setShowDepartmentModal] = useState(false);

  const yearData: YearData[] = [
    {
      year: '2023-24',
      projectName: 'Lightning Bolt EV Go-Kart',
      description: 'Our most advanced electric go-kart featuring AI-assisted steering, regenerative braking, and real-time performance analytics. This project represents the pinnacle of our engineering excellence and innovation.',
      teamMembers: [
        {
          id: 1,
          name: 'Arjun Reddy',
          role: 'Project Lead & Mechanical Engineer',
          image: '/placeholder-member1.jpg',
          contribution: 'Led the mechanical design and oversaw the entire project from conception to completion.'
        },
        {
          id: 2,
          name: 'Priya Sharma',
          role: 'Electronics & Software Engineer',
          image: '/placeholder-member2.jpg',
          contribution: 'Developed the AI-assisted steering system and implemented the telemetry dashboard.'
        },
        {
          id: 3,
          name: 'Vikash Kumar',
          role: 'Data Analytics Specialist',
          image: '/placeholder-member3.jpg',
          contribution: 'Created the performance analytics engine and machine learning algorithms.'
        },
        {
          id: 4,
          name: 'Sneha Patel',
          role: 'Design & Testing Engineer',
          image: '/placeholder-member4.jpg',
          contribution: 'Designed the aerodynamic body and conducted extensive testing protocols.'
        }
      ],
      timeline: [
        {
          date: 'April 2023',
          event: 'Project Initiation',
          description: 'Formed the team and defined project objectives focusing on electric vehicle innovation.'
        },
        {
          date: 'June 2023',
          event: 'Design Phase Completion',
          description: 'Finalized the mechanical design and electrical schematics for the go-kart.'
        },
        {
          date: 'September 2023',
          event: 'Prototype Development',
          description: 'Built and tested the first working prototype with basic functionalities.'
        },
        {
          date: 'November 2023',
          event: 'AI Integration',
          description: 'Successfully integrated AI-assisted steering and telemetry systems.'
        },
        {
          date: 'February 2024',
          event: 'National Championship',
          description: 'Won first place at the National Student Go-Kart Championship.'
        }
      ],
      challenges: [
        'Integrating AI systems with mechanical components while maintaining reliability',
        'Optimizing battery life without compromising performance',
        'Ensuring safety standards while pushing innovation boundaries',
        'Managing project timeline with academic commitments'
      ],
      learnings: [
        'Advanced understanding of electric vehicle technology and AI integration',
        'Project management skills and team coordination in high-pressure environments',
        'Real-world application of theoretical engineering concepts',
        'Importance of iterative testing and continuous improvement'
      ],
      achievements: [
        'First Place - National Student Go-Kart Championship 2024',
        'Innovation Excellence Award for AI Integration',
        'Best Technical Paper at RGUKT Tech Fest 2024',
        'Featured in National Engineering Magazine'
      ],
      departments: [
        {
          id: 1,
          name: 'Mechanical Engineering',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500',
          icon: Settings,
          shortDescription: 'Designing and building the core mechanical systems',
          fullDescription: 'Our Mechanical Engineering department is responsible for the structural design, chassis development, and mechanical systems integration of our go-kart. They ensure optimal performance, safety, and durability through innovative engineering solutions.',
          responsibilities: [
            'Chassis design and structural analysis',
            'Mechanical system integration',
            'Performance optimization',
            'Material selection and testing',
            'Manufacturing process planning'
          ],
          technologies: ['CAD Software', 'FEA Analysis', 'CNC Machining', '3D Printing', 'Welding']
        },
        {
          id: 2,
          name: 'Electronics & Software',
          image: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=500',
          icon: Cpu,
          shortDescription: 'Developing intelligent control systems and software',
          fullDescription: 'The Electronics & Software department develops the brain of our go-kart, creating intelligent control systems, AI-assisted features, and real-time monitoring solutions that give us a competitive edge.',
          responsibilities: [
            'AI algorithm development',
            'Control system programming',
            'Sensor integration',
            'Real-time data processing',
            'User interface development'
          ],
          technologies: ['Python', 'C++', 'Arduino', 'Raspberry Pi', 'Machine Learning', 'IoT']
        },
        {
          id: 3,
          name: 'Power Systems',
          image: 'https://images.pexels.com/photos/1181291/pexels-photo-1181291.jpeg?auto=compress&cs=tinysrgb&w=500',
          icon: Zap,
          shortDescription: 'Managing electrical power and energy systems',
          fullDescription: 'Our Power Systems team focuses on electrical power management, battery optimization, and energy efficiency. They ensure maximum performance while maintaining safety and reliability of all electrical components.',
          responsibilities: [
            'Battery management system design',
            'Power distribution optimization',
            'Motor control systems',
            'Regenerative braking implementation',
            'Electrical safety protocols'
          ],
          technologies: ['Power Electronics', 'Battery Technology', 'Motor Controllers', 'PCB Design', 'Energy Management']
        },
        {
          id: 4,
          name: 'Design & Testing',
          image: 'https://images.pexels.com/photos/1181394/pexels-photo-1181394.jpeg?auto=compress&cs=tinysrgb&w=500',
          icon: Wrench,
          shortDescription: 'Ensuring quality through rigorous testing',
          fullDescription: 'The Design & Testing department ensures our innovations meet the highest standards of performance and safety through comprehensive testing protocols and quality assurance measures.',
          responsibilities: [
            'Aerodynamic design optimization',
            'Performance testing protocols',
            'Safety system validation',
            'Quality assurance processes',
            'Competition compliance verification'
          ],
          technologies: ['Wind Tunnel Testing', 'Data Acquisition', 'Simulation Software', 'Testing Equipment', 'Quality Control']
        },
        {
          id: 5,
          name: 'Data Analytics',
          image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=500',
          icon: BarChart3,
          shortDescription: 'Transforming data into actionable insights',
          fullDescription: 'Our Data Analytics team processes performance data to provide insights that drive continuous improvement and optimization of our go-kart systems.',
          responsibilities: [
            'Performance data analysis',
            'Predictive modeling',
            'Optimization algorithms',
            'Real-time monitoring dashboards',
            'Performance reporting'
          ],
          technologies: ['Python', 'R', 'Machine Learning', 'Data Visualization', 'Statistical Analysis']
        },
        {
          id: 6,
          name: 'Safety & Compliance',
          image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=500',
          icon: Shield,
          shortDescription: 'Ensuring safety standards and regulatory compliance',
          fullDescription: 'The Safety & Compliance department ensures all systems meet safety standards and competition regulations while implementing comprehensive safety protocols.',
          responsibilities: [
            'Safety protocol development',
            'Regulatory compliance verification',
            'Risk assessment and mitigation',
            'Emergency system design',
            'Safety training coordination'
          ],
          technologies: ['Safety Standards', 'Risk Analysis', 'Compliance Testing', 'Emergency Systems', 'Safety Protocols']
        }
      ],
      teamCards: [
        {
          id: 1,
          name: 'Arjun Reddy',
          role: 'Team Lead',
          department: 'Mechanical Engineering',
          category: 'Leadership',
          bio: 'Passionate about sustainable transportation and innovative vehicle design. Leads our mechanical engineering initiatives.',
          image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 2,
          name: 'Priya Sharma',
          role: 'Software Lead',
          department: 'Electronics & Software',
          category: 'Leadership',
          bio: 'Specializes in AI and machine learning applications for automotive systems. Develops cutting-edge software solutions.',
          image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 3,
          name: 'Vikash Kumar',
          role: 'Data Analyst',
          department: 'Data Analytics',
          category: 'Analytics',
          bio: 'Expert in data analytics and performance optimization. Transforms complex data into actionable insights.',
          image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 4,
          name: 'Sneha Patel',
          role: 'Testing Engineer',
          department: 'Design & Testing',
          category: 'Quality Assurance',
          bio: 'Ensures safety and performance standards through rigorous testing and quality assurance protocols.',
          image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 5,
          name: 'Rahul Gupta',
          role: 'Electronics Engineer',
          department: 'Power Systems',
          category: 'Technical',
          bio: 'Designs and implements electronic systems for vehicle control and monitoring applications.',
          image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 6,
          name: 'Anjali Singh',
          role: 'Safety Coordinator',
          department: 'Safety & Compliance',
          category: 'Compliance',
          bio: 'Coordinates safety protocols and ensures compliance with competition regulations and industry standards.',
          image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 7,
          name: 'Kiran Nair',
          role: 'Mechanical Designer',
          department: 'Mechanical Engineering',
          category: 'Design',
          bio: 'Specializes in chassis design and structural optimization for high-performance applications.',
          image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 8,
          name: 'Riya Menon',
          role: 'Control Systems Engineer',
          department: 'Electronics & Software',
          category: 'Technical',
          bio: 'Develops control algorithms and embedded systems for autonomous vehicle features.',
          image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ],
      albumItems: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'Initial Design Phase',
          description: 'Team brainstorming and sketching the initial go-kart design concepts in our workshop.',
          date: 'April 2023'
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1181291/pexels-photo-1181291.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'CAD Modeling Session',
          description: 'Creating detailed 3D models and technical drawings for the chassis and body components.',
          date: 'May 2023'
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'Component Assembly',
          description: 'Assembling the first prototype in our college workshop with precision and attention to detail.',
          date: 'June 2023'
        },
        {
          id: 4,
          image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'Electronics Integration',
          description: 'Installing and testing the electronic control systems and AI-assisted steering components.',
          date: 'July 2023'
        },
        {
          id: 5,
          image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'First Test Drive',
          description: 'Conducting the first test drive of our completed go-kart prototype on the college track.',
          date: 'August 2023'
        },
        {
          id: 6,
          image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'Performance Testing',
          description: 'Running comprehensive performance tests and data collection for optimization.',
          date: 'September 2023'
        },
        {
          id: 7,
          image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'Final Preparations',
          description: 'Making final adjustments and preparations before the national championship competition.',
          date: 'January 2024'
        },
        {
          id: 8,
          image: 'https://images.pexels.com/photos/1181394/pexels-photo-1181394.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'Championship Victory',
          description: 'Celebrating our first place victory at the National Student Go-Kart Championship.',
          date: 'February 2024'
        }
      ]
    },
    {
      year: '2022-23',
      projectName: 'Thunder Racer Mark II',
      description: 'Second iteration of our go-kart design focusing on improved aerodynamics, enhanced safety features, and better performance metrics. This project laid the foundation for our championship-winning design.',
      teamMembers: [
        {
          id: 1,
          name: 'Rohit Verma',
          role: 'Team Captain & Manufacturing Lead',
          image: '/placeholder-member5.jpg',
          contribution: 'Supervised manufacturing processes and quality control for all components.'
        },
        {
          id: 2,
          name: 'Kavya Reddy',
          role: 'Aerodynamics Specialist',
          image: '/placeholder-member6.jpg',
          contribution: 'Designed and optimized the aerodynamic body for improved performance.'
        },
        {
          id: 3,
          name: 'Suresh Kumar',
          role: 'Electrical Systems Engineer',
          image: '/placeholder-member7.jpg',
          contribution: 'Developed the electrical systems and safety mechanisms.'
        }
      ],
      timeline: [
        {
          date: 'March 2022',
          event: 'Project Launch',
          description: 'Started development based on learnings from the previous year.'
        },
        {
          date: 'July 2022',
          event: 'Aerodynamic Testing',
          description: 'Conducted wind tunnel testing for body optimization.'
        },
        {
          date: 'October 2022',
          event: 'Safety Integration',
          description: 'Implemented advanced safety features and emergency systems.'
        },
        {
          date: 'January 2023',
          event: 'Regional Competition',
          description: 'Secured second place in regional engineering competition.'
        }
      ],
      challenges: [
        'Balancing aerodynamic efficiency with structural integrity',
        'Limited budget and resource constraints',
        'Coordinating with multiple suppliers for components',
        'Meeting competition deadlines while ensuring quality'
      ],
      learnings: [
        'Importance of aerodynamic design in vehicle performance',
        'Project planning and resource management',
        'Collaborative problem-solving and team dynamics',
        'Manufacturing processes and quality assurance'
      ],
      achievements: [
        'Second Place - Regional Engineering Competition 2023',
        'Best Design Award for Aerodynamic Innovation',
        'Sustainability Award for Eco-friendly Materials',
        'Selected for State-level Innovation Showcase'
      ],
      departments: [
        {
          id: 1,
          name: 'Mechanical Engineering',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500',
          icon: Settings,
          shortDescription: 'Designing aerodynamic systems and structures',
          fullDescription: 'Our Mechanical Engineering department focused on aerodynamic optimization and structural integrity, developing advanced manufacturing techniques and material selection processes.',
          responsibilities: ['Aerodynamic design', 'Structural analysis', 'Manufacturing planning', 'Material testing'],
          technologies: ['Wind Tunnel Testing', 'CFD Analysis', 'Advanced Materials', 'Precision Manufacturing']
        },
        {
          id: 2,
          name: 'Electrical Systems',
          image: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=500',
          icon: Zap,
          shortDescription: 'Developing reliable electrical systems',
          fullDescription: 'The Electrical Systems department developed robust electrical architecture and safety systems for improved reliability and performance.',
          responsibilities: ['Electrical design', 'Safety systems', 'Power management', 'System integration'],
          technologies: ['Circuit Design', 'Safety Protocols', 'Power Electronics', 'System Testing']
        }
      ],
      teamCards: [
        {
          id: 1,
          name: 'Rohit Verma',
          role: 'Team Captain',
          department: 'Mechanical Engineering',
          category: 'Leadership',
          bio: 'Experienced in manufacturing processes and quality control. Leads our production initiatives.',
          image: 'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 2,
          name: 'Kavya Reddy',
          role: 'Aerodynamics Specialist',
          department: 'Mechanical Engineering',
          category: 'Design',
          bio: 'Expert in fluid dynamics and aerodynamic optimization for high-performance vehicles.',
          image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 3,
          name: 'Suresh Kumar',
          role: 'Electrical Engineer',
          department: 'Electrical Systems',
          category: 'Technical',
          bio: 'Specializes in electrical systems design and safety mechanisms for automotive applications.',
          image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 4,
          name: 'Meera Joshi',
          role: 'Materials Engineer',
          department: 'Mechanical Engineering',
          category: 'Technical',
          bio: 'Focuses on sustainable materials and lightweight composites for vehicle construction.',
          image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ],
      albumItems: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'Project Kickoff',
          description: 'Team meeting to discuss project goals and plan the development roadmap.',
          date: 'March 2022'
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'Aerodynamic Testing',
          description: 'Conducting wind tunnel tests to optimize the body design for better performance.',
          date: 'July 2022'
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'Safety Systems Installation',
          description: 'Installing emergency braking systems and safety features in the prototype.',
          date: 'October 2022'
        },
        {
          id: 4,
          image: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=500',
          title: 'Regional Competition',
          description: 'Participating in the regional engineering competition with our completed design.',
          date: 'January 2023'
        }
      ]
    }
  ];

  const currentYearData = yearData.find(data => data.year === selectedYear) || yearData[0];

  const goBack = () => {
    window.history.back();
  };

  const scrollContainer = (direction: 'left' | 'right', containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = 320; // Adjust based on card width + gap
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollAlbum = (direction: 'left' | 'right', rowIndex: number) => {
    const container = document.getElementById(`album-row-${rowIndex}`);
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openDepartmentModal = (department: Department) => {
    setSelectedDepartment(department);
    setShowDepartmentModal(true);
  };

  const closeDepartmentModal = () => {
    setShowDepartmentModal(false);
    setSelectedDepartment(null);
  };

  const getDepartmentMembers = (departmentName: string) => {
    return currentYearData.teamCards.filter(member => member.department === departmentName);
  };

  const groupTeamByCategory = () => {
    const categories = Array.from(new Set(currentYearData.teamCards.map(member => member.category)));
    return categories.map(category => ({
      category,
      members: currentYearData.teamCards.filter(member => member.category === category)
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      
      <div className="pt-2">
        {/* Header */}
        <div className="bg-gradient-hero py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="ghost" size="icon" onClick={goBack}>
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-montserrat">
                  About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team Garuda</span>
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Our journey through the years of innovation and excellence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Year Selection */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {yearData.map((data) => (
              <Button
                key={data.year}
                variant={selectedYear === data.year ? "hero" : "outline"}
                size="lg"
                onClick={() => setSelectedYear(data.year)}
                className="min-w-32"
              >
                {data.year}
              </Button>
            ))}
          </div>

          {/* Year Content */}
          <div className="space-y-16">
            {/* Project Overview */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-primary">{currentYearData.projectName}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {currentYearData.description}
              </p>
            </div>

            {/* Timeline */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Calendar className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Project Timeline</h3>
              </div>
              
              <div className="space-y-6">
                {currentYearData.timeline.map((event, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                        <span className="text-accent font-semibold">{event.date}</span>
                        <h4 className="text-lg font-semibold">{event.event}</h4>
                      </div>
                      <p className="text-muted-foreground mt-1">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Learnings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-bold">Challenges</h3>
                </div>
                <ul className="space-y-3">
                  {currentYearData.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Key Learnings</h3>
                </div>
                <ul className="space-y-3">
                  {currentYearData.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Achievements {currentYearData.year}
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentYearData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card/50 rounded-lg p-4">
                    <Award className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments Section with Horizontal Scroll */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <Settings className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Our Departments</h3>
                  <p className="text-muted-foreground">Specialized teams driving innovation</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => scrollContainer('left', 'departments-container')}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => scrollContainer('right', 'departments-container')}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div
                id="departments-container"
                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
              >
                {currentYearData.departments.map((department) => (
                  <div 
                    key={department.id} 
                    className="flex-shrink-0 w-80 bg-card rounded-lg border border-border overflow-hidden shadow-elegant hover:shadow-primary/20 transition-all duration-300 cursor-pointer hover:scale-105"
                    onClick={() => openDepartmentModal(department)}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                      <img
                        src={department.image}
                        alt={department.name}
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <department.icon className="h-6 w-6 text-primary" />
                        <h4 className="font-bold text-foreground">{department.name}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">{department.shortDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Album Section */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Calendar className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Project Album</h3>
                <p className="text-muted-foreground">Behind the scenes of our journey</p>
              </div>
              
              <div className="space-y-6">
                {/* First Row */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold">Development Journey</h4>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => scrollAlbum('left', 0)}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => scrollAlbum('right', 0)}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div
                    id="album-row-0"
                    className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
                  >
                    {currentYearData.albumItems.slice(0, Math.ceil(currentYearData.albumItems.length / 2)).map((item) => (
                      <div key={item.id} className="flex-shrink-0 w-80 bg-card rounded-lg border border-border overflow-hidden shadow-elegant hover:shadow-primary/20 transition-shadow">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-foreground">{item.title}</h5>
                            <span className="text-sm text-accent font-medium">{item.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Second Row */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold">Testing & Competition</h4>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => scrollAlbum('left', 1)}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => scrollAlbum('right', 1)}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div
                    id="album-row-1"
                    className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
                  >
                    {currentYearData.albumItems.slice(Math.ceil(currentYearData.albumItems.length / 2)).map((item) => (
                      <div key={item.id} className="flex-shrink-0 w-80 bg-card rounded-lg border border-border overflow-hidden shadow-elegant hover:shadow-primary/20 transition-shadow">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-foreground">{item.title}</h5>
                            <span className="text-sm text-accent font-medium">{item.date}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member Cards - Organized by Category with Horizontal Scroll */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Meet Our Team</h3>
              </div>
              
              <div className="space-y-12">
                {groupTeamByCategory().map((categoryGroup, categoryIndex) => (
                  <div key={categoryGroup.category}>
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-semibold text-center">
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {categoryGroup.category}
                        </span>
                      </h4>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => scrollContainer('left', `team-category-${categoryIndex}`)}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => scrollContainer('right', `team-category-${categoryIndex}`)}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div
                      id={`team-category-${categoryIndex}`}
                      className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                    >
                      {categoryGroup.members.map((member) => (
                        <div key={member.id} className="flex-shrink-0 w-80 bg-card rounded-lg border border-border p-6 shadow-elegant hover:shadow-primary/20 transition-shadow">
                          <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/20">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground">{member.name}</h4>
                              <p className="text-primary font-semibold text-sm">{member.role}</p>
                              <p className="text-accent text-sm">{member.department}</p>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {member.bio}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Modal */}
      {showDepartmentModal && selectedDepartment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-lg border border-border max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <selectedDepartment.icon className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">{selectedDepartment.name}</h2>
                </div>
                <Button variant="ghost" size="icon" onClick={closeDepartmentModal}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Responsive layout for modal content */}
              <div className="flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-6">
                {/* Image section */}
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="w-full max-w-xs md:max-w-[180px] md:h-[140px] aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={selectedDepartment.image}
                      alt={selectedDepartment.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Details section */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About This Department</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedDepartment.fullDescription}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {selectedDepartment.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Technologies & Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedDepartment.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Department Members</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getDepartmentMembers(selectedDepartment.name).map((member) => (
                        <div key={member.id} className="flex items-center space-x-3 bg-background/50 rounded-lg p-3">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{member.name}</h4>
                            <p className="text-primary text-sm">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;