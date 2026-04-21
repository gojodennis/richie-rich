import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";

export default function Features() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent/30 pt-32 pb-20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight mb-6">Flex Features</h1>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          Because when you have this much money, you shouldn't have to lift a finger (unless it's to sip a martini).
        </p>
      </div>
      <FeaturesSection />
    </main>
  );
}
