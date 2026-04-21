import Navbar from "@/components/Navbar";
import { Server, Lock, Cpu, Zap } from "lucide-react";

export default function Technology() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent/30 pt-32 pb-20">
      <Navbar />
      
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Money Tech</h1>
        <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
          We use highly advanced algorithms (and a guy named Gary) to ensure your money multiplies while you sleep. Don't ask how it works, just enjoy the yacht.
        </p>
      </div>

      {/* The Architecture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center hover:border-accent/30 transition-colors duration-500">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Proprietary Algorithm</h2>
            <p className="text-muted leading-relaxed">
              While other companies rely on "market research" and "diversified portfolios", we've hardcoded success directly into the mainframe. Our proprietary AI (Artificial Inflation) engine guarantees results.*
            </p>
            <p className="text-[10px] text-zinc-600 italic">* Results not guaranteed, but they look great on a chart.</p>
          </div>
          
          {/* Fake Code Block */}
          <div className="flex-1 w-full bg-[#0d0d0d] rounded-2xl border border-zinc-800 p-6 font-mono text-sm shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-yellow-500"></div>
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-zinc-300">
              <code className="block">
                <span className="text-purple-400">class</span> <span className="text-yellow-300">MoneyPrinter</span> {'{'}
              </code>
              <code className="block mt-2 pl-4">
                <span className="text-purple-400">async</span> <span className="text-blue-300">generateWealth</span>(user: <span className="text-green-300">Billionaire</span>) {'{'}
              </code>
              <code className="block mt-2 pl-8 opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="text-zinc-500">// Skip the legal stuff</span>
              </code>
              <code className="block pl-8">
                <span className="text-purple-400">while</span> (<span className="text-orange-300">true</span>) {'{'}
              </code>
              <code className="block pl-12">
                user.<span className="text-blue-300">netWorth</span> += <span className="text-orange-300">1000000</span>;
              </code>
              <code className="block pl-12">
                <span className="text-purple-400">await</span> <span className="text-blue-300">hideFromIRS</span>();
              </code>
              <code className="block pl-8">
                {'}'}
              </code>
              <code className="block pl-4">
                {'}'}
              </code>
              <code className="block">
                {'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">The Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Server, title: "Swiss Servers", desc: "Our data centers are located inside an impenetrable mountain vault." },
            { icon: Lock, title: "Military-Grade Secrecy", desc: "Not even we know what your password is. Or where your money is." },
            { icon: Zap, title: "Zero-Latency Trades", desc: "We physically bribed the fiber optic cables to move your data faster." },
            { icon: Cpu, title: "Quantum Buzzwords", desc: "We use machine learning, blockchain, and synergy to justify our fees." }
          ].map((item, i) => (
            <div key={i} className="bg-surface border border-border rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:border-accent/50 group">
              <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-accent/10 group-hover:text-accent">
                <item.icon className="w-6 h-6 text-muted group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
