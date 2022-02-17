import styles from '../styles/footer.module.scss'
import Link from 'next/link'

function Footer() {
    return (

        <footer className={styles.footerContainer}>

            <hr/>

            <div className={styles.footerBody}>

                <h1>ShuxDev.</h1>

                <div className={styles.footerPage}>

                    <ul>
                    <Link href="/">
                        <li className={styles.footerTitle}><h2>Accueil</h2></li>
                    </Link>
                        <div className={styles.footerFlex}>
                    <Link href="/about">
                        <li><a>A propos de moi</a></li>
                    </Link>
                    <Link href="/project">
                        <li><a>Projets</a></li>
                    </Link>
                        </div>
                    </ul>

                    <ul>
                        <Link href="/contact">
                        <li className={styles.footerTitle}><h2>Me contacter</h2></li>
                        </Link>
                        <div className={styles.footerFlex}>
                        <li><a>CV</a></li>
                        <Link href="https://fr.linkedin.com/in/pornchai-chanaloet-575a631bb">
                        <li><a>LinkedIn</a></li>
                        </Link>
                        </div>
                    </ul>

                    <ul>
                        <li className={styles.footerTitle}><h2>Social</h2></li>
                        <div className={styles.footerFlex}>
                        <Link href="https://discordapp.com/users/Ponch#5027">
                            <a><i className="fab fa-discord"></i></a>
                        </Link>
                        <Link href="https://github.com/PonchHKT">
                            <a><i className="fab fa-github"></i></a>
                        </Link>
                        <Link href="https://www.instagram.com/ponchhkt/?hl=fr">
                            <a><i className="fab fa-instagram"></i></a>
                        </Link>
                        </div>
                    </ul>
            
                </div>

            </div>

            <hr/>

            <div className={styles.copyright}>
                <h1>© 2022 Pornchai Chanaloet</h1>
            </div>
            
        </footer>

    ) 
}
export default Footer;
