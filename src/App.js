import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import RecipeList from './RecipeList';
import { getAllRecipes } from './services/fetch-recipes';
import RecipeDetail from './RecipeDetail';
import AuthPage from './AuthPage';
import { getUser } from './services/fetch-users';

function App() {
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
  const [user, setUser] = useState(null);

  async function getRecipesOnLoad() {
    const recipeList = await getAllRecipes();

    if (recipeList) {
      setRecipes(recipeList);
    }
  }

  async function getUserOnLoad() {
    const userOnLoad = await getUser();

    if (userOnLoad) {
      setUser(userOnLoad);
    }
  }

  useEffect(() => {
    getRecipesOnLoad();
    getUserOnLoad();
  }, []);

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <AuthPage setUser={setUser} />
            {/* {user ? <Redirect to={'/recipes'}/> : <AuthPage setUser={setUser} />} */}
          </Route>
          <Route exact path="/recipes">
            <RecipeList recipes={recipes} getRecipesOnLoad={getRecipesOnLoad} />
            {/* {user ? (
              <RecipeList recipes={recipes} getRecipesOnLoad={getRecipesOnLoad} />
            ) : (
              <Redirect to={'/'} />
            )} */}
          </Route>
          <Route exact path="/recipes/:id">
            <RecipeDetail />
            {/* {user ? <RecipeDetail /> : <Redirect to={'/'} />} */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
