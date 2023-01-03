import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__ul">
                <li className="navbar__li">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar__li">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
