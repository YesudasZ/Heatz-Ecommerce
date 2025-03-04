import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";

interface FooterLink {
  label: string;
  url: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  
  const displayLinks = isTablet ? links.slice(0, 5) : links;
  
  return (
    <div className="col-span-1 mt-0 md:mt-4 lg:mt-10">
      <h3 className="text-white text-xs mb-3 md:mb-5">{title}</h3>
      <ul className="text-[#565656]">
        {displayLinks.map((link) => (
          <li key={link.label} className="">
            <a 
              href={link.url} 
              className="hover:text-white text-[9px] transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
        {isTablet && links.length > 5 && (
          <li>
            <a href="#" className="hover:text-white text-[9px] transition-colors duration-200">
              More...
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FooterColumn;