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
    const mobileBusinessRef = useRef();

    const [click, setClick] = useState(false)
    const [color, setColor] = useState(false)

    const handleClick = () => setClick(!click)

    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== businessRef.current && e.target !== mobileBusinessRef.current) {
            setOpen(false);
        }
    });

    const closeMenu = () => setClick(false)

    return (
        <div className={styles.header}>
            <div className={styles.mainBox}>
                <div className={styles.headerBox}>
                    <div className={styles.right}>

                        <div className={styles.logo}>
                            <img src="/Horizontal_container.png" alt='logo'/>
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
                            <div className={styles.topMenuItem}>BLOG</div>
                            <div className={styles.howItWorks}>
                                <button className={styles.btn}>How it works</button>
                            </div>
                        </div>

                    </div>


                    <div className={styles.hamburger}
                        onClick={handleClick}
                    >
                        {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                            : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                    </div>
{/* 
                        <div className={styles.navMenu}>
                            <ul className={click ? "nav-menu active" : "nav-menu"}>
                                <li className={styles["nav-item"]}>
                                    <a href='/' onClick={closeMenu}>PRODUCT</a>
                                </li>
                                <li className={styles["nav-item"]}>
                                    <a href='/#/blog' onClick={closeMenu}>OUR MISSION</a>
                                </li>
                                <li className={styles["nav-item"]}>
                                    <div onClick={closeMenu}>FOR BUSINESS</div>
                                    <div className={styles.dropDown}>
                                        <div
                                            ref = {mobileBusinessRef}
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
                                <li className={styles["nav-item"]}>
                                    <a href='/#/contact' onClick={closeMenu}>BLOG</a>
                                </li>
                                <li className={styles["nav-item"]}>
                                    <button className={styles.mobileBtn}>How it works</button>
                                </li>
                            </ul>
                        </div>
 */}

                    </div>
                </div>
            
         </div>
    )
}

export default Header;



