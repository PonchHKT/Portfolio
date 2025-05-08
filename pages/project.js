"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/project.module.scss";
import ProjectCard from "../components/ProjectCard";
import "../i18n";

export default function Project() {
  const { t, i18n } = useTranslation();
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

  const projects = [
    {
      title: "Standard en Ligne",
      description: t("project.standardDescription"),
      technologies: [
        { name: "React", icon: "fab fa-react", color: "#61DAFB" },
        { name: "JavaScript", icon: "fab fa-js-square", color: "#EAD41C" },
        { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
        { name: "MongoDB", icon: "fas fa-database", color: "#4DB33D" },
      ],
      features: [
        t("project.standardFeature1"),
        t("project.standardFeature2"),
        t("project.standardFeature3"),
        t("project.standardFeature4"),
      ],
      images: ["https://i.ibb.co/mwdQ7Rz/Capture-d-cran-2025-05-08-174613.jpg"],
      url: "https://www.standardenligne.fr/",
    },
    {
      title: "Villa Du Bonheur",
      description: t("project.villaDescription"),
      technologies: [
        { name: "React", icon: "fab fa-react", color: "#61DAFB" },
        { name: "Vite", icon: "fas fa-bolt", color: "#646CFF" },
        { name: "JavaScript", icon: "fab fa-js-square", color: "#EAD41C" },
        { name: "SASS", icon: "fab fa-sass", color: "#CD669A" },
      ],
      features: [
        t("project.villaFeature1"),
        t("project.villaFeature2"),
        t("project.villaFeature3"),
      ],
      images: [
        "https://i.ibb.co/9HT4brWp/Capture-d-cran-2025-05-08-175142.jpg",
      ],
      url: "https://villadubonheur.vercel.app/",
    },
    {
      title: "La Taverne du Design",
      description: t("project.taverneDescription"),
      technologies: [
        { name: "React", icon: "fab fa-react", color: "#61DAFB" },
        { name: "JavaScript", icon: "fab fa-js-square", color: "#EAD41C" },
        { name: "SASS", icon: "fab fa-sass", color: "#CD669A" },
        { name: "HTML5", icon: "fab fa-html5", color: "#E44D26" },
      ],
      features: [
        t("project.taverneFeature1"),
        t("project.taverneFeature2"),
        t("project.taverneFeature3"),
      ],
      images: [
        "https://dam.malt.com/bab6ce2d-4500-456c-8fba-2440c3c16a82?func=bound&w=2048&org_if_sml=1",
        "https://i.gyazo.com/aa2efc809d8eec274b461ce8c4dce073.png",
        "https://i.gyazo.com/56389beb0446102fe6e025d995043ebc.jpg",
      ],
      url: "https://ltdd-studio.fr/",
    },
  ];

  return (
    <div className={styles.projectContainer}>
      <Navbar />

      <main>
        <div className={styles.headerContainer}></div>

        <div className={styles.projectsWrapper}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              features={project.features}
              images={project.images}
              url={project.url}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
