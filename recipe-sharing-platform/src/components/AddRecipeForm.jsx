import React, { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState(""); // renamed from instructions
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!title || !ingredients || !steps) {
            setError("Please fill out all fields.");
            return;
        }

        const ingredientArray = ingredients.split(",").map((i) => i.trim());
        if (ingredientArray.length < 2) {
            setError("Please provide at least two ingredients, separated by commas.");
            return;
        }

        const stepsArray = steps.split(".").map((i) => i.trim()).filter(Boolean); // renamed

        const newRecipe = {
            id: Date.now(),
            title,
            summary: stepsArray[0] || "",
            ingredients: ingredientArray,
            steps: stepsArray, // renamed from instructions
            image: "/images/default-recipe.jpg", // default placeholder
        };

        addRecipe(newRecipe);

        // Reset form
        setTitle("");
        setIngredients("");
        setSteps(""); // reset
        setError("");
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Recipe</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Ingredients (comma separated)</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Preparation Steps (separate with periods)</label>
                    <textarea
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
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
