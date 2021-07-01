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
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase'
import { logout, selectUser } from './features/userSlice'


function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()


    const logOutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
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
                <HeaderOption avatar={true} title='My Account'
                    onClick={logOutOfApp} />
            </div>

        </div>



    )
}

export default Header
