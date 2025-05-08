import React from "react";
import styles from "../styles/contact.module.scss";

function MessagePopup(props) {
  // Si la popup est déclenchée, on l'affiche
  return props.trigger ? (
    <div
      className={styles.popup}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        className={styles.popupInner}
        style={{
          position: "relative",
          backgroundColor: "#1c1e22",
          padding: "40px",
          borderRadius: "15px",
          maxWidth: "500px",
          width: "90%",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        <i
          className={`fas fa-times ${styles.close}`}
          onClick={() => props.setTrigger(false)}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            fontSize: "24px",
            color: "#8458ff",
            cursor: "pointer",
          }}
        ></i>
        <div
          className={styles.popupContent}
          style={{
            textAlign: "center",
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  ) : null;
}

export default MessagePopup;
