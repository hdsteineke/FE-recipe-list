import React, { useEffect } from 'react';
import Recipe from './Recipe';
import { useState } from 'react';
import { createRecipe, getAllRecipes } from './services/fetch-recipes';

export default function RecipeList() {
  const [recipes, setRecipes] = useState([
    {
      id: 3,
      title: 'Lasagna',
      description: 'cheesy goodness',
      prepTime: 10,
      cookTime: 45,
      totalTime: 55,
      servings: 8,
    },
  ]);
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

  async function getRecipesOnLoad() {
    const recipeList = await getAllRecipes();

    if (recipeList) {
      setRecipes(recipeList);
    }
  }

  useEffect(() => {
    getRecipesOnLoad();
  }, []);

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
