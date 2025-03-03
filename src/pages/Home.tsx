import React from "react";
import Hero from "../components/home/Hero";
import ProductGrid from "../components/home/ProductGrid";
import FeaturedSection from "../components/home/FeaturedSection";
import TrendingProducts from "../components/home/TrendingProducts";
import SmartWatchSection from "../components/home/SmartWatchSection";
import QuickLinkScrollView from "../components/home/QuickLinkScrollView";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <QuickLinkScrollView />
      <div className="pt-16">
        <ProductGrid/>
        <TrendingProducts />
        <QuickLinkScrollView />
        <ProductGrid/>
        <FeaturedSection />
        <SmartWatchSection />
      </div>
    </>
  );
};

export default Home;
