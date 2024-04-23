import React from 'react';
// import shareIcon from '../../../../../images/share.svg';
// import printIcon from '../../../../../images/print.svg';

import styles from './HighlightedSection.module.css';

const HighlightedSection = ({ body }) => {
  return (
    <section>
      <div className={styles.highlightedBackground_section}>
        <div
          className={styles.titleOrTextIcon_wrapper}
          data-testid="article-highlighted"
        >
          <div className={styles.icons_wrapper}>
            <img
              role="button"
              src="/images/share_grey.svg"
              className={styles.icons}
              alt=""
              tabindex="0"
            />
            <img
              role="button"
              src="/images/print.svg"
              className={styles.icons}
              alt=""
              onClick={() => window.print()}
              tabindex="0"
            />
          </div>

          <div>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedSection;
