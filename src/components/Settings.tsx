
import React from 'react';
import { User, Key, Bell, Palette, Shield, CreditCard, Github, Linkedin, Twitter, FileText } from 'lucide-react';

const Settings = () => {
  const connectedAccounts = [
    { name: 'GitHub', icon: Github, connected: true, color: 'text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, connected: true, color: 'text-blue-400' },
    { name: 'Twitter', icon: Twitter, connected: false, color: 'text-cyan-400' },
    { name: 'Medium', icon: FileText, connected: true, color: 'text-green-400' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings ⚙️</h1>
        <p className="text-gray-400">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold text-white">Profile Settings</h2>
            </div>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">John Doe</h3>
                <p className="text-gray-400 mb-2">john.doe@example.com</p>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all">
                  Change Avatar
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                <input 
                  type="text" 
                  defaultValue="John"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-purple-500 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                <input 
                  type="text" 
                  defaultValue="Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-purple-500 focus:outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                <textarea 
                  defaultValue="Full-stack developer passionate about AI and automation"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-purple-500 focus:outline-none transition-all h-24 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Connected Accounts */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Key className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Connected Accounts</h2>
            </div>
            
            <div className="space-y-4">
              {connectedAccounts.map((account, index) => {
                const Icon = account.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all animate-float" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-center gap-3">
                      <Icon className={`w-6 h-6 ${account.color}`} />
                      <div>
                        <p className="font-semibold text-white">{account.name}</p>
                        <p className="text-sm text-gray-400">
                          {account.connected ? 'Connected' : 'Not connected'}
                        </p>
                      </div>
                    </div>
                    <button className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      account.connected 
                        ? 'bg-red-500/20 text-red-300 hover:bg-red-500/30' 
                        : 'bg-green-500/20 text-green-300 hover:bg-green-500/30'
                    }`}>
                      {account.connected ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preferences */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="w-5 h-5 text-pink-400" />
              <h2 className="text-xl font-bold text-white">Content Preferences</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Default Tone</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-purple-500 focus:outline-none">
                  <option>Professional</option>
                  <option>Casual</option>
                  <option>Technical</option>
                  <option>Creative</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Default Platforms</label>
                <div className="grid grid-cols-2 gap-2">
                  {connectedAccounts.map((platform) => (
                    <label key={platform.name} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all cursor-pointer">
                      <input type="checkbox" defaultChecked={platform.connected} className="rounded" />
                      <span className="text-white text-sm">{platform.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Usage & Billing */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <CreditCard className="w-5 h-5 text-green-400" />
              <h2 className="text-lg font-bold text-white">Usage & Billing</h2>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Pro Plan</span>
                  <span className="text-purple-400 font-semibold">$9/month</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">Next billing: Dec 29, 2024</p>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition-all">
                  Manage Plan
                </button>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">AI Credits</span>
                  <span className="text-white">750/1000</span>
                </div>
                <div className="bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Bell className="w-5 h-5 text-yellow-400" />
              <h2 className="text-lg font-bold text-white">Notifications</h2>
            </div>
            
            <div className="space-y-3">
              {[
                'Email notifications',
                'Push notifications',
                'Weekly reports',
                'Automation alerts',
                'Billing updates'
              ].map((notification, index) => (
                <label key={index} className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-all cursor-pointer">
                  <span className="text-white text-sm">{notification}</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </label>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-red-400" />
              <h2 className="text-lg font-bold text-white">Security</h2>
            </div>
            
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
                <p className="text-white font-medium">Change Password</p>
                <p className="text-gray-400 text-sm">Update your account password</p>
              </button>
              <button className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
                <p className="text-white font-medium">Two-Factor Auth</p>
                <p className="text-gray-400 text-sm">Add extra security</p>
              </button>
              <button className="w-full text-left p-3 bg-red-500/10 hover:bg-red-500/20 rounded-xl transition-all border border-red-500/20">
                <p className="text-red-300 font-medium">Delete Account</p>
                <p className="text-gray-400 text-sm">Permanently delete your account</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
