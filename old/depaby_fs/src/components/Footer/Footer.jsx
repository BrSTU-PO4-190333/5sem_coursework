import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__section}>  
        <p>ООО "ДЕ-ПА"</p>
        <p>Июнь 2017 - Январь 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
