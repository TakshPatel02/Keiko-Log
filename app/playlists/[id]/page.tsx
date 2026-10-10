import { playlists } from "@/src/data/playlists";
import { notFound } from "next/navigation";
import PlaylistClient from "./PlaylistClient";
import { Suspense } from "react";

export function generateStaticParams() {
  return playlists.map((p) => ({
    id: p.id,
  }));
}

export default function PlaylistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-dvh bg-bg flex items-center justify-center">
          <span className="text-muted">Loading...</span>
        </div>
      }
    >
      <PlaylistFetcher params={params} />
    </Suspense>
  );
}

async function PlaylistFetcher({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const playlistIndex = playlists.findIndex((p) => p.id === id);

  if (playlistIndex === -1) {
    notFound();
  }

  return (
    <PlaylistClient playlist={playlists[playlistIndex]} index={playlistIndex} />
  );
}
