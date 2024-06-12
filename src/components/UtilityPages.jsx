import Image from 'next/image'
import styles from '../styles/components/UtilityPages.module.scss'

const UtilityPages = () => {
    return (
        <section className={`${styles['utility-pages']} section`}>
                <div className="container">
                    <div className={styles['utility-pages__inner']}>
                        <h2 className='section-title white-font'>Utility Pages</h2>
                    <div className={styles['utility-pages__text']}>
                        <p className='section-text white-font'>Default templates for your site & you can customize these pages to look the way you want.</p>
                    </div>

                    <div className={`{styles['utility-pages__portfolio']} portfolio`}>
    
                        <div className={styles['utility-pages__card']}>
                            <div className={`{styles['utility-pages__image-container']} image__container`}>
                                <Image className={`{styles['utility-pages__image']} portfolio-image`} src={'/assets/utility-pages/1.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                            <h3 className="section-caption white-font">Changelog</h3>
                        </div>
    
                        <div className={styles['utility-pages__card']}>
                            <div className={`{styles['utility-pages__image-container']} image__container`}>
                                <Image className={`{styles['utility-pages__image']} portfolio-image`} src={'/assets/utility-pages/2.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                            <h3 className="section-caption white-font">Protected Page</h3>
                        </div>
                        
                        <div className={styles['utility-pages__card']}>
                            <div className={`{styles['utility-pages__image-container']} image__container`}>
                                <Image className={`{styles['utility-pages__image']} portfolio-image`} src={'/assets/utility-pages/3.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                            <h3 className="section-caption white-font">Licenses</h3>
                        </div>
                        
                        <div className={styles['utility-pages__card']}>
                            <div className={`{styles['utility-pages__image-container']} image__container`}>
                                <Image className={`{styles['utility-pages__image']} portfolio-image`} src={'/assets/utility-pages/4.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                            <h3 className="section-caption white-font">Style Guide</h3>
                        </div>

                        <div className={styles['utility-pages__card']}>
                            <div className={`{styles['utility-pages__image-container']} image__container`}>
                                <Image className={`{styles['utility-pages__image']} portfolio-image`} src={'/assets/utility-pages/5.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                            <h3 className="section-caption white-font">404 Error Page</h3>
                        </div>
    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UtilityPages
