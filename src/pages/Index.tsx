import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import LiveUpdatesSection from '@/components/sections/LiveUpdatesSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import EventsSection from '@/components/sections/EventsSection';
import MentorsSection from '@/components/sections/MentorsSection';
import HeadsSection from '@/components/sections/HeadsSection';
import SponsorshipSection from '@/components/sections/SponsorshipSection';
import ContactSection from '@/components/sections/ContactSection';

import DepartmentsSection from '@/components/sections/DepartmentsSection';
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LiveUpdatesSection />
      <AchievementsSection />
      <EventsSection />
      <DepartmentsSection />
      <MentorsSection />
      <HeadsSection />
     
      <SponsorshipSection />
      <ContactSection />
    </div>
  );
};

export default Index;