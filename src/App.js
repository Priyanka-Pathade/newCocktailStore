import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import SingleCocktail from './Pages/SingleCocktail';
import Error from './Pages/Error';

function App() {
  return (
    <Router >
       <Navbar />
         <Route exact path='/' component={Home}/>
         <Route path='/about' component={About} />
         <Route path='/cocktail/:id' component={SingleCocktail} />
         <Route path='*' component={Error} />
     </Router>
  );
}

export default App;
