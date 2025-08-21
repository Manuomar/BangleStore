import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
export default function ProductCard({ product }) {
  const {addToCart} = useCart();
  const navigate = useNavigate();
  return (
    <div 
     onClick={() => navigate(`/product/${product.id}`)}
        
    className="bg-white rounded-lg cursor-pointer shadow-md p-4 hover:shadow-lg transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-3">{product.name}</h3>
      <p className="text-gray-600 text-sm mt-1">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-primary font-bold text-lg">₹{product.price}</span>
        <button
        onClick={()=>addToCart(product)}
         className="bg-primary text-white bg-blue-600 cursor-pointer p-2 rounded-xl font-bold  px-4 py-2  hover:bg-primary-dark">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
