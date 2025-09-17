import React from 'react';

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-3.3 1.4c-1.4 0-2.8-.5-3.8-1.4-.5 2.8-3.3 4.4-3.3 4.4s-3.8-1.9-3.8-4.4c0-1.4 1.4-3.3 1.4-3.3s-1.9-1.4-1.9-3.3c0-1.4 1.4-3.3 1.4-3.3s2.8.9 3.8 1.4c0 0 3.3-3.3 5.2-3.3s2 .9 2 .9z" />
  </svg>
);

export default TwitterIcon;
