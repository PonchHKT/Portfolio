import styles from '../styles/projectCard.module.scss'

const Projects = () => {
    return (
        <div className={styles.projectCard}>
            <img src="https://testbytes.technoallianceindia.com/wp-content/uploads/2019/01/testproject-1.png"/>
            <div>
                <h1>Project Title</h1>
                <h2>NextJS / Sass / Prisma</h2>
                <p>Project description - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Project description - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Project description - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Project description - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Project description - It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <button>Details</button>
            </div>
        </div>
    )
}


export default Projects;