import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialType } from '../types';

interface TestimonialCardProps {
  testimonial: TestimonialType;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6"
    >
      <div className="mb-4">
        <p className="text-gray-300 italic">"{testimonial.content}"</p>
      </div>
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary-500"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.game}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;