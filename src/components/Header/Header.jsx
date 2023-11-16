import React, {useRef, useState,} from "react";
import styles from "./Header.module.css";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"
import {lists} from "../../businessList.js";
import {Link} from "react-router-dom";
import { AppRoutes } from "../../common/routes/AppRoutes";
import {FaBars, FaTimes} from "react-icons/fa";

const Header = () => {

    const [open, setOpen] = useState(false);
    const menuRef = useRef();
    const businessRef = useRef();

    const [click, setClick] = useState(false)
    const [color, setColor] = useState(false)

    const handleClick = () => setClick(!click)

    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== businessRef.current) {
            setOpen(false);
        }
    });

    //     const changeColor = () => {
    //     if (window.scrollY >= 90) {
    //         setColor(true)
    //     } else {
    //         setColor(false)
    //     }
    // }
    //
    // window.addEventListener('scroll', changeColor)

    const closeMenu = () => setClick(false)

    return(
        <>
            <div className={styles.mainBox} style={{ backgroundImage: "url(/header_bg.png" }}>

                <div className={styles.headerBox}>
                    <div className={styles.right}>

                        <div className={styles.logo}>
                            <img src="/img/Horizontal_container.png" alt='logo'/>
                        </div>
                    </div>

                    <div className={styles.middle}>
                        <div className={styles.topMenu}>
                            <div className={styles.topMenuItem}>PRODUCT</div>
                            <div className={styles.topMenuItem}>OUR MISSION</div>
                            <div className={styles.topMenuItem}>INFLUENCER</div>
                            <div className={styles.topMenuItem}>
                                <div className={styles.dropDown}>
                                    <div
                                        ref = {businessRef}
                                        onClick = {() => setOpen(!open)}>
                                        FOR BUSINESS

                                        {!open ? (
                                            <AiOutlineDown className={styles.arrowDown} />
                                        ) : (
                                            <AiOutlineUp className={styles.arrowDown} />
                                        )}

                                    </div>
                                    {open &&
                                        <div ref={menuRef} className={styles.dropDownBtn}>
                                            <ul>
                                                {lists.map((item) => (
                                                    <li onClick = {() =>setOpen(true)} >{item.title}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    }

                                </div>
                            </div>

                            <div>BLOG</div>
                        </div>

                    </div>

                    <div className={styles.left}>
                        <button className={styles.btn}>How it works</button>

                        <div className={styles.hamburger}
                             onClick={handleClick}
                        >
                            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                        </div>

                        <div className={styles.navMenu}>
                            <ul className={click ? "nav-menu active" : "nav-menu"}>
                                <li className='nav-item'>
                                    <a href='/' onClick={closeMenu}>PRODUCT</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='/#/blog' onClick={closeMenu}>OUR MISSION</a>
                                </li>
                                <li className='nav-item'>
                                    <div onClick={closeMenu}>FOR BUSINESS</div>
                                    <div className={styles.dropDown}>
                                        <div
                                            ref = {businessRef}
                                            onClick = {() => setOpen(!open)}>
                                            FOR BUSINESS

                                            {!open ? (
                                                <AiOutlineDown className={styles.arrowDown} />
                                            ) : (
                                                <AiOutlineUp className={styles.arrowDown} />
                                            )}

                                        </div>
                                        {open &&
                                            <div ref={menuRef} className={styles.dropDownBtn}>
                                                <ul>
                                                    {lists.map((item) => (
                                                        <li onClick = {() =>setOpen(true)} >{item.title}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        }

                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <a href='/#/contact' onClick={closeMenu}>BLOG</a>
                                </li>
                                <li className='nav-item'>
                                    <button className={styles.mobileBtn}>How it works</button>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;



//         <div className={color ? 'header header-bg' : 'header'}>
//                 <div className='headerBox'>
//                     <div className='right'>
//                         <div className='rightImg'>
//                             <img src="./header_logo.png" alt="Logo"/>
//
//                         </div>
//                         <div className='headerTitle'>
//                             <span>
//                             <span className='headerTitleItem'>
//                                 offerwall
//                             <br />
//                             </span>
//                             <span className='headerTitleItem2'>
//                                 monetization
//                             </span>
//                             </span>{" "}
//                         </div>
//
//                         <nav className='topMenu'>
//                             <a className='topMenuItem' href="/">Home</a>
//                             {/*<a className={styles.topMenuItem}>How it Works</a>*/}
//                             <a className='topMenuItem' href="/#/blog">Blog</a>
//                             <a className='topMenuItem'>About Us</a>
//                         </nav>
//                     </div>
//
//                     <div className='contact'>
//                         <a href="/#/contact">
//                         <div className='contactButton'>Request Contact</div>
//                         </a>
//                         <div className='hamburger' onClick={handleClick}>
//                             {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
//                                 : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
//
//                         </div>
//                         <ul className={click ? "nav-menu active" : "nav-menu"}>
//                             <li className='nav-item'>
//                                 <a href='/' onClick={closeMenu}>Home</a>
//                             </li>
//                             <li className='nav-item'>
//                                 <a href='/#/blog' onClick={closeMenu}>Blog</a>
//                             </li>
//                             <li className='nav-item'>
//                                 <a href='#about' onClick={closeMenu}>About</a>
//                             </li>
//                             <li className='nav-item'>
//                                 <a href='/#/contact' onClick={closeMenu}>Contact Us</a>
//                             </li>
//                         </ul>
//                         </div>
//
//                 </div>
//         </div>
//
//                 {/* Temporary solution for background opacity */}
//                 <ul className={click ? "nav-menu active" : "nav-menu"}>
//                 </ul>
//
