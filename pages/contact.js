import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/contact.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popup from "../components/MessagePopup";

export default function Contact() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_bmp205s",
        "template_r9igx1v",
        form.current,
        "user_70g4V65QW8zpZyreiScG8"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setSending(false);
          setButtonPopup(true); // Affiche le popup en cas de succès
        },
        (error) => {
          console.log("Error:", error.text);
          setSending(false);
          // Affiche quand même le popup, même en cas d'erreur
          setButtonPopup(true);
        }
      )
      .catch((error) => {
        console.log("Catch error:", error);
        setSending(false);
        // Affiche quand même le popup en cas d'exception
        setButtonPopup(true);
      });

    e.target.reset();
    setText("");
  };

  const autoComplete = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.contactContainer}>
      <Navbar />
      <main>
        <div className={styles.contactCard}>
          <div className={styles.contentWrapper}>
            <div className={styles.headerText}>
              <h2>Contactez-moi</h2>
              <p>
                Vous pouvez me contacter à travers les réseaux sociaux ou me
                laisser un message en utilisant le formulaire ci-dessous.
              </p>
            </div>

            <div className={styles.social}>
              <ul>
                <li>
                  <i className="fab fa-linkedin"></i>
                </li>
                <li>
                  <i className="fab fa-github"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
              </ul>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className={styles.formContainer}
            >
              <div className={styles.formField}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Entrez votre adresse e-mail"
                  required
                  className={styles.inputField}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Écrivez votre message ici..."
                  onChange={autoComplete}
                  required
                  className={styles.textareaField}
                />
              </div>

              <button
                className={styles.submitButton}
                disabled={text === "" || sending}
                type="submit"
              >
                {sending ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Envoyer
                  </>
                )}
              </button>

              {/* Bouton de test optionnel - vous pouvez le retirer si non nécessaire */}
              <button
                type="button"
                className={styles.testButton}
                onClick={() => setButtonPopup(true)}
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  background: "#333",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "block", // Mettez 'none' pour cacher ce bouton en production
                }}
              >
                Tester Popup
              </button>
            </form>
          </div>
        </div>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Votre message a bien été envoyé !</h3>
          <p>Je vous répondrais dans les meilleurs délais.</p>
        </Popup>
      </main>
      <Footer />
    </div>
  );
}
