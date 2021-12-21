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
                            <a><i className="fab fa-discord"></i></a>
                            <a><i className="fab fa-github"></i></a>
                            <a><i className="fab fa-discord"></i></a>
                        </div>
                    </ul>
            
                </div>

            </div>

            <hr/>

            <div className={styles.copyright}>
                <h1>© 2021 Pornchai Chanaloet</h1>
            </div>
            
        </footer>

    ) 
}
export default Footer;
