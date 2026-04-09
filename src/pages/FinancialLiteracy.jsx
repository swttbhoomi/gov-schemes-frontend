import React from 'react';
import { Link } from 'react-router-dom';

function FinancialLiteracy() {
  return (
    <main className="about-page" style={{ padding: '4rem 0' }}>
        <div className="container">
            <h1 style={{ color: '#2a5298', marginBottom: '1rem' }}>Democratizing Financial Literacy</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#555' }}>
                At UdaanPath, we believe that lack of funds should never be a barrier to skill development and education. Below is a comprehensive guide to government financial assistance programs specifically designed for underprivileged youth.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                
                {/* Skill Loans Section */}
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderTop: '4px solid #28a745' }}>
                    <h2 style={{ color: '#28a745', marginBottom: '1rem', fontSize: '1.5rem' }}>Skill Development Loans (up to ₹7.5 Lakh)</h2>
                    <p style={{ marginBottom: '1rem' }}>The government-backed Vidyalakshmi portal provides a single window for students to access skill educational loans. You can secure up to <strong>₹7.5 Lakh without collateral</strong> for recognized vocational and higher education courses.</p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: '#555' }}>
                        <li>No processing fees for loans up to ₹7.5 Lakh.</li>
                        <li>Subsidized interest rates during the study period.</li>
                        <li>Repayment starts 1 year after course completion.</li>
                    </ul>
                    <Link to="/schemes/3" className="btn" style={{ background: '#28a745', color: '#white', borderColor: '#28a745' }}>Explore Vidyalakshmi Loan</Link>
                </div>

                {/* Stipends Section */}
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderTop: '4px solid #17a2b8' }}>
                    <h2 style={{ color: '#17a2b8', marginBottom: '1rem', fontSize: '1.5rem' }}>Stipends & Allowances (PMKVY / NAPS)</h2>
                    <p style={{ marginBottom: '1rem' }}>You don't just learn for free — you get paid to learn! Several flagship programs provide direct bank transfers (DBT) or monthly stipends to support your living expenses while you train.</p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: '#555' }}>
                        <li><strong>PMKVY:</strong> Pradhan Mantri Kaushal Vikas Yojana offers cash rewards and free training.</li>
                        <li><strong>NAPS:</strong> National Apprenticeship Promotion Scheme guarantees monthly stipends when apprenticing at companies.</li>
                    </ul>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/schemes/15" className="btn" style={{ background: '#17a2b8', borderColor: '#17a2b8' }}>View PMKVY</Link>
                        <Link to="/schemes/16" className="btn" style={{ background: '#17a2b8', borderColor: '#17a2b8' }}>View NAPS</Link>
                    </div>
                </div>

                {/* Scholarships Section */}
                <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderTop: '4px solid #ffc107' }}>
                    <h2 style={{ color: '#d39e00', marginBottom: '1rem', fontSize: '1.5rem' }}>Merit & Means Scholarships</h2>
                    <p style={{ marginBottom: '1rem' }}>The National Scholarship Portal (NSP) hosts dozens of targeted scholarships granting anywhere from ₹5,000 to ₹50,000 annually to students whose family income drops below ₹6 Lakhs.</p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: '#555' }}>
                        <li>100% tuition coverage for SC/ST and OBC students in many central schemes.</li>
                        <li>Direct bank deposit to prevent intermediaries.</li>
                    </ul>
                    <Link to="/schemes" className="btn" style={{ background: '#ffc107', color: '#333', borderColor: '#ffc107' }}>Browse All Scholarships</Link>
                </div>

            </div>
        </div>
    </main>
  );
}

export default FinancialLiteracy;
