import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiRefreshCw, FiUser, FiZap, FiClock, FiDollarSign, FiMapPin, FiUsers } from 'react-icons/fi';
import { FaRobot, FaLightbulb, FaMoneyBillWave, FaRoute } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';
import AIChatMessage from '../../features/ai/AIChatMessage';
import AIPromptSuggestions from '../../features/ai/AIPromptSuggestions';

const Ai_Assistant = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const displayName = user?.name || storedUser?.userName || 'User';
  const messagesEndRef = useRef(null);

  const currentTrip = {
    destination: 'Ghana',
    budget: 1500,
    duration: 5,
    travelers: 2
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: Date.now(),
        text: `Hi ${displayName}! I'm your Trip Budget Assistant...`,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      }]);
    }
  }, [displayName]); 

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/ai/ask-ai`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          message: input,
          tripDetails: currentTrip
        })
      });

      const data = await response.json();
      
      const aiMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      toast.error('Failed to get AI response');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  const handleResetConversation = () => {
    setMessages([{
      id: Date.now(),
      text: `Hi ${user?.name || 'there'}! I'm your Trip Budget Assistant. How can I help you with your trip to ${currentTrip.destination} today?`,
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString()
    }]);
  };

  return (
    <div className="flex flex-col h-full p-4 md:p-6 rounded max-w-5xl mx-auto dark:bg-dark-background dark:m-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* User Profile */}
          {user?.avatar ? (
            <img src={user.avatar} alt="user-avatar" className="w-10 h-10 rounded-full" />
          ) : (
            <div className="w-10 h-10 rounded-full bg -primary dark:bg-dark-primary flex items-center justify-center">
              <FiUser className="text-white text-lg" />
            </div>
          )}
          <div>
            <h1 className="text-xl font-bold text-text-primary dark:text-dark-text-primary font-heading">{displayName || 'User'}</h1>
            <div className="flex items-center gap-2 text-xs text-text-secondary dark:text-dark-text-secondary">
              <div className="flex items-center gap-1">
                <FiMapPin size={12} />
                <span>{currentTrip.destination}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiClock size={12} />
                <span>{currentTrip.duration} days</span>
              </div>
              <div className="flex items-center gap-1">
                <FiDollarSign size={12} />
                <span>${currentTrip.budget}</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleResetConversation}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-text-primary dark:text-dark-text-primary hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          <FiRefreshCw size={14} /> New Chat
        </button>
      </div>

      <div className="bg-gradient-to-r from-primary to-secondary dark:from-dark-primary dark:to-blue-600 rounded-xl p-4 mb-6 text-white">
        <div className="flex items-center gap-3 mb-3">
          <FaRobot className="text-xl" />
          <h2 className="font-bold">Trip Assistant</h2>
        </div>
        <p className="text-sm opacity-90 mb-3">I'm here to help you plan your {currentTrip.duration}-day trip to {currentTrip.destination} with ${currentTrip.budget} budget for {currentTrip.travelers} {currentTrip.travelers > 1 ? 'people' : 'person'}.</p>
        <div className="flex gap-2">
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Budget Planning</span>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Itinerary</span>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Tips</span>
        </div>
      </div>

      {/* Suggested Prompts */}
      {messages.length <= 1 && (
        <AIPromptSuggestions 
          onSuggestionClick={handleSuggestionClick} 
          tripDetails={currentTrip}
        />
      )}

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message) => (
          <AIChatMessage 
            key={message.id}
            message={message.text}
            sender={message.sender}
            timestamp={message.timestamp}
          />
        ))}
        <div ref={messagesEndRef} />
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 max-w-xs md:max-w-md">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSendMessage} className="mt-auto">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask me about ${currentTrip.destination}...`}
            className="w-full pl-5 pr-12 py-3.5 border rounded-full dark:bg-dark-surface dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary shadow-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full bg-primary dark:bg-dark-primary text-white disabled:bg-gray-300 dark:disabled:bg-gray-600"
          >
            <FiSend className="text-lg" />
          </button>
        </div>
        <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-2 text-center">
          Ask for budget tips, itinerary suggestions, or travel advice
        </p>
      </form>
    </div>
  );
};

export default Ai_Assistant;