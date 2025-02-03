import React, { useContext } from 'react'
import './categorybody.css'
import Category from '../category/Category'
import { MyContext } from '../../context api/contextApi';


function Categorybody() {

  const categoryObj = useContext(MyContext);
  return (
    <div className='category-contain' >
      {categoryObj.map((elem) => {
        return <Category key={elem.index} img={elem.image} title={elem.title}/>
      })}
    </div>
  )
}

export default Categorybody
