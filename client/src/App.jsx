import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBarBottom from './components/NavigationBarBottom';
// import NewsFeedPublicPage from './components/NewsFeedPublicPage';
import ContactUsPage from './components/ContactUsPage';
// import AboutUsPage from './components/AboutUsPage';
// import SignUpPage from './components/SignUpPage';
// import SignInModal from './components/SignInModal';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="AppWrapper">
          <div className="AppContent">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
          </div>
          <NavigationBarBottom />
        </div>
      </BrowserRouter>
    </div>
  );
      {/* <HomePage /> */}
      {/* <NewsFeedPublicPage /> */}
      {/* <ContactUsPage /> */}
      {/* <AboutUsPage /> */}
      {/* <SignUpPage /> */}
// //       <SignInModal />
//     </div>
//   );
};
