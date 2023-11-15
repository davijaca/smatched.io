import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


import './Header.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const closeMenu = () => setClick(false)

    return (
        <>
        <div className={color ? 'header header-bg' : 'header'}>
                <div className='headerBox'>
                    <div className='right'>
                        <div className='rightImg'>
                            <img src="./header_logo.png" alt="Logo"/>

                        </div>
                        <div className='headerTitle'>
                            <span>
                            <span className='headerTitleItem'>
                                offerwall
                            <br />
                            </span>
                            <span className='headerTitleItem2'>
                                monetization
                            </span>
                            </span>{" "}
                        </div>

                        <nav className='topMenu'>
                            <a className='topMenuItem' href="/">Home</a>
                            {/*<a className={styles.topMenuItem}>How it Works</a>*/}
                            <a className='topMenuItem' href="/#/blog">Blog</a>
                            <a className='topMenuItem'>About Us</a>
                        </nav>
                    </div>

                    <div className='contact'>
                        <a href="/#/contact">
                        <div className='contactButton'>Request Contact</div>
                        </a>
                        <div className='hamburger' onClick={handleClick}>
                            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className='nav-item'>
                                <a href='/' onClick={closeMenu}>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/#/blog' onClick={closeMenu}>Blog</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#about' onClick={closeMenu}>About</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/#/contact' onClick={closeMenu}>Contact Us</a>
                            </li>
                        </ul>
                        </div>

                </div>
        </div>

                {/* Temporary solution for background opacity */}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                </ul>
            </>
    )
}

export default Navbar



