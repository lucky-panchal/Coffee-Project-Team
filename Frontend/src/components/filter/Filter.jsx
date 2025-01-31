
import React from 'react'
import './filter.css'

function Filter() {

  const handleHideFilter = (event) => {
    if (event.target.closest('.filter-box')) {
      return;
    }
    const filter = document.querySelector('.filter-contain');
    if(filter.style.display === 'none') {
      filter.style.display = 'flex';
    } else {
      filter.style.display = 'none';
    }
  }

  const handleBack = () => {
    const filter = document.querySelector('.filter-contain');
    filter.style.display = 'none';
  }

  return (
    <div onClick={handleHideFilter} className='filter-contain' style={{display: 'none'}}>
      <div className="filter-box">
        <div className="filter-nav">
          <span onClick={handleBack} className='goBackBtn'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="brown"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></span>
          <h1>filter</h1>
        </div>
      </div>
    </div>
  )
}

export default Filter
