import React, { useEffect } from 'react'
import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'


const RecommendationsList = () => {
const recipes = useRecipeStore((state) => state.recipes)
const recommendations = useRecipeStore((state) => state.recommendations)
const generateRecommendations = useRecipeStore((state) => state.generateRecommendations)


useEffect(() => {
generateRecommendations()
}, [recipes, generateRecommendations])


if (!recommendations || recommendations.length === 0) return <p>No recommendations available.</p>


return (
<div>
<h2>Recommended for You</h2>
{recommendations.map((recipe) => (
<div key={recipe.id} style={{ border: '1px solid #ddd', padding: 10, marginBottom: 10 }}>
<h3>
<Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
</h3>
<p>{recipe.description}</p>
</div>
))}
</div>
)
}


export default RecommendationsList