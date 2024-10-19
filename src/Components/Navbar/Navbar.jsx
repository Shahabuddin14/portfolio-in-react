import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import undeline_img from '../../assets/undeline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo_open from '../../assets/logo_open.svg'
import logo_close from '../../assets/logo_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <img onClick={()=>setMenu("home")} src={logo} alt="" className='logo' />
      <img src={logo_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={logo_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={undeline_img} />: <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={undeline_img} />: <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={undeline_img} />: <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={undeline_img} />: <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={undeline_img} />: <></>}</li>
      </ul>
      <div className="nav-connect" onClick={()=>setMenu("contact")}><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar