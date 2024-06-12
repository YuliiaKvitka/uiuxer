'use client'


import Image from 'next/image'
import styles from '../styles/components/Footer.module.scss'
import Marque from './Marque'
import TextInputWithButton from './TextInputWithButton'


const handleButtonClick = (value) => {
  console.log('Button clicked with input value:', value);
};

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className={styles["footer__inner"]}>
          <div className={styles['footer__image-container']}>
            <Image className={styles['footer___image']} src={'/assets/main-img.png'} alt=''   loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' width={205} height={205} />
          </div>

          <div className={styles["footer__crawl-line"]}>
            <Marque/>
          </div>

          <span className={styles['footer__line']}></span>

          <div className={styles["footer__wrapper"]}>
            <ul className={styles["footer__list"]}>
              <li className={styles["footer__item"]}>UX Designer</li>
              <li className={styles["footer__item"]}>UI Designer</li>
              <li className={styles["footer__item"]}>Protected</li>
            </ul>

            <ul className={styles["footer__list"]}>
              <li className={styles["footer__item"]}>Style Guide</li>
              <li className={styles["footer__item"]}>Licenses</li>
              <li className={styles["footer__item"]}>Changelog</li>
            </ul>

            <TextInputWithButton
                buttonText="Write Now"
                onButtonClick={handleButtonClick}
                placeholder="Interested in working together? Drop me a line"
            />
          </div>
          <span className={styles['footer__line']}></span>
          <div className="footer__copyright">
            <p className={styles['footer__copyright-text']}>Copyright &copy; UIUXer | </p>
            <p className={styles['footer__copyright-text']}> Designed by VictorFlow Templates -</p>
            <p className={styles['footer__copyright-text']}>  Powered by Webflow</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
