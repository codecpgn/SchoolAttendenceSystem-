import React from 'react';
//import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import LoginUi from './components/LoginUi';
import Register from './components/Register';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/about' component={About}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/login' component={LoginUi}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
