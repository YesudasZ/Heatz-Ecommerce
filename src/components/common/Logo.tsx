import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

interface LogoProps {
  variant?: "header" | "footer";
}

const Logo: React.FC<LogoProps> = ({ variant = "header" }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const logoSrc = variant === "header" 
    ? "/src/assets/images/logos/logo.png" 
    : "/src/assets/images/logos/footerlogo.png";

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
