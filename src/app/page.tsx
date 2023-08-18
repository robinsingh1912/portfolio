import AboutSection from '@/components/AboutSection/AboutSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import EducationSection from '@/components/EducationSection/EducationSection';
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Navbar />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
