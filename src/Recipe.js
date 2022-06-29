import React from 'react';

export default function Recipe({ recipe }) {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <p>{recipe.cookTime}</p>
      <p>{recipe.prepTime}</p>
    </div>
  );
}
