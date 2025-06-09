import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-bl from-indigo-200 to-purple-200 flex flex-col justify-center items-center text-center px-4">
      <h1 className="fade-in text-5xl font-extrabold text-dark mb-4">
        Empowering Your Digital Future
      </h1>
     <p className="fade-in text-lg text-black max-w-3xl mb-8">

        VICZ Ltd delivers cutting-edge IT and management solutions—cloud architecture, DevOps, data engineering, cybersecurity, and more—to help your business thrive in a digital world.
      </p>
      <Link to="/contact" className="mt-4 inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary-dark transition">
        Get Started
      </Link>
    </section>
  );
}













