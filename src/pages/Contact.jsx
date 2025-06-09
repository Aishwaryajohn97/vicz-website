import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert("Message sent! We'll follow up soon.");
    setMessage("");
  };

  return (
    <section className="min-h-screen bg-gradient-to-tr from-white to-indigo-50 text-dark px-4 py-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border rounded p-3" required />
          <input type="email" placeholder="Email" className="w-full border rounded p-3" required />
          <textarea
            placeholder="Your message..."
            className="w-full border rounded p-3 h-32"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
          <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;





