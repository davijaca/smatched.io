import React from 'react';
import styles from './TapjoyVsSmatched.module.css';

const TapjoyVsSmatched = () => {
  return (
    <div className={styles.tapjoyVsSmatchedContainer}>
      {/* First TapjoyVsSmatched */}

      <div className={styles.firstTapjoyVsSmatchedContainer}>
        <div className={styles.containerToMatchDesign}></div>
      </div>

      {/* First TapjoyVsSmatched mobile responsiveness */}

      <div className={styles.mobileFirstTapjoyVsSmatchedContainer}>
        <div className={styles.firstMobileTopImage}>
          <img src='./images/tapVsSmat_sec1.png' alt='Two smartphones' />
        </div>
        <div className={styles.firstMobileBottom}>
          <h1>Tapjoy vs. Smatched: A Comprehensive Comparison in 2023</h1>
          <p>
            Explore the benefits of Tapjoy Offerwall and its comparison with
            Smatched in 2023. Learn how Tapjoy operates and discover Smatched as
            a potential alternative. Get insights into their features, pros and
            cons, pricing, and make an informed choice.
          </p>
        </div>
      </div>

      {/* Second Tapjoy */}

      <div className={styles.secondTapjoyVsSmatchedContainer}></div>

      {/* Second Tapjoy mobile responsiveness */}

      <div className={styles.mobileSecondTapjoyVsSmatchedContainer}>
        <div className={styles.secondMobileTopImage}>
          <img src='./images/tapVsSmat_sec2_mobile.png' alt='A smartphone' />
        </div>
        <div className={styles.secondMobileBottom}>
          <h2>What Is Tapjoy and How Does It Work?</h2>
          <p>
            Tapjoy is a versatile advertising and monetization platform designed
            to assist mobile app developers in effectively monetizing their user
            base, especially those who may not typically make in-app purchases.
            Central to Tapjoy's approach is its offer wall solution, which
            presents users with a curated selection of tasks in exchange for
            virtual currencies. These virtual currencies can later be redeemed
            for premium in-app content. Additionally, Tapjoy excels in
            distributing applications seamlessly and capturing real-time data
            for strategic advertising campaigns.
          </p>
        </div>
      </div>

      {/* Third Pros and Cons */}

      <div className={styles.thirdTapjoyVsSmatchedContainer}></div>

      {/* Third Pros and Cons mobile Responsiveness */}

      <div className={styles.mobileThirdTapjoyVsSmatchedContainer}>
        <div className={styles.thirdMobileCardGreen}>
          <h2 className={styles.thirdMobileTitle}>
            <span className={styles.thirdMobileSpanGreen}>Pros </span>of Using
            Tapjoy
          </h2>
          <ul className={styles.thirdMobileList}>
            <li className={styles.thirdMobileListItem}>
              <span className={styles.thirdMobileSpanBold}>Ad Variety: </span>
              Tapjoy offers a wide range of ad types, including full-page
              integrated ads, banners, videos, and direct responses.
            </li>
            <li className={styles.thirdMobileListItem}>
              <span className={styles.thirdMobileSpanBold}>
                Diverse App Portfolio:{' '}
              </span>
              As part of Iron Source, Tapjoy provides access to a vast array of
              apps for in-app rewards and content.
            </li>
            <li className={styles.thirdMobileListItem}>
              <span className={styles.thirdMobileSpanBold}>
                Fast Feedback:{' '}
              </span>
              Real-time reporting facilitates better insights into user
              engagement and app performance.
            </li>
          </ul>
        </div>
        <div className={styles.thirdMobileCardRed}>
          <h2 className={styles.thirdMobileTitle}>
            <span className={styles.thirdMobileSpanRed}>Cons </span>of Using
            Tapjoy
          </h2>
          <ul className={styles.thirdMobileList}>
            <li className={styles.thirdMobileListItem}>
              <span className={styles.thirdMobileSpanBold}>
                Unsatisfactory Customer Support:{' '}
              </span>
              Some users have reported issues with missing rewards and
              registration problems, leading to negative reviews.
            </li>
            <li className={styles.thirdMobileListItem}>
              <span className={styles.thirdMobileSpanBold}>
                Confusing Branding:{' '}
              </span>
              Tapjoy's marketing targets both customers and users, resulting in
              unclear branding and messaging.
            </li>
            <li className={styles.thirdMobileListItem}>
              <span className={styles.thirdMobileSpanBold}>
                User Security Concerns:{' '}
              </span>
              Certain Tapjoy apps have been flagged as unsafe by consumer
              protection agencies due to user data tracking and deceptive
              practices.
            </li>
          </ul>
        </div>
      </div>

      {/* Fourth Smatched */}

      <div className={styles.fourthTapjoyVsSmatchedContainer}></div>

      {/* Fourth Smatched mobile Responsiveness */}

      <div className={styles.mobileFourthTapjoyVsSmatchedContainer}></div>

      {/* Fifth Offering cards */}

      <div className={styles.fifthTapjoyVsSmatchedContainer}></div>

      {/* Fifth Offering cards mobile Responsiveness */}

      <div className={styles.mobileFifthTapjoyVsSmatchedContainer}></div>

      {/* Sixth Conclusion */}

      <div className={styles.sixthTapjoyVsSmatchedContainer}></div>

      {/* Sixth Conclusion mobile Responsiveness */}

      <div className={styles.mobileSixthTapjoyVsSmatchedContainer}></div>
    </div>
  );
};

export default TapjoyVsSmatched;
