import './App.css';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Card from './components/Card';
import Detail from './pages/Detail'
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Navigation from './components/Navbar';
import Pcarousel from './components/Pcarousel';

function App() {

  return (
    
    <div className="app-wrapper">
     <BrowserRouter>
     <Navigation/>

     <Router/>
     </BrowserRouter>
     
    </div>

  );
}

export default App;
