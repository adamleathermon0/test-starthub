import type { Metadata } from "next";
import "./globals.css";
import { ThemeWrapper } from "@/components/ThemeWrapper";

export const metadata: Metadata = {
  title: "StartHub Feature Card",
  description: "Interactive feature card component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("starthub-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);else if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches)document.documentElement.setAttribute("data-theme","light");})();`,
          }}
        />
      </head>
      <body>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
