import React from 'react'
import "./style.css"

function Logo({logo}) {
  return (
    <div className='logo_box'>
        <img className='image' src={logo}></img>
       {/* <p>Icon</p> */}
        
       <i className="fa-solid fa-arrow-right-long"></i>
    </div>
  )
}

export default Logo