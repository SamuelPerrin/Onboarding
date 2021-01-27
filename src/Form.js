import React from 'react';

function Form(props) {
  const { username, email, password, terms } = props.values;
  const { submit, update } = props;

  const handleChange = evt => {
    const {name, value, checked, type} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    update(name, valueToUse)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    submit()
  }

  return (
    <div>
      <form>
        <label> Name
          <input 
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <label> Email
          <input 
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>Password
          <input 
            type='text'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <label>I agree to the <a href="#">Terms and Conditions</a></label>
          <input
            type='checkbox'
            name='terms'
            value={terms}
            checked={terms}
            onChange={handleChange}
          />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}

export default Form