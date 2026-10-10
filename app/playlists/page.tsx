"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { playlists } from "@/src/data/playlists";
import { getState, TrackerState, exportState, importState } from "@/src/lib/storage";

const KANJI_NUMERALS = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
function getKanji(index: number) {
  if (index < KANJI_NUMERALS.length) return KANJI_NUMERALS[index];
  return (index + 1).toString();
}

export default function PlaylistsPage() {
  const [state, setState] = useState<TrackerState | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setState(getState());
  }, []);

  const handleExport = () => {
    const data = exportState();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "keiko-progress.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (importState(content)) {
        alert("Progress imported successfully.");
        setState(getState());
      } else {
        alert("Invalid file format.");
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (!state) {
    return (
      <div className="min-h-dvh bg-bg flex items-center justify-center">
        <span className="text-muted">Loading...</span>
      </div>
    );
  }

  // Calculate totals
  let totalVideos = 0;
  let totalCompleted = 0;

  const playlistStats = playlists.map((p) => {
    const completedCount = p.videos.filter((v) => state.progress[v.id]).length;
    totalVideos += p.videos.length;
    totalCompleted += completedCount;
    return {
      ...p,
      completedCount,
      totalCount: p.videos.length,
      isComplete: completedCount === p.videos.length && p.videos.length > 0,
    };
  });

  return (
    <div className="relative min-h-dvh bg-bg text-text pb-20">
      {/* Background Layer */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to top, black 0%, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 70%)",
        }}
      >
        <Image
          src="/home-bg.webp"
          alt=""
          fill
          className="object-cover object-bottom opacity-[0.12]"
        />
      </div>

      <div className="relative z-10 w-full max-w-275 mx-auto px-6 pt-12">
        {/* Header */}
        <header className="flex flex-col mb-12">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="font-light text-2xl text-muted hover:text-text transition-colors">
              稽古
            </Link>
            <div className="flex gap-4">
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-transparent border border-border text-muted text-sm rounded transition-colors hover:text-text hover:border-[#3A3A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Export
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-transparent border border-border text-muted text-sm rounded transition-colors hover:text-text hover:border-[#3A3A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Import
              </button>
              <input
                type="file"
                accept=".json"
                ref={fileInputRef}
                onChange={handleImport}
                className="hidden"
              />
            </div>
          </div>

          <div>
            <h1 className="text-[2rem] font-medium leading-none mb-3">Playlists</h1>
            <p className="text-muted text-sm">
              {totalCompleted} / {totalVideos} videos completed
            </p>
          </div>
        </header>

        {/* Grid */}
        {playlistStats.length === 0 ? (
          <div className="py-20 text-center text-muted">
            No playlists found. Add them to src/data/playlists.ts.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {playlistStats.map((playlist, index) => {
              const percent =
                playlist.totalCount > 0
                  ? Math.round((playlist.completedCount / playlist.totalCount) * 100)
                  : 0;

              return (
                <Link
                  key={playlist.id}
                  href={`/playlists/${playlist.id}`}
                  className="block bg-surface border border-border rounded-md p-5 transition-all duration-150 hover:border-[#3A3A3A] motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-bg shadow-none"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[1.75rem] text-muted font-light">{getKanji(index)}</span>
                    {playlist.isComplete && (
                      <span className="text-accent text-sm font-medium">完了</span>
                    )}
                  </div>

                  <h2 className="font-medium text-lg text-text mb-2 line-clamp-1">
                    {playlist.title}
                  </h2>

                  <p className="text-muted text-[0.9rem] line-clamp-2 mb-6 h-10">
                    {playlist.description}
                  </p>

                  {/* Progress */}
                  <div className="mt-auto">
                    <div className="h-0.75 bg-[#333] rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-accent transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[0.8125rem] text-muted">
                      <span>
                        {playlist.completedCount} / {playlist.totalCount} completed
                      </span>
                      <span>{percent}%</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
