import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
    const selectedRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
    }, [id]);

    if (!recipe) return <p className="text-center mt-8">Loading...</p>;

    return (
    <div className="container mx-auto px-4 py-8">
        <Link
        to="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
        >
        ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {recipe.title}
        </h1>

        <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-h-96 object-cover rounded-2xl mb-6"
        />

        <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
            {recipe.ingredients?.map((ing, index) => (
            <li key={index}>{ing}</li>
            ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
            {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
            ))}
        </ol>
        </div>
    </div>
    );
};

export default RecipeDetail;
