import React from 'react'
import { LiaBuyNLarge } from "react-icons/lia";
import { Link  } from 'react-router-dom'

export default function Header() {
  return (
    <div className='Container_header'>
        <div className='logo'>
         <span><LiaBuyNLarge style={{
                fontSize: 60,
                color: "rgb(36, 0, 85)",
                margin: 10,
            }}/>
          </span>
           
        </div>
        <div className='Nav'>
            <Link to="/" >Accuielle</Link><br /><br /><br />
            <Link to="/Histogramme" >Histogramme</Link><br /><br /><br />
            <Link to="/Affichage" >Affichage</Link><br /><br /><br />
        </div>
    </div>
  )
}
