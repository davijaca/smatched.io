import React from 'react';
import styles from './Website.module.css';

const Game = () => {
  return (
    <div className={styles.gameContainer}>
      <div className={styles.firstGameContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mainFirst}>
            <div className={styles.rightMain}>
              <h1 className={styles.text}>WEBSITE</h1>
              <h2 className={styles.text2}>
                your game <br /> monetization <br />
                model.
              </h2>
              <div className={styles.parag}>
                <div className={styles.innerParag}>
                  Give players more choice when it comes to monetization. While
                  gaming payment gateways are a necessary evil for many gaming
                  companies, many gamers are not willing to pay for games
                  upfront.
                </div>
              </div>
              <div className={styles.buttonText}>
                <div className={styles.buttonText1}>BOOK A DEMO</div>
              </div>
              {/*<div className={styles.bottomHero}>*/}
              {/*    <h1 className={styles.bottomHero1}>+50%</h1>*/}
              {/*    <h2>Sales increase*/}
              {/*    <br />*/}
              {/*    through existing users</h2>*/}
              {/*    <h1 className={styles.bottomHero2}>1000+</h1>*/}
              {/*    <h2>New*/}
              {/*    <br />*/}
              {/*    subscriptions</h2>*/}
              {/*</div>*/}
            </div>
            <div className={styles.leftMain}>
              <div className={styles.leftImgInfo}>
                <img
                  className={styles.gameLeftImg}
                  src='./gameHeroImage.png'
                  alt='An iPhone with an offerwall'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobileFirstGameContainer}>
        <div className={styles.topFirst}>
          <div>
            <div className={styles.mobileTopFirstBg}>
              <div className={styles.mainFirstMobile}>
                <div className={styles.leftMainMobile}>
                  <div className={styles.leftImgInfoMobile}>
                    <img
                      className={styles.leftImgMobile}
                      src='./heroImage.png'
                      alt='An iPhone with an offerwall'
                    />
                  </div>
                </div>
                <div className={styles.rightMainMobile}>
                  <h1 className={styles.textMobile}>
                    <b>Boost</b>
                    <br />
                    Monetization.
                  </h1>
                  <h2 className={styles.text2Mobile}>Retain Users.</h2>
                  <div className={styles.paragMobile}>
                    <div className={styles.innerParagMobile}>
                      {' '}
                      Metered paywalls have an average conversion rate of just
                      0.36%. Smatched builds customized ‘earn to play’
                      offerwalls that boost monetization on your mobile app or
                      website and helps you retain users by offering more
                      choice.
                    </div>
                  </div>
                  <div className={styles.bottomHeroMobile}>
                    <div className={styles.bottomHeroRightMobile}>
                      <h1 className={styles.bottomHero1Mobile}>+50%</h1>
                      <h2>
                        Sales increase
                        <br />
                        through existing users
                      </h2>
                    </div>
                    <div className={styles.bottomHeroLeftMobile}>
                      <h1 className={styles.bottomHero2Mobile}>1000+</h1>
                      <h2>New subscriptions</h2>
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

      <div className={styles.secondGameContainer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: '100px'
          }}
        >
          <div className={styles.secondGameContainerBox1}>
            <div className={styles.levelUp}>
              <div className={styles.secondLeft}>
                Level up your in-
                <br />
                game monetization <br /> strategy{' '}
              </div>
            </div>

            <div className={styles.secondRight}>
              <div className={styles.innerAnOfferwall}>
                <div className={styles.anOfferwallParag}>
                  <div>
                    The gaming industry is currently facing several challenges
                  </div>
                  <div>
                    when it comes to monetization. One of the main issues is the
                  </div>
                  <div className={styles.lowBoxInfo}>
                    <div className={styles.lowPeople}>low % of people </div>
                    <div> who are willing to pay to play games,</div>
                  </div>
                  <div>
                    especially given the abundance of free options that are{' '}
                  </div>
                  <div>available.</div>
                  <br />
                  <div>
                    In addition to this, there are many existing game
                    monetization models that often negatively impact the user
                    experience.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.secondGameContainerBox2}>
            <img
              src='./secondHomeImage.png'
              alt='Game monetization'
            />
          </div>
        </div>
      </div>

      {/*Second Game mobile responsiveness*/}
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

      <div className={styles.thirdGameContainer}>
        <div className={styles.thirdGameContainerBox}>
          <div className={styles.thirdSectionLeft}>
            <img
              src='./smartPhone.png'
              alt='man-using smart phone'
            />
          </div>

          <div className={styles.thirdSectionRight}>
            <div className={styles.innerThirdSectionRight}>
              <div className={styles.innerThirdAddWalls}>
                Are addwalls the answer?
              </div>
              <div className={styles.innerThirdInGame}>
                <div className={styles.inTimeGame}>
                  <div>One major issue with existing in-game monetization </div>
                  <div>
                    models such as banner and video ads is that they often{' '}
                  </div>
                  <div className={styles.majorModels}>
                    <div className={styles.interrupt}>
                      interrupt the user experience
                    </div>
                    <div>and can negatively impact</div>
                  </div>
                  <div>gameplay. </div>
                  <br />
                  <div className={styles.surveyMobile}>
                    <div>According to a survey by AdColony, </div>
                    <div className={styles.interrupt}>70% of mobile </div>
                  </div>
                  <div className={styles.surveyMobile}>
                    <div className={styles.interrupt}>gamers</div>
                    <div>said that they would rather pay for a game</div>
                  </div>
                  <div className={styles.upfrontDeals}>
                    <div>upfront than deal with ads, while</div>
                    <div className={styles.interrupt}>64%</div>
                    <div>said that they had</div>
                  </div>
                  <div> stopped playing a game because of ads.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Third Game mobile Responsiveness*/}
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

      <div className={styles.fourthGameContainer}>
        <div className={styles.SubFourthGameContainer}>
          <div className={styles.fourthGameBox1}>
            <div className={styles.growRevenue}>
              Grow your revenue. Monetize your game <br /> or app.
            </div>
            <div className={styles.uniqueOffers}>
              Smatched offers a unique solution to the monetization <br />{' '}
              challenges faced by the gaming industry.
            </div>
          </div>

          <div className={styles.fourthGameBox2}>
            <div className={styles.fourthBox2Container}>
              <div className={styles.fourthBox2Container1}>
                <div className={styles.innerFourthBox1}>
                  <img
                    className={styles.like}
                    src='/likeVector.png'
                    alt='Like button'
                  />
                  <div className={styles.verticalLike}>
                    <img
                      className={styles.vertical}
                      src='/verticalLikeVector.png'
                      alt='Like button'
                    />
                  </div>
                </div>
                <div className={styles.innerFourthBox2}>
                  <div className={styles.innerFourthBox2details1}>
                    Add an offerwall to current subscription models of your
                    users.
                  </div>
                  <div className={styles.innerFourthBox2details2}>
                    Players earn rewards and virtual currency by engaging with
                    paid surveys and other offers.
                  </div>
                  <div className={styles.innerFourthBox2details3Players}>
                    <div>
                      Players have more choice and flexibility for paying.{' '}
                    </div>
                    <div className={styles.increasingRevenue}>
                      You are increasing your revenue.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.fourthBox2Container2}>
                <div className={styles.innerFourthBox1}>
                  <img
                    className={styles.disLike}
                    src='/dislikeVector.png'
                    alt='dislike button'
                  />
                  <div className={styles.verticalLike}>
                    <img
                      className={styles.vertical}
                      src='/verticalDislikeVector.png'
                      alt='Like button'
                    />
                  </div>
                </div>
                <div className={styles.innerFourthBox2}>
                  <div className={styles.innerFourthBox2details1}>
                    You are relying solely on subscriptions or intrusive ads.
                  </div>
                  <div className={styles.innerFourthBox2details2}>
                    Some players are unable to pay for your subscription, some
                    of them are irritating by ads in it.
                  </div>
                  <div className={styles.innerFourthBox2details3}>
                    Players have not flexibility for paying. You are losing your
                    existing users and revenue.
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
      <div className={styles.fifthGameContainer}>
        <div className={styles.fifthGameBackground}>
          <div className={styles.fifthGameLeft}>
            <img src='/MacBookPro17.png' />
          </div>
          <div className={styles.fifthGameRight}>
            <div className={styles.innerFifthGameRight}>
              <div className={styles.fifthGameRightModel}>
                Enhance your web or mobile Game Business Model
              </div>
              <div className={styles.increaseSubscription}>
                <div className={styles.smatchInreaseOnline}>
                  <div>Smatched has been shown to</div>
                  <div className={styles.increaseRate}>
                    increase subscription rates
                  </div>
                  <div>in the online</div>
                </div>
                <div className={styles.industryNews}>
                  <div>news industry</div>
                  <div className={styles.increaseRate}>by 3x,</div>
                  <div>indicating the potential for significant growth</div>
                </div>
                <div>
                  and revenue generation in the gaming industry as well.
                </div>
                <br />
                <div>
                  The gaming industry is facing significant challenges when it
                  comes to monetization. Smatched’s offerwall provides a
                  promising solution to this challenge and one that is likely to
                  become increasingly important as the gaming industry continues
                  to evolve and grow.
                </div>
              </div>
              <div className={styles.buttonTextDemo}>
                <div className={styles.buttonTextDemo1}>BOOK A DEMO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
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
 */}

      {/*MOBILE FIFTH HOME CONTAINER*/}
      {/* 
            div className={styles.mobileFifthHomeContainer}>
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
 */}

      {/*MOBILE SIXTH HOME CONTAINER*/}
      {/*             
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
 */}

      {/*MOBILE SEVENTH HOME CONTAINER*/}
      {/* 
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
*/}
    </div>
  );
};

export default Game;
