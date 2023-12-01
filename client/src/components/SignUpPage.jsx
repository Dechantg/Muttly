import React from 'react';
import { Link } from 'react-router-dom';

import '../views/stylesheets/SignUpPage.scss';

const SignUpPage = () => {
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
            <input type="text" id="firstName" placeholder="First Name" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name </label>
            <input type="text" id="lastName" placeholder="Last Name" />
          </div>
        </div>

        {/* Email Address Field */}
        <div className="email-field">
          <label htmlFor="email">Email Address</label>
          <p>Please enter a valid email address</p>
          <input type="email" id="email" placeholder="Enter your email address" />
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
          <input type="password" id="password" placeholder="Enter your password" />
        </div>

        {/* Submit Button */}
        <div className="paw-signup">
        <Link to="/newsfeeduser" className="logo-link">
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