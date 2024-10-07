import { Button } from '@mui/material'
import React from 'react'
import { IoIosMenu } from 'react-icons/io'
import { FaAngleDown } from "react-icons/fa6";

import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-sm-2 menu-category'>
                        <Button className='categories'>
                            <span className='bars'><IoIosMenu /></span>
                            <span className='text'>ALL CATEGORIES</span>
                            <span className='angle'><FaAngleDown /></span>
                        </Button>
                    </div>

                    <div className='col-sm-10 main-menu'>
                        <ul className='menu'>
                            <li className='menu-item'>
                                <Link to="/"><Button>Home</Button></Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/fashion"><Button>Fashion</Button></Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/"><Button>Electronic</Button></Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/"><Button>Bakery</Button></Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/"><Button>Grocery</Button></Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/"><Button>Blog</Button></Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/"><Button>Contact Us</Button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation