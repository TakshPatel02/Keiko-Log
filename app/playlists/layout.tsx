import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playlists",
  description: "Track your progress across playlists and courses.",
};

export default function PlaylistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
