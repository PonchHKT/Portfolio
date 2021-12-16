import styles from '../styles/home.module.scss'


function PurpleButton({ action, isPurple, icon, text }) {

return (
    <button onClick={action} className={isPurple ? styles.homeButtonpurple : styles.homeButtonblack}>{icon!== undefined && <i style={{marginRight: '15px'}} className={icon}/>}{text}</button>
   )
}

export default PurpleButton;
