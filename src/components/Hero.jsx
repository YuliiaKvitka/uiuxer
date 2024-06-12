import styles from '../styles/components/Hero.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__inner}>
          <div className={styles.hero__title}>
            <h1>
              Tell your creativity to the world with{' '}
              <span className="accent"> UIUXer</span>
            </h1>
          </div>
          <div className={styles['hero__wrapper-text']}>
            <p className={styles.hero__text}>
              UIUXer is a creative, minimal, and cleanly designed personal and
              portfolio Webflow template.
            </p>
          </div>
          <div className={styles['hero__wrapper-button']}>
            <button
              type="button"
              className={`${styles['hero__button-orange']} ${styles.hero__button}`}
            >
              Buy Template
            </button>
            <button
              type="button"
              className={`${styles['hero__button-blue']} ${styles.hero__button}`}
            >
              Explore Page
            </button>
          </div>

          <div className={styles['hero__image-container']}>
            <Image
              className={styles.hero___image}
              src={'/assets/main-img.png'}
              alt=""
              loading="lazy"
              layout="responsive"
              objectFit="contain"
              placeholder="empty"
              width={205}
              height={205}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



// sizes='(min-width:768px) 205px, calc(95vw-19px)'