import AboutSection from "./_components/home/about-section";
import ContactSection from "./_components/home/contact-section";
import HeroSection from "./_components/home/hero-section";
import ProjectsSection from "./_components/home/projects-section";
import QuoteSection from "./_components/home/quote-section";
import Skills from "./_components/skills";

export default function Home() {
  return (
    <main className="pt-10 mx-3">
      <HeroSection />
      <QuoteSection />
      <ProjectsSection />
      <Skills />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
