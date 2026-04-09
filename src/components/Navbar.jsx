import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Read current lang from cookie if it exists
    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
    if (match && match[1]) {
      setLang(match[1]);
    }
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    // Set google translate cookies
    document.cookie = `googtrans=/en/${newLang}; path=/;`;
    document.cookie = `googtrans=/en/${newLang}; domain=.${window.location.hostname}; path=/;`;
    window.location.reload();
  };

  return (
    <nav className="navbar" style={{ background: '#1e3c72', borderBottom: 'none' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>

        <div className="logo">
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 800, fontSize: '1.6rem' }}>
            UdaanPath
          </Link>
        </div>

        <ul className="nav-links" id="main-nav" style={{ margin: 0, padding: 0, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} style={{ color: '#fff' }}>Home</NavLink></li>
          <li><NavLink to="/schemes" className={({ isActive }) => isActive ? "active" : ""} style={{ color: '#ececec' }}>Schemes</NavLink></li>
          <li><NavLink to="/eligibility" className={({ isActive }) => isActive ? "active" : ""} style={{ color: '#ececec' }}>AI Recommend</NavLink></li>
          <li><NavLink to="/finance" className={({ isActive }) => isActive ? "active" : ""} style={{ color: '#ececec' }}>Finance Hub</NavLink></li>
          <li><NavLink to="/calendar" className={({ isActive }) => isActive ? "active" : ""} style={{ color: '#ececec' }}>🗓️ Calendar</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} style={{ color: '#ececec' }}>About</NavLink></li>

          <li style={{ marginLeft: '1rem', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '1rem' }}>
            <select 
              value={lang} 
              onChange={handleLanguageChange} 
              style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '4px', padding: '0.2rem 0.5rem', outline: 'none' }} 
              title="Multilingual NLP Translation Support"
            >
              <option value="en" style={{ color: '#000' }}>English</option>
              <option value="hi" style={{ color: '#000' }}>हिंदी (Hindi)</option>
              <option value="mr" style={{ color: '#000' }}>मराठी (Marathi)</option>
              <option value="ta" style={{ color: '#000' }}>தமிழ் (Tamil)</option>
              <option value="te" style={{ color: '#000' }}>తెలుగు (Telugu)</option>
            </select>
            {/* Hidden div injected here for google translate target */}
            <div id="google_translate_element" style={{display: 'none'}}></div>
          </li>

          <li style={{ marginLeft: '1rem' }}>
            <button
              onClick={toggleTheme}
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', borderRadius: '4px', padding: '0.25rem 0.75rem', cursor: 'pointer' }}
              title="Toggle Dark Mode"
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
