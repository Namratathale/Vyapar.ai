import React from 'react';

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L9.5 8.5 4 11l5.5 2.5L12 19l2.5-5.5L20 11l-5.5-2.5z" />
    <path d="M4 3h.01" />
    <path d="M20 3h.01" />
    <path d="M4 21h.01" />
    <path d="M20 21h.01" />
  </svg>
);

export default SparklesIcon;
