import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section id="support" className="section relative">
      <div className="container">
        <div className="glass-card overflow-hidden relative">
          <div className="absolute -right-24 -top-24 h-64 w-64 bg-primary-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -left-24 -bottom-24 h-64 w-64 bg-secondary-500/30 rounded-full blur-3xl"></div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                    Ready to Dominate Gorilla Tag?
                  </span>
                </h2>
                
                <p className="text-gray-300 text-lg mb-8">
                  Join the community of satisfied gamers and take your gameplay to the next level with Horizon's cutting-edge features.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary-900/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="h-5 w-5 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Undetected & Secure</h4>
                      <p className="text-gray-400">Our proprietary technology keeps your account safe.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-900/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Zap className="h-5 w-5 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Fast & Reliable</h4>
                      <p className="text-gray-400">Get up and running with favoritegorilla tag menu.</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/register" className="btn btn-primary inline-flex">
                  Get Started Now <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:text-right"
              >
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <img
                    src="https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Gaming Setup"
                    className="w-full h-auto rounded-t-xl"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-400 mb-4">
                      Our dedicated team is available around the clock to help with any issues or questions via discord.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary-400 font-medium">Discord Community</span>
                      <span className="bg-primary-900/50 text-primary-400 text-sm px-3 py-1 rounded-full">
                        100+ members
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
