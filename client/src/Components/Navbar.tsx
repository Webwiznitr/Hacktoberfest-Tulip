import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'; // Assuming you place the SCSS file in the same directory

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Client #6</Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup">Sign Up</Link>
                </li>
                {/* Add additional navigation links as needed */}
            </ul>
        </nav>
    );
}

export default Navbar;