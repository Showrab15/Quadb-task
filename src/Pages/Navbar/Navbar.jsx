import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav style={{ backgroundColor: "blanchedalmond" }}  className="navbar navbar-expand-lg mb-4">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">QuaDb</Link>
   
      <div className="navbar-nav ms-auto">
        <Link  className="nav-link active fw-semibold"  to="/"> Home </Link>
       
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;