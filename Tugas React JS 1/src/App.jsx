import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // pastikan kamu punya file App.css

import Home from './components/Home';
import Team from './components/Team';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar expand="md" className="shadow-sm" style={{ backgroundColor: '#343a40' }}>
        <Container>
          <NavbarBrand tag={Link} to="/" className="text-white fw-bold">
            🚀 MyApp
          </NavbarBrand>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" className="text-white mx-2 nav-link-custom">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/team" className="text-white mx-2 nav-link-custom">
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact" className="text-white mx-2 nav-link-custom">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
