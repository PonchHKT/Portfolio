import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/about.module.scss'
import Hability from '../components/Hability'

export default function About() {

    return (
        <div className={styles.aboutContainer}>

                <Navbar/>

            <main>
                
            <div style={{position: 'relative'}}>

                <div className={styles.lineAboutItem1}></div>
                <div className={styles.lineAboutItem2}></div>
                <div className={styles.lineAboutItem3}></div>
                <div className={styles.lineAboutItem4}></div>

                <div className={styles.aboutintroContainer}>

                    <div className={styles.aboutBox}>

                        <img src="https://cdn.discordapp.com/attachments/789414641498325032/920306693823430696/image0.png"/>

                        <div className={styles.aboutText}>
                            <h1>Pornchai Chanaloet</h1>
                            <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</h2>
                        </div>

                    </div>

                </div>
                            <div className={styles.myhabilityTitle}>
                                <h1>Mes habilitées</h1>
                            </div>

                            <Hability/>

            </div>

            </main>

            <Footer/>

        </div>
        
    )
}
