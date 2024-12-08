import React from "react";
import Image from "next/image";
import styles from "./SmallFeature.module.css";

interface SmallFeatureProps {
  title: string;
  description: string;
  icon: string;
}

const SmallFeature: React.FC<SmallFeatureProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={styles.smallFeature}>
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <Image src={icon} alt={`${title} icon`} width={25} height={25} />
        </div>
        <h4 className={styles.smallFeatureTitle}>{title}</h4>
      </div>

      <p className={styles.smallFeatureDescription}>{description}</p>
    </div>
  );
};

export default SmallFeature;
