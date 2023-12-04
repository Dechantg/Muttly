import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../views/stylesheets/NavigationBarBottom.scss';
import useSessionValidation from '../hooks/useSessionValidation';


function NavigationBarBottom(props) {

  const { isValid, userId, isLoading } = useSessionValidation();
  const [isLoggedIn, setLogIn] = useState(null)

  useEffect(() => {
    console.log(isValid, 'isValid')
    isValid ? setLogIn(true) : setLogIn(false) 
    }
  ,[isLoading, isValid]);

  return (
    <div className="bottom-navigation-bar">
      <Link to="/contact" className="nav-link">
        Contact Us
      </Link> 
      <Link to="/about" className="nav-link">
        About Us
      </Link>
      {isLoggedIn ?
        <Link to="/newsfeeduser" className="nav-link">
            Your Feed
        </Link>
        :<Link to="/signup" className="nav-link">
          Sign Up
        </Link>
     }
    </div>
  );
}; 

export default NavigationBarBottom
