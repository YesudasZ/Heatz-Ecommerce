import React, { useEffect } from "react";
import { navigationLinks } from "../../../data/navigationLinks";
import IconButton from "../IconButton";

interface MobileMenuProps {
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    
    document.addEventListener('keydown', handleEsc);

    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [closeMenu]);

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-40 pt-16 md:pt-20 overflow-y-auto"
      onClick={closeMenu}
    >
      <div 
        className="max-h-screen"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col items-center space-y-6 md:space-y-8 p-6 md:p-8">
          {navigationLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.url} 
              className="text-lg md:text-xl nav-link text-heatz-green transition-colors duration-200 hover:text-white"
              onClick={closeMenu}
            >
              {link.title}
            </a>
          ))}

          <div className="flex space-x-6 md:space-x-8 mt-6 md:mt-8">
            <IconButton icon="searchicon" alt="Search" size="lg" />
            <IconButton icon="wishlisticon" alt="Wishlist" size="lg" />
            <IconButton icon="profile" alt="Profile" size="lg" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;