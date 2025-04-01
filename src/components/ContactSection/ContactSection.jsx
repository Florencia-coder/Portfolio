import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./contactSection.module.css";
import { FormattedMessage } from "react-intl";

const ContactSection = () => {
  return (
    <div className={styles.container}>
      <article className={styles.section1}>
        <SocialLinks />
      </article>

      <article className={styles.section2}>
        <h1 className={styles.title}>
          <FormattedMessage id="app.contact.title" />
        </h1>
        <ContactForm />
      </article>
    </div>
  );
};

export default ContactSection;
