import React, { useMemo } from 'react'
import { useRecipeStore } from './recipeStore'

const FavoritesList = () => {
  // Subscribe separately to recipes and favorites IDs
  const recipes = useRecipeStore((state) => state.recipes)
  const favoritesIds = useRecipeStore((state) => state.favorites)

  // Memoize the derived favorites array to avoid infinite loops
  const favorites = useMemo(() => {
    return favoritesIds
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean) // filter out undefined if recipe is deleted
  }, [favoritesIds, recipes])

  if (!favorites.length) return <p>No favorite recipes yet.</p>

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: '1px solid #ddd', padding: 10, marginBottom: 10 }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FavoritesList