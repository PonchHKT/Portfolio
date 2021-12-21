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
                            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
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
