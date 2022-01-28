import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <h2>@zigBEE</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        provident consequuntur ipsam dolore! Magni minima quod, iste, voluptate
        ex debitis incidunt, reprehenderit voluptatum eveniet earum unde aperiam
        vero facere rerum.
      </p>
      <Link to='/'>
        <button className='btn'>back to home</button>
      </Link>
    </div>
  )
}

export default About
