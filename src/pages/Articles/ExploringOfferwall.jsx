import React, { useState } from 'react';
import styles from './ExploringOfferwall.module.css';
import { db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Booking from '../../pages/Booking/Booking.jsx';

const ExploringOfferwall = ({ setShowFormFooter }) => {
  setShowFormFooter(false);

  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (input) {
      //add to firebase
      await addDoc(collection(db, 'emails'), {
        email: input,
        time: serverTimestamp(),
      });
      setInput('');
      setMessage('Thank you for signing up to our news');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

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
            <div className={styles.buttonText1} onClick={toggleBookingForm}>BOOK A DEMO</div>
            </button>
                            {showBookingForm && (
                                <div className={styles.bookingFormPopup}>
                                    <div className={styles.bookingFormContent}>
                                        <span className={styles.closeButton} onClick={toggleBookingForm}>&times;</span>
                                        <Booking />
                                    </div>
                                </div>
                            )}
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
              <img className={styles.bottomEmote} src='./emoteSad.svg' alt='' />
              <div className={styles.mobileSecondBottomTextContainer}>
                <span className={styles.spanBottom}>
                  One of the reasons why potential <br />
                  donors may not give monetarily is that they{' '}
                  <b>may not have the financial means</b> to give.
                </span>
              </div>
            </div>
            <div className={styles.mobileSecondBottomMiddle}>
              <img className={styles.arrowEmote} src='./elipse.svg' alt='' />
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
        <div className={styles.thirdTextBox}>
          <div className={styles.thirdTextTitle}>Smatched</div>
          <br />
          <div className={styles.thirdTextP}>
            <p>
              Smatched is a robust offerwall solution known for its
              user-friendly interface and seamless integration process. Its
              strength lies in providing a wide range of high-quality offers
              from reputable advertisers. Additionally, Smatched offers strong
              user support, prompt payment processing, and efficient fraud
              prevention measures. However, one potential weakness of Smatched
              is its limited global reach, which might restrict app companies
              targeting specific regions.
            </p>
          </div>
        </div>
        <div className={styles.thirdTextBox}>
          <div className={styles.thirdTextTitle}>Tapjoy</div>
          <br />
          <div className={styles.thirdTextP}>
            <p>
              Tapjoy is a well-established player in the offerwall landscape,
              offering an extensive suite of monetization tools. Its key
              strength is the large and diverse pool of advertisers, ensuring a
              constant supply of engaging and rewarding offers. Tapjoy's
              strength also lies in its advanced targeting capabilities,
              enabling personalized offers for users. However, some app
              companies might find Tapjoy's integration process complex,
              requiring technical expertise and careful implementation.
            </p>
          </div>
        </div>
        <div className={styles.thirdTextBox}>
          <div className={styles.thirdTextTitle}>OfferToro</div>
          <br />
          <div className={styles.thirdTextP}>
            <p>
              OfferToro distinguishes itself through its innovative and
              user-friendly design, catering to both app developers and users.
              Its strength lies in the variety of offer types available,
              including surveys, app installations, and video ads. OfferToro
              also offers multi-platform support and smooth integration,
              ensuring a hassle-free experience for developers. However, one
              weakness of OfferToro is occasional discrepancies in offer
              tracking, which may impact accurate reward distribution.
            </p>
          </div>
        </div>
        <div className={styles.thirdTextBox}>
          <div className={styles.thirdTextTitle}>Offerwall</div>
          <br />
          <div className={styles.thirdTextP}>
            <p>
              Offerwall is a versatile offerwall solution known for its
              flexibility and customization options. Its strength lies in
              providing developers with complete control over the design and
              placement of the offerwall, aligning seamlessly with their app's
              user experience. Offerwall also offers comprehensive analytics and
              reporting tools, enabling developers to monitor and optimize their
              monetization efforts. However, Offerwall's weakness lies in the
              relatively smaller pool of offers compared to some competitors,
              potentially impacting revenue generation.
            </p>
          </div>
        </div>
        <div className={styles.thirdTextBox}>
          <div className={styles.thirdTextTitle}>Revu</div>
          <br />
          <div className={styles.thirdTextP}>
            <p>
              Revu is a rapidly growing offerwall solution renowned for its
              global reach and diverse range of advertising partners. Its
              strength lies in its efficient payout system and robust fraud
              prevention measures, ensuring fair compensation and reliable
              offers. Revu also offers multilingual support, enabling developers
              to target a broader user base. However, one potential weakness of
              Revu is its less intuitive user interface, which might require
              some acclimatization for efficient navigation.
            </p>
          </div>
        </div>
        <div className={styles.thirdTextBox}>
          <div className={styles.thirdTextTitle}>Wannads</div>
          <br />
          <div className={styles.thirdTextP}>
            <p>
              Wannads sets itself apart by providing a wide range of offer
              types, including surveys, app installs, and game downloads. Its
              strength lies in its extensive inventory of offers, accommodating
              different app niches and user preferences. Wannads also offers
              excellent customer support and timely payments. However, one
              weakness of Wannads is its occasional discrepancy in offer
              availability across regions, limiting the options for developers
              targeting specific markets.
            </p>
          </div>
        </div>
        <div className={styles.thirdTextBox}>
          <div className={styles.thirdTextTitle}>Adscend Media</div>
          <br />
          <div className={styles.thirdTextP}>
            <p>
              Adscend Media offers a comprehensive suite of monetization
              solutions, including offerwalls. Its strength lies in its strong
              compliance with industry regulations and robust fraud detection
              mechanisms. Adscend Media also provides easy integration options
              and personalized support. However, one potential weakness of
              Adscend Media is the occasional limited availability of
              high-paying offers, which might impact revenue potential for some
              app companies.
            </p>
          </div>
        </div>
        <div className={styles.thirdTextBox}>
          <div className={styles.thirdTextTitle}>AdGem</div>
          <br />
          <div className={styles.thirdTextP}>
            <p>
              AdGem distinguishes itself by providing a streamlined user
              experience and an extensive catalog of high-quality offers. Its
              strength lies in its strong emphasis on user engagement and
              satisfaction, resulting in better retention rates. AdGem also
              offers quick integration and reliable payment processing. However,
              one weakness of AdGem is its relatively smaller pool of
              advertisers, potentially limiting the variety of offers available.
            </p>
          </div>
        </div>
        <div className={styles.thirdImageBox}>
          <img
            className={styles.thirdImage}
            src='./thirdExploringWoman.png'
            alt='Woman holding a phone'
          />
        </div>
        <div className={styles.thirdTextBox}>
          <div className={styles.thirdTextP}>
            Selecting the right offerwall solution is crucial for mobile app
            companies seeking effective monetization and user retention. Each
            solution analyzed — Smatched, Tapjoy, OfferToro, Offerwall, Revu,
            Wannads, Adscend Media, and AdGem — comes with its unique strengths
            and weaknesses.
            <br />
            <br />
            App companies should carefully evaluate their specific needs, such
            as global reach, offer variety, user interface, and technical
            requirements, to make an informed decision. By understanding the
            differences between these offerwall solutions, mobile app companies
            can optimize their monetization efforts and enhance user engagement,
            ultimately driving success in a competitive app market.
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
        <div className={styles.fourthExploringBox1}>What to read next</div>

        <div className={styles.fourthExploringBox2}>
          <div className={styles.innerFourthExploringBox2}>
            <div className={styles.fourthBox2Container}>
              <div className={styles.fourth2TopContainer}>
                <img
                  className={styles.stepThreeImg}
                  src='./fourthExploringMonetization.svg'
                  alt='A'
                />
              </div>
              <div className={styles.fourth2BottomContainer}>
                <div className={styles.fourthTitleContainer}>
                  Maximizing Offerwall Monetization: Best Practices for
                  Conversions and Retention
                </div>
                <div className={styles.timeAndDateGroup2}>
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
                <div className={styles.fourthTextContainer}>
                  Leveraging the potential of offerwall monetization can be a
                  game-changer for companies seeking to optimize conversions and
                  increase user retention.In the dynamic landscape of mobile app
                  monetization, offerwall monetization has emerged as a powerful
                  ...
                </div>
                <div className={styles.fourthButton}>
                  <button className={styles.buttonText}>
                    <div className={styles.buttonText1}>Read More</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.fourthBox2Container}>
              <div className={styles.fourth2TopContainer}>
                <img
                  className={styles.stepThreeImg}
                  src='./sideWoman.png'
                  alt='A'
                />
              </div>
              <div className={styles.fourth2BottomContainer}>
                <div className={styles.fourthTitleContainer}>
                  What is an Offerwall? Exploring the Various Types and Benefits
                </div>
                <div className={styles.timeAndDateGroup2}>
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
                <div className={styles.fourthTextContainer}>
                  Offerwalls provide a unique opportunity to engage users, drive
                  revenue, and enhance user retention. In the realm of mobile
                  app monetization, offerwalls have emerged as a popular and
                  effective strategy for app monetization and retention...
                </div>
                <div className={styles.fourthButton}>
                  <button className={styles.buttonText}>
                    <div className={styles.buttonText1}>Read More</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*MOBILE FOURTH NONPROFIT CONTAINER*/}

      <div className={styles.mobileFourthExploringContainer}>
        <div className={styles.fourthExploringBox1}>What to read next</div>

        <div className={styles.fourthExploringBox2}>
          <div className={styles.innerFourthExploringBox2}>
            <div className={styles.fourthBox2Container}>
              <div className={styles.fourth2TopContainer}>
                <img
                  className={styles.stepThreeImg}
                  src='./fourthExploringMonetization.svg'
                  alt='A'
                />
              </div>
              <div className={styles.fourth2BottomContainer}>
                <div className={styles.fourthTitleContainer}>
                  Maximizing Offerwall Monetization: Best Practices for
                  Conversions and Retention
                </div>
                <div className={styles.timeAndDateGroup2}>
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
                <div className={styles.fourthTextContainer}>
                  Leveraging the potential of offerwall monetization can be a
                  game-changer for companies seeking to optimize conversions and
                  increase user retention.In the dynamic landscape of mobile app
                  monetization, offerwall monetization has emerged as a powerful
                  ...
                </div>
                <div className={styles.fourthButton}>
                  <button className={styles.buttonText}>
                    <div className={styles.buttonText1}>Read More</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.fourthBox2Container}>
              <div className={styles.fourth2TopContainer}>
                <img
                  className={styles.stepThreeImg}
                  src='./sideWoman.png'
                  alt='A'
                />
              </div>
              <div className={styles.fourth2BottomContainer}>
                <div className={styles.fourthTitleContainer}>
                  What is an Offerwall? Exploring the Various Types and Benefits
                </div>
                <div className={styles.timeAndDateGroup2}>
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
                <div className={styles.fourthTextContainer}>
                  Offerwalls provide a unique opportunity to engage users, drive
                  revenue, and enhance user retention. In the realm of mobile
                  app monetization, offerwalls have emerged as a popular and
                  effective strategy for app monetization and retention...
                </div>
                <div className={styles.fourthButton}>
                  <button className={styles.buttonText}>
                    <div className={styles.buttonText1}>Read More</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIFTH EXPLORING CONTAINER */}

      <div className={styles.fifthExploringContainer}>
        <div className={styles.fifthExploringBackground}>
          <div className={styles.innerFifthExploringContainer1}>
            <div className={styles.innerContentFifthContainer}>
              <div className={styles.stayU2D}> Stay up to date</div>
              <div className={styles.join}> Join Our Newsletter</div>
              <div className={styles.subscribe}>
                <form onSubmit={submitHandler} className={styles.form}>
                  <div className={styles.subscribeBox}>
                    <input
                      className={styles.inputE}
                      type='email'
                      onChange={inputHandler}
                      placeholder='Enter your email..'
                      value={input}
                    />
                  </div>
                  <div className={styles.submit}>
                    <button type='submit' className={styles.submitButton}>
                      subscribe
                    </button>
                  </div>
                </form>
              </div>
              {message && (
                <div className={styles.alertMessage}> {message} </div>
              )}
              <div div className={styles.unsubscribe}>
                *You can unsubscribe anytime
              </div>
            </div>
          </div>

          <div className={styles.bottomBG}></div>
        </div>
      </div>

      {/*MOBILE FIFTH EXPLORING CONTAINER*/}

      <div className={styles.mobileFifthExploringContainer}>
        <div className={styles.mobileFifthHomeBackground}>
          <div className={styles.mobileInnerFifthHomeContainer}>
            <div className={styles.mobileInnerFifthTop}>
              <div className={styles.mobileIcons}>
                <img src='./fifthIcon3.svg' alt='grafic icon' />
                <img src='./fifthIcon2.svg' alt='eye icon' />
                <img src='./fifthIcon3.svg' alt='grafic icon' />
                <img src='./fifthIcon1.svg' alt='grafic icon' />
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
  );
};

export default ExploringOfferwall;
