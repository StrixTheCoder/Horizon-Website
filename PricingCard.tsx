import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PricingPlanType } from '../types';

interface PricingCardProps {
  plan: PricingPlanType;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className={`glass-card p-6 relative ${
        plan.popular 
          ? 'border-primary-500 shadow-glow' 
          : 'border-gray-800 hover:border-gray-700'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white text-xs px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        <div className="mt-2 text-3xl font-bold">{plan.price}</div>
        <p className="text-gray-400 text-sm mt-1">per month</p>
      </div>
      
      <p className="text-center text-gray-300 mb-6">{plan.description}</p>
      
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        to="/register"
        className={`btn w-full ${
          plan.popular ? 'btn-primary' : 'btn-outline'
        }`}
      >
        {plan.buttonText}
      </Link>
    </motion.div>
  );
};

export default PricingCard;