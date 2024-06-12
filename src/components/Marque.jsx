'use client'
import Image from 'next/image';
import styles from '../styles/components/Marque.module.scss'
import { useEffect, useRef } from 'react';

const Marque = () => {

    const marqueeRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const marqueeContent = marqueeRef.current;
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = marqueeContent.scrollWidth;

        let cloneCount = Math.ceil(containerWidth / contentWidth);
        let cloneContent = marqueeContent.innerHTML;

        for (let i = 0; i < cloneCount; i++) {
            marqueeContent.innerHTML += cloneContent;
        }
    }, []);

    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marquee} ref={containerRef}>
                <div className={styles.marqueeContent} ref={marqueeRef}>
                    <div className={styles.marqueeItem}>
                        <Image src={'/assets/footer/1.png'} alt='' width={52} height={52} loading='lazy'/>
                        <span className={styles.text}>Available for Work</span>
                    </div>
                    <div className={styles.marqueeItem}>
                        <Image src={'/assets/footer/2.png'} alt='' width={35} height={53} loading='lazy'/>
                        <span className={styles.text}>Get in Touch</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Marque;

