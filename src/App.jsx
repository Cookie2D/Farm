import React from 'react';
import Header from './components/header/Header';
import MenuIcons from './components/menu-icons/MenuIcons';
import Area from './components/area/Area';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Area />
      <MenuIcons />
    </div>
  );
};

export default App;

