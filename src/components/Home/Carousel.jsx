import React from "react";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
// import banner1 from "../../assets/banner-1.jpg";


const Banner = () => {
  return (
    <div className="carousel w-full mt-10 mb-20 shadow-lg">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full h-[500px] object-cover" alt="Happy pets" />
        <div className=" absolute flex flex-col justify-center items-center w-full h-full bg-black/50  text-center">
          <h2 className="text-white text-4xl font-bold mb-2">Find Your Furry Friend Today!</h2>
          <p className="text-white text-lg mb-4">Join thousands who’ve adopted with love ❤️</p>
          <button className="px-6 py-2 bg-linear-to-r from-purple-50 to-pink-50 rounded-md font-semibold hover:opacity-90 transition duration-300">
            Adopt Now
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full h-[500px] object-cover" alt="Adopt a pet" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full bg-black/50  text-center">
          <h2 className="text-white text-4xl font-bold mb-2">Adopt, Don’t Shop — Give a Pet a Home.</h2>
          <p className="text-white text-lg mb-4">Every adoption brings happiness to two hearts 🐕</p>
          <button className="px-6 py-2 bg-linear-to-r from-purple-50 to-pink-50 rounded-md font-semibold hover:opacity-90 transition duration-300">
            Explore Pets
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner1} className="w-full h-[500px] object-cover" alt="Happy owners" />
        <div className="absolute flex flex-col justify-center items-center w-full h-full bg-black/50  text-center">
          <h2 className="text-white text-4xl font-bold mb-2">Because Every Pet Deserves a Loving Family</h2>
          <p className="text-white text-lg mb-4">Let’s make tails wag together! 🐾</p>
          <button className="px-6 py-2 bg-linear-to-r from-purple-50 to-pink-50 rounded-md font-semibold hover:opacity-90 transition duration-300">
            Join Community
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
