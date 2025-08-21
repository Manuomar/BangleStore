import React, { useState, useEffect } from "react";
import productsData from "../Data/Products.js";
import Card from "../components/ProductCard";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [suggestions, setSuggestions] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Update suggestions when search changes
  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matchedSuggestions = productsData
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 5);

    setSuggestions(matchedSuggestions);
  }, [search]);

  // Filter products automatically when filters change
  useEffect(() => {
    let result = productsData;

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (minPrice) {
      result = result.filter((p) => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice));
    }

    setFilteredProducts(result);
  }, [search, minPrice, maxPrice]);

  // Handle suggestion click - set search and clear suggestions
  const handleSuggestionClick = (name) => {
    setSearch(name);
    setSuggestions([]);
  };

  // Clear all filters and reset
  const clearFilters = () => {
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
    setSuggestions([]);
  };

  // Form submit just prevents default (optional)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSuggestions([]);
    // Filtering happens automatically in useEffect
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Search + Filter Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Search bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex w-full md:w-2/3 relative"
          autoComplete="off"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for bangles, jewelry..."
            className="flex-1 px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md text-white font-semibold"
          >
            🔍
          </button>

          {/* Suggestions dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-md shadow-md z-10 max-h-52 overflow-y-auto">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  onClick={() => handleSuggestionClick(s.name)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {s.name}
                </li>
              ))}
            </ul>
          )}
        </form>

        {/* Price filter inputs */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min ₹"
            className="w-20 px-2 py-1 border rounded"
            min="0"
          />
          <span>-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max ₹"
            className="w-20 px-2 py-1 border rounded"
            min="0"
          />
          <button
            onClick={clearFilters}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Products grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}
