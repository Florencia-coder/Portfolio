import React, { useState } from "react";
import styles from "./HomeRight.module.css";

const HomeRight = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (!isHovering) return;

        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // calculamos ángulos según posición del mouse
        const deltaX = (clientX - centerX) * 1;
        const deltaY = (clientY - centerY) * 1;

        setRotation({ x: deltaY, y: deltaX });
    };

    return (
        <article
            className={styles.right}

        >
            <div className={styles.cubeWrapper} onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                <div
                    className={`${styles.cube} ${!isHovering ? styles.autoRotate : ""}`}

                    style={
                        isHovering
                            ? { transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }
                            : {}
                    }
                >
                    <div className={`${styles.face} ${styles.front}`}>React</div>
                    <div className={`${styles.face} ${styles.back}`}>React Native</div>
                    <div className={`${styles.face} ${styles.faceRight}`}>JavaScript</div>
                    <div className={`${styles.face} ${styles.faceLeft}`}>Redux</div>
                    <div className={`${styles.face} ${styles.top}`}>Git</div>
                    <div className={`${styles.face} ${styles.bottom}`}>TypeScript</div>
                </div>
            </div>
        </article>
    );
};

export default HomeRight;
