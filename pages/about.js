import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/about.module.scss";
import Hability from "../components/Hability";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("bio");

  // Variables pour la section "bio"
  const bioTitle = "À propos de moi";
  const bioParagraph1 =
    "Né en Thaïlande, mon parcours a été marqué par des événements qui ont façonné ma résilience et ma détermination. J'ai vécu le tsunami de 2004, une expérience qui a profondément influencé ma vision de la vie. Suite à cet événement, ma famille et moi avons emménagé en France où j'ai commencé mon intégration dans une nouvelle culture.";
  const bioParagraph2 =
    "Quelques années plus tard, je suis retourné en Thaïlande pour y effectuer mon baccalauréat, me reconnectant avec mes racines tout en gardant une perspective internationale. Cette double culture m'a offert une vision unique et m'a poussé à revenir en France pour poursuivre mes études supérieures à EFREI Paris, où j'ai développé ma passion pour le développement web et le design d'interfaces.";
  const bioParagraph3 =
    "Aujourd'hui, en tant que développeur front-end, je combine rigueur technique et sensibilité créative, influencées par mon parcours multiculturel unique.";

  // Variables pour la section "formation"
  const formationTitle = "Formation";
  const formationEfreiTitle = "EFREI Paris (2019-2023)";
  const formationEfreiParagraph1 =
    "Diplôme d'ingénieur en informatique, spécialisation en développement web et technologies front-end.";
  const formationEfreiParagraph2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae nunc sed urna convallis faucibus. Mauris sed metus ac nisi tempor convallis ut vel magna. Phasellus suscipit, quam ut feugiat commodo, eros mi finibus nisi, in placerat dolor nisi at sapien. Donec vitae velit aliquam, facilisis nisl id, lacinia risus.";
  const formationLyceeTitle = "Lycée International de Bangkok (2016-2019)";
  const formationLyceeParagraph1 =
    "Baccalauréat scientifique avec mention, option sciences de l'ingénieur.";
  const formationLyceeParagraph2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan odio eget lacus finibus, non bibendum nisl varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

  // Variables pour la section "experiences"
  const experiencesTitle = "Expertise technique";
  const experiencesFrontendTitle = "Technologies front-end maîtrisées";
  const experiencesFrontendList = [
    {
      tech: "React.js",
      desc: "Création d'interfaces utilisateur dynamiques et interactives",
    },
    {
      tech: "Next.js",
      desc: "Développement d'applications React avec rendu côté serveur",
    },
    {
      tech: "SCSS/Sass",
      desc: "Stylisation avancée avec variables, mixins et structures imbriquées",
    },
    {
      tech: "Animations CSS",
      desc: "Conception d'interfaces vivantes grâce à des animations fluides",
    },
    {
      tech: "JavaScript ES6+",
      desc: "Manipulation DOM avancée et programmation asynchrone",
    },
  ];
  const experiencesResponsiveTitle = "Approche responsive";
  const experiencesResponsiveParagraph =
    "Je conçois chaque interface avec une philosophie 'mobile-first', garantissant une expérience utilisateur optimale sur tous les appareils. Mon approche du responsive design repose sur :";
  const experiencesResponsiveList = [
    "Utilisation de grilles flexibles et adaptatives",
    "Media queries stratégiquement positionnées",
    "Images et contenus optimisés pour différentes résolutions",
    "Tests rigoureux sur multiples appareils et navigateurs",
  ];
  const experiencesUiUxTitle = "UI/UX";
  const experiencesUiUxParagraph =
    "Ma conception d'interfaces s'articule autour de principes fondamentaux :";
  const experiencesUiUxList = [
    "Hiérarchie visuelle claire pour guider l'utilisateur",
    "Espacement et typographie soignés pour une lisibilité optimale",
    "Palettes de couleurs harmonieuses et cohérentes avec l'identité de marque",
    "Microinteractions subtiles améliorant l'engagement utilisateur",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "bio":
        return (
          <>
            <h3>{bioTitle}</h3>
            <p>{bioParagraph1}</p>
            <p>{bioParagraph2}</p>
            <p>{bioParagraph3}</p>
          </>
        );
      case "formation":
        return (
          <>
            <h3>{formationTitle}</h3>
            <h4>{formationEfreiTitle}</h4>
            <p>{formationEfreiParagraph1}</p>
            <p>{formationEfreiParagraph2}</p>
            <h4>{formationLyceeTitle}</h4>
            <p>{formationLyceeParagraph1}</p>
            <p>{formationLyceeParagraph2}</p>
          </>
        );
      case "experiences":
        return (
          <>
            <h3>{experiencesTitle}</h3>
            <h4>{experiencesFrontendTitle}</h4>
            <ul>
              {experiencesFrontendList.map((item, index) => (
                <li key={index}>
                  <strong>{item.tech}</strong> - {item.desc}
                </li>
              ))}
            </ul>
            <h4>{experiencesResponsiveTitle}</h4>
            <p>{experiencesResponsiveParagraph}</p>
            <ul>
              {experiencesResponsiveList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h4>{experiencesUiUxTitle}</h4>
            <p>{experiencesUiUxParagraph}</p>
            <ul>
              {experiencesUiUxList.map((item, index) => (
                <li key={index}>{item}</li>
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
                  Bio
                </button>
                <button
                  className={activeTab === "formation" ? styles.activeTab : ""}
                  onClick={() => setActiveTab("formation")}
                >
                  Formation
                </button>
                <button
                  className={
                    activeTab === "experiences" ? styles.activeTab : ""
                  }
                  onClick={() => setActiveTab("experiences")}
                >
                  Expériences
                </button>
              </div>

              <div className={styles.aboutText}>{renderContent()}</div>

              <div className={styles.aboutInfos}>
                <div>
                  <p>
                    <strong>Age :</strong> 25 ans
                  </p>
                  <p className={styles.statusHighlight}>
                    <strong>Status :</strong> Recherche d'emploi
                  </p>
                </div>

                <div>
                  <p>
                    <strong>Nationalité :</strong> FR / TH
                  </p>
                  <p>
                    <strong>Email :</strong> p.chanaloet@gmail.com
                  </p>
                </div>

                <div className={styles.contactMeContainer}>
                  <Link href="/contact">
                    <button
                      className={styles.contactMe}
                      icon="fad fa-hand-point-right"
                    >
                      Me contacter
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.myHabilityTitle}>
            <p>Mes habilités</p>
          </div>
        </div>

        <Hability />
      </main>

      <Footer />
    </div>
  );
}
