import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './components/HomePage';
import ContactUsPage from './components/ContactUsPage';
import SignUpPage from './components/SignUpPage';
import AboutUsPage from './components/AboutUsPage';
import NewsFeedPublicPage from './components/NewsFeedPublicPage';
import NewsFeedUserPage from './components/NewsFeedUserPage';
import GenerateMixedBreedPage from './components/GenerateMixedBreedPage';
import UsersFavouritesPage from './components/UsersFavouritesPage';
import CardPage from './components/CardPage';
import UsersGeneratedImages from './components/UsersGeneratedImages';
import RecentlyGeneratedImagesPage from './components/RecentlyGeneratedImagesPage';
import MostPopularGeneratedImagesPage from './components/MostPopularGeneratedImagesPage';
import ProtectedRoute from './components/ProtectedRoute';
import VisitorRoute from './components/VisitorRoute';
import PlaceholderImage from './components/PlaceHolderImage';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Visitor Routes */}
          <Route path="/" element={<VisitorRoute><HomePage /></VisitorRoute>} />
          <Route path="/signup" element={<VisitorRoute><SignUpPage /></VisitorRoute>} />
          
          {/* Protected Routes */}
          <Route path="/usersfavourites" element={<ProtectedRoute><UsersFavouritesPage /></ProtectedRoute>} />
          <Route path="/newsfeeduser" element={<ProtectedRoute><NewsFeedUserPage /></ProtectedRoute>} />
          <Route path="/generate" element={<ProtectedRoute><GenerateMixedBreedPage /></ProtectedRoute>} />
          <Route path="/usersgeneratedimages" element={<ProtectedRoute><UsersGeneratedImages /></ProtectedRoute>} />
          
          {/* Public Routes */}
          <Route path="/recentlygeneratedimages" element={<RecentlyGeneratedImagesPage />} />
          <Route path="/mostpopulargeneratedimages" element={<MostPopularGeneratedImagesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/newsfeed" element={<NewsFeedPublicPage />} />
          <Route path="/card/:id" element={<CardPage />} />
          <Route path="/placeholder" element={<PlaceholderImage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
