import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <NavLink to="/" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>World Tour</h1>
                    {/* <img src="img/logo.png" alt="Logo" /> */}
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                    </div>
                </div>
                <NavLink to="" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</NavLink>

            </nav >
        </div >



        //     <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        //   <div className="container-fluid">
        //     <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //       <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //         <li className="nav-item">
        //           < NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        //         </li>
        //         <li className="nav-item">
        //           <NavLink className="nav-link" to="/about">About</NavLink>
        //         </li>

        //       </ul>
        //       <form className="d-flex" role="search">
        //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //         <button className="btn btn-outline-success" type="submit">Search</button>
        //       </form>
        //     </div>
        //   </div>
        // </nav>
    );
};

export default Navbar;
