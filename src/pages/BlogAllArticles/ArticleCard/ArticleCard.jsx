import React from 'react';
import TextTruncate from 'react-text-truncate';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ image, title, readTime, publishedDate, text }) => {
  return (
    <article className={styles.articleCard} data-testid="article-card">
      <div className={styles.cardImage} alt="article-image">
        <img src={image} alt="" />
      </div>
      <div className={styles.articleContent}>
        <div className={styles.article}>
          <h1 className={styles.articleTitle} data-testid="article-card-title">
            {title}
          </h1>
          <div className={styles.articlesInfo}>
            <div>{readTime}</div> <div>{publishedDate}</div>
          </div>
          <TextTruncate line={3} element="p" text={text} />
        </div>
        <button className={styles.btnReadMore}>READ MORE</button>
      </div>
    </article>
  );
};

export default ArticleCard;
