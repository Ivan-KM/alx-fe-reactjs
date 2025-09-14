import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStore } from '../stores/recipeStore'


const RecipeList = () => {
const recipes = useRecipeStore((state) => state.recipes)
const searchTerm = useRecipeStore((state) => state.searchTerm)
const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)
const filterRecipes = useRecipeStore((state) => state.filterRecipes)


useEffect(() => {
filterRecipes()
}, [recipes, searchTerm, filterRecipes])


const displayRecipes = searchTerm ? filteredRecipes : recipes


if (!displayRecipes || displayRecipes.length === 0) {
return <p>No recipes match your search.</p>
}


return (
<div>
{displayRecipes.map((recipe) => (
<div key={recipe.id} style={{ border: '1px solid #ddd', marginBottom: 10, padding: 10 }}>
<h3>
<Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
</h3>
<p>{recipe.description}</p>
</div>
))}
</div>
)
}


export default RecipeList