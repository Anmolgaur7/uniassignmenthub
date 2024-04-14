import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { SlOptions } from "react-icons/sl";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Navbar for larger devices */}
      <nav className='hidden sm:flex justify-between shadow-xl bg-fixed bg-gradient-to-b from-black to-green1 backdrop-blur-xl'>
        <div className='flex justify-center items-center'>
          <Link to='/'>
            <img src="" alt="" className='w-16 h-16 bg-black mt-3 mb-3 mr-6 ml-3 md:w-18 md:h-18 rounded-full' />
          </Link>
        </div>
        <ul className="flex justify-center items-center">
          <NavItem to="/about" currentPath={location.pathname}>About</NavItem>
          <NavItem to="/blog" currentPath={location.pathname}>Blogs</NavItem>
          <NavItem to="/login" currentPath={location.pathname}>Login</NavItem>
          <NavItem to="/sample" currentPath={location.pathname}>Samples</NavItem>
        </ul>
      </nav>

      {/* Navbar for smaller devices */}
      <nav className='sm:hidden flex justify-between items-center shadow-xl text-black backdrop-blur-xl py-2 px-2'>
        <Link to="/">
          <div className='flex justify-center items-center mr-3'>
            <img src='' alt="logo" className='w-20 h-20 md:w-32 md:h-32 rounded-full' />
          </div>
        </Link>
        <div>
          <button onClick={() => setShowLinks(!showLinks)} className="p-4 focus:outline-none hover:text-blue-500">
            {showLinks ? <ImCross className="text-4xl" /> : <SlOptions className="text-4xl" />}
          </button>
        </div>
      </nav>

      {/* Overlay for smaller devices when Navbar is open */}
      {showLinks && (
        <div className="fixed inset-0 bg-white backdrop-blur-lg flex flex-col justify-center items-center z-50">
          <ImCross className="text-black text-3xl cursor-pointer mb-[6rem] border border-slate-400 rounded-full" onClick={() => setShowLinks(false)} />
          <ul className="text-black text-3xl flex flex-col justify-between space-y-10 ">
            <li className='text-3xl font-semibold border-b-2 p-3 border-slate-400 text-center   hover:text-blue-500' onClick={() => setShowLinks(false)}>
              <Link to="/about">About</Link>
            </li>
            <li className='text-3xl font-semibold border-b-2 p-3 border-slate-400 text-center  hover:text-blue-500' onClick={() => setShowLinks(false)}>
              <Link to="/login">Login</Link>
            </li>
            <li className='text-3xl font-semibold border-b-2 p-3 border-slate-400 text-center  hover:text-blue-500' onClick={() => setShowLinks(false)}>
              <Link to="/sample">
                Samples
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

// Component to handle navigation items and apply active styling
const NavItem = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;
  return (
    <li
      className={`text-xl md:text-xl font-bold font-mono mr-[4rem] text-white cursor-pointer ${
        isActive ? 'text-orange-500' : 'hover:text-blue-500'
      }`}
    >
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default Navbar;
