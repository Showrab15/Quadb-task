import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav style={{ backgroundColor: "blanchedalmond" }} className="navbar navbar-expand-lg mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand active fw-semibold" to="/">QuaDb</Link>
          <div className="navbar-nav mx-auto">
            <Link className="nav-link active fw-semibold" to="/"> Home </Link>
            <Link className="nav-link active fw-semibold" to="/bookedShows"> Booked Shows </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;