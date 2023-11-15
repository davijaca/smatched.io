import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      {/*<div className={styles.footerContainer}>*/}
      <div className={styles.footerName}>
        <div
          className={styles.backgroundImage}
          style={{ backgroundImage: 'url(./footer_bg.png)' }}
        >
          <div className={styles.footerInfo}>
            <div className={styles.innerFooterInfo}>
              <div className={styles.TopFooterInfo}>
                <div className={styles.rightFooterInfo}>
                  <div className={styles.imgValuable}>
                    <img
                      className={styles.footerLogo}
                      src='./header_logo.png'
                      alt=''
                    />
                    <div className={styles.offerwallBox}>
                      <span className={styles.offerwall}>offerwall</span>
                      <br />
                      <span className={styles.monetization}>monetization</span>
                    </div>
                  </div>
                  <div className={styles.valuable}>
                    <span> A Valuable Tool for Monetizing Mobile Games </span>
                  </div>
                </div>

                <div className={styles.leftFooterInfo}>
                  <div className={styles.info}>
                    <div className={styles.rightInfo}>
                      <span>FAQs</span>
                      <a href="/#/blog">BLOG</a>
                      <span>PARTNERSHIPS</span>
                      <span>PRIVACY POLICY</span>
                    </div>
                  </div>

                  <div className={styles.leftInfo}>
                    <img src='./lnkdn.svg' />
                  </div>
                </div>
              </div>

              <div className={styles.footerDivider}>
                <hr />
              </div>

              <div className={styles.downFooterInfo}>
                <span>
                  {' '}
                  © Copyright 2023 Offerwall Monetization. All Rights Reserved.{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
