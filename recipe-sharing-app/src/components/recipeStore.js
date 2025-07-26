import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // auto-filter on update
  },

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addRecipe: (newRecipe) => set((state) => {
    const updated = [...state.recipes, newRecipe];
    return {
      recipes: updated,
      filteredRecipes: updated.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  // other actions: updateRecipe, deleteRecipe, etc.
}));
