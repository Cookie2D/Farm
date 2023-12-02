import React from 'react';
import Header from './components/header/Header';
import MenuIcons from './components/menu-icons/MenuIcons';
import Area from './components/area/Area';
import Modal from './components/modal/Modal';
import Storage from './components/storage/Storage';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Area />
      <MenuIcons />

      <Modal title="Storage" type="storage">
        <Storage />
      </Modal>
    </div>
  );
};

export default App;
