import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InputOption from './InputOption'
import Post from './Post'
function Feed() {
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" />
                        <button type='submit'>Post! </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5f9" />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="teal" />
                    <InputOption Icon={EventNoteIcon} title='Event' color="orange" />
                    <InputOption Icon={LocationOnIcon} title='Add location' color="#76F096" />
                </div>
            </div>


{/* posts */}
            <Post/>

        </div>
    )
}

export default Feed
