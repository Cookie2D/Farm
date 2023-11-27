import React from 'react';

import Field from './components/Field/Field';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';

const App = () => {
  const { fields } = useSelector(state => state.area);
  const { wheat } = useSelector(state => state.storage);

  return (
    <div className="container">
      <Header />
      {fields.map(field => (
        <Field key={field.id} field={field} />
      ))}

      <h1>{wheat}</h1>
    </div>
  );
};

export default App;

