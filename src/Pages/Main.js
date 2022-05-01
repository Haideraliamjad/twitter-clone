import React from 'react'
import Post from '../Components/Post'
const Main = () => {
  return (
    <div className='main'>
      <div className="top-main-nav">
        <h3>Home</h3>
        <i class="fa-solid fa-hand-sparkles sparkels"></i>
      </div>
      <div className="add-post">
        <div className="text-section-wrapper">
          <img src="images/profile.jpg" className="dp" alt="" srcset="" />
          <input type="text" placeholder="What's Happening?" className='field' />
        </div>
        <span className="warning-span"><i class="fa-solid fa-earth-americas"></i> EveryOne Can Replay</span>
        <hr />
        <div className="options-wrapper">
          <div class="left-options">
            <i class="fa-solid fa-image options"></i>
            <i class="fa-solid fa-gift options"></i>
            <i class="fa-solid fa-chart-bar options"></i>
            <i class="fa-solid fa-face-smile options"></i>
            <i class="fa-solid fa-calendar options"></i>
            <i class="fa-solid fa-location-dot options"></i>
          </div>
          <a href="" className='btn-tweet'>Tweet</a>
        </div>
      </div>
      <Post url="images/profile.jpg" posturl="images/img.jpg" name="Haider Ali" />
      <Post url="images/usman.jpg" posturl="images/mountain.jpg" name="Taha" />
    </div>
  )
}

export default Main