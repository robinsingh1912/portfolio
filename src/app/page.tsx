import AboutSection from '@/components/AboutSection/AboutSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection';
import HeroSection from '@/components/HeroSection/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
