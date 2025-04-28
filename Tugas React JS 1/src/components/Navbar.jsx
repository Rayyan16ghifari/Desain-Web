import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // opsional kalau mau pisah styling

const Navbar = () => {
  return (
    <nav className="nav bg-primary p-3 d-flex justify-content-center">
      <NavLink to="/" className="text-white mx-3 text-decoration-none" activeclassname="fw-bold">
        Home
      </NavLink>
      <NavLink to="/team" className="text-white mx-3 text-decoration-none" activeclassname="fw-bold">
        Team
      </NavLink>
      <NavLink to="/contact" className="text-white mx-3 text-decoration-none" activeclassname="fw-bold">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
