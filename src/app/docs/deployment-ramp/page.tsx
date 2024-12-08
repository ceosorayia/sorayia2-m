import React from "react";
import "../docs.css";

const page = () => {
  return (
    <div className="content-container">
      <h1 className="main-title">Deployment Ramp</h1>
      <p className="main-paragraph">
        The Deployment Ramp brings digital avatars to life, offering users an
        engaging and interactive experience. It provides full customization
        options for avatars and seamless integration through SDKs and APIs for
        Web, Unreal Engine 5, and Unity, making avatar deployment easy and
        accessible. The Deployment Ramp includes the following features:
      </p>

      <h2 className="section-title">Real-Time Video Streaming</h2>
      <ul className="bullet-points">
        <li>
          <span>Unreal Engine 5-Powered Live Streaming:</span> Enable real-time
          interactions with avatars, similar to FaceTime on Vision Pro, creating
          a lifelike, immersive experience.
        </li>
      </ul>

      <h2 className="section-title">3D Avatar Customization</h2>
      <ul className="bullet-points">
        <li>
          <span>Appearance Customization:</span> Allow users to personalize
          avatars’ clothing, appearance, and style.
        </li>
        <li>
          <span>Custom Avatar Import:</span> Support the import of fully rigged,
          custom 3D avatars, enhancing personalization and uniqueness.
        </li>
      </ul>

      <h2 className="section-title">3D Scenes</h2>
      <ul className="bullet-points">
        <li>
          <span>Immersive Scene Creation:</span> Design realistic, interactive
          environments for avatars to inhabit, enriching the digital experience.
        </li>
        <li>
          <span>AI-Generated Skyboxes and Assets:</span> Create custom skyboxes
          and scene assets with AI, adding depth and atmosphere to avatar
          environments.
        </li>
      </ul>

      <h2 className="section-title">File Interoperability</h2>
      <ul className="bullet-points">
        <li>
          <span>Avatar Export Options:</span> Enable users to download avatars
          in multiple formats, supporting compatibility with VRM, GLB, and FBX
          files.
        </li>
      </ul>

      <h2 className="section-title">AR Ready</h2>
      <ul className="bullet-points">
        <li>
          <span>Augmented Reality Support:</span> Fully optimized for ARKit 6,
          enabling advanced interactions with avatars in augmented reality.
        </li>
      </ul>

      <h2 className="section-title">VR Ready</h2>
      <ul className="bullet-points">
        <li>
          <span>Virtual Reality Compatibility:</span> Ready for use with VR
          devices, optimized for Apple Vision Pro and Meta Quest, providing an
          enhanced, immersive experience.
        </li>
      </ul>
    </div>
  );
};

export default page;
