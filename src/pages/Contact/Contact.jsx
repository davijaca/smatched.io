import React, { useState, useRef } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_kqfam0m',
        'template_0nk7u7r',
        form.current,
        'AuTqDu9UI6pmz293H'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. We will get back to you as soon as possible.');

          form.current.reset();
        },
        (error) => {
          setLoading(false);
          alert('Something went wrong.');
        }
      );
  };

  return (
    <>
      <div className={styles.contact}>
        <div className={styles.heroLeft}>
          <div className={styles.heroGetInTouch}>
            <span>
              <span className={styles.getIn}>Get in </span>
              <span className={styles.touch}>touch</span>
            </span>{' '}
          </div>
          <div className={styles.heroH2}>
            Have questions, suggestions, or just want to chat about offerwall
            monetization? Write your sendButton below and let&#039;s start the
            conversation!{' '}
          </div>

          <div className={styles.heroBackground}>
            <img
              src='/contactHeroBackground.svg'
              alt=''
            />
          </div>
          <div className={styles.heroBackgroundMobile}>
            <img
              src='/contactHeroBackgroundMobile.svg'
              alt=''
            />
          </div>
        </div>
        <div className={styles.heroRight}>
          <form
            ref={form}
            onSubmit={handleSubmit}
          >
            <div className={styles.contactForm}>
              <div className={styles.contactEmail}>
                <label
                  className={styles.contactLabel}
                  value={form.email}
                >
                  Your E-mail{' '}
                </label>
                <input
                  className={styles.dataBox}
                  type='email'
                  name='email'
                  required
                />
              </div>
              <div className={styles.contactSubject}>
                <label
                  className={styles.contactLabel}
                  name='subject'
                  value={form.subject}
                  required
                >
                  Subject{' '}
                </label>
                <input
                  className={styles.dataBox}
                  type='text'
                  id='contactSubject'
                  name='subject'
                  required
                />
              </div>
              <div className={styles.contactMessage}>
                <label
                  className={styles.contactLabel}
                  name='message'
                  value={form.message}
                  required
                >
                  Your message{' '}
                </label>
                <textarea
                  className={styles.messageBox}
                  id='contactMessage'
                  name='message'
                  required
                >
                  {' '}
                </textarea>
              </div>
              <div className={styles.sendGroup}>
                <button
                  className={styles.sendButton}
                  type='submit'
                  id='btnSubmit'
                >
                  {' '}
                </button>
                <div className={styles.sendText}>
                  {loading ? 'Sending...' : 'Send'}{' '}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
