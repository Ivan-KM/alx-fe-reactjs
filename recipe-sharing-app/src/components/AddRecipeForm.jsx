import React, { useState } from 'react'
import { useRecipeStore } from '../stores/recipeStore'


const AddRecipeForm = () => {
const addRecipe = useRecipeStore((state) => state.addRecipe)
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')


const handleSubmit = (e) => {
e.preventDefault()
const trimmedTitle = title.trim()
if (!trimmedTitle) return


addRecipe({ id: Date.now().toString(), title: trimmedTitle, description: description.trim() })
setTitle('')
setDescription('')
}


return (
<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 600 }}>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="Recipe title"
aria-label="Recipe title"
/>


<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
placeholder="Short description / ingredients / steps"
rows={4}
aria-label="Recipe description"
/>


<button type="submit">Add Recipe</button>
</form>
)
}


export default AddRecipeForm