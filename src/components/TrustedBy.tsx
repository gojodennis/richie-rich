export default function TrustedBy() {
  const logos = [
    { name: "Spotify", icon: "Spotify" },
    { name: "Coinbase", icon: "coinbase" },
    { name: "Slack", icon: "slack" },
    { name: "Dropbox", icon: "Dropbox" },
    { name: "Zoom", icon: "zoom" },
    { name: "Webflow", icon: "Webflow" }
  ];

  return (
    <section className="py-12 border-t border-b border-border/50 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted font-medium mb-8">
          Trusted by 4,000+ People Richer Than You
        </p>

        {/* Desktop: Static Centered */}
        <div className="hidden md:flex justify-center items-center gap-12 lg:gap-16 opacity-60 grayscale">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-tighter">{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Mobile: Infinite Marquee */}
        <div className="md:hidden overflow-hidden relative w-full flex">
          <div className="flex w-max animate-marquee gap-10 opacity-60 grayscale">
            {[...logos, ...logos].map((logo, i) => (
              <div key={`${logo.name}-${i}`} className="flex items-center gap-2 px-4">
                <span className="text-xl font-bold text-white tracking-tighter">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
