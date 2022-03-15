import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="#" className="nav-item">
            
            </NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <NavLink to="#" className="nav-item my-2 my-sm-0">
                        <a className="nav-link" href="#">
                            SignIn
                        </a>
                    </NavLink>
                    <NavLink to="#" className="nav-item my-2 my-sm-0">
                        <a className="nav-link" href="#">
                            SignUp
                        </a>
                    </NavLink>
                    <NavLink to="#" className="nav-item my-2 my-sm-0">
                        <a className="nav-link" href="#">
                            Films
                        </a>
                    </NavLink>
                    <NavLink to="#" className="nav-item my-2 my-sm-0">
                        <a className="nav-link" href="#">
                            Lists
                        </a>
                    </NavLink>
                </ul>
            </div>
        )}
        </nav>



    );
};
export default Header;

import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <a href="#">
                <img src={require('./images/logo2.png')} className="CSNIcon" />
            </a>
            <li>
                <Link to="#">SignIn</Link>
            </li>
            <li>
                <Link to="#">SignUp</Link>
            </li>
            <li>
                <Link to="#">Films</Link>
            </li>
            <li>
                <Link to="#">Lists</Link>
            </li>
        </div>
    );
}
export default Header;