import React from 'react';
import { Link } from 'react-router-dom';

function SchemeCard({ scheme }) {
  return (
    <div className="scheme-card interactive-card">
      <div className="card-header">
        <span className="scheme-badge">{scheme.type}</span>
        {scheme.gender && scheme.gender !== 'all' && (
           <span className="scheme-badge gender-badge">{scheme.gender.replace(/_/g, ' ')}</span>
        )}
      </div>
      
      <h3 className="card-title" title={scheme.title}>{scheme.title}</h3>
      
      {scheme.description && (
        <p className="card-description">{scheme.description}</p>
      )}
      
      {scheme.eligibility && scheme.eligibility !== 'Not specified' && (
        <div className="card-eligibility">
          <strong>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Eligibility
          </strong>
          <span title={scheme.eligibility}>{scheme.eligibility}</span>
        </div>
      )}
      
      <div className="card-footer">
        <Link to={`/schemes/${scheme.id}`} className="card-action-btn">
          View Details
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default SchemeCard;
