import React from "react";
import Carousel from "../components/Home/Carousel";
import CategorySection from "../components/Home/category/Category";
import RecentListings from "../components/Home/RecentListing";
import WhyAdopt from "../components/Home/WhyPawmart";
import PetHeroes from "../components/Home/PawHero";
import Newsletter from "../components/Home/Newsletter ";
import Highlights from "../components/Home/Highlights";
import Statistics from "../components/Home/Statistics";
import TestimonialSection from "../components/Home/TestimonialSection";
import FAQSection from "../components/Home/FAQSection";

const recentListingPromise = fetch(
  "https://pawmart-server-nine.vercel.app/recent-listing"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Carousel />
      <Statistics />
      <CategorySection />
      <RecentListings recentListingPromise={recentListingPromise} />
      <Highlights />
      <WhyAdopt />
      <PetHeroes />
      <TestimonialSection />
      <FAQSection />
      <Newsletter />
    </div>
  );
};

export default Home;
