
import React from 'react';
import { TrendingUp, Eye, Heart, MessageCircle, Share2, Github, Linkedin, Twitter, FileText } from 'lucide-react';

const Analytics = () => {
  const platformData = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      color: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      posts: 45, 
      views: '12.5K', 
      likes: '2.1K', 
      comments: 156,
      growth: '+23%'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      color: 'text-cyan-400',
      bgColor: 'from-cyan-500/20 to-cyan-600/20',
      borderColor: 'border-cyan-500/30',
      posts: 89, 
      views: '8.7K', 
      likes: '1.5K', 
      comments: 89,
      growth: '+18%'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      color: 'text-gray-400',
      bgColor: 'from-gray-500/20 to-gray-600/20',
      borderColor: 'border-gray-500/30',
      posts: 23, 
      views: '5.2K', 
      likes: '890', 
      comments: 45,
      growth: '+31%'
    },
    { 
      name: 'Medium', 
      icon: FileText, 
      color: 'text-green-400',
      bgColor: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
      posts: 12, 
      views: '15.3K', 
      likes: '1.8K', 
      comments: 234,
      growth: '+45%'
    },
  ];

  const timeData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const engagementData = [65, 78, 90, 81, 56, 95];

  const topPosts = [
    {
      title: "How I Built a Full-Stack App in 48 Hours",
      platform: "Medium",
      views: "2.1K",
      engagement: "94%",
      date: "2 days ago"
    },
    {
      title: "React Performance Tips That Actually Work",
      platform: "LinkedIn",
      views: "1.8K",
      engagement: "87%",
      date: "5 days ago"
    },
    {
      title: "Why I Switched from Redux to Zustand",
      platform: "Twitter",
      views: "1.2K",
      engagement: "76%",
      date: "1 week ago"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard 📊</h1>
          <p className="text-gray-400">Track your content performance across all platforms</p>
        </div>
        <div className="flex gap-3">
          <select className="glass px-4 py-2 rounded-xl text-white bg-transparent border border-white/20 focus:border-purple-500 focus:outline-none">
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Platform Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformData.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <div key={index} className={`glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 animate-float border ${platform.borderColor}`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${platform.bgColor} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${platform.color}`} />
                </div>
                <span className="text-green-400 text-sm font-semibold">{platform.growth}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Posts</span>
                  <span className="text-white">{platform.posts}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Views</span>
                  <span className="text-white">{platform.views}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Likes</span>
                  <span className="text-white">{platform.likes}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Engagement Chart */}
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            Engagement Trends
          </h2>
          <div className="h-64 flex items-end justify-between gap-4">
            {engagementData.map((value, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <div className="flex-1 flex items-end">
                  <div 
                    className="w-full bg-gradient-to-t from-purple-500 to-cyan-500 rounded-t-lg animate-pulse-slow transition-all duration-1000 hover:from-cyan-500 hover:to-purple-500"
                    style={{ 
                      height: `${(value / 100) * 200}px`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400">{timeData[index]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Posts */}
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Top Performing Posts</h2>
          <div className="space-y-4">
            {topPosts.map((post, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all animate-float border border-white/10" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="font-semibold text-white mb-2">{post.title}</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">{post.platform}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-white">{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">{post.engagement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-6">Detailed Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">47.2K</h3>
            <p className="text-gray-400 text-sm">Total Views</p>
            <span className="text-green-400 text-xs">+18% from last month</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">8.9K</h3>
            <p className="text-gray-400 text-sm">Total Likes</p>
            <span className="text-green-400 text-xs">+25% from last month</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">1.2K</h3>
            <p className="text-gray-400 text-sm">Comments</p>
            <span className="text-green-400 text-xs">+12% from last month</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow">
              <Share2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">2.1K</h3>
            <p className="text-gray-400 text-sm">Shares</p>
            <span className="text-green-400 text-xs">+31% from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
