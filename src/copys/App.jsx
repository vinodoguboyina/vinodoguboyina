import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    // header offset in px (same as Layout header height)
    const headerOffset = 80;
    const path = location.pathname === '/' ? 'home' : location.pathname.replace(/^\//, '');

    // find the target element by id
    const el = document.getElementById(path);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else if (path === 'home') {
      // fallback: scroll to top for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      {/* listens to route changes and scrolls to matching section */}
      <ScrollToSection />

      <Layout>
        {/* render all pages stacked vertically so the site feels like a single-scroll portfolio */}
        <div style={{ scrollBehavior: 'smooth' }}>
          <section id="home">
            <Home />
          </section>

          <section id="work">
            <Work />
          </section>

          <section id="profile">
            <Profile />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      </Layout>
    </Router>
  );
}




export default App;