import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'
import { useRecipeStore } from './stores/recipeStore'


export default function App() {
const setRecipes = useRecipeStore((state) => state.setRecipes)


useEffect(() => {
setRecipes([
{ id: '1', title: 'Spaghetti Bolognese', description: 'Classic Italian pasta with meat sauce.' },
{ id: '2', title: 'Banana Pancakes', description: 'Quick fluffy pancakes with mashed bananas.' },
])
}, [setRecipes])


return (
<Router>
<div style={{ padding: 20 }}>
<h1>Recipe Sharing App</h1>
<Routes>
<Route
path="/"
element={
<>
<AddRecipeForm />
<SearchBar />
<hr />
<RecipeList />
<FavoritesList />
<RecommendationsList />
</>
}
/>
<Route path="/recipes/:recipeId" element={<RecipeDetails />} />
</Routes>
</div>
</Router>
)
}