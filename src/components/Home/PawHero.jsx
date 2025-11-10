import React from "react";

const heroes = [
  {
    id: 1,
    name: "Sara Khan",
    role: "Adopter & Volunteer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f2f7a1c11d?auto=format&fit=crop&w=400&q=80",
    description:
      "Sara has adopted 3 pets and volunteers at local shelters, spreading love and awareness for rescued animals.",
  },
  {
    id: 2,
    name: "Rafiq Ahmed",
    role: "Pet Caregiver",
    image:
      "https://images.unsplash.com/photo-1603415526965-6b3b8c3ed80b?auto=format&fit=crop&w=400&q=80",
    description:
      "Rafiq provides day-to-day care for rescued pets and educates families about proper pet nutrition and health.",
  },
  {
    id: 3,
    name: "Nabila Hossain",
    role: "Adopter",
    image:
      "https://images.unsplash.com/photo-1603415526967-8c1f7f1e9d6b?auto=format&fit=crop&w=400&q=80",
    description:
      "Nabila is a passionate adopter who believes every pet deserves a loving home and actively participates in adoption drives.",
  },
];

const PetHeroes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-800 text-center mb-12">
          🐕 Meet Our Pet Heroes
        </h2>

        <div className="flex flex-col gap-16">
          {heroes.map((hero, index) => (
            <div
              key={hero.id}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-72 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Description */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {hero.name}
                </h3>
                <p className="text-purple-700 font-semibold mb-2">{hero.role}</p>
                <p className="text-gray-700">{hero.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetHeroes;
