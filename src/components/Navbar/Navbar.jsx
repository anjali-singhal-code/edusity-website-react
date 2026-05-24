import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);


  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => (
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  )


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' offset={0} smooth={true} duration={500} >Home</Link></li>
        <li><Link to='program' offset={-260} smooth={true} duration={500} >Program</Link></li>
        <li><Link to='about' offset={-150} smooth={true} duration={500} >About us</Link></li>
        <li><Link to='campus' offset={-260} smooth={true} duration={500} >Campus</Link></li>
        <li><Link to='testimonials' offset={-260} smooth={true} duration={500} >Testimonials</Link></li>
        <li><Link className='btn' to='contact' offset={-260} smooth={true} duration={500} >Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
