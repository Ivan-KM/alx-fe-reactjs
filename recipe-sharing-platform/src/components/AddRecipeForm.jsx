import React, { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [errors, setErrors] = useState({});

  // Validation function
    const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split(",").map(i => i.trim()).length < 2)
        newErrors.ingredients = "Please provide at least two ingredients, separated by commas.";

    if (!instructions.trim()) newErrors.instructions = "Preparation steps are required.";
    else if (instructions.split(".").filter(Boolean).length === 0)
        newErrors.instructions = "Please provide at least one preparation step.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const ingredientArray = ingredients.split(",").map((i) => i.trim());
    const instructionArray = instructions
        .split(".")
        .map((i) => i.trim())
        .filter(Boolean);

    const newRecipe = {
        id: Date.now(),
        title,
        summary: instructionArray[0] || "",
        ingredients: ingredientArray,
        instructions: instructionArray,
      image: "/images/default-recipe.jpg", // default placeholder
    };

    addRecipe(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
    };

    return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
            <label className="block text-gray-700 font-medium mb-1">
            Ingredients (comma separated)
            </label>
            <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        <div>
            <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps (separate with periods)
            </label>
            <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>

        <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
            Add Recipe
        </button>
        </form>
    </div>
    );
};

export default AddRecipeForm;
