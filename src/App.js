import React from 'react';
import HomePage from "./components/pages/HomePage";
import TopNavigation from './components/navigation/TopNavigation';



const App = ({ location }) =>

  <div>
    <TopNavigation />
    <HomePage />
  </div>

export default App;
