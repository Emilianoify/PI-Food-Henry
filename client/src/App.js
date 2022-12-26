import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LangingPage';
import Home from './components/Home/Home'
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/create" component={CreateRecipe}/>
    </div>
  );
}

export default App;
