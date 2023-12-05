// App.jsx

import './App.scss';

import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';

import HomePage from './components/HomePage';
import NavigationBarTop from './components/NavigationBarTop';
import ContactUsPage from './components/ContactUsPage';
import SignUpPage from './components/SignUpPage';
import AboutUsPage from './components/AboutUsPage';
import NewsFeedPublicPage from './components/NewsFeedPublicPage';
import NewsFeedUserPage from './components/NewsFeedUserPage';
import GenerateMixedBreedPage from './components/GenerateMixedBreedPage';
import UsersFavouritesPage from './components/UsersFavouritesPage';
import CardPage from './components/CardPage';
import NavigationBarBottom from './components/NavigationBarBottom';
import UsersGeneratedImages from './components/UsersGeneratedImages'

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isContactPage = location.pathname === '/contact';
  const isAboutPage = location.pathname === '/about';
  const isNewsFeed = location.pathname === '/newsfeed';
  const isNewsFeedUser = location.pathname === '/newsfeeduser';
  const isUsersFavouritesPage = location.pathname === '/usersfavourites';
  const isSignUp = location.pathname === '/signup';
  const isGenerate = location.pathname === '/generate';
  const isUserGenerated = location.pathname === "/usersgeneratedimages";


  return (
    <div className="App">
      <div className="AppWrapper">
        {(isGenerate || isSignUp || isNewsFeedUser || isUserGenerated|| isNewsFeed || isUsersFavouritesPage|| isAboutPage || isContactPage) && <NavigationBarTop/>}
        <div className="AppContent">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/newsfeed" element={<NewsFeedPublicPage />} />
            <Route path="/usersfavourites" element={<UsersFavouritesPage />} />
            <Route path="/newsfeeduser" element={<NewsFeedUserPage />} /> 
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/generated/breedbyid/:id" element={<CardPage/>}/>
            <Route path="/generate" element={<GenerateMixedBreedPage />} /> 
            <Route path="/usersgeneratedimages" element={<UsersGeneratedImages />} /> 
          </Routes> 
        </div>

        {(isNewsFeedUser || isNewsFeed || isAboutPage || isGenerate || isUserGenerated || isUsersFavouritesPage || isContactPage || isHomePage) && <NavigationBarBottom/>}
        </div>
      </div>
  );
};

export default App;