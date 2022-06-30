import React from 'react';
import Recipe from './Recipe';
import { useState } from 'react';
import { createRecipe } from './services/fetch-recipes';

export default function RecipeList({ recipes, getRecipesOnLoad }) {
  const [recipeInForm, setRecipeInForm] = useState({
    title: '',
    description: '',
    prepTime: 0,
    cookTime: 0,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await createRecipe(recipeInForm);
    await getRecipesOnLoad();
  }

  return (
    <div>
      <div>
        {recipes.map((recipe, i) => (
          <Recipe getRecipesOnLoad={getRecipesOnLoad} recipe={recipe} key={i} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Create New Recipe</h2>
        <label>
          Title
          <input
            defaultValue=""
            onChange={(e) => setRecipeInForm({ ...recipeInForm, title: e.target.value })}
            name="title"
          ></input>
        </label>
        <label>
          Description
          <input
            onChange={(e) => setRecipeInForm({ ...recipeInForm, description: e.target.value })}
            required
            name="description"
          ></input>
        </label>
        <label>
          Prep Time
          <input
            onChange={(e) => setRecipeInForm({ ...recipeInForm, prepTime: e.target.value })}
            required
            name="prepTime"
            type="number"
          ></input>
        </label>
        <label>
          Cook Time
          <input
            onChange={(e) => setRecipeInForm({ ...recipeInForm, cookTime: e.target.value })}
            required
            name="cookTime"
            type="number"
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
