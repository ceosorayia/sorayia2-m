"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Link from "next/link";
import ButtonFilled from "../ButtonFilled/ButtonFilled";
import ButtonEmpty from "../ButtonEmpty/ButtonEmpty";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isDocsRoute = pathname.startsWith("/docs");

  return (
    <div
      className={`${styles.header} ${isDocsRoute ? styles.docsBackground : ""}`}
    >
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/logo.svg"
          width={35}
          height={39}
          alt="logo"
          className={styles.logoImage}
        />
        <h4 className={styles.logoText}>SORAYIA.COM</h4>
      </Link>
      <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        <Link
          href={"/"}
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          Features
        </Link>
        <Link
          href={"/"}
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          Community
        </Link>
        <Link
          href={"/"}
          className={styles.link}
          onClick={() => setMenuOpen(false)}
        >
          Pricing
        </Link>
        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => !menuOpen && setDropdownOpen(true)}
          onMouseLeave={() => !menuOpen && setDropdownOpen(false)}
        >
          <span
            className={`${styles.dropdownTrigger} ${styles.link}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Learn
            <span className={styles.arrowIcon}>
              <Image
                src="/images/down-arrow.png"
                alt="Arrow Down"
                width={12}
                height={12}
                className={styles.mobileOnly} // Ensure it's only visible on mobile
              />
            </span>
          </span>
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <Link
                href="/docs"
                className={styles.dropdownItem}
                onClick={() => {
                  setDropdownOpen(false); // Close dropdown
                  setMenuOpen(false); // Close mobile slider menu
                }}
              >
                Documents
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <ButtonFilled text={"Login"} isHeader={true} />
        <ButtonEmpty text={"Get Started"} isHeader={true} />
        <div
          className={`${styles.hamburger} ${
            menuOpen ? styles.hamburgerActive : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
