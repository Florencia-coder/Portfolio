import React from "react";
import styles from "./contactForm.module.css";
import useContactForm from "../../hooks/useContactForm";
import { FormattedMessage, useIntl } from "react-intl";

const ContactForm = () => {
  const { formData, handleChange, handleSubmit } = useContactForm(
    () => alert("Mensaje enviado con éxito"),
    () => alert("Error al enviar el mensaje")
  );
  const intl = useIntl();

  const formFields = [
    {
      label: intl.formatMessage({ id: "app.contact.label.name" }),
      name: "name",
      placeholder: intl.formatMessage({ id: "app.contact.input.name" }),
      type: "text",
      autoComplete: "name",
    },
    {
      label: intl.formatMessage({ id: "app.contact.label.mail" }),
      name: "email",
      placeholder: intl.formatMessage({ id: "app.contact.input.mail" }),
      type: "email",
      autoComplete: "email",
    },
  ];

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        {formFields.map(({ label, name, placeholder, type, autoComplete }) => (
          <label key={name} className={styles.labelRow}>
            {label}
            <input
              className={styles.inputField}
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
            />
          </label>
        ))}

        <label className={styles.labelRow}>
          <FormattedMessage id="app.contact.label.msg" />
          <textarea
            className={`${styles.inputField} ${styles.textarea}`}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit" className={styles.submitBtn}>
        <FormattedMessage id="app.contact.message" />
      </button>
    </form>
  );
};

export default ContactForm;
