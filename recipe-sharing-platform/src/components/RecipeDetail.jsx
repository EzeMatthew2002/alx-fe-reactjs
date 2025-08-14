import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesFromSrc from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeId = String(id); 
    console.log(recipeId)
    if (recipesFromSrc && recipesFromSrc.length > 0) {
      const foundRecipe = recipesFromSrc.find(
        (item) => String(item.id) === recipeId
      );
      setRecipe(foundRecipe);
      
    } else {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          const foundRecipe = data.find(
            (item) => String(item.id) === recipeId
          );
          setRecipe(foundRecipe);
        })
        .catch((err) => console.error("Error loading recipes:", err));
    }
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center py-10 text-lg text-gray-500">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        to="/"
        className="text-blue-500 hover:underline inline-block mb-4"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {recipe.title}
          </h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </>
          )}

          {recipe.instructions && recipe.instructions.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-2">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
