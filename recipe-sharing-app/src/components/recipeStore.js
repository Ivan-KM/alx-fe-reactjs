import { create } from 'zustand'


export const useRecipeStore = create((set) => ({
recipes: [],
searchTerm: '',
filteredRecipes: [],
favorites: [],
recommendations: [],


// Recipe CRUD
addRecipe: (newRecipe) =>
set((state) => ({ recipes: [...state.recipes, newRecipe] })),
deleteRecipe: (id) =>
set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
updateRecipe: (id, updatedFields) =>
set((state) => ({
recipes: state.recipes.map((r) =>
r.id === id ? { ...r, ...updatedFields } : r
),
})),


setRecipes: (recipes) => set({ recipes }),


// Search & filtering
setSearchTerm: (term) => set({ searchTerm: term }),
filterRecipes: () =>
set((state) => ({
filteredRecipes: state.recipes.filter((recipe) =>
recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
),
})),


// Favorites management
addFavorite: (recipeId) =>
set((state) => ({ favorites: [...state.favorites, recipeId] })),
removeFavorite: (recipeId) =>
set((state) => ({ favorites: state.favorites.filter((id) => id !== recipeId) })),


// Recommendations (mock implementation)
generateRecommendations: () =>
set((state) => {
const recommended = state.recipes.filter(
(recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
)
return { recommendations: recommended }
}),
}))