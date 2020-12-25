import React from 'react';
import './Header.css';

const Header = (): JSX.Element => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-logo">
                    <span>R</span>eact 
                    <div className="header-logo-semi">|</div> 
                    <span>B</span>ank
                </div>  
                <div className="support">
                Service Support
                </div>
            </div>
        </div>
    )
}

export default Header;