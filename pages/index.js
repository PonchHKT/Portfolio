"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ParticlesBG from "../components/Particles";
import PurpleButton from "../components/PurpleButton";
import styles from "../styles/home.module.scss";
import Link from "next/link";
import "../i18n";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [seeFullText, setSeeFullText] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // S'assurer que i18n est initialisé avant de rendre le contenu
    if (i18n.isInitialized) {
      setIsLoaded(true);
    } else {
      const handleInitialized = () => {
        setIsLoaded(true);
      };
      i18n.on("initialized", handleInitialized);
      return () => {
        i18n.off("initialized", handleInitialized);
      };
    }
  }, [i18n]);

  if (!isLoaded) return <div>Loading...</div>;

  const textIntroTemplate = t("home.introText") || "";
  const textToDisplay = seeFullText
    ? textIntroTemplate
    : textIntroTemplate.substring(0, 300);

  const listImg = [
    {
      title: t("home.standardenLigne"),
      img: "https://i.ibb.co/mwdQ7Rz/Capture-d-cran-2025-05-08-174613.jpg",
    },
    {
      title: t("home.villaduBonheur"),
      img: "https://i.ibb.co/9HT4brWp/Capture-d-cran-2025-05-08-175142.jpg",
    },
    {
      title: t("home.villaduBonheur"),
      img: "https://i.ibb.co/5gJsxKfZ/Capture-d-cran-2025-05-08-233942.jpg",
    },
    {
      title: t("home.standardenLigne"),
      img: "https://i.ibb.co/F4DZvfwT/Capture-d-cran-2025-05-08-233512.jpg",
    },
    {
      title: t("home.lataverneduDesign"),
      img: "https://i.gyazo.com/2b6ceb4c9753deb2a096337d1e6abe1f.jpg",
    },
    {
      title: t("home.lataverneduDesign"),
      img: "https://i.gyazo.com/56389beb0446102fe6e025d995043ebc.jpg",
    },
  ];

  const dlCV = () => {
    const url = `/cv/cv.pdf`;
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className={styles.homeContainer}>
      <Navbar />

      <main>
        <div className={styles.pgContainer}>
          <ParticlesBG />

          <div className={styles.text}>
            <h1>
              {t("home.mainTitle")}{" "}
              <span className={styles.changingTitle}>Pornchai Chanaloet</span>
            </h1>
            <h2>{t("home.subTitle")}</h2>
            <h3>{t("home.bachelor")}</h3>
            <div className={styles.buttonContainer}>
              <Link href="/project" className={styles.linkButton}>
                <PurpleButton isPurple text={t("home.myProjects")} />
              </Link>

              <PurpleButton
                text={t("home.downloadCV")}
                icon="fad fa-download"
                action={dlCV}
              />
            </div>
          </div>
        </div>

        <hr className={styles.separator1} />

        <div className={styles.section1}>
          <img className={styles.luffy} src="/img/luffy.png" alt="Luffy" />
          <div className={styles.lineItem1}></div>
          <div className={styles.lineItem2}></div>
          <div className={styles.lineItem3}></div>
          <div className={styles.lineItem4}></div>

          <div className={styles.introContainer}>
            <div className={styles.introBox}>
              <div className={styles.reactTurn1}></div>
              <div className={styles.reactTurn2}></div>
              <div className={styles.reactTurn3}></div>
              <div className={styles.reactTurn4}></div>

              <div className={styles.profile}>
                <img src="/img/Pornchai.jpg" alt="Profile" />
                <div>
                  <h1>Pornchai - C.</h1>
                  <h2>{t("home.subTitle")}</h2>
                </div>
              </div>

              <div className={styles.introText}>
                <h1>{t("home.introTitle")}</h1>
                <div className={styles.formattedText}>
                  {textToDisplay.split("\n\n").map((paragraph, index) => {
                    if (paragraph.includes("\n")) {
                      const [title, ...content] = paragraph.split("\n");
                      return (
                        <div key={index} className={styles.paragraphWithTitle}>
                          <h3>{title}</h3>
                          {content.map((text, i) => {
                            if (text.includes("•")) {
                              return (
                                <ul key={i} className={styles.bulletList}>
                                  {text
                                    .split("•")
                                    .filter((item) => item.trim())
                                    .map((item, bulletIndex) => (
                                      <li key={bulletIndex}>{item.trim()}</li>
                                    ))}
                                </ul>
                              );
                            }
                            return <p key={i}>{text}</p>;
                          })}
                        </div>
                      );
                    }
                    return <p key={index}>{paragraph}</p>;
                  })}
                  <button onClick={() => setSeeFullText(!seeFullText)}>
                    {seeFullText ? t("home.viewLess") : t("home.viewMore")}
                  </button>
                </div>

                <Link href="/about" className={styles.infoLink}>
                  <PurpleButton
                    className={styles.infoBtn}
                    text={t("home.moreAboutMe")}
                    icon="fad fa-hand-point-right"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.projectTitle}>
            <h1>{t("home.projectsTitle")}</h1>
            <div className={styles.portfolioGrid}>
              {listImg.map((x, i) => (
                <div
                  key={i}
                  style={{ gridArea: `IMG-${i + 1}` }}
                  className={`portfolioUnique ${styles.onePortfolio}`}
                >
                  <img src={x.img} alt={x.title} />
                  <div className={styles.info}>
                    <p>{x.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/project" className={styles.projectLink}>
              <PurpleButton isPurple text={t("home.viewMoreProjects")} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
