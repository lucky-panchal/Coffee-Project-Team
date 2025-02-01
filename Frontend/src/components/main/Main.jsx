
import React from 'react'
import './main.css'
import Rightbody from '../right body/Rightbody'
import Categorybody from '../category body/Categorybody'

function Main() {
  return (
    <div className='main-contain'>
      <Categorybody/>
      <Rightbody/>
    </div>
  )
}

export default Main
