
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import ContentComposer from '../components/ContentComposer';
import AutomationBuilder from '../components/AutomationBuilder';
import Analytics from '../components/Analytics';
import Marketplace from '../components/Marketplace';
import Settings from '../components/Settings';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'composer':
        return <ContentComposer />;
      case 'automation':
        return <AutomationBuilder />;
      case 'analytics':
        return <Analytics />;
      case 'marketplace':
        return <Marketplace />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      {/* Main Content */}
      <div className="ml-64 min-h-screen">
        <div className="p-8">
          {renderActiveSection()}
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 via-transparent to-transparent rounded-full animate-gradient-x"></div>
      </div>
    </div>
  );
};

export default Index;
