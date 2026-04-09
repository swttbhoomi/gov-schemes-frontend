import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSchemes } from '../context/SchemesContext';
import SchemeCard from '../components/SchemeCard';

function Home() {
  const { schemes } = useSchemes();
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setFeatured(schemes.slice(0, 3));
    }, 500);
  }, [schemes]);

  return (
    <>
      <section className="hero" style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
          <div className="container">
              <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                  UdaanPath: Bridging the gap between Opportunity and Aspiration
              </h1>
              <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                  Centralizing access to government-sponsored skill development, apprenticeships, and financial assistance for India's youth.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <Link to="/eligibility" className="cta-button" style={{ background: '#ffc107', color: '#333' }}>Get AI Recommendations</Link>
                  <Link to="/schemes" className="cta-button" style={{ background: 'transparent', border: '2px solid #fff', color: '#fff' }}>Explore All Schemes</Link>
              </div>
          </div>
      </section>

      <section className="categories">
          <div className="container">
              <h2>What Are You Looking For?</h2>
              <div className="category-grid">
                  <div className="category-card">
                      <h3>Scholarships</h3><p>Financial aid for continued education</p>
                  </div>
                  <div className="category-card">
                      <h3>Internships</h3><p>Gain real-world experience and stipends</p>
                  </div>
                  <div className="category-card">
                      <h3>Skill Loans</h3><p>Government-backed educational financing up to ₹7.5L</p>
                  </div>
                  <div className="category-card">
                      <h3>Free Courses</h3><p>PMKVY and other subsidized training programs</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="featured-schemes">
          <div className="container">
              <h2>Featured Opportunities</h2>
              <div className="schemes-grid">
                  {featured.length === 0 ? (
                    Array(3).fill().map((_, i) => (
                      <div className="scheme-card" key={i}>
                          <div className="skeleton skeleton-title"></div>
                          <div className="skeleton skeleton-text"></div>
                          <div className="skeleton skeleton-text short"></div>
                      </div>
                    ))
                  ) : (
                    featured.map(scheme => <SchemeCard key={scheme.id} scheme={scheme} />)
                  )}
              </div>
          </div>
      </section>
    </>
  );
}

export default Home;
