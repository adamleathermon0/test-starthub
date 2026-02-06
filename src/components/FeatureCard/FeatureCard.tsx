"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./FeatureCard.module.scss";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

// Staggered entrance: icon → title → text when card scrolls into view
const containerVariants = {
  hidden: { opacity: 0 },
  visible: () => ({
    opacity: 1,
    transition: {
      delayChildren: 0.1, // 100ms before first element
      staggerChildren: 0.18, // ~180ms between each (icon → title → text)
      staggerDirection: 1,
    },
  }),
};

// Each element: fade in + slide up. Smooth and intentional (easeOut), not bouncy.
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // easeOut
    },
  },
};

export function FeatureCard({ icon, title, text }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -50px 0px",
  });

  return (
    <div ref={ref} style={{ minHeight: 1 }}>
      <motion.article
        className={styles["feature-card"]}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25,
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: { type: "spring", stiffness: 400, damping: 30 },
      }}
      style={{
        willChange: "transform",
      }}
    >
      <motion.div
        className={styles["feature-card__glow"]}
        aria-hidden
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          transition: { duration: 0.2 },
        }}
        style={{ willChange: "opacity" }}
      />
      <motion.div
        className={styles["feature-card__icon-wrap"]}
        variants={itemVariants}
        whileHover={{
          rotate: 8,
          scale: 1.08,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 25,
          },
        }}
        style={{ willChange: "transform" }}
      >
        {icon}
      </motion.div>
      <motion.h3 className={styles["feature-card__title"]} variants={itemVariants}>
        {title}
      </motion.h3>
      <motion.p className={styles["feature-card__text"]} variants={itemVariants}>
        {text}
      </motion.p>
    </motion.article>
    </div>
  );
}
