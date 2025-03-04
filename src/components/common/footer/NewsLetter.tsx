import React from "react";
import send from '../../../assets/images/logos/sendlogo.png'

const Newsletter: React.FC = () => {
  return (
    <div className="mt-6 md:mt-8">
      <div className="relative text-[#565656]">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full bg-transparent border-b border-[#565656] py-2 text-[9px] md:text-[10px] text-[#565656] placeholder:text-[#565656] focus:outline-none focus:border-heatz-green transition-colors duration-200"
        />
        <button 
          className="absolute right-0 bottom-2 transition-opacity duration-200 hover:opacity-80 focus:outline-none"
          aria-label="Subscribe to newsletter"
        >
          <img 
            src={send}
            alt="Send" 
            className="text-white h-3 md:h-4"
          />
        </button>
      </div>
      
      <div className="flex items-start mt-3 md:mt-4">
        <input 
          type="checkbox" 
          id="privacy-consent" 
          className="mt-1 mr-2"
        />
        <label htmlFor="privacy-consent" className="text-[#565656] text-[8px] md:text-[10px]">
          I confirm acceptance of the Privacy Policy and consent to its terms, including the use of cookies.
        </label>
      </div>
    </div>
  );
};

export default Newsletter;
