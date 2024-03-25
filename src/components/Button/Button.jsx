import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, color, type }) => {
  return (
    <button
      className={`${styles.btn} ${(color = 'white'
        ? styles.btn_white
        : styles.btn_gold)}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;

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
// submit
// button - Link for another page - default

// function:
// onChange
