import React from 'react';

const TrendingProducts: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Trending Products.</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;