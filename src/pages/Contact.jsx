import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting us! We'll get back to you soon.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="contact-page">
        <div className="container">
            <h1>Contact Us</h1>
            <p>Have questions? We'd love to hear from you.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Enter your email address" />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea rows="5" required value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Write your message here..." />
                </div>
                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Send Message</button>
            </form>
        </div>
    </main>
  );
}

export default Contact;
