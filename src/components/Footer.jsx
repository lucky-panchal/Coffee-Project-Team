import React from 'react'

const Footer = ({username}) => {
  return (
    <div>
    <h1>Hello , im footer</h1>
    <p> Here is data passed from header.jsx = {username}</p>
    </div>
  )
}
export default Footer;
