// Header.js
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/Header.module.scss';
import Modal from '../components/Modal';
import Burger from './Burger';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/assets/logo/logo.png" alt="Logo" width={176} height={41} loading="lazy" />
            </Link>
          </div>

          {/* Главное меню для больших экранов */}
          <nav className={styles.mainMenu}>
            <ul className={styles.mainMenu__list}>
              <li className={styles.mainMenu__item}><Link href="/home">Home</Link></li>
              <li className={styles.mainMenu__item}><Link href="/about">About Me</Link></li>
              <li className={styles.mainMenu__item}><Link href="/pages">Pages</Link></li>
              <li className={styles.mainMenu__item}><Link href="/contact">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Кнопка гамбургера для малых экранов */}
          {!menuOpen && (
            <Burger toggleMenu={toggleMenu} />
          )}

          {/* Модальное окно для маленьких экранов */}
          {menuOpen && (
            <Modal isOpen={menuOpen} onClose={closeMenu}>
              <nav className={styles.modalMenu}>
                <ul className={styles.modalMenu__list}>
                  <li className={styles.modalMenu__item}><Link href="/home">Home</Link></li>
                  <li className={styles.modalMenu__item}><Link href="/about">About Me</Link></li>
                  <li className={styles.modalMenu__item}><Link href="/pages">Pages</Link></li>
                  <li className={styles.modalMenu__item}><Link href="/contact">Contact Us</Link></li>
                </ul>
              </nav>
            </Modal>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
