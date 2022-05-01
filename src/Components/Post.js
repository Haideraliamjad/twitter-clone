import React from 'react'

const Post = ({ url, name, posturl }) => {
    return (
        <div className='post'>
            <div className="post-header">
                <div className='h'>
                    <div className="dp">
                    <img src={url}  alt="" srcset="" />
                    </div>
                    <h4>{name}</h4>
                </div>
                <div className='more'>
                    <i class="fa-solid fa-ellipsis more-icon"></i>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, in?</p>
            <img className="img" src={posturl} alt="" />
            <div className="comment-box">
                <i class="fa-solid fa-comment cmnt"></i>
                <i class="fa-solid fa-heart heart"></i>
                <i class="fa-solid fa-arrow-rotate-left loop"></i>
                <i class="fa-solid fa-arrow-up-from-bracket cmnt"></i>
            </div>
        </div>
    )
}

export default Post