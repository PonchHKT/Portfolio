import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/nav.module.scss";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [displayMenu, setDisplayMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  // Languages available
  const languages = [
    { code: "fr", name: "FR" },
    { code: "en", name: "EN" },
  ];

  // Get current language
  const currentLanguage = i18n.language || "fr";

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (window.innerWidth <= 820) {
      setDisplayMenu(false); // Close mobile menu if open
    }
  };

  // Effect to detect scrolling
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

  // Effect to handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains(styles.icon) &&
        !event.target.classList.contains("fas")
      ) {
        setDisplayMenu(false);
      }
    };

    if (displayMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scrolling when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [displayMenu]);

  // Navigation items with their respective paths
  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/project", label: t("nav.projects") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`${styles.navContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.navItems}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            P<span className={styles.highlight}>ortfolio</span>
          </Link>
        </div>

        {/* Mobile menu overlay for better UX */}
        <div
          onClick={() => setDisplayMenu(false)}
          className={`${styles.wNavbar2} ${
            displayMenu ? styles.wNavbar2Active : ""
          }`}
          aria-hidden="true"
        ></div>

        {/* Navigation menu */}
        <ul
          ref={menuRef}
          className={`${styles.wNavbar} ${
            displayMenu ? styles.wNavbarActive : ""
          }`}
        >
          {/* Close button for mobile - more visible */}
          <div
            className={styles.closeButton}
            onClick={() => setDisplayMenu(false)}
          >
            <i className="fas fa-times"></i>
          </div>

          {navItems.map((item, index) => (
            <li
              key={item.path}
              className={styles.navItem}
              style={{ "--item-index": index + 1 }}
            >
              <Link href={item.path} onClick={() => setDisplayMenu(false)}>
                {item.label}
              </Link>
            </li>
          ))}

          {/* Divider for mobile menu */}
          <hr className={styles.mobileMenuDivider} />

          {/* Language selector for mobile */}
          <li className={styles.mobileLanguageSelector}>
            <div className={styles.langSwitchContainer}>
              <div className={styles.langLabels}>
                {languages.map((lang) => (
                  <span
                    key={lang.code}
                    className={
                      currentLanguage === lang.code ? styles.activeLang : ""
                    }
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.name}
                  </span>
                ))}
              </div>
              <div
                className={styles.langSwitch}
                onClick={() =>
                  changeLanguage(currentLanguage === "fr" ? "en" : "fr")
                }
              >
                <div
                  className={`${styles.langSwitchKnob} ${
                    currentLanguage === "en" ? styles.langSwitchRight : ""
                  }`}
                ></div>
              </div>
            </div>
          </li>
        </ul>

        <div className={styles.navRight}>
          {/* Modern language toggle/slider for desktop */}
          <div className={styles.languageSelector}>
            <div className={styles.langSwitchContainer}>
              <div className={styles.langLabels}>
                {languages.map((lang) => (
                  <span
                    key={lang.code}
                    className={
                      currentLanguage === lang.code ? styles.activeLang : ""
                    }
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.name}
                  </span>
                ))}
              </div>
              <div
                className={styles.langSwitch}
                onClick={() =>
                  changeLanguage(currentLanguage === "fr" ? "en" : "fr")
                }
              >
                <div
                  className={`${styles.langSwitchKnob} ${
                    currentLanguage === "en" ? styles.langSwitchRight : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>

          {/* Menu toggle button for mobile */}
          <div
            onClick={() => setDisplayMenu(!displayMenu)}
            className={styles.icon}
            aria-label={displayMenu ? "Fermer le menu" : "Ouvrir le menu"}
            role="button"
            tabIndex={0}
          >
            <i className={`fas ${displayMenu ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
