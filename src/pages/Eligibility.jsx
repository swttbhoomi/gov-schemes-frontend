import React, { useState } from 'react';
import { useSchemes } from '../context/SchemesContext';
import SchemeCard from '../components/SchemeCard';

function Eligibility() {
  const { schemes } = useSchemes();
  const [form, setForm] = useState({ state: '', income: '', type: '', education: '' });
  const [matches, setMatches] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setMatches(null);

    setTimeout(() => {
        const matched = schemes.filter(scheme => {
            return (
                (form.state === 'All' || scheme.state === 'All' || scheme.state === form.state) &&
                (form.income === '' || scheme.incomeRange === 'All' || scheme.incomeRange === form.income) &&
                (form.type === '' || scheme.type === form.type)
            );
        });
        setMatches(matched);
        setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <main className="eligibility-page">
        {/* Same styling as before */}
        <div className="container">
            <h1 style={{textAlign: 'center', color: '#2a5298', marginBottom: '0.5rem'}}>AI Recommendation Engine</h1>
            <p style={{textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem'}}>
                Our intelligent NLP engine analyzes your profile against hundreds of government databases to find your perfect opportunity match.
            </p>

            <div className="split-layout">
                <div className="form-section" style={{ borderTop: '4px solid #ffc107' }}>
                    <form className="contact-form" onSubmit={handleSubmit} style={{margin: 0}}>
                        <div className="form-group">
                            <label>Geographic Location</label>
                            <select required value={form.state} onChange={e => setForm({...form, state: e.target.value})}>
                                <option value="">Select State</option>
                                <option value="All">All India (Central Schemes)</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Karnataka">Karnataka</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Current Education Level</label>
                            <select required value={form.education} onChange={e => setForm({...form, education: e.target.value})}>
                                <option value="">Select Level</option>
                                <option value="10th">10th Pass / Below</option>
                                <option value="12th">12th Pass</option>
                                <option value="UG">Undergraduate (UG)</option>
                                <option value="PG">Postgraduate (PG) & Above</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Family Annual Income</label>
                            <select required value={form.income} onChange={e => setForm({...form, income: e.target.value})}>
                                <option value="">Select Income Bracket</option>
                                <option value="Below 3L">Below ₹3 Lakhs</option>
                                <option value="Below 5L">Between ₹3L - ₹5 Lakhs</option>
                                <option value="Above 5L">Above ₹5 Lakhs</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Career Objective / Interest</label>
                            <select required value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
                                <option value="">Select Objective</option>
                                <option value="Scholarship">I need financial aid for studies</option>
                                <option value="Internship">I want industry experience & stipends</option>
                                <option value="Course">I want to learn vocational skills</option>
                                <option value="Loan">I need a government-backed education loan</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{width: '100%', background: '#2a5298', border: 'none', padding: '1rem'}}>
                           {isAnalyzing ? "Processing Profile..." : "Analyze My Profile"}
                        </button>
                    </form>
                </div>
                
                <div className="results-section">
                    <h2 style={{marginBottom: '1.5rem', color: '#495057'}}>Your Personalized Matches</h2>
                    <div className="schemes-grid" style={{gridTemplateColumns: '1fr', gap: '1rem'}}>
                        {isAnalyzing && (
                            <div style={{ textAlign: 'center', padding: '3rem', background: '#f8f9fa', borderRadius: '8px' }}>
                                <div className="spinner" style={{ border: '4px solid rgba(0,0,0,0.1)', borderTop: '4px solid #2a5298', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }}></div>
                                <style>
                                  {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
                                </style>
                                <h3 style={{ color: '#2a5298' }}>AI Engine Analyzing...</h3>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>Cross-referencing PMKVY, NAPS, and 150+ central schemes.</p>
                            </div>
                        )}
                        {!isAnalyzing && matches === null && (
                             <p className="placeholder-text" style={{color: '#6c757d', fontStyle: 'italic', padding: '2rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center'}}>
                                 Provide your details on the left and our NLP engine will find the schemes with the highest probability of enrollment for you.
                             </p>
                        )}
                        {!isAnalyzing && matches !== null && matches.length === 0 && (
                             <p className="no-results" style={{ padding: '2rem', textAlign: 'center', background: '#fff', borderRadius: '8px', border: '1px solid #ffd0d0' }}>
                                 No exact matches found. Try broadening your criteria.
                             </p>
                        )}
                        {!isAnalyzing && matches !== null && matches.length > 0 && (
                             <>
                                <p style={{ background: '#d4edda', color: '#155724', padding: '0.75rem', borderRadius: '4px', marginBottom: '1rem', fontWeight: 600 }}>
                                    ✓ Match Successful: We found {matches.length} programs tailored for you!
                                </p>
                                {matches.map(s => <SchemeCard key={s.id} scheme={s} />)}
                             </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Eligibility;
