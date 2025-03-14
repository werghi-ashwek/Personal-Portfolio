import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactSection from "../sections/Contact";
import ExperienceSection from "../sections/Experience";
import HeroSection from "../sections/Hero";  // Import HeroSection once
import ProjectsSection from "../sections/Projects";
import SkillsSection from "../sections/Skills";  // Import SkillsSection once

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="text-[#E6EDF3]">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection/>
        <ProjectsSection/>
        <ContactSection/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
