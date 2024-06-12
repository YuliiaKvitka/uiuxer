import Image from 'next/image'
import styles from '../styles/components/HomePages.module.scss'

const HomePages = () => {
    return (
        <section className={`{styles['home-pages']} section`}>
            <div className="container">
                <div className={styles['home-pages__inner']}>
                    <h2 className='section-title'>Professional Home Pages</h2>
                    <div className={styles['home-pages__text']}>
                        <p className='section-text'>Attractive and stylish home layouts bring your portfolio website to the next level.</p>
                    </div>
    
                    <div className={`{styles['home-pages__portfolio']} portfolio`}>
    
                        <div className={`{styles['home-pages__card']} card`}>
                            <div className={`{styles['home-pages__image-container']} image__container`}>
                                <Image className={`{styles['home-pages__image']} portfolio-image`} src={'/assets/home-pages/1.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                            <h3 className="section-caption">Home UX Designer</h3>
                        </div>
    
                        <div className={`{styles['home-pages__card']} card`}>
                            <div className={`{styles['home-pages__image-container']} image__container`}>
                                <Image className={`{styles['home-pages__image']} portfolio-image`} src={'/assets/home-pages/2.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                            <h3 className="section-caption">Home UI Designer</h3>
                        </div>
    
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default HomePages
