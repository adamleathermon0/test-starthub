"use client";

import { FeatureCard } from "@/components/FeatureCard";

function RocketIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main
        style={{
        minHeight: "220vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        paddingTop: "100vh",
        background: "var(--page-bg)",
      }}
    >
      <p
        style={{
          position: "fixed",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--hint-color)",
          fontSize: "0.875rem",
        }}
      >
        Scroll down to see the feature card
      </p>
      <div style={{ width: "100%", maxWidth: "360px", flexShrink: 0 }}>
        <FeatureCard
          icon={<RocketIcon />}
          title="Where intention meets motion"
          text="What you build deserves a path that doesn’t get in the way. StartHub turns repo, checks, and deploy into one continuous flow - so your attention stays on the work that matters, not the machinery that carries it."
        />
      </div>
    </main>
  );
}
