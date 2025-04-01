import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import styles from "./socialLinks.module.css";

const SocialLinks = () => {
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

  return (
    <>
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
    </>
  );
};

export default SocialLinks;
