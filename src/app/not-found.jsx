import styles from '../styles/pages/NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.bp}>
      <div className={styles['wrapper']}><span className={styles.yay}>ERROR!</span></div>
      <div className={styles.sign}>
        <br />
        <span className={styles.br}>404<br /></span>
      </div>
    </div>
  );
};

export default NotFound;

