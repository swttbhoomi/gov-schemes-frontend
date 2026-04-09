import React, { useState, useEffect, useMemo } from 'react';
import { useSchemes } from '../context/SchemesContext';
import SchemeCard from '../components/SchemeCard';

function Schemes() {
  const { schemes } = useSchemes();
  const [displayed, setDisplayed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ search: '', type: '', income: '', gender: '' });

  // Dynamically extract unique categories, incomes, and genders from dataset
  const uniqueTypes = useMemo(() => [...new Set(schemes.map(s => s.type))], [schemes]);
  const uniqueIncomes = useMemo(() => [...new Set(schemes.map(s => s.incomeRange))], [schemes]);
  const uniqueGenders = useMemo(() => [...new Set(schemes.map(s => s.gender))], [schemes]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      applyFilters(filters);
      setLoading(false);
    }, 400); // Small delay to show smooth loading state
  }, [schemes, filters]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = (f) => {
    const search = f.search.toLowerCase();
    const filtered = schemes.filter(s => {
      return (
        (s.title.toLowerCase().includes(search) || (s.description && s.description.toLowerCase().includes(search))) &&
        (f.type === '' || s.type === f.type) &&
        (f.income === '' || s.incomeRange === f.income) &&
        (f.gender === '' || s.gender === f.gender)
      );
    });
    setDisplayed(filtered);
  };

  return (
    <main className="schemes-page">
      <div className="container">
          <aside className="sidebar">
              <h3>Filters</h3>
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
                  <label>Income Range</label>
                  <select name="income" value={filters.income} onChange={handleChange}>
                      <option value="">All Incomes</option>
                      {uniqueIncomes.map(inc => (
                         <option key={inc} value={inc}>{inc}</option>
                      ))}
                  </select>
              </div>
              <div className="filter-group">
                  <label>Gender Targeting</label>
                  <select name="gender" value={filters.gender} onChange={handleChange}>
                      <option value="">All Genders</option>
                      {uniqueGenders.map(g => (
                         <option key={g} value={g}>{g.replace(/_/g, ' ')}</option>
                      ))}
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
