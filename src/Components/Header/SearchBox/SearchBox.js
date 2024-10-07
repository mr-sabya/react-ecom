import { Button } from '@mui/material';
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className="header-search">
            <input type='text' placeholder='Search for Product' />
            <Button><IoSearchOutline /></Button>
        </div>
    )
}

export default SearchBox