import {
  Mail,
  Phone,
  MessageCircle,
  Heart,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "teamgaruda@rgukt.ac.in",
      href: "https://mail.google.com/mail/?view=cm&to=teamgaruda@rgukt.ac.in",
      description: "Send us an email for general inquiries",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      description: "Call us for urgent matters",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      value: "+91 98765 43210",
      href: "https://wa.me/919876543210",
      description: "Chat with us on WhatsApp",
    },
  ];

  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-br from-background via-background to-muted/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
           <div className="flex items-center justify-center mb-4">
            {/* <MessageCircle className="h-10 w-10 sm:h-12 sm:w-12 text-accent mr-3 sm:mr-4" /> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat">
              <span className="bg-gradient-to-b from-[#FFD700] to-white bg-clip-text text-transparent">Contact Us</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate, sponsor, or learn more about our innovations? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4 hover:scale-[1.02]"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-primary group-hover:text-accent transition-colors">
                {contact.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground mb-0.5">
                  {contact.label}
                </p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {contact.value}
                </p>
                <p className="text-xs text-muted-foreground">{contact.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              &copy; 2024 Team Garuda, RGUKT Basar. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent animate-pulse" />
              <span>by</span>
              <span className="text-primary font-medium">Kunukuntla Pavan Kumar</span>
              <Sparkles className="h-4 w-4 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
