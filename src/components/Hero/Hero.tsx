import React from "react";
import ButtonEmpty from "../ButtonEmpty/ButtonEmpty";
import ButtonFilled from "../ButtonFilled/ButtonFilled";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <p className={styles.text1}>
          The #1 platform that serves Web3 business
        </p>
        <h1 className={styles.header}>
          Digital Avatars that Makes User <span className={styles.gradient}>Support Warm and Human</span>
        </h1>
        <div className={styles.heroImageContainerMobile}>
          <Image
            src="/images/heroMobile.png"
            width={819}
            height={400}
            className={styles.foregroundImageMobile}
            alt="Foreground Image"
          />
        </div>
        <p className={styles.text2}>
          Revolutionize the way your users interact with your Web3 platform,
          with a digital assistant that learns and evolves with them.
        </p>

        <div className={styles.buttonContainer}>
          <ButtonFilled text={"Get Started"} />
          <ButtonEmpty text={"Try a Demo"} />
        </div>
        <p className={styles.text}>
          Join 2000+ dApps Using Our Personalized Hero&apos;s
        </p>
      </div>
      <div className={` ${styles.heroImageColumn}`}>
        <Image
          src={"/images/hero.png"}
          fill
          alt="heroContainer"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.smallEllipse}></div>
      <div className={styles.smallEllipse2}></div>
    </div>
  );
};

export default Hero;
