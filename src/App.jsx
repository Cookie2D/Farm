import React from 'react';

import Field from './components/Field/Field';
import { useSelector } from 'react-redux';

const App = () => {
  const { fields } = useSelector(state => state.area);
  const { wheat } = useSelector(state => state.storage);

  return (
    <div className="container">
      {fields.map(field => (
        <Field key={field.id} field={field} />
      ))}

      <h1>{wheat}</h1>
    </div>
  );
};

export default App;

