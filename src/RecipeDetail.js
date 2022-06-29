import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRecipeById } from './services/fetch-recipes';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    async function getRecipe() {
      const recipe = await getRecipeById(id);
      setRecipeDetails(recipe);
    }
    getRecipe();
  }, [id]);

  return (
    <div>RecipeDetail
      <h3>{recipeDetails.title}</h3>
      <p>{recipeDetails.description}</p>
    </div>
  );
}
