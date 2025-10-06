import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json"; // adjust path if your data.json is elsewhere

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    setRecipes(data);
    }, []);

    const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
    };

    return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍳 Recipe Sharing Platform
        </h1>

      {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
            <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(recipe.id)}
            >
            {/* Recipe Image */}
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">
                {recipe.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">{recipe.summary}</p>

              {/* View Button */}
                <button className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                View Recipe
                </button>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
};

export default HomePage;
