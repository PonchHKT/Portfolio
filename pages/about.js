import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import PurpleButton from '../components/PurpleButton'
import styles from '../styles/about.module.scss'

export default function About() {

    const textIntroTemplate = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry";

    const [textIntro, setTextIntro] = useState(textIntroTemplate.substring(0, 300))

    const seeMore = (val) => {
        if(val === "plus") {
            setTextIntro(textIntroTemplate)
        } else {
            setTextIntro(textIntroTemplate.substring(0, 300))
        }
    }

    return (
        <div className={styles.homeContainer}>

                <Navbar/>

            <main>
                
                <div className={styles.introContainer}>

                    <div className={styles.introBox}>

                        <img src="https://i.pinimg.com/550x/0e/51/7e/0e517eb57cb5a992ef3230b0e0d792af.jpg"/>

                        <div className={styles.introText}>
                            <h1>A propos de moi</h1>
                            <p>
                                {textIntro}
                                {textIntro !== textIntroTemplate ? 
                                    <button onClick={() => seeMore("plus")}>Voir plus</button> 
                                    : 
                                    <button onClick={() => seeMore("moins")}>Voir moins</button>
                                }
                            </p>
                            <PurpleButton className={styles.infoBtn} text="Plus à propos de moi" icon="fad fa-arrow-right"/>
                        </div>

                    </div>

                </div>

            </main>

            <Footer/>

        </div>
        
    )
}
