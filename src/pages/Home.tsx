import React from "react";
import Hero from "../components/home/Hero";
import ProductGrid from "../components/home/ProductGrid";
import FeaturedSection from "../components/home/FeaturedSection";
import TrendingProducts from "../components/home/TrendingProducts";
import SmartWatchSection from "../components/home/SmartWatchSection";

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <div className="pt-16">
        <ProductGrid
          title="Featured Products"
          subtitle="Explore our top-selling products"
          filter={(product) => !!(product.isFeatured || product.isNew)}
        />

        <FeaturedSection />

        <TrendingProducts />

        <SmartWatchSection />

        <ProductGrid
          title="New Arrivals"
          subtitle="Check out our latest products"
          filter={(product) => !!product.isNew}
        />
      </div>
    </>
  );
};

export default Home;
