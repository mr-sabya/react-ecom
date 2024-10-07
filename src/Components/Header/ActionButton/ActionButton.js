import { Button } from '@mui/material'
import React from 'react'
import { FiUser } from 'react-icons/fi'
import { IoBagOutline } from 'react-icons/io5'

import './ActionButton.css'

const ActionButton = () => {
    return (
        <div className='action'>
            <Button className='user'><FiUser /></Button>
            <div className='cart'>
                <span className='price'>
                    $3.29
                </span>
                <div className='cart-btn'>
                    <Button><IoBagOutline /> </Button>
                    <span className='count'>
                        0
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ActionButton