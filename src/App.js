import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import schema from './schema';
import * as yup from 'yup';
import axios from 'axios'

const initialFormValues = {
  username:'',
  email:'',
  password:'',
  terms: false,
}
const initialErrors = {
  username:' ',
  email:' ',
  password:' ',
  terms: ' ',
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState(initialErrors);
  const [showModal, setShowModal] = useState(false);

  const update = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]:''})
      })
      .catch(err => {
        setErrors({ ...errors, [name]: err.errors[0]})
      })

    setFormValues({ ...formValues, [name]: value })
  }

  const submit = () => {
    axios
      .post('https://reqres.in/api/users',formValues)
      .then(() => {
        setShowModal(!showModal);
      })
      .catch(err => console.log(err))
    
    setFormValues(initialFormValues);
  }

  useEffect(()=> {schema.isValid(formValues).then(valid => setDisabled(!valid))},[formValues])

  return (
    <div className="App">
      {!showModal &&
      <Form
        values={formValues}
        update={update}
        submit={submit}
        disabled={disabled}
        errors={errors}
      /> }
      {showModal && <div className='modal'>
        <div className='success'>
          An account for {formValues.username} has been successfully created!
        </div>
        <button onClick={() => setShowModal(false)}>Make another user</button>
      </div>}
    </div>
  );
}

export default App;
