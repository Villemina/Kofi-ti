import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import './menu.scss';

function Menu() {
    const [openLinks, setOpenLinks] = useState(false);
    const [closeLinks, setCloseLinks] = useState(false);

    const toggleCloseNavbar = () => {
        setCloseLinks(!closeLinks);
    };
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="nav__content-one" id={openLinks ? "open" : "close"}>
                <h2 className="logo">Kofi&Ti</h2>
                <div className="hiddenLinks">
                    <Link to="/"> Strona Główna </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> Wydarzenia </Link>
                    <Link to="/contact"> Kontakt </Link>
                </div>
            </div>
            <div className="nav__content-two">
                <Link to="/"> Strona Główna </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/events"> Wydarzenia </Link>
                <Link to="/contact"> Kontakt </Link>
                <button onClick={toggleNavbar}>
                    <FaBars />
                </button>
                <button onClick={toggleCloseNavbar}>
                     <FaTimes/>
                </button>
            </div>
        </div>
    );
}

export default Menu;
