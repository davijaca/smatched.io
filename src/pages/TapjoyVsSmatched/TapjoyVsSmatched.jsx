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

      <div className={styles.mobileSecondTapjoyVsSmatchedContainer}></div>

      {/* Third Pros and Cons */}

      <div className={styles.thirdTapjoyVsSmatchedContainer}></div>

      {/* Third Pros and Cons mobile Responsiveness */}

      <div className={styles.mobileThirdTapjoyVsSmatchedContainer}></div>

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
