import React from "react";
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const setActive = ({ isActive }) => (isActive ? s.active : "");
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink className={setActive} to="/newsfeed"><img src="" />My Newsfeed</NavLink></li>
                <li><NavLink className={setActive} to="/people"><img src="" />People Nearby</NavLink></li>
                <li><NavLink className={setActive} to="/friends"><img src="" />Friends</NavLink></li>
                <li><NavLink className={setActive} to="/dialogs"><img src="" />Messages</NavLink></li>
                <li><NavLink className={setActive} to="/images"><img src="" />Images</NavLink></li>
                <li><NavLink className={setActive} to="/music"><img src="" />Music</NavLink></li>
                <li><NavLink className={setActive} to="/videos"><img src="" />Videos</NavLink></li>
            </ul>
        </nav >
    );
}

export default Navbar;