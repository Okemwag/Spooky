import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
