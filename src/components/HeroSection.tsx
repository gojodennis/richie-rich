import DashboardMockup from "./DashboardMockup";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-accent/15 rounded-full blur-[120px] pointer-events-none -z-10 mt-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Pill Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border backdrop-blur-sm mb-8 hover:border-accent/30 transition-colors cursor-default">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <span className="text-xs font-medium text-muted">Manage Your Hoard</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          Finance That Grows Faster Than Your Ego
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Unlock unreasonably powerful tools to track, hoard, and swim in your money like a cartoon duck.
          <br className="hidden md:block" /> We built this because we were tired of peasant apps.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(249,115,22,0.25)] active:translate-y-0 text-sm">
            Get Rich Free
          </button>
          <button className="group w-full sm:w-auto px-6 py-3 rounded-lg bg-surface hover:bg-border text-white font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-sm border border-border flex items-center justify-center gap-2">
            <span className="text-accent group-hover:scale-110 transition-transform">▶</span> Watch Us Flex
          </button>
        </div>

        {/* Dashboard Mockup - with subtle floating delight */}
        <div className="animate-[float_6s_ease-in-out_infinite]">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
