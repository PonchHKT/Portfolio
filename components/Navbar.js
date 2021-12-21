import Link from 'next/link';
import styles from '../styles/nav.module.scss'

function Navbar() {
    return (
        <header className={styles.navContainer}>
            <div className={styles.navItems}>

                <div>
                    <p>ShuxDev.</p>
                </div>

                <ul>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/about">A propos de moi</Link></li>
                    <li><Link href="/project">Projets</Link></li>
                    <li><Link href="/contact">Me contacter</Link></li>
                </ul>

            </div>

        </header>
    )
}

export default Navbar;