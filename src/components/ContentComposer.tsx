
import React, { useState } from 'react';
import { Wand2, Image, Send, Github, Linkedin, Twitter, FileText, Sparkles } from 'lucide-react';

const ContentComposer = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState(['linkedin', 'twitter']);
  const [contentStyle, setContentStyle] = useState('professional');
  const [isGenerating, setIsGenerating] = useState(false);

  const platforms = [
    { id: 'github', name: 'GitHub', icon: Github, color: 'text-gray-400' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-400' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'text-cyan-400' },
    { id: 'medium', name: 'Medium', icon: FileText, color: 'text-green-400' },
  ];

  const styles = [
    { id: 'professional', name: 'Professional', desc: 'Formal and business-focused' },
    { id: 'casual', name: 'Casual', desc: 'Friendly and conversational' },
    { id: 'technical', name: 'Technical', desc: 'Developer-focused content' },
    { id: 'creative', name: 'Creative', desc: 'Engaging and artistic' },
  ];

  const generateContent = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  const mockContent = {
    linkedin: "🚀 Just shipped a new feature that reduces API response time by 40%! \n\nHere's what I learned:\n• Caching strategies matter more than you think\n• Database indexing can make or break performance\n• Always measure before optimizing\n\nWhat's your go-to performance optimization technique? 💭\n\n#WebDev #Performance #API",
    twitter: "🔥 New feature deployed!\n\n⚡ 40% faster API responses\n🎯 Better user experience\n📈 Performance optimization wins\n\nSometimes the smallest changes make the biggest impact 💪\n\n#DevLife #WebDev #Performance",
    github: "## Performance Optimization Update\n\nImplemented caching layer and database indexing improvements:\n\n- Reduced average API response time by 40%\n- Improved database query performance\n- Added comprehensive performance monitoring\n\n### Technical Details\n- Redis caching for frequently accessed data\n- Optimized database indexes\n- Query optimization and batching",
    medium: "# How I Reduced API Response Time by 40%: A Developer's Journey\n\nPerformance optimization is often seen as a dark art, but it doesn't have to be. In this article, I'll share the exact steps I took to dramatically improve our API performance...\n\n## The Problem\nOur users were experiencing slow response times, especially during peak hours...\n\n## The Solution\nAfter careful analysis, I identified three key areas for improvement..."
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Content Composer ✨</h1>
          <p className="text-gray-400">Create AI-powered content for all your platforms</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Composer Panel */}
        <div className="space-y-6">
          {/* AI Prompt Input */}
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-purple-400" />
              AI Prompt
            </h2>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to post about... e.g., 'I just deployed a new feature that improves performance by 40%'"
              className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all resize-none"
            />
            <div className="flex gap-2 mt-3">
              <button className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm hover:bg-purple-500/30 transition-all">
                <Github className="w-4 h-4" />
                Import from GitHub
              </button>
              <button className="flex items-center gap-2 px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm hover:bg-cyan-500/30 transition-all">
                <Image className="w-4 h-4" />
                Generate Image
              </button>
            </div>
          </div>

          {/* Content Style */}
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Content Style</h2>
            <div className="grid grid-cols-2 gap-3">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setContentStyle(style.id)}
                  className={`p-3 rounded-xl text-left transition-all ${
                    contentStyle === style.id
                      ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30'
                      : 'bg-white/5 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <p className="font-semibold text-white">{style.name}</p>
                  <p className="text-sm text-gray-400">{style.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Platform Selection */}
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Target Platforms</h2>
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                const isSelected = selectedPlatforms.includes(platform.id);
                return (
                  <button
                    key={platform.id}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform.id));
                      } else {
                        setSelectedPlatforms([...selectedPlatforms, platform.id]);
                      }
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30'
                        : 'bg-white/5 hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${platform.color}`} />
                    <span className="font-medium text-white">{platform.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateContent}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Content
              </>
            )}
          </button>
        </div>

        {/* Preview Panel */}
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Content Preview</h2>
            
            {selectedPlatforms.map((platformId) => {
              const platform = platforms.find(p => p.id === platformId);
              const Icon = platform?.icon;
              const content = mockContent[platformId as keyof typeof mockContent];
              
              return (
                <div key={platformId} className="mb-6 last:mb-0">
                  <div className="flex items-center gap-2 mb-3">
                    {Icon && <Icon className={`w-5 h-5 ${platform.color}`} />}
                    <span className="font-semibold text-white">{platform?.name}</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className={`text-sm ${isGenerating ? 'shimmer' : ''}`}>
                      {isGenerating ? (
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-600 rounded animate-pulse"></div>
                          <div className="h-4 bg-gray-600 rounded animate-pulse w-3/4"></div>
                          <div className="h-4 bg-gray-600 rounded animate-pulse w-1/2"></div>
                        </div>
                      ) : (
                        <pre className="text-gray-300 whitespace-pre-wrap font-sans">
                          {content}
                        </pre>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/10">
                      <span className="text-xs text-gray-400">
                        {content?.length || 0} characters
                      </span>
                      <button className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-sm hover:bg-green-500/30 transition-all">
                        <Send className="w-4 h-4" />
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentComposer;
