
import React from 'react';
import {Faceboook,Twitter,Youtube,Instagram, Phone, Usaflag} from '../assets/icons'
const Social = () => {
    return (
        <div className='container icon-container'>
            <div className='icons'>
                <Faceboook/>
                <Twitter/>
                <Youtube/>
                <Instagram/>
            </div>
            <div className='phone'>
                <p className='phone-icon'><Phone/></p>
                <span className='number'>
                (+123)4567890
                </span>
            </div>
            <div className=''>
                <ul className='change'>
                    <li>
                        <a className='link-a' href=''>
                        Setting
                        </a>
                    </li>
                    <li>
                        <a  className='link-a' href=''>
                        USD $
                        </a>
                    </li>
                    <li>
                        <Usaflag/>
                        <a className='link-a' href=''>
                        English
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Social;
