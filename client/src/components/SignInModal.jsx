// SignInModal.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../views/stylesheets/SignInModal.scss';

const SignInModal = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onClose } = props


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  const handleSignIn = async () => {
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
        alert('User Creditionals Failed')
        throw new Error('Sign-in failed');
      }

      console.log('Sign-in successful');

      // onClose();
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };
  

  return (
    <div className="signin-modal-overlay">
      <div className="signin-modal">
        <span className="close-button" onClick ={(onClose)} >
          &times;
        </span>
        <div className="logo-header">
          <img src="/public/icons/paws_pink.png" alt="Muttly Logo" className="logo" />
          <h2>Sign In!</h2>
          <h3>If you don't have an account, please click <a onClick ={(onClose)}><Link to="/signup">here</Link></a> to sign up!</h3>
        </div>
        <div className="form-container">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange}/>
          <br></br>
          <button type="button" onClick={handleSignIn} >Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;