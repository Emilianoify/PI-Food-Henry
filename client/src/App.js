import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LangingPage';
import Home from './components/Home/Home';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import './App.css'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route path="/recipe/:id" component={RecipeDetail} />
      <Route path="/create" component={CreateRecipe}/>
    </div>
  );
}

export default App;
