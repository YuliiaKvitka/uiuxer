// Modal.js
import React from 'react';
import styles from '../styles/components/Modal.module.scss';
import Link from 'next/link';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <nav className={styles.modalMenu}>
          <ul className={styles.modalMenu__list}>
            <li className={styles.modalMenu__item}><Link href="/home">Home</Link></li>
            <li className={styles.modalMenu__item}><Link href="/about">About Me</Link></li>
            <li className={styles.modalMenu__item}><Link href="/pages">Pages</Link></li>
            <li className={styles.modalMenu__item}><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Modal;








