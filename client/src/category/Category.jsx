import { FaHome, FaQuestion, FaUpload, FaUsers } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/base.css'
import './category.css'

function Category() {
    const classList = [
        {   
            id: 0,
            name: 'home',
            icon: <FaHome/>,
            link: '/'
        },
        {
            id: 1,
            name: 'class',
            icon: <FaUsers/>,
            link: '/class'
        },
        {
            id: 2,
            name: 'Upload',
            icon: <FaUpload/>,
            link: '/file'
        },
        {
            id: 3,
            name: 'Help',
            icon: <FaQuestion/>,
            link: '/help'
        }];

    const [tp, setTp] = useState(0)
    const handleChange = (_id) => {
        setTp(_id)
    }

    return (
        <div className='category'>
            <ul className='category__list'>
                {   
                    classList.map((e, id) => (
                        <Link to={e.link} key={id} className='ctg__list-item'>
                            <li
                                className={ e.id === tp && 'ctg__list-item active' || 'ctg__list-item'}
                                onClick={() => handleChange(e.id)}
                            >{e.icon}<p>{e.name}</p></li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Category;