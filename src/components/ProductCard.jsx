"use client";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group w-[270px] bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

      {/* Image */}
      <div className="relative bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-[210px] w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">

        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-base leading-tight line-clamp-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-1">
          {product.desc}
        </p>

        {/* CTA */}
        <button
          onClick={handleAdd}
          className="group relative flex items-center justify-center mt-4 py-2 text-sm font-medium text-white rounded-md overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#53015b] via-[#7b0f86] to-[#a21caf] shadow-lg shadow-purple-900/30 hover:shadow-[0_10px_30px_rgba(162,28,175,0.6)]"
        >
          {/* Shine */}
          {!added && (
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-700 ease-in-out" />
            </span>
          )}

          {/* Border */}
          <span className="absolute inset-0 rounded-md border border-white/10 group-hover:border-white/30 transition" />

          {/* Content */}
          <span className="relative z-10 flex items-center gap-3 tracking-wide">
            Add To Cart

            {!added && (
              <span className="relative w-8 h-8 flex items-center justify-center rounded-md bg-white/20 backdrop-blur-sm overflow-hidden">
                <span className="relative w-4 h-4">
                  <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <svg
  className="w-4 h-4"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M5 8h14l-1 12H6L5 8z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 8a3 3 0 016 0"
  />
</svg>
                  </span>
                </span>
              </span>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}