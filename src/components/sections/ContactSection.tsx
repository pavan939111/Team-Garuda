import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "teamgaruda@rgukt.ac.in",
      href: "https://mail.google.com/mail/?view=cm&to=teamgaruda@rgukt.ac.in"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    }
  ];

  const teamMembers = [
    {
      name: "Pavan Kumar",
      email: "mahipavan04@gmail.com"
    },
    {
      name: "John Doe",
      email: "johndoe@example.com"
    },
    {
      name: "Priya Reddy",
      email: "priyareddy@example.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate, sponsor, or learn more about our innovations? We'd love to hear from you!
          </p>
        </div>

        {/* General Contact Info */}
        <div className="flex justify-center mb-12">
          <div className="max-w-md space-y-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 card-tech group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-primary group-hover:text-accent transition-colors">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{contact.label}</p>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Team Members */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-6">Contact Our Team</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={`https://mail.google.com/mail/?view=cm&to=${member.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="flex items-center space-x-2">
                  <Send className="h-4 w-4" />
                  <span>Contact {member.name}</span>
                </Button>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground">
              <p>&copy; 2024 Team Garuda, RGUKT Basar. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <span className="text-accent">⚡</span>
              <span>Kunukuntla Pavan Kumar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
