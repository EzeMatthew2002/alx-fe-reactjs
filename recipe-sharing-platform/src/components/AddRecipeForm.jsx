import React, { useState } from "react";
import recipesFromSrc from "../data.json"; // For now, this is static, so changes won’t persist without backend/localStorage

const AddRecipeForm = () => {
  const [addRecipe, setRecipe] = useState({
    title: "",
    summary: "",
    image: "",
    ingredients: [],
    instructions: [],
    steps: []
  });
   const [errors, setErrors] = useState({})

   const validate = () => {
    let newErrors = {};

    if (!addRecipe.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!addRecipe.summary.trim()) {
      newErrors.summary = "Summary is required";
    }
    if (!addRecipe.image.trim()) {
      newErrors.image = "Image URL is required";
    }
    if (addRecipe.ingredients.length === 0 || !addRecipe.ingredients[0].trim()) {
      newErrors.ingredients = "At least one ingredient is required";
    }
    if (addRecipe.steps.length === 0 || !addRecipe.steps[0].trim()) {
      newErrors.steps = "At least one step is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!addRecipe.title || !addRecipe.summary || !addRecipe.image) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log("New Recipe Added:", addRecipe);

   
    recipesFromSrc.push(addRecipe);

    // Reset form
    setRecipe({
      title: "",
      summary: "",
      image: "",
      ingredients: [],
      instructions: [],
      steps: []
    });
  };

  return (
    <div className="max-w-2x1 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title:</label>
          <input
            type="text"
            value={addRecipe.title}
            onChange={(e) => setRecipe({ ...addRecipe, title: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder="Enter recipe title"
            required
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Summary:</label>
          <textarea
            value={addRecipe.summary}
            onChange={(e) => setRecipe({ ...addRecipe, summary: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder="Short description"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL:</label>
          <input
            type="text"
            value={addRecipe.image}
            onChange={(e) => setRecipe({ ...addRecipe, image: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Ingredients (one per line):</label>
          <textarea
            value={addRecipe.ingredients.join("\n")}
            onChange={(e) =>
              setRecipe({ ...addRecipe, ingredients: e.target.value.split("\n") })
            }
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder="Flour\nSugar\nEggs"
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Instructions (one step per line):</label>
          <textarea
            value={addRecipe.instructions.join("\n")}
            onChange={(e) =>
              setRecipe({ ...addRecipe, instructions: e.target.value.split("\n") })
            }
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder="Step 1\nStep 2\nStep 3"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
