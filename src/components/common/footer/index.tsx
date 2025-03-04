import React from "react";
import Logo from "../Logo";
import FooterColumns from "./FooterColumns";
import Newsletter from "./NewsLetter";
import Copyright from "./CopyRight";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Footer: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");


  return (
    <footer className="bg-black pt-10 md:pt-16 pb-6 md:pb-8">
      <div className={`container mx-auto px-5 md:px-6 ${!isMobile ? "max-w-[80%] lg:max-w-[65%]" : ""}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-20 mb-8 md:mb-10">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="mb-3 md:mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-[10px] md:text-[10px] text-[#565656] mb-4 md:mb-6">
              Heatz® is a registered brand of Ashtelgroup. It is registered in
              different countries including Saudi Arabia and UAE, Especialy in
              the middle east. Heatz® is well known for its variety and quality
              of products launched in every seasons.
            </p>
            <Newsletter />
          </div>
          <FooterColumns />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;