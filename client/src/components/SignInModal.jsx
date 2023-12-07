// SignInModal.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../views/stylesheets/SignInModal.scss';

const SignInModal = (props) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const { onClose } = props;
  
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      alert('Email and password are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8088/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          alert('Incorrect email or password. Please try again.');
        } else {
          alert('Sign-in failed. Please try again later.');
        }
        throw new Error('Sign-in failed');
      };
  
      if (window.location.pathname === '/signup') {
        onClose();
        navigate('/newsfeeduser');
      };
      window.location.reload();
      onClose();
      navigate('/newsfeeduser');
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    };
  };

  return (
    <div className="signin-modal-overlay">
      <div className="signin-modal">
        <span className="close-button" onClick ={(onClose)} >
          &times;
        </span>
        <div className="logo-header">
          <img src="../icons/paws_pink.png" alt="Muttly Logo" className="logo" />
          <h2>Sign In!</h2>
          <h3>If you don't have an account, please click <a onClick ={(onClose)}><Link to="/signup">here</Link></a> to sign up!</h3>
        </div>
        <div className="form-container">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email address" 
            value={email} 
            onChange={handleEmailChange} 
          />

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          <br></br>
          <button type="button" onClick={handleSignIn} >Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;