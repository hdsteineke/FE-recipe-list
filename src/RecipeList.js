import React from 'react';

export default function RecipeList({ recipes }) {
  return (
    <div>RecipeList
      {recipes.map((recipe, i) => 
        <div className="recipeList" key={recipe.title + i}>
          {recipe.title}
        </div>
      )}
    </div>
  );
}
