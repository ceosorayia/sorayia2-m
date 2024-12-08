"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./ProtocolOverview.module.css";
import Image from "next/image";

const ProtocolOverview = () => {
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
      const container = document.querySelector('.powerfulSection') as HTMLElement;

      if (container) {
        container.style.backgroundColor = isInView ? "#000000" : "#FFFFFF"; // Set dark or light background
        container.style.transition = "background-color 0.5s ease-in-out"; // Smooth transition for background color
      }
    }
  }, [isInView]);

  return (
    <div ref={sectionRef} className={styles.container}>
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
