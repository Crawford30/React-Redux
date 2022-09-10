import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = (props) => {
    console.log(props);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="conatiner">
                <a className="brand-logo">Poke's Time</a>
                <ul className="right">
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li> */}


                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar
// export default withRouter(Navbar)