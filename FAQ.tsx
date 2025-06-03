import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';
import { faqs } from '../data/faq';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Get answers to the most common questions about Horizon.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggleFAQ={() => toggleFAQ(index)}
              delay={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Still have questions? <a href="#support" className="text-primary-400 hover:text-primary-300">Contact our support team</a> for assistance.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute -left-64 top-1/3 h-96 w-96 bg-primary-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FAQ;