import React from "react";
import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className={styles.featureCard}>
      <p className={styles.text}>
        <span className={styles.bulletPoint}>•</span>
        <span className={styles.title}>{title}:</span>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
