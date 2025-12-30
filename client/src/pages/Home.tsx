/*
  Design Philosophy: Cyberpunk Visual Impact
  Main landing page combining all sections with smooth scroll behavior
*/

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
