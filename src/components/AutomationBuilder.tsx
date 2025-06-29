
import React, { useState } from 'react';
import { Plus, Play, Pause, Trash2, GitBranch, Zap, Bot, Send } from 'lucide-react';

const AutomationBuilder = () => {
  const [workflows, setWorkflows] = useState([
    {
      id: '1',
      name: 'GitHub to LinkedIn',
      trigger: 'GitHub Push',
      actions: ['AI Summary', 'LinkedIn Post'],
      status: 'active',
      runs: 247
    },
    {
      id: '2', 
      name: 'Blog to Social Media',
      trigger: 'New Blog Post',
      actions: ['Generate Image', 'Multi-Platform Post'],
      status: 'paused',
      runs: 89
    }
  ]);

  const triggers = [
    { id: 'github-push', name: 'GitHub Push', icon: GitBranch, color: 'text-gray-400' },
    { id: 'new-blog', name: 'New Blog Post', icon: Send, color: 'text-green-400' },
    { id: 'schedule', name: 'Schedule', icon: Zap, color: 'text-yellow-400' },
  ];

  const actions = [
    { id: 'ai-summary', name: 'AI Summary', icon: Bot, color: 'text-purple-400' },
    { id: 'generate-image', name: 'Generate Image', icon: Bot, color: 'text-cyan-400' },
    { id: 'post-linkedin', name: 'Post to LinkedIn', icon: Send, color: 'text-blue-400' },
    { id: 'post-twitter', name: 'Post to Twitter', icon: Send, color: 'text-cyan-400' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Automation Builder ⚡</h1>
          <p className="text-gray-400">Create powerful workflows to automate your content</p>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 rounded-xl text-white font-semibold hover:shadow-lg transition-all flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Workflow
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Workflow List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Active Workflows</h2>
            <div className="space-y-4">
              {workflows.map((workflow, index) => (
                <div key={workflow.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all animate-float border border-white/10" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${workflow.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                      <h3 className="font-semibold text-white">{workflow.name}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
                        {workflow.status === 'active' ? <Pause className="w-4 h-4 text-yellow-400" /> : <Play className="w-4 h-4 text-green-400" />}
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Workflow Visualization */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-sm border border-blue-500/30">
                      {workflow.trigger}
                    </div>
                    <div className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                    {workflow.actions.map((action, actionIndex) => (
                      <React.Fragment key={actionIndex}>
                        <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm border border-purple-500/30">
                          {action}
                        </div>
                        {actionIndex < workflow.actions.length - 1 && (
                          <div className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">{workflow.runs} successful runs</span>
                    <span className={`px-2 py-1 rounded-lg text-xs ${workflow.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-gray-500/20 text-gray-300'}`}>
                      {workflow.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workflow Builder */}
        <div className="space-y-6">
          {/* Triggers */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Triggers</h3>
            <div className="space-y-2">
              {triggers.map((trigger) => {
                const Icon = trigger.icon;
                return (
                  <div
                    key={trigger.id}
                    draggable
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-move border border-white/10 hover:border-purple-500/30"
                  >
                    <Icon className={`w-5 h-5 ${trigger.color}`} />
                    <span className="text-white font-medium">{trigger.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Actions</h3>
            <div className="space-y-2">
              {actions.map((action) => {
                const Icon = action.icon;
                return (
                  <div
                    key={action.id}
                    draggable
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-move border border-white/10 hover:border-cyan-500/30"
                  >
                    <Icon className={`w-5 h-5 ${action.color}`} />
                    <span className="text-white font-medium">{action.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Active Workflows</span>
                <span className="text-white font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Runs</span>
                <span className="text-white font-semibold">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Success Rate</span>
                <span className="text-green-400 font-semibold">98.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationBuilder;
