import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favorite from './Components/Favorite';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    
    <Router>
    <Navbar />
    <Switch>
    <Route path='/' exact  render={(props)=>(
          <>
            <Banner {...props}/>
            <Movies {...props}/>
          </>
    )}/>
    <Route path='/favorites' component={Favorite}/>
    </Switch>
    </Router>
    
  );
}

export default App;
