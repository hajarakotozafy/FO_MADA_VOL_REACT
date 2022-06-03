import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Switch>

        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
