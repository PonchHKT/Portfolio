import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/about.module.scss";
import Hability from "../components/Hability";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [imgInfos, setImgInfos] = useState({ width: 0, height: 0 });
  const [activeTab, setActiveTab] = useState("bio");
  const imgRef = useRef(null);

  useEffect(() => {
    // Wait for component to mount before checking image
    const timeoutId = setTimeout(() => {
      checkImage();
    }, 400);

    // Add resize event listener
    window.addEventListener("resize", checkImage);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkImage);
    };
  }, []);

  const checkImage = () => {
    if (typeof document !== "undefined" && imgRef.current) {
      setImgInfos({
        width: imgRef.current.width,
        height: imgRef.current.height,
      });
    }
  };

  // Run checkImage when image loads
  const handleImageLoad = () => {
    checkImage();
  };

  const renderContent = () => {
    switch (activeTab) {
      case "bio":
        return (
          <>
            <h3>À propos de moi</h3>
            <p>
              Né en Thaïlande, mon parcours a été marqué par des événements qui
              ont façonné ma résilience et ma détermination. J'ai vécu le
              tsunami de 2004, une expérience qui a profondément influencé ma
              vision de la vie. Suite à cet événement, ma famille et moi avons
              emménagé en France où j'ai commencé mon intégration dans une
              nouvelle culture.
            </p>
            <p>
              Quelques années plus tard, je suis retourné en Thaïlande pour y
              effectuer mon baccalauréat, me reconnectant avec mes racines tout
              en gardant une perspective internationale. Cette double culture
              m'a offert une vision unique et m'a poussé à revenir en France
              pour poursuivre mes études supérieures à EFREI Paris, où j'ai
              développé ma passion pour le développement web et le design
              d'interfaces.
            </p>
            <p>
              Aujourd'hui, en tant que développeur front-end, je combine rigueur
              technique et sensibilité créative, influencées par mon parcours
              multiculturel unique.
            </p>
          </>
        );
      case "formation":
        return (
          <>
            <h3>Formation</h3>
            <h4>EFREI Paris (2019-2023)</h4>
            <p>
              Diplôme d'ingénieur en informatique, spécialisation en
              développement web et technologies front-end.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vitae nunc sed urna convallis faucibus. Mauris sed metus ac nisi
              tempor convallis ut vel magna. Phasellus suscipit, quam ut feugiat
              commodo, eros mi finibus nisi, in placerat dolor nisi at sapien.
              Donec vitae velit aliquam, facilisis nisl id, lacinia risus.
            </p>
            <h4>Lycée International de Bangkok (2016-2019)</h4>
            <p>
              Baccalauréat scientifique avec mention, option sciences de
              l'ingénieur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              accumsan odio eget lacus finibus, non bibendum nisl varius.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </>
        );
      case "experiences":
        return (
          <>
            <h3>Expertise technique</h3>
            <h4>Technologies front-end maîtrisées</h4>
            <ul>
              <li>
                <strong>React.js</strong> - Création d'interfaces utilisateur
                dynamiques et interactives
              </li>
              <li>
                <strong>Next.js</strong> - Développement d'applications React
                avec rendu côté serveur
              </li>
              <li>
                <strong>SCSS/Sass</strong> - Stylisation avancée avec variables,
                mixins et structures imbriquées
              </li>
              <li>
                <strong>Animations CSS</strong> - Conception d'interfaces
                vivantes grâce à des animations fluides
              </li>
              <li>
                <strong>JavaScript ES6+</strong> - Manipulation DOM avancée et
                programmation asynchrone
              </li>
            </ul>

            <h4>Approche responsive</h4>
            <p>
              Je conçois chaque interface avec une philosophie "mobile-first",
              garantissant une expérience utilisateur optimale sur tous les
              appareils. Mon approche du responsive design repose sur :
            </p>
            <ul>
              <li>Utilisation de grilles flexibles et adaptatives</li>
              <li>Media queries stratégiquement positionnées</li>
              <li>Images et contenus optimisés pour différentes résolutions</li>
              <li>Tests rigoureux sur multiples appareils et navigateurs</li>
            </ul>

            <h4>UI/UX</h4>
            <p>
              Ma conception d'interfaces s'articule autour de principes
              fondamentaux :
            </p>
            <ul>
              <li>Hiérarchie visuelle claire pour guider l'utilisateur</li>
              <li>
                Espacement et typographie soignés pour une lisibilité optimale
              </li>
              <li>
                Palettes de couleurs harmonieuses et cohérentes avec l'identité
                de marque
              </li>
              <li>
                Microinteractions subtiles améliorant l'engagement utilisateur
              </li>
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
