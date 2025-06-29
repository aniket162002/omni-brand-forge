
import React from 'react';
import { Bot, Home, Zap, BarChart3, Settings, Store, User, GitBranch } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'composer', label: 'Content Composer', icon: Bot },
    { id: 'automation', label: 'Automation Builder', icon: Zap },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'marketplace', label: 'Agent Marketplace', icon: Store },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 glass-dark z-50 p-6">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center animate-glow">
          <GitBranch className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold gradient-text">OmniForge</h1>
          <p className="text-xs text-gray-400">AI Automation</p>
        </div>
      </div>

      {/* User Profile */}
      <div className="glass rounded-xl p-4 mb-6 animate-float">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-white">John Doe</p>
            <p className="text-xs text-gray-400">Pro Plan</p>
          </div>
        </div>
        <div className="mt-3 bg-gray-800 rounded-full h-2">
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full w-3/4 animate-shimmer"></div>
        </div>
        <p className="text-xs text-gray-400 mt-1">750/1000 AI Credits</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive 
                  ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border border-purple-500/30' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className={`w-5 h-5 transition-all ${isActive ? 'animate-bounce-slow' : 'group-hover:scale-110'}`} />
              <span className="font-medium">{item.label}</span>
              {isActive && <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>}
            </button>
          );
        })}
      </nav>

      {/* Bottom Action */}
      <div className="absolute bottom-6 left-6 right-6">
        <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 animate-glow">
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
