import React from 'react';

function Form(props) {
  const { username, email, password, terms } = props.values;
  const { submit, update, disabled, errors } = props;

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
        <label> Name:
          <input 
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <span className='error'>{errors.username}</span>
        <label> Email:
          <input 
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label>
        <span className='error'>{errors.email}</span>
        <label>Password:
          <input 
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        {errors.password && <span className='error'>{errors.password}</span>}
        <label>
          <input
            type='checkbox'
            name='terms'
            value={terms}
            checked={terms}
            onChange={handleChange}
          /> I agree to the <a href="#">Terms and Conditions</a>.
        </label>
        {errors.terms && <span className='error'>{errors.terms}</span>}
        <button disabled={disabled} onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}

export default Form