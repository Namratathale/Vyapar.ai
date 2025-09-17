import React from 'react';

interface HeaderProps {
    title: string;
    subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="mb-8 md:mb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-white">
        {title}
      </h1>
      {subtitle && (
        <p className="text-md md:text-lg text-gray-400 mt-2">
            {subtitle}
        </p>
      )}
    </header>
  );
};

export default Header;
