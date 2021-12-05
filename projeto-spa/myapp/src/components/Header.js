import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'
import logo from '../images/logo512.png'


const Header = () => {
    return (
        <>
            <header>
                <div className="container container-flex">
                    <div className="logoContainer">
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <nav>
                        <div className="list">
                            <NavLink exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                            <NavLink to="/html" className="listItem" activeClassName="activeItem">Html</NavLink>
                            <NavLink to="/css" className="listItem" activeClassName="activeItem">Css</NavLink>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header;