import React, { useState } from 'react';
import styles from './Newspaper.module.css';
import Booking from '../../pages/Booking/Booking.jsx';
import Button from '../../components/Button/Button.jsx';

const Newspaper = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };
  return (
    <div className={styles.newspaperContainer}>
      {/* First News */}

      <div className={styles.firstNewsContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mainFirst}>
            <div className={styles.rightMain}>
              <h1 className={styles.text}>
                Newspaper
                <br />
              </h1>
              <h2 className={styles.text2}>
                Publishing <br /> Industry
              </h2>
              <div className={styles.parag}>
                <div className={styles.innerParag}>
                  {' '}
                  Nowadays the newspaper publishing industry faces numerous
                  challenges that threaten its sustainability. The availability
                  of free online news options, the fragmentation of news types
                  and channels, and the emergence of syndicated news businesses
                  like Medium and Substack all contribute to these pressing
                  issues.
                  <br />
                  <br />
                  What you can do to overcome these challenges and increase
                  revenue?
                </div>
              </div>
              <Button onClick={toggleBookingForm} />
              {showBookingForm && (
                <div className={styles.bookingFormPopup}>
                  <div className={styles.bookingFormContent}>
                    <span
                      className={styles.closeButton}
                      onClick={toggleBookingForm}
                    >
                      &times;
                    </span>
                    <Booking />
                  </div>
                </div>
              )}
            </div>
            <div className={styles.leftMain}>
              <img
                className={styles.leftImg}
                src="/images/newspaperPage/newspaper_sec1.png"
                alt="Three tablets placed on top of each other"
              />
            </div>
          </div>
        </div>
      </div>

      {/* First News mobile responsiveness */}

      <div className={styles.mobileFirstNewsContainer}>
        <div className={styles.topFirst}>
          <div className={styles.mobileTopFirstBg}>
            <div className={styles.mainFirstMobile}>
              <div className={styles.leftMainMobile}>
                <div className={styles.leftImgInfoMobile}>
                  <img
                    className={styles.leftImgMobile}
                    src="/images/newspaperPage/newspaper_sec1.png"
                    alt="Three tablets placed on top of each other"
                  />
                </div>
              </div>
              <div className={styles.rightMainMobile}>
                <h1 className={styles.textMobile}>Newspaper</h1>
                <h2 className={styles.text2Mobile}>
                  Publishing <br />
                  Industry
                </h2>
                <div className={styles.paragMobile}>
                  <div className={styles.innerParagMobile}>
                    {' '}
                    Nowadays the newspaper publishing industry faces numerous
                    challenges that threaten its sustainability. The
                    availability of free online news options, the fragmentation
                    of news types and channels, and the emergence of syndicated
                    news businesses like Medium and Substack all contribute to
                    these pressing issues.
                    <br />
                    <br />
                    What you can do to overcome these challenges and increase
                    revenue?
                  </div>
                </div>
                <Button onClick={toggleBookingForm} />
                {showBookingForm && (
                  <div className={styles.bookingFormPopup}>
                    <div className={styles.bookingFormContent}>
                      <span
                        className={styles.closeButton}
                        onClick={toggleBookingForm}
                      >
                        &times;
                      </span>
                      <Booking />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second News */}

      <div className={styles.secondNewsContainer}>
        <div className={styles.secondNewsBox1}>
          <h1>Smatched can help you</h1>
        </div>
        <div className={styles.secondNewsBox2}>
          <div className={styles.secondNewsCard}>
            <div className={styles.secondNewsCardImg}>
              <img
                src="/images/newspaperPage/newspaper_sec2_icon_one.svg"
                alt="Icon representing three people"
              />
            </div>
            <h1>
              Empowering publishers:
              <br />
              unlocking new audiences
            </h1>
            <p>
              Smatched presents a game-changing solution that empowers
              publishers in the online media space to tap into an entirely new
              audience. By integrating Smatched into their business model,
              newspaper publishers can{' '}
              <span>revolutionize their revenue streams</span> and drive growth.
            </p>
          </div>

          <div className={styles.secondNewsCard}>
            <div className={styles.secondNewsCardImg}>
              <img
                src="/images/newspaperPage/newspaper_sec2_icon_two.svg"
                alt="Icon showing index finger pointing to options"
              />
            </div>
            <h1>
              Expanding revenue streams:
              <br />
              give readers more choice
            </h1>
            <p>
              Only around <span>10% of readers</span> are willing to pay for
              online news subscriptions. This untapped market represents a
              significant opportunity for the industry, to capture this
              potential revenue, publishers must provide readers with
              alternatives to traditional subscription models. Smatched offers a
              compelling solution.
            </p>
          </div>

          <div className={styles.secondNewsCard}>
            <div className={styles.secondNewsCardImg}>
              <img
                src="/images/newspaperPage/newspaper_sec2_icon_three.svg"
                alt="Icon showing an unlock padlock"
              />
            </div>
            <h1>
              Unlock the power of offerwalls:
              <br /> monetize and engage
            </h1>
            <p>
              Offerwalls are a proven strategy for monetizing online content. By
              leveraging Smatched’s offerwall solution, publishers can{' '}
              <span>increase their revenue and attract</span> new readers. This
              approach allows publishers to monetize their content in a way that
              is more accessible and appealing to readers, fostering increased
              engagement and loyalty.
            </p>
          </div>

          <div className={styles.secondNewsCard}>
            <div className={styles.secondNewsCardImg}>
              <img
                src="/images/newspaperPage/newspaper_sec2_icon_four.svg"
                alt="Icon showing an arrow pointing up"
              />
            </div>
            <h1>
              Boosting subscription rates
              <br />
              3x higher
            </h1>
            <p>
              Smatched is a platform designed to{' '}
              <span>increase subscription rates</span> in the online news
              industry. By incorporating an offerwall into their subscription
              model, publishers can offer readers the opportunity to earn their
              subscription by completing offers or surveys. This not only
              provides an alternative to paying for a subscription but also
              fosters a sense of engagement and ownership among readers.
            </p>
          </div>
        </div>
      </div>

      {/*Second News mobile responsiveness*/}

      <div className={styles.mobileSecondNewsContainer}>
        <div className={styles.mobileSecondNewsBox1}>
          <h1>Smatched can help you</h1>
        </div>
        <div className={styles.mobileSecondNewsBox2}>
          <div className={styles.mobileSecondNewsCard}>
            <div className={styles.mobileSecondNewsCardImg}>
              <img
                src="/images/newspaperPage/newspaper_sec2_icon_one.svg"
                alt="Icon representing three people"
              />
            </div>
            <h1>
              Empowering publishers:
              <br />
              unlocking new audiences
            </h1>
            <p>
              Smatched presents a game-changing solution that empowers
              publishers in the online media space to tap into an entirely new
              audience. By integrating Smatched into their business model,
              newspaper publishers can{' '}
              <span>revolutionize their revenue streams</span> and drive growth.
            </p>
          </div>

          <div className={styles.mobileSecondNewsCard}>
            <div className={styles.mobileSecondNewsCardImg}>
              <img
                src="/images/newspaperPage/newspaper_sec2_icon_two.svg"
                alt="Icon showing index finger pointing to options"
              />
            </div>
            <h1>
              Expanding revenue streams:
              <br />
              give readers more choice
            </h1>
            <p>
              Only around <span>10% of readers</span> are willing to pay for
              online news subscriptions. This untapped market represents a
              significant opportunity for the industry, to capture this
              potential revenue, publishers must provide readers with
              alternatives to traditional subscription models. Smatched offers a
              compelling solution.
            </p>
          </div>

          <div className={styles.mobileSecondNewsCard}>
            <div className={styles.mobileSecondNewsCardImg}>
              <img
                src="/images/newspaperPage/newspaper_sec2_icon_three.svg"
                alt="Icon showing an unlock padlock"
              />
            </div>
            <h1>
              Unlock the power of offerwalls:
              <br /> monetize and engage
            </h1>
            <p>
              Offerwalls are a proven strategy for monetizing online content. By
              leveraging Smatched’s offerwall solution, publishers can{' '}
              <span>increase their revenue and attract</span> new readers. This
              approach allows publishers to monetize their content in a way that
              is more accessible and appealing to readers, fostering increased
              engagement and loyalty.
            </p>
          </div>

          <div className={styles.mobileSecondNewsCard}>
            <div className={styles.mobileSecondNewsCardImg}>
              <img
                src="/images/newspaperPage/newspaper_sec2_icon_four.svg"
                alt="Icon showing an arrow pointing up"
              />
            </div>
            <h1>
              Boosting subscription rates
              <br />
              3x higher
            </h1>
            <p>
              Smatched is a platform designed to{' '}
              <span>increase subscription rates</span> in the online news
              industry. By incorporating an offerwall into their subscription
              model, publishers can offer readers the opportunity to earn their
              subscription by completing offers or surveys. This not only
              provides an alternative to paying for a subscription but also
              fosters a sense of engagement and ownership among readers.
            </p>
          </div>
        </div>
      </div>

      {/* Third News */}
      <div className={styles.thirdNewsContainer}>
        <div className={styles.thirdNewsImg}>
          <img
            src="/images/newspaperPage/newspaper_sec3.png"
            alt="Three screens placed on top of each other"
          />
        </div>
        <div className={styles.thirdNewsContent}>
          <h1>
            Seamless integration <br />
            with Smatched <br /> Web-App
          </h1>
          <p>
            {' '}
            Smatched offers a seamless and user-friendly experience for both
            publishers and readers. Integrating Smatched into website is
            effortless for publishers and readers can quickly complete offers or
            surveys to earn their subscription fee.
            <br />
            <br />
            The platform ensures that offers and surveys are relevant and
            tailored to each reader’s interests, maximizing completion rates and
            engagement.
          </p>
        </div>
      </div>

      {/* {/*Third News mobile Responsiveness*/}

      <div className={styles.mobileThirdNewsContainer}>
        <div className={styles.mobileThirdNewsImg}>
          <img
            src="/images/newspaperPage/newspaper_sec3.png"
            alt="Three screens placed on top of each other"
          />
        </div>
        <div className={styles.mobileThirdNewsContent}>
          <h1>
            Seamless integration <br />
            with Smatched <br /> Web-App
          </h1>
          <p>
            {' '}
            Smatched offers a seamless and user-friendly experience for both
            publishers and readers. Integrating Smatched into website is
            effortless for publishers and readers can quickly complete offers or
            surveys to earn their subscription fee.
            <br />
            <br />
            The platform ensures that offers and surveys are relevant and
            tailored to each reader’s interests, maximizing completion rates and
            engagement.
          </p>
        </div>
      </div>

      {/* Fourth News */}

      <div className={styles.fourthNewsContainer}>
        <div className={styles.fourthNewsImage}>
          <div className={styles.fourthNewsImgBg}></div>
          <img
            src="/images/newspaperPage/newspaper_sec4.png"
            alt="A screen showing the news"
          />
        </div>

        <div className={styles.fourthNewsContent}>
          <h1>
            Embrace change, <br /> ensure sustainability
          </h1>
          <p>
            The newspaper publishing industry must provide readers with more
            choices to drive revenue growth and sustainability. By incorporating
            an offerwall into their subscription model using Smatched,
            publishers can unlock new revenue streams, enhance user experiences,
            and gain valuable data-driven insights.
            <br />
            <br />
            Embracing this strategy enables online news publishers to monetize
            their content effectively, boost engagement and loyalty, and secure
            their position in the digital age.
          </p>

          <Button color="gold" onClick={toggleBookingForm} />
          {showBookingForm && (
            <div className={styles.bookingFormPopup}>
              <div className={styles.bookingFormContent}>
                <span
                  className={styles.closeButton}
                  onClick={toggleBookingForm}
                >
                  &times;
                </span>
                <Booking />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fourth News mobile responsiveness */}

      <div className={styles.mobileFourthNewsContainer}>
        <div className={styles.mobileFourthNewsImage}>
          <div className={styles.mobileFourthNewsImgBg}></div>
          <img
            src="/images/newspaperPage/newspaper_sec4.png"
            alt="A screen showing the news"
          />
        </div>

        <div className={styles.mobileFourthNewsContent}>
          <h1>Embrace change, ensure sustainability</h1>
          <p>
            The newspaper publishing industry must provide readers with more
            choices to drive revenue growth and sustainability. By incorporating
            an offerwall into their subscription model using Smatched,
            publishers can unlock new revenue streams, enhance user experiences,
            and gain valuable data-driven insights.
            <br />
            <br />
            Embracing this strategy enables online news publishers to monetize
            their content effectively, boost engagement and loyalty, and secure
            their position in the digital age.
          </p>

          <Button color="gold" onClick={toggleBookingForm} />
          {showBookingForm && (
            <div className={styles.bookingFormPopup}>
              <div className={styles.bookingFormContent}>
                <span
                  className={styles.closeButton}
                  onClick={toggleBookingForm}
                >
                  &times;
                </span>
                <Booking />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newspaper;
