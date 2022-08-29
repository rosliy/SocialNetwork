import React from "react";

import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            
            Friend Finder
            <div>
                <a href="#">Settings</a>
            </div>
        </header>
    );
}

export default Header;