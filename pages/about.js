import { useState } from 'react';
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

                        <img src="https://cdn.discordapp.com/attachments/789414641498325032/920306693823430696/image0.png"/>

                        <div className={styles.introText}>
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
