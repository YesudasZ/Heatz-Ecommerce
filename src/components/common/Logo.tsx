import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import logo from '../../assets/images/logos/logo.png'
import foorterlogo from '../../assets/images/logos/footerlogo.png'

interface LogoProps {
  variant?: "header" | "footer";
}

const Logo: React.FC<LogoProps> = ({ variant = "header" }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const logoSrc = variant === "header" 
    ? logo
    : foorterlogo;

  const logoSize = () => {
    if (variant === "footer") return "h-6 md:h-8";
    return isMobile ? "h-5" : "h-7";
  };

  return (
    <div className="flex items-center">
      <img src={logoSrc} alt="HEATZ" className={logoSize()} />
    </div>
  );
};

export default Logo;
