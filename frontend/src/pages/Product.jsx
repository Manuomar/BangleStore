import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../Data/Products.js"; // Example local data

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find the selected product
  const product = products.find((p) => p.id.toString() === id);

  // Get related products (same category)
  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  if (!product) {
    return <div className="p-6 text-red-500">Product not found</div>;
  }

  return (
    <div className="p-6">
      {/* Product Main Info */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/3 h-80 object-cover rounded-md"
        />
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-primary font-bold text-xl mt-4">₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <h2 className="text-xl font-bold mt-10 mb-4">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">{item.name}</h3>
            <p className="text-primary font-bold">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

