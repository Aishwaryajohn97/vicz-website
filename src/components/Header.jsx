import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = ['Home','About','Services','Careers','Contact'];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navItems.map(item => (
            <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative btn-header text-dark group hover:text-white"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden text-dark">
          {open ? <FaTimes size={24}/> : <FaBars size={24}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-md px-4 py-3 space-y-2">
          {navItems.map(item => (
            <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={()=>setOpen(false)}
              className="block btn-header text-dark text-center w-full bg-transparent hover:bg-primary hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
