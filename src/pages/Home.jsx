import React from 'react';
import Carousel from '../components/Home/Carousel'
import CategorySection from '../components/Home/Category';
import RecentListings from '../components/Home/RecentListing';
import WhyAdopt from '../components/Home/WhyPawmart';
import PetHeroes from '../components/Home/PawHero';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <CategorySection/>
            <RecentListings/>
            <WhyAdopt/>
            <PetHeroes/>
        </div>
    );
};

export default Home;