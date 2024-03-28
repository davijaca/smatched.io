import React from 'react';
import styles from './Button.module.css';

const Button = ({
  text = 'BOOK A DEMO',
  color = 'white',
  type = 'button',
  onClick,
}) => {
  return (
    <button
      className={`${styles.btn} ${
        color === 'white' ? styles.btnWhite : styles.btnGold
      }`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

// Use PropTypes???

// className pattern? camelCase, btn_

// texts:
// BOOK A DEMO - default
// HOW IT WORKS
// SUBSCRIBE
// MORE ARTICLES
// READ MORE
// TRY FOR FREE
// SEND

// themes:
// white: font black - default
// gold: font white

// types:
// submit - just to forms submition
// button -  - default - Link for another page (aricles) or to show form

// function:
// onChange
