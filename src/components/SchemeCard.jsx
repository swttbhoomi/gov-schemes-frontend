import React from 'react';
import { Link } from 'react-router-dom';

function SchemeCard({ scheme }) {
  return (
    <div className="scheme-card">
      <h3>{scheme.title}</h3>
      <div style={{ marginBottom: '0.5rem' }}>
        <span className="scheme-badge">{scheme.type}</span>
      </div>
      {scheme.description && <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>{scheme.description}</p>}
      
      {scheme.eligibility && scheme.eligibility !== 'Not specified' && (
          <div style={{ fontSize: '0.85rem', color: '#555', background: '#f8f9fa', padding: '0.5rem', borderRadius: '4px', borderLeft: '3px solid #17a2b8', marginBottom: '1rem' }}>
            <strong style={{ color: '#17a2b8' }}>Eligibility:</strong> {scheme.eligibility}
          </div>
      )}
      
      <Link to={`/schemes/${scheme.id}`} className="btn">View Details</Link>
    </div>
  );
}

export default SchemeCard;
