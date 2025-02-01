import React from 'react'
import './category.css'
import hotCoffee from '../images/hot-coffee.png'

function Category() {
  return (
    <div className='category'>
      <div className="category-img">
        <img src={hotCoffee} alt="category" />
      </div>
      <span>hot coffee</span>
    </div>
  )
}

export default Category
