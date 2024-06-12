import styles from '../styles/components/Burger.module.scss'

const Burger = ({toggleMenu}) => {
  return (
    <div className={styles.mainMenu__container} onClick={toggleMenu}>
              <div className={styles.mainMenu__menuBar}></div>
              <div className={styles.mainMenu__menuBar}></div>
              <div className={styles.mainMenu__menuBar}></div>
            </div>
  )
}

export default Burger
