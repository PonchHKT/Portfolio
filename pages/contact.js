import styles from '../styles/contact.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        
        
        <div className={styles.contactContainer}>

            <Navbar/>

            <main>

                    <div className={styles.hello}>
                        <h1>Hello !</h1>
                        <h2>I am actually writing anything about anything because it distract you from knowing that this is just a Loremipsum but way better.</h2>
                    </div>

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

            </main>

            <Footer/>

        </div>
    )
}
