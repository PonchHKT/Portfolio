import styles from '../styles/nav.module.scss'

function Navbar() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.navItems}>

                <div>
                    <p>ShuxDev.</p>
                </div>

                <ul>
                    <li><a>Accueil</a></li>
                    <li><a>A propos de moi</a></li>
                    <li><a>Projets</a></li>
                    <li><a>Me contacter</a></li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar;