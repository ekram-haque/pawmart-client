import React, { use, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import LoadingSkeleton from "../LoadingSkeleton";

const RecentListings = ({recentListingPromise}) => {

  console.log(recentListingPromise)

  const products = use(recentListingPromise)
  console.log(products)
  const {loading} =useContext(AuthContext)
  
  
   if (loading) return <LoadingSkeleton count={6} />;


  return (
    <section className="py-12 mb-25 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-6 text-center">
        🐾 Recent Listings
      </h2>
       <div className="pt-3 flex justify-end mr-13 mb-5 ">
             <Link
               to={`/pet-supplies`}
               className=" text-center  p-3 text-sm font-medium text-white bg-linear-to-r from-purple-600 to-pink-600 rounded-md py-2 hover:from-purple-700 hover:to-pink-700 hover:pl-3 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
               aria-label={`View details of all product`}
             >
               View All
             </Link>
           </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-6 md:px-12">
        {products.map((listing) => (
          <div
            key={listing.id}
            className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-2 hover:shadow-2xl transition duration-300"
          >
     {/* Image */}
         <div className="relative  m-2 bg-gray-100 dark:bg-gray-800">
           <img
             src={listing.image || "https://via.placeholder.com/400"}
             alt={listing.name}
             className="w-full rounded-lg h-56 object-cover"
             loading="lazy"
           />
   
           {/* Category Badge */}
           <span
             className=" absolute top-3 right-3 bg-linear-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-xs font-semibold text-white shadow "
           >
             {listing.category}
           </span>
         </div>
   
         {/* Content */}
         <div
           className=" p-4 flex flex-col gap-3 bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 "
         >
           {/* Title */}
           <h2
             className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-snug line-clamp-2 group-hover:text-purple-600 transition-colors"
           >
             {listing.name}
           </h2>
   
           <p
             className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2"
           >
             {listing.description}
           </p>
           {/* Location */}
           <p
             className=" flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"
           >
             📍 {listing.location}
           </p>
   
           {/* Price */}
           <p
             className="text-lg font-semibold text-gray-900 dark:text-gray-100"
           >
             {listing.price ? `$${listing.price}` : "Free Adoption"}
           </p>
           {/* Action */}
           <div className="pt-3 mt-auto">
             <Link
               to={`/products/product-details/${listing._id}`}
               className=" block w-full text-center text-sm font-medium text-white bg-linear-to-r from-purple-600 to-pink-600 rounded-md py-2 hover:from-purple-700 hover:to-pink-700 hover:p-3 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
               aria-label={`View details of ${listing.name}`}
             >
               View details
             </Link>
           </div>
         </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentListings;
