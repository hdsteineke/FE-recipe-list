import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRecipeById } from './services/fetch-recipes';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [updateRecipeInForm, setUpdateRecipeInForm] = useState({});

  useEffect(() => {
    async function getRecipe() {
      const recipe = await getRecipeById(id);
      setRecipeDetails(recipe);
    }
    getRecipe();
  }, [id]);

  async function handleUpdate() {
    await updateRecipe({ id, ...updateRecipeInForm });
  }

  return (
    <div>
      <div>
        RecipeDetail
        <h3>{recipeDetails.title}</h3>
        <p>{recipeDetails.description}</p>
      </div>
      <form onSubmit={handleUpdate}>
        <h2>Update Recipe</h2>
        <label>
          Title
          <input
            defaultValue=""
            onChange={(e) =>
              setUpdateRecipeInForm({ ...updateRecipeInForm, title: e.target.value })
            }
            name="title"
          ></input>
        </label>
        <label>
          Description
          <input
            onChange={(e) =>
              setUpdateRecipeInForm({ ...updateRecipeInForm, description: e.target.value })
            }
            required
            name="description"
          ></input>
        </label>
        <label>
          Prep Time
          <input
            onChange={(e) =>
              setUpdateRecipeInForm({ ...updateRecipeInForm, prepTime: e.target.value })
            }
            required
            name="prepTime"
            type="number"
          ></input>
        </label>
        <label>
          Cook Time
          <input
            onChange={(e) =>
              setUpdateRecipeInForm({ ...updateRecipeInForm, cookTime: e.target.value })
            }
            required
            name="cookTime"
            type="number"
          ></input>
        </label>
        <button>Update</button>
      </form>
    </div>
  );
}
