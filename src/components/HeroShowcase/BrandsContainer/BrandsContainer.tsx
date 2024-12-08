"use client";

import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styles from "./BrandsContainer.module.css";

const BrandsContainer = () => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (
      typeof navigator !== "undefined" &&
      /iPad|iPhone|iPod/.test(navigator.userAgent)
    ) {
      setIsIOS(true);
    }
  }, []);

  const speed = isIOS ? 40 : 65;

  return (
    <div className={styles.brandsContainer}>
      <Marquee speed={speed} gradient={false} pauseOnHover>
        <div className={styles.brandsInner}>

        <div className={`${styles.brandContainer} ${styles.unreal}`}>
            <img
              src="/images/Unreal Engine.png"
              width="238"
              height="64"
              alt="Unreal Engine"
            />
          </div>

          <div className={`${styles.brandContainer} ${styles.unity}`}>
            <img src="/images/unity.png" width="170" height="66" alt="unity" />
          </div>

            <div className={`${styles.brandContainer} ${styles.unity}`}>
              <img src="/images/tbittensor.png" width="170" height="66" alt="unity" />
            </div>

          <div className={`${styles.brandContainer} ${styles.unreal}`}>
            <img src="/images/llma.png" width="179" height="41" alt="llma" />
          </div>

          <div className={`${styles.brandContainer} ${styles.threeJs}`}>
            <img
              src="/images/threeJs.png"
              width="105"
              height="69"
              alt="threeJs"
            />
          </div>

          <div className={`${styles.brandContainer} ${styles.webgl}`}>
            <img src="/images/WebGl.png" width="112" height="47" alt="webgl" />
          </div>

          <div className={`${styles.brandContainer} ${styles.webgl2}`}>
            <img src="/images/binance.png" width="170" height="81" alt="webgl" />
          </div>

          <div className={`${styles.brandContainer} ${styles.webgl2} mr-8`}>
            <img src="/images/fileicon.png" width="207" height="81" alt="webgl" />
          </div>

          {/* <div className={`${styles.brandContainer} ${styles.elevenLabs}`}>
            <p className={styles.brandText}>TBittensor</p>
          </div> */}

          {/* <div className={`${styles.brandContainer} ${styles.elevenLabs}`}>
            <p className={styles.brandText}>IIElevenLabs</p>
          </div> */}


          {/* <div className={`${styles.brandContainer} ${styles.unity}`}>
            <img src="/images/unity.png" width="226" height="88" alt="unity" />
          </div>

          <div className={`${styles.brandContainer} ${styles.unreal}`}>
            <img
              src="/images/Unreal Engine.png"
              width="318"
              height="85"
              alt="Unreal Engine"
            />
          </div>

          <div className={`${styles.brandContainer} ${styles.unreal}`}>
            <img src="/images/llma.png" width="239" height="55" alt="llma" />
          </div>

          <div className={`${styles.brandContainer} ${styles.threeJs}`}>
            <img
              src="/images/threeJs.png"
              width="140"
              height="92"
              alt="threeJs"
            />
          </div> */}

          {/* <div className={`${styles.brandContainer} ${styles.elevenLabs}`}>
            <p className={styles.brandText}>IIElevenLabs</p>
          </div> */}
        </div>
      </Marquee>
    </div>
  );
};

export default BrandsContainer;
