import React from "react";
import "../docs.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="content-container">
      <h1 className="main-title">The Sorayia.com Platform</h1>
      <p className="main-paragraph">
        The Sorayia.com platform offers a flexible and modular suite of tools,
        SDKs, and APIs, designed to help developers effortlessly create
        immersive, interactive 3D digital avatars. This comprehensive platform
        is built around four core module groups, each enhancing the creation,
        customization, and deployment of digital avatars:
      </p>

      <h2 className="section-title">Heroe&apos;s Studio Creator</h2>
      <p className="main-paragraph">
        An advanced toolkit for crafting lifelike digital avatars, Heroe’s
        Studio Creator offers features such as long-term memory management,
        personality and backstory design, chat history tracking, customizable
        AI-generated voices, and emotion integration. These capabilities allow
        developers to design richly engaging, unique digital personas that
        interact with users in a truly human-like way.
      </p>

      <h2 className="section-title">Deployment Ramp</h2>
      <p className="main-paragraph">
        A complete solution for deploying digital avatars across platforms,
        Deployment Ramp provides SDKs and APIs to ensure seamless
        interoperability. From decentralized apps (dApps) to metaverse
        environments and social networks, Deployment Ramp enables avatars to
        transition smoothly across digital spaces, promoting a connected
        community experience.
      </p>

      <h2 className="section-title">LLM Model Integration</h2>
      <p className="main-paragraph">
        Sorayia.com offers a vast selection of language models (LLMs) to further
        customize avatars according to specific needs. Through partnerships with
        leading compute providers, Sorayia.com ensures access to high-quality
        computational resources at competitive rates, making it easy and
        affordable for creators to build nuanced, personalized avatars.
      </p>

      <h2 className="section-title">Asset Marketplace</h2>
      <p className="main-paragraph">
        A vibrant marketplace for trading avatars and digital assets as NFTs,
        the Asset Marketplace allows creators to buy, sell, and exchange assets
        like avatar elements, emotes, voices, and clothing. This fosters a
        collaborative community, encouraging creativity and asset sharing within
        the Sorayia.com ecosystem.
      </p>

      <p className="main-paragraph">
        Together, these modules form a complete, all-in-one platform for digital
        avatar creation, giving developers and creators a wide range of tools to
        bring their digital characters to life and customize them to new
        heights.
      </p>

      <div className="image-wrapper-infra">
        <Image
          src="/images/docs-infra.png"
          alt="infrastructure"
          fill
          className="responsive-image-infra"
        />
      </div>
    </div>
  );
};

export default page;
