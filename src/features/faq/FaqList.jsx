import React from 'react';
import FaqItem from './FaqItem';
import useFaq from '../../hooks/useFaq';

const FaqList = () => {
  const { faqs } = useFaq();

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList;