import './App.css';
import HomePage from './components/HomePage';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';

import NavigationBarBottom from './components/NavigationBarBottom';
import NavigationBarTop from './components/NavigationBarTop';
import NewsFeedPublicPage from './components/NewsFeedPublicPage';
// import NewsFeedUserPage from './components/NewsFeedUserPage';
import ContactUsPage from './components/ContactUsPage';
import AboutUsPage from './components/AboutUsPage';
import SignUpPage from './components/SignUpPage';
import GenerateMixedBreedPage from './components/GenerateMixedBreedPage';
import UsersFavouritesPage from './components/UsersFavouritesPage';
import CardPage from './components/CardPage';
import EnlargedPawPrintImage from './components/EnlargedPawprintImage';
import SignInModal from './components/SignInModal';
import DogBreedCardModal from './components/DogBreedCardModal';
import useSessionValidation from './hooks/useSessionValidation';
import ProtectedRoute from './components/ProtectedRoutes';

export default function App() {
  const location = useLocation();
  const { isValid, userId, isLoading } = useSessionValidation();
  const [isLoggedIn, setLoggedIn] = useState(isValid)
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isContactPage = location.pathname === '/contact';
  const isAboutPage = location.pathname === '/about';
  const isNewsFeed = location.pathname === '/newsfeed';
  const isNewsFeedUser = location.pathname === '/newsfeeduser';
  const isUsersFavouritesPage = location.pathname === '/usersfavourites';
  const isSignUp = location.pathname === '/signup';
  const isGenerate = location.pathname === '/generate';

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(isValid)
      // console.log(isLoggedIn)
      // setLogIn(isValid);
    }, 1000); // Adjust the interval as needed


  //   // Clear interval on component unmount or when reinitializing the effect
  //   return () => clearInterval(interval);
  // }, [isLoggedIn]);

  return (
    <div className="App">
        <div className="AppWrapper">
          {(isGenerate || isSignUp || isNewsFeedUser || isNewsFeed || isUsersFavouritesPage|| isAboutPage || isContactPage) && <NavigationBarTop isLoggedIn={isLoggedIn} />}
          <div className="AppContent">
            {/* <ContactUsPage /> */}
            {/* <EnlargedPawPrintImage /> */}
            {/* <UsersFavouritesPage /> */}
            {/* <DogBreedCardModal /> */}
            {/* <UsersFavouritesPage /> */}
            <Routes>
              <Route path="/" element={isLoggedIn ? <Navigate replace to={"/newsfeeduser" }/>  : <HomePage />} />
              <Route path="/signup" element={isLoggedIn ? <Navigate replace to={"/newsfeeduser" }/>  : <SignUpPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              {/* <Route path="/signin" element={<SignInModal />} /> */}
              <Route path="/newsfeed" element={<NewsFeedPublicPage />} />
              <Route path="/usersfavourites" element={<UsersFavouritesPage />} />
              {/* <Route path="/newsfeeduser" element={<NewsFeedUserPage />} /> / */}
              <Route path="/signup" element={<SignUpPage />} />
              { <Route path="/generate" element={<GenerateMixedBreedPage />} /> }
            </Routes> 
          </div>
          {(isNewsFeedUser || isNewsFeed || isAboutPage || isUsersFavouritesPage || isContactPage || isHomePage) && <NavigationBarBottom isLoggedIn={isLoggedIn} />}
          </div>
        </div>
      </div>
  );
};
