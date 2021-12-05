import React from 'react';
import './App.css'
import Home from './components/Home'
import Html from './components/Html'
import Css from './components/Css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/html" component={Html} />
        <Route path="/css" component={Css} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
