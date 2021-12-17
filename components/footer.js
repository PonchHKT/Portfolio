import styles from '../styles/footer.module.scss'

function Footer() {
    return (

        <footer className={styles.footerContainer}>

            <hr/>

            <div className={styles.footerBody}>

                <h1>ShuxDev.</h1>

                <div className={styles.footerPage}>

                <ul>
                    <li className={styles.footerTitle}><a>Accueil</a></li>
                    <li><a>A propos de moi</a></li>
                    <li><a>Projets</a></li>
                </ul>

                <ul>
                    <li className={styles.footerTitle}><a>Me contacter</a></li>
                    <li><a>CV</a></li>
                    <li><a>LinkedIn</a></li>
                </ul>

                <ul>
                    <li className={styles.footerTitle}><a>Social</a></li>
                    <div>
                    </div>
                </ul>
            
                </div>

            </div>

            <hr/>
            
        </footer>

    ) 
}
export default Footer;