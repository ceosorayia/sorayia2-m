import React from "react";
import styles from "./HeroFeatures.module.css";
import FeatureCard from "./FeatureCard/FeatureCard";

const HeroFeatures = () => {
  const features = [
    {
      title: "Heroes Studio",
      description:
        "Easily design unique avatars with rich backstories, personalities, memories, and traits. Craft lifelike characters for your users and deploy them seamlessly in your Web3 projects.",
    },
    {
      title: "Deployment Ramp",
      description:
        "Bring your characters to life with Heroes, designed to enhance user interaction and engagement. Craft lifelike avatars that serve as interoperable chatbots in your dApp, seamlessly integrating into the metaverse.",
    },
    {
      title: "Heart Intelligence",
      description:
        "Heart intelligence is AI that understands emotions, making digital experiences more human. It allows Digital avatars to adapt to user feelings, creating empathetic and engaging interactions.",
    },
    {
      title: "Asset Marketplace",
      description:
        "Outfits, Accessories, and More. Discover a vast collection of digital outfits and accessories. Customize your avatars with unique assets created by your community.",
    },
  ];

  return (
    <div className={`${styles.container} containerInfinite`}>
      <h2 className={styles.heading}>What's up Heroes</h2>
      <h3 className={styles.subHeading}>
        Everything you need for <span className={styles.gradient}>AI</span> Digital Avatar
      </h3>
      <p className={styles.description}>
        The Character Layer Modular Infrastructure
      </p>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroFeatures;
