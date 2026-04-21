import React from "react";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                MI PORTFOLIO
            </h1>
            <div className={styles.subtitle}>
                <h2>FLORENCIA FLANDES</h2>
                <h3>Desarrolladora Web | Frontend</h3>
            </div>
        </div >
    );
};

export default Home;
