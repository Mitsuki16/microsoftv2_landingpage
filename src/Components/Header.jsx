import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCartShopping, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';


function Header(props) {
    return (
        <div className=' w-full bg-gray-100 flex py-6 justify-between px-[9%]'>
            <div>
                <div className=' flex gap-5 justify-around [&>h3:hover]:underline  [&>h3:hover]:underline-offset-4 [&>h3]:underline-offset-0 [&>h3]:cursor-pointer '>
                    <h3><img className=' w-28  mr-6 ' src='images/logo.png' /></h3>
                    <h3>Microsoft 365</h3>
                    <h3>Teams</h3>
                    <h3>Windows</h3>
                    <h3>Surface</h3>
                    <h3>Xbox</h3>
                    <h3>Support</h3>
                </div>
            </div>
            <div>
                <div className=' flex gap-5 justify-around [&>h3:hover]:underline  [&>h3:hover]:underline-offset-4 [&>h3]:underline-offset-0 [&>h3]:cursor-pointer '>
                    <h3>All Microsoft <FontAwesomeIcon icon={faChevronDown} /><img src='' /></h3>
                    <h3>Search <FontAwesomeIcon icon={faMagnifyingGlass} /></h3>
                    <h3>Cart <FontAwesomeIcon icon={faCartShopping} /></h3>
                    <h3 className=' flex items-center gap-2'><span>Sign in </span><FontAwesomeIcon className=' h-6' icon={faCircleUser} /></h3>
                </div>
                
            </div>
        </div>
    );
}

export default Header;