import React from "react";
import useContactForm from "../../hooks/useContactForm";
import SocialButton from "../SocialButton/SocialButton";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import styles from "./ContactSection.module.css";

const SOCIAL_LINKS = [
  {
    id: "whatsapp",
    url: "https://wa.me/5493516963006",
    icon: IoLogoWhatsapp,
    size: 300,
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/florflandesdevelop/",
    icon: FaLinkedinIn,
    size: 250,
  },
  {
    id: "github",
    url: "https://github.com/Florencia-coder",
    icon: FaGithub,
    size: 200,
  },
];

const ContactSection = () => {
  const { formData, handleChange, handleSubmit } = useContactForm(
    () => alert("Mensaje enviado con éxito"),
    () => alert("Error al enviar el mensaje")
  );

  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.row1}>
          {SOCIAL_LINKS.slice(0, 2).map(({ id, url, icon, size }) => (
            <div
              key={id}
              className={id === "whatsapp" ? styles.box1 : styles.box2}
            >
              <SocialButton href={url} icon={icon} size={size} />
            </div>
          ))}
        </div>

        <div className={styles.row2}>
          <SocialButton
            href={SOCIAL_LINKS[2].url}
            icon={SOCIAL_LINKS[2].icon}
            size={SOCIAL_LINKS[2].size}
          />
          <h1>GitHub</h1>
        </div>
      </div>

      <div className={styles.section2}>
        <h1 className={styles.title}>¡CONTACTAME!</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            {["name", "email"].map((field) => (
              <label key={field} className={styles.labelRow}>
                {field === "name" ? "Nombre:" : "E-mail:"}
                <input
                  className={styles.inputField}
                  type={field === "email" ? "email" : "text"}
                  placeholder={`Tu ${field === "name" ? "Nombre" : "Email"}`}
                  autoComplete={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              </label>
            ))}

            <label className={styles.labelRow}>
              Mensaje:
              <textarea
                className={`${styles.inputField} ${styles.textarea}`}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
          </div>

          <button type="submit" className={styles.submitBtn}>
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
