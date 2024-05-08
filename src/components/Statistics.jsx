import styles from './stats.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.section}>
      <label className={styles.title}>{title}</label>

      <ul className={styles.list}>
        <li className={styles.point}>
          <span className={styles.span}>.docx</span>
          <span className={styles.span}>4%</span>
        </li>
        <li className={styles.point}>
          <span className={styles.span}>.mp3</span>
          <span className={styles.span}>14%</span>
        </li>
        <li className={styles.point}>
          <span className={styles.span}>.pdf</span>
          <span className={styles.span}>41%</span>
        </li>
        <li className={styles.point}>
          <span className={styles.span}>.mp4</span>
          <span className={styles.span}>12%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
