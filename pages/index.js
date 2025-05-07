import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ParticlesBG from "../components/Particles";
import Projects from "../components/Projects";
import PurpleButton from "../components/PurpleButton";
import styles from "../styles/home.module.scss";
import Link from "next/link";

export default function Home() {
  const listImg = [
    {
      title: "La Taverne Du Design",
      img: "https://dam.malt.com/bab6ce2d-4500-456c-8fba-2440c3c16a82?func=bound&w=2048&org_if_sml=1",
    },
    {
      title: "La Taverne Du Design",
      img: "https://dam.malt.com/99b43e6f-dd01-4462-a637-b7964484f52e?func=bound&w=2048&org_if_sml=1",
    },
    {
      title: "La Taverne Du Design",
      img: "https://i.gyazo.com/aa2efc809d8eec274b461ce8c4dce073.png",
    },
    {
      title: "La Taverne Du Design",
      img: "https://i.gyazo.com/d9f7f32a30d984f6572d1298a95bb112.png",
    },
    {
      title: "La Taverne Du Design",
      img: "https://i.gyazo.com/2b6ceb4c9753deb2a096337d1e6abe1f.jpg",
    },
    {
      title: "La Taverne Du Design",
      img: "https://i.gyazo.com/56389beb0446102fe6e025d995043ebc.jpg",
    },
  ];

  const dlCV = () => {
    const url = `./cv/cv.pdf`;
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const textIntroTemplate = `
Diplômé de l'EFREI Paris, je recherche actuellement un poste de développeur front-end à Grenoble. Passionné par l'univers du web depuis l'âge de 15 ans, je conçois des interfaces fluides et esthétiques qui optimisent l'expérience utilisateur.

Parcours & Compétences
Au cours de ma formation à l'EFREI Paris, j'ai développé une forte autonomie et une capacité d'adaptation rapide. Cette école nous encourage à être autodidactes dès la première année, renforçant ma passion déjà existante pour l'apprentissage continu.

Mon expertise s'est construite à travers diverses missions client:
• Création de sites web vitrines pour la restauration
• Développement d'applications mobiles iOS et Android
• Conception et gestion de bases de données avec systèmes de recherche avancés
• Et de nombreux autres projets sur mesure

Approche Professionnelle
Je m'investis pleinement dans chaque projet avec une démarche structurée:
• Échange approfondi pour cerner les besoins
• Définition précise des problématiques
• Développement avec suivi régulier
• Livraison et installation professionnelles

De nature calme et collaborative, je m'adapte facilement aux nouvelles technologies et méthodologies pour répondre efficacement aux défis techniques.

Objectif Professionnel
Mon ambition est d'apporter un code de qualité et des solutions créatives à des projets ambitieux. Si vous recherchez un profil motivé pour rejoindre votre équipe, je serais ravi d'échanger sur vos besoins et ma contribution potentielle.

N'hésitez pas à me contacter pour toute information complémentaire.`;

  const [textIntro, setTextIntro] = useState(
    textIntroTemplate.substring(0, 300)
  );

  const seeMore = (val) => {
    if (val === "plus") {
      setTextIntro(textIntroTemplate);
    } else {
      setTextIntro(textIntroTemplate.substring(0, 300));
    }
  };

  return (
    <div className={styles.homeContainer}>
      <Navbar />

      <main>
        <div className={styles.pgContainer}>
          <ParticlesBG />

          <div className={styles.text}>
            <h1>
              Je suis <a></a>
            </h1>
            <h2>Développeur Web Front</h2>
            <h3>Ceci est mon Portofolio!</h3>

            <div className={styles.buttonContainer}>
              <Link href="/project">
                <li style={{ listStyle: "none" }}>
                  <PurpleButton isPurple text="Mes projets" />
                </li>
              </Link>
              <PurpleButton
                text="Télécharger CV"
                icon="fad fa-download"
                action={() => dlCV()}
              />
            </div>
          </div>
        </div>

        <hr className={styles.separator1} />

        <div className={styles.section1}>
          <img className={styles.luffy} src="./img/luffy.png" alt="Luffy" />

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
                <img src="./img/Pornchai.jpg" alt="Profile" />

                <div>
                  <h1>Pornchai - C.</h1>
                  <h2>Développeur Web Front</h2>
                </div>
              </div>

              <div className={styles.introText}>
                <h1>À propos de moi</h1>
                <div className={styles.formattedText}>
                  {textIntro.split("\n\n").map((paragraph, index) => {
                    // Check if paragraph contains a title
                    if (paragraph.includes("\n")) {
                      const [title, ...content] = paragraph.split("\n");
                      return (
                        <div key={index} className={styles.paragraphWithTitle}>
                          <h3>{title}</h3>
                          {content.map((text, i) => {
                            // Check if text contains bullet points
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
                  {textIntro !== textIntroTemplate ? (
                    <button onClick={() => seeMore("plus")}>Voir plus</button>
                  ) : (
                    <button onClick={() => seeMore("moins")}>Voir moins</button>
                  )}
                </div>
                <Link href="/about">
                  <li style={{ listStyle: "none" }}>
                    <PurpleButton
                      className={styles.infoBtn}
                      text="Plus à propos de moi"
                      icon="fad fa-hand-point-right"
                    />
                  </li>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.projectTitle}>
            <h1>Mes projets</h1>

            <div className={styles.portfolioGrid}>
              {listImg.map((x, i) => {
                return (
                  <div
                    style={{ gridArea: `IMG-${i + 1}` }}
                    className={`portfolioUnique ${styles.onePortfolio}`}
                    key={i}
                  >
                    <img src={x.img} alt={x.title} />
                    <div className={styles.info}>
                      <p>{x.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/project">
              <li style={{ listStyle: "none" }}>
                <PurpleButton isPurple text="Voir plus de projet" />
              </li>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
