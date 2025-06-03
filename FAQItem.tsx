import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQType } from '../types';

interface FAQItemProps {
  faq: FAQType;
  isOpen: boolean;
  toggleFAQ: () => void;
  delay?: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, toggleFAQ, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={toggleFAQ}
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
      >
        <h3 className="text-lg font-semibold">{faq.question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <p className="text-gray-400">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;