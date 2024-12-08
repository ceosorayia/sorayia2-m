"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import ButtonFilled from "../ButtonFilled/ButtonFilled";
import { FiChevronDown } from "react-icons/fi";

const Footer = () => {
  // State variable to track which section is open
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Refs for calculating height
  const productRef = useRef<HTMLUListElement>(null);
  const resourcesRef = useRef<HTMLUListElement>(null);
  const companyRef = useRef<HTMLUListElement>(null);

  // Helper function to toggle sections
  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  // Helper function to get the max-height
  const getMaxHeight = (ref: React.RefObject<HTMLUListElement>) => {
    return ref.current ? ref.current.scrollHeight + "px" : "0px";
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Branding Section */}
        <div className={styles.branding}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.svg"
              width={35}
              height={39}
              alt="logo"
              className={styles.logoImage}
            />
            <h4 className={styles.logoText}>SORAYIA.COM</h4>
          </div>
          <p className={styles.subtitle}>
            Custom digital avatar for your web3 business
          </p>
          <div className={styles.socialIcons}>
          <Link href="/contact" >
            <ButtonFilled text={"Contact"} />
          </Link>

            <Link 
              href="https://www.linkedin.com/in/sorayia-media-387b03287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className={styles.link}
            >
              <Image
                src="/images/social-icons/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className={styles.iconImage}
              />
            </Link>
            <Link
              href="https://www.instagram.com/sorayiadotcom"
              className={styles.link}
            >
              <Image
                src="/images/social-icons/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className={styles.iconImage}
              />
            </Link>
            <Link href="https://x.com/sorayiadotcom" className={styles.icon}>
              <Image
                src="/images/social-icons/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
                className={styles.iconImage}
              />
            </Link>
            <Link
              href="https://www.facebook.com/share/mtEKYXj4ih7Vm6pH/?mibextid=LQQJ4d"
              className={styles.facebookIcon}
            >
              <Image
                src="/images/social-icons/facebook.png"
                alt="facebook"
                width={24}
                height={24}
                className={styles.iconImage}
              />
            </Link>
            <Link
              href="https://t.me/sorayiaofficialcommunity"
              className={styles.iconTelegram}
            >
              <Image
                src="/images/social-icons/telegram.png"
                alt="Telegram"
                width={24}
                height={24}
                className={styles.iconImage}
              />
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>
          {/* Product Links */}
          <div className={styles.linksColumn}>
            <h3
              className={styles.columnHeader}
              onClick={() => toggleSection("product")}
            >
              Product
              <FiChevronDown
                className={`${styles.arrow} ${
                  openSection === "product" ? styles.open : ""
                }`}
              />
            </h3>
            <ul
              ref={productRef}
              className={`${styles.collapsibleList} ${
                openSection === "product" ? styles.open : ""
              }`}
              style={{
                maxHeight:
                  openSection === "product" ? getMaxHeight(productRef) : "0px",
              }}
            >
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/security">Security</Link>
              </li>
              <li>
                <Link href="/affiliates">Affiliates</Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className={styles.linksColumn}>
            <h3
              className={styles.columnHeader}
              onClick={() => toggleSection("resources")}
            >
              Resources
              <FiChevronDown
                className={`${styles.arrow} ${
                  openSection === "resources" ? styles.open : ""
                }`}
              />
            </h3>
            <ul
              ref={resourcesRef}
              className={`${styles.collapsibleList} ${
                openSection === "resources" ? styles.open : ""
              }`}
              style={{
                maxHeight:
                  openSection === "resources"
                    ? getMaxHeight(resourcesRef)
                    : "0px",
              }}
            >
              <li>
                <Link href="/api">API</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/guide">Guide</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.linksColumn}>
            <h3
              className={styles.columnHeader}
              onClick={() => toggleSection("company")}
            >
              Company
              <FiChevronDown
                className={`${styles.arrow} ${
                  openSection === "company" ? styles.open : ""
                }`}
              />
            </h3>
            <ul
              ref={companyRef}
              className={`${styles.collapsibleList} ${
                openSection === "company" ? styles.open : ""
              }`}
              style={{
                maxHeight:
                  openSection === "company" ? getMaxHeight(companyRef) : "0px",
              }}
            >
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link href="/dpa">DPA</Link>
              </li>
              <li>
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/trust-center">Trust Center</Link>
              </li>
              <li>
                <Link href="/cookie-preferences">Cookie Preferences</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.ellipse}></div>
    </footer>
  );
};

export default Footer;
