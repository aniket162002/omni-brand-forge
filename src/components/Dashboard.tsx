
import React from 'react';
import { TrendingUp, Users, Zap, DollarSign, Github, Linkedin, Twitter, FileText } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Posts', value: '247', change: '+12%', icon: FileText, color: 'from-blue-500 to-cyan-500' },
    { label: 'Engagement', value: '94.2K', change: '+23%', icon: Users, color: 'from-purple-500 to-pink-500' },
    { label: 'Automations', value: '18', change: '+5%', icon: Zap, color: 'from-green-500 to-teal-500' },
    { label: 'Revenue', value: '$2,847', change: '+18%', icon: DollarSign, color: 'from-orange-500 to-red-500' },
  ];

  const platforms = [
    { name: 'GitHub', posts: 45, engagement: '89%', icon: Github, color: 'text-gray-400' },
    { name: 'LinkedIn', posts: 23, engagement: '94%', icon: Linkedin, color: 'text-blue-400' },
    { name: 'Twitter', posts: 67, engagement: '76%', icon: Twitter, color: 'text-cyan-400' },
    { name: 'Medium', posts: 12, engagement: '91%', icon: FileText, color: 'text-green-400' },
  ];

  const recentActivity = [
    { action: 'Published to LinkedIn', time: '2 minutes ago', status: 'success' },
    { action: 'AI generated blog post', time: '15 minutes ago', status: 'success' },
    { action: 'Scheduled tweet series', time: '1 hour ago', status: 'pending' },
    { action: 'GitHub commit analyzed', time: '2 hours ago', status: 'success' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John! 👋</h1>
          <p className="text-gray-400">Here's what's happening with your automation today.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-all">
            Quick Post
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 rounded-xl text-white font-semibold hover:shadow-lg transition-all">
            New Automation
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 animate-float group" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Platform Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Platform Performance</h2>
          <div className="space-y-4">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all animate-float" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-center gap-3">
                    <Icon className={`w-6 h-6 ${platform.color}`} />
                    <div>
                      <p className="font-semibold text-white">{platform.name}</p>
                      <p className="text-sm text-gray-400">{platform.posts} posts</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{platform.engagement}</p>
                    <p className="text-sm text-gray-400">engagement</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-all animate-float" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-3 h-3 rounded-full ${activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`}></div>
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-gray-400 text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">🤖 AI Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-4">
            <h3 className="font-semibold text-purple-300 mb-2">Optimal Posting Time</h3>
            <p className="text-white">2:30 PM - 4:00 PM</p>
            <p className="text-gray-400 text-sm">Based on your audience analysis</p>
          </div>
          <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-xl p-4">
            <h3 className="font-semibold text-cyan-300 mb-2">Top Performing Content</h3>
            <p className="text-white">Technical tutorials</p>
            <p className="text-gray-400 text-sm">+94% engagement rate</p>
          </div>
          <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-4">
            <h3 className="font-semibold text-green-300 mb-2">Growth Opportunity</h3>
            <p className="text-white">Medium articles</p>
            <p className="text-gray-400 text-sm">Underutilized platform</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
