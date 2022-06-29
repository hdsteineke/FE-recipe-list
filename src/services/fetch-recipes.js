export async function getAllRecipes() {
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/recipes`);
  return resp.json();
}

export async function getRecipeById(id) {
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/recipes/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors',
  });
  return resp.json();
}

export async function createRecipe(newRecipe) {
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(newRecipe)
  });
  return resp.json();
}