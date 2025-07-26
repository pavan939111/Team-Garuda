import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Trophy,
  Users2,
  Handshake,
  Mail,
  Info,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import teamGarudaLogo from '@/assets/team_gurda_photo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { 
      name: 'Achievements', 
      href: '#achievements', 
      icon: <Trophy size={20} className="text-accent" /> 
    },
    { 
      name: 'Mentors', 
      href: '#mentors', 
      icon: <Users2 size={20} className="text-accent" /> 
    },
    { 
      name: 'Sponsorship', 
      href: '#sponsorship', 
      icon: <Handshake size={20} className="text-accent" /> 
    },
    { 
      name: 'Contact', 
      href: '#contact', 
      icon: <Mail size={20} className="text-accent" /> 
    },
    { 
      name: 'About', 
      href: '/about', 
      isRoute: true, 
      icon: <Info size={20} className="text-accent" /> 
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      window.location.href = href;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-elegant'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <img
                src={teamGarudaLogo}
                alt="Team Garuda Logo"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-accent shadow-lg transition-all duration-300 group-hover:border-accent group-hover:shadow-accent-glow"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                <Sparkles size={10} className="text-accent-foreground" />
              </div>
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl font-bold font-montserrat">
              <span className="text-foreground">Team</span>
              <span className="ml-1 bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">Garuda</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.isRoute)}
                className="nav-link px-4 py-2"
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 rounded-lg border border-border/50 hover:bg-secondary/50 transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-foreground" />
              ) : (
                <Menu size={20} className="text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-elegant">
            <div className="container-padding py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.isRoute)}
                  className="flex items-center gap-3 w-full text-left text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-secondary/50 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
