"use client";

import React, { useState, useRef } from "react";
import styles from "./Integration.module.css";
import { FaChevronDown } from "react-icons/fa";

const Integration = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Sorayia.com?",
      answer:
        "Sorayia.com is a decentralized AI protocol designed for developers and creators, offering a comprehensive suite of modular tools for building fully customizable digital avatars, called Heroe's. These avatars are crafted with advanced multimodal perception abilities, allowing them to interact seamlessly across virtual and real-world platforms, including dApps, the metaverse, websites, and social media.",
    },
    {
      question: "What Problems Does Sorayia.com Solve?",
      answer:
        "Sorayia.com tackles major challenges in the creation, deployment, and interaction of digital avatars. Traditional platforms often limit creator control and revenue, but Sorayia.com decentralizes the value chain, empowering creators with greater ownership. Our platform makes it easy for developers to create, distribute, and interact with intelligent 3D avatars, providing fair rewards for avatar creators, language model developers, and users. By supporting community-driven contributions, Sorayia.com generates valuable anonymized training data that enhances AI capabilities, delivering more immersive and responsive user experiences.",
    },
    {
      question: "What is $SRA?",
      answer:
        "The $SRA token fuels interactions and transactions within the Sorayia ecosystem. It enables users to access, create, and engage with Heroe's avatars while granting holders governance rights. Token holders have a voice in ecosystem decisions, including proposals, feature development, and resource allocation, ensuring community-driven evolution and growth.",
    },
    {
      question: "How Can I Acquire $SRA?",
      answer:
        "Active contributors and participants in the Sorayia ecosystem can earn $SRA through upcoming airdrops in our rewards program. Follow us on X and join our Discord community for updates on airdrops, events, and more!",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.visionWrapper}>
        <span className={styles.quote}>"</span>
        <p className={styles.p}>
          Our vision is to democratize the creation, ownership, and use of
          AI-driven characters, making them immersive, accessible, interactive,
          decentralized, and interoperable. We are not just focused on refining
          digital interactions with AI; we aspire to create a world where AI
          characters become trusted companions, insightful guides, and valuable
          collaborators in everyday life.
        </p>
        <span className={styles.quote}>"</span>
      </div>

      <h1 className={styles.faq}>FAQ</h1>

      <div className={styles.faqContainer}>
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={styles.faqItem}
            style={{
              transition: 'all 0.3s ease',
            }}
          >
            <div
              className={styles.questionRow}
              onClick={() => toggleAnswer(index)}
              role="button"
              aria-expanded={activeIndex === index}
              tabIndex={0}
            >
              <h2 className={styles.question}>{item.question}</h2>
              <FaChevronDown 
                className={styles.icon} 
                style={{
                  transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
            <div
              ref={(el) => {
                contentRefs.current[index] = el; // No return value, just update the reference
              }}
              className={`${styles.answerContainer} ${
                activeIndex === index ? styles.show : ""
              }`}
              style={{
                maxHeight: activeIndex === index ? '500px' : '0', // maxHeight animation
                visibility: activeIndex === index ? 'visible' : 'hidden',
                overflow: 'hidden', // Prevent overflow while transitioning
                transition: 'max-height 0.3s ease, visibility 0.3s ease'
              }}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integration;
