import React from 'react';

import styles from './SubscribeNews.module.css';

const SubscribeNews = () => {
  return (
    <div className={styles.subscribeNews_wrapper}>
      <div className={styles.subscribeNews}>
        <div className={styles.subscribeNews_content}>
          <h2 className={styles.subscribeNews_stayUpDate_subtitle}>
            Stay up to date
          </h2>
          <h1 className={styles.SubscribeNews_h1}>Join Our Newsletter</h1>
          <form className={styles.subscribeNews_form}>
            <input
              type="email"
              placeholder="Enter your email.."
              className={styles.subscribeNews_input}
            />
            <button type="submit" className={styles.subscribeNews_button}>
              Subscribe
            </button>
          </form>
          <span className={styles.unsubscribeInfo}>
            *You can unsubscribe anytime
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNews;
