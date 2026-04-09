import React from 'react';

function About() {
  return (
    <main className="about-page">
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ color: '#007bff' }}>About UdaanPath</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#555' }}>
                UdaanPath is a digital platform designed to bridge the gap between government-sponsored skill development resources and underprivileged youth.
            </p>
            
            <section className="mission" style={{ marginBottom: '3rem' }}>
                <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Our Objectives</h2>
                
                <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #2a5298' }}>
                        <h3 style={{ color: '#2a5298', marginBottom: '0.5rem' }}>1. Centralize Opportunities</h3>
                        <p style={{ margin: 0, color: '#555' }}>A single, authoritative source for government schemes and financial assistance.</p>
                    </div>
                    <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #17a2b8' }}>
                        <h3 style={{ color: '#17a2b8', marginBottom: '0.5rem' }}>2. AI Recommendations</h3>
                        <p style={{ margin: 0, color: '#555' }}>Personalized matching to increase enrollment and positive employment outcomes.</p>
                    </div>
                    <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #28a745' }}>
                        <h3 style={{ color: '#28a745', marginBottom: '0.5rem' }}>3. Financial Literacy</h3>
                        <p style={{ margin: 0, color: '#555' }}>Guiding youth to scholarships, stipends, and educational loans (up to ₹7.5 lakh).</p>
                    </div>
                    <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #ffc107' }}>
                        <h3 style={{ color: '#d39e00', marginBottom: '0.5rem' }}>4. Multilingual Access</h3>
                        <p style={{ margin: 0, color: '#555' }}>Breaking language barriers through NLP engines for all India's youth.</p>
                    </div>
                </div>
            </section>
        </div>
    </main>
  );
}

export default About;
