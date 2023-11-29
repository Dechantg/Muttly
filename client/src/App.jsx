import './App.css';
import HomePage from './components/HomePage';
import NewsFeedPublicPage from './components/NewsFeedPublicPage';
import ContactUsPage from './components/ContactUsPage';
import AboutUsPage from './components/AboutUsPage';
import SignUpPage from './components/SignUpPage';
import SignInModal from './components/SignInModal';

export default function App() {

  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <NewsFeedPublicPage /> */}
      {/* <ContactUsPage /> */}
      {/* <AboutUsPage /> */}
      {/* <SignUpPage /> */}
      <SignInModal />
    </div>
  );
};
