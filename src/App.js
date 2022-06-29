import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import RecipeList from './RecipeList';

function App() {
  const [recipes, setRecipes] = useState([{
    id: 3,
    title: 'Lasagna',
    description: 'cheesy goodness',
    prepTime: 10,
    cookTime: 45,
    totalTime: 55,
    servings: 8
  }]);

  return (
    <Router>
      <div>
    
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <RecipeList recipes={recipes} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
