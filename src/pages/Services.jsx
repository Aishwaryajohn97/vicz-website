import React from 'react';

const services = [
  "Cloud Architecture & Migration",
  "DevOps & CI/CD Automation",
  "Cybersecurity Strategy & Ops",
  "Data Engineering & Analytics",
  "AI & Machine Learning Integration",
  "Digital Transformation Consulting",
  "Mobile & Web Applications",
  "Infrastructure Management",
  "IT Support & Maintenance",
  "Project & Product Management"
];

const Services = () => (
  <section className="min-h-screen bg-gradient-to-bl from-indigo-50 to-purple-100 text-dark px-4 py-20">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <p className="text-lg leading-relaxed">
        VICZ Ltd offers a wide range of IT and management services to support your digital growth:
      </p>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="glass p-6 hover:scale-105 transition transform"
        >
          <h3 className="text-xl font-semibold mb-2">{service}</h3>
          <p className="text-gray-700">
            Expert support to help you plan, deploy, and manage {service.toLowerCase()} effectively.
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;





