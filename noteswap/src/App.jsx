import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/signup';
import AboutUs from './pages/About/About';
import Contact from './pages/Contact/contact';
import BrowseNotes from './pages/browse';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <section className="hero-section">
                  <h1>Welcome to NoteSwap</h1>
                  <p>Share and discover study notes with students worldwide</p>
                  <Link to="/signup" className="cta-button">Get Started</Link>
                </section>

                <section className="features-section">
                  <div className="feature-card">
                    <h3>📚 Browse Notes</h3>
                    <p>Find study materials for any subject</p>
                  </div>
                  <div className="feature-card">
                    <h3>📝 Share Notes</h3>
                    <p>Upload your own notes to help others</p>
                  </div>
                  <div className="feature-card">
                    <h3>⭐ Rate Content</h3>
                    <p>Help identify the best study resources</p>
                  </div>
                </section>
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/browse" element={<BrowseNotes/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;