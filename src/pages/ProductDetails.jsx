import React from "react";
import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-2">Category: {product.category}</p>
      <p className="text-xl font-semibold text-purple-600 mb-4">
        Price: ${product.price}
      </p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
