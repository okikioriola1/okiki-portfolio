import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

import './navbar.css'


const Navbar = () => {
    const Menu =()=>(
        <>
        <div className="navbar-link" onClick={()=>setToggleMenu(false)}>
        <a href="#about" className="nav-link">About</a>
    </div>
    <div className="navbar-link" onClick={()=>setToggleMenu(false)}>
        <a href="#project" className="nav-link">Projects</a>
    </div>
    <div className="navbar-link" onClick={()=>setToggleMenu(false)}>
        <a href="#contact" className="nav-link">Contact</a>
        </div>
        </>
        
    )
    const [ToggleMenu, setToggleMenu] = useState(false)
    return (
        <div className="portfolio-navbar">
            <div className="portfolio-navbar-links">
                    <Menu/>
                </div>
                <div className="portfolio-menu">
                {ToggleMenu ? <RiCloseLine color="#fff" size={40} onClick={()=>setToggleMenu(false)}/>
                    :<RiMenu3Line color="#fff" size={40} onClick={()=>setToggleMenu(true)}/>}
                {ToggleMenu && (
                    <div className="portfolio-menu-container">
                        <Menu/>
                        </div>
                )}

</div>

            
        </div>
    )
}

export default Navbar
