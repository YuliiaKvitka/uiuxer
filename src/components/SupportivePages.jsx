import Image from 'next/image'
import styles from '../styles/components/SupportivePages.module.scss'

const SupportivePages = () => {
    return (
        <section className={`${styles['supportive-pages']} section`}>
                    <div className="container">
                        <div className={styles['supportive-pages__inner']}>
                            <h2 className='section-title'>Supportive Pages</h2>
                        <div className={styles['supportive-pages__text']}>
                            <p className='section-text'>Feel the feature of creativity with these inner page layouts that perfectly match your site.</p>
                        </div>

                        <div className={`{styles['supportive-pages__portfolio']} portfolio`}>
        
                            <div className={styles['supportive-pages__card']}>
                                <div className={`{styles['supportive-pages__image-container']} image__container`}>
                                    <Image className={`{styles['supportive-pages__image']} portfolio-image`} src={'/assets/supportive-pages/1.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                                <h3 className="section-caption">About Me</h3>
                            </div>
        
                            <div className={styles['supportive-pages__card']}>
                                <div className={`{styles['supportive-pages__image-container']} image__container`}>
                                    <Image className={`{styles['supportive-pages__image']} portfolio-image`} src={'/assets/supportive-pages/2.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                                <h3 className="section-caption">Blog</h3>
                        </div>
                        
                        <div className={styles['supportive-pages__card']}>
                                <div className={`{styles['supportive-pages__image-container']} image__container`}>
                                    <Image className={`{styles['supportive-pages__image']} portfolio-image`} src={'/assets/supportive-pages/3.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                                <h3 className="section-caption">Blog Single</h3>
                        </div>
                        
                        <div className={styles['supportive-pages__card']}>
                                <div className={`{styles['supportive-pages__image-container']} image__container`}>
                                    <Image className={`{styles['supportive-pages__image']} portfolio-image`} src={'/assets/supportive-pages/4.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                                <h3 className="section-caption">Contact Us</h3>
                            </div>
        
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default SupportivePages
