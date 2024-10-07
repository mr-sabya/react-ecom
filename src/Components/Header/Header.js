import React, { useContext } from 'react'
import './Header.css'


import CountryDropdown from './CountryDropdown/CountryDropdown';

import Logo from '../Logo/Logo';
import SearchBox from './SearchBox/SearchBox';
import ActionButton from './ActionButton/ActionButton';
import Navigation from './Navigation/Navigation';
import { MyContext } from '../../App';


const Header = () => {

    const context = useContext(MyContext)

    return (
        <div>
            <div className='header'>
                <div className='top-strip'>
                    <div className='container'>
                        <p>Due to the <strong>COVID 19</strong> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>

                <header className='main-header'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='logo col-sm-2'>
                                {/* logo start */}
                                <Logo />
                                {/* logo end */}
                            </div>

                            <div className='col-sm-10 option'>

                                {
                                    context.countryList.length !== 0 && <CountryDropdown />
                                }
                                
                                {/* header search start */}
                                <SearchBox />
                                {/* header search end */}

                                {/* action start */}
                                <ActionButton />
                                {/* action end */}
                            </div>
                        </div>
                    </div>
                </header>


                {/* nav start */}
                <Navigation />
                {/* nav end */}
            </div>
        </div>
    )
}

export default Header