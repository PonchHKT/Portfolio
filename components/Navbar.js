import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/nav.module.scss'

function Navbar() {

    const [displayMenu, setDisplayMenu] = useState(false)

    return (
        <header className={styles.navContainer}>
            <div className={styles.navItems}>

                <div>
                    <p>ShuxDev.</p>
                </div>

                <ul className={`${displayMenu ? styles.wNavbarActive : ''} ${styles.wNavbar}`}>
                    <li><Link href="/">Accueil</Link></li>
                    <hr/>
                    <li><Link href="/about">A propos de moi</Link></li>
                    <hr/>
                    <li><Link href="/project">Projets</Link></li>
                    <hr/>
                    <li><Link href="/contact">Me contacter</Link></li>
                </ul>

                <div onClick={() => setDisplayMenu(!displayMenu)} className={`${displayMenu ? styles.wNavbar2Active : ''} ${styles.wNavbar2}`}></div>

                <i onClick={() => setDisplayMenu(!displayMenu)} className="fad fa-bars"></i>


            </div>

        </header>
    )
}

export default Navbar;