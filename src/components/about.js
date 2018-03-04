import React from 'react';
import threadless_img from '../../img/threadless.png';
import s6_img from '../../img/society6.png';
import fb_img from '../../img/facebook.png';
import threadless_icon from '../../img/threadless-icon.png';
import s6_icon from '../../img/s6-icon.png';
import fb_icon from '../../img/f-icon.png';
import drawings_img from '../../img/drawings.png'

const About = (props) => {
    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-7">
                <div className="row d-block">
                    <img className="img-fluid" src={drawings_img} alt=" "/>
                </div>
                <div className="row">
                    <div className="col-3 mt-3 text-uppercase text-dark d-none d-md-block">
                        <p className="textFillVW"><strong>Also find me on:</strong></p>
                    </div>
                    <div className="col-md-9 mt-3 mr-0">
                        <div className="d-flex flex-column ">
                            <div className="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eius soluta accusantium nostrum, illo quo modi dolorum quam, eveniet eaque fugiat saepe nobis voluptatibus fugit tempora? Ipsa saepe doloremque dolorem.</div>
                            <div className="d-none d-xl-flex flex-row justify-content-between mt-5">
                                <img className="img-fluid " src={threadless_img} alt=" "/>
                                <img className="img-fluid " src={s6_img} alt=" "/>
                                <img className="img-fluid " src={fb_img} alt=" "/>
                            </div>
                            <div className="d-xl-none d-flex flex-row mt-3 justify-content-end">
                                <div className="p-2 bg-dark rounded mr-2"><img className="ml-1" src={threadless_icon} alt=" "/></div>
                                <div className="p-2 bg-dark rounded"><img className="ml-1" src={s6_icon} alt=" "/></div>
                                <div className="p-2 bg-dark rounded ml-2"><img className="ml-1" src={fb_icon} alt=" "/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About;
