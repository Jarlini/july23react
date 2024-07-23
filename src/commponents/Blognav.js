import React from 'react';
import { Link } from 'react-router-dom';
import logo from './download (3).png';
import '/home/uki-student/blogg/src/App.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" /> <p>blog nav</p>
            </div>
            <div className="nav-buttons">
                <Link to="/">Java</Link>
                <Link to="/Data stuc">data stucture</Link>
                <Link to="/Algoritham">Algoritham</Link>
                <Link to="/Net work">Net work</Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
        </nav>
    );
};

export default Navbar;
