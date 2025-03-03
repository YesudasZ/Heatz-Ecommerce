// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-heatz-dark pt-16 pb-8">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           <div>
//             <div className="text-2xl font-bold text-heatz-green mb-4">
//               HEATZ
//             </div>
//             <p className="text-white/70 text-sm mb-6">
//               Heatz® is a registered brand of Ashtelgroup. It is registered in
//               different countries including Saudi Arabia and UAE, Especialy in
//               the middle east. Heatz® is well known for its variety and quality
//               of products launched in every seasons.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Mob Acc</h3>
//             <ul className="space-y-2 text-white/70">
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Earphones
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Cables
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Adapters
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Power Bank
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Batteries
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Car Charger
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Holders
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Speakers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Smartwatches{" "}
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Com Acc</h3>
//             <ul className="space-y-2 text-white/70">
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Earphones
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Cables
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Adapters
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Power Bank
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Batteries
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Car Charger
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Holders
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Speakers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Smartwatches{" "}
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Help</h3>
//             <ul className="space-y-2 text-white/70">
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   FAQs
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Shipping & Returns
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Payment Methods
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Track Your Order
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Delivery Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Cancellation Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Return Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Terms and Conditions
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
//           <div>
//             Copyright © 2024 Heatz - All rights reserved. | Developed by
//             AdAgency ( Technologies. )
//           </div>
//           <div className="flex space-x-6 mt-4 md:mt-0"></div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container max-w-[65%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-20 mb-10">
          {/* Logo and Description Section */}
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
            
            {/* Email Subscription */}
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

          {/* Mob Acc Column */}
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

          {/* Com Acc Column */}
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

          {/* Help Column */}
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
        
        {/* Copyright Section */}
       
      </div>
      <div className=" border-t flex justify-center border-[#565656] pt-6 text-gray-500 text-sm">
          <div className="text-center md:text-left">
            Copyright © 2024 Heatz - All rights reserved. | Developed by
            <span className="text-white"> AdAgency ( Technologies. )</span>
          </div>
        </div>
    </footer>
  );
};

export default Footer;