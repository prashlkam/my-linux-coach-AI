
import React from 'react';
import { 
  Terminal, 
  Library, 
  Cpu, 
  MessageSquare, 
  LayoutGrid, 
  Zap,
  Info,
  LogOut,
  ChevronRight
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: { name: string } | null;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, user, onLogout }) => {
  const navItems = [
    { id: 'coach', label: 'AI Coach', icon: MessageSquare },
    { id: 'distros', label: 'Distro Library', icon: Library },
    { id: 'apps', label: 'Software Center', icon: Cpu },
    { id: 'terminal', label: 'Terminal Dojo', icon: Terminal },
    { id: 'social', label: 'The Tavern', icon: LayoutGrid },
    { id: 'pitch', label: 'Why Linux?', icon: Info },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Zap size={24} className="text-white fill-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Linux Coach</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-4">
          <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-xs">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold truncate">{user?.name}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Pro Member</p>
                </div>
              </div>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 w-[65%] shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
            </div>
            <div className="flex justify-between mt-2">
               <span className="text-[10px] text-slate-500">Exp: 650/1000</span>
               <ChevronRight size={12} className="text-slate-600" />
            </div>
          </div>

          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all font-medium"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 text-slate-400 hover:text-slate-100">
              <LayoutGrid size={24} />
            </button>
            <h2 className="text-lg font-semibold capitalize">{activeTab.replace('-', ' ')}</h2>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-full border border-green-500/20 uppercase">System Ready</span>
             </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto p-6 bg-slate-950">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
