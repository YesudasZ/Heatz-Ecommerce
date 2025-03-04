import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { navigationLinks } from "../../../data/navigationLinks";

const Navigation: React.FC = () => {
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop) return null;

  return (
    <nav className="hidden md:flex space-x-2 lg:space-x-4 text-[9px] lg:text-[10px]">
      {navigationLinks.map((link, index) => (
        <a 
          key={link.title} 
          href={link.url} 
          className="nav-link text-heatz-green transition-colors duration-200 hover:text-white"
        >
          {(!isTablet || index < 3) && link.title}
        </a>
      ))}
      {isTablet && navigationLinks.length > 3 && (
        <a href="#" className="nav-link text-heatz-green transition-colors duration-200 hover:text-white">
          More
        </a>
      )}
    </nav>
  );
};

export default Navigation;