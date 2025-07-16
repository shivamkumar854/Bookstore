import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 p-3">
      <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border border-gray-700 w-full h-full">
        <figure>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-lg font-semibold flex items-center justify-between mb-2">
            {item.name}
            <span className="badge badge-secondary">{item.category}</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.title}</p>
          <div className="flex items-center justify-between">
            <span className="badge badge-outline text-sm">${item.price}</span>
            <button className="px-3 py-1 text-sm rounded-full border-2 border-pink-500 hover:bg-pink-500 hover:text-white transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
