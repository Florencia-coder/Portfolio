import React from "react";
import styles from "./HomeLeft.module.css";

const HomeLeft = () => {
    return (
        <article className={styles.left}>
            <h4 className={styles.subtitle}>Hola,</h4>
            <h1 className={styles.title}>Soy Florencia</h1>
            <h2 className={styles.rol}>Desarrolladora Frontend</h2>
            <button className={styles.button}>
                <a href="https://wa.me/5493516963006" target="_blank" rel="noopener noreferrer">
                    Contáctame
                </a>
            </button>

        </article>
    );
}
export default HomeLeft;