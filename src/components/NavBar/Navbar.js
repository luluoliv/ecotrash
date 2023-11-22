import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                Eco<span style={{ color: "#326F5E" }}>Trash</span>
            </div>
            <button className="menu-button" onClick={toggleMenu}>
                Menu
            </button>
            <ul className={`menu ${menuOpen ? "open" : ""}`}>
                <li>Sobre</li>
                <li>Serviços</li>
                <li>Contato</li>

                <Link to={"/registros"}>
                    <button className="login-btn">
                        <span>Meus registros</span>
                    </button>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
