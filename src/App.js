import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Navigation from './components/Navbar';
import Pcarousel from './components/Pcarousel';
import { Provider } from "react-redux";
import { store } from "./redux";
function App() {

  return (

    <div className="app-wrapper">
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Router />
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
