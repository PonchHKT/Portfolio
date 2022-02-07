import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/about.module.scss'
import Hability from '../components/Hability'
import Link from 'next/link';
import PurpleButton from '../components/PurpleButton'

export default function About() {

    return (
        <div className={styles.aboutContainer}>

                <Navbar/>

            <main style={{backgroundColor: 'var(--main-black)'}}>
                
                <div className={styles.aboutintroContainer}>

                    <div className={styles.aboutBox}>

                    <div className={styles.imgBox}>
                        <img src="http://cdn26.us1.fansshare.com/photo/purplewallpapers/purple-wallpaper-purple-wallpapers-476630079.jpg" ></img>
                        <div className={styles.divImg} style={{width: "426px", height: "240px"}}></div>
                    </div>

                    <div className={styles.aboutCatContainer}>

                        <div className={styles.aboutCategory}>

                            <button>Bio</button>
                            <button>Formation</button>
                            <button>Éxpériences</button>

                        </div>

                        <p className={styles.aboutText}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</p>

                        <div className={styles.aboutInfos}>

                            <div>
                            <p><strong>Age :</strong> 21 ans</p>
                            <p><strong>Freelance :</strong> Disponible</p>
                            </div>

                            <div>
                            <p><strong>Nationalité :</strong> FR / TH</p>
                            <p><strong>Email :</strong> p.chanaloet@efrei.net</p>
                            </div>

                            <div>
                            <Link href="/about">
                                <button className={styles.contactMe} icon="fad fa-hand-point-right">Me contacter</button>
                            </Link>
                            </div>

                        </div>

                    </div>
                    

                    </div>

                    <div className={styles.myHabilityTitle}>
                            <h1>Mes habilités</h1>
                        </div>

                </div>

                            <Hability/>

            </main>

            <Footer/>

        </div>
        
    )
}

