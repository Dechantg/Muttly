import React, {useEffect, useState} from "react"; 
import { Link } from "react-router-dom"
import '../views/stylesheets/HomePage.scss';
import SignInModal from "./SignInModal";
import { useNavigate } from 'react-router-dom';
import useSessionValidation from '../hooks/useSessionValidation';


function HomePage() {

  const images = [
    'BoxerHusky',
    'BulldogBorder_Collie', 
    'Cavalier_King_Charles_SpanielGolden', 
    'DachshundGerman_Shepard', 
    'DalmatianLabrador_Retriever',  
    'Golden_RetrieverBorder_Collie', 
    'Great_DaneBernese_Mountain_Dog', 
    'Miniature_SchnauzerAlaskan_Malamute', 
    'Poodle_StandardBoston_Terrier', 
    'Shiba_Inupug'
  ] 
  
  const [index, setIndex] = useState(0) 
  
  const { isValid, userId, isLoading } = useSessionValidation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isValid) {
      console.log("Before navigation. isValid:", isValid);
      if (isValid) {
        console.log("Navigating to /newsfeeduser");
        navigate('/newsfeeduser');
      } else {
        console.log('User not authenticated');
      }
      console.log("After navigation. isValid:", isValid);
    }
  }, [isValid, navigate]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])
  
  const [loggedIn, loggedStatus] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    console.log('click')
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

  return (
    <>
      <div className="main">
        <div className="home_main">
          <h1>WELCOME TO MUTTLY!</h1>
          <Link to="/newsfeed" className="logo-link">
            <button>Unleash your curiosity, and em-bark on a journey with the pack</button>
          </Link>
          <div className="dog_container">
            {images.map((image, idx) => (
            <img
              key={idx}
              className={`dog_home ${idx === index ? 'active fade-in' : ''}`}
              src={`../mock_dogs/${image}.jpg`}
              alt={`Dog ${idx + 1}`}
            />
          ))}
        </div>
          <p>At Muttly, we're the Picasso of Paws, the Da Vinci of Doggos! We're not just a dog company; we're barkitects of the highest pedigree...</p>
          <p>Unleash your imagination, create your own breed, and join us in the symphony of barks - where every mutt has its day!</p>
        </div>
        <div className="sign_in">
          <img onClick={handleSignInClick} src="../icons/paws_pink.png"/>
          <p>Sign In</p>
        </div>
        {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}
      </div>
    </>
  )
}

export default HomePage