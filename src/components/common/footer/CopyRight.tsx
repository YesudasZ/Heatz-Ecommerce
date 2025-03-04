import React from "react";

const Copyright: React.FC = () => {
  return (
    <div className="border-t border-[#565656] pt-4 md:pt-6 text-gray-500 text-[10px] md:text-sm">
      <div className="container mx-auto px-5 md:px-6 text-center">
        Copyright © {new Date().getFullYear()} Heatz - All rights reserved. | Developed by
        <span className="text-white text-[9px] md:text-xs font-thin"> AdAgency ( Technologies. )</span>
      </div>
    </div>
  );
};

export default Copyright;