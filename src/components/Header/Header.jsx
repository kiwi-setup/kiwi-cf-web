import React from 'react';
import './header.scss'; // Import the SCSS file

const Header = ({ isLoggedIn, onProfileClick }) => {
    return (
        <header className="header">
            <div className="header__title">Kiwi Insurance</div>
            {isLoggedIn && (
                <button className="header__profile-btn" onClick={onProfileClick}>
                    Profile
                </button>
            )}
        </header>
    );
};

export default Header;