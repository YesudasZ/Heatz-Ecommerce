import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import IconButton from "../IconButton";

interface IconButtonsProps {
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

const IconButtons: React.FC<IconButtonsProps> = ({ 
  toggleMobileMenu, 
  isMobileMenuOpen 
}) => {
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex items-center space-x-2 md:space-x-3">
      {isDesktop && !isTablet && (
        <IconButton 
          icon="searchicon" 
          alt="Search" 
          className="hidden md:block" 
        />
      )}
      
      <IconButton icon="carticon" alt="Cart" />
      
      {isDesktop && (
        <>
          {!isTablet && (
            <IconButton 
              icon="wishlisticon" 
              alt="Wishlist" 
              className="hidden md:block" 
            />
          )}
          <IconButton 
            icon="profile" 
            alt="Profile" 
            className="hidden md:block" 
          />
        </>
      )}
      
      <button 
        className="md:hidden p-1 focus:outline-none" 
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? (
          <span className="text-xl md:text-2xl">✕</span>
        ) : (
          <span className="text-xl md:text-2xl">☰</span>
        )}
      </button>
    </div>
  );
};

export default IconButtons;