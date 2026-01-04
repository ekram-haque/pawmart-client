import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Pet Lover",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "I adopted my cat from Pawmart and it was such a smooth experience. Highly recommend!",
  },
  {
    name: "Michael Smith",
    role: "Dog Owner",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    message:
      "Excellent service and quick delivery. The pet care tips they provide are also amazing.",
  },
  {
    name: "Sarah Williams",
    role: "Pet Parent",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    message:
      "Very happy with my purchase! My dog loves his new toys and bed from Pawmart.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 mb-20 w-11/12 mx-auto rounded-xl relative bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 ">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-6 text-center">
           What Our Customers Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl shadow-2xl max-w-3xl mx-auto transform transition hover:scale-105">
                <div className="flex justify-center mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-pink-500 shadow-lg"
                  />
                </div>
                <div className="text-center relative">
                  <svg
                    className="w-10 h-10 mx-auto mb-2 text-pink-500 opacity-30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.17 6A5 5 0 0 0 2 11.5c0 2.93 2.57 5.21 5.9 5.48V22h2v-5.02c.57-.02 1.12-.1 1.65-.25a5 5 0 0 0 7.28-4.73 5 5 0 0 0-5-5H7.17z" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-200 italic text-lg md:text-xl mb-4">
                    "{t.message}"
                  </p>
                  <h4 className="font-bold text-gray-900 dark:text-white text-xl md:text-2xl">
                    {t.name}
                  </h4>
                  <span className="text-pink-500 font-medium">{t.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Decorative paw icons */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full animate-pulse"></div>
    </section>
  );
};

export default TestimonialSection;
