import React from "react";
import "../docs.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="content-container">
      <div className="image-wrapper-sra">
        <Image
          src="/images/docs-sra.png"
          alt="Sra Token"
          fill
          className="responsive-image-sra"
        />
      </div>

      <h1 className="main-title">Buy $SRA Token</h1>
      <p className="main-paragraph">
        The $SRA token is essential to the Sorayia.com ecosystem, circulating
        value, incentivizing participation, and empowering community-driven
        decision-making.
      </p>

      <h2 className="section-title">Currency</h2>
      <p className="main-paragraph">
        At the heart of Sorayia.com&apos;s equitable economy, the $SRA token is
        designed to reward creators, developers, and users, fostering an
        inclusive environment where contributions are recognized and valued.
        $SRA can also be used for purchases on the Asset Marketplace, allowing
        users to acquire unique items like limited edition avatars, scenes, and
        emotes.
      </p>

      <h2 className="section-title">Utility & Governance</h2>
      <p className="main-paragraph">
        The $SRA token enables seamless participation and transactions within
        the Sorayia.com network, granting users access to create, customize, and
        interact with digital avatars. Additionally, $SRA token holders have
        governance rights, giving them a voice in the ecosystem’s development
        and direction. This includes voting on proposals, features, and the
        allocation of community resources.
      </p>
    </div>
  );
};

export default page;
