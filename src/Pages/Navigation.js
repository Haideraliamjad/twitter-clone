import React from 'react'
import Button from '../Components/Button'
const Navigation = () => {
    return (
        <div className='nav'>
            <div className='left-inner-nav'>
                <div className='top-nav-wrapper'>
                    <div className="icon-wrapper">
                        <i className="fa-brands fa-twitter icon"></i>
                    </div>
                    <Button text="Home" thin={true} icon={<i class="fa-solid fa-house-chimney-window"></i>} />
                    <Button text="Explore" thin={false} icon={<i class="fa-solid fa-hashtag"></i>} />
                    <Button text="Notifications" thin={false} icon={<i class="fa-solid fa-bell"></i>} />
                    <Button text="Messages" thin={false} icon={<i class="fa-solid fa-envelope"></i>} />
                    <Button text="Bookmarks" thin={false} icon={<i class="fa-solid fa-bookmark"></i>} />
                    <Button text="User" thin={false} icon={<i class="fa-solid fa-user"></i>} />
                    <a href="" className='tweet-button'>Tweet</a>
                </div>
                <a href="" className='profile-button'>
                    <img src="images/profile.jpg" className='profile' alt="image" />
                    <span>Haider Ali</span>
                    <i class="fa-solid fa-ellipsis"></i>
                </a>
            </div>
        </div>
    )
}
export default Navigation