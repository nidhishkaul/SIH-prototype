import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Users, Building, Award, Brain, Scale, Zap, Settings, Upload, TrendingUp, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedCounter from '../components/AnimatedCounter';
import GradientButton from '../components/GradientButton';

const Home = () => {
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const showcaseRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: true });
  const howItWorksInView = useInView(howItWorksRef, { once: true });
  const showcaseInView = useInView(showcaseRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const stats = [
    { label: 'Students Matched', value: 15000, suffix: '+', icon: Users },
    { label: 'Partner Companies', value: 500, suffix: '+', icon: Building },
    { label: 'Success Rate', value: 95, suffix: '%', icon: Award },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI Matching Engine',
      description: 'Advanced machine learning algorithms analyze skills, preferences, and career goals to create perfect matches.',
      color: 'from-indigo-600 to-purple-600',
      animation: 'rotate'
    },
    {
      icon: Scale,
      title: 'Fairness & Diversity',
      description: 'Built-in affirmative action policies ensure equitable opportunities for all students regardless of background.',
      color: 'from-green-500 to-emerald-600',
      animation: 'balance'
    },
    {
      icon: Zap,
      title: 'Real-Time Recommendations',
      description: 'Get instant matches as new opportunities become available with our live recommendation system.',
      color: 'from-amber-500 to-orange-600',
      animation: 'pulse'
    },
    {
      icon: Settings,
      title: 'Policy Simulation Sandbox',
      description: 'Test and optimize allocation policies with our interactive simulation environment.',
      color: 'from-cyan-500 to-blue-600',
      animation: 'slide'
    }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: 'Students Upload Profile',
      description: 'Students create comprehensive profiles with skills, preferences, and career goals.',
      icon: Upload,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      step: 2,
      title: 'AI Matches & Analyzes',
      description: 'Our AI engine analyzes skills, location preferences, and diversity factors to find optimal matches.',
      icon: Brain,
      color: 'from-green-500 to-emerald-600'
    },
    {
      step: 3,
      title: 'Best-Fit Allocation',
      description: 'Students receive their perfect internship matches with transparent allocation reasoning.',
      icon: Sparkles,
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Computer Science Student',
      university: 'Stanford University',
      quote: 'The AI matching was incredible! I got matched with my dream internship at a top tech company. The process was transparent and fair.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Rodriguez',
      role: 'HR Director',
      company: 'TechCorp Inc.',
      quote: 'This platform revolutionized our internship hiring. We found diverse, talented candidates that perfectly matched our requirements.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Emily Johnson',
      role: 'Policy Advisor',
      company: 'Department of Education',
      quote: 'The policy simulation tools helped us design more effective internship allocation policies. Data-driven decision making at its best.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const FeatureCard = ({ feature, index }: { feature: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={featuresInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      <motion.div
        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full mb-6 shadow-lg group-hover:shadow-xl`}
        animate={
          feature.animation === 'rotate' ? { rotate: [0, 360] } :
          feature.animation === 'balance' ? { rotate: [-10, 10, -10] } :
          feature.animation === 'pulse' ? { scale: [1, 1.1, 1] } :
          { x: [-5, 5, -5] }
        }
        transition={{
          duration: feature.animation === 'rotate' ? 3 : 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <feature.icon className="h-8 w-8 text-white" />
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
    </motion.div>
  );

  const HowItWorksStep = ({ step, index }: { step: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={howItWorksInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className="flex flex-col items-center text-center relative"
    >
      <motion.div
        className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <step.icon className="h-10 w-10 text-white" />
      </motion.div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-sm">
        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Step {step.step}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {step.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {step.description}
        </p>
      </div>
      {index < howItWorksSteps.length - 1 && (
        <motion.div
          className="hidden lg:block absolute top-10 left-full w-32 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500"
          initial={{ scaleX: 0 }}
          animate={howItWorksInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: (index + 1) * 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      )}
    </motion.div>
  );

  const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={testimonialsInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl min-w-[350px] mx-4"
    >
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-indigo-600 dark:text-cyan-400 font-medium">
            {testimonial.role}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {testimonial.university || testimonial.company}
          </p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={testimonialsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
          >
            <Award className="h-5 w-5 text-amber-500 mr-1" />
          </motion.div>
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">
        "{testimonial.quote}"
      </p>
    </motion.div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-32">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-cyan-500/5"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(99, 102, 241, 0.05), rgba(6, 182, 212, 0.05))",
                "linear-gradient(45deg, rgba(6, 182, 212, 0.05), rgba(99, 102, 241, 0.05))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  AI-Powered Internship
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Matchmaking for Students,
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-500 to-amber-500 bg-clip-text text-transparent">
                  Industries & Policy Makers
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto"
              >
                Fair, transparent, and efficient allocation powered by AI/ML + affirmative action policies
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <GradientButton className="text-lg px-8 py-4">
                    Students Apply
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </GradientButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <GradientButton variant="secondary" className="text-lg px-8 py-4">
                    Industries Post Opportunities
                  </GradientButton>
                </motion.div>
              </motion.div>

              {/* Animated Illustration */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative max-w-4xl mx-auto"
              >
                <div className="grid grid-cols-3 gap-8 items-center">
                  {/* Students */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Students</p>
                  </motion.div>

                  {/* AI Brain */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="text-center"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                      <Brain className="h-16 w-16 text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">AI Engine</p>
                  </motion.div>

                  {/* Industries */}
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Building className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Industries</p>
                  </motion.div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
                  <motion.path
                    d="M100 100 Q200 50 300 100"
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.path
                    d="M100 100 Q200 150 300 100"
                    stroke="url(#gradient2)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22C55E" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-full mb-4 shadow-lg group-hover:shadow-indigo-500/25"
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Animated Features Section */}
        <section ref={featuresRef} className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Powerful AI-Driven Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Advanced technology meets fair allocation policies for optimal internship matching
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section ref={howItWorksRef} className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Simple, transparent, and efficient - from profile to perfect match in three steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {howItWorksSteps.map((step, index) => (
                <HowItWorksStep key={step.step} step={step} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section ref={showcaseRef} className="py-20 bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                AI Matchmaking in Action
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Watch our intelligent algorithm connect students with their perfect opportunities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={showcaseInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Students Side */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                    Students
                  </h3>
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -50 }}
                      animate={showcaseInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      className="flex items-center p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Student {i}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">CS Major</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* AI Brain Center */}
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
                  >
                    <Brain className="h-16 w-16 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    AI Matching Engine
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Analyzing skills, preferences, and diversity factors
                  </p>
                </div>

                {/* Opportunities Side */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                    Opportunities
                  </h3>
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 50 }}
                      animate={showcaseInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      className="flex items-center p-3 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                        <Building className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Tech Co {i}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">SWE Intern</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Animated Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
                {[1, 2, 3, 4].map((i) => (
                  <motion.path
                    key={i}
                    d={`M200 ${80 + i * 60} Q400 200 600 ${80 + i * 60}`}
                    stroke="url(#matchGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={showcaseInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, repeatType: "reverse" }}
                  />
                ))}
                <defs>
                  <linearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22C55E" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Hear from students, companies, and policy makers who've experienced the power of AI-driven matching
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <div className="flex space-x-6 pb-4">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Footer */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-black/20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Be part of the future of fair internships!
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join thousands of students and companies already using our AI-powered platform
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="px-12 py-4 bg-white text-indigo-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:bg-gray-50">
                  Get Started Today
                  <motion.div
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.div>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;