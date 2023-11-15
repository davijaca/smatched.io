import React from "react";
import styles from "./Home.module.css";


const Home = () => {

    

    
    return (
        <div className={styles.homeContainer}>
            <div className={styles.firstHomeContainer}>

                <div className={styles.topFirst}>
                    <div style={{ height: "982px", display: "flex", justifyContent: "center"}}>
                            <div className={styles.gradientContainer}>

                                
                                <div className={styles.gradientContainerRight}></div>
                                <div className={styles.gradientContainerLeft}>
                                <svg class={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 30 150 50" preserveAspectRatio="true" shape-rendering="auto">
                                <defs>
                                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v105h-352z" />
                                    
                                </defs>
                                <g class={styles.parallax}>
                                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(58, 108, 222, 0.3)" />
                                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(100, 131, 201, 0.2)" />
                                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(46, 67, 141, 0.1)" />
                                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(77, 113, 184, 0.1)" />
                                </g>
                            </svg>
                                </div>

                            </div>

                            <div className={styles.mainFirst}>
                            <div className={styles.rightMain}>
                                <h1 className={styles.text}>
                                Offerwalls:
                                    <br/>
                                    A Valuable Tool for
                                    <br />
                                    <h2 className={styles.M}>Monetizing</h2>
                                    Mobile
                                    Games
                                </h1>
                                <div className={styles.parag}>
                                    <div className={styles.innerParag}> Offerwalls are a great monetization
                                    tool primarily because they help gaming
                                    publishers and developers reach a wider
                                        audience which in turn…
                                    </div>
                                </div>
                                <div className={styles.buttonText}>
                                    <div className={styles.buttonText1}>Increases retention</div>
                                    <div className={styles.buttonText2}>Generates additional revenue</div>
                                </div>
                                <div className={styles.downClickImg}>
                                    <img src="./downClick.png" alt='A down arrow'
                                    />
                                </div>
                            </div>
                            <div className={styles.leftMain}>
                                <div className={styles.leftImgInfo}>
                                    <img className={styles.leftImg} src="./iPhone_14%20_Pro.png" alt='An iPhone with an offerwall'/>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>

            </div>

            <div className={styles.mobileFirstHomeContainer}>
                {/* <div className={styles.hrLine}>
                    <hr />
                </div> */}
                <div className={styles.mobileTopFirst}>
                    <div style={{ height: "982px", display: "flex", justifyContent: "center"}}>

                            <div className={styles.mainFirstMobile}>

                            <div className={styles.rightMainMobile}>
                                <h1 className={styles.textMobile}>
                                    Offerwalls:
                                    <br/>
                                    A Valuable Tool for
                                    <br />
                                    <h2 className={styles.M}>Monetizing</h2>
                                    Mobile
                                    Games
                                </h1>

                                <div className={styles.leftMainMobile}>
                                    <div className={styles.leftImgInfoMobile}>
                                        <img className={styles.leftImgMobile} src="./iPhone_14%20_Pro.png" alt='An iPhone with an offerwall'/>
                                    </div>
                                </div>
                            
                                <div className={styles.paragMobile}>
                                    <div className={styles.innerParagMobile}> Offerwalls are a great monetization
                                    tool primarily because they help gaming
                                    publishers and developers reach a wider
                                        audience which in turn…
                                    </div>
                                </div>
                                <div className={styles.buttonTextMobile}>
                                    <div className={styles.buttonText1Mobile}>Increases retention</div>
                                    <div className={styles.buttonText2Mobile}>Generates additional revenue</div>
                                </div>
                                <div className={styles.downClickImgMobile}>
                                    <img src="./downClick.png" alt='A down arrow'
                                    />
                                </div>
                            </div>

                            </div>
                    </div>
                </div>

                {/*<ScrollDivider ref={ref} className={styles.scrollDivider } />*/}


            </div>

            <div className={styles.belowFirst}>
                <div className={styles.innerBelowFirst1}>
                    <div className={styles.innerBelowBox1}>
                        <div className={styles.percentage}>50 % </div>
                        <div className={styles.retention}>retention increase</div>
                        <div className={styles.study}>A study by App Annie found that adding Offerwalls to your existing monetization strategy increases retention by 50% - Why? The answer is…more choice for the user. </div>
                    </div>
                </div>

                <div className={styles.innerBelowFirst2}>
                    <div className={styles.innerBelowBox2}>
                        <div className={styles.blog}>Blog</div>
                        <div className={styles.explore}>Explore our blog for expert tips, success stories, and industry updates on maximizing your earnings through offerwall monetisation.</div>
                        <div className={styles.readMore}>
                            <button>
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.secondHomeContainer}>
                    <div className= {styles.secondHomeContainerBox1}>
                        <div className={styles.whatOffer}>
                            <div className={styles.what}>What Is an </div>&nbsp;
                            <div className={styles.offerW}> Offerwall?</div>
                        </div>

                        <div className={styles.anOfferwall}>
                            <div className={styles.innerAnOfferwall}>
                                <div className={styles.anOfferwallParag}>
                                    An Offerwall is a type of in-app advertising
                                    unit that allows users to earn rewards by completing
                                    certain actions like downloading apps, signing up for
                                    newsletters, or conducting surveys. The user earns
                                    in-game currency and the gaming publisher earns revenue.
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className= {styles.secondHomeContainerBox2}>
                        <img className= {styles.image1} src="./mobileP.png" alt='A picture of a phone'/>
                        <img className= {styles.image2} src="./mobileP_Hover.png" alt='A picture of a phone'/>
                    </div>
            </div>


            {/*Second Home mobile responsiveness*/}

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


            <div className={styles.thirdHomeContainer}>
                <div className={styles.imageThirdHomeContainer} style={{ backgroundImage: "url(./Th1.png)", }}>
                    <div className={styles.thirdHomeContainerBox}>
                        <div className={styles.mobileProblem}>
                            <div className={styles.innerMobileProblem}>
                                <div className={styles.mobileProblem1}>The Problem </div>&nbsp;&nbsp;
                                <div className={styles.with}>With</div>
                            </div>
                            <div className={styles.mobileProblem2}> Modern Mobile Game Monetization</div>
                        </div>

                        <div className={styles.gameDeveloper}>
                            <div className={styles.gameDeveloper1}>Many game developers struggle with understanding
                            the best way to monetize a mobile game, resorting
                            to flooding their users with ads that interrupt the
                                user experience and cause their users to write negative reviews.
                            </div>
                        </div>

                    </div>
                </div>

            </div>


                {/*Third Home mobile Responsiveness*/}

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

            <div className={styles.fourthHomeContainer}>
                <div className={styles.SubFourthHomeContainer}>
                    <div className={styles.fourthHomeBox1}>
                        <div>Why</div>&nbsp;
                        <div className={styles.innerFourthHomeBox1}>Mobile </div> &nbsp;
                        <div>Offerwall Monetization? </div>
                    </div>

                    <div className={styles.fourthHomeBox2}>
                        <div className={styles.fourthBox2Container}>
                            <div className={styles.fourth13}>
                                <div className={styles.fourth13One}>
                                    <div className={styles.innerOne}>
                                        <img src="./one.png" alt="A picture of a number one" />
                                        <div className={styles.fourth13Integration}>
                                            Offerwall integration is seamless with existing ad monetization or paywall structures
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.fourth13Two}>
                                    <div className={styles.innerOne}>
                                        <img src="./three.png" alt="A picture of a number three" />
                                        <div className={styles.fourth13Integration}>
                                            At the point where users decline to pay
                                            for premium content in your online shop you
                                            can redirect them to an offerwall giving
                                            them a different way to make the same payment                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.fourthImg}>
                                <img className={styles.fourthImg1} src="./phone01.png" alt="An iPhone gaining rewards through offerwalls"/>
                                <img className={styles.fourthImg2} src="./phone02.png" alt="An iPhone gaining rewards through offerwalls"/>
                            </div>

                            <div className={styles.fourth24}>
                                <div className={styles.fourth24One}>
                                    <div className={styles.innerOne}>
                                        <img src="./two.png" alt="A picture of a number two" />
                                        <div className={styles.fourth13Integration}>
                                            Offerwalls have a proven track record of increasing
                                            customer lifetime value and monthly recurring revenue                                    </div>
                                    </div>
                                </div>
                                <div className={styles.fourth24Two}>
                                    <div className={styles.innerTwoSecond}>
                                        <img src="./four.png" alt="A picture of a number four" />
                                        <div className={styles.fourth13Integration}>
                                            There are offerwall solution providers
                                            <div className={styles.likeSmatchedWork}>
                                                <div>like</div>&nbsp;
                                                <div className={styles.fourth13Smatched}>Smatched</div>&nbsp;
                                                <div>that work with you to </div>
                                            </div>
                                            customise the service for a seamless integration
                                            within your app to maximize the profit from your offerwall monetization                                   </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.fourthHomeBox3}>
                        <div className={styles.innerFourthHomeBox3}>
                            OK… But Do Offerwalls Work?
                        </div>
                    </div>
                </div>
            </div>


            {/*MOBILE FOURTH HOME CONTAINER*/}
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



            <div className={styles.fifthHomeContainer}>
                <div className={styles.fifthHomeBackground}>

                    <div className={styles.innerFifthHomeContainer1}>
                        <div className={styles.innerFifthMainBox1}>
                            <div className={styles.innerFifthBox1}>
                                <div>Offerwall</div>&nbsp;
                                <div className={styles.engagement}>engagement</div>
                                <div>is </div>
                            </div>
                            <div className={styles.highest}> highest among non- <br/>
                                paying users.</div>
                        </div>

                        <div className={styles.innerFifthMainBox2}>
                            The 2019 <u>Swrve Monetization Report</u> found that only 1.6% of all players
                            make an in-app purchase and 72% of these only make one.<br />
                            So what is a developer to do? Well, generally the answer is to slam your
                            users with ads. But that is what has led the industry to have churn
                            rates that average around <u>80% after 3 days.</u> That’s not great.
                        </div>

                        <div className={styles.appPurchase}>
                                <div className={styles.noInAppPurchase}>
                                    <div className={styles.appPerc}>1.6%</div>
                                    <div className={styles.makeInApp}>make in-app purchase</div>
                                </div>
                                <div className={styles.onlyMakeOnePurchase}>
                                    <div className={styles.appPerc}>72%</div>
                                    <div className={styles.makeInApp}>only make one purchase</div>
                                </div>
                        </div>
                    </div>

                </div>
            </div>


            {/*MOBILE FIFTH HOME CONTAINER*/}
            <div className={styles.mobileFifthHomeContainer}>
                <div className={styles.fifthHomeBackground}>

                    <div className={styles.innerFifthHomeContainer1}>
                        <div className={styles.innerFifthMainBox1}>
                            <div className={styles.innerFifthBox1}>
                                <div>Offerwall</div>&nbsp;
                                <div className={styles.engagement}>engagement</div>
                                <div>is </div>
                            </div>
                            <div className={styles.highest}> highest among non-
                                paying users.</div>
                        </div>

                        <div className={styles.innerFifthMainBox2}>
                            The 2019 <u>Swrve Monetization Report</u> found that only 1.6% of all players
                            make an in-app purchase and 72% of these only make one.<br />
                            So what is a developer to do? Well, generally the answer is to slam your
                            users with ads. But that is what has led the industry to have churn
                            rates that average around <u>80% after 3 days.</u> That’s not great.
                        </div>

                        <div className={styles.appPurchase}>
                            <div className={styles.noInAppPurchase}>
                                <div className={styles.appPerc}>1.6%</div>
                                <div className={styles.makeInApp}>make in-app purchase</div>
                            </div>
                            <div className={styles.onlyMakeOnePurchase}>
                                <div className={styles.appPerc}>72%</div>
                                <div className={styles.makeInApp}>only make one purchase</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/*MOBILE SIXTH HOME CONTAINER*/}
            <div className={styles.mobileSixthHomeContainer}>
                <div className={styles.sixthBox1}>
                    <div className={styles.offerwallSolves}>
                        <div>Offerwalls</div>&nbsp;
                        <div className={styles.solves}>solve </div>&nbsp;
                        <div>two key</div>
                    </div>

                    <div className={styles.problems}>problems:</div>
                </div>

                <div className={styles.sixthBox2}>
                    <div className={styles.innerSixthBox2}>
                        <div className={styles.willingUsers}>
                            <div className={styles.dollar}>
                                <img src="./dollar_sign.png"  alt="A dollar sign" />
                            </div>

                            <div className={styles.pay}>
                                Your users aren’t willing to pay to play
                            </div>
                        </div >

                        <div className={styles.hateUsers}>
                            <div className={styles.megaphone}>
                                <img src="./mega_phone.png"  alt="A megaphone" />
                            </div>

                            <div className={styles.ads}>
                                Your users hate ads and think they interrupt the user experience
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.seventhHomeContainer}>
            <div style={{ background: "url(./rect_1203.png)", width: "100vw", maxWidth: "1512px", height: "2760px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center"}}>

                        <div className={styles.seventhHomeBox1}>
                            <div className={styles.implementingSoln}>
                                <div className={styles.implementing}>Implementing </div>&nbsp;
                                <div className={styles.an}>an offerwall solution provides you </div>
                            </div>

                             <div className={styles.avenue}>
                                 an avenue to offer premium content to your users
                             </div>

                             <div className={styles.priceEngage}>
                                 <div> without making them pay the price,</div>&nbsp;
                                 <div className={styles.engage}>engaging more </div>
                             </div>

                            <div className={styles.usersDecrease}>
                                <div className={styles.users}>users</div>&nbsp;
                                <div>and decreasing churn.</div>
                            </div>
                        </div>

                        <div className={styles.seventhHomeBox2}>
                            <div className={styles.innerSeventhBoxContainer}>
                                <div className={styles.innerSeven1}>
                                    <span className={styles.innerSevenBlog}>Blog</span>
                                    <span className={styles.innerSevenArticles}>All articles</span>
                                </div>

                                <div className={styles.innerSeven2}>
                                    <div className={styles.sevenRight}>
                                        <div className={styles.topRightSeven}>
                                            <img src="./img00001.png"  alt="A hand holding a phone with many icons emerging from it" />
                                        </div>
                                        <div className={styles.belowRightSeven}>
                                            <div className={styles.innerBelowRightSeven}>
                                                <div className={styles.exploring}>
                                                    Exploring Offerwall Solutions for
                                                    Monetization and Retention: a Comparative
                                                    Analysis
                                                </div>
                                                <div className={styles.dateTime}>
                                                    <div>July 19 2023</div>
                                                    <div className={styles.imgTime}>
                                                        <img src="./Time.png"  alt="A clock"/>
                                                        <div className={styles.minRead}>8 min read</div>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className={styles.readMoreExplore}>
                                                    <div className={styles.readMoreButton}>
                                                        Read More
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                    <div className={styles.sevenLeft}>
                                        <div className={styles.topLeftSeven}>
                                            <img src="./img0002.png" alt="A lightbuld with blue and yellow background"/>
                                            <div className={styles.topLeftSevenBox1}>

                                                <div className={styles.mastering}>
                                                    Mastering Offerwall Monetisation: <br />
                                                    Strategies to Boost Your Earnings
                                                </div>

                                                <div className={styles.leftDateTime}>
                                                    <div>July 19 2023</div>
                                                    <div className={styles.leftImgTime}>
                                                        <img src="./Time.png"  alt="A clock"/>
                                                        <div className={styles.minRead}>8 min read</div>
                                                    </div>
                                                </div>

                                                <div className={styles.LeftReadMoreExplore}>
                                                    <div className={styles.readMoreButton}>
                                                        Read More
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className={styles.belowLeftSeven}>
                                            <img src="./img0003.png" alt="A feminine hand holding an iPhone"/>
                                            <div className={styles.topLeftSevenBox1}>

                                                <div className={styles.mastering}>
                                                    Behind the Scenes: How Advertisers <br />
                                                    Create Irresistible Offerwall Campaigns
                                                </div>

                                                <div className={styles.leftDateTime}>
                                                    <div>July 19 2023</div>
                                                    <div className={styles.leftImgTime}>
                                                        <img src="./Time.png"  alt="A clock"/>
                                                        <div className={styles.minRead}>8 min read</div>
                                                    </div>
                                                </div>

                                                <div className={styles.LeftReadMoreExplore}>
                                                    <div className={styles.readMoreButton}>
                                                        Read More
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.seventhHomeBox3}>
                            <div className={styles.innerSeventhHome}>
                                <div className={styles.rightSevenBox3}>
                                    <div className={styles.getInTouch}>
                                        <div> Get </div>&nbsp;
                                        <div className={styles.inTouch}>in touch</div>
                                    </div>
                                    <div className={styles.schedule}>Learn more or schedule a call for advice
                                        on how you can maximize the impact of offerwall
                                        monetization on your own mobile games. </div>
                                    <div>
                                        <div className={styles.contactImg}>
                                            <img src="./contact.png" alt="A mail icon"/>
                                        </div>
                                        <div className={styles.contactLayOut}>
                                            <div className={styles.contactUs}>
                                                contact us
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={styles.leftSevenBox3}>
                                    <div className={styles.mobile005}>
                                        <img src="./mobile005.png" alt="An iPhone with offerwall monetization written on it with two young man playing on the phones on the background"/>
                                    </div>
                                </div>
                            </div>
                        </div>


          </div>
          </div>


            {/*MOBILE SEVENTH HOME CONTAINER*/}

            <div className={styles.seventhMobileHomeContainer}>
                <div style={{ background: "url(./rect_1203mobile.png)", width: "100vw", maxWidth: "393px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", margin:"auto", backgroundRepeat: "no-repeat"}}>

                            <div className={styles.seventhHomeBox1Mobile}>
                                <div className={styles.implementingSolnMobile}>
                                    <div className={styles.implementingMobile}>Implementing </div>&nbsp;
                                    <div className={styles.anMobile}>an</div>
                                </div>

                                <div className={styles.avenueMobile}>
                                 offerwall solution provides you an avenue to offer premium content to your users without making them
                                </div>

                                <div className={styles.priceEngageMobile}>
                                pay the price,
                                    <div className={styles.engageMobile}>engaging </div>
                                </div>

                                <div className={styles.usersDecreaseMobile}>
                                    <div className={styles.usersMobile}> more users</div>
                                    <div>and decreasing</div>
                                </div>
                                <div className={styles.churnMobile}>churn.</div>
                            </div>

                            <div className={styles.seventhHomeBox2Mobile}>
                                <div className={styles.innerSeventhBoxContainerMobile}>
                                    <div className={styles.innerSeven1Mobile}>
                                        <span className={styles.innerSevenBlogMobile}>Blog</span>
                                        <span className={styles.innerSevenArticlesMobile}>All articles</span>
                                    </div>

                                    <div className={styles.innerSeven2Mobile}>
                                        <div className={styles.sevenRightMobile}>

                                            <div className={styles.topFirstSevenMobile}>
                                            <img src="./img00001.png" alt="A hand holding a phone with many icons emerging from it"/>
                                            <div className={styles.topLeftSevenBox1Mobile}>

                                                <div className={styles.exploringMobile}>
                                                    Exploring Offerwall Solutions for
                                                    Monetization and Retention: a Comparative
                                                    Analysis
                                                </div>

                                                <div className={styles.leftDateTimeMobile}>
                                                    <div>July 19 2023</div>
                                                    <div className={styles.leftImgTimeMobile}>
                                                        <img src="./Time.png"  alt="A clock"/>
                                                        <div className={styles.minReadMobile}>8 min read</div>
                                                    </div>
                                                </div>

                                                <div className={styles.LeftReadMoreExploreMobile}>
                                                    <div className={styles.readMoreButtonMobile}>
                                                        Read More
                                                    </div>
                                                </div>

                                            </div>

                                            </div>
                                            <div className={styles.topLeftSevenMobile}>
                                            <img src="./img0002.png" alt="A lightbuld with blue and yellow background"/>
                                            <div className={styles.topLeftSevenBox1Mobile}>

                                                <div className={styles.exploringMobile}>
                                                    Mastering Offerwall Monetisation: <br />
                                                    Strategies to Boost Your Earnings
                                                </div>

                                                <div className={styles.leftDateTimeMobile}>
                                                    <div>July 19 2023</div>
                                                    <div className={styles.leftImgTimeMobile}>
                                                        <img src="./Time.png"  alt="A clock"/>
                                                        <div className={styles.minReadMobile}>8 min read</div>
                                                    </div>
                                                </div>

                                                <div className={styles.LeftReadMoreExploreMobile}>
                                                    <div className={styles.readMoreButtonMobile}>
                                                        Read More
                                                    </div>
                                                </div>

                                            </div>

                                            </div>
                                            <div className={styles.belowLeftSevenMobile}>
                                                <img src="./img0003.png" alt="A feminine hand holding an iPhone"/>
                                                <div className={styles.topLeftSevenBox1Mobile}>

                                                    <div className={styles.exploringMobile}>
                                                        Behind the Scenes: How Advertisers <br />
                                                        Create Irresistible Offerwall Campaigns
                                                    </div>

                                                    <div className={styles.leftDateTimeMobile}>
                                                        <div>July 19 2023</div>
                                                        <div className={styles.leftImgTimeMobile}>
                                                            <img src="./Time.png"  alt="A clock"/>
                                                            <div className={styles.minReadMobile}>8 min read</div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.LeftReadMoreExploreMobile}>
                                                        <div className={styles.readMoreButtonMobile}>
                                                            Read More
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={styles.seventhHomeBox3Mobile}>
                                <div className={styles.innerSeventhHomeMobile}>
                                    <div className={styles.rightSevenBox3Mobile}>
                                        <div className={styles.getInTouchMobile}>
                                            <div> Get </div>&nbsp;
                                            <div className={styles.inTouchMobile}>in touch</div>
                                        </div>
                                        <div className={styles.scheduleMobile}>Learn more or schedule a call for advice
                                            on how you can maximize the impact of offerwall
                                            monetization on your own mobile games.</div>
                                        <div>
                                            <div className={styles.contactImgMobile}>
                                                <img src="./contact.png" alt="A mail icon"/>
                                            </div>
                                            <div className={styles.contactLayOutMobile}>
                                                <div className={styles.contactUsMobile}>
                                                    contact us
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                        <div className={styles.mobile005Mobile}>
                                            <img src="./mobile005.png" alt="An iPhone with offerwall monetization written on it with two young man playing on the phones on the background"/>
                                        </div>

                                </div>
                            </div>

                </div>

            </div>

            </div>


    )}

export default Home;

