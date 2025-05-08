import { useState } from "react";
import styles from "../styles/projectCard.module.scss";

const ProjectCard = ({
  title,
  description,
  technologies,
  features,
  images,
  url,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.projectCard}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>

        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index}>
              <i className="fas fa-check-circle"></i> {feature}
            </li>
          ))}
        </ul>

        <div className={styles.icons}>
          {technologies.map((tech, index) => (
            <i
              key={index}
              className={tech.icon}
              style={{ color: tech.color }}
              title={tech.name}
            ></i>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.visitButton}
        >
          <i className="fas fa-external-link-alt"></i> Visiter le site
        </a>
      </div>

      <div className={styles.imagesContainer}>
        <div className={styles.images}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} screenshot ${index + 1}`}
              className={index === currentImageIndex ? styles.active : ""}
            />
          ))}
        </div>

        <div className={styles.navigation}>
          <button onClick={prevImage} className={styles.navButton}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className={styles.indicators}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              ></span>
            ))}
          </div>
          <button onClick={nextImage} className={styles.navButton}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
