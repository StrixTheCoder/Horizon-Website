import React from 'react';
import { ChevronRight, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-900/50 text-primary-400 mb-6">
              <ShieldCheck className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Undetected & Secure</span>
            </div>
            
            <h1 className="font-bold mb-6">
              <span className="block">Horizon</span>
              <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                The best mod menu yet!
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Gain the competitive edge with Horizon's advanced features, 
              customizable settings, and undetectable technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register" className="btn btn-primary w-full sm:w-auto">
                Get Started <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
              <a href="#features" className="btn btn-outline w-full sm:w-auto">
                Explore Features
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-400">
              <Zap className="h-4 w-4 text-primary-500" />
              <span>Join 10,000+ gamers already using Horizon</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-800 border border-gray-700 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay"></div>
              <img
                src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Horizon Interface"
                className="w-full h-full object-cover opacity-75"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Horizon v3.5</h3>
                  <p className="text-gray-200">Next-gen gaming enhancement</p>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-accent-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Aimbot Active</span>
                  <div className="ml-auto text-xs text-gray-400">FPS: 240+</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-10 -bottom-10 h-64 w-64 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -top-10 h-64 w-64 bg-secondary-500/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;