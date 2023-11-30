import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBarBottom from './components/NavigationBarBottom';
import TopNavigationBar from './components/NavigationBarTop';
import ContactUsPage from './components/ContactUsPage';

export default function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
        <NavigationBarBottom />
      </div>
    </BrowserRouter>
    </div>
  );
}