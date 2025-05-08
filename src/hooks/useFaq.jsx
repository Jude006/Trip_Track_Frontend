import { useState } from 'react';

const useFaq = () => {
  const [faqs] = useState([
    {
      id: 1,
      question: 'How do I create a new trip?',
      answer: 'Navigate to "My Trips" and click the "Create New Trip" button. Fill in the required details and save.'
    },
    {
      id: 2,
      question: 'Can I invite friends to my trip?',
      answer: 'Yes! From the trip details page, click "Invite Members" and share the link or enter their email addresses.'
    },
    {
      id: 3,
      question: 'How does the budget planner work?',
      answer: 'The budget planner helps you allocate funds to different categories. Set a total budget and distribute it across categories like accommodation, transportation, etc.'
    },
    {
      id: 4,
      question: 'Is my data secure?',
      answer: 'Absolutely. We use industry-standard encryption and never share your data with third parties.'
    },
    {
      id: 5,
      question: 'How can I contact support?',
      answer: 'You can reach our support team at support@TripTrack.com or through the contact form in your profile settings.'
    }
  ]);

  return { faqs };
};

export default useFaq;