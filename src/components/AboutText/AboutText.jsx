import styles from "./AboutText.module.css";

const AboutText = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subTitle}>Mi camino dev ♡</h3>
      <p className={styles.description}>
        {" "}
        Hola, mi nombre es Florencia. Soy Desarrolladora FullStack con más de 4
        años de experiencia, tanto en relación de dependencia como freelance. Mi
        formación en Ingeniería en Sistemas me llevó a descubrir mi pasión por
        la programación. Mi objetivo es generar un impacto duradero,
        destacándome en lo que más me apasiona: el desarrollo web.
      </p>
    </div>
  );
};

export default AboutText;
