import React from 'react';
import threadless_icon from '../../img/threadless-icon.png';
import s6_icon from '../../img/s6-icon.png';
import fb_icon from '../../img/f-icon.png';

const Footer = (props) => {
    return (
        <footer className="mt-5 py-5 bg-dark text-white">
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-7 ">
                    <div className="row">
                        <div className="col"><small>Copyright &copy; 2018</small></div>
                        <div className="col text-right">
                            <img className="ml-1" src={threadless_icon} alt=" "/>
                            <img className="ml-1" src={s6_icon} alt=" "/>
                            <img className="ml-1" src={fb_icon} alt=" "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
