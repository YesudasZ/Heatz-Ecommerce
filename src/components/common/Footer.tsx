import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container max-w-[65%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-20 mb-10">
          <div className="col-span-3">
            <div className="mb-4">
              <img 
                src="/src/assets/images/logos/footerlogo.png" 
                alt="Heatz Logo" 
                className="text-heatz-green h-8"
              />
            </div>
            <p className="text-[#565656] text-[10px] mb-6">
              Heatz® is a registered brand of Ashtelgroup. It is registered in
              different countries including Saudi Arabia and UAE, Especialy in
              the middle east. Heatz® is well known for its variety and quality
              of products launched in every seasons.
            </p>
            <div className="mt-8">
              <div className="relative text-[#565656]">
              <input 
  type="email" 
  placeholder="Enter your email" 
  className="w-full bg-transparent border-b border-[#565656] py-2 text-[#565656] placeholder:text-[#565656] focus:outline-none text-[9px]"
/>

                <button className="absolute right-0 bottom-2">
                   <img 
                src="/src/assets/images/logos/sendlogo.png" 
                alt="Heatz Logo" 
                className="text-white h-4"
              />
                </button>
              </div>
              
              <div className="flex items-start mt-4">
                <input 
                  type="checkbox" 
                  id="privacy-consent" 
                  className="mt-1 mr-2"
                />
                <label htmlFor="privacy-consent" className="text-[#565656] text-[10px]">
                  I confirm acceptance of the Privacy Policy and consent to its terms, including the use of cookies.
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-10">
            <h3 className="text-white text-xs mb-5">Mob Acc</h3>
            <ul className=" text-[#565656] ">
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Earphones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Cables
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Adapters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Power Bank
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Batteries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Car Charger
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Holders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Smartwatches
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-10">
            <h3 className="text-white text-xs mb-5 ">Com Acc</h3>
            <ul className=" text-[#565656]">
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Earphones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Cables
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Adapters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Power Bank
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Batteries
                </a>
              </li> 
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Car Charger
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Holders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Smartwatches
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 mt-10">
            <h3 className="text-white text-xs mb-5">Help</h3>
            <ul className=" text-[#565656]">
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Delivery Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-[9px]">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>   
      </div>
      <div className=" border-t flex justify-center border-[#565656] pt-6 text-gray-500 text-sm">
          <div className="text-center md:text-left">
            Copyright © 2024 Heatz - All rights reserved. | Developed by
            <span className="text-white text-xs font-thin"> AdAgency ( Technologies. )</span>
          </div>
        </div>
    </footer>
  );
};

export default Footer;