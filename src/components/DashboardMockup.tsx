"use client";

import { 
  Search, Bell, Settings, Moon, Grid, Calendar, Mail, 
  BarChart2, ArrowRightLeft, Download, Plus, MoreHorizontal
} from "lucide-react";

export default function DashboardMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl bg-[#111111] border border-zinc-800 shadow-2xl overflow-hidden mt-16 relative z-10 hidden md:block">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/50 bg-[#111111]">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-accent rounded-md flex items-center justify-center text-white font-bold text-xs">
              R
            </div>
            <span className="text-white font-semibold text-sm">Richie is Rich</span>
          </div>
          <div className="hidden lg:flex space-x-6">
            {["Overview", "Activity", "Manage", "Program", "Account", "Reports"].map((tab) => (
              <span key={tab} className={`text-xs font-medium ${tab === "Overview" ? "text-white" : "text-zinc-500"}`}>
                {tab}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-4 h-4 text-zinc-500" />
          <Bell className="w-4 h-4 text-zinc-500" />
          <Settings className="w-4 h-4 text-zinc-500" />
          <div className="flex items-center gap-2 ml-2 pl-4 border-l border-zinc-800">
            <div className="w-6 h-6 rounded-full bg-zinc-700 overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="text-xs">
              <div className="text-white font-medium">Sajib Rahman</div>
              <div className="text-zinc-500 text-[10px]">sajib.rahman@gmai...</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[500px]">
        {/* Sidebar */}
        <div className="w-16 border-r border-zinc-800/50 flex flex-col items-center py-6 gap-6 bg-[#111111]">
          <Settings className="w-5 h-5 text-zinc-500" />
          <Moon className="w-5 h-5 text-zinc-500 mt-2" />
          <div className="w-8 border-b border-zinc-800 my-2"></div>
          <Grid className="w-5 h-5 text-zinc-500" />
          <Calendar className="w-5 h-5 text-zinc-500" />
          <Mail className="w-5 h-5 text-zinc-500" />
          <BarChart2 className="w-5 h-5 text-zinc-500" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-background/50 overflow-y-auto">
          {/* Greeting */}
          <div className="mb-6">
            <h2 className="text-xl text-white font-semibold mb-1">Good morning, Moneybags</h2>
            <p className="text-xs text-muted">Stay on top of your empire, count your gold, and flex on the haters.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Balance Card */}
            <div className="col-span-1 bg-surface border border-border rounded-xl p-5">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-muted">Total Net Worth (Underestimated)</span>
                <div className="flex items-center gap-1 bg-border/50 px-2 py-1 rounded text-[10px] text-zinc-300">
                  <span>🇺🇸</span> USD
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">$9,999,999.00</div>
              <div className="text-[10px] text-green-500 mb-6">↑ 5% <span className="text-zinc-500">than last month</span></div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#222] hover:bg-zinc-700 text-xs text-white py-2 rounded-lg transition-colors border border-zinc-700">
                  <ArrowRightLeft className="w-3 h-3" /> Transfer
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#222] hover:bg-zinc-700 text-xs text-white py-2 rounded-lg transition-colors border border-zinc-700">
                  <Download className="w-3 h-3" /> Request
                </button>
              </div>
            </div>

            {/* Stat Cards Container */}
            <div className="col-span-1 flex flex-col gap-4">
              <div className="flex-1 bg-[#1c140e] border border-orange-900/30 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-accent">Money Printer Output</span>
                  <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
                    <BarChart2 className="w-3 h-3 text-accent" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">$95,000</div>
                <div className="text-[10px] text-muted"><span className="text-green-500">↑ 200%</span> This month</div>
              </div>
              <div className="flex-1 bg-surface border border-border rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-muted">Impulse Buys (Yachts)</span>
                  <div className="w-6 h-6 rounded bg-border flex items-center justify-center">
                    <BarChart2 className="w-3 h-3 text-muted" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">$7,000</div>
                <div className="text-[10px] text-zinc-500"><span className="text-green-500">↑ 14%</span> This month</div>
              </div>
            </div>

            {/* Chart Card */}
            <div className="col-span-1 bg-surface border border-border rounded-xl p-4">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-xs text-white mb-1">Flexes vs Fumbles</div>
                  <div className="text-[10px] text-muted">Your glorious victories and minor tax evasions</div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-muted mb-4">
                <span>Net Flexing</span>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-accent"></div>Flex</div>
                  <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-zinc-600"></div>Fumble</div>
                </div>
              </div>
              
              {/* CSS Bar Chart */}
              <div className="h-24 flex items-end justify-between gap-1 mt-auto">
                {[40, 60, 30, 80, 50, 70, 40, 90, 60, 45, 70, 55].map((val, i) => (
                  <div key={i} className="w-full flex flex-col gap-1 items-center justify-end h-full">
                    <div 
                      className="w-full bg-orange-500 rounded-t-[2px]" 
                      style={{ height: `${val}%` }}
                    ></div>
                    <div 
                      className="w-full bg-zinc-700 rounded-b-[2px]" 
                      style={{ height: `${val * 0.4}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 px-1">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((m) => (
                  <span key={m} className="text-[8px] text-zinc-500">{m}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
             {/* Wallets */}
             <div className="col-span-1 bg-surface border border-border rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-muted">Offshore Accounts <span className="text-zinc-600 ml-1">Total 600</span></span>
                <MoreHorizontal className="w-4 h-4 text-muted" />
              </div>
              <div className="flex justify-between text-xs">
                <div>
                  <div className="text-muted mb-1 flex items-center gap-1">🇺🇸 Swiss</div>
                  <div className="text-white font-medium">$22.6M</div>
                </div>
                <div className="border-l border-border pl-3">
                  <div className="text-muted mb-1 flex items-center gap-1">🇪🇺 Cayman</div>
                  <div className="text-white font-medium">€18.3M</div>
                </div>
                <div className="border-l border-border pl-3">
                  <div className="text-muted mb-1 flex items-center gap-1">🇬🇧 Mattress</div>
                  <div className="text-white font-medium">£15.0M</div>
                </div>
              </div>
            </div>

            {/* Bottom Stat 1 */}
            <div className="col-span-1 bg-[#161616] border border-zinc-800 rounded-xl p-4 flex justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-zinc-400">Total Income</span>
                  <div className="px-1.5 py-0.5 rounded text-[8px] bg-zinc-800 text-zinc-300">Daily</div>
                </div>
                <div className="text-xl font-bold text-white mb-1">$1,050</div>
                <div className="text-[10px] text-zinc-500"><span className="text-green-500">↑ 10%</span> This month</div>
              </div>
              <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
                <BarChart2 className="w-4 h-4 text-zinc-400" />
              </div>
            </div>

            {/* Bottom Stat 2 */}
            <div className="col-span-1 bg-[#161616] border border-zinc-800 rounded-xl p-4 flex justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-zinc-400">Total Revenue</span>
                  <div className="px-1.5 py-0.5 rounded text-[8px] bg-zinc-800 text-zinc-300">Daily</div>
                </div>
                <div className="text-xl font-bold text-white mb-1">$850</div>
                <div className="text-[10px] text-zinc-500"><span className="text-green-500">↑ 14%</span> This month</div>
              </div>
              <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
                <BarChart2 className="w-4 h-4 text-zinc-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
