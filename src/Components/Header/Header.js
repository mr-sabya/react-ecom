import React from 'react'
import './Header.css'

import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import CountryDropdown from '../Buttons/CountryDropdown/CountryDropdown';

import { IoSearchOutline  } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { Button } from '@mui/material';


function Header() {
    return (
        <div>
            <div className='header'>
                <div className='top-strip'>
                    <div className='container'>
                        <p>Due to the <strong>COVID 19</strong> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>

                <header className='main-nav'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='logo col-sm-2'>
                                <Link to={'/'}> <img src={Logo} alt='Logo' /></Link>
                            </div>

                            <div className='col-sm-10 option'>
                                <CountryDropdown />
                                {/* header search start */}
                                <div className="header-search">
                                    <input type='text' placeholder='Search for Product' />
                                    <Button><IoSearchOutline  /></Button>
                                </div>
                                {/* header search end */}

                                {/* action start */}
                                <div className='action'>
                                    <Button><FaRegCircleUser /></Button>
                                </div>
                                {/* action end */}
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header