import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yash</h1>
        <p className={styles.description}>
          I'm a Frontend and ReactJs Developer with some basic backend knowledge. Reach out if you need any help.
        </p>
        <a href="mailto:ygajjar634@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="assets\vecteezy_3d-male-character-happy-working-on-a-laptop_24387908.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
