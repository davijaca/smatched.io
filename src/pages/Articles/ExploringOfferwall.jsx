import React from 'react';
import styles from './ExploringOfferwall.module.css';

const ExploringOfferwall = () => {
  return (
    <div className={styles.exploringOfferwallContainer}>
      {/* FIRST NONPROFIT CONTAINER */}

      <div className={styles.firstExploringContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mainFirst}>
            <div className={styles.leftMain}>
              <div className={styles.leftImgInfo}>
                <img
                  className={styles.leftImg}
                  src='./articleClock.svg'
                  alt='Golden Clock image'
                />
              </div>
            </div>
            <div className={styles.rightMain}>
              <h1 className={styles.text}>
                Exploring offerwall Solutions
                <br />
                for Monetization and Retention:
                <br />a Comparative Analysis
              </h1>
            </div>
          </div>
          <div className={styles.mainSecond}>
            <div className={styles.timeAndDateGroup}>
              <div className={styles.timeToRead}>
                <img
                  className={styles.goldElipse}
                  src='./goldElipse.svg'
                  alt='Golde Elipse'
                />

                <div className={styles.text1}>7 min read</div>
              </div>
              <div className={styles.date}>
                <img
                  className={styles.goldElipse}
                  src='./goldElipse.svg'
                  alt='Golde Elipse'
                />
                <div className={styles.text1}>Jul 18 2023 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FIRST NONPROFIT CONTAINER */}

      <div className={styles.mobileFirstExploringContainer}>
        <div className={styles.mobileTopFirst}>
          <div className={styles.mobileMainFirst}>
            <div className={styles.mobileTopMain}>
              <div className={styles.mobileImgInfo}>
                <img
                  className={styles.mobileImg}
                  src='./nonprofitHero.svg'
                  alt='revenue image'
                />
              </div>
            </div>
            <div className={styles.mobileBottomMain}>
              <h1 className={styles.text}>
                Creative <br />
                Revenue Streams
              </h1>
              <h2 className={styles.text2}> for Nonprofits</h2>
              <div className={styles.parag}>
                <div className={styles.innerParag}>
                  {' '}
                  The nonprofit industry is faced with the challenge of
                  converting potential supporters into paying donors. By
                  exploring creative revenue streams, you can differentiate your
                  organization and motivate people to donate in impactful ways.
                  <br />
                  <br />
                  Diversifying your donation options can significantly increase
                  engagement and donor acquisition rates.
                </div>
              </div>
            </div>
            <button className={styles.buttonText}>
              <div className={styles.buttonText1}>BOOK A DEMO</div>
            </button>
          </div>
        </div>
      </div>

      {/* SECOND NONPROFIT CONTAINER */}

      <div className={styles.secondExploringContainer}>
        <div className={styles.secondExploringBoxContainer}>
          <div className={styles.secondExploringLeftContainer}>
            <div className={styles.secondExploringContainerBox}>
              <img
                className={styles.roundButton}
                src='./articleShare.svg'
                alt='Share Button'
              />
            </div>
            <div className={styles.secondExploringContainerBox}>
              <img
                className={styles.roundButton}
                src='./articlePrint.svg'
                alt='Print Button'
              />
            </div>
          </div>
          <div className={styles.secondExploringRightContainer}>
            <div className={styles.secondExploringText}>
              Mobile app companies are constantly seeking effective monetization
              strategies that not only generate revenue but also enhance user
              retention. Offerwalls enable app developers to leverage
              advertising offers, surveys, and other tasks to engage users and
              provide in-app rewards. In this article, we will delve into six
              prominent offerwall solutions — Smatched, Tapjoy, OfferToro,
              Offerwall, Revu, Wannads, Adscend Media, and AdGem — to analyze
              their strengths, weaknesses, and differences, ultimately assisting
              mobile app companies in making an informed choice for monetization
              and retention.
            </div>
          </div>
        </div>
      </div>

      {/*MOBILE SECOND NONPROFIT CONTAINER*/}

      <div className={styles.mobileSecondExploringContainer}>
        <div className={styles.mobileSecondNonprofitTopContainer}>
          <div className={styles.mobileSecondNonprofitContainerBox1}>
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

        <div className={styles.mobileSecondNonprofitBottomContainer}>
          <div className={styles.mobileSecondNonprofitContainerBox2}>
            <div className={styles.mobileSecondBottomLeft}>
              <img
                className={styles.bottomEmote}
                src='./emoteSad.svg'
                alt=''
              />
              <div className={styles.mobileSecondBottomTextContainer}>
                <span className={styles.spanBottom}>
                  One of the reasons why potential <br />
                  donors may not give monetarily is that they{' '}
                  <b>may not have the financial means</b> to give.
                </span>
              </div>
            </div>
            <div className={styles.mobileSecondBottomMiddle}>
              <img
                className={styles.arrowEmote}
                src='./elipse.svg'
                alt=''
              />
            </div>
            <div className={styles.mobileSecondBottomRight}>
              <img
                className={styles.bottomEmote}
                src='./emoteHappy.svg'
                alt=''
              />
              <div className={styles.mobileSecondBottomTextContainer}>
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

      {/* THIRD NONPROFIT CONTAINER */}

      <div className={styles.thirdExploringContainer}>
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

      <div className={styles.mobileThirdExploringContainer}>
        <div className={styles.thirdNonprofitContainerBox}>
          <div className={styles.thirdSectionLeft}>
            <div className={styles.imageThirdNonprofitContainer}>
              <img
                src='./mobileThirdNonprofitImg.svg'
                alt='A laptop and a phone with offerwall rewards'
              />
            </div>
          </div>

          <div className={styles.thirdSectionRight}>
            <>
              <div className={styles.innerThirdSectionRight}>
                <div className={styles.thirdSectionRightH1}>
                  Donor Retention Strategies
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

      {/* FOURTH NONPROFIT CONTAINER */}

      <div className={styles.fourthExploringContainer}>
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

      <div className={styles.mobileFourthExploringContainer}>
        <div className={styles.mobileFourthNonprofitContainerBox}>
          <div className={styles.mobileFourthSectionLeft}>
            <div className={styles.imageMobileFourthNonprofitContainer}>
              <div className={styles.mobileFourthNonprofitImage}>
                <img
                  src='./fourthNonprofitImg.svg'
                  alt='women using a smart phone'
                />
              </div>
            </div>
          </div>

          <div className={styles.mobileFourthSectionRight}>
            <div className={styles.mobileFourthSectionRightH1}>
              Unlocking free resources for Nonprofits
            </div>

            <div className={styles.bottomFourthMobile}>
              <span>
                Smatched provides free resources for nonprofits looking to
                increase monetization for their organization and a comprehensive
                offer wall web-app solution customized for each nonprofit with a
                simple technical integration that is absolutely free.
                <br />
                <br />
                Unlock with Smatched a completely new donor audience – the{' '}
                <b>77% of supporters</b> who don’t donate monetarily. Just by
                offering alternative ways to contribute, nonprofits can engage
                more supporters and increase the impact of their mission.
              </span>
            </div>
            <div className={styles.buttonFourthDiv}>
              <button className={styles.buttonText}>
                <div className={styles.buttonText1}>BOOK A DEMO</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploringOfferwall;
