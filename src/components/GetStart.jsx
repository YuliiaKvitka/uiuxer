import Image from 'next/image'
import styles from '../styles/components/GetStart.module.scss'

const GetStart = () => {
  return (
      <section className={styles['get-start']}>
          <div className="container">
              <div className={styles["get-start__inner"]}>
                  <div className={styles['get-start__wrapper-text']}>
                      <div className={styles['get-start__title']}><h2 className='section-title left'>Ready to get start with UIUXer?</h2></div>
                      <div className={styles['get-start__text']}><p className='section-text left'>Well-planned layouts with a clear structure that can be utilized to demonstrate your inventiveness in the digital business field.</p></div>
                      <div className={styles['get-start__wrapper-button']}><button type='button' className={`${styles['get-start__button-orange']} ${styles['get-start__button']} `} href='##'>Get Start Now</button></div>
                  </div>
                  <div className={styles['get-start__wrapper-image']} >
                      <Image className={`{styles['get-start__image']} `} src={'/assets/get-start/1.png'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' />
                  </div>
              </div>
          </div>
      
    </section>
  )
}

export default GetStart
