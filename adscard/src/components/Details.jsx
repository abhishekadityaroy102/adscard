import React from 'react'
import "./style.css"
const Details = ({detail}) => {
    console.log(detail)
  return (
    <div className='detail_div'>
        <h3>{detail.date}</h3>
        <button>Case Study</button>
        <h1>{detail.heading}</h1>
        <h1>{detail.subheading}</h1>
        <h3>{detail.device}</h3>
    </div>
  )
}

export default Details