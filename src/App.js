import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
// import HatsPage from './pages/hatspage/hatspage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signin-signup/signin-signup.component';

function App() {
  return  (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component= {HomePage} />
        <Route path='/shop' component= {ShopPage} />
        <Route path='/signin' component= {SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
