import React from "react";
import styles from "./Home.module.css";


const Home = () => {

    

    
    return (
        <div className={styles.homeContainer}>
            <div className={styles.firstHomeContainer}>

                <div className={styles.topFirst}>
                    <div className={styles.mainFirst}>
                    <div className={styles.rightMain}>
                        <h1 className={styles.text}>
                            Boost
                            <br />
                            Monetization.
                        </h1>
                        <h2 className={styles.text2}>
                            Retain Users.
                        </h2>
                        <div className={styles.parag}>
                            <div className={styles.innerParag}> Metered paywalls have an average 
                            conversion rate of just 0.36%. Smatched builds customized
                                ‘earn to play’ offerwalls that boost monetization on your 
                                mobile app or website and helps you retain users by offering more choice.
                            </div>
                        </div>
                        <div className={styles.buttonText}>
                            <div className={styles.buttonText1}>BOOK A DEMO</div>
                        </div>
                        <div className={styles.bottomHero}>
                            <h1 className={styles.bottomHero1}>+50%</h1>
                            <h2>Sales increase
                            <br />
                            through existing users</h2>
                            <h1 className={styles.bottomHero2}>1000+</h1>
                            <h2>New
                            <br />
                            subscriptions</h2>
                        </div>
                    </div>
                    <div className={styles.leftMain}>
                        <div className={styles.leftImgInfo}>
                            <img className={styles.leftImg} src="./heroImage.png" alt='An iPhone with an offerwall'/>
                        </div>
                    </div>
                    </div>
                </div>

            </div>

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

            <div className={styles.secondHomeContainer}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", marginTop: '100px' }}>
                    <div className= {styles.secondHomeContainerBox1}>
                        <div className={styles.whatOffer}>
                            <div className={styles.secondLeft}>Monetize provides 
                            an alternative Subscription Model </div>
                        </div>

                        <div className={styles.secondRight}>
                            <div className={styles.innerAnOfferwall}>
                                <div className={styles.anOfferwallParag}>
                                Paywalls are a great revenue option for many businesses but unfortunately, making users pay means your revenue potential is capped. Businesses that offer more than one monetization model retain <b>50% more users.</b>
                                <br/>
                                <br/>
                                What if your users could earn their way past a paywall without having to open their wallet?
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div style={{height: "200px", display: "flex", flexDirection: "row", marginTop: '100px'}}>
                    <div className= {styles.secondHomeContainerBox3}>
                            <div className={styles.firstImg}/>
                            <div className={styles.secondImg}/>
                            <div className={styles.thirdImg}/>
                            <div className={styles.fourthImg}/>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start"}}>
                    <div className= {styles.secondHomeContainerBox4}>
                            <div className={styles.firstImgText}>Optimized Offerwall </div>
                            <div className={styles.secondImgText}>Users earn rewards </div>
                            <div className={styles.thirdImgText}>Users can use rewards as in-app currency</div>
                            <div className={styles.fourthImgText}>You increase revenue & retention</div>
                    </div>
                </div>

                <div className= {styles.secondHomeContainerBox2}>
                    <img className= {styles.image1} src="./section2img.svg" alt='A picture of a phone'/>
                </div>
            </div>


            {/*Second Home mobile responsiveness*/}
{/* 
            <div className={styles.mobileSecondHomeContainer}>
                <div className={styles.innerMobileSection3}>
                    <div className={styles.mobileWhat}>
                        <div>What Is an </div>&nbsp;
                        <div className={styles.mobileWofferwall}>Offerwall?</div>
                    </div>
                    <div className={styles.mobilePImage}>
                        <img src="./mobileP.png" alt='A picture of a phone'/>
                    </div>
                    <div className={styles.mobileInaPPAdd}>An Offerwall is a type of in-app advertising unit that allows users to earn rewards by completing certain actions like downloading apps, signing up for newsletters, or conducting surveys. The user earns in-game currency and the gaming publisher earns revenue. </div>
                </div>
            </div>
 */}

            <div className={styles.thirdHomeContainer}>
                <div className={styles.thirdHomeContainerBox}>
                    <div className={styles.thirdSectionLeft}>
                        <div className={styles.imageThirdHomeContainer}>
                            <div className={styles.thirdSectionLeftBG}>
                                <div className={styles.thirdHomeImage}>
                                    <img src="./thirdSectionImg.png" alt='A laptop and a phone with offerwall rewards'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.thirdSectionRight}>
                        <>
                            <div className={styles.innerThirdSectionRight}>
                                <div className={styles.thirdSectionRightH1}>Why partner<br/>with Monetize?</div>
                            </div>

                            <div className={styles.thirdSectionRightH2}>
                                <ul className={styles.thirdSectionRightList}>
                                    <li>Open up another revenue stream</li>
                                    <li>Our business model incentivizes us to provide better experiences for your customers</li>
                                    <li>Easy set-up: no set-up costs or integration work</li>
                                    <li>The Smatched web app is independent, GDPR-compliant and completely secure</li>
                                </ul>
                            </div>

                            <div className={styles.buttonTextGold}>
                                <div className={styles.buttonText1Gold}>BOOK A DEMO</div>
                            </div>
                        </>
                    </div>
                </div>

            </div>


                {/*Third Home mobile Responsiveness*/}
{/* 
            <div className={styles.mobileThirdHomeContainer}>
                    <div className={styles.mobileTh1} style={{ backgroundImage: "url(./Th1Mobile.png)"}}>
                        <div className={styles.innerMobileTh1}>
                            <div className={styles.mobileModernProblem}>
                                <div className={styles.mobileModern}>
                                    <div className={styles.innerMobileProb}>The Problem</div>&nbsp;
                                    <div>With Modern </div>
                                </div>
                                <div>Mobile Game Monetization</div>
                            </div>
                            <div className={styles.mobileGameProblem}>
                                Many game developers struggle with understanding the best way to monetize a mobile game, resorting to flooding their users with ads that interrupt the user experience and cause their users to write negative reviews.                            </div>
                        </div>
                    </div>
            </div>
    */}
            

            <div className={styles.fourthHomeContainer}>
                <div className={styles.SubFourthHomeContainer}>
                    <div className={styles.fourthHomeBox1}>
                        <div>How it works?</div>
                    </div>

                    <div className={styles.fourthHomeBox2}>
                        <div className={styles.fourthBox2Container}>
                            <div className={styles.fourth13}>
                                <div className={styles.fourth13One}>
                                    <div className={styles.innerOne}>
                                        <img className={styles.stepOneImg} src="./one.svg" alt="A picture of a number one" />
                                        <h1>Step 1</h1>
                                        <div className={styles.fourth13Integration}>
                                        We integrate via API into your mobile app or website to integrate seamlessly with your existing monetization model.
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.fourth13Two}>
                                    <div className={styles.innerThree}>
                                        <img className={styles.stepThreeImg} src="./three.svg" alt="A picture of a number three" />
                                        <h1>Step 3</h1>
                                        <div className={styles.fourth13Integration}>
                                        Users are funneled to Smatched as an option after not converting and are then given the opportunity to earn their reward through an offerwall – which includes multiple earning options.                                    </div>
                                    </div>
                                </div>
                            </div>



                            <div className={styles.fourth24}>
                                <div className={styles.fourth24One}>
                                    <div className={styles.innerTwo}>
                                        <img className={styles.stepTwoImg} src="./two.svg" alt="A picture of a number two" />
                                        <h1>Step 2</h1>
                                        <div className={styles.fourth13Integration}>
                                        We work with you to optimize and maximize conversions to improve the overall user experience – customization increases conversions by an average of 3x</div>
                                    </div>
                                </div>
                                <div className={styles.fourth24Two}>
                                    <div className={styles.innerFour}>
                                        <img className={styles.stepFourImg}src="./four.svg" alt="A picture of a number four" />
                                        <h1>Step 4</h1>
                                        <div className={styles.fourth13Integration}>
                                        The user then completes the action to earn you more revenue and the added options increases returning users by 100% on average. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*MOBILE FOURTH HOME CONTAINER*/}
{/* 
            <div className={styles.mobileFourthHomeContainer}>
                 <div className={styles.mobileSubFourthHomeContainer}>

                    <div className={styles.mobileFourthHomeBox1}>
                        <div className={styles.mobileSubFourthHomeBox1}>
                            <div>Why</div>&nbsp;
                            <div className={styles.mobileInnerFourthHomeBox1}>Mobile </div> &nbsp;
                            <div> Offerwall </div>
                        </div><div className={styles.mobileSubFourthHomeBox1}> Monetization? </div>
                    </div>

                    <div className={styles.mobileFourthHomeBox2}>
                        <div className={styles.mobileFourthBox2Container}>

                            <div className={styles.mobileFourthImg}>
                                <img className={styles.mobileFourthImg1} src="./phone01.png" alt="An iPhone gaining rewards through offerwalls"/>
                            </div>

                            <div className={styles.mobileFourth13}>
                                <div className={styles.mobileFourth13One}>
                                    <div className={styles.mobileInnerOne}>
                                        <img src="./one.png" alt="A picture of a number one" />
                                        <div className={styles.mobileFourth13Integration}>
                                            Offerwall integration is seamless with existing ad monetization or paywall structures
                                        </div>
                                    </div>
                                </div>

                                
                                <div className={styles.mobileFourth24One}>
                                    <div className={styles.mobileInnerOne}>
                                        <img src="./two.png" alt="A picture of a number two"/>
                                        <div className={styles.mobileFourth13Integration}>
                                            Offerwalls have a proven track record of increasing
                                            customer lifetime value and monthly recurring revenue                                    </div>
                                        </div>
                                    </div>
                                    <div className={styles.mobileFourth13Two}>
                                    <div className={styles.mobileInnerOne}>
                                        <img src="./three.png" alt="A picture of a number three"/>
                                        <div className={styles.mobileFourth13Integration}>
                                            At the point where users decline to pay
                                            for premium content in your online shop you
                                            can redirect them to an offerwall giving
                                            them a different way to make the same payment                                    </div>
                                    </div>
                                </div>

                                <div className={styles.mobileFourth24Two}>
                                    <div className={styles.mobileInnerTwoSecond}>
                                        <img src="./four.png" alt="A picture of a number four"/>
                                        <div className={styles.mobileFourth13Integration}>
                                            There are offerwall solution providers
                                            <div className={styles.mobileLikeSmatchedWork}>
                                                <div>like</div>&nbsp;
                                                <div className={styles.mobileFourth13Smatched}>Smatched</div>&nbsp;
                                                <div>that work with you to </div>
                                            </div>
                                            customise the service for a seamless integration
                                            within your app to maximize the profit from your offerwall monetization                                   </div>
                                    </div>
                                </div>
                                <div className={styles.mobileFourth24}>

                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    */}
            <div className={styles.fifthHomeContainer}>
                <div className={styles.fifthHomeBackground}>

                    <div className={styles.innerFifthHomeContainer1}>

                        <div className={styles.innerFifthLeft}>
                        </div>

                        <div className={styles.innerFifthRight}>
                            <div className={styles.innerFifthMainBox1}>
                                <div className={styles.innerFifthBox1}>
                                    <div>Revenue Sharing Model</div>
                                </div>
                            </div>

                            <div className={styles.innerFifthMainBox2}>
                            We have a profit sharing model so there is no monthly cost. 
                            This means there is no risk on your end because make our money<br/> the same way you do.<br/><br/>
                            We are constantly working with our customers to optimize the user experience of their
                            users and this model has proven very successful for increasing monetization and retention.
                            </div>
                        </div>

                    </div>

                    <div className={styles.bottomBG}></div>

                </div>

            </div>
    
                {/*MOBILE FIFTH HOME CONTAINER*/}   

                <div className={styles.mobileFifthHomeContainer}>
                    <div className={styles.mobileFifthHomeBackground}>
                        <div className={styles.mobileInnerFifthHomeContainer}>
                            <div className={styles.mobileInnerFifthTop}>
                            <div className={styles.mobileIcons}>
                                <img
                                src='./fifthIcon3.svg'
                                alt='grafic icon'
                                />
                                <img
                                src='./fifthIcon2.svg'
                                alt='eye icon'
                                />
                                <img
                                src='./fifthIcon3.svg'
                                alt='grafic icon'
                                />
                                <img
                                src='./fifthIcon1.svg'
                                alt='grafic icon'
                                />
                            </div>
                            <div className={styles.mobileBenefits}>
                                <p>Increase new visitors</p>
                                <p>1,355,900 Views</p>
                                <p>Growth organic customers</p>
                                <p>Increase your revenue</p>
                            </div>
                            </div>

                            <div className={styles.mobileInnerFifthBottom}>
                            <div className={styles.mobileInnerFifthTitle}>
                                Revenue Sharing Model
                            </div>
                            <div className={styles.mobileInnerFifthText}>
                                We have a profit sharing model so there is no monthly cost. This
                                means there is no risk on your end because make our money the
                                same way you do.
                                <br />
                                <br />
                                We are constantly working with our customers to optimize the
                                user experience of their users and this model has proven very
                                successful for increasing monetization and retention.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>


    )}

export default Home;

