import React, { useState, useEffect } from "react";

import recipesFromSrc from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (recipesFromSrc && recipesFromSrc.length > 0) {
      setRecipes(recipesFromSrc);
    } else {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setRecipes(data))
        .catch((err) => console.error("Error loading recipes:", err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        🍽️ Delicious Recipes
      </h1>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-500">Loading recipes...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {recipe.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm">{recipe.summary}</p>
                <button className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
