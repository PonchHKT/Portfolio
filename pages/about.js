"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/about.module.scss";
import Hability from "../components/Hability";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function About() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("bio");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsLoaded(true);
    } else {
      const handleInitialized = () => setIsLoaded(true);
      i18n.on("initialized", handleInitialized);
      return () => i18n.off("initialized", handleInitialized);
    }
  }, [i18n]);

  if (!isLoaded) return <div>Loading...</div>;

  const renderContent = () => {
    switch (activeTab) {
      case "bio":
        return (
          <>
            {t("about.bioText")
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </>
        );

      case "formation":
        return (
          <>
            <h3>{t("about.formationTitle")}</h3>
            <h4>{t("about.formationEfrei")}</h4>
            <p>{t("about.formationEfreiText")}</p>
            <h4>{t("about.formationLycée")}</h4>
            <p>{t("about.formationLycéeText")}</p>
          </>
        );

      case "experiences":
        return (
          <>
            <h3>{t("about.experiencesTitle")}</h3>
            <h4>{t("about.frontendTech")}</h4>
            <ul>
              {t("about.frontendTechList", { returnObjects: true }).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                )
              )}
            </ul>
            <h4>{t("about.responsiveApproach")}</h4>
            <p>{t("about.responsiveText")}</p>
            <ul>
              {t("about.responsiveList", { returnObjects: true }).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                )
              )}
            </ul>
            <h4>{t("about.uiux")}</h4>
            <p>{t("about.uiuxText")}</p>
            <ul>
              {t("about.uiuxList", { returnObjects: true }).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.aboutContainer}>
      <Navbar />
      <main style={{ backgroundColor: "var(--main-black)" }}>
        <div className={styles.aboutintroContainer}>
          <div className={styles.aboutBox}>
            <div className={styles.aboutCatContainer}>
              <div className={styles.aboutCategory}>
                <button
                  className={activeTab === "bio" ? styles.activeTab : ""}
                  onClick={() => setActiveTab("bio")}
                >
                  {t("about.bioTitle")}
                </button>
                <button
                  className={activeTab === "formation" ? styles.activeTab : ""}
                  onClick={() => setActiveTab("formation")}
                >
                  {t("about.formationTitle")}
                </button>
                <button
                  className={
                    activeTab === "experiences" ? styles.activeTab : ""
                  }
                  onClick={() => setActiveTab("experiences")}
                >
                  {t("about.experiencesTitle")}
                </button>
              </div>
              <div className={styles.aboutText}>{renderContent()}</div>
              <div className={styles.aboutInfos}>
                <div>
                  <p>
                    <strong>{t("about.info.age")}:</strong> 25
                  </p>
                  <p className={styles.statusHighlight}>
                    <strong>{t("about.info.status")}:</strong>{" "}
                    {t("about.info.jobSearch")}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>{t("about.info.nationality")}:</strong> FR / TH
                  </p>
                  <p>
                    <strong>{t("about.info.email")}:</strong>{" "}
                    p.chanaloet@gmail.com
                  </p>
                </div>
                <div className={styles.contactMeContainer}>
                  <Link href="/contact">
                    <button className={styles.contactMe}>
                      {t("about.info.contactMe")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.myHabilityTitle}>
            <p>{t("about.mySkills")}</p>
          </div>
        </div>
        <Hability />
      </main>
      <Footer />
    </div>
  );
}
