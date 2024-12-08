"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./DocsSideMenu.module.css";

const DocsSideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // Close the menu after navigation
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <div
        className={styles.menuIcon}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        ☰ Navigation
      </div>

      <div
        className={`${styles.sidebar} ${isMenuOpen ? styles.showMenu : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <Link href="/docs" className={styles.title}>
          Soraya Vision
        </Link>

        <nav style={{ marginTop: "1.5rem" }}>
          <div className={styles.menuSection}>
            <h3 className={styles.sectionTitle}>OVERVIEW</h3>
            <ul className={styles.ul}>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/what-is-sorayia"
                  className={`${styles.link} ${
                    isActive("/docs/what-is-sorayia") ? styles.active : ""
                  }`}
                >
                  What is Sorayia.com
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/problems-we-are"
                  className={`${styles.link} ${
                    isActive("/docs/problems-we-are") ? styles.active : ""
                  }`}
                >
                  Problems we&apos;re solving
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.menuSection}>
            <h3 className={styles.sectionTitle}>PROTOCOL</h3>
            <ul className={styles.ul}>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/infrastructure"
                  className={`${styles.link} ${
                    isActive("/docs/infrastructure") ? styles.active : ""
                  }`}
                >
                  Infrastructure
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/heroes-studio"
                  className={`${styles.link} ${
                    isActive("/docs/heroes-studio") ? styles.active : ""
                  }`}
                >
                  Heroe’s Studio
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/deployment-ramp"
                  className={`${styles.link} ${
                    isActive("/docs/deployment-ramp") ? styles.active : ""
                  }`}
                >
                  Deployment ramp
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/index-model"
                  className={`${styles.link} ${
                    isActive("/docs/index-model") ? styles.active : ""
                  }`}
                >
                  Index Model
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/asset-market-place"
                  className={`${styles.link} ${
                    isActive("/docs/asset-market-place") ? styles.active : ""
                  }`}
                >
                  Asset marketplace
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.menuSection}>
            <h3 className={styles.sectionTitle}>ECONOMICS</h3>
            <ul className={styles.ul}>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/buy-sra"
                  className={`${styles.link} ${
                    isActive("/docs/buy-sra") ? styles.active : ""
                  }`}
                >
                  Buy $SRA
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/stake-sra"
                  className={`${styles.link} ${
                    isActive("/docs/stake-sra") ? styles.active : ""
                  }`}
                >
                  Stake $SRA
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="/docs/kryptonite"
                  className={`${styles.link} ${
                    isActive("/docs/kryptonite") ? styles.active : ""
                  }`}
                >
                  Kryptonite introduction
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.menuSection}>
            <h3 className={styles.sectionTitle}>COMMUNITY</h3>
            <ul className={styles.ul}>
              <li className={styles.menuItem}>
                <a
                  href="https://t.me/sorayiaofficialcommunity"
                  className={styles.link}
                  target="_blank"
                >
                  Telegram
                </a>
              </li>
              <li className={styles.menuItem}>
                <Link
                  href="https://discord.gg/ChbBJmQC"
                  className={styles.link}
                  target="_blank"
                >
                  Discord
                </Link>
              </li>
              <li className={styles.menuItem}>
                <a
                  href="https://x.com/sorayiadotcom"
                  className={styles.link}
                  target="_blank"
                >
                  X.com
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default DocsSideMenu;
