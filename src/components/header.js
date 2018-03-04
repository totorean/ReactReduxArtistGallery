import React from 'react';
import { NavLink } from 'react-router-dom';
import logo_img from '../../img/logo.png';

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mt-md-5">
            <div className="logoAmi d-none d-md-block">
                <img src={logo_img} width="120" height="120" alt=""/>
            </div>
            <a className="navbar-brand mr-auto d-md-none" href="#">am.I</a>

            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink to="/" exact activeClassName="active" className="nav-link text-uppercase text-white" href="#"><small>Pixels</small></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pencils" activeClassName="active" className="nav-link text-uppercase text-white" href="#"><small>Pencils</small></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" activeClassName="active" className="nav-link text-uppercase text-white" href="#"><small>Contact</small></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
