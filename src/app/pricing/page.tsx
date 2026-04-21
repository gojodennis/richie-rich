import Navbar from "@/components/Navbar";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent/30 pt-32 pb-20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">How Much?</h1>
        <p className="text-muted max-w-2xl mx-auto text-lg mb-12">
          If you have to ask, you can't afford it. Just kidding. We take exactly 0.001% of your net worth daily.
        </p>

        <div className="max-w-md mx-auto bg-surface border border-accent/30 rounded-3xl p-8 hover:shadow-[0_0_50px_rgba(249,115,22,0.15)] transition-shadow">
          <h2 className="text-2xl font-bold mb-4">The "I'm Rich" Tier</h2>
          <div className="text-5xl font-bold text-white mb-6">$10,000 <span className="text-lg text-muted font-normal">/mo</span></div>
          <ul className="text-left space-y-4 mb-8">
            <li className="flex items-center gap-3 text-muted"><span className="text-accent">✓</span> Unlimited offshore accounts</li>
            <li className="flex items-center gap-3 text-muted"><span className="text-accent">✓</span> Private helicopter concierge</li>
            <li className="flex items-center gap-3 text-muted"><span className="text-accent">✓</span> Gold-plated debit card that weighs 2lbs</li>
          </ul>
          <button className="w-full py-4 rounded-xl bg-accent text-white font-bold hover:bg-accent-hover transition-colors">
            Take My Money
          </button>
        </div>
      </div>
    </main>
  );
}
