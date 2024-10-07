import React, { useContext, useState } from 'react'
import { Button, Dialog, } from '@mui/material';
import Slide from '@mui/material/Slide';
import './country-dropdown.css'

import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from 'react-icons/io5';
import { MdClose } from "react-icons/md";
import { MyContext } from '../../../App';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDropdown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const context = useContext(MyContext);

    const selectCountry = (index) => {
        setSelectedCountry(index);
        // alert(index);
        setIsOpenModal(false);
    }

    return (
        <div>
            <Button className='country-dropdown' onClick={() => setIsOpenModal(true)}>
                <div className='info'>
                    <span className='label'>Your Location</span>
                    <span className='name'>Bangladesh</span>
                </div>
                <span className='ml-auto'>
                    <FaAngleDown />
                </span>
            </Button>
            <Dialog
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                TransitionComponent={Transition}
                className='location-modal'>
                <h4>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>

                <Button className='modal-close' onClick={() => setIsOpenModal(false)}><MdClose /></Button>

                <div className="country-search">
                    <input type='text' placeholder='Search your area..' />
                    <Button><IoSearchOutline /></Button>
                </div>

                <div>
                    <ul className='country-list'>
                        <li><Button onClick={() => setIsOpenModal(false)}>All</Button></li>

                        {
                            context.countryList?.length !== 0 && context.countryList?.map((item, index) => {
                                return (
                                    <li key={index}><Button onClick={() => selectCountry(index)} className={`${selectedCountry == index ? 'active' : ''}`}>{item.country}</Button></li>
                                )
                            })
                        }
                       
                    </ul>
                </div>

            </Dialog>
        </div>



    )
}

export default CountryDropdown