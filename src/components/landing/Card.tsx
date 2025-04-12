
import React, { ReactNode } from 'react';

interface CardProps {
  icon?: ReactNode;
  number?: number;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const Card = ({
  icon,
  number,
  title,
  description,
  className = "bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 card-glow",
  iconClassName = "mb-4 text-[#C3FF44]",
  titleClassName = "text-xl font-semibold mb-3 text-[#C3FF44] text-glow",
  descriptionClassName = "text-white",
}: CardProps) => {
  return (
    <div className={className}>
      {number && (
        <div className="bg-[#C3FF44]/20 mx-auto mb-4 rounded-full w-12 h-12 flex items-center justify-center pulse-glow">
          <span className="text-[#C3FF44] font-bold text-xl">{number}</span>
        </div>
      )}
      {icon && <div className={iconClassName}>{icon}</div>}
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
};

export default Card;
