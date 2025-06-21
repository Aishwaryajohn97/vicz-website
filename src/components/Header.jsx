import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = ['Home', 'About', 'Services', 'Careers', 'Contact'];

  return (
    <header className="header">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo - Left */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation - Right */}
        <nav className="nav-links hidden md:flex">
          {navItems.map(item => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="group"
              onClick={() => setOpen(false)}
            >
              {item}
              <span></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <FaTimes size={24} color="#001f3f" /> : <FaBars size={24} color="#001f3f" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="mobile-menu md:hidden">
          {navItems.map(item => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
