import React from 'react';
import { Link } from 'react-router-dom';
import { useBookmarks } from '../hooks/useBookmarks';
import { useSchemes } from '../context/SchemesContext';
import SchemeCard from '../components/SchemeCard';

function Dashboard() {
  const { bookmarks } = useBookmarks();
  const { schemes } = useSchemes();

  const savedSchemes = schemes.filter(s => bookmarks.includes(s.id));

  return (
    <main className="dashboard-page" style={{ padding: '3rem 0', minHeight: 'calc(100vh - 100px)' }}>
        <div className="container">
            <h1 style={{color: '#007bff', marginBottom: '0.5rem'}}>My Personal Dashboard</h1>
            <p style={{marginBottom: '3rem', fontSize: '1.1rem', color: '#555'}}>
                These are the opportunities you have successfully bookmarked. They are saved directly to your browser memory.
            </p>

            <section>
                <div className="schemes-grid">
                    {savedSchemes.length === 0 ? (
                        <div className="no-results" style={{gridColumn: '1 / -1', background: '#f8f9fa', padding: '3rem', borderRadius: '8px' }}>
                            <h3>Your Dashboard is empty</h3>
                            <p style={{ marginBottom: '1.5rem' }}>You haven't saved any schemes yet. Go explore!</p>
                            <Link to="/schemes" className="btn">Explore Schemes Database</Link>
                        </div>
                    ) : (
                        savedSchemes.map(s => <SchemeCard key={s.id} scheme={s} />)
                    )}
                </div>
            </section>

        </div>
    </main>
  );
}

export default Dashboard;
