import React from "react";
import products from "../Data/Products.js";
import ProductCard from "../components/ProductCard";
import Bangle from '../assets/banglr.jpg'
import Contact from "./Contact.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white "
        style={{
          backgroundImage:
            `url(${Bangle})`, opacity:'88%',backgroundAttachment: "fixed",
        }}
      >
        <h1 className="text-5xl font-bold  bg-opacity-50 px-4 py-2 rounded">
          Welcome to Bangle Bazaar
        </h1>
        <p className="mt-4 text-lg font-bold  px-4 py-2 rounded bg-black/60 bg-opacity-70">
          Exclusive handcrafted bangles for every occasion
        </p>
        <button className="mt-6 bg-blue-600 cursor-pointer px-6 py-3 rounded-xl text-white font-bold hover:bg-primary-dark">
         <Link to='/Shop'> Shop Now </Link>
        </button>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section
        className="py-16 text-white text-center"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1396888542/photo/traditional-indian-gold-bangles.jpg?s=612x612&w=0&k=20&c=AdN1FpAbh8VCCsqo2bB3RQp6_TxFtPucJ-n0UlzOgGI=')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="bg-black/60 p-6 rounded-lg">
            "Absolutely loved the quality and design of the bangles. Perfect for
            my wedding!"
            <br />
            <span className="text-yellow-300 font-bold">– Priya S.</span>
          </p>
          <p className="bg-black/60 p-6 rounded-lg">
            "Great service and fast delivery. I will definitely order again."
            <br />
            <span className="text-yellow-300 font-bold">– Anjali K.</span>
          </p>
        </div>
      </section>
      <Contact/>
    </div>
  );
}
