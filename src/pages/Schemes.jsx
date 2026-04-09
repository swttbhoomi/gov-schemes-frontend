import React, { useState, useEffect, useMemo } from 'react';
import { useSchemes } from '../context/SchemesContext';
import SchemeCard from '../components/SchemeCard';

function Schemes() {
  const { schemes } = useSchemes();
  const [displayed, setDisplayed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ search: '', type: '', income: '', gender: '', education: '' });

  // Dynamically extract unique categories (types) since they vary nicely
  const uniqueTypes = useMemo(() => [...new Set(schemes.map(s => s.type))], [schemes]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      applyFilters(filters);
      setLoading(false);
    }, 400);
  }, [schemes, filters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = (f) => {
    const search = f.search.toLowerCase();
    const filtered = schemes.filter(s => {

      // 1. Search Logic
      const matchSearch = s.title.toLowerCase().includes(search) || (s.description && s.description.toLowerCase().includes(search));

      // 2. Type Logic
      const matchType = f.type === '' || s.type === f.type;

      // 3. Smart Income Logic
      let matchIncome = true;
      if (f.income !== '') {
        const txt = (s.incomeRange || '') + ' ' + (s.eligibility || '');
        // Support Lakh, L, Lac, Lacs
        const matchLimit = txt.match(/(\d+(\.\d+)?)\s*(Lakh|L|Lac|Lacs)/i);
        if (matchLimit) {
          const schemeLimit = parseFloat(matchLimit[1]);
          const filterLimit = parseFloat(f.income);
          matchIncome = schemeLimit <= filterLimit;
        } else {
          // If a scheme has no defined strict limit (e.g. "All Citizens", "Not Specified"), 
          // we don't automatically hide it from low-income users, because they are still eligible!
          matchIncome = true;
        }
      }

      // 4. Unified Gender Logic
      let matchGender = true;
      if (f.gender === 'female') {
        // STRICT EXCLUSIVITY: Only show schemes assigned explicitly to girls or women.
        matchGender = s.gender === 'girls_only' || s.gender === 'women_only';
      }
      else if (f.gender === 'male') {
        matchGender = s.gender === 'boys_only' || s.gender === 'men_only';
      }

      // 5. Education Parsing Logic
      let matchEdu = true;
      if (f.education !== '') {
        const txt = (s.eligibility || '').toLowerCase() + ' ' + (s.time || '').toLowerCase();
        // First, determine if the scheme even MENTIONS education limits.
        const mentionsEdu = /(class|10th|12th|school|matric|ug|bachelor|degree|diploma|college|undergrad|engineering|medical|pg|master|post grad|phd)/.test(txt);

        if (mentionsEdu) {
          if (f.education === 'school') {
            // School users include up to 12th
            matchEdu = /(class|10th|12th|school|pre-matric|secondary)/.test(txt);
          } else if (f.education === 'ug') {
            matchEdu = /(ug|bachelor|degree|diploma|college|undergrad|engineering|medical|post-matric)/.test(txt);
          } else if (f.education === 'pg') {
            matchEdu = /(pg|master|post grad|phd|fellowship|m\.sc)/.test(txt);
          }
        } else {
          // If a scheme has no strict education mention (e.g. "Startup India", "PM Kisan"), 
          // everyone qualifies regardless of education.
          matchEdu = true;
        }
      }

      return matchSearch && matchType && matchIncome && matchGender && matchEdu;
    });
    setDisplayed(filtered);
  };

  return (
    <main className="schemes-page">
      <div className="container" style={{ display: 'flex', alignItems: 'flex-start' }}>
        <aside className="sidebar">
          <h3>Smart Filters</h3>
          <div className="filter-group">
            <label>Search Databank</label>
            <input type="text" name="search" value={filters.search} onChange={handleChange} placeholder="Search schemes..." />
          </div>
          <div className="filter-group">
            <label>Category</label>
            <select name="type" value={filters.type} onChange={handleChange}>
              <option value="">All Categories</option>
              {uniqueTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label>Maximum Income Limit</label>
            <select name="income" value={filters.income} onChange={handleChange}>
              <option value="">All Incomes</option>
              <option value="2.5">₹2.5 Lakh & Below</option>
              <option value="3.5">₹3.5 Lakh & Below</option>
              <option value="5">₹5 Lakh & Below</option>
              <option value="8">₹8 Lakh & Below</option>
              <option value="15">₹15 Lakh & Below</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Target Audience</label>
            <select name="gender" value={filters.gender} onChange={handleChange}>
              <option value="">All</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Education Level</label>
            <select name="education" value={filters.education} onChange={handleChange}>
              <option value="">All Education Levels</option>
              <option value="school">School (10th/12th/Class 1-12)</option>
              <option value="ug">Graduation (UG/Degree/Diploma)</option>
              <option value="pg">Post Graduation & PhD</option>
            </select>
          </div>
        </aside>

        <section className="schemes-list">
          <div style={{ marginBottom: '1rem', color: '#666' }}>
            Showing {displayed.length} results
          </div>
          <div className="schemes-grid">
            {loading ? (
              Array(6).fill().map((_, i) => (
                <div className="scheme-card" key={i}>
                  <div className="skeleton skeleton-title"></div>
                  <div className="skeleton skeleton-text"></div>
                  <div className="skeleton skeleton-text short"></div>
                </div>
              ))
            ) : displayed.length === 0 ? (
              <div className="no-results" style={{ gridColumn: '1 / -1', background: '#fff', padding: '3rem', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '1rem' }}>No schemes found</h3>
                <p>Try broadening your filter criteria.</p>
              </div>
            ) : (
              displayed.map(scheme => <SchemeCard key={scheme.id} scheme={scheme} />)
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Schemes;
