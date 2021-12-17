import { useState } from 'react';
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import PurpleButton from '../components/PurpleButton'
import styles from '../styles/about.module.scss'

export default function About() {

    return (
        <div className={styles.aboutContainer}>

                <Navbar/>

            <main>
                
                <div className={styles.aboutintroContainer}>

                    <div className={styles.aboutBox}>

                        <img src="https://cdn.discordapp.com/attachments/789414641498325032/920306693823430696/image0.png"/>

                        <div className={styles.aboutText}>
                            <h1>Pornchai Chanaloet</h1>
                            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                        </div>

                    </div>

                </div>

                            <div className={styles.myhabilityTitle}>
                                <h1>Mes habilitées</h1>
                            </div>

            </main>

            <Footer/>

        </div>
        
    )
}
