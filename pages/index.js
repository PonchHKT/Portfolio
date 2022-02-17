import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ParticlesBG from '../components/Particles'
import Projects from '../components/Projects'
import PurpleButton from '../components/PurpleButton'
import styles from '../styles/home.module.scss'
import Link from 'next/link';

export default function Home() {

    const listImg = [
        {
            title: 'La Taverne Du Design', 
            img: 'https://dam.malt.com/bab6ce2d-4500-456c-8fba-2440c3c16a82?func=bound&w=2048&org_if_sml=1'
        },
        {
            title: 'La Taverne Du Design', 
            img: 'https://dam.malt.com/99b43e6f-dd01-4462-a637-b7964484f52e?func=bound&w=2048&org_if_sml=1'
        },
        {
            title: 'La Taverne Du Design', 
            img: 'https://i.gyazo.com/aa2efc809d8eec274b461ce8c4dce073.png'
        },
        {
            title: 'La Taverne Du Design', 
            img: 'https://i.gyazo.com/d9f7f32a30d984f6572d1298a95bb112.png'
        },
        {
            title: 'La Taverne Du Design', 
            img: 'https://i.gyazo.com/2b6ceb4c9753deb2a096337d1e6abe1f.jpg'
        },
        {
            title: 'La Taverne Du Design', 
            img: 'https://i.gyazo.com/56389beb0446102fe6e025d995043ebc.jpg'
        },
    ]

    const dlCV = () => {
        const url = `./cv/cv.pdf`
        const a = document.createElement("a")
        a.href = url
        a.download = url.split("/").pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    const textIntroTemplate = "Actuellement étudiant dans une école informatique à Paris (Efrei PARIS). J'ai réalisé plusieurs missions pour différents clients telles que -> Réalisation d'un site web vitrine de restauration, Création d'une application iOS et android, Gestion d'une base de données avec système de recherche par filtre et bien d'autres petites missions. Le fait que je sois à Efrei Paris m'a énormément aidé dans ma capacité à réaliser les tâches des clients. Cette école nous apprend depuis la première année à se débrouiller seul et à apprendre par soi-même. Chose que je fais depuis l'âge de 15 ans car je suis passioné mais j'ai aussi appris à être encore plus autonome grâce à cette école. Je peux m'adapter rapidement aux besoins des clients et même s'il s'agit d'une nouvelle technologie, j'apprends rapidement pour être en mesure de répondre au besoin du client. Je suis bien évidement à l'écoute de mes anciens clients qui ont tous été satisfait de mes services. Mon expérience en tant qu'étudiant du numérique m'ont permis de comprendre comment fonctionne cet univers et je suis maintenant à l'aise avec tout ce qui concerne le freelance : Contacter le client ; Identifier ses besoins ; Définir les problématiques ; Réalisation des tâches avec un suivi pour le client ; Présentation du travail ; Gestion du paiement (devis/factures/...) ; Livraison et installation du travail ; etc... Je me tiens à votre disposition pour toutes informations complémentaires."

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

                <div className={styles.pgContainer}>
                    
                    <ParticlesBG />

                    <div className={styles.text}>

                        <h1>Je suis <a></a></h1>
                        <h2>Développeur Web Junior</h2>
                        <h3>Ceci est mon Portofolio!</h3>

                        <div className={styles.buttonContainer}>
                        <Link href="/project">
                            <li style={{listStyle: 'none'}}><PurpleButton isPurple text="Mes projets"/></li>
                        </Link>  
                            <PurpleButton text="Télécharger CV" icon="fad fa-download" action={() => dlCV()}/>
                        </div>

                    </div>

                </div>

                <hr className={styles.separator1}/>

                <div className={styles.section1}>
                    
                    <img className={styles.luffy} src="./img/luffy.png"></img>
                    
                    <div className={styles.lineItem1}></div>
                    <div className={styles.lineItem2}></div>
                    <div className={styles.lineItem3}></div>
                    <div className={styles.lineItem4}></div>

                    <div className={styles.introContainer}>

                        <div className={styles.introBox}>

                            <div className={styles.reactTurn1}></div>
                            <div className={styles.reactTurn2}></div>
                            <div className={styles.reactTurn3}></div>
                            <div className={styles.reactTurn4}></div>

                            <div className={styles.profile}>
                                <img style={{backgroundImage: "url(https://cdn.discordapp.com/attachments/789414641498325032/920306693823430696/image0.png)"}}/>
                            
                                <div>
                                    <h1>Pornchai - C.</h1>
                                    <h2>Développeur Web Junior</h2>
                                </div>

                            </div>


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
                                <Link href="/about">
                                <li style={{listStyle: 'none'}}><PurpleButton className={styles.infoBtn} text="Plus à propos de moi" icon="fad fa-hand-point-right"/></li>
                                </Link>
                            </div>

                        </div>

                    </div>

                    <div className={styles.projectTitle}>
                        <h1>Mes projets</h1>

                        <div className={styles.portfolioGrid }>
                            {
                                listImg.map((x, i) => {
                                    return (
                                        <div style={{gridArea: `IMG-${i + 1}`}} className={`portfolioUnique ${styles.onePortfolio}`} key={i}>
                                            <img src={x.img} alt={x.title} />
                                            <div className={styles.info}>
                                                <p>{x.title}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <Link href="/project">
                        <li style={{listStyle: 'none'}}><PurpleButton isPurple text="Voir plus de projet"/></li>
                        </Link>
                    </div>

                </div>
                

            </main>

            <Footer/>

        </div>
        
    )
}
