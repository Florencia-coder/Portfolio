import { FormattedMessage } from "react-intl";
import styles from "./aboutText.module.css";

const AboutText = () => {
  const introduction = {
    title: <FormattedMessage id="app.about.subtitle" />,
    description: <FormattedMessage id="app.about.description" />,
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{introduction.title}</h3>
      <p className={styles.description}>{introduction.description}</p>
    </div>
  );
};

export default AboutText;
