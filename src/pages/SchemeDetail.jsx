import React from 'react';
import { useParams } from 'react-router-dom';
import { useSchemes } from '../context/SchemesContext';
import { useBookmarks } from '../hooks/useBookmarks';

function SchemeDetail() {
  const { id } = useParams();
  const { schemes } = useSchemes();
  const { saveBookmark, isBookmarked } = useBookmarks();
  
  const scheme = schemes.find(s => s.id === parseInt(id));

  if (!scheme) return <div className="container" style={{padding: '4rem 0'}}><p>Scheme not found.</p></div>;

  const handleSave = () => {
    if (saveBookmark(scheme.id)) {
        alert("Saved to dashboard!");
    } else {
        alert("Already saved!");
    }
  };

  const handleApply = () => {
      alert("Redirecting to the official external application portal... (Simulation)");
  };

  return (
    <main className="scheme-detail" style={{ background: '#f8f9fa', minHeight: 'calc(100vh - 80px)', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <span className="scheme-badge" style={{ background: '#e3f2fd', color: '#1e3c72', padding: '0.4rem 0.8rem', borderRadius: '20px', fontWeight: 600, fontSize: '0.9rem' }}>{scheme.type}</span>
                    {scheme.gender && scheme.gender !== 'all' && (
                        <span className="scheme-badge" style={{ marginLeft: '0.5rem', background: '#fce4ec', color: '#c2185b', padding: '0.4rem 0.8rem', borderRadius: '20px', fontWeight: 600, fontSize: '0.9rem' }}>{scheme.gender.replace(/_/g, ' ')}</span>
                    )}
                </div>
                
                <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem', color: '#333', lineHeight: 1.2 }}>{scheme.title}</h1>
                
                {scheme.description && (
                    <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>{scheme.description}</p>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                    
                    {/* Eligibility Block */}
                    {scheme.eligibility && scheme.eligibility !== 'Not specified' && (
                        <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #17a2b8' }}>
                            <h3 style={{ color: '#17a2b8', marginBottom: '0.5rem' }}>Eligibility Criteria</h3>
                            <p style={{ margin: 0, color: '#555' }}>{scheme.eligibility}</p>
                            {scheme.incomeRange !== 'Not specified' && (
                                <p style={{ margin: '0.5rem 0 0', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>Income Limit: {scheme.incomeRange}</p>
                            )}
                        </div>
                    )}

                    {/* Features List */}
                    {scheme.features && scheme.features.length > 0 && (
                        <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
                            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Key Features</h3>
                            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555' }}>
                                {scheme.features.map((f, idx) => <li key={idx} style={{ marginBottom: '0.25rem' }}>{f}</li>)}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Pros and Cons Columns */}
                {(scheme.pros?.length > 0 || scheme.cons?.length > 0) && (
                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        {scheme.pros?.length > 0 && (
                            <div style={{ flex: 1, minWidth: '250px', background: '#f6fdf8', border: '1px solid #d4edda', padding: '1.5rem', borderRadius: '8px' }}>
                                <h3 style={{ color: '#28a745', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span>👍</span> Advantages
                                </h3>
                                <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#28a745' }}>
                                    {scheme.pros.map((p, idx) => <li key={idx} style={{ marginBottom: '0.25rem' }}>{p}</li>)}
                                </ul>
                            </div>
                        )}
                        {scheme.cons?.length > 0 && (
                            <div style={{ flex: 1, minWidth: '250px', background: '#fff9fa', border: '1px solid #f8d7da', padding: '1.5rem', borderRadius: '8px' }}>
                                <h3 style={{ color: '#dc3545', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span>⚠️</span> Limitations
                                </h3>
                                <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#dc3545' }}>
                                    {scheme.cons.map((c, idx) => <li key={idx} style={{ marginBottom: '0.25rem' }}>{c}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                <hr style={{ border: 'none', borderTop: '2px solid #eee', margin: '2rem 0' }} />

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button onClick={handleApply} className="btn" style={{ padding: '0.8rem 1.5rem', fontSize: '1.1rem', background: '#007bff', border: 'none', borderRadius: '6px' }}>
                        Apply Now
                    </button>
                    {scheme.link && (
                        <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.8rem 1.5rem', fontSize: '1.1rem', background: '#343a40', border: 'none', borderRadius: '6px', textDecoration: 'none' }}>
                            Visit Official Site 🚀
                        </a>
                    )}
                    <button onClick={handleSave} className="btn" style={{ padding: '0.8rem 1.5rem', fontSize: '1.1rem', background: 'transparent', color: '#007bff', border: '2px solid #007bff', borderRadius: '6px', marginLeft: 'auto' }}>
                        {isBookmarked(scheme.id) ? "★ Saved to Dashboard" : "☆ Bookmark"}
                    </button>
                </div>
            </div>
        </div>
    </main>
  );
}

export default SchemeDetail;
