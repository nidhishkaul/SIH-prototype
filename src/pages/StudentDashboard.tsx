import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Star, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GradientButton from '../components/GradientButton';

const StudentDashboard = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const recommendations = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      position: 'Frontend Developer Intern',
      location: 'San Francisco, CA',
      duration: '3 months',
      match: 95,
      salary: '$2,500/month',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      whyMatched: 'Your React expertise and UI/UX portfolio perfectly align with their current projects. Your previous work on responsive web applications demonstrates the exact skills they need.'
    },
    {
      id: 2,
      company: 'DataFlow Solutions',
      position: 'Data Science Intern',
      location: 'New York, NY',
      duration: '4 months',
      match: 88,
      salary: '$3,000/month',
      skills: ['Python', 'Machine Learning', 'SQL'],
      whyMatched: 'Your machine learning coursework and Python projects show strong analytical skills. The company values your academic background in statistics.'
    },
    {
      id: 3,
      company: 'GreenTech Startup',
      position: 'Full Stack Developer Intern',
      location: 'Austin, TX',
      duration: '6 months',
      match: 82,
      salary: '$2,800/month',
      skills: ['Node.js', 'React', 'MongoDB'],
      whyMatched: 'Your full-stack experience and interest in sustainability align with their mission. Your GitHub contributions show consistent coding practices.'
    }
  ];

  const handleFileUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const ProgressBar = ({ progress, className = '' }: { progress: number; className?: string }) => (
    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 ${className}`}>
      <motion.div
        className="h-3 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full shadow-lg"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
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
              Student Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Upload your profile and discover your perfect internship matches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Upload Your Profile
                </h2>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-indigo-500 dark:hover:border-cyan-400 transition-colors duration-300"
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Drag and drop your resume, or click to browse
                  </p>
                  <GradientButton onClick={handleFileUpload}>
                    Choose File
                  </GradientButton>
                </motion.div>

                {isUploading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4"
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Uploading... {uploadProgress}%
                    </p>
                    <ProgressBar progress={uploadProgress} />
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Top Recommendations
              </h2>
              
              <div className="space-y-6">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {rec.position}
                        </h3>
                        <p className="text-indigo-600 dark:text-cyan-400 font-medium mb-2">
                          {rec.company}
                        </p>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 space-x-4">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {rec.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {rec.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center mb-2">
                          <Star className="h-5 w-5 text-amber-500 mr-1" />
                          <span className="text-lg font-bold text-gray-900 dark:text-white">
                            {rec.match}%
                          </span>
                        </div>
                        <p className="text-sm font-medium text-green-600 dark:text-green-400">
                          {rec.salary}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Match Score</p>
                      <ProgressBar progress={rec.match} />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {rec.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/30 text-indigo-700 dark:text-cyan-300 text-sm rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      onClick={() => setExpandedCard(expandedCard === rec.id ? null : rec.id)}
                      className="flex items-center text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-300 font-medium text-sm transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      Why matched?
                      {expandedCard === rec.id ? (
                        <ChevronUp className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 ml-1" />
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {expandedCard === rec.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 rounded-lg"
                        >
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            {rec.whyMatched}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default StudentDashboard;