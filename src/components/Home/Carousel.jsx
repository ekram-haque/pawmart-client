import React from "react";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full mt-10 mb-20 shadow-xl rounded-xl overflow-hidden">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={banner1}
          className="w-full h-[500px] object-cover"
          alt="Happy pets"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            Find Your Furry Friend Today! 🐶
          </h2>
          <p className="text-gray-100 mb-6 text-lg">
            Join thousands who’ve adopted with love ❤️
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition">
            Adopt Now
          </button>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide3" className="btn btn-circle bg-white/40 hover:bg-white/60 text-black">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-white/40 hover:bg-white/60 text-black">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={banner2}
          className="w-full h-[500px] object-cover"
          alt="Adopt a pet"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            Adopt, Don’t Shop — Give a Pet a Home 🏡
          </h2>
          <p className="text-gray-100 mb-6 text-lg">
            Every adoption brings happiness to two hearts 🐕
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition">
            Explore Pets
          </button>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-white/40 hover:bg-white/60 text-black">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-white/40 hover:bg-white/60 text-black">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={banner1}
          className="w-full h-[500px] object-cover"
          alt="Happy owners"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            Because Every Pet Deserves a Loving Family 💕
          </h2>
          <p className="text-gray-100 mb-6 text-lg">
            Let’s make tails wag together! 🐾
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition">
            Join Community
          </button>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-white/40 hover:bg-white/60 text-black">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-white/40 hover:bg-white/60 text-black">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
