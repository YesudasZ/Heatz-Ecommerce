import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-3 left-[20%] right-[20%] z-50 transition-all duration-300 rounded-3xl
    ${
      isScrolled
        ? "bg-[linear-gradient(180deg,rgba(217,217,217,0.1)_0%,rgba(217,217,217,0.05)_100%)] backdrop-blur-md"
        : "bg-[linear-gradient(180deg,rgba(217,217,217,0.05)_0%,rgba(217,217,217,0.03)_100%)] backdrop-blur-sm"
    }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img
            src="/src/assets/images/logos/logo.png"
            alt="HEATZ"
            className="h-7"
          />
        </div>
        <nav className="hidden md:flex space-x-3 text-[10px]">
          <a href="#" className="nav-link text-heatz-green">
            Mobile Accs
          </a>
          <a href="#" className="nav-link text-heatz-green">
            Computer Accs
          </a>
          <a href="#" className="nav-link text-heatz-green">
            Multimedia
          </a>
          <a href="#" className="nav-link text-heatz-green">
            Support
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <button className="hidden md:block">
            <img
              src="/src/assets/images/icons/searchicon.png"
              alt="Search"
              className="h-5 w-5"
            />
          </button>
          <button>
            <img
              src="/src/assets/images/icons/carticon.png"
              alt="Cart"
              className="h-5 w-5"
            />
          </button>
          <button className="hidden md:block">
            <img
              src="/src/assets/images/icons/wishlisticon.png"
              alt="Wishlist"
              className="h-5 w-5"
            />
          </button>
          <button className="hidden md:block">
            <img
              src="/src/assets/images/icons/profile.png"
              alt="Profile"
              className="h-5 w-5"
            />
          </button>
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 pt-20">
          <nav className="flex flex-col items-center space-y-8 p-8">
            <a href="#" className="text-xl nav-link text-heatz-green">
              Mobile Accs
            </a>
            <a href="#" className="text-xl nav-link text-heatz-green">
              Computer Accs
            </a>
            <a href="#" className="text-xl nav-link text-heatz-green">
              Multimedia
            </a>
            <a href="#" className="text-xl nav-link text-heatz-green">
              Support
            </a>

            <div className="flex space-x-8 mt-8">
              <button>
                <img
                  src="/src/assets/images/icons/searchicon.png"
                  alt="Search"
                  className="h-6 w-6"
                />
              </button>
              <button>
                <img
                  src="/src/assets/images/icons/wishlisticon.png"
                  alt="Wishlist"
                  className="h-6 w-6"
                />
              </button>
              <button>
                <img
                  src="/src/assets/images/icons/profile.png"
                  alt="Profile"
                  className="h-6 w-6"
                />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
