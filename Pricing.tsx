import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import { pricingPlans } from '../data/pricing';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Select the perfect subscription plan to match your gaming needs and budget.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              delay={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            All plans come with 24/7 support and a 24-hour money-back guarantee.
            <br />
            Need a custom solution? <a href="#" className="text-primary-400 hover:text-primary-300">Contact us</a> for enterprise options.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute -left-64 bottom-1/4 h-96 w-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Pricing;