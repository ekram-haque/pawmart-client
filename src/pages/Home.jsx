import React from "react";
import Carousel from "../components/Home/Carousel";
import CategorySection from "../components/Home/category/Category";
import RecentListings from "../components/Home/RecentListing";
import WhyAdopt from "../components/Home/WhyPawmart";
import PetHeroes from "../components/Home/PawHero";
import Blog from "../components/Home/Blog";

const recentListingPromise = fetch(
  "https://pawmart-server-nine.vercel.app/recent-listing"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Carousel />
      <CategorySection />
      <RecentListings recentListingPromise={recentListingPromise} />
      <WhyAdopt />
      <PetHeroes />
      <Blog />
    </div>
  );
};

export default Home;
