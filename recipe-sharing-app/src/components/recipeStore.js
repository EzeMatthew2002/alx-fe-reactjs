import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addRecipe: (newRecipes) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipes],
    })),

  favorites: [],
addFavorite: (id) => set((state) => ({ favorites: [...state.favorites, id] })),
removeFavorite: (id) =>
  set((state) => ({ favorites: state.favorites.filter((fid) => fid !== id) })),
recommendations: [],
generateRecommendations: () =>
  set((state) => ({
    recommendations: state.recipes.filter((r) =>
      state.favorites.includes(r.id) && Math.random() > 0.5
    ),
  })),


  setRecipes: (recipes) => set({ recipes }),
}));
