import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

interface IconButtonProps {
  icon: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  alt, 
  onClick, 
  className = "", 
  size
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const getSize = () => {
    if (size) return size;
    return isMobile ? "sm" : "md";
  };
  
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <button 
      className={`${className} p-1 focus:outline-none transition-opacity duration-200 hover:opacity-80`} 
      onClick={onClick}
      aria-label={alt}
    >
      <img
        src={`/src/assets/images/icons/${icon}.png`}
        alt={alt}
        className={sizeClasses[getSize()]}
      />
    </button>
  );
};

export default IconButton;