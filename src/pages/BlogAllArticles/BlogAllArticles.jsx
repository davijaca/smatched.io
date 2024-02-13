import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import ArticleCard from './ArticleCard/ArticleCard';
import styles from './BlogAllArticles.module.css';
import Pagination from './Pagination/Pagination';

// use a Fetch to get all data from the backend server in the future
const articlesData = [
  {
    _id: 1,
    image: 'allArticleleft2.png',
    title: 'Article 1',
    infos: {
      readTime: '8 min',
      publishedDate: 'Jul 18 2023',
    },
    article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
  },
  {
    _id: 2,
    image: 'allArticleleft2.png',
    title: 'Article 2',
    infos: {
      readTime: '8 min',
      publishedDate: 'Jul 18 2023',
    },
    article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
  },
  {
    _id: 3,
    image: 'allArticleleft2.png',
    title: 'Article 3',
    infos: {
      readTime: '8 min',
      publishedDate: 'Jul 18 2023',
    },
    article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
  },
  {
    _id: 4,
    image: 'allArticleleft2.png',
    title: 'Article 4',
    infos: {
      readTime: '8 min',
      publishedDate: 'Jul 18 2023',
    },
    article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
  },
  {
    _id: 5,
    image: 'allArticleleft2.png',
    title: 'Article 5',
    infos: {
      readTime: '8 min',
      publishedDate: 'Jul 18 2023',
    },
    article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
  },
  {
    _id: 6,
    image: 'llArticleleft2.png',
    title: 'Article 6',
    infos: {
      readTime: '8 min',
      publishedDate: 'Jul 18 2023',
    },
    article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
  },
  {
    _id: 7,
    image: 'allArticleleft2.png',
    title: 'Article 7',
    infos: {
      readTime: '8 min',
      publishedDate: 'Jul 18 2023',
    },
    article: `Offerwalls provide a unique opportunity to engage users, drive revenue, and enhance user retention. In the realm of mobile app monetization, offerwalls have emerged as a popular and effective strategy for app monetization and retention...`,
  },
];

// This function slices the list of articles to a list hanging on the number of
function getArticlesForPage(allArticles, pageNumber, articlesPerPage) {
  const pageFirstElementIndex = articlesPerPage * (pageNumber - 1);
  return allArticles.slice(
    pageFirstElementIndex,
    pageFirstElementIndex + articlesPerPage
  );
}

const BlogAllArticles = ({
  allArticles = articlesData,
  articlesPerPage = 3,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  // Temporarely hard coded state -> to be fetch from a server in the future
  const [articlesList, setArticlesList] = useState(allArticles);
  // a ref to be used on the scrollIntoView method
  const headerSectionRef = useRef(null);

  // calls the slice function to have a default list of cards on the page
  const [displayedArticlesList, setDisplayedArticlesList] = useState(() => {
    return getArticlesForPage(articlesList, currentPage, articlesPerPage);
  });

  useEffect(() => {
    // Will call the slice function again to set the correspondent list of articles with the page selected
    // the displayArticlesList will be mapped and displayed inside the render to render the article Cards
    setDisplayedArticlesList(
      getArticlesForPage(articlesList, currentPage, articlesPerPage)
    );
  }, [currentPage, articlesPerPage, articlesList]);

  // logic to set how many buttons/pages should be displayed on the pagination
  const numberOfPages = Math.ceil(articlesList.length / articlesPerPage);

  // When User clicks on another page it will...
  const handlePaginationChange = (pageNumber) => {
    if (currentPage <= 0 || currentPage > numberOfPages) {
      return;
    }
    // Smothly scroll the page up
    headerSectionRef.current?.scrollIntoView();
    // Set the number of the page
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={styles.headerAllArticles}>
        <div className={styles.introColorsContainer}>
          <img
            src="blogAllArticlesIntroFrameColors.svg"
            className={styles.introColorsImg}
            alt="colourfull-background"
          />
        </div>
        <div className={styles.headerAllArticlesGrid}>
          <h1 className={styles.headerAllArticles_Title}>Blog</h1>
          <p className={styles.headerAllArticles_Paragraph}>
            Get the latest research from industry experts to increase
            monetization of your existing user base and to retain more of your
            users on your web or mobile apps.
          </p>
          <div className={styles.subContentOfheaderAllArticles}>
            <h2 className={styles.subContentOfheaderAllArticles_Title}>
              All articles{' '}
            </h2>
            <p
              ref={headerSectionRef}
              className={styles.headerAllArticles_Paragraph}
            >
              Here's what we've been up to recently.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bodyAllArticles}>
        <h1 className={styles.bodyAllArticles_Title}>More Articles</h1>
        <div className={styles.bodyAllArticlesWrapper}>
          <div className={styles.articlesCardsGrid}>
            {displayedArticlesList.map(function (article) {
              return (
                <ArticleCard
                  key={article._id}
                  image={article.image}
                  title={article.title}
                  readTime={article.infos.readTime}
                  publishedDate={article.infos.publishedDate}
                  text={article.article}
                />
              );
            })}
          </div>
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            onPaginationChange={handlePaginationChange}
          />
        </div>
      </div>
    </>
  );
};

export default BlogAllArticles;
