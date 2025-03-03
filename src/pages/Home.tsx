import React from "react";
import Hero from "../components/home/Hero";
import ProductGrid from "../components/home/ProductGrid";
import FeaturedSection from "../components/home/FeaturedSection";
import TrendingProducts from "../components/home/TrendingProducts";
import QuickLinkScrollView from "../components/home/QuickLinkScrollView";

import ad1 from '../assets/images/ads/ad1.png'
import ad2 from '../assets/images/ads/ad2.png'
import ad3 from '../assets/images/ads/ad3.png'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <QuickLinkScrollView />
      <ProductGrid />
      <FeaturedSection leftImage={ad1} rightImage={ad2} />
      <QuickLinkScrollView />
      <ProductGrid />
      <FeaturedSection leftImage={ad3} rightImage={ad2} />
      <TrendingProducts />
    </>
  );
};

export default Home;
