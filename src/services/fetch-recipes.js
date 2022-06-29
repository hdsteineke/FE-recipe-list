export async function getAllRecipes() {
  const resp = await fetch(`${process.env.API_URL}/api/v1/recipes`);
  console.log(resp.body);
  return resp.json();
}
