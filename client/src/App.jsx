import './App.css';
import HomePage from './components/HomePage';
import React, {useState} from 'react';
import { Route, Routes, useLocation, Navigate} from 'react-router-dom';
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
// import SignInModal from './components/SignInModal';
import EnlargedPawPrintImage from './components/EnlargedPawprintImage';
import SignInModal from './components/SignInModal';
import DogBreedCardModal from './components/DogBreedCardModal';
import useSessionValidation from './hooks/useSessionValidation';
import ProtectedRoute from './components/ProtectedRoutes';

export default function App() {
  const location = useLocation();
  const { isValid, userId } = useSessionValidation();
  const [isLoggedIn, logStatus]=useState(isValid)

  const isHomePage = location.pathname === '/';
  const isContactPage = location.pathname === '/contact';
  const isAboutPage = location.pathname === '/about';
  const isNewsFeed = location.pathname === '/newsfeed';
  const isNewsFeedUser = location.pathname === '/newsfeeduser';
  const isUsersFavouritesPage = location.pathname === '/usersfavourites';
  const isSignUp = location.pathname === '/signup';
  const isGenerate = location.pathname === '/generate'; 

  return (

    <div className="App">
        <div className="AppWrapper">
          {(isGenerate || isSignUp || isNewsFeedUser || isNewsFeed || isUsersFavouritesPage|| isAboutPage || isContactPage) && <NavigationBarTop />}
          <div className="AppContent">
            {/* <ContactUsPage /> */}
            {/* <EnlargedPawPrintImage /> */}
            {/* <UsersFavouritesPage /> */}
            {/* <DogBreedCardModal /> */}
            {/* <UsersFavouritesPage /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/about" element={<AboutUsPage />} />

              {/* <Route path="/signin" element={<SignInModal />} /> */}
              <Route path="/newsfeed" element={<NewsFeedPublicPage />} />
              {/* <Route path="/usersfavourites" element={<UsersFavouritesPage />} /> */}
              {/* <Route path="/newsfeeduser" element={<NewsFeedUserPage />} /> / */}
              <Route path="/signup" element={<SignUpPage />} />
              { <Route path="/generate" element={<GenerateMixedBreedPage />} /> }
                 <Route path="/signin" element={<SignInModal />} />
              <Route path="/newsfeed" element={<NewsFeedPublicPage />} />
              {/* isValid && <Route path="/newsfeeduser" element={<NewsFeedUserPage />} /> / */}
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="generated/breedbyid/:id"element = {<CardPage/>} />
              <Route path="/usersfavourites" element={isLoggedIn ? <UsersFavouritesPage /> : <Navigate replace to={"/"} />} />
              <Route path="/generate" element={isLoggedIn ? <GenerateMixedBreedPage /> : <Navigate replace to={"/"} />} />
              {/* <Route path="/newsfeeduser" element={isLoggedIn ? <NewsFeedUserPage /> : <Navigate replace to={"/"} />} /> */}
            </Routes> 
          </div>
          {(isNewsFeedUser || isNewsFeed || isAboutPage || isUsersFavouritesPage || isContactPage || isHomePage) && <NavigationBarBottom />}
        </div>
     </div>
  );
};
