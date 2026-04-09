import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <p style={{ textAlign: "center" }}>&copy; 2024 Udaanpath. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
