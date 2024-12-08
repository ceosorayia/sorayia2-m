import React from "react";
import "../docs.css";

const page = () => {
  return (
    <div className="content-container">
      <h1 className="main-title">Model Index</h1>
      <p className="main-paragraph">
        Large Language Models (LLMs) are sophisticated AI algorithms trained on
        vast datasets to understand, generate, and interpret human language with
        impressive accuracy. These models excel at a wide range of
        language-based tasks, including answering questions, summarizing
        information, and creating original content. In Sorayia.com, LLMs power
        the conversational skills of digital avatars, enabling them to engage in
        realistic and nuanced dialogues with users. Paired with AI-driven voice
        generation and facial expressions that adapt based on emotion-detection
        algorithms, these avatars deliver highly interactive, lifelike
        experiences.
      </p>

      <h2 className="section-title">LoRA (Low-Rank Adaptation of LLMs)</h2>
      <p className="main-paragraph">
        LoRA is a technique for fine-tuning large AI models like LLMs in an
        efficient, resource-friendly way. Rather than retraining the entire
        model, LoRA adjusts only a small subset of parameters, preserving the
        original model&apos;s core knowledge and structure. This approach allows
        for rapid, targeted adaptation to specific tasks or datasets, enabling
        avatars to gain specialized enhancements and personalized capabilities
        without extensive retraining.
      </p>
    </div>
  );
};

export default page;
