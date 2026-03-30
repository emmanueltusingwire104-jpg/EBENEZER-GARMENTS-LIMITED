import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import QuoteRequest from './pages/QuoteRequest';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<QuoteRequest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
