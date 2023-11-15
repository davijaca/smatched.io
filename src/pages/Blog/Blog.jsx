import React, {useState} from "react";
import styles from "./Blog.module.css";
import {Link, useNavigate} from "react-router-dom";
import {db} from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";



/* Code generated with AutoHTML Plugin for Figma */


const Blog = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");


    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const handleClickBlog = () => {
        if (search) {
            navigate("/blogarticle")
        }
    };

    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (input){
            //add to firebase
            await addDoc(collection(db, "emails"), {
                email: input,
                time: serverTimestamp(),
            });
            setInput("");
            setMessage("Thank you for signing up to our news")
            setTimeout(()=> {
                setMessage("");
            }, 3000);
        }

        };


    return (
        <div className={styles.blogMain}>
            <div className={styles.webResponsiveMainBlog}>

                <div className={styles.blogBgImage} style={{backgroundImage: "url(./blog_top_Bg.png)"}}>
                    <div className={styles.firstRight}>
                        <div className={styles.firstRight1}>

                            <div className={styles.exploreBlog}>
                                <div>Explore our </div>&nbsp;
                                <div className={styles.blogE}> blog.</div>
                            </div>

                            <div className={styles.expertTips}>
                                Explore our blog for expert tips, success stories,
                                and industry updates on maximizing your earnings through
                                offerwall monetisation.
                            </div>

                            <div className={styles.searchLayout}>
                                <div className={styles.search}>
                                    {/*<div className={styles.searchBox}> Search blog</div>*/}
                                    {/*<img src="./search.png" alt=""/>*/}

                                    <input type="text" className={styles.searchBox}
                                    placeholder="Search blog" onChange={searchHandler} value={search}/>
                                    <img src="./search.png" alt="" onClick={handleClickBlog}/>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className={styles.firstLeft}>
                        <div className={styles.firstLeft1}>

                            <div className={styles.signUpNews}>
                                Sign Up for Newsletter
                            </div>

                            <div className={styles.expertTips2}>
                                Sign up for our newsletter to receive
                                exclusive updates and the latest news delivered
                                directly to your inbox.
                            </div>

                            <form onSubmit={submitHandler}>
                                <div className={styles.searchLayoutEmail}>
                                    <div className={styles.yourEmail}>Your-Email</div>
                                        <div className={styles.searchEmail}>
                                            <input className={styles.inputE} type="email"
                                            onChange={inputHandler} value={input}/>
                                        </div>
                                    {message && <div className={styles.alertMessage}> {message} </div>}
                                </div>
                                <div className={styles.signUpE}>
                                    <button type="submit" className={styles.signUpEmail}>
                                        Sign Up
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>



                <div className={styles.blogSecondContainer}>


                    <div className={styles.secondBlog}>
                        <div className={styles.subSecondBlog}>
                            <div className={styles.recentArticle}>
                                Recent Article
                            </div>

                            <div className={styles.unlockingProfit}>
                                Unlocking Profit Potential: The Power of Offerwall
                                Monetization in Mobile Apps
                            </div>

                            <div className={styles.dateTimeManyGames1}>
                                <div className={styles.dateTime1}>
                                    <div>July 19 2023</div>
                                    <div className={styles.imgTime1}>
                                        <img src="./TimeBlog.png"  alt=""/>
                                        <div className={styles.minRead1}>8 min read</div>
                                    </div>
                                </div>

                                <div className={styles.manyGames}>Many game developers struggle with understanding
                                    the best way to monetize a mobile game, resorting
                                    to flooding their users with ads that interrupt the
                                    user experience and cause their users to write negative
                                    reviews.
                                </div>
                            </div>

                            <div className={styles.signUpE2}>
                                <div className={styles.subSignUpE2}>
                                    <Link style={{ textDecoration: 'none'}} to={"/blogarticle"}>
                                        <div className={styles.signUpEmail2}>
                                            Read More
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>



                <div className={styles.blogThirdContainer}>

                    <div className={styles.innerThirdBoxContainer}>
                        <div className={styles.innerThird1}>
                            <span className={styles.innerThirdBlog}>Browse</span>
                            <span className={styles.innerThirdArticles}>All articles</span>
                        </div>

                        <div className={styles.innerThird2}>
                            <div className={styles.thirdRight}>
                                <div className={styles.topRightThird}>
                                    <img src="./img000012.png" alt=""/>
                                </div>
                                <div className={styles.belowRightThird}>
                                    <div className={styles.innerBelowRightThird}>
                                        <div className={styles.exploring}>
                                            Exploring Offerwall Solutions for
                                            Monetization and Retention: a Comparative
                                            Analysis
                                        </div>
                                        <div className={styles.dateTime}>
                                            <div>July 19 2023</div>
                                            <div className={styles.imgTime}>
                                                <img src="./Time.png"  alt=""/>
                                                <div className={styles.minRead}>8 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.readMoreExplore}>
                                        <Link style={{ textDecoration: 'none'}} to={"/blogarticle"}>
                                            <div className={styles.readMoreButton}>
                                                Read More
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.thirdLeft}>
                                <div className={styles.topLeftThird}>
                                    <img src="./img0002.png" alt=""/>
                                    <div className={styles.topLeftThirdBox1}>

                                        <div className={styles.mastering}>
                                            Mastering Offerwall Monetisation: <br />
                                            Strategies to Boost Your Earnings
                                        </div>

                                        <div className={styles.leftDateTime}>
                                            <div>July 19 2023</div>
                                            <div className={styles.leftImgTime}>
                                                <img src="./Time.png"  alt=""/>
                                                <div className={styles.minRead}>8 min read</div>
                                            </div>
                                        </div>

                                        <div className={styles.LeftReadMoreExplore}>
                                            <Link style={{ textDecoration: 'none'}} to={"/blogarticle"}>
                                                <div className={styles.readMoreButton}>
                                                    Read More
                                                </div>
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                                <div className={styles.belowLeftThird}>
                                    <img src="./img0003.png" alt=""/>
                                    <div className={styles.topLeftThirdBox1}>

                                        <div className={styles.mastering}>
                                            Behind the Scenes: How Advertisers <br />
                                            Create Irresistible Offerwall Campaigns
                                        </div>

                                        <div className={styles.leftDateTime}>
                                            <div>July 19 2023</div>
                                            <div className={styles.leftImgTime}>
                                                <img src="./Time.png"  alt=""/>
                                                <div className={styles.minRead}>8 min read</div>
                                            </div>
                                        </div>

                                        <div className={styles.LeftReadMoreExplore}>
                                            <Link style={{ textDecoration: 'none'}} to={"/blogarticle"}>
                                                <div className={styles.readMoreButton}>
                                                    Read More
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <form onSubmit={submitHandler}>
                    <div className={styles.blogFourthContainer}>

                        <div className={styles.ToplogFourthContainer}>
                            <div className={styles.blogFourthBox1}>
                                <div className={styles.innerBlogFourthBox1}>
                                    <div className={styles.blogSignUpNews}>
                                        <div>Sign Up for</div> &nbsp;
                                        <div className={styles.newsLetter}>Newsletter</div>
                                    </div>

                                    <div className={styles.blogExpertTipsBox}>
                                        <div className={styles.blogExpertTips}>
                                            Sign up for our newsletter to receive exclusive updates
                                            and the latest news delivered directly to your inbox.
                                        </div>
                                    </div>

                                    <div className={styles.blogNewsImageBox}>
                                        <div className={styles.innerBlogNewsImageBox}>
                                            <img src="./blogDownBtn.png" alt=""/>
                                            <button type="submit" className={styles.blogSignUpnews}>Sign Up</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.blogFourthBox2}>
                                <div className={styles.searchLayoutEmail3}>
                                    <div className={styles.yourEmail3}>Your-Email</div>
                                    <div className={styles.searchEmail3}>
                                        <input className={styles.inputE3} onChange={inputHandler} value={input} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.lowerBlogFourthContainer}>
                            {message && <div className={styles.secondAlertMessage}> {message} </div>}
                        </div>

                    </div>
                </form>

            </div>




            {/*MOBILE RESPONSIVENESS*/}
            <div className={styles.mobileResponsiveMainBlog}>
                <div className={styles.FirstMobileBg} style={{
                    backgroundImage: "url(./home_Mobile_background.png)"}}>

                    <div className={styles.mobileBgBox}>
                        <div className={styles.innerMobileBgBox}>
                            <div className={styles.mobileExploreBlog}>
                                <div>Explore our</div>&nbsp;
                                <div className={styles.mobileBlogg}>blog</div>
                            </div>

                            <div className={styles.mobileExpertTips}>
                                Explore our blog for expert tips, success stories,
                                and industry updates on maximizing your earnings
                                through offerwall monetisation.
                            </div>

                            <div className={styles.mobileSearch}>
                                <div className={styles.innerMobileSearch}>
                                    <input type="text" className={styles.mobileSearchContainer}
                                           placeholder="Search blog" onChange={searchHandler} value={search} />
                                    <img src="./search.png" alt=""  onClick={handleClickBlog}/>
                                </div>
                            </div>

                            <div className={styles.mobileSignUpNews}>
                                Sign Up for Newsletter
                            </div>

                            <div className={styles.mobileSignUpNewsLetter}>
                                Sign up for our newsletter to receive exclusive
                                updates and the latest news delivered directly
                                to your inbox.
                            </div>

                            <form onSubmit={submitHandler}>
                                <div className={styles.mobileSearchLayoutEmail}>
                                    <div className={styles.mobileYourEmail}>Your-Email</div>
                                    <div className={styles.mobileSearchEmail}>
                                        <input className={styles.inputE} type="email"
                                           onChange={inputHandler} value={input}/>
                                    </div>
                                    {message && <div className={styles.mobileAlertMessage}> {message} </div>}
                                </div>

                                <div className={styles.mobileSignUpE}>
                                    <button type="submit" className={styles.mobileSignUpEmail}>
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>



                <div className={styles.secondMobileSection}>
                    <div className={styles.secondMobileBg}>

                        <div className={styles.secondMobileBgBox}>
                            <div className={styles.mobileRecentArticle}> Recent article </div>
                            <div className={styles.mobileUnlocking}>
                                Unlocking Profit Potential: The Power of Offerwall Monetization in Mobile Apps
                            </div>

                            <div className={styles.mobileDateTime}>
                                <div>July 19 2023</div>
                                <div className={styles.mobileImgTime}>
                                    <img src="./mobileTime.png"  alt=""/>
                                    <div className={styles.mobileMinRead}>8 min read</div>
                                </div>
                            </div>

                            <div className={styles.mobileManyDevelopers}>
                                Many game developers struggle with understanding the best way to monetize a mobile game,
                                resorting to flooding their users with ads that interrupt the user experience and cause their users to write negative reviews.
                            </div>

                            <div className={styles.mobileSignUpE}>
                                <Link style={{ textDecoration: 'none'}} to={"/blogarticle"}>
                                    <div className={styles.mobileSignUpEmail}>
                                        Read More
                                    </div>
                                </Link>
                            </div>


                        </div>

                    </div>
                </div>

                <div className={styles.thirdMobileSection}>
                    <div className={styles.thirdMobileBox1}>
                        <div className={styles.mobileBlog}>Blog</div>
                        <div className={styles.mobileArticles}>All Articles</div>
                    </div>

                    <div className={styles.thirdMobileBox2}>
                        <div className={styles.innerThirdMobileBox2}>
                            <img src="./mobile_blog_image1.png" alt="" />

                            <div className={styles.innerThirdMobileBox2Container}>
                                <div className={styles.thirdMobileBox2Explore}>
                                    Exploring Offerwall Solutions for Monetization and
                                    Retention: a Comparative Analysis
                                </div>

                                <div className={styles.mobileDateTime2}>
                                    <div>July 19 2023</div>
                                    <div className={styles.mobileImgTime2}>
                                        <img src="./mobileTime2.png"  alt=""/>
                                        <div className={styles.mobileMinRead2}>8 min read</div>
                                    </div>
                                </div>

                                <div className={styles.mobileSignUpE2}>
                                    <Link style={{ textDecoration: 'none'}} to={"/blogarticle"}>
                                        <div className={styles.mobileSignUpEmail2}>
                                            Read More
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.thirdMobileBox3}>
                        <div className={styles.innerThirdMobileBox3}>
                            <img src="./mobile_blog_image2.png" alt="" />

                            <div className={styles.innerThirdMobileBox2SecondContainer}>
                                <div className={styles.thirdMobileBox2Explore}>
                                    Mastering Offerwall Monetization: Strategies to boost your earnings
                                </div>

                                <div className={styles.mobileDateTime3}>
                                    <div>July 19 2023</div>
                                    <div className={styles.mobileImgTime2}>
                                        <img src="./mobileTime2.png"  alt=""/>
                                        <div className={styles.mobileMinRead2}>8 min read</div>
                                    </div>
                                </div>

                                <div className={styles.mobileSignUpE2}>
                                    <Link style={{ textDecoration: 'none'}} to={"/blogarticle"}>
                                        <div className={styles.mobileSignUpEmail2Second}>
                                            Read More
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.thirdMobileBox4}>
                        <div className={styles.innerThirdMobileBox4}>
                            <img src="./mobile_blog_image3.png" alt="" />

                            <div className={styles.innerThirdMobileBox2thirdContainer}>
                                <div className={styles.thirdMobileBox2Explore}>
                                    Behind the Scenes: How Advertisers create irresistible Offerwall Campaigns
                                </div>

                                <div className={styles.mobileDateTime4}>
                                    <div>July 19 2023</div>
                                    <div className={styles.mobileImgTime2}>
                                        <img src="./mobileTime2.png"  alt=""/>
                                        <div className={styles.mobileMinRead2}>8 min read</div>
                                    </div>
                                </div>

                                <div className={styles.mobileSignUpE2}>
                                    <Link style={{ textDecoration: 'none'}} to={"/blogarticle"}>
                                        <div className={styles.mobileSignUpEmail2Third}>
                                            Read More
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <form onSubmit={submitHandler}>
                <div className={styles.fourthMobileSection}>
                    <div className={styles.mobileBlogSignUpNews}>
                        <div>Sign Up for</div> &nbsp;
                        <div className={styles.mobileNewsLetter}>Newsletter</div>
                    </div >

                    <div className={styles.fourthMobileSignUp}>
                        Sign up for our newsletter to receive exclusive updates and the
                        latest news delivered directly to your inbox.
                    </div>

                    <div className={styles.mobileSearchLayoutEmail}>
                        <div className={styles.mobileYourEmail}>Your-Email</div>
                        <div className={styles.mobileSearchEmail}>
                            <input className={styles.inputE} onChange={inputHandler} value={input} />
                        </div>
                    </div>

                    <div className={styles.mobileBlogNewsImageBox}>
                        <div className={styles.innerMobileBlogNewsImageBox}>
                            <img src="./blogDownBtn.png" alt=""/>
                            <button type="submit" className={styles.blogSignUpnews}>Sign Up</button>
                        </div>
                    </div>
                    {message && <div className={styles.mobileAlertMessage}> {message} </div>}
                </div>
            </form>

        </div>








    )
}


    {/*// <div className={styles["blog"]}>*/}
    {/*//   <div className={styles["section-4"]}>*/}
    {/*//     <div className={styles["section-4-background"]}></div>*/}
    {/*//     <div className={styles["sign-up-box"]}></div>*/}
    {/*//     <div className={styles["your-e-mail"]}>Your E-mail </div>*/}
    {/*//     <div*/}
    {/*//       className={*/}
    {/*//         styles[*/}
    {/*//           "sign-up-for-our-newsletter-to-receive-exclusive-updates-and-the-latest-news-delivered-directly-to-your-inbox"*/}
    {/*//         ]*/}
    {/*//       }*/}
    {/*//     >*/}
    {/*//       Sign up for our newsletter to receive exclusive updates and the latest*/}
    {/*//       news delivered directly to your inbox.{" "}*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["sign-up-for-newsletter"]}>*/}
    {/*//       <span>*/}
    {/*//         <span className={styles["sign-up-for-newsletter-span"]}>*/}
    {/*//           Sign Up for{" "}*/}
    {/*//         </span>*/}
    {/*//         <span className={styles["sign-up-for-newsletter-span2"]}>*/}
    {/*//           Newsletter*/}
    {/*//         </span>*/}
    {/*//       </span>{" "}*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["sign-up"]}>sign up </div>*/}
    {/*//     <div className={styles["sign-up-button"]}>*/}
    {/*//       <div className={styles["rectangle-1173"]}></div>*/}
    {/*//       <svg*/}
    {/*//         className={styles["next"]}*/}
    {/*//         width="78"*/}
    {/*//         height="78"*/}
    {/*//         viewBox="0 0 78 78"*/}
    {/*//         fill="none"*/}
    {/*//         xmlns="http://www.w3.org/2000/svg"*/}
    {/*//       >*/}
    {/*//         <path*/}
    {/*//           d="M40.546 74.5416L43.9357 71.1519L52.0252 63.0625L61.8513 53.2363L70.2988 44.7888C71.6699 43.4177 73.0638 42.0695 74.4121 40.6755L74.473 40.6146C75.349 39.7386 75.349 38.2609 74.473 37.3849L71.0834 33.9953L62.9939 25.9058L53.1677 16.0796L44.7203 7.63218C43.3492 6.26109 42.0009 4.86714 40.607 3.5189L40.546 3.45796C39.7005 2.61245 38.1466 2.55152 37.3164 3.45796C36.4785 4.37202 36.4099 5.78882 37.3164 6.68765L40.706 10.0773L48.7955 18.1668L58.6216 27.9929L67.0691 36.4404C68.4402 37.8115 69.7808 39.213 71.1824 40.5537L71.2433 40.6146V37.3849L67.8537 40.7746L59.7642 48.864L49.938 58.6902L41.4906 67.1377C40.1195 68.5088 38.7255 69.857 37.3773 71.2509L37.3164 71.3119C36.4709 72.1574 36.4099 73.7113 37.3164 74.5416C38.2228 75.3794 39.6396 75.448 40.546 74.5416Z"*/}
    {/*//           fill="#1E1E1E"*/}
    {/*//         />*/}
    {/*//         <path*/}
    {/*//           d="M72.8738 36.7148H7.88392C7.00795 36.7148 6.12435 36.7072 5.24838 36.7148H5.13412C3.93822 36.7148 2.79564 37.766 2.84896 39C2.90228 40.2416 3.85443 41.2851 5.13412 41.2851H70.124C70.9999 41.2851 71.8835 41.2927 72.7595 41.2851H72.8738C74.0697 41.2851 75.2122 40.234 75.1589 39C75.098 37.7584 74.1535 36.7148 72.8738 36.7148Z"*/}
    {/*//           fill="#1E1E1E"*/}
    {/*//         />*/}
    {/*//       </svg>*/}
    {/*//     </div>*/}
    {/*//   </div>*/}
    {/*//   <div className={styles["hero"]}>*/}
    {/*//     <svg*/}
    {/*//       className={styles["hero-background"]}*/}
    {/*//       width="1512"*/}
    {/*//       height="982"*/}
    {/*//       viewBox="0 0 1512 982"*/}
    {/*//       fill="none"*/}
    {/*//       xmlns="http://www.w3.org/2000/svg"*/}
    {/*//     >*/}
    {/*//       <rect*/}
    {/*//         y="1"*/}
    {/*//         width="913"*/}
    {/*//         height="981"*/}
    {/*//         fill="url(#paint0_linear_531_277)"*/}
    {/*//       />*/}
    {/*//       <path*/}
    {/*//         d="M734.61 0L1512 0.000202033V982L756.5 982C756.5 982 756.5 982 754.343 920.211C746.046 682.58 925.957 601.888 873.781 428.108C835.354 300.117 661.908 205.778 734.61 0Z"*/}
    {/*//         fill="url(#paint1_angular_531_277)"*/}
    {/*//       />*/}
    {/*//       <path*/}
    {/*//         opacity="0.2"*/}
    {/*//         d="M766.46 0H1512V982H766.5C783.497 770.731 931.133 688.026 882.612 521.647C846.578 398.088 690.16 305.418 736.51 117C738.905 107.262 762.937 10.2674 766.46 0Z"*/}
    {/*//         fill="url(#paint2_angular_531_277)"*/}
    {/*//       />*/}
    {/*//       <path*/}
    {/*//         opacity="0.2"*/}
    {/*//         d="M788.157 0H1512V982H774.5C774.5 982 774.5 953.288 774.5 891.5C774.5 653.724 867.675 612.28 815.5 438.5C777.072 310.509 725.547 207.5 788.157 0Z"*/}
    {/*//         fill="url(#paint3_angular_531_277)"*/}
    {/*//       />*/}
    {/*//       <defs>*/}
    {/*//         <linearGradient*/}
    {/*//           id="paint0_linear_531_277"*/}
    {/*//           x1="456.5"*/}
    {/*//           y1="1"*/}
    {/*//           x2="456.5"*/}
    {/*//           y2="982"*/}
    {/*//           gradientUnits="userSpaceOnUse"*/}
    {/*//         >*/}
    {/*//           <stop stopColor="#5B56BD" />*/}
    {/*//           <stop offset="0.449335" stopColor="#293285" />*/}
    {/*//           <stop offset="1" stopColor="#0A004A" />*/}
    {/*//         </linearGradient>*/}
    {/*//         <radialGradient*/}
    {/*//           id="paint1_angular_531_277"*/}
    {/*//           cx="0"*/}
    {/*//           cy="0"*/}
    {/*//           r="1"*/}
    {/*//           gradientUnits="userSpaceOnUse"*/}
    {/*//           gradientTransform="translate(1209.5 844) rotate(-65.9527) scale(721.835 636.453)"*/}
    {/*//         >*/}
    {/*//           <stop offset="0.00338471" stopColor="#28B4A7" />*/}
    {/*//           <stop offset="0.143554" stopColor="#0549E3" />*/}
    {/*//           <stop offset="0.672994" stopColor="#370DAE" />*/}
    {/*//           <stop offset="0.863652" stopColor="#4D71B8" />*/}
    {/*//         </radialGradient>*/}
    {/*//         <radialGradient*/}
    {/*//           id="paint2_angular_531_277"*/}
    {/*//           cx="0"*/}
    {/*//           cy="0"*/}
    {/*//           r="1"*/}
    {/*//           gradientUnits="userSpaceOnUse"*/}
    {/*//           gradientTransform="translate(1276.5 818.5) rotate(-67.3221) scale(589.434 509.07)"*/}
    {/*//         >*/}
    {/*//           <stop offset="0.111924" stopColor="#4981FF" />*/}
    {/*//           <stop offset="0.632206" stopColor="#5528D8" />*/}
    {/*//           <stop offset="0.809809" stopColor="#4D71B8" />*/}
    {/*//           <stop offset="1" stopColor="#28B4A7" />*/}
    {/*//         </radialGradient>*/}
    {/*//         <radialGradient*/}
    {/*//           id="paint3_angular_531_277"*/}
    {/*//           cx="0"*/}
    {/*//           cy="0"*/}
    {/*//           r="1"*/}
    {/*//           gradientUnits="userSpaceOnUse"*/}
    {/*//           gradientTransform="translate(1512 820) rotate(-95.0704) scale(637.681 562.254)"*/}
    {/*//         >*/}
    {/*//           <stop offset="0.0125782" stopColor="#28B4A7" />*/}
    {/*//           <stop offset="0.111924" stopColor="#0549E3" />*/}
    {/*//           <stop offset="0.632206" stopColor="#370DAE" />*/}
    {/*//           <stop offset="0.809809" stopColor="#4D71B8" />*/}
    {/*//         </radialGradient>*/}
    {/*//       </defs>*/}
    {/*//     </svg>*/}
    {/*//*/}
    {/*//     <div className={styles["sign-up-for-newsletter2"]}>*/}
    {/*//       Sign Up for Newsletter{" "}*/}
    {/*//     </div>*/}
    {/*//     <div*/}
    {/*//       className={*/}
    {/*//         styles[*/}
    {/*//           "sign-up-for-our-newsletter-to-receive-exclusive-updates-and-the-latest-news-delivered-directly-to-your-inbox2"*/}
    {/*//         ]*/}
    {/*//       }*/}
    {/*//     >*/}
    {/*//       Sign up for our newsletter to receive exclusive updates and the latest*/}
    {/*//       news delivered directly to your inbox.{" "}*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["explore-our-blog"]}>*/}
    {/*//       <span>*/}
    {/*//         <span className={styles["explore-our-blog-span"]}>*/}
    {/*//           Explore our{" "}*/}
    {/*//         </span>*/}
    {/*//         <span className={styles["explore-our-blog-span2"]}>blog.</span>*/}
    {/*//       </span>{" "}*/}
    {/*//     </div>*/}
    {/*//     <div*/}
    {/*//       className={*/}
    {/*//         styles[*/}
    {/*//           "explore-our-blog-for-expert-tips-success-stories-and-industry-updates-on-maximizing-your-earnings-through-offerwall-monetisation"*/}
    {/*//         ]*/}
    {/*//       }*/}
    {/*//     >*/}
    {/*//       Explore our blog for expert tips, success stories, and industry*/}
    {/*//       updates on maximizing your earnings through offerwall monetisation.{" "}*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["search-bar"]}>*/}
    {/*//       <div className={styles["state-layer"]}>*/}
    {/*//         <div className={styles["content"]}>*/}
    {/*//           <div className={styles["supporting-text"]}>Search blog </div>*/}
    {/*//         </div>*/}
    {/*//       </div>*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["_1st-trailing-icon"]}>*/}
    {/*//       <div className={styles["container"]}>*/}
    {/*//         <div className={styles["state-layer2"]}>*/}
    {/*//           <svg*/}
    {/*//             className={styles["icons-search-24-px"]}*/}
    {/*//             width="24"*/}
    {/*//             height="24"*/}
    {/*//             viewBox="0 0 24 24"*/}
    {/*//             fill="none"*/}
    {/*//             xmlns="http://www.w3.org/2000/svg"*/}
    {/*//           >*/}
    {/*//             <path*/}
    {/*//               fillRule="evenodd"*/}
    {/*//               clipRule="evenodd"*/}
    {/*//               d="M14.76 13.27L20.49 19L19 20.49L13.27 14.76C12.2 15.53 10.91 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 10.91 15.53 12.2 14.76 13.27ZM9.5 5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5Z"*/}
    {/*//               fill="#1E1E1E"*/}
    {/*//             />*/}
    {/*//           </svg>*/}
    {/*//         </div>*/}
    {/*//       </div>*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["group-1000004488"]}>*/}
    {/*//       <div className={styles["rectangle-1177"]}></div>*/}
    {/*//       <div className={styles["sign-up2"]}>sign up </div>*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["your-e-mail2"]}>Your E-mail </div>*/}
    {/*//     <div className={styles["rectangle-1227"]}></div>*/}
    {/*//     <div className={styles["line-17"]}></div>*/}
    {/*//   </div>*/}
    {/*//   <div className={styles["section-2"]}>*/}
    {/*//     <div className={styles["section-2-background"]}></div>*/}
    {/*//     <div*/}
    {/*//       className={*/}
    {/*//         styles[*/}
    {/*//           "unlocking-profit-potential-the-power-of-offerwall-monetization-in-mobile-apps"*/}
    {/*//         ]*/}
    {/*//       }*/}
    {/*//     >*/}
    {/*//       Unlocking Profit Potential: The Power of Offerwall Monetization in*/}
    {/*//       Mobile Apps{" "}*/}
    {/*//     </div>*/}
    {/*//     <div*/}
    {/*//       className={*/}
    {/*//         styles[*/}
    {/*//           "many-game-developers-struggle-with-understanding-the-best-way-to-monetize-a-mobile-game-resorting-to-flooding-their-users-with-ads-that-interrupt-the-user-experience-and-cause-their-users-to-write-negative-reviews"*/}
    {/*//         ]*/}
    {/*//       }*/}
    {/*//     >*/}
    {/*//       Many game developers struggle with understanding the best way to*/}
    {/*//       monetize a mobile game, resorting to flooding their users with ads*/}
    {/*//       that interrupt the user experience and cause their users to write*/}
    {/*//       negative reviews.{" "}*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["recent-article"]}>Recent article </div>*/}
    {/*//     <div className={styles["jul-19-2023"]}>Jul 19 2023 </div>*/}
    {/*//     <div className={styles["section-2-read-time"]}>*/}
    {/*//       <div className={styles["_8-min-read"]}>8 min read </div>*/}
    {/*//       <svg*/}
    {/*//         className={styles["time"]}*/}
    {/*//         width="24"*/}
    {/*//         height="24"*/}
    {/*//         viewBox="0 0 24 24"*/}
    {/*//         fill="none"*/}
    {/*//         xmlns="http://www.w3.org/2000/svg"*/}
    {/*//       >*/}
    {/*//         <g clipPath="url(#clip0_256_75)">*/}
    {/*//           <path*/}
    {/*//             fillRule="evenodd"*/}
    {/*//             clipRule="evenodd"*/}
    {/*//             d="M12.004 0.998047C5.94003 0.998047 0.996094 5.93498 0.996094 11.9979C0.996094 18.0608 5.94103 23.0038 12.004 23.0038C18.0669 23.0038 23.0018 18.0608 23.0018 11.9979C23.0018 5.93498 18.0669 0.998047 12.004 0.998047ZM12.004 2.99802C13.1863 2.99605 14.3574 3.2275 15.4501 3.67911C16.5428 4.13072 17.5356 4.7936 18.3715 5.62974C19.2075 6.46588 19.8702 7.45882 20.3215 8.55162C20.7729 9.64441 21.0041 10.8156 21.0018 11.9979C21.0042 13.1806 20.7731 14.3521 20.3219 15.4453C19.8707 16.5385 19.2081 17.5318 18.3722 18.3685C17.5363 19.2051 16.5435 19.8686 15.4507 20.3208C14.3579 20.773 13.1866 21.0051 12.004 21.0038C10.8208 21.0052 9.64895 20.7733 8.55554 20.3213C7.46213 19.8692 6.46862 19.2059 5.6319 18.3694C4.79518 17.5328 4.13167 16.5395 3.67938 15.4462C3.22709 14.3529 2.99488 13.1811 2.99607 11.9979C2.99607 7.01597 7.02202 2.99802 12.004 2.99802ZM11.988 4.984C11.8558 4.98529 11.7252 5.01278 11.6037 5.06487C11.4822 5.11696 11.3722 5.19262 11.2802 5.28747C11.1881 5.38232 11.1158 5.49448 11.0673 5.61747C11.0189 5.74046 10.9953 5.87183 10.998 6.00398V11.9979C10.9985 12.1295 11.025 12.2597 11.076 12.381C11.127 12.5023 11.2014 12.6124 11.295 12.7049L15.2949 16.7069C15.3874 16.8021 15.498 16.8779 15.6201 16.9299C15.7423 16.982 15.8736 17.0092 16.0063 17.0099C16.1391 17.0107 16.2707 16.985 16.3934 16.9344C16.5161 16.8837 16.6275 16.8092 16.7212 16.715C16.8148 16.6209 16.8887 16.5091 16.9386 16.386C16.9886 16.263 17.0135 16.1313 17.012 15.9985C17.0105 15.8658 16.9825 15.7347 16.9298 15.6128C16.8771 15.491 16.8006 15.3809 16.7049 15.2889L12.9999 11.5839V6.00398C13.0026 5.86997 12.9784 5.73679 12.9286 5.61235C12.8787 5.48791 12.8044 5.37475 12.71 5.2796C12.6156 5.18445 12.5031 5.10925 12.379 5.05847C12.255 5.00769 12.122 4.98236 11.988 4.984Z"*/}
    {/*//             fill="#B3ACAC"*/}
    {/*//           />*/}
    {/*//         </g>*/}
    {/*//         <defs>*/}
    {/*//           <clipPath id="clip0_256_75">*/}
    {/*//             <rect width="24" height="24" fill="white" />*/}
    {/*//           </clipPath>*/}
    {/*//         </defs>*/}
    {/*//       </svg>*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["section-2-button"]}>*/}
    {/*//       <div className={styles["rectangle-1176"]}></div>*/}
    {/*//       <div className={styles["read-more"]}>Read more </div>*/}
    {/*//     </div>*/}
    {/*//   </div>*/}
    {/*//   <div className={styles["section-3"]}>*/}
    {/*//     <div className={styles["browse"]}>Browse </div>*/}
    {/*//     <div className={styles["section-3-box-1"]}></div>*/}
    {/*//     <div className={styles["section-3-box-2"]}></div>*/}
    {/*//     <div className={styles["section-3-box-3"]}></div>*/}
    {/*//     <div className={styles["all-articles"]}>All articles </div>*/}
    {/*//     <div*/}
    {/*//       className={*/}
    {/*//         styles[*/}
    {/*//           "exploring-offerwall-solutions-for-monetization-and-retention-a-comparative-analysis"*/}
    {/*//         ]*/}
    {/*//       }*/}
    {/*//     >*/}
    {/*//       Exploring Offerwall Solutions for Monetization and Retention: a*/}
    {/*//       Comparative Analysis{" "}*/}
    {/*//     </div>*/}
    {/*//     <img className={styles["frame-23-4-1"]} src="frame-23-4-1.png" />*/}
    {/*//     <div className={styles["jul-19-20232"]}>Jul 19 2023 </div>*/}
    {/*//     <div*/}
    {/*//       className={*/}
    {/*//         styles[*/}
    {/*//           "behind-the-scenes-how-advertisers-create-irresistible-offerwall-campaigns"*/}
    {/*//         ]*/}
    {/*//       }*/}
    {/*//     >*/}
    {/*//       Behind the Scenes: How Advertisers Create Irresistible Offerwall*/}
    {/*//       Campaigns{" "}*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["jul-28-2023"]}>Jul 28 2023 </div>*/}
    {/*//     <div*/}
    {/*//       className={*/}
    {/*//         styles[*/}
    {/*//           "mastering-offerwall-monetisation-strategies-to-boost-your-earnings"*/}
    {/*//         ]*/}
    {/*//       }*/}
    {/*//     >*/}
    {/*//       Mastering Offerwall Monetisation: Strategies to Boost Your Earnings{" "}*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["jul-28-20232"]}>Jul 28 2023 </div>*/}
    {/*//     <img className={styles["rectangle"]} src="rectangle.png" />*/}
    {/*//     <img className={styles["rectangle2"]} src="rectangle2.png" />*/}
    {/*//     <div className={styles["_8-min-read2"]}>8 min read </div>*/}
    {/*//     <svg*/}
    {/*//       className={styles["time2"]}*/}
    {/*//       width="24"*/}
    {/*//       height="24"*/}
    {/*//       viewBox="0 0 24 24"*/}
    {/*//       fill="none"*/}
    {/*//       xmlns="http://www.w3.org/2000/svg"*/}
    {/*//     >*/}
    {/*//       <g clipPath="url(#clip0_256_115)">*/}
    {/*//         <path*/}
    {/*//           fillRule="evenodd"*/}
    {/*//           clipRule="evenodd"*/}
    {/*//           d="M12.004 0.998047C5.94003 0.998047 0.996094 5.93498 0.996094 11.9979C0.996094 18.0608 5.94103 23.0038 12.004 23.0038C18.0669 23.0038 23.0018 18.0608 23.0018 11.9979C23.0018 5.93498 18.0669 0.998047 12.004 0.998047ZM12.004 2.99802C13.1863 2.99605 14.3574 3.2275 15.4501 3.67911C16.5428 4.13072 17.5356 4.7936 18.3715 5.62974C19.2075 6.46588 19.8702 7.45882 20.3215 8.55162C20.7729 9.64441 21.0041 10.8156 21.0018 11.9979C21.0042 13.1806 20.7731 14.3521 20.3219 15.4453C19.8707 16.5385 19.2081 17.5318 18.3722 18.3685C17.5363 19.2051 16.5435 19.8686 15.4507 20.3208C14.3579 20.773 13.1866 21.0051 12.004 21.0038C10.8208 21.0052 9.64895 20.7733 8.55554 20.3213C7.46213 19.8692 6.46862 19.2059 5.6319 18.3694C4.79518 17.5328 4.13167 16.5395 3.67938 15.4462C3.22709 14.3529 2.99488 13.1811 2.99607 11.9979C2.99607 7.01597 7.02202 2.99802 12.004 2.99802ZM11.988 4.984C11.8558 4.98529 11.7252 5.01278 11.6037 5.06487C11.4822 5.11696 11.3722 5.19262 11.2802 5.28747C11.1881 5.38232 11.1158 5.49448 11.0673 5.61747C11.0189 5.74046 10.9953 5.87183 10.998 6.00398V11.9979C10.9985 12.1295 11.025 12.2597 11.076 12.381C11.127 12.5023 11.2014 12.6124 11.295 12.7049L15.2949 16.7069C15.3874 16.8021 15.498 16.8779 15.6201 16.9299C15.7423 16.982 15.8736 17.0092 16.0063 17.0099C16.1391 17.0107 16.2707 16.985 16.3934 16.9344C16.5161 16.8837 16.6275 16.8092 16.7212 16.715C16.8148 16.6209 16.8887 16.5091 16.9386 16.386C16.9886 16.263 17.0135 16.1313 17.012 15.9985C17.0105 15.8658 16.9825 15.7347 16.9298 15.6128C16.8771 15.491 16.8006 15.3809 16.7049 15.2889L12.9999 11.5839V6.00398C13.0026 5.86997 12.9784 5.73679 12.9286 5.61235C12.8787 5.48791 12.8044 5.37475 12.71 5.2796C12.6156 5.18445 12.5031 5.10925 12.379 5.05847C12.255 5.00769 12.122 4.98236 11.988 4.984Z"*/}
    {/*//           fill="#1E1E1E"*/}
    {/*//         />*/}
    {/*//       </g>*/}
    {/*//       <defs>*/}
    {/*//         <clipPath id="clip0_256_115">*/}
    {/*//           <rect width="24" height="24" fill="white" />*/}
    {/*//         </clipPath>*/}
    {/*//       </defs>*/}
    {/*//     </svg>*/}
    {/*//*/}
    {/*//     <div className={styles["_8-min-read3"]}>8 min read </div>*/}
    {/*//     <svg*/}
    {/*//       className={styles["time3"]}*/}
    {/*//       width="22"*/}
    {/*//       height="22"*/}
    {/*//       viewBox="0 0 22 22"*/}
    {/*//       fill="none"*/}
    {/*//       xmlns="http://www.w3.org/2000/svg"*/}
    {/*//     >*/}
    {/*//       <g clipPath="url(#clip0_256_119)">*/}
    {/*//         <path*/}
    {/*//           fillRule="evenodd"*/}
    {/*//           clipRule="evenodd"*/}
    {/*//           d="M11.0036 0.915039C5.44503 0.915039 0.913086 5.44057 0.913086 10.9982C0.913086 16.5559 5.44595 21.087 11.0036 21.087C16.5613 21.087 21.085 16.5559 21.085 10.9982C21.085 5.44057 16.5613 0.915039 11.0036 0.915039ZM11.0036 2.74835C12.0874 2.74654 13.161 2.9587 14.1626 3.37268C15.1642 3.78666 16.0743 4.3943 16.8406 5.16076C17.6069 5.92722 18.2143 6.83741 18.6281 7.83914C19.0418 8.84087 19.2537 9.91443 19.2517 10.9982C19.2539 12.0824 19.0421 13.1562 18.6284 14.1583C18.2148 15.1604 17.6074 16.071 16.8412 16.8379C16.0749 17.6049 15.1649 18.213 14.1631 18.6276C13.1614 19.0421 12.0877 19.2549 11.0036 19.2536C9.91905 19.255 8.84487 19.0424 7.84258 18.628C6.84028 18.2136 5.92957 17.6056 5.16257 16.8388C4.39558 16.0719 3.78737 15.1614 3.37277 14.1592C2.95816 13.157 2.74531 12.0828 2.7464 10.9982C2.7464 6.43147 6.43685 2.74835 11.0036 2.74835ZM10.989 4.56883C10.8678 4.57001 10.7481 4.59521 10.6367 4.64296C10.5253 4.69071 10.4246 4.76006 10.3402 4.84701C10.2558 4.93396 10.1895 5.03677 10.1451 5.14951C10.1007 5.26225 10.079 5.38267 10.0815 5.50382V10.9982C10.082 11.1189 10.1063 11.2382 10.153 11.3494C10.1997 11.4606 10.2679 11.5615 10.3537 11.6463L14.0203 15.3148C14.1052 15.4021 14.2065 15.4716 14.3185 15.5193C14.4304 15.567 14.5508 15.5919 14.6725 15.5926C14.7942 15.5933 14.9148 15.5697 15.0273 15.5233C15.1398 15.4769 15.2419 15.4086 15.3277 15.3223C15.4135 15.236 15.4813 15.1335 15.5271 15.0207C15.5729 14.9079 15.5957 14.7872 15.5943 14.6655C15.5929 14.5438 15.5673 14.4236 15.519 14.3119C15.4707 14.2002 15.4006 14.0993 15.3128 14.015L11.9166 10.6188V5.50382C11.9191 5.38097 11.8968 5.25889 11.8512 5.14482C11.8055 5.03075 11.7374 4.92702 11.6509 4.8398C11.5643 4.75258 11.4611 4.68364 11.3474 4.63709C11.2337 4.59054 11.1118 4.56733 10.989 4.56883Z"*/}
    {/*//           fill="#1E1E1E"*/}
    {/*//         />*/}
    {/*//       </g>*/}
    {/*//       <defs>*/}
    {/*//         <clipPath id="clip0_256_119">*/}
    {/*//           <rect width="22" height="22" fill="white" />*/}
    {/*//         </clipPath>*/}
    {/*//       </defs>*/}
    {/*//     </svg>*/}
    {/*//*/}
    {/*//     <div className={styles["_8-min-read4"]}>8 min read </div>*/}
    {/*//     <svg*/}
    {/*//       className={styles["time4"]}*/}
    {/*//       width="22"*/}
    {/*//       height="22"*/}
    {/*//       viewBox="0 0 22 22"*/}
    {/*//       fill="none"*/}
    {/*//       xmlns="http://www.w3.org/2000/svg"*/}
    {/*//     >*/}
    {/*//       <g clipPath="url(#clip0_256_123)">*/}
    {/*//         <path*/}
    {/*//           fillRule="evenodd"*/}
    {/*//           clipRule="evenodd"*/}
    {/*//           d="M11.0036 0.915039C5.44503 0.915039 0.913086 5.44057 0.913086 10.9982C0.913086 16.5559 5.44595 21.087 11.0036 21.087C16.5613 21.087 21.085 16.5559 21.085 10.9982C21.085 5.44057 16.5613 0.915039 11.0036 0.915039ZM11.0036 2.74835C12.0874 2.74654 13.161 2.9587 14.1626 3.37268C15.1642 3.78666 16.0743 4.3943 16.8406 5.16076C17.6069 5.92722 18.2143 6.83741 18.6281 7.83914C19.0418 8.84087 19.2537 9.91443 19.2517 10.9982C19.2539 12.0824 19.0421 13.1562 18.6284 14.1583C18.2148 15.1604 17.6074 16.071 16.8412 16.8379C16.0749 17.6049 15.1649 18.213 14.1631 18.6276C13.1614 19.0421 12.0877 19.2549 11.0036 19.2536C9.91905 19.255 8.84487 19.0424 7.84258 18.628C6.84028 18.2136 5.92957 17.6056 5.16257 16.8388C4.39558 16.0719 3.78737 15.1614 3.37277 14.1592C2.95816 13.157 2.74531 12.0828 2.7464 10.9982C2.7464 6.43147 6.43685 2.74835 11.0036 2.74835ZM10.989 4.56883C10.8678 4.57001 10.7481 4.59521 10.6367 4.64296C10.5253 4.69071 10.4246 4.76006 10.3402 4.84701C10.2558 4.93396 10.1895 5.03677 10.1451 5.14951C10.1007 5.26225 10.079 5.38267 10.0815 5.50382V10.9982C10.082 11.1189 10.1063 11.2382 10.153 11.3494C10.1997 11.4606 10.2679 11.5615 10.3537 11.6463L14.0203 15.3148C14.1052 15.4021 14.2065 15.4716 14.3185 15.5193C14.4304 15.567 14.5508 15.5919 14.6725 15.5926C14.7942 15.5933 14.9148 15.5697 15.0273 15.5233C15.1398 15.4769 15.2419 15.4086 15.3277 15.3223C15.4135 15.236 15.4813 15.1335 15.5271 15.0207C15.5729 14.9079 15.5957 14.7872 15.5943 14.6655C15.5929 14.5438 15.5673 14.4236 15.519 14.3119C15.4707 14.2002 15.4006 14.0993 15.3128 14.015L11.9166 10.6188V5.50382C11.9191 5.38097 11.8968 5.25889 11.8512 5.14482C11.8055 5.03075 11.7374 4.92702 11.6509 4.8398C11.5643 4.75258 11.4611 4.68364 11.3474 4.63709C11.2337 4.59054 11.1118 4.56733 10.989 4.56883Z"*/}
    {/*//           fill="#1E1E1E"*/}
    {/*//         />*/}
    {/*//       </g>*/}
    {/*//       <defs>*/}
    {/*//         <clipPath id="clip0_256_123">*/}
    {/*//           <rect width="22" height="22" fill="white" />*/}
    {/*//         </clipPath>*/}
    {/*//       </defs>*/}
    {/*//     </svg>*/}
    {/*//*/}
    {/*//     <div className={styles["button-2"]}>*/}
    {/*//       <div className={styles["rectangle-11772"]}></div>*/}
    {/*//       <div className={styles["read-more2"]}>Read more </div>*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["button-2"]}>*/}
    {/*//       <div className={styles["rectangle-11773"]}></div>*/}
    {/*//       <div className={styles["read-more3"]}>Read more </div>*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["button-2"]}>*/}
    {/*//       <svg*/}
    {/*//         className={styles["rectangle-11774"]}*/}
    {/*//         width="192"*/}
    {/*//         height="45"*/}
    {/*//         viewBox="0 0 192 45"*/}
    {/*//         fill="none"*/}
    {/*//         xmlns="http://www.w3.org/2000/svg"*/}
    {/*//       >*/}
    {/*//         <path*/}
    {/*//           d="M0 4C0 1.79086 1.79086 0 4 0H188C190.209 0 192 1.79086 192 4V41C192 43.2091 190.209 45 188 45H4C1.79086 45 0 43.2091 0 41V4Z"*/}
    {/*//           stroke="#1E1E1E"*/}
    {/*//         />*/}
    {/*//       </svg>*/}
    {/*//*/}
    {/*//       <div className={styles["read-more4"]}>Read more </div>*/}
    {/*//     </div>*/}
    {/*//   </div>*/}
    {/*//   <div className={styles["footer"]}>*/}
    {/*//     <svg*/}
    {/*//       className={styles["footer-background-3"]}*/}
    {/*//       width="1512"*/}
    {/*//       height="583"*/}
    {/*//       viewBox="0 0 1512 583"*/}
    {/*//       fill="none"*/}
    {/*//       xmlns="http://www.w3.org/2000/svg"*/}
    {/*//     >*/}
    {/*//     </svg>*/}
    {/*//*/}
    {/*//     <svg*/}
    {/*//       className={styles["footer-background-2"]}*/}
    {/*//       width="1512"*/}
    {/*//       height="546"*/}
    {/*//       viewBox="0 0 1512 546"*/}
    {/*//       fill="none"*/}
    {/*//       xmlns="http://www.w3.org/2000/svg"*/}
    {/*//     >*/}
    {/*//       <path*/}
    {/*//         opacity="0.2"*/}
    {/*//         d="M1512 34.0537L1512 545.552L-0.000145899 545.552L0.00012119 20.5543C0.00012119 20.5543 2.33215 18.5922 96.5007 5.05425C333.001 -28.9457 311.501 137.553 637.001 52.5528C831.267 1.8229 945.001 -10.9463 1512 34.0537Z"*/}
    {/*//         fill="url(#paint0_angular_256_53)"*/}
    {/*//       />*/}
    {/*//       <defs>*/}
    {/*//         <radialGradient*/}
    {/*//           id="paint0_angular_256_53"*/}
    {/*//           cx="0"*/}
    {/*//           cy="0"*/}
    {/*//           r="1"*/}
    {/*//           gradientUnits="userSpaceOnUse"*/}
    {/*//           gradientTransform="translate(1347.5 742.109) rotate(-40.1207) scale(465.549 468.558)"*/}
    {/*//         >*/}
    {/*//           <stop offset="0.048565" stopColor="#07101B" />*/}
    {/*//           <stop offset="0.160936" stopColor="#28B4A7" />*/}
    {/*//           <stop offset="0.619027" stopColor="#0A004A" />*/}
    {/*//           <stop offset="0.742459" stopColor="#35168F" />*/}
    {/*//         </radialGradient>*/}
    {/*//       </defs>*/}
    {/*//     </svg>*/}
    {/*//*/}
    {/*//     <svg*/}
    {/*//       className={styles["footer-background-1"]}*/}
    {/*//       width="1512"*/}
    {/*//       height="617"*/}
    {/*//       viewBox="0 0 1512 617"*/}
    {/*//       fill="none"*/}
    {/*//       xmlns="http://www.w3.org/2000/svg"*/}
    {/*//     >*/}
    {/*//       <path*/}
    {/*//         opacity="0.2"*/}
    {/*//         d="M1512 32.0538L1512 616.557L0.000949612 616.557L0.000970069 148.554C0.000970069 148.554 148.325 114.095 240.501 100.556C471.996 66.5511 593.39 206.568 912.001 121.557C996.637 98.9749 1021 58.0534 1133 27.5526C1276.01 -11.3922 1339.9 -8.29474 1512 32.0538Z"*/}
    {/*//         fill="url(#paint0_angular_256_54)"*/}
    {/*//       />*/}
    {/*//       <defs>*/}
    {/*//         <radialGradient*/}
    {/*//           id="paint0_angular_256_54"*/}
    {/*//           cx="0"*/}
    {/*//           cy="0"*/}
    {/*//           r="1"*/}
    {/*//           gradientUnits="userSpaceOnUse"*/}
    {/*//           gradientTransform="translate(1459.98 813.558) rotate(-40.7295) scale(459.839 464.398)"*/}
    {/*//         >*/}
    {/*//           <stop offset="0.048565" stopColor="#4D71B8" />*/}
    {/*//           <stop offset="0.160936" stopColor="#28B4A7" />*/}
    {/*//           <stop offset="0.619027" stopColor="#6C55FF" />*/}
    {/*//           <stop offset="0.742459" stopColor="#21168F" />*/}
    {/*//         </radialGradient>*/}
    {/*//       </defs>*/}
    {/*//     </svg>*/}
    {/*//*/}
    {/*//     <div*/}
    {/*//       className={*/}
    {/*//         styles["copyright-2023-offerwall-monetization-all-rights-reserved"]*/}
    {/*//       }*/}
    {/*//     >*/}
    {/*//       © Copyright 2023 Offerwall Monetization. All Rights Reserved.{" "}*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["frame-414"]}>*/}
    {/*//       <div className={styles["fa-qs"]}>FAQs </div>*/}
    {/*//       <div className={styles["blog2"]}>Blog </div>*/}
    {/*//       <div className={styles["partnerships"]}>Partnerships </div>*/}
    {/*//       <div className={styles["privacy-policy"]}>Privacy Policy </div>*/}
    {/*//     </div>*/}
    {/*//     <svg*/}
    {/*//       className={styles["linked-in"]}*/}
    {/*//       width="30"*/}
    {/*//       height="31"*/}
    {/*//       viewBox="0 0 30 31"*/}
    {/*//       fill="none"*/}
    {/*//       xmlns="http://www.w3.org/2000/svg"*/}
    {/*//     >*/}
    {/*//       <path*/}
    {/*//         d="M16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM16.4954 13.8228H16.5184V13.7867L16.4954 13.8228ZM15.001 0.553711C12.0343 0.553711 9.13416 1.43345 6.66743 3.08167C4.20069 4.72989 2.2781 7.07257 1.14279 9.81346C0.00747565 12.5543 -0.289574 15.5703 0.289204 18.4801C0.867982 21.3898 2.29659 24.0625 4.39438 26.1603C6.49217 28.2581 9.16491 29.6867 12.0746 30.2655C14.9843 30.8443 18.0003 30.5472 20.7412 29.4119C23.4821 28.2766 25.8248 26.354 27.473 23.8873C29.1212 21.4205 30.001 18.5204 30.001 15.5537C29.9966 11.5768 28.4149 7.76401 25.6028 4.95191C22.7907 2.13981 18.9779 0.558058 15.001 0.553711ZM11.2502 22.3065C11.2493 22.373 11.2223 22.4365 11.1749 22.4832C11.1276 22.5299 11.0638 22.5561 10.9973 22.5561H8.10696C8.04076 22.5561 7.97727 22.5298 7.93045 22.483C7.88364 22.4362 7.85734 22.3727 7.85734 22.3065V12.5944C7.85691 12.5614 7.86304 12.5286 7.87539 12.4979C7.88774 12.4672 7.90606 12.4393 7.92928 12.4158C7.9525 12.3923 7.98017 12.3736 8.01067 12.3608C8.04117 12.3481 8.0739 12.3415 8.10696 12.3415H10.9973C11.0305 12.3415 11.0634 12.3481 11.094 12.3608C11.1247 12.3735 11.1526 12.3921 11.1761 12.4156C11.1996 12.4391 11.2182 12.467 11.2309 12.4977C11.2436 12.5283 11.2502 12.5612 11.2502 12.5944V22.3065ZM9.45029 11.0442C9.09106 11.0442 8.7399 10.9377 8.44121 10.7381C8.14253 10.5385 7.90973 10.2548 7.77226 9.92296C7.63479 9.59107 7.59882 9.22588 7.6689 8.87355C7.73898 8.52123 7.91197 8.19759 8.16598 7.94358C8.41999 7.68957 8.74363 7.51658 9.09595 7.4465C9.44828 7.37642 9.81347 7.41239 10.1454 7.54986C10.4772 7.68733 10.7609 7.92013 10.9605 8.21882C11.1601 8.5175 11.2666 8.86866 11.2666 9.22789C11.267 9.46653 11.2203 9.70291 11.1292 9.92347C11.0381 10.144 10.9043 10.3444 10.7356 10.5132C10.5668 10.6819 10.3664 10.8157 10.1459 10.9068C9.92531 10.9979 9.68893 11.0446 9.45029 11.0442ZM23.4814 22.3065C23.4805 22.373 23.4535 22.4365 23.4062 22.4832C23.3588 22.5299 23.295 22.5561 23.2285 22.5561H20.3382C20.3054 22.5561 20.2729 22.5497 20.2427 22.5371C20.2124 22.5246 20.1849 22.5062 20.1617 22.483C20.1385 22.4598 20.1201 22.4323 20.1076 22.402C20.095 22.3717 20.0886 22.3393 20.0886 22.3065V17.0875C20.0886 15.7146 19.5992 14.7884 18.3708 14.7884C17.988 14.7906 17.6153 14.911 17.3037 15.1333C16.992 15.3556 16.7567 15.6687 16.6301 16.03C16.5435 16.2969 16.5056 16.5773 16.5184 16.8576V22.3065C16.5184 22.3736 16.4917 22.4379 16.4443 22.4853C16.3969 22.5328 16.3326 22.5594 16.2655 22.5594H13.3752C13.3421 22.5594 13.3094 22.5528 13.2789 22.5401C13.2484 22.5273 13.2207 22.5087 13.1975 22.4851C13.1743 22.4616 13.156 22.4337 13.1436 22.403C13.1313 22.3724 13.1251 22.3396 13.1256 22.3065C13.1256 20.9205 13.1617 14.1907 13.1256 12.6076C13.1251 12.5745 13.1313 12.5417 13.1436 12.511C13.156 12.4804 13.1743 12.4525 13.1975 12.4289C13.2207 12.4054 13.2484 12.3867 13.2789 12.374C13.3094 12.3612 13.3421 12.3547 13.3752 12.3547H16.2589C16.2923 12.3542 16.3253 12.3605 16.3562 12.373C16.3871 12.3856 16.4152 12.4042 16.4387 12.4278C16.4623 12.4513 16.4809 12.4794 16.4935 12.5103C16.506 12.5412 16.5123 12.5742 16.5118 12.6076V13.7998C16.819 13.2665 17.2665 12.8275 17.8055 12.5305C18.3446 12.2335 18.9547 12.0897 19.5696 12.1149C21.7998 12.1149 23.4748 13.5732 23.4748 16.7131L23.4814 22.3065ZM16.5184 13.8327V13.7965L16.4954 13.8327H16.5184ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327ZM16.4954 13.8327H16.5184V13.7965L16.4954 13.8327Z"*/}
    {/*//         fill="white"*/}
    {/*//       />*/}
    {/*//     </svg>*/}
    {/*//*/}
    {/*//     <div className={styles["footer-title"]}>*/}
    {/*//       <span>*/}
    {/*//         <span className={styles["footer-title-span"]}>offfffff</span>*/}
    {/*//         <span className={styles["footer-title-span2"]}>f</span>*/}
    {/*//         <span className={styles["footer-title-span3"]}>*/}
    {/*//           erwall <br />*/}
    {/*//         </span>*/}
    {/*//         <span className={styles["footer-title-span4"]}>monetization</span>*/}
    {/*//       </span>{" "}*/}
    {/*//     </div>*/}
    {/*//     <div className={styles["footer-slogan"]}>*/}
    {/*//       A Valuable Tool for Monetizing Mobile Games{" "}*/}
    {/*//     </div>*/}
    {/*//     <svg*/}
    {/*//       className={styles["footer-logo"]}*/}
    {/*//       width="50"*/}
    {/*//       height="59"*/}
    {/*//       viewBox="0 0 50 59"*/}
    {/*//       fill="none"*/}
    {/*//       xmlns="http://www.w3.org/2000/svg"*/}
    {/*//     >*/}
    {/*//       <path*/}
    {/*//         d="M28.9661 35.8947H26.4035C25.2742 35.8921 24.1685 35.5276 23.2147 34.8435C22.2608 34.1594 21.4977 33.1837 21.0136 32.0293H26.4035C26.6301 32.0293 26.8473 31.9275 27.0075 31.7463C27.1677 31.5651 27.2577 31.3193 27.2577 31.063C27.2577 30.8067 27.1677 30.5609 27.0075 30.3796C26.8473 30.1984 26.6301 30.0966 26.4035 30.0966H20.4926C20.4015 29.4565 20.4015 28.804 20.4926 28.1639H26.4035C26.6301 28.1639 26.8473 28.0621 27.0075 27.8809C27.1677 27.6996 27.2577 27.4539 27.2577 27.1976C27.2577 26.9413 27.1677 26.6955 27.0075 26.5142C26.8473 26.333 26.6301 26.2312 26.4035 26.2312H21.0136C21.4977 25.0768 22.2608 24.1011 23.2147 23.417C24.1685 22.7329 25.2742 22.3685 26.4035 22.3658H28.9661C29.1926 22.3658 29.4099 22.264 29.5701 22.0828C29.7303 21.9015 29.8203 21.6557 29.8203 21.3995C29.8203 21.1432 29.7303 20.8974 29.5701 20.7161C29.4099 20.5349 29.1926 20.4331 28.9661 20.4331H26.4035C24.816 20.4362 23.2682 20.9952 21.9728 22.0333C20.6773 23.0715 19.6978 24.5379 19.1686 26.2312H17.0075C16.781 26.2312 16.5637 26.333 16.4035 26.5142C16.2433 26.6955 16.1533 26.9413 16.1533 27.1976C16.1533 27.4539 16.2433 27.6996 16.4035 27.8809C16.5637 28.0621 16.781 28.1639 17.0075 28.1639H18.7671C18.6988 28.8058 18.6988 29.4547 18.7671 30.0966H17.008C16.7815 30.0966 16.5642 30.1984 16.404 30.3796C16.2438 30.5609 16.1538 30.8067 16.1538 31.063C16.1538 31.3193 16.2438 31.5651 16.404 31.7463C16.5642 31.9275 16.7815 32.0293 17.008 32.0293H19.1686C19.6978 33.7226 20.6773 35.189 21.9728 36.2272C23.2682 37.2654 24.816 37.8244 26.4035 37.8274H28.9661C29.1926 37.8274 29.4099 37.7256 29.5701 37.5444C29.7303 37.3632 29.8203 37.1174 29.8203 36.8611C29.8203 36.6048 29.7303 36.359 29.5701 36.1778C29.4099 35.9965 29.1926 35.8947 28.9661 35.8947Z"*/}
    {/*//         fill="#BEE4FF"*/}
    {/*//       />*/}
    {/*//       <path*/}
    {/*//         d="M15.1134 15.4176C10.5521 18.5264 7.55713 23.7633 7.55713 29.6996C7.55713 35.2056 10.1336 40.1099 14.1467 43.2725M18.9547 13.4527C20.7883 12.7897 22.7662 12.4282 24.8285 12.4282C32.3364 12.4282 38.7255 17.2188 41.1056 23.91M42.0303 28.1381C42.0764 28.6524 42.0999 29.1733 42.0999 29.6996C42.0999 39.2383 34.3672 46.971 24.8285 46.971C22.3503 46.971 19.9939 46.449 17.8634 45.509"*/}
    {/*//         stroke="#BEE4FF"*/}
    {/*//         strokeWidth="1.8"*/}
    {/*//         strokeLinecap="round"*/}
    {/*//       />*/}
    {/*//       <path*/}
    {/*//         d="M29.1465 53.8917L29.6275 54.6524C29.8894 54.4868 30.0477 54.198 30.0464 53.8881C30.0452 53.5782 29.8846 53.2908 29.6214 53.1272L29.1465 53.8917ZM22.8809 48.9402C22.4587 48.6779 21.9038 48.8076 21.6415 49.2298C21.3792 49.652 21.5089 50.2069 21.9311 50.4692L22.8809 48.9402ZM21.925 57.3937C21.5049 57.6593 21.3797 58.2152 21.6454 58.6353C21.911 59.0555 22.467 59.1806 22.8871 58.915L21.925 57.3937ZM15.4654 7.68915C15.9229 7.49475 16.1362 6.96631 15.9418 6.50885C15.7474 6.05138 15.2189 5.83813 14.7615 6.03253L15.4654 7.68915ZM24.9521 53.339C11.6599 53.339 0.900977 42.6808 0.900977 29.5533H-0.899023C-0.899023 43.693 10.684 55.139 24.9521 55.139V53.339ZM28.9978 53.0041C27.683 53.2243 26.3315 53.339 24.9521 53.339V55.139C26.4314 55.139 27.8825 55.016 29.2951 54.7794L28.9978 53.0041ZM21.9311 50.4692L28.6716 54.6562L29.6214 53.1272L22.8809 48.9402L21.9311 50.4692ZM22.8871 58.915L29.6275 54.6524L28.6654 53.1311L21.925 57.3937L22.8871 58.915ZM0.900977 29.5533C0.900977 19.7544 6.89388 11.3316 15.4654 7.68915L14.7615 6.03253C5.55717 9.94389 -0.899023 18.9983 -0.899023 29.5533H0.900977Z"*/}
    {/*//         fill="#BEE4FF"*/}
    {/*//       />*/}
    {/*//       <path*/}
    {/*//         d="M20.5108 4.81627L20.0297 4.0556C19.7678 4.22124 19.6095 4.50998 19.6108 4.81989C19.612 5.12979 19.7726 5.41725 20.0359 5.58077L20.5108 4.81627ZM26.7763 9.76781C27.1985 10.0301 27.7534 9.90043 28.0157 9.4782C28.278 9.05598 28.1483 8.50108 27.7261 8.2388L26.7763 9.76781ZM27.7322 1.31435C28.1523 1.04869 28.2775 0.49276 28.0119 0.0726585C27.7462 -0.347443 27.1903 -0.472637 26.7702 -0.20697L27.7322 1.31435ZM34.1918 51.0189C33.7343 51.2133 33.5211 51.7417 33.7155 52.1992C33.9099 52.6566 34.4383 52.8699 34.8958 52.6755L34.1918 51.0189ZM24.7052 5.36897C37.9973 5.36897 48.7563 16.0273 48.7563 29.1547H50.5562C50.5562 15.015 38.9732 3.56897 24.7052 3.56897V5.36897ZM20.6594 5.7039C21.9742 5.48372 23.3258 5.36897 24.7052 5.36897V3.56897C23.2258 3.56897 21.7747 3.69205 20.3621 3.92863L20.6594 5.7039ZM27.7261 8.2388L20.9857 4.05176L20.0359 5.58077L26.7763 9.76781L27.7261 8.2388ZM26.7702 -0.20697L20.0297 4.0556L20.9918 5.57693L27.7322 1.31435L26.7702 -0.20697ZM48.7563 29.1547C48.7563 38.9537 42.7634 47.3764 34.1918 51.0189L34.8958 52.6755C44.1001 48.7641 50.5562 39.7097 50.5562 29.1547H48.7563Z"*/}
    {/*//         fill="#E0FF22"*/}
    {/*//       />*/}
    {/*//     </svg>*/}
    {/*//*/}
    {/*//     <div className={styles["footer-divider"]}></div>*/}
    {/*//   </div>*/}
    {/*// </div>*/}
//   );
// };


export default Blog;