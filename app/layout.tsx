import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700"],
  preload: false,
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Keiko",
    default: "Keiko (稽古)",
  },
  description: "A disciplined tracking system for your learning playlists and courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${zenKakuGothicNew.variable} ${zenKakuGothicNew.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
