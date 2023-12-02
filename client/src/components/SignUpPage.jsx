import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../views/stylesheets/SignUpPage.scss';

const SignUpPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:8088/api/addnewuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName, lastName }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Sign-in failed');
      }

      console.log('Sign-in successful');

    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };
  


  return (
    <div className="signup-container">

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
          <input type="email" id="confirmEmail" placeholder="Confirm your email address" />
        </div>

        {/* Password Field */}
        <div className="password-field">
          <label htmlFor="password">Password</label>
          <p>Must be at least 8 characters long</p>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange}/>
        </div>

        {/* Submit Button */}
        <div className="paw-signup">
        <Link to="/newsfeeduser" className="logo-link" onClick={handleSignUp}>
            <img src="../icons/paws_pink.png"/>
          </Link>
        <p>Sign Me Up!</p>
        {/* <button type="submit">Sign Me Up!</button> */}
        </div>
      </div>

      {/* <p>Copyright Muttly Ltd</p> */}
    </div>
  );
};

export default SignUpPage;