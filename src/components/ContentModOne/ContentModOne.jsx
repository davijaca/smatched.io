import React from 'react';
import styles from './ContentModOne.module.css';
import Button from '../../components/Button/Button';

const ContentModOne = ({
  header,
  headerSpan,
  text1,
  text1Span,
  text2,
  text2Span,
  containerWidth,
  paragraphWidht,
  containerMargin,
}) => {
  return (
    <div
      style={{ width: containerWidth, margin: containerMargin }}
      className={styles.container}
    >
      <h1>
        {header}
        <span> {headerSpan}</span>
      </h1>
      <div
        style={{ width: paragraphWidht }}
        className={styles.containerParagraph}
      >
        <p className={styles.containerText}>{text1}</p>
        <p className={styles.containerText}>{text2}</p>
      </div>
      <Button />
    </div>
  );
};

export default ContentModOne;
