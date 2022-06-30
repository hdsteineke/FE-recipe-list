import React from 'react';

export default function Recipe({ recipe }) {
  async function handleDelete(id) {
    await deleteRecipe(id);
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
