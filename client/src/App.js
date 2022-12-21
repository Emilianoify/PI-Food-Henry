import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LangingPage';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={NavBar}/>
      <Route exact path="/home" component={Home}/>
    </div>
  );
}

export default App;
