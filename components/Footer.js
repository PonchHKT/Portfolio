import styles from "../styles/footer.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <hr />

      <div className={styles.footerBody}>
        <h1>Portfolio</h1>

        <div className={styles.footerPage}>
          <ul>
            <li className={styles.footerTitle}>
              <h2>
                <Link href="/">Accueil</Link>
              </h2>
            </li>
            <div className={styles.footerFlex}>
              <li>
                <Link href="/about">A propos de moi</Link>
              </li>
              <li>
                <Link href="/project">Projets</Link>
              </li>
            </div>
          </ul>

          <ul>
            <li className={styles.footerTitle}>
              <h2>
                <Link href="/contact">Me contacter</Link>
              </h2>
            </li>
            <div className={styles.footerFlex}>
              <li>
                <a href="/cv" target="_blank" rel="noopener noreferrer">
                  CV
                </a>
              </li>
              <li>
                <a
                  href="https://fr.linkedin.com/in/pornchai-chanaloet-575a631bb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </div>
          </ul>

          <ul>
            <li className={styles.footerTitle}>
              <h2>Social</h2>
            </li>
            <div className={styles.footerFlex}>
              <li>
                <Link href="https://discordapp.com/users/Ponch#5027">
                  <i className="fab fa-discord"></i>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/PonchHKT">
                  <i className="fab fa-github"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/ponchhkt/?hl=fr">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <hr />

      <div className={styles.copyright}>
        <h1>© 2025 Pornchai Chanaloet</h1>
      </div>
    </footer>
  );
}

export default Footer;
