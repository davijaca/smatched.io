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
  // essa prop da margin, nao faria parte deste componente e sim do ambiente onde ele é usado, como o comp da sessao.
  containerMargin,
}) => {
  const findSpanText = (string) => {};
  // retorna o texto com a tag span e a classe

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
        <p className={styles.containerText}>{findSpanText(text1)}</p>
        <p className={styles.containerText}>
          {text2}
          {text2Span}
        </p>
      </div>
      <Button />
    </div>
  );
};

export default ContentModOne;
