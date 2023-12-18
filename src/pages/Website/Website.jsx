import React from 'react';
import styles from './Website.module.css';

const Website = () => {
  return (
    <div className={styles.websiteContainer}>
      {/* First Website */}

      <div className={styles.firstWebsiteContainer}>
        <div className={styles.firstLeft}>
          <h1 className={styles.text}>Revolutionizing</h1>
          <h2 className={styles.text2}>
            website
            <br />
            monetization.
          </h2>
          <div className={styles.parag}>
            <div className={styles.innerParag}>
              Give players more choice when it comes to monetization. While
              gaming payment gateways are a necessary evil for many gaming
              companies, many gamers are not willing to pay for games upfront.
            </div>
          </div>
          <div className={styles.buttonText}>
            <div className={styles.buttonText1}>BOOK A DEMO</div>
          </div>
        </div>
        <div className={styles.firstRight}>
          <img
            className={styles.rigthImg}
            src='./images/website_top.png'
            alt='A monitor and a laptop screen'
          />
        </div>
      </div>

      {/* First Website mobile responsiveness */}

      <div className={styles.mobileFirstWebsiteContainer}>
        <div className={styles.mobileTopFirstBg}>
          <div className={styles.firstMobile}>
            <div className={styles.firstRightMobile}>
              <img
                className={styles.rigthImg}
                src='./images/website_top.png'
                alt='A monitor and a laptop screen'
              />
            </div>
            <div className={styles.firstLeftMobile}>
              <h1 className={styles.textMobile}>Revolutionizing</h1>
              <h2 className={styles.text2Mobile}>
                website
                <br />
                monetization.
              </h2>
              <div className={styles.paragMobile}>
                <div className={styles.innerParagMobile}>
                  Give players more choice when it comes to monetization. While
                  gaming payment gateways are a necessary evil for many gaming
                  companies, many gamers are not willing to pay for games
                  upfront.
                </div>
              </div>
              <div className={styles.buttonTextMobile}>
                <div className={styles.buttonText1Mobile}>BOOK A DEMO</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Website */}

      <div className={styles.secondWebsiteContainer}>
        <div className={styles.secondWebsiteContainerBox1}>
          <h3 className={styles.secondLeft}>
            How to monetize Web Traffic more effectively with Smatched?
          </h3>
          <p className={styles.secondRight}>
            Our platform is the answer for users who have low willingness to pay
            upfront, providing them with an opportunity to earn their way to
            valuable content without the need for credit cards while you still
            make money from website traffic.
          </p>
        </div>

        <div className={styles.imageSec2Bow}>
          <img src='./images/website_sec2_bow.png' alt='' />
        </div>

        <div className={styles.secondWebsiteContainerBox2}>
          <div className={styles.secondWebsiteContainerBox2Content}>
            <img
              className={styles.imageSec2}
              src='./images/website_sec2_1.png'
              alt=''
            />
            <p className={styles.textImgSec2}>
              Smatched offers a solution that empowers users to access your
              premium content by completing surveys and sharing their opinions.
            </p>
          </div>
          <div className={styles.secondWebsiteContainerBox2Content}>
            <img
              className={styles.imageSec2}
              src='./images/website_sec2_2.png'
              alt=''
            />
            <p className={styles.textImgSec2}>
              Users receive rewards, vouchers, tokens and exclusive access to
              your premium content, in return
            </p>
          </div>
        </div>
      </div>

      {/*Second Website mobile responsiveness*/}

      <div className={styles.mobileSecondWebsiteContainer}>
        <div className={styles.secondWebsiteContainerBox1Mobile}>
          <h3 className={styles.secondLeftMobile}>
            How to monetize Web Traffic more effectively with Smatched?
          </h3>
          <p className={styles.secondRightMobile}>
            Our platform is the answer for users who have low willingness to pay
            upfront, providing them with an opportunity to earn their way to
            valuable content without the need for credit cards while you still
            make money from website traffic.
          </p>
        </div>

        <div className={styles.secondWebsiteContainerBox2Mobile}>
          <div className={styles.secondWebsiteContainerBox2ContentMobile}>
            <img
              className={styles.imageSec2Mobile}
              src='./images/website_sec2_1.png'
              alt=''
            />
            <p className={styles.textImgSec2Mobile}>
              Smatched offers a solution that empowers users to access your
              premium content by completing surveys and sharing their opinions.
            </p>
          </div>

          <div>
            <img
              className={styles.imageSec2BowMobile}
              src='./images/website_sec2_bow_mobile.png'
              alt=''
            />
          </div>

          <div className={styles.secondWebsiteContainerBox2ContentMobile}>
            <img
              className={styles.imageSec2Mobile}
              src='./images/website_sec2_2.png'
              alt=''
            />
            <p className={styles.textImgSec2Mobile}>
              Users receive rewards, vouchers, tokens and exclusive access to
              your premium content, in return.
            </p>
          </div>
        </div>
      </div>

      {/* Third Website */}

      <div className={styles.thirdWebsiteContainer}>
        <div className={styles.thirdLeft}>
          <img
            className={styles.imageSec3Monitor}
            src='./images/website_sec3_monitor.png'
            alt='A monitor'
          />
          <div className={styles.imageSec3Screen}>
            <img src='./images/website_sec3_screen.png' alt='A screen game' />
          </div>
        </div>
        <div className={styles.thirdRight}>
          <h3 className={styles.titleSec3}>
            Why choose Smatched for Website Monetization?
          </h3>
          <p className={styles.textSec3}>
            We don’t interrupt your existing business model — we complement it.
            Smatched seamlessly integrates with your monetization strategy,
            offering an additional avenue for revenue generation.
          </p>
          <p className={styles.textSec3}>
            With our innovative approach, you can engage a broader audience,
            unlock new streams of revenue and enhance user satisfaction.
          </p>
        </div>
      </div>

      {/*Third Website mobile Responsiveness*/}

      {/* <div className={styles.thirdWebsiteContainer}>
        <div className={styles.thirdLeft}>
          <img
            className={styles.imageSec3Monitor}
            src='./images/website_sec3_monitor.png'
            alt='A monitor'
          />
          <div className={styles.imageSec3Screen}>
            <img src='./images/website_sec3_screen.png' alt='A screen game' />
          </div>
        </div>
        <div className={styles.thirdRight}>
          <h3 className={styles.titleSec3}>
            Why choose Smatched for Website Monetization?
          </h3>
          <p className={styles.textSec3}>
            We don’t interrupt your existing business model — we complement it.
            Smatched seamlessly integrates with your monetization strategy,
            offering an additional avenue for revenue generation.
          </p>
          <p className={styles.textSec3}>
            With our innovative approach, you can engage a broader audience,
            unlock new streams of revenue and enhance user satisfaction.
          </p>
        </div>
      </div> */}

      {/* Fourth Website */}

      <div className={styles.fourthWebsiteContainer}>
        <div className={styles.fourthLeft}>
          <h3 className={styles.titleSec4}>
            Discover the best offerwall Website Solution
          </h3>
          <p className={styles.textSec4}>
            We build custom web-apps for our clients that build directly into
            their website architecture and integrate seamlessly into their
            current monetization approach.
          </p>
          <p className={styles.textSec4}>
            You can seamlessly incorporate a way for your users to earn their
            way past your paywalls by answering surveys or testing apps on our
            customized offerwall.
          </p>
          <div className={styles.buttonSec4}>
            <div>BOOK A DEMO</div>
          </div>
        </div>
        <div className={styles.fourthRight}>
          <img
            src='./images/website_sec4.png'
            alt='A graph with an arrow to the top '
          />
        </div>
      </div>

      {/*Fourth Website mobile Responsiveness*/}

      <div className={styles.mobileFourthWebsiteContainer}>
        <div className={styles.fourthRightMobile}>
          <img
            src='./images/website_sec4.png'
            alt='A graph with an arrow to the top '
          />
        </div>
        <div className={styles.fourthLeftMobile}>
          <h3 className={styles.titleSec4Mobile}>
            Discover the best offerwall Website Solution
          </h3>
          <p className={styles.textSec4Mobile}>
            We build custom web-apps for our clients that build directly into
            their website architecture and integrate seamlessly into their
            current monetization approach.
          </p>
          <p className={styles.textSec4Mobile}>
            You can seamlessly incorporate a way for your users to earn their
            way past your paywalls by answering surveys or testing apps on our
            customized offerwall.
          </p>
          <div className={styles.buttonSec4Mobile}>
            <div>BOOK A DEMO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
