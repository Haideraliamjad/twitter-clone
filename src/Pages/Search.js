import React from 'react'
import Trend from '../Components/Trend'
const Search = () => {
  return (
    <div className='search'>
      <div className="main-block">
        <div className="search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" name="" placeholder='Search Twitter' className='search-input' id="" />
        </div>
        <div className="trend-wrapper">
          <div className='heading-box'>
            <h1 className='heading-search'>Trends for you</h1>
          </div>
          <Trend name="#LUMS" views="19.2k" />
          <Trend name="#GovernerPunjab" views="20.2k" />
          <Trend name="#IMranKhanPrimeMinster" views="30k" />
          <Trend name="#COAST" views="60k" />
          <Trend name="#Haider" views="19.2k" />
          <Trend name="#SomeOne" views="30k" />
          <h1 className='bottom'>Show More</h1>
        </div>
      </div>
    </div>
  )
}

export default Search