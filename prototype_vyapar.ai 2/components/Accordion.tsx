// FIX: Add full content for components/Accordion.tsx
import React, { useState, ReactNode } from 'react';

interface AccordionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 md:p-5 text-left font-semibold text-lg"
      >
        <div className="flex items-center gap-3">
            {icon}
            <span>{title}</span>
        </div>
        <svg
          className={`w-5 h-5 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 md:p-5 border-t border-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
