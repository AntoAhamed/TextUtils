import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

export default function Navbar(props) {
    const [homeActive, setHomeActive] = useState("active");
    const [aboutActive, setAboutActive] = useState(null);

    const activateHome = () => {
        setHomeActive("active");
        setAboutActive(null);
    }

    const activateAbout = () => {
        setHomeActive(null);
        setAboutActive("active");
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" onClick={activateHome} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${homeActive}`} onClick={activateHome} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${aboutActive}`} onClick={activateAbout} to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.mode === "dark" ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">{props.mode === "dark" ? "Dark mode is on" : "Light mode is on"}</label>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About'
}