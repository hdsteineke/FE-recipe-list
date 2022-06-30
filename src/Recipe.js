import React from 'react';
import { deleteRecipe } from './services/fetch-recipes';

export default function Recipe({ recipe, getRecipesOnLoad }) {
  async function handleDelete() {
    await deleteRecipe(recipe.id);
    await getRecipesOnLoad();
  }
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <p>{recipe.cookTime}</p>
      <p>{recipe.prepTime}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
