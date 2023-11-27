import React from 'react';

import Field from './components/Field/Field';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import MenuIcons from './components/menu-icons/MenuIcons';

const App = () => {
  const { fields } = useSelector(state => state.area);

  return (
    <div className="container">
      <Header />
      {fields.map(field => (
        <Field key={field.id} field={field} />
      ))}

      <MenuIcons />
    </div>
  );
};

export default App;

