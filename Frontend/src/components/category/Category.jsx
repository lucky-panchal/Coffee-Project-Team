import React from 'react'
import './category.css'

function Category({img, title}) {
  return (
    <div className='category'>
      <div className="category-img">
        <img src={img} alt="category" />
      </div>
      <span>{title}</span>
    </div>
  )
}

export default Category
