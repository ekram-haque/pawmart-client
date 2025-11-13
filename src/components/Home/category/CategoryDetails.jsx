import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/products/category-filtered-product/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p>Loading...</p>;

  if (products.length === 0)
    return <p>No products found in {category} category.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Products in "{category}" category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p._id} className="border p-4 rounded-lg shadow">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-medium mt-2">{p.name}</h3>
            <p className="text-gray-600">{p.price ? `$${p.price}` : "Free for Adoption"}</p>
            <p className="text-sm text-gray-500">{p.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
