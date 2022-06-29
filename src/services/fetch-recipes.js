export async function getAllRecipes() {
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/recipes`);
  console.log(JSON.stringify(resp.body));
  console.log('resp', resp);
  return resp.json();
}
