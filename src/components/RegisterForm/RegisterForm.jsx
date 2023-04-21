import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css';

function RegisterForm() {
  const [userInput, setUserInput] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: ''
  });
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'REGISTER',
      payload: userInput
    });
  };

  return (
    <form className="formPanel" onSubmit={handleSubmit}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={userInput.username}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          name="firstname"
          value={userInput.firstname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={userInput.lastname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={userInput.password}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirmpassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmpassword"
          value={userInput.confirmpassword}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
