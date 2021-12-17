import styles from '../styles/nav.module.scss'

function Navbar() {
    return (
        <header className={styles.navContainer}>
            <div className={styles.navItems}>

                <div>
                    <p>ShuxDev.</p>
                </div>

                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">A propos de moi</a></li>
                    <li><a>Projets</a></li>
                    <li><a>Me contacter</a></li>
                </ul>

            </div>

        </header>
    )
}

export default Navbar;