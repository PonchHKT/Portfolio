import styles from "../styles/footer.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footerContainer}>
      <hr />

      <div className={styles.footerBody}>
        <h1>{t("footer.title")}</h1>

        <div className={styles.footerPage}>
          <ul>
            <li className={styles.footerTitle}>
              <h2>
                <Link href="/">{t("nav.home")}</Link>
              </h2>
            </li>
            <div className={styles.footerFlex}>
              <li>
                <Link href="/about">{t("nav.about")}</Link>
              </li>
              <li>
                <Link href="/project">{t("nav.projects")}</Link>
              </li>
            </div>
          </ul>

          <ul>
            <li className={styles.footerTitle}>
              <h2>
                <Link href="/contact">{t("nav.contact")}</Link>
              </h2>
            </li>
            <div className={styles.footerFlex}>
              <li>
                <a href="/cv" target="_blank" rel="noopener noreferrer">
                  {t("home.downloadCV")}
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
              <h2>{t("footer.social")}</h2>
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
