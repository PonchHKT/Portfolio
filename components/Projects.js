import styles from '../styles/home.module.scss'

const Projects = () => {
    return (
        <div className={styles.projectCard}>
            <img style={{marginBottom: '60px', cursor: 'pointer', width: '90vw', maxWidth: '1000px'}} src="https://i.ibb.co/ZKHKYdL/project1.png" alt="Project"/>
        </div>
    )
}


export default Projects;