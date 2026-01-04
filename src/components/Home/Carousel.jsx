import React from "react";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: banner1,
      title: "Find Your Furry Friend Today! 🐶",
      desc: "Join thousands who’ve adopted with love ❤️",
      btnText: "Adopt Now",
      btnGradient: "from-purple-600 to-pink-600",
    },
    {
      id: 2,
      img: banner2,
      title: "Adopt, Don’t Shop — Give a Pet a Home 🏡",
      desc: "Every adoption brings happiness to two hearts 🐕",
      btnText: "Explore Pets",
      btnGradient: "from-pink-600 to-purple-600",
    },
    {
      id: 3,
      img: banner1,
      title: "Because Every Pet Deserves a Loving Family 💕",
      desc: "Let’s make tails wag together! 🐾",
      btnText: "Join Community",
      btnGradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="carousel w-full  mt-10 mb-20 shadow-xl rounded-xl overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="
            carousel-item relative w-full flex flex-col md:flex-row items-center
            bg-linear-to-r from-purple-50 to-pink-50
            dark:from-gray-900 dark:to-gray-800
          "
        >
          {/* Left - Text */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center items-center text-center space-y-6 z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {slide.title}
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              {slide.desc}
            </p>

            <button
              className={`
                px-8 py-3 rounded-lg font-semibold text-white
                bg-linear-to-r from-purple-600 to-pink-600
                hover:scale-105 transition-transform
              `}
            >
              {slide.btnText}
            </button>
          </div>

          {/* Right - Image */}
          <div className="md:w-1/2 w-full m-2 rounded-lg h-[400px] md:h-[500px] relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full rounded-lg object-cover"
            />

            {/* Dark overlay for better contrast */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />
          </div>

          {/* Navigation */}
          <div className="absolute flex justify-between -translate-y-1/2 left-4 right-4  top-1/2 z-20">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle  bg-gradient-to-r from-purple-600 to-pink-600 dark:bg-black/40 hover:bg-white/70 dark:hover:bg-black/70 text-black dark:text-white"
            >
              ❮
            </a>
            <a
              href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
              className="btn btn-circle bg-gradient-to-r from-purple-600 to-pink-600 dark:bg-black/40 hover:bg-white/70 dark:hover:bg-black/70 text-black dark:text-white"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
