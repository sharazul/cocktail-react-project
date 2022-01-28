import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo1.png'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = React.useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  return (
    <nav className='navbar'>
      <div className='bars'>
        <FaBars onClick={handleClick} />
      </div>
      <div className='navbar-center'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>

        <ul className={click ? 'navbar-links navbar-show' : 'navbar-links'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
