import styles from '../styles/contact.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import emailjs from 'emailjs-com';
import Popup from '../components/MessagePopup'
import { useState } from 'react';
import React, { useRef } from 'react';

export default function Contact() {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [text, setText] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_bmp205s', 'template_r9igx1v', form.current, 'user_70g4V65QW8zpZyreiScG8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset()
    }

    const autoComplete = (e) => {
        setText(e.target.value);
    };
    
    return (
        
        
        <div className={styles.contactContainer}>

            <Navbar/>

            <main>

                    <div className={styles.hello}>
                        <h1>Bonjour !</h1>
                        <h2>Vous pouvez me contacter à travers les réseaux sociaux présentés ici ou sinon <br/>n’hésitez pas de me laisser un message en utilisant le formulaire ci-dessous.</h2>
                    </div>

                    <div className={styles.social}>
                            <ul>
                                <i className="fab fa-facebook-square" style={{color: '#4267B2'}}></i>
                                <i className="fab fa-linkedin" style={{color: '#0077b5'}}></i>
                                <i className="fab fa-discord" style={{color: '#7289da'}}></i>
                                <i className="fab fa-instagram" style={{color: '#8a3ab9'}}></i>
                            </ul>
                        </div>

                    <div className={styles.contactboxContainer}>

                        <div className={styles.contactBox}>

                            <form ref={form} onSubmit={sendEmail}>
                            <div className={styles.numberforms}>
                            <h3>Numéro</h3>
                            <input name="number" type="number" className={styles.inputnumber} placeholder="Numéro de téléphone" minLength="9" onChange={autoComplete} required/>
                            </div>

                            <div className={styles.emailforms}>
                            <h3>E-mail</h3>
                            <input name="email" type="email" className={styles.inputemail} placeholder="Votre adresse électronique" minLength="5" onChange={autoComplete} required/>
                            </div>

                            
                            <div className={styles.msgforms}>
                            <h3>Message</h3>
                            <textarea name="message" className={styles.inputmsg} placeholder="Message..." minLength="10" onChange={autoComplete} required/>
                            </div>

                            <div className={styles.buttonContainer}>
                            <button disabled={text === ''} onClick={() => setButtonPopup(true)} type="submit" value="Send Message">Envoyer</button>
                            </div>
                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <h3>Votre message a bien été envoyé !</h3>
                                <p>Je vous répondrais dans les meilleurs délais.</p>
                            </Popup>
                            </form>

                        </div>

            </div>

            </main>

            <Footer/>

        </div>
    )
}
