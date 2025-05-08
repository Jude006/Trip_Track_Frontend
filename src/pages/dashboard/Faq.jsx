import React from 'react';
import FaqList from '../../features/faq/FaqList';

const Faq = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-text-primary dark:text-text-primary mb-8 font-heading">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        <FaqList />
      </div>
    </div>
  );
};

export default Faq;