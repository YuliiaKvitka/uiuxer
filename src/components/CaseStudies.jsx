import Image from 'next/image'
import styles from '../styles/components/CaseStudies.module.scss'

const CaseStudies = () => {
    return (
        <section className={`${styles['case-studies']} section`}>
                <div className="container">
                    <div className={styles['case-studies__inner']}>
                        <h2 className='section-title'>Stunning Case Studies</h2>
                    <div className={styles['case-studies__text']}>
                        <p className='section-text'>Create an optimal visual experience for your users with these inspiring layouts.</p>
                    </div>

                    <div className={`{styles['case-studies__portfolio']} portfolio`}>
    
                        <div className={styles['case-studies__card']}>
                            <div className={`{styles['case-studies__image-container']} image__container`}>
                                <Image className={`{styles['case-studies__image']} portfolio-image`} src={'/assets/case-studies/1.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                            <h3 className="section-caption">Case Study Single - Web</h3>
                        </div>
    
                        <div className={styles['case-studies__card']}>
                            <div className={`{styles['case-studies__image-container']} image__container`}>
                                <Image className={`{styles['case-studies__image']} portfolio-image`} src={'/assets/case-studies/2.jpeg'} alt='' width={645} height={881} loading='lazy' layout='responsive' objectFit="contain" placeholder='empty' /></div>
                            <h3 className="section-caption">Case Study Single - Mobile</h3>
                        </div>
    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
