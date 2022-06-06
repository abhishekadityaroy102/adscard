import React from 'react'
import Details from './Details'
import Logo from './Logo'
import "./style.css"

const Carddiv = (props) => {
    console.log(props)
  return (
      
      props.data.map((el,index)=>{
       return (
           <div className='main_div' style={{backgroundColor:el.color}}>
                <Details detail={el}/>
        <Logo logo={el.logo}/>
           </div>
       )
      })
  
  )
}

export default Carddiv