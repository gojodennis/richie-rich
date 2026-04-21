import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange-500/30">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
    </main>
  );
}
