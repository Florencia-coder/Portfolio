import styles from "./hexagon.module.css";

const Hexagon = ({ onClick, children }) => {
  return (
    <>
      <svg className={styles.hexagon} viewBox="0 0 120 140">
        <polygon
          points="60,0 120,35 120,105 60,140 0,105 0,35"
          fill="transparent"
          strokeWidth="4"
        />
        <foreignObject x="0" y="0" width="120" height="140">
          <div className={styles.content} onClick={onClick}>
            {children}
          </div>
        </foreignObject>
      </svg>
    </>
  );
};

export default Hexagon;
