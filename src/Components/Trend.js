import React from 'react'

const Trend = ({ name, views }) => {
    return (
        <div className='trending-topics'>
            <div className='data-box'>
                <p className='sub-heading'>Trending in Pakistan</p>
                <h3 className='trend'>{name}</h3>
                <p className='sub-heading'>{views} Views</p>
            </div>
            <div className='more'>
                <i class="fa-solid fa-ellipsis more-icon"></i>
            </div>
        </div>
    )
}

export default Trend