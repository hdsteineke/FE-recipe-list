export async function getAllRecipes() {
  const resp = await fetch(`http://localhost:7890/api/v1/recipes`);
  console.log(JSON.stringify(resp.body));
  console.log('resp', resp);
  return resp.json();
}
