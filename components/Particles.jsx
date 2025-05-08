import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Version allégée pour maximiser les performances

const ParticlesBG = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 25, // Nombre réduit de particules
            density: {
              enable: true,
              area: 1800, // Zone plus grande = moins de particules
            },
          },
          color: {
            value: ["#FFFFFF", "#E9ECEF", "#CED4DA", "#7B2CBF", "#5A189A"], // Blanc et violet uniquement
          },
          shape: {
            type: "circle", // Uniquement des cercles pour réduire la charge
          },
          opacity: {
            value: { min: 0.2, max: 0.5 }, // Opacité réduite
            animation: {
              enable: false, // Désactivation de l'animation d'opacité
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: false, // Désactivation de l'animation de taille
            },
          },
          links: {
            enable: true,
            distance: 200,
            color: "#9D4EDD", // Violet pour les liens
            opacity: 0.3,
            width: 0.8,
            triangles: {
              enable: false, // Désactivation des triangles pour plus de performance
            },
            shadow: {
              enable: false, // Pas d'ombres pour éviter le lag
            },
          },
          move: {
            enable: true,
            speed: 0.8, // Mouvement lent
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
            attract: {
              enable: false, // Désactivation de l'attraction pour réduire les calculs
            },
            trail: {
              enable: false, // Pas de traînées
            },
          },
          wobble: {
            enable: false, // Désactivation du wobble pour éviter le lag
          },
          glow: {
            enable: false, // Désactivation du glow qui peut causer du lag
          },
        },
        interactivity: {
          detectsOn: "canvas", // Limité au canvas au lieu de window pour performance
          events: {
            onHover: {
              enable: true,
              mode: "bubble", // Mode léger qui ne crée pas beaucoup de connexions
              parallax: {
                enable: false, // Désactivation du parallaxe qui peut causer du lag
              },
            },
            onClick: {
              enable: true,
              mode: "push", // Ajoute simplement quelques particules
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 150,
              size: 5,
              duration: 2,
              opacity: 0.8,
            },
            push: {
              quantity: 2, // Ajoute seulement 2 particules au clic
            },
          },
        },
        background: {
          color: {
            value: "black", // Fond violet foncé
          },
        },
        backgroundMask: {
          enable: false, // Désactivé pour la performance
        },
        motion: {
          disable: true, // Désactivation des effets de mouvement avancés
        },
        detectRetina: true,
        smooth: true, // Lissage pour éviter les saccades
      }}
    />
  );
};

export default ParticlesBG;
