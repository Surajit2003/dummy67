import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation().pathname;

    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <NavLink to="/" className="navbar-brand p-0">
                    <h1 className={`m-0 ${location === '/contact' ? "text-primary" : ""}`}><i className="fa fa-map-marker-alt me-3"></i>World Tour</h1>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <NavLink to="/" className={`nav-item nav-link ${location !== "/contact" ? "link-light" : ""}`}>Home</NavLink>
                        <NavLink to="/about" className={`nav-item nav-link ${location !== "/contact" ? "link-light" : ""}`}>About</NavLink>
                        <NavLink to="/contact" className={`nav-item nav-link ${location !== "/contact" ? "link-light" : ""}`}>Contact</NavLink>
                    </div>
                </div>
                <NavLink to="/" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
