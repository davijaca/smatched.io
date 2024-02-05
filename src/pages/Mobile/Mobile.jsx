import React from 'react';
import styles from './Mobile.module.css';
import { Link } from 'react-router-dom';

const Mobile = () => {
  return (
    <div className={styles.pageMobileContainer}>
      {/* First Mobile page - desktop */}

      {/* First Mobile page - mobile responsiveness */}
      {/* testing */}

      <div className={styles.mobileFirstPageMobileContainer}>
        <div className={styles.mobileFirstContainerBg}>
          <div className={styles.firstMobileImage}>
            <img src='./images/mobile_sec1_mobile.png' alt='Two smartphones' />
          </div>
          <div className={styles.firstMobileContent}>
            <h1>
              <span className={styles.firstSpanBold}>Mobile app</span>
              monetization.
            </h1>
            <p>
              Only around 10% of users remain active 1 week after installation,
              offering users more choice is crucial for generating revenue.
            </p>
            <p>
              One popular approach is leveraging mobile offerwalls, which
              provide present users with a variety of offers, surveys or app
              testing opportunities in exchange for access to premium content,
              vouchers or rewards.
            </p>
            <Link className={styles.firstMobileButton} to=''>
              <div className={styles.firstMobileButtonText}>BOOK A DEMO</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Mobile page - desktop */}
      {/* Second Mobile page - mobile responsiveness */}

      {/* Third Mobile page - desktop */}
      {/* Third Mobile page - mobile responsiveness */}

      {/* Fourth Mobile page - desktop */}
      {/* Fourth Mobile page - mobile responsiveness */}
    </div>
  );
};

export default Mobile;
