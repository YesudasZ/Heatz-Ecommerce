import React from 'react';
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-heatz-dark pt-16 pb-8">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="text-2xl font-bold text-heatz-green mb-4">HEATZ</div>
            <p className="text-white/70 text-sm mb-6">
              Experience premium audio with our cutting-edge technology. Designed for audiophiles and casual listeners alike.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-heatz-gray rounded-full hover:bg-heatz-green hover:text-black transition-colors duration-300">
                <FiInstagram size={16} />
              </a>
              <a href="#" className="p-2 bg-heatz-gray rounded-full hover:bg-heatz-green hover:text-black transition-colors duration-300">
                <FiTwitter size={16} />
              </a>
              <a href="#" className="p-2 bg-heatz-gray rounded-full hover:bg-heatz-green hover:text-black transition-colors duration-300">
                <FiFacebook size={16} />
              </a>
              <a href="#" className="p-2 bg-heatz-gray rounded-full hover:bg-heatz-green hover:text-black transition-colors duration-300">
                <FiYoutube size={16} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white">Headphones</a></li>
              <li><a href="#" className="hover:text-white">Earbuds</a></li>
              <li><a href="#" className="hover:text-white">Speakers</a></li>
              <li><a href="#" className="hover:text-white">Smartwatches</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Warranty</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <div>© 2025 Heatz. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;