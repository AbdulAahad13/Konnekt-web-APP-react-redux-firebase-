import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import konnekt from './konnekt.svg'
import HeaderOption from './HeaderOption'

function Header() {
    return (
        <div className='header'>


            <div className=' header__left' >
                <img src="./konnekt.png" alt="" />
                <div className="header__search">
                    {/* search-icon */}
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className=' header__right' >
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='Friends' />
                <HeaderOption Icon={MenuBookIcon} title='Groups' />
                <HeaderOption Icon={ChatIcon} title='Messages' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar="https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png" title='My Account' />
            </div>

        </div>



    )
}

export default Header
