import React from "react";
import styles from "./ProtocolOverview.module.css";
import Image from "next/image";

const ProtocolOverview = () => {
  return (
    <div className={styles.container}>
      <section className={styles.protocolSection}>
        <h2 className={styles.title}>SORAYIA.COM <span className={styles.gradient}>PROTOCOL</span></h2>
        <p className={styles.subtitle}>
          Digital Avatar Provider Infrastructure
        </p>
        <div className={styles.diagram}>
          <Image
            src="/images/protocol-diagram.png"
            alt="Protocol Diagram"
            width={1230}
            height={1080}
            className={styles.diagramImage}
          />
        </div>
      </section>
      <section className={styles.useCasesSection}>
        <h3 className={styles.useCasesTitle}>
          <span className={styles.gradient}>USE</span> CASE
        </h3>
        <p className={styles.useCasesSubtitle}>
          Here are some of the ways you can use your Digital Avatar.
        </p>
        <div className={styles.useCasesGrid}>
          <div className={styles.useCaseCard}>
            <h4 className={styles.useCaseTitle}>AI Companions</h4>
            <p className={styles.useCaseDescription}>
              Integrate conversational AI-powered Digital Avatars to assist and
              interact with users across various platforms.
            </p>
          </div>
          <div className={styles.useCaseCard}>
            <h4 className={styles.useCaseTitle}>Game NPCs</h4>
            <p className={styles.useCaseDescription}>
              Use Digital Avatars as intelligent NPCs in video games, providing
              realistic interactions and dynamic behavior.
            </p>
          </div>
          <div className={styles.useCaseCard}>
            <h4 className={styles.useCaseTitle}>Web3 Agents</h4>
            <p className={styles.useCaseDescription}>
              Bridge your digital identity with Web3 through agents that
              represent your Digital Avatar in decentralized environments.
            </p>
          </div>
          <div className={styles.useCaseCard}>
            <h4 className={styles.useCaseTitle}>Education</h4>
            <p className={styles.useCaseDescription}>
              Set up Digital Avatars as educational assistants that help
              students with their learning needs.
            </p>
          </div>
          <div className={styles.useCaseCard}>
            <h4 className={styles.useCaseTitle}>Customer Service</h4>
            <p className={styles.useCaseDescription}>
              Implement Digital Avatars in customer service to offer a
              personalized and interactive experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProtocolOverview;
