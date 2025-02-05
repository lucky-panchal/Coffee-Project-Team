
import React from 'react'
import './filter.css'

function Filter() {

  const handleHideFilter = (event) => {
    if (event.target.closest('.filter-box')) {
      return;
    }
    const filter = document.querySelector('.filter-contain');
    if (filter.style.display === 'none') {
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
    <div onClick={handleHideFilter} className='filter-contain' style={{ display: 'none' }}>
      <div className="filter-box">
        <div className="filter-nav">
          <span onClick={handleBack} className='goBackBtn'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
          </span>
          <h1>filter</h1>
        </div>
      </div>
    </div>
  )
}

export default Filter
