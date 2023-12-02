import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignInModal from './SignInModal';
import '../views/stylesheets/NavigationBarTop.scss';

const NavigationBarTop = () => {


  

  const [loggedIn, loggedStatus] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const history = useLocation();

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const handleSignInClick = () => {
    if (!loggedIn) {
      openSignInModal();
    } else {
      loggedStatus(false);
      history.push('/');
    }
  };


  useEffect(() => {
    // Function to check for the 'connect.sid' cookie
    const checkCookie = () => {
      const cookies = document.cookie.split(';');
      console.log(document.cookie, 'working')
      const connectSidCookie = cookies.find(cookie => cookie.trim().startsWith('Muttley='));

      if (connectSidCookie) {
        // If the 'connect.sid' cookie is found, extract its value
        const value = connectSidCookie.split('=')[1];
        console.log('connect.sid cookie value:', value);
        // You can perform further actions based on the cookie value
      } else {
        console.log('connect.sid cookie not found');
      }
    };

    checkCookie(); // Call the function when the component mounts

    // You might want to watch for changes or check periodically
    // setInterval(checkCookie, 5000); // Example: Check every 5 seconds

    // Remember to clean up the interval if you use one
    // return () => clearInterval(interval);
  }, [isSignInModalOpen]);

  return (
    <div className="top-navigation-bar">
      <div className="left-side">
        <Link to="/news-feed" className="logo-link">
          <img src="../icons/paws_pink.png" alt="Muttly Logo" className="muttly-logo" />
        </Link>
        <div>
          <h1 className="muttly-brand">Muttly</h1>
          <h2 className="muttly-slogan">Unlimited paw-sibilities... Tailored Tails, Your Way!</h2>
        </div>
      </div>
      <div className="right-side">
        <a className ="login-tag" onClick={handleSignInClick}>
          {loggedIn ? (
            <img src="../icons/bark_out.png" alt="Muttly Logo" className="login-icon" />
          ) : (
            <img src="../icons/bark_in.png" alt="Muttly Logo" className="logout-icon" />
          )}
        </a>
      </div>
      {/* Render the SignInModal if isSignInModalOpen is true */}
      {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
    </div>
  );
};

export default NavigationBarTop;


// {/* <Link to="/signin" className="sign-in-out-button">
// { loggedIn ? 
//   <img src="../icons/bark_out.png" alt="Muttly Logo" className="login_icon" />
//   :<img src="../icons/bark_in.png" alt="Muttly Logo" className="login_icon" />
// }
// </Link> */