
import React, { useState, useEffect } from 'react';

const loadingMessages = [
  "Consulting the marketing gurus...",
  "Analyzing market trends...",
  "Crafting the perfect captions...",
  "Designing your ad poster...",
  "Brainstorming video ideas...",
  "Just a moment, magic is happening...",
];

const Loader: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-gray-800/50 rounded-lg">
      <div className="w-12 h-12 border-4 border-t-purple-400 border-r-purple-400 border-b-gray-600 border-l-gray-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-300 font-medium">
        {loadingMessages[messageIndex]}
      </p>
    </div>
  );
};

export default Loader;
