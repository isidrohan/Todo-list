import React from 'react'


export default function Navbar() {
  return (
        <nav>
            <ul className='navbar'>
            <img src={process.env.PUBLIC_URL + '/logo.png'} />
                <li> <a href="">Home</a></li>
            </ul>
       
        </nav>
  )
}
