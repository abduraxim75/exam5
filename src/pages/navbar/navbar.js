
import { Link, } from 'react-router-dom';
import { Bag, Heart, Logo, Search, Shuffle } from '../../assets/icons';
const Navbar = () => {
    return (
        <div className='container container linkse'>
            <div className='container logo'>
                <p className='loga'>
                <Logo/>
                </p>
            </div>
                <div className='container links-navbar'>
                    <nav>
                    <ul className='nav-links'>
                        <li>
                            
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/shop'>Card</Link>
                        </li>
                        <li>
                            <Link to='/pages'>Pages</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/admin'>Admin</Link>
                        </li>
                    </ul>
                </nav>
                </div>
                <div className='alt2'>
                        <ul className='notification'>
                            <li>
                                <Search/>
                            </li>
                            <li>
                                <Shuffle/>
                            </li>
                            <li>
                                <Heart/>
                            </li>
                            <li>
                                <Bag/>
                            </li>
                        </ul>
                    </div>
                    
        </div>
    );
}

export default Navbar;
