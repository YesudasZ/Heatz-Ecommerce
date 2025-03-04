import React from "react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import IconButtons from "./IconButtons";
import useHeaderScroll from "./useHeaderScroll";
import Logo from "../Logo";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Header: React.FC = () => {
  const { isScrolled } = useHeaderScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getHeaderPositionClasses = () => {
    if (isMobile) return "fixed top-2 left-[5%] right-[5%]";
    if (isTablet) return "fixed top-2 left-[10%] right-[10%]";
    return "fixed top-3 left-[20%] right-[20%]";
  };

  return (
    <header
      className={`${getHeaderPositionClasses()} z-50 transition-all duration-300 rounded-3xl
        ${
          isScrolled
            ? "bg-[linear-gradient(180deg,rgba(217,217,217,0.1)_0%,rgba(217,217,217,0.05)_100%)] backdrop-blur-md"
            : "bg-[linear-gradient(180deg,rgba(217,217,217,0.05)_0%,rgba(217,217,217,0.03)_100%)] backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 md:py-4 px-4 md:px-6">
        <Logo />
        <Navigation />
        <IconButtons toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      </div>

      {isMobileMenuOpen && <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />}
    </header>
  );
};

export default Header;