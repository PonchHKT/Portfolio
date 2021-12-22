import React from 'react'
import styles from '../styles/contact.module.scss'
import Link from 'next/link'

function Popup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
        <div className={styles.popupinner}>
        <div className={styles.popupitems}>
        <Link href="/">
        <i className="fad fa-times-circle"></i>
        </Link>
        { props.children }
        </div>
        </div>
        </div>
     )   : "";
}
export default Popup