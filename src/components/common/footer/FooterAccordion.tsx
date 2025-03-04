import React, { useState } from "react";

interface FooterLink {
  label: string;
  url: string;
}

interface FooterAccordionProps {
  title: string;
  links: FooterLink[];
}

const FooterAccordion: React.FC<FooterAccordionProps> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#272727] py-4">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-white text-xs">{title}</h3>
        <span className="text-white text-lg">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      
      {isOpen && (
        <ul className="text-[#565656] mt-3 pl-2">
          {links.map((link) => (
            <li key={link.label} className="mb-2">
              <a 
                href={link.url} 
                className="hover:text-white text-[9px] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FooterAccordion;