import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import PurpleButton from '../components/PurpleButton'
import styles from '../styles/about.module.scss'

export default function About() {
    return (
        <div className={styles.homeContainer}>

                <Navbar/>

            <main>
                
                <div className={styles.introContainer}>

                    <div className={styles.introBox}>

                        <img src="https://i.pinimg.com/550x/0e/51/7e/0e517eb57cb5a992ef3230b0e0d792af.jpg"/>

                        <div className={styles.introText}>
                            <h1>A propos de moi</h1>
                            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            <span/> when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <span/>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            <span/>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <span/> when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <span/>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            <span/>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <span/> when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <span/>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            <span/>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <span/> when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <span/>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            <span/>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <span/> when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            <span/>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            <span/>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
                            <PurpleButton className={styles.infoBtn} text="Plus à propos de moi" icon="fad fa-arrow-right"/>
                        </div>

                    </div>

                </div>

            </main>

            <Footer/>

        </div>
        
    )
}
