import React, { useState } from 'react';
import './App.css';
import Form from './Form'

const initialFormValues = {
  username:'',
  email:'',
  password:'',
  terms: false,
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)

  const update = (name, value) => {
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = () => {
    console.log("this data has been submitted", formValues);
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <Form
        values={formValues}
        update={update}
        submit={submit}
      />
    </div>
  );
}

export default App;
