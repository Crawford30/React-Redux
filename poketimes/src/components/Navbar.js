import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="conatiner">
                <a className="brand-logo">Poke's Time</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar