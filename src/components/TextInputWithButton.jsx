'use client'

import React, { useState } from 'react';
import styles from '../styles/components/TextInputWithButton.module.scss';
import Image from 'next/image';

const TextInputWithButton = ({ buttonText, onButtonClick, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    onButtonClick(inputValue);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.textInput}
      />
      <button onClick={handleButtonClick} className={styles.button}>
        <Image src="/assets/footer/icon-btn.svg" alt="icon" width={26} height={26} className={styles.icon} />
        {buttonText}
      </button>
    </div>
  );
};

export default TextInputWithButton;
