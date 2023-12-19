import React, { useState, useEffect } from 'react';
import '../views/stylesheets/SignUpPage.scss';

const SignUpPage = () => {
  const [ email, setEmail ] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [ password, setPassword ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleConfirmEmailChange = (e) => setConfirmEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  const isFormValid = () => {
    return email === confirmEmail && password.length >= 8;
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Login failed');
      
      window.location.reload();
    } catch (error) {
      console.error('Error during login:', error.message);
      alert('Login failed, please try again.');
    }
  };

  const handleSignUp = async () => {
    if (!isFormValid()) {
      alert('Please ensure all fields are filled correctly.');
      return;
    }

    try {
      const response = await fetch('/api/addnewuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, firstName, lastName }),
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Sign-up failed');

      await handleLogin(email, password);

    } catch (error) {
      console.error('Error during sign-up:', error.message);
      alert('Sign-up failed, please try again.');
    }
  };
  return (
    <div className="signup-container">
      <div className="background-with-pawprints-left">
        <div className='column-1'>
          <img className='side_logo' src='../icons/paws_pink.png'/>
          <br/>
          <img className='side_logo' src='../icons/paws_pink.png'/>
        </div>
        <div className='column-2'>
          <br/>
          <img className='side_logo' src='../icons/paws_pink.png'/>
          <br/>
          <img className='side_logo' src='../icons/paws_pink.png'/>
          <br/>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="signup-form">
        <h1>Sign Up</h1>
        <h2>Generate your own breeds today!</h2>
        <p>Please fill out the input fields below to sign up to Muttly!</p>

        {/* First Name and Last Name Fields */}
        <div className="name-fields">
          <div>
            <label htmlFor="firstName">First Name </label>
            <input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={handleFirstNameChange}/>
          </div>
          <div>
            <label htmlFor="lastName">Last Name </label>
            <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={handleLastNameChange}/>
          </div>
        </div>

        {/* Email Address Field */}
        <div className="email-field">
          <label htmlFor="email">Email Address</label>
          <p>Please enter a valid email address</p>
          <input type="email" id="email" placeholder="Enter your email address" value={email} onChange={handleEmailChange}/>
        </div>

        {/* Confirm Email Field */}
        <div className="confirm-email-field">
          <label htmlFor="confirmEmail">Confirm Email</label>
          <br></br>
          <input type="email" id="confirmEmail" placeholder="Confirm your email address" onChange={handleConfirmEmailChange} />
        </div>

        {/* Password Field */}
        <div className="password-field">
          <label htmlFor="password">Password</label>
          <p>Must be at least 8 characters long</p>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange}/>
        </div>

        {/* Submit Button */}
        <div className="paw-signup">
        <a className="to-newsfeed-user-link" onClick={handleSignUp}>
            <img className="paw-button" src="../icons/paws_pink.png" />
          </a>
        <p>Sign Me Up!</p>
        </div>

      </div>
      
      <div className="background-with-pawprints-right">
        <div className='column-3'>
            <br/>
            <img className='side_logo' src='../icons/paws_pink.png'/>
            <br/>
            <img className='side_logo' src='../icons/paws_pink.png'/>
            <br/>
          </div>
          <div className='column-4'>
            <img className='side_logo' src='../icons/paws_pink.png'/>
            <br/>
            <img className='side_logo' src='../icons/paws_pink.png'/>
          </div>
        </div>
    </div>
  );
};

export default SignUpPage; 

