import React from 'react';
import styles from './NonProfit.module.css';

const NonProfit = () => {
  return (
    <div className={styles.nonprofitContainer}>
      {/* FIRST NONPROFIT CONTAINER */}

      <div className={styles.firstNonprofitContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mainFirst}>
            <div className={styles.rightMain}>
              <h1 className={styles.text}>
                Creative Revenue
                <br />
                Streams
                <span className={styles.text2}> for</span>
              </h1>
              <h2 className={styles.text2}>Nonprofits</h2>
              <div className={styles.parag}>
                <div className={styles.innerParag}>
                  {' '}
                  The nonprofit industry is faced with the challenge of
                  converting potential supporters into paying donors. By
                  exploring creative revenue streams, you can differentiate your
                  organization and motivate people to donate in impactful ways.
                  Diversifying your donation options can significantly increase
                  engagement and donor acquisition rates.
                </div>
              </div>
              <button className={styles.buttonText}>
                <div className={styles.buttonText1}>BOOK A DEMO</div>
              </button>
            </div>
            <div className={styles.leftMain}>
              <div className={styles.leftImgInfo}>
                <img
                  className={styles.leftImg}
                  src='./nonprofitHero.svg'
                  alt='revenue image'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FIRST NONPROFIT CONTAINER */}

      <div className={styles.mobileFirstNonprofitContainer}>
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

      {/* SECOND NONPROFIT CONTAINER */}

      <div className={styles.secondNonprofitContainer}>
        <div className={styles.secondNonprofitTopContainer}>
          <div className={styles.secondNonprofitContainerBox1}>
            <div className={styles.whatOffer}>
              <div className={styles.secondLeft}>
                Motivating people to donate. Strategies that make a difference.
              </div>
            </div>

            <div className={styles.secondRight}>
              We have found that implementing alternative monetary donor
              acquisition strategies increases donor conversion by 3x.
            </div>
          </div>
        </div>

        <div className={styles.secondNonprofitBottomContainer}>
          <div className={styles.secondNonprofitContainerBox2}>
            <div className={styles.secondBottomLeft}>
              <img
                className={styles.bottomEmote}
                src='./emoteSad.svg'
                alt=''
              />
              <div className={styles.secondBottomTextContainer}>
                <span className={styles.spanBottom}>
                  One of the reasons why potential <br />
                  donors may not give monetarily is that they{' '}
                  <b>may not have the financial means</b> to give.
                </span>
              </div>
            </div>
            <div className={styles.secondBottomRight}>
              <img
                className={styles.bottomEmote}
                src='./emoteHappy.svg'
                alt=''
              />
              <div className={styles.secondBottomTextContainer}>
                <span className={styles.spanBottom}>
                  Supporters may be willing to{' '}
                  <b>
                    donate <br />
                    their time, skills or knowledge{' '}
                  </b>
                  instead of or in addition to a monetary donation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*MOBILE SECOND NONPROFIT CONTAINER*/}

      <div className={styles.mobileSecondNonprofitContainer}>
        <div>
          <div className={styles.mobileTopSecondBg}>
            <div className={styles.mainFirstMobile}>
              <div className={styles.leftMainMobile}>
                <div className={styles.leftImgInfoSecondMobile}>
                  <img
                    className={styles.leftImgMobile}
                    src='./secondHomeImg.png'
                    alt='An iPhone with an offerwall'
                  />
                </div>
              </div>
              <div className={styles.rightMainMobile}>
                <h2 className={styles.textSecondMobile}>
                  Smatched provides an alternative Subscription Model
                </h2>
                <div className={styles.paragMobile}>
                  <div className={styles.innerParagSecondMobile}>
                    {' '}
                    Paywalls are a great revenue option for many businesses but
                    unfortunately, making users pay means your revenue potential
                    is capped. Businesses that offer more than one monetization
                    model retain <b>50% more users</b>.
                    <br />
                    <br />
                    What if your users could earn their way past a paywall
                    without having to open their wallet?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THIRD NONPROFIT CONTAINER */}

      <div className={styles.thirdNonprofitContainer}>
        <div className={styles.thirdNonprofitContainerBox}>
          <div className={styles.thirdSectionLeft}>
            <div className={styles.imageThirdNonprofitContainer}>
              <img
                src='./thirdNonprofitImg.svg'
                alt='A laptop and a phone with offerwall rewards'
              />
            </div>
          </div>

          <div className={styles.thirdSectionRight}>
            <>
              <div className={styles.innerThirdSectionRight}>
                <div className={styles.thirdSectionRightH1}>
                  Donor Retention
                  <br />
                  Strategies
                </div>

                <div className={styles.thirdSectionRightP}>
                  Effective donor retention strategies are based on providing
                  more choices to your supporters. To foster lasting
                  relationships with your supporters, give them the option to
                  earn your organization donations by carrying out surveys via
                  your weekly or monthly newsletter – rather than just
                  encouraging them to give with their own money.
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      {/*MOBILE THIRD NONPROFIT CONTAINER*/}

      <div className={styles.mobileThirdNonprofitContainer}>
        <div className={styles.mobileThirdHomeContainerBox}>
          <div className={styles.mobileThirdSectionLeft}>
            <div className={styles.imageMobileThirdHomeContainer}>
              <div className={styles.mobileThirdSectionLeftBG}>
                <div className={styles.mobileThirdHomeImage}>
                  <img
                    src='./thirdSectionImg.png'
                    alt='A laptop and a phone with offerwall rewards'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mobileThirdSectionRight}>
            <>
              <div className={styles.innerMobileThirdSectionRight}>
                <div className={styles.mobileThirdSectionRightH1}>
                  Why partner with Monetize?
                </div>
              </div>

              <div className={styles.mobileThirdSectionRightH2}>
                <ul className={styles.mobileThirdSectionRightList}>
                  <li>Open up another revenue stream</li>
                  <li>
                    Our business model incentivizes us to provide better
                    experiences for your customers
                  </li>
                  <li>Easy set-up: no set-up costs or integration work</li>
                  <li>
                    The Smatched web app is independent, GDPR-compliant and
                    completely secure
                  </li>
                </ul>
              </div>

              <div className={styles.mobileButtonTextGold}>
                <div className={styles.mobileButtonText1Gold}>BOOK A DEMO</div>
              </div>
            </>
          </div>
        </div>
      </div>

      {/* FOURTH NONPROFIT CONTAINER */}

      <div className={styles.fourthNonprofitContainer}>
        <div className={styles.fourthNonprofitContainerBox}>
          <div className={styles.fourthSectionLeft}>
            <div className={styles.innerFourthSectionLeft}>
              <div className={styles.innerFourthFreeResources}>
                Unlocking free resources for Nonprofits
              </div>
              <div className={styles.innerFourthText}>
                <span className={styles.spanText}>
                  Smatched provides free resources for nonprofits looking to
                  increase monetization for their organization and a
                  comprehensive offer wall web-app solution customized for each
                  nonprofit with a simple technical integration that is
                  absolutely free.
                  <br />
                  <br />
                  Unlock with Smatched a completely new donor audience – the{' '}
                  <b>77% of supporters</b> who don’t donate monetarily. Just by
                  offering alternative ways to contribute, nonprofits can engage
                  more supporters and increase the impact of their mission.
                </span>
              </div>
              <button className={styles.buttonText2}>
                <div className={styles.buttonText1}>BOOK A DEMO</div>
              </button>
            </div>
          </div>

          <div className={styles.fourthSectionRight}>
            <img
              src='./fourthNonprofitImg.svg'
              alt='women using a smart phone'
            />
          </div>
        </div>
      </div>

      {/*MOBILE FOURTH NONPROFIT CONTAINER*/}

      <div className={styles.mobileFourthNonprofitContainer}>
        <div className={styles.subMobileFourthHomeContainer}>
          <div className={styles.mobileFourthHomeBox1}>
            <div>How it works?</div>
          </div>

          <div className={styles.mobileFourthHomeBox2}>
            <div className={styles.mobileFourthBox2Container}>
              <div className={styles.mobileFourth1234}>
                <div className={styles.mobileFourthOne}>
                  <div className={styles.mobileFourthInner12}>
                    <img
                      className={styles.mobileFourthStepOneImg}
                      src='./one.svg'
                      alt='A picture of a number one'
                    />
                    <h1>Step 1</h1>
                    <div className={styles.mobileFourth12Integration}>
                      We integrate via API into your mobile app or website to
                      integrate seamlessly with your existing monetization
                      model.
                    </div>
                  </div>
                </div>

                <div className={styles.mobileFourthTwo}>
                  <div className={styles.mobileFourthInner12}>
                    <img
                      className={styles.mobileFourthStepTwoImg}
                      src='./two.svg'
                      alt='A picture of a number two'
                    />
                    <h1>Step 2</h1>
                    <div className={styles.mobileFourth12Integration}>
                      We work with you to optimize and maximize conversions to
                      improve the overall user experience – customization
                      increases conversions by an average of 3x
                    </div>
                  </div>
                </div>

                <div className={styles.mobileFourthThree}>
                  <div className={styles.mobileFourthInner34}>
                    <img
                      className={styles.mobileFourthStepThreeImg}
                      src='./three.svg'
                      alt='A picture of a number three'
                    />
                    <h1>Step 3</h1>
                    <div className={styles.mobileFourth12Integration}>
                      Users are funneled to Smatched as an option after not
                      converting and are then given the opportunity to earn
                      their reward through an offerwall – which includes
                      multiple earning options.
                    </div>
                  </div>
                </div>

                <div className={styles.mobileFourthFour}>
                  <div className={styles.mobileFourthInner34}>
                    <img
                      className={styles.stepFourImg}
                      src='./four.svg'
                      alt='A picture of a number four'
                    />
                    <h1>Step 4</h1>
                    <div className={styles.mobileFourth12Integration}>
                      The user then completes the action to earn you more
                      revenue and the added options increases returning users by
                      100% on average.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonProfit;
