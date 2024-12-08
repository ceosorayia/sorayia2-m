import React from "react";
import styles from "./PowerfulFeatures.module.css";
import PowerfulFeatCard from "./PowerfulFeatCard/PowerfulFeatCard";
import SmallFeature from "./SmallFeature/SmallFeature";

const features = [
  {
    title: "Reliable, Insightful Responses",
    description:
      "Empower your chatbot with blockchain-based infrastructure to ensure every interaction is secure and reliable, giving your users the confidence they need in every response.",
    imageSrc: "/images/powerful.png",
    width: 370,
    height: 280,
    top: "0px",
    overflow: "hidden",
  },
  {
    title: "Lead Generation Engine",
    description:
      "Gather your customers' data seamlessly while delivering a personalized experience that meets their needs.",
    imageSrc: "/images/powerful4.png",
    width: 370,
    height: 280,
    top: "0px",
    overflow: "hidden",
  },
  {
    title: "Advanced Analytics",
    description:
      "Get insights into your Digital Avatar’s interactions with your customers and use them to improve your business performance.",
    imageSrc: "/images/powerful3.png",
    width: 370,
    height: 280,
    top: "0px",
    overflow: "hidden",
  },
];
const smallerFeatures = [
  {
    title: "Customizations",

    description:
      "Bring your brand to life with a customizable digital avatar. Create engaging, lifelike characters that interact seamlessly with users, offering personalized support and a unique brand presence in the digital world",
    icon: "/images/customizations.png",
  },
  {
    title: "Multiple Data Sources",
    description:
      "Easily import data from various sources and make sure that your AI uses existing resources for informed interactions.",
    icon: "/images/multiple.png",
  },
  {
    title: "Privacy & Security",
    description:
      "Your data is securely stored on servers and on the blockchain, combining robust encryption with the transparency and immutability of decentralized storage.",
    icon: "/images/privace.png",
  },
  {
    title: "Auto-Retrain",
    description:
      "Enable your Digital Avatar to automatically retrain, ensuring it stays up-to-date and fully synchronized with your latest data for optimal performance and accuracy.",
    icon: "/images/auto.png",
  },
  {
    title: "Infinite Memory",
    description:
      "Powered by DID technology, your avatar can remember every each interaction and each user detail, including habits and preferences, creating a personalized experience that feels like a true friendship.",
    icon: "/images/infinite.png",
  },
  {
    title: "White-label",
    description: "Remove Sorayia.com branding and use a custom domain.",
    icon: "/images/whitelabel.png",
  },
  {
    title: "Interoperable Integrations",
    description:
      "Seamlessly connect your chatbot with various platforms and tools, allowing for smooth data exchange and collaboration across your digital ecosystem. Ensure enhanced functionality and a unified user experience through interoperability.",
    icon: "/images/inter.png",
  },
  {
    title: "80+ Languages",
    description:
      "Reach your customers in their native language even if your data is in a different language.",
    icon: "/images/languages.png",
  },
  {
    title: "Asset Store",
    description:
      "Empower your chatbot users by allowing them to create and sell assets like clothes, outfits, and accessories. These customizable assets can be reused and offered to companies utilizing your dApp integration solutions and other platforms, fostering creativity and collaboration.",
    icon: "/images/asset.png",
  },
];

const PowerfulFeatures = () => {
  return (
    <div className={`${styles.container} powerfulSection`}>
      <div className={styles.innerContent}>
        <h2 className={styles.header}>POWERFUL <span className={styles.gradient}>FEATURES</span></h2>
        <p className={styles.subheader}>
          Everything you need for AI Digital Avatar.
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <PowerfulFeatCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              width={feature.width}
              height={feature.height}
              top={feature.top}
              overflow={feature.overflow}
            />
          ))}
        </div>
        <div className={styles.ellipse}></div>
        <div className={styles.smallerFeaturesGrid}>
          {smallerFeatures.map((feature, index) => (
            <SmallFeature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerfulFeatures;
