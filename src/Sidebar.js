import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
function Sidebar() {

    const user= useSelector(selectUser);
    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://thumbs.dreamstime.com/b/nature-background-frame-tree-leave-green-grass-spring-summer-space-text-157176009.jpg" alt="" />

                <Avatar src="" className='sidebar__avatar' >{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>
                        Profile Viewed
                    </p>
                    <p className="sidebar__statNumber">
                        1,250
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>
                        Profiles Konnekted with
                    </p>
                    <p className="sidebar__statNumber">
                        300
                    </p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Trending</p>
                {recentItem('rateMovies')}
                {recentItem('golfsquad')}
                {recentItem('Reunionparty')}
                {recentItem('Petstore')}
            </div>
        </div>
    )
}

export default Sidebar
