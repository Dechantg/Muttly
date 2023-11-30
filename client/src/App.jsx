import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavigationBarBottom from './components/NavigationBarBottom';
import DogBreedCardModal from './components/DogBreedCardModal';
import NavigationBarTop from './components/NavigationBarTop';
import NewsFeedPublicPage from './components/NewsFeedPublicPage';
// import NewsFeedUserPage from './components/NewsFeedUserPage';
import ContactUsPage from './components/ContactUsPage';
import AboutUsPage from './components/AboutUsPage';
import SignUpPage from './components/SignUpPage';
import PokemonCard from './components/PracticeCard';
import GenerateMixedBreedPage from './components/GenerateMixedBreedPage';
// import SignInModal from './components/SignInModal';

export default function App() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isContactPage = location.pathname === '/contact';
  const isAboutPage = location.pathname === '/about';
  const isNewsFeed = location.pathname === '/newsfeed';
  const isNewsFeedUser = location.pathname === '/newsfeeduser';
  const isSignUp = location.pathname === '/signup';
  const isGenerate = location.pathname === '/generate';

  return (
    <div className="App">
        <div className="AppWrapper">
          {/* {(isGenerate || isSignUp || isNewsFeedUser ||isNewsFeed || isAboutPage || isContactPage) && <NavigationBarTop />} */}
          <div className="AppContent">
            <PracticeCard />
            {/* <DogBreedCardModal /> */}
            {/* <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/newsfeed" element={<NewsFeedPublicPage />} /> */}
              {/* <Route path="/newsfeeduser" element={<NewsFeedUserPage />} /> / */}
              {/* <Route path="/signup" element={<SignUpPage />} /> */}
              {/* <Route path="/generate" element={<GenergateMixedBreedPage />} /> /  */}
            {/* </Routes> */}
          </div>
          {/* {(isNewsFeedUser || isNewsFeed || isAboutPage || isContactPage || isHomePage) && <NavigationBarBottom />} */}
        </div>
    </div>
  );
};
