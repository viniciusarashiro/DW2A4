import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div>This is the header!
                <nav>
                    <div className="list">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/html">Html</NavLink>
                        <NavLink to="/css">Css</NavLink>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;