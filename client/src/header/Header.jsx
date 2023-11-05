import { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import logo from '../img/ptdtntthptangiang.png';
import { FaBell, FaSearch, FaUser} from 'react-icons/fa';

function header() {
    const [clickM, setClickM] = useState(false);

    return (
        <div className='header'>
            <Link to="/"><img src={logo} alt="logo" className='header__logo'/></Link>

            <div className="header__search">
                <input type="text" placeholder='Search class/student...' className='search '/>
                <div className='header__search-icon'>
                    <FaSearch/>
                </div>
            </div>

            <div className="header__info">
                <div className="header__info-item"><FaBell/></div>
                <div className="header__info-item" onClick={() => setClickM(!clickM)}><FaUser/></div>
            </div>
        </div>
    )
}

export default header;