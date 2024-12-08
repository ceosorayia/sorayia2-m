import React, { ReactNode } from "react";
import styles from "./DashboardLayout.module.css";
import DocsSideMenu from "@/components/DocsSideMenu/DocsSideMenu";
import { Inter } from "next/font/google";
import "./docs.css";

const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.container} ${interFont.className}`}>
      <DocsSideMenu />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
