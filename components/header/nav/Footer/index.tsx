import styles from "./style.module.scss";

export default function Index() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2025 Jonel Tech</p>
      <a>Facebook</a>
      <a>Gmail</a>
      <a>LinkedIn</a>
    </div>
  );
}
