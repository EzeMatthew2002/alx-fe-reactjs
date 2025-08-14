import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🍽 Recipe Collection
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
            </div>

            {/* Link to the detail page */}
            <div className="p-4">
              <Link
                to={`/recipe/${recipe.id}`}
                className="block w-full text-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
