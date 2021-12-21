import styles from '../styles/contact.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

export default function Contact() {
    return (
        <div className={styles.contactPage}>
            
            <main>

            <Navbar/>

            <div className={styles.contactContainer}>

                <div className={styles.contactText}>

                    <h1>Hello !</h1>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>

                    <div className={styles.contactboxContainer}>

                        <div className={styles.contactBox}>

                            <div className={styles.numberforms}>
                            <h3>Numéro</h3>
                            <input className={styles.inputnumber} placeholder="Numéro de téléphone"/>
                            </div>

                            <div className={styles.emailforms}>
                            <h3>E-mail</h3>
                            <input className={styles.inputemail} placeholder="Votre adresse électronique"/>
                            </div>

                            
                            <div className={styles.msgforms}>
                            <h3>Message</h3>
                            <input className={styles.inputmsg} placeholder="Bonjour"/>
                            </div>

                            <div className={styles.buttonContainer}>
                            <button>Envoyer</button>
                            </div>

                        </div>

                    </div>

                </div>


            </div>

            </main>

            <Footer/>

        </div>
    )
}