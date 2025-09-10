import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, BarChart3, Users, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import PageTransition from '../components/PageTransition';

const AdminPanel = () => {
  const [weights, setWeights] = useState({
    skills: 40,
    location: 25,
    diversity: 35
  });

  const matchingData = [
    { month: 'Jan', matches: 420 },
    { month: 'Feb', matches: 580 },
    { month: 'Mar', matches: 650 },
    { month: 'Apr', matches: 720 },
    { month: 'May', matches: 890 },
    { month: 'Jun', matches: 1200 }
  ];

  const diversityData = [
    { name: 'Tech', value: 45, color: '#3B82F6' },
    { name: 'Finance', value: 25, color: '#06B6D4' },
    { name: 'Healthcare', value: 20, color: '#F59E0B' },
    { name: 'Other', value: 10, color: '#10B981' }
  ];

  const handleWeightChange = (type: string, value: number) => {
    setWeights(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const WeightSlider = ({ label, value, onChange, color }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    color: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{label}</h3>
        <motion.span
          key={value}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          {value}%
        </motion.span>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, ${color} 0%, ${color} ${value}%, #e5e7eb ${value}%, #e5e7eb 100%)`
          }}
        />
        <motion.div
          className="absolute top-1/2 w-6 h-6 rounded-full shadow-lg transform -translate-y-1/2 pointer-events-none"
          style={{
            backgroundColor: color,
            left: `calc(${value}% - 12px)`,
            boxShadow: `0 0 20px ${color}80`
          }}
          animate={{ 
            boxShadow: `0 0 ${20 + Math.sin(Date.now() / 1000) * 5}px ${color}80` 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );

  const StatCard = ({ icon: Icon, title, value, change, color }: {
    icon: any;
    title: string;
    value: string;
    change: string;
    color: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span className="text-green-500 text-sm font-medium">{change}</span>
      </div>
      <h3 className="text-gray-600 dark:text-gray-300 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
    </motion.div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Admin Panel
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Configure matching algorithms and monitor platform performance
            </p>
          </motion.div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={Users}
              title="Total Users"
              value="15,847"
              change="+12.5%"
              color="from-indigo-600 to-purple-600"
            />
            <StatCard
              icon={TrendingUp}
              title="Successful Matches"
              value="1,203"
              change="+8.3%"
              color="from-green-500 to-emerald-600"
            />
            <StatCard
              icon={BarChart3}
              title="Active Internships"
              value="342"
              change="+5.7%"
              color="from-cyan-500 to-blue-600"
            />
            <StatCard
              icon={Settings}
              title="Platform Health"
              value="98.9%"
              change="+0.2%"
              color="from-amber-500 to-orange-600"
            />
          </div>

          {/* Weight Configuration */}
          <div className="mb-8">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Matching Algorithm Weights
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <WeightSlider
                label="Skills Match"
                value={weights.skills}
                onChange={(value) => handleWeightChange('skills', value)}
                color="#F59E0B"
              />
              <WeightSlider
                label="Location Preference"
                value={weights.location}
                onChange={(value) => handleWeightChange('location', value)}
                color="#F59E0B"
              />
              <WeightSlider
                label="Diversity Factor"
                value={weights.diversity}
                onChange={(value) => handleWeightChange('diversity', value)}
                color="#F59E0B"
              />
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Monthly Matches Trend
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={matchingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="matches"
                    stroke="url(#gradient)"
                    strokeWidth={3}
                    dot={{ fill: '#06B6D4', strokeWidth: 2, r: 6 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Industry Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={diversityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {diversityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center space-x-6 mt-4">
                {diversityData.map((item) => (
                  <div key={item.name} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {item.name} ({item.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AdminPanel;