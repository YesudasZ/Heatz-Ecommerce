import React from 'react';
interface FeaturedSectionProps {
  leftImage: string;
  rightImage: string;
}
const FeaturedSection: React.FC<FeaturedSectionProps> = ({ leftImage, rightImage }) => {
  return (
    <section className=" bg-heatz-dark">
      <div className="container max-w-[65%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="overflow-hidden shadow-lg">
            <img 
              src={leftImage} 
              alt="Featured promotion" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className=" overflow-hidden shadow-lg">
            <img 
              src={rightImage} 
              alt="Featured promotion" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;