import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { features } from '../data/features';

const Features: React.FC = () => {
  return (
    <section id="features" className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Advanced Features
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Our cheat menu comes loaded with cutting-edge features designed to give you the ultimate advantage in any game.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute -right-64 top-1/4 h-96 w-96 bg-primary-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Features;