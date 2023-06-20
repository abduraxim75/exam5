
import React from 'react';
import Social from '../../components/social';
import Navbar from '../navbar/navbar'
const Layout = () => {
    return (
        <div className='contaier'>
            <header>
            <Social/>
            <Navbar/>
            </header>
        </div>
    );
}

export default Layout;
