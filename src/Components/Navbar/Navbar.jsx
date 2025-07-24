import React from 'react'
// import { NavLink } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function Navbar() {

    return <>

        <nav className="navbar navbar-expand-lg fixed-top mb-5">
            <div className="container">
                <Link className="navbar-brand text-white fw-bold  fs-3" to="/">START FRAMEWORK</Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            {/* <Link className="nav-link text-white" to="about">ABOUT</Link> */}
                       
                            <NavLink className="nav-link text-white" to="about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="protofolio">PROTIFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="contact">CONTACT</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>

}
