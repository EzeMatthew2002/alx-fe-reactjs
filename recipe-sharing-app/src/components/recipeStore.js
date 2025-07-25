import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipes) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipes],
    })),
  setRecipes: (recipes) => set({ recipes }),
}));
