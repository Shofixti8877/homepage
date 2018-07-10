import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import TopNavigation from './components/navigation/TopNavigation';



const App = ({ location }) =>

  <div>
    <TopNavigation />
    <Route location ={location} path="/" exact component={HomePage} />
  </div>

export default App;
