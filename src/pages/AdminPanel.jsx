import React, { useState } from 'react';
import { useSchemes } from '../context/SchemesContext';

function AdminPanel() {
  const { schemes, addScheme, deleteScheme } = useSchemes();
  const [activeTab, setActiveTab] = useState('analytics'); // 'analytics' | 'cms'

  // Form State for new scheme
  const [formData, setFormData] = useState({
      title: '', type: '', description: '', eligibility: '', link: ''
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleAdd = (e) => {
      e.preventDefault();
      addScheme(formData);
      alert("New scheme published successfully!");
      setFormData({title: '', type: '', description: '', eligibility: '', link: ''});
  };

  return (
    <main className="admin-page" style={{ padding: '3rem 0', minHeight: '100vh', background: '#f4f6f9' }}>
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ color: '#1e3c72', margin: 0 }}>Public Admin Console</h1>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <button onClick={() => setActiveTab('analytics')} className="btn" style={{ background: activeTab === 'analytics' ? '#1e3c72' : '#e9ecef', color: activeTab === 'analytics' ? '#fff' : '#333' }}>Platform Analytics</button>
                <button onClick={() => setActiveTab('cms')} className="btn" style={{ background: activeTab === 'cms' ? '#1e3c72' : '#e9ecef', color: activeTab === 'cms' ? '#fff' : '#333' }}>Content Manager (CMS)</button>
            </div>

            {/* TAB 1: ANALYTICS */}
            {activeTab === 'analytics' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    
                    <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007bff' }}>{schemes.length}</div>
                        <div style={{ color: '#666', fontSize: '1.1rem' }}>Total Active Schemes</div>
                    </div>

                    <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#28a745' }}>Anonymous</div>
                        <div style={{ color: '#666', fontSize: '1.1rem' }}>Registered Users</div>
                    </div>

                </div>
            )}

            {/* TAB 2: CMS CONTENT MANAGER */}
            {activeTab === 'cms' && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
                    {/* Add New Scheme Form */}
                    <div style={{ flex: '1 1 350px', background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>Add New Opportunity</h3>
                        <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Scheme Title" required style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ddd' }} />
                            <select name="type" value={formData.type} onChange={handleChange} required style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ddd' }}>
                                <option value="" disabled>Select Category</option>
                                <option value="Scholarship">Scholarship</option>
                                <option value="Loan">Loan</option>
                                <option value="Skill Program">Skill Program</option>
                            </select>
                            <input type="text" name="link" value={formData.link} onChange={handleChange} placeholder="Official Link (URL)" style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ddd' }} />
                            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" rows="3" required style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ddd' }}></textarea>
                            <textarea name="eligibility" value={formData.eligibility} onChange={handleChange} placeholder="Eligibility Criteria" rows="2" style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ddd' }}></textarea>
                            <button type="submit" className="btn" style={{ background: '#28a745', border: 'none', padding: '1rem', fontSize: '1.1rem', borderRadius: '6px', marginTop: '0.5rem' }}>Publish Scheme</button>
                        </form>
                    </div>

                    {/* Manage Existing Schemes List */}
                    <div style={{ flex: '2 1 400px', background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ color: '#333', marginBottom: '1.5rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>Active Database</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '500px', overflowY: 'auto', paddingRight: '1rem' }}>
                            {schemes.map(s => (
                                <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8f9fa', padding: '1rem', borderRadius: '8px', border: '1px solid #eee' }}>
                                    <div>
                                        <div style={{ fontWeight: 'bold', color: '#1e3c72', marginBottom: '0.2rem' }}>{s.title}</div>
                                        <div style={{ fontSize: '0.85rem', color: '#666' }}>{s.type} | ID: {s.id}</div>
                                    </div>
                                    <button onClick={() => deleteScheme(s.id)} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', transition: '0.2s', fontSize: '0.9rem' }}>
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    </main>
  );
}

export default AdminPanel;
