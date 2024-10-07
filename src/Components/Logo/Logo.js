import React from 'react'
import LogoImage from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to={'/'}> <img src={LogoImage} alt='Logo' /></Link>
    )
}

export default Logo