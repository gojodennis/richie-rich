import { CreditCard, CalendarClock, Globe } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Finance for the Modern Megalomaniac
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Tailored financial tools designed to automate your wealth so you can spend more time on your yacht
            <br className="hidden md:block" /> and less time worrying about peasant problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div className="group bg-surface rounded-3xl border border-border p-8 hover:border-accent/40 transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:shadow-[0_8px_30px_rgba(249,115,22,0.05)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="mb-4 text-white font-semibold text-xl">Take Their Money Any Way They Have It</div>
            <p className="text-sm text-muted mb-8 flex-1 leading-relaxed">
              Connect effortlessly with any payment gateway. We don't care if they pay in Apple Pay, Stripe, or solid gold bars, just get the cash.
            </p>

            <div className="bg-background rounded-2xl p-6 border border-border/50 relative overflow-hidden flex justify-center items-center h-48 mt-auto">
              {/* Payment Gateway Visual */}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 bottom-0 h-1/3 mt-auto pointer-events-none"></div>
              
              <div className="grid grid-cols-3 gap-4 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <div className="w-12 h-8 bg-surface rounded-lg flex items-center justify-center text-[10px] text-muted">Pay</div>
                <div className="w-12 h-8 bg-surface rounded-lg flex items-center justify-center text-[10px] text-muted">Apple</div>
                <div className="w-12 h-8 bg-surface rounded-lg flex items-center justify-center text-[10px] text-muted">GPay</div>
                <div className="w-12 h-8 bg-surface rounded-lg flex items-center justify-center text-[10px] text-muted">Card</div>
                <div className="w-12 h-8 bg-surface rounded-lg flex items-center justify-center text-[10px] text-muted">Stripe</div>
                <div className="w-12 h-8 bg-surface rounded-lg flex items-center justify-center text-[10px] text-muted">PayPal</div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)] z-20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="group bg-surface rounded-3xl border border-border p-8 hover:border-accent/40 transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:shadow-[0_8px_30px_rgba(249,115,22,0.05)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="mb-4 text-white font-semibold text-xl">Pay Your Minions Automatically</div>
            <p className="text-sm text-muted mb-8 flex-1 leading-relaxed">
              Schedule payments in advance so your personal chefs and yacht captains get paid while you're busy sleeping in.
            </p>

            <div className="bg-background rounded-2xl p-6 border border-border/50 relative flex justify-center items-center h-48 mt-auto overflow-hidden">
              {/* Circular Connection Diagram Visual */}
              <div className="relative w-full h-full max-w-[200px] group-hover:scale-105 transition-transform duration-700 ease-out-expo">
                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-surface border-2 border-accent rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>
                
                {/* Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-60 transition-opacity duration-500" style={{ zIndex: 0 }}>
                  <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                  <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                  <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                  <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                </svg>
                
                {/* Satellite Nodes */}
                <div className="absolute top-[10%] left-[10%] w-8 h-8 rounded-full overflow-hidden border border-border group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
                  <img src="https://i.pravatar.cc/100?img=12" alt="Avatar" />
                </div>
                <div className="absolute top-[10%] right-[10%] w-8 h-8 rounded-full overflow-hidden border border-border group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
                  <img src="https://i.pravatar.cc/100?img=33" alt="Avatar" />
                </div>
                <div className="absolute bottom-[10%] left-[10%] w-8 h-8 rounded-full overflow-hidden border border-border group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-500">
                  <img src="https://i.pravatar.cc/100?img=44" alt="Avatar" />
                </div>
                <div className="absolute bottom-[10%] right-[10%] w-8 h-8 rounded-full overflow-hidden border border-border group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500">
                  <img src="https://i.pravatar.cc/100?img=55" alt="Avatar" />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="group bg-surface rounded-3xl border border-border p-8 hover:border-accent/40 transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:shadow-[0_8px_30px_rgba(249,115,22,0.05)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="mb-4 text-white font-semibold text-xl">Move Ungodly Amounts of Cash</div>
            <p className="text-sm text-muted mb-8 flex-1 leading-relaxed">
              Send and receive money anytime, anywhere, without those annoying 'fraud alerts' poor people deal with.
            </p>

            <div className="bg-background rounded-2xl p-4 border border-border/50 flex flex-col gap-3 h-48 mt-auto justify-center">
              {/* Recipients List Visual */}
              {[
                { name: "Arjun Malik", email: "arjun.malik@example.com", status: "Approved", color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20", img: "11" },
                { name: "Ravi Kumar", email: "ravi.kumar@example.com", status: "Approved", color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20", img: "13" },
                { name: "Dev Patel", email: "dev.patel@example.com", status: "Pending", color: "text-accent", bg: "bg-accent/10", border: "border-accent/20", img: "15" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center justify-between bg-surface rounded-xl p-2.5 border border-border/50 hover:bg-border/30 transition-colors duration-300 transform group-hover:translate-x-${(i+1)*2} delay-${i*100}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${item.img}`} alt={item.name} />
                    </div>
                    <div>
                      <div className="text-white text-[10px] font-medium">{item.name}</div>
                      <div className="text-muted text-[8px]">{item.email}</div>
                    </div>
                  </div>
                  <div className={`text-[8px] px-2.5 py-1 rounded-full border ${item.color} ${item.bg} ${item.border}`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
