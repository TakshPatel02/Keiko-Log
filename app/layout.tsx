import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700"],
  preload: false,
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Keiko",
    default: "Keiko (稽古) - Playlist & Course Tracker",
  },
  description: "A disciplined tracker for your playlists and courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${zenKakuGothicNew.variable} ${zenKakuGothicNew.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
