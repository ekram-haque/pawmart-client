import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const ListingDetailsPage = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    date: "",
    phone: "",
    notes: "",
  });

  const isOwner = user?.email === product.email;

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      buyerName: user?.displayName || "Anonymous User",
      buyerEmail: user?.email,
      productId: product._id,
      productName: product.name,
      price: product.price || 0,
      address: formData.address,
      date: formData.date,
      phone: formData.phone,
      notes: formData.notes,
    };

    fetch("https://pawmart-server-nine.vercel.app/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("🎉 Order placed successfully!");
        setShowModal(false);
        setFormData({ address: "", date: "", phone: "", notes: "" });
      })
      .catch((err) => {
        console.error(err);
        toast.error("❌ Failed to place order!");
      });
  };
  useEffect(() => {
    fetch(
      `http://localhost:5000/related/${encodeURIComponent(product.category)}/${
        product._id
      }`
    )
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data))
      .catch((err) => console.error("Failed to fetch related products", err));
  }, [product.category, product._id]);

  const images = Array(5).fill(product.image);

  return (
    <div className="container mx-auto px-4 py-10 space-y-12">
      {/* ================= IMAGE SLIDER ================= */}
      <section>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-2xl"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt="Product"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="space-y-4">
        <div className="flex justify-between items-center ">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {product.name}
          </h1>
          <button className="px-7 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition">
            {product.price && product.price > 0 ? `$${product.price}` : "Free"}
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {product.description}
        </p>
      </section>

      {/* ================= KEY INFORMATION ================= */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold mb-3">📌 Basic Info</h3>
          <ul className="space-y-2 text-sm">
            <li>Category: {product.category}</li>
            <li>location: {product.location}</li>
            <li>create date: {product.date}</li>
            <li>Status: {product.status}</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold mb-3">📜 Rules</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>No illegal usage</li>
            <li>Return within 7 days</li>
            <li>Valid ID required</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold mb-3">⭐ Rating</h3>
          <p className="text-2xl font-bold">{product.rating || "0"} / 5</p>
        </div>
      </section>

      {/* ================= ORDER BUTTON ================= */}
      {!isOwner && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            🛒 Adopt / Order Now
          </button>
        </div>
      )}

      {/* ================= REVIEWS ================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Reviews</h2>
        {product.reviews?.length > 0 ? (
          product.reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="font-semibold">{review.user}</h4>
              <p className="text-sm text-gray-500">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </section>

      {/* ================= RELATED ITEMS ================= */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Related Listings</h2>
          <Link
            to={`/products/category/${product.category}`}
            className="text-purple-600 font-medium"
          >
            View All
          </Link>
        </div>

        {relatedProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <motion.article
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className=" bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] m-4 bg-gray-100 dark:bg-gray-800">
                  <img
                    src={item.image || "https://via.placeholder.com/400"}
                    alt={item.name}
                    className="w-full rounded-lg h-full object-cover"
                    loading="lazy"
                  />

                  {/* Category Badge */}
                  <span className=" absolute top-3 right-3 bg-linear-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-xs font-semibold text-white shadow ">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className=" p-4 flex flex-col gap-3 bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 ">
                  {/* Title */}
                  <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-snug line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  {/* Location */}
                  <p className=" flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    📍 {item.location}
                  </p>

                  {/* Price */}
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {item.price ? `$${item.price}` : "Free Adoption"}
                  </p>
                  {/* Action */}
                  <div className="pt-3 mt-auto">
                    <Link
                      to={`/products/product-details/${item._id}`}
                      className=" block w-full text-center text-sm font-medium text-white bg-linear-to-r from-purple-600 to-pink-600 rounded-md py-2 hover:from-purple-700 hover:to-pink-700 hover:p-3 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
                      aria-label={`View details of ${item.name}`}
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No related products found.</p>
        )}
      </section>

      {/* ================= ORDER MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative animate-slideUp">
            <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
              🧾 Adoption / Order Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Buyer Name
                </label>
                <input
                  type="text"
                  value={user?.displayName || "Anonymous User"}
                  readOnly
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Product / Listing
                </label>
                <input
                  type="text"
                  value={product.name}
                  readOnly
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Price ($)
                </label>
                <input
                  type="text"
                  value={product.price || "0"}
                  readOnly
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter your address"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Pick-up Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Optional notes..."
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transform transition"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingDetailsPage;
