import { Button } from '@mui/material';
import React from 'react'
import './country-dropdown.css'

import { FaAngleDown } from "react-icons/fa6";

function CountryDropdown() {
    return (
        <Button className='country-dropdown'>
            <div className='info'>
                <span className='label'>Your Location</span>
                <span className='name'>Bangladesh</span>
            </div>
            <span className='ml-auto'>
                <FaAngleDown />
            </span>
        </Button>
    )
}

export default CountryDropdown