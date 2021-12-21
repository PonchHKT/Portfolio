import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/project.module.scss'

export default function About() {

    return (
    <div className={styles.projectContainer}>

                <Navbar/>

            <main>

            <div>

                <div className={styles.guide}>

                    <h1>Web - Le pouvoir de choisir</h1>
                    <h2>Guide de style</h2>
                    <img style={{marginBottom: '60px', cursor: 'pointer', width: '100vw', maxWidth: '1200px'}} src="https://i.ibb.co/ZKHKYdL/project1.png" alt="Project"/>

                </div>

                <div className={styles.about}>

                    <h1>A propos du sujet</h1>
                    <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</h2>

                </div>

                <div className={styles.tipography}>

                    <h1>Tipographie</h1>
                    <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</h2>
                    <img style={{marginBottom: '60px', cursor: 'pointer', width: '100vw', maxWidth: '1200px'}} src="https://i.ibb.co/ZKHKYdL/project1.png" alt="Tipography"/>

                </div>

                <div className={styles.palette}>

                    <h1>Palette de couleurs</h1>
                    <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</h2>
                    <img style={{marginBottom: '60px', cursor: 'pointer', width: '100vw', maxWidth: '1200px'}} src="https://i.ibb.co/ZKHKYdL/project1.png" alt="Palette"/>
                    <img style={{marginBottom: '60px', cursor: 'pointer', width: '100vw', maxWidth: '1200px'}} src="https://i.ibb.co/ZKHKYdL/project1.png" alt="Palette"/>

                </div>

                <div className={styles.bouton}>

                    <h1>Bouttons</h1>
                    <h2>It is a long established fact that a reader will be distracted by the readable content.</h2>
                    <img style={{marginBottom: '60px', cursor: 'pointer', width: '100vw', maxWidth: '1200px'}} src="https://i.ibb.co/ZKHKYdL/project1.png" alt="Boutons"/>

                </div>

            </div>
            
            </main>

            <Footer/>

    </div>
    )
}