import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/nav.module.scss";

function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`${styles.navContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.navItems}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            B<span className={styles.highlight}>ienvenue</span>
          </Link>
        </div>

        <ul
          className={`${styles.wNavbar} ${
            displayMenu ? styles.wNavbarActive : ""
          }`}
        >
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">A propos de moi</Link>
          </li>
          <li>
            <Link href="/project">Projets</Link>
          </li>
          <li>
            <Link href="/contact">Me contacter</Link>
          </li>
        </ul>

        <div
          onClick={() => setDisplayMenu(!displayMenu)}
          className={styles.icon}
          aria-label={displayMenu ? "Fermer le menu" : "Ouvrir le menu"}
          role="button"
          tabIndex={0}
        >
          <i className={`fas ${displayMenu ? "fa-times" : "fa-bars"}`}></i>
        </div>

        <div
          onClick={() => setDisplayMenu(!displayMenu)}
          className={`${styles.wNavbar2} ${
            displayMenu ? styles.wNavbar2Active : ""
          }`}
          aria-hidden="true"
        ></div>
      </nav>
    </header>
  );
}

export default Navbar;
