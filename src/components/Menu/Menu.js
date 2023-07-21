import React, {useState} from "react";
import {Link} from "react-router-dom";
import LogoImage from './images/logo.jpg'
import {FaBars, FaTimes} from 'react-icons/fa';
import './menu.scss';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
            <div className="nav__logo">
                <img src={LogoImage} alt="shop logo" className="nav__logo-image" />
                <h2 className="nav__logo-text">Kofi&Ti</h2>
            </div>
            <ul className={`nav__menu ${isOpen ? "open" : ""}`}>
                <Link to="/" className="nav__menu-item" onClick={toggleMenu}>
                    Strona Główna
                </Link>
                <Link to="/menu" className="nav__menu-item" onClick={toggleMenu}>
                    Menu
                </Link>
                <Link to="/events" className="nav__menu-item" onClick={toggleMenu}>
                    Wydarzenia
                </Link>
                <Link to="/contact" className="nav__menu-item" onClick={toggleMenu}>
                    Kontakt
                </Link>
            </ul>
            <button className="nav__toggle" onClick={toggleMenu}>
                {isOpen ? <FaTimes />: <FaBars /> }
            </button>
        </nav>
    );
}

export default Menu;
