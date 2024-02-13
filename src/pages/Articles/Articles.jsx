import React from "react";
import styles from "./Articles.module.css";




const Blog = ({ ...props }) => {
  return (
    <div className={styles.homeContainer}>

        {/* First Home */}

        <div className={styles.firstHomeContainer}>

            <div className={styles.topFirst}>
                <div className={styles.mainFirst}>
                    <div className={styles.thirdSectionLeft}>
                        <div className={styles.imageThirdHomeContainer}>
                            <div className={styles.thirdSectionLeftBG}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* First Home mobile responsiveness */}

        <div className={styles.mobileFirstHomeContainer}>
        <div className={styles.topFirst}>
                <div>
                    <div className={styles.mobileTopFirstBg}>
                        <div className={styles.mainFirstMobile}>
                        <div className={styles.leftMainMobile}>
                            <div className={styles.leftImgInfoMobile}>
                                <img className={styles.leftImgMobile} src="./heroImage.png" alt='An iPhone with an offerwall'/>
                            </div>
                        </div>
                        <div className={styles.rightMainMobile}>
                            <h1 className={styles.textMobile}>
                                <b>Boost</b>
                                <br />
                                Monetization.
                            </h1>
                            <h2 className={styles.text2Mobile}>
                                Retain Users.
                            </h2>
                            <div className={styles.paragMobile}>
                                <div className={styles.innerParagMobile}> Metered paywalls have an average 
                                conversion rate of just 0.36%. Smatched builds customized
                                 ‘earn to play’ offerwalls that boost monetization on your 
                                 mobile app or website and helps you retain users by offering more choice.
                                </div>
                            </div>
                            <div className={styles.bottomHeroMobile}>
                                <div className={styles.bottomHeroRightMobile}>
                                    <h1 className={styles.bottomHero1Mobile}>+50%</h1>
                                    <h2>Sales increase
                                    <br />
                                    through existing users</h2>
                                </div>
                                <div className={styles.bottomHeroLeftMobile}>
                                    <h1 className={styles.bottomHero2Mobile}>1000+</h1>
                                    <h2>New
                                    subscriptions</h2>
                                </div>
                            </div>
                            <div className={styles.buttonTextMobile}>
                                <div className={styles.buttonText1Mobile}>BOOK A DEMO</div>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
)
};


export default Blog;