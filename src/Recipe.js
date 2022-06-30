import React from 'react';

export default function Recipe({ recipe, getRecipesOnLoad }) {
  async function handleDelete(id) {
    await deleteRecipe(id);
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
