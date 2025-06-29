
import React from 'react';
import { Bot, Star, Download, Zap, Code, FileText, Briefcase, MessageSquare } from 'lucide-react';

const Marketplace = () => {
  const featuredAgents = [
    {
      id: '1',
      name: 'Bug Explainer Pro',
      description: 'Automatically explains GitHub issues and suggests fixes',
      icon: Code,
      color: 'from-red-500 to-orange-500',
      price: '$9.99',
      rating: 4.8,
      downloads: '2.1K',
      category: 'Development'
    },
    {
      id: '2',
      name: 'Resume AI Writer',
      description: 'Creates professional resumes from your GitHub profile',
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500',
      price: '$14.99',
      rating: 4.9,
      downloads: '1.8K',
      category: 'Career'
    },
    {
      id: '3',
      name: 'Content Optimizer',
      description: 'Optimizes your posts for maximum engagement',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      price: '$7.99',
      rating: 4.7,
      downloads: '3.2K',
      category: 'Marketing'
    },
    {
      id: '4',
      name: 'Documentation Bot',
      description: 'Generates comprehensive docs from your code',
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      price: '$12.99',
      rating: 4.6,
      downloads: '1.5K',
      category: 'Development'
    },
    {
      id: '5',
      name: 'Social Media Scheduler',
      description: 'AI-powered optimal timing for your posts',
      icon: MessageSquare,
      color: 'from-yellow-500 to-orange-500',
      price: '$5.99',
      rating: 4.5,
      downloads: '2.8K',
      category: 'Social Media'
    },
    {
      id: '6',
      name: 'Code Review Assistant',
      description: 'Provides detailed code reviews and suggestions',
      icon: Bot,
      color: 'from-indigo-500 to-purple-500',
      price: '$19.99',
      rating: 4.9,
      downloads: '987',
      category: 'Development'
    }
  ];

  const categories = ['All', 'Development', 'Marketing', 'Career', 'Social Media'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredAgents = selectedCategory === 'All' 
    ? featuredAgents 
    : featuredAgents.filter(agent => agent.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Agent Marketplace 🤖</h1>
          <p className="text-gray-400">Discover powerful AI agents to supercharge your workflow</p>
        </div>
        <div className="flex gap-3">
          <button className="glass px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-all">
            My Agents
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 rounded-xl text-white font-semibold hover:shadow-lg transition-all">
            Submit Agent
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Star className="w-5 h-5 text-yellow-400" />
          <h2 className="text-xl font-bold text-white">Featured Agents</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <div 
                key={agent.id} 
                className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/30 animate-float group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Agent Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${agent.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Agent Info */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{agent.name}</h3>
                    <span className="text-purple-400 font-semibold">{agent.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{agent.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-white">{agent.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">{agent.downloads}</span>
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs">
                    {agent.category}
                  </span>
                  <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all">
                    Install
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* My Installed Agents */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-6">My Installed Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredAgents.slice(0, 4).map((agent, index) => {
            const Icon = agent.icon;
            return (
              <div key={`installed-${agent.id}`} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all animate-float border border-green-500/30" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-12 h-12 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{agent.name}</h3>
                <p className="text-gray-400 text-sm mb-3">Active</p>
                <button className="w-full bg-green-500/20 text-green-300 py-2 rounded-lg text-sm font-semibold hover:bg-green-500/30 transition-all">
                  Configure
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Usage Stats */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-6">Usage Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">24</h3>
            <p className="text-gray-400">Agents Installed</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">1,247</h3>
            <p className="text-gray-400">Tasks Automated</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">4.8</h3>
            <p className="text-gray-400">Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
