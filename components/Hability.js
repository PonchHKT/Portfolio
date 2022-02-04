import styles from '../styles/hability.module.scss'

function Hability() {    
    return (
            <div className={styles.habilityContainer}>

                <div className={styles.habilityBox}>
                    <i className="fad fa-mobile"></i>
                    <h1>Design responsive</h1>
                    <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. </h2>
                </div>

                <div className={styles.habilityBox}>
                    <i className="fad fa-code"></i>
                    <h1>HTML et CSS</h1>
                    <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. </h2>
                </div>

                <div className={styles.habilityBox}>
                    <i className="fad fa-users-class"></i>
                    <h1>Travail en équipe</h1>
                    <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. </h2>
                </div>

                <div className={styles.habilityBox}>
                    <i className="fad fa-bullhorn"></i>
                    <h1>Communication</h1>
                    <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. </h2>
                </div>

                <div className={styles.habilityBox}>
                    <i className="fad fa-abacus"></i>
                    <h1>Conception</h1>
                    <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. </h2>
                </div>

                <div className={styles.habilityBox}>
                    <i className="fad fa-brackets-curly"></i>
                    <h1>Interactivité</h1>
                    <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. </h2>
                </div>

            </div>
    )
}
export default Hability;
