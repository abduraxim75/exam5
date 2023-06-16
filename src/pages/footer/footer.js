import React from 'react';
import { Faceboook, Instagram, Logo, Payments, Twitter, Youtube } from '../../assets/icons';

const Footer = () => {
    return (
        <div className='container'>
            <div className='foot'>
                <div className='footer-logo-div'>
                    <Logo />
                    <p className='footer-paragraph'>
                        We are a team of professional designers and developers that create high quality wordpress plugins, Html, React Template.
                    </p>
                    <ul className='footer-icons'>
                        <li>
                            <p className='icon-footer'>
                                <Instagram />
                            </p>
                        </li>
                        <li>
                            <p className='icon-footer'>
                                <Youtube />
                            </p>
                        </li>
                        <li>
                            <p className='icon-footer'>
                                <Twitter />
                            </p>
                        </li>
                        <li>
                            <p className='icon-footer'>
                                <Faceboook />
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='footer-big-div'>
                    <div className='footer-menu2'>
                        <ul className='footer-menu1'>
                            <h3 className='info'>
                                Information
                            </h3>
                            <h2 className='hr2'></h2>
                            <li>
                                <a href=''>
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    payment
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    Stores
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-menu2'>
                        <h3 className='info'>
                            Social Links
                        </h3>
                        <h2 className='hr2'></h2>
                        <li>
                            <a href=''>
                                New products
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                Best sales
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                Login
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                My account
                            </a>
                        </li>
                    </div>
                    <div className='footer-menu2'>
                        <h3 className='info'>Newsletter</h3>
                        <h2 className='hr2'></h2>
                        <p className='footer-paragraph'>Subcribe to the TheFace mailing list to receive update on mnew arrivals, special offers and other discount information.</p>
                        <input className='footer-input' type="email" placeholder='your email address' />
                        <button className='foot-btn'>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className='end-footer'>
                <p className='end-footer-paragraph'>
                Copyright © HasThemes. All Rights Reserved
                </p>
                <span className='payments'>
                <Payments/>
                </span>
                
            </div>


        </div>
    );
}

export default Footer;
