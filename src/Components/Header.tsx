import React from 'react';
import logo from '../logo.svg';  

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">
                        <img src={logo} width="40" height="40" alt=""/>
                    </a>
                </nav>
            </React.Fragment>
        ); 
    }
}

export default Header; 