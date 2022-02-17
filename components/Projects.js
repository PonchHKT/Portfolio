import styles from '../styles/projectCard.module.scss'

const Projects = () => {
    return (
        <div className={styles.projectCard}>
            <div className={styles.text}>
                <h2>
                    PROJECT TITLE
                </h2>
                <p>
                    Project Description
                </p>
                <div className={styles.icons}>
                    <i style={{color: '#EAD41C'}} className="fab fa-js-square"></i>
                    <i style={{color: '#E44D26'}} className="fab fa-html5"></i>
                    <i style={{color: '#CD669A'}} className="fab fa-sass"></i>
                </div>
            </div>

            <div className={styles.images}>
                <img src='./img/projects/Capture.PNG'></img>
                <img src='./img/projects/Capture2.PNG'></img>
                <img src='./img/projects/Capture3.PNG'></img>
            </div>
        </div>
    )
}


export default Projects;