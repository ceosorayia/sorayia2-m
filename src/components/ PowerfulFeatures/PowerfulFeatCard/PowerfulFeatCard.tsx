// PowerfulFeatCard.tsx

import React from "react";
import Image from "next/image";
import styles from "./PowerfulFeatCard.module.css";

interface PowerfulFeatCardProps {
  title: string;
  description: string;
  imageSrc: string;
  width?: number;
  height?: number;
  top?: string;
  overflow?: string;
}

const PowerfulFeatCard: React.FC<PowerfulFeatCardProps> = ({
  title,
  description,
  imageSrc,
  width = 400, 
  height = 200,
  top = "0",
  overflow = "hidden", 
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer} style={{ overflow }}>
        <Image
          src={imageSrc}
          alt={title}
          width={width}
          height={height}
          className={styles.image}
          style={{ top, width: width, height: height }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default PowerfulFeatCard;
