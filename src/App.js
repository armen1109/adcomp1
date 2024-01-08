import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Headr from './components/Headr';
import Home from './components/Home';
import Uslug from './components/Uslug';
import Single from './components/Single';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Headr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Uslug />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/services/:id' element={<Single/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
