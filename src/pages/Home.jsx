import React from 'react';
import Carousel from '../components/Home/Carousel'
import CategorySection from '../components/Home/Category';
import RecentListings from '../components/Home/RecentListing';
import WhyAdopt from '../components/Home/WhyPawmart';
import PetHeroes from '../components/Home/PawHero';
import Blog from '../components/Home/Blog';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <CategorySection/>
            <RecentListings/>
            <WhyAdopt/>
            <PetHeroes/>
            <Blog/>
        </div>
    );
};

export default Home;