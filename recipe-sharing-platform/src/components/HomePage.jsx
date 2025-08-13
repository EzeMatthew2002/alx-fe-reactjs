import React, { useState, useEffect } from "react";
import recipesFromSrc from "../data.json"; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (recipesFromSrc && recipesFromSrc.length > 0) {
     
      setRecipes(recipesFromSrc);
    } else {
      // Fallback: Fetch from public folder
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setRecipes(data))
        .catch((err) => console.error("Error loading recipes:", err));
    }
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.length === 0 ? (
        <p>Loading recipes...</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
