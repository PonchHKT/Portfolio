import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/project.module.scss'
import Projects from '../components/Projects'

export default function About() {

    return (
    <div className={styles.projectContainer}>

                <Navbar/>

            <main>

                <div>
                    <h1>Mes projets</h1>
                    <Projects/>
                    <Projects/>
                    <Projects/>
                    <Projects/>
                    <Projects/>
                    <Projects/>
                </div>
            
            </main>

            <Footer/>

    </div>
    )
}
