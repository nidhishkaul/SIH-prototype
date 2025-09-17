import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, MapPin, GraduationCap, Mail } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GradientButton from '../components/GradientButton';

const IndustryDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('candidates');

  const candidates = [
    {
      id: 1,
      name: 'Sarah Chen',
      university: 'Stanford University',
      major: 'Computer Science',
      gpa: 3.9,
      skills: ['React', 'TypeScript', 'Node.js', 'Python'],
      location: 'Palo Alto, CA',
      match: 96,
      experience: '2 previous internships',
      projects: 3
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      university: 'MIT',
      major: 'Software Engineering',
      gpa: 3.8,
      skills: ['Java', 'Spring Boot', 'AWS', 'Docker'],
      location: 'Boston, MA',
      match: 91,
      experience: '1 previous internship',
      projects: 5
    },
    {
      id: 3,
      name: 'Emily Johnson',
      university: 'UC Berkeley',
      major: 'Data Science',
      gpa: 3.95,
      skills: ['Python', 'R', 'TensorFlow', 'SQL'],
      location: 'Berkeley, CA',
      match: 89,
      experience: 'Research assistant',
      projects: 4
    },
    {
      id: 4,
      name: 'David Kim',
      university: 'CMU',
      major: 'Machine Learning',
      gpa: 3.85,
      skills: ['Python', 'PyTorch', 'C++', 'CUDA'],
      location: 'Pittsburgh, PA',
      match: 87,
      experience: '3 research projects',
      projects: 6
    },
    {
      id: 5,
      name: 'Alex Thompson',
      university: 'Georgia Tech',
      major: 'Computer Science',
      gpa: 3.75,
      skills: ['JavaScript', 'React', 'MongoDB', 'Express'],
      location: 'Atlanta, GA',
      match: 84,
      experience: 'Freelance developer',
      projects: 8
    }
  ];

  const CandidateCard = ({ candidate, index }: { candidate: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {candidate.name}
          </h3>
          <div className="flex items-center text-indigo-600 dark:text-cyan-400 mb-2">
            <GraduationCap className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{candidate.university}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            {candidate.major} • GPA: {candidate.gpa}
          </p>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <MapPin className="h-4 w-4 mr-1" />
            {candidate.location}
          </div>
        </div>
        
        <div className="text-right">
          <div className="flex items-center mb-2">
            <Star className="h-5 w-5 text-amber-500 mr-1" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {candidate.match}%
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full text-white shadow-lg hover:shadow-indigo-500/25"
          >
            <Mail className="h-4 w-4" />
          </motion.button>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">Match Score</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">{candidate.match}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className="h-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${candidate.match}%` }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {candidate.skills.slice(0, 3).map((skill: string) => (
          <span
            key={skill}
            className="px-2 py-1 bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/30 text-indigo-700 dark:text-cyan-300 text-xs rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
        {candidate.skills.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
            +{candidate.skills.length - 3}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-600 dark:text-gray-300">Experience</p>
          <p className="font-medium text-gray-900 dark:text-white">{candidate.experience}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-300">Projects</p>
          <p className="font-medium text-gray-900 dark:text-white">{candidate.projects}</p>
        </div>
      </div>
    </motion.div>
  );

  const PostInternshipForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Post New Internship
      </h2>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Position Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., Frontend Developer Intern"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Department
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., Engineering"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Describe the internship role and responsibilities..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Duration
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option>3 months</option>
              <option>4 months</option>
              <option>6 months</option>
              <option>12 months</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Salary (monthly)
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="$2,500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="San Francisco, CA"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Required Skills (comma-separated)
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="React, TypeScript, Node.js"
          />
        </div>

        <GradientButton type="submit" className="w-full md:w-auto">
          <Plus className="h-5 w-5 mr-2" />
          Post Internship
        </GradientButton>
      </form>
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
              Industry Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage your internship postings and discover top candidates
            </p>
          </motion.div>

          <div className="mb-8">
            <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
              {[
                { id: 'candidates', label: 'Top Candidates' },
                { id: 'post', label: 'Post Internship' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-6 py-3 font-medium text-sm relative ${
                    selectedTab === tab.id
                      ? 'text-indigo-600 dark:text-cyan-400'
                      : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {selectedTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500"
                    />
                  )}
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          {selectedTab === 'candidates' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {candidates.map((candidate, index) => (
                <CandidateCard key={candidate.id} candidate={candidate} index={index} />
              ))}
            </div>
          ) : (
            <PostInternshipForm />
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default IndustryDashboard;