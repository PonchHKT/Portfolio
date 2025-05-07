import styles from "../styles/contact.module.scss";
import Link from "next/link";

function Popup({ trigger, children }) {
  if (!trigger) return null;

  return (
    <div className={styles.popup}>
      <div className={styles.popupinner}>
        <div className={styles.popupitems}>
          <Link href="/" aria-label="Close popup">
            <i className="fad fa-times-circle"></i>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;
