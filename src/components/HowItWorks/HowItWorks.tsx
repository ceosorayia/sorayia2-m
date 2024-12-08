"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Personalize your Hero",
    description:
      "Personalize every aspect of your 3D Hero to fit your brand’s unique style. Adjust appearance, behavior, and voice, and define how it interacts with users. Create a truly unique experience that aligns perfectly with your vision.",
  },
  {
    number: "02",
    title: "Import your Data",
    description:
      "Integrate text, PDF, and web links into your data pipeline, leveraging a vast array of Web3 data. Extract, process, and embed the information directly into your digital avatar, ensuring precise and data-rich interactions for your users.",
  },
  {
    number: "03",
    title: "Customize behavior",
    description:
      "Make your Digital Avatar blend perfectly into your Dapp with custom colors and logos. Align its personality with your brand through tailored instructions for a consistent and engaging user experience.",
  },
  {
    number: "04",
    title: "Embed on your Dapp & Metaverse",
    description:
      "Integrate your digital avatars effortlessly into your dApp and the metaverse. Enhance user interactions with AI-powered, data-rich avatars that bring a new level of engagement and immersion to your virtual environments.",
  },
  {
    number: "05",
    title: "Integrate with your tools",
    description:
      "Ensure seamless interoperability with your existing tools. Connect your digital avatars to APIs, CRM systems, and Web3 services, enabling smooth data flow and enhanced functionality.",
  },
];

const images = [
  "/images/placeholder1.png",
  "/images/placeholder2.png",
  "/images/placeholder3.png",
  "/images/placeholder4.png",
  "/images/placeholder5.png",
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return isMobile;
};

const HowItWorks: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isInView, setIsInView] = useState(false); // Track visibility state

  const sectionRef = useRef<HTMLDivElement | null>(null); // Ref for the section container
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true); // Section is in view
        } else {
          setIsInView(false); // Section is out of view
        }
      },
      { threshold: 0.1 } // Trigger when 50% of the section is visible
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }
    // Clean up observer
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Apply dynamic background color change to the container when in view
  useEffect(() => {
    if (sectionRef.current) {
      const container = document.querySelector('.containerInfinite') as HTMLElement;

      if (container) {
        container.style.backgroundColor = isInView ? "#000000" : "#FFFFFF"; // Set dark or light background
        container.style.transition = "background-color 0.5s ease-in-out"; // Smooth transition for background color
      }
    }
  }, [isInView]);

  const toggleStep = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    if (activeIndex !== index) {
      setCurrentImage(index);
    }
  };

  const handleBulletClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div ref={sectionRef} className={styles.howItWorks}>
      <div className={`${styles.col} ${styles.colQuestions}`}>
        <h2 className={styles.title}><span className={styles.gradient}>HOW</span> IT WORKS</h2>
        <p className={styles.subtitle}>
          Customizing your Avatar, Upload Your Data, Train the AI, Customize It and Integrate Seamlessly into Your Dapp.
        </p>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.step} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleStep(index)}
            >
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.number}</span>
                <span className={styles.stepTitle}>{step.title}</span>
                <span className={styles.expandIcon}>
                  <Image
                    src="/images/arrow.png"
                    alt="Expand icon"
                    width={15}
                    height={11}
                    className={
                      activeIndex === index
                        ? styles.rotateUp
                        : styles.rotateDown
                    }
                  />
                </span>
              </div>
              <div
                className={`${styles.stepContent} ${
                  activeIndex === index ? styles.activeContent : ""
                }`}
              >
                <div className={styles.stepDescription}>{step.description}</div>
                {isMobile && (
                  <div className={styles.mobileImageContainer}>
                    <Image
                      src={images[index]}
                      alt={`Step ${index + 1} Image`}
                      width={600}
                      height={400}
                      className={styles.mobileImage}
                      loading="eager"
                      priority
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {!isMobile && (
        <div className={styles.col}>
          <div className={styles.carousel}>
            <div className={styles.slide}>
              <div
                className={styles.imageWrapper}
                style={{
                  transform: `translateX(-${currentImage * 100}%)`,
                }}
              >
                {images.map((src, index) => (
                  <div className={styles.imageContainer} key={index}>
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      fill
                      sizes="100vw"
                      style={{ objectFit: "contain" }}
                      priority={index === 0}
                      className={styles.image}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.bullets}>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.bullet} ${
                    currentImage === index ? styles.activeBullet : ""
                  }`}
                  onClick={() => handleBulletClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Preload all images (hidden) */}
      {isMobile && (
        <div className={styles.preloadImages}>
          {images.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Preload Image ${idx}`}
              width={1}
              height={1}
              loading="eager"
              className={styles.hiddenImage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HowItWorks;
