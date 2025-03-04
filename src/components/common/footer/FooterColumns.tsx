import React from "react";
import FooterColumn from "./FooterColumn";
import { footerLinks } from "../../../data/footerLinks";
import useMediaQuery from "../../../hooks/useMediaQuery";
import FooterAccordion from "./FooterAccordion";

const FooterColumns: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  
  if (isMobile) {
    return (
      <>
        {footerLinks.map((column) => (
          <FooterAccordion 
            key={column.title} 
            title={column.title} 
            links={column.links} 
          />
        ))}
      </>
    );
  }
  
  return (
    <>
      {footerLinks.map((column) => (
        <FooterColumn 
          key={column.title} 
          title={column.title} 
          links={column.links} 
        />
      ))}
    </>
  );
};

export default FooterColumns;