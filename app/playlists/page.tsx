"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { playlists } from "@/src/data/playlists";
import { getState, TrackerState, exportState, importState } from "@/src/lib/storage";

const KANJI_NUMERALS = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
function getKanji(index: number) {
  if (index < KANJI_NUMERALS.length) return KANJI_NUMERALS[index];
  return (index + 1).toString();
}

interface PendingImport {
  rawContent: string;
  incomingCompletedCount: number;
}

interface NotificationState {
  type: "success" | "error";
  title: string;
  message: string;
}

export default function PlaylistsPage() {
  const [state, setState] = useState<TrackerState | null>(null);
  const [pendingImport, setPendingImport] = useState<PendingImport | null>(null);
  const [notification, setNotification] = useState<NotificationState | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setState(getState());
  }, []);

  // Auto-dismiss notification after 4 seconds
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => {
      setNotification(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [notification]);

  // Handle escape key to close dialog or dismiss notification
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (pendingImport) {
          setPendingImport(null);
        } else if (notification) {
          setNotification(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pendingImport, notification]);

  const handleExport = () => {
    try {
      const data = exportState();
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "keiko-progress.json";
      a.click();
      URL.revokeObjectURL(url);
      setNotification({
        type: "success",
        title: "Progress exported",
        message: "keiko-progress.json has been downloaded.",
      });
    } catch {
      setNotification({
        type: "error",
        title: "Export failed",
        message: "Failed to create export file.",
      });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      try {
        const parsed = JSON.parse(content);
        if (
          parsed &&
          parsed.version === 1 &&
          typeof parsed.progress === "object" &&
          parsed.progress !== null
        ) {
          const completedCount = Object.values(parsed.progress).filter(
            (item: any) => item && typeof item === "object" && item.completedAt
          ).length;

          setPendingImport({
            rawContent: content,
            incomingCompletedCount: completedCount,
          });
        } else {
          setNotification({
            type: "error",
            title: "Invalid file format",
            message: "The selected file is not a valid Keiko progress backup.",
          });
        }
      } catch {
        setNotification({
          type: "error",
          title: "Corrupted file",
          message: "The file could not be parsed as valid JSON.",
        });
      }
    };
    reader.readAsText(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleConfirmImport = () => {
    if (!pendingImport) return;
    const ok = importState(pendingImport.rawContent);
    setPendingImport(null);

    if (ok) {
      setState(getState());
      setNotification({
        type: "success",
        title: "Progress imported",
        message: "Your progress and notes have been successfully updated.",
      });
    } else {
      setNotification({
        type: "error",
        title: "Import failed",
        message: "Failed to apply imported progress data.",
      });
    }
  };

  const handleCancelImport = () => {
    setPendingImport(null);
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
    const completedCount = p.videos.filter((v) => state.progress[v.id]?.completedAt).length;
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
                className="px-4 py-2 bg-transparent border border-border text-muted text-sm rounded transition-colors hover:text-text hover:border-[#3A3A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-bg cursor-pointer"
              >
                Export
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-transparent border border-border text-muted text-sm rounded transition-colors hover:text-text hover:border-[#3A3A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-bg cursor-pointer"
              >
                Import
              </button>
              <input
                type="file"
                accept=".json"
                ref={fileInputRef}
                onChange={handleFileSelect}
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

      {/* Warning Confirmation Modal */}
      <AnimatePresence>
        {pendingImport && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={handleCancelImport}
            />
            <motion.div
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="import-warning-title"
              aria-describedby="import-warning-desc"
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative bg-surface border border-border rounded-lg p-6 max-w-md w-full shadow-2xl z-10"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-accent text-sm font-medium">注意</span>
                <span className="text-xs uppercase tracking-wider text-muted font-medium">Overwrite Warning</span>
              </div>

              <h2 id="import-warning-title" className="text-xl font-medium text-text mb-2">
                Import progress?
              </h2>

              <p id="import-warning-desc" className="text-muted text-sm leading-relaxed mb-5">
                Importing will overwrite your current learning progress and saved notes with the backup data. This action cannot be undone.
              </p>

              <div className="bg-bg/90 border border-border/80 rounded p-3.5 mb-6 flex flex-col gap-2 text-xs">
                <div className="flex justify-between items-center text-muted">
                  <span>Current completed videos:</span>
                  <span className="text-text font-medium">{totalCompleted} / {totalVideos}</span>
                </div>
                <div className="flex justify-between items-center text-muted">
                  <span>Incoming completed videos:</span>
                  <span className="text-accent font-medium">{pendingImport.incomingCompletedCount}</span>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCancelImport}
                  className="px-4 py-2 text-sm text-text rounded border border-transparent hover:border-border hover:bg-border/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  autoFocus
                  onClick={handleConfirmImport}
                  className="px-4 py-2 text-sm bg-accent text-on-accent font-medium rounded hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-surface cursor-pointer"
                >
                  Confirm & Import
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100vw-3rem)] bg-surface border border-border rounded-lg p-4 shadow-2xl flex items-start gap-3"
            role="status"
            aria-live="polite"
          >
            <div className="mt-0.5 shrink-0">
              {notification.type === "success" ? (
                <div className="w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">
                  !
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-text leading-tight">{notification.title}</h3>
              <p className="text-xs text-muted mt-1 leading-normal">{notification.message}</p>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="text-muted hover:text-text transition-colors p-1 -mr-1 -mt-1 rounded cursor-pointer"
              aria-label="Dismiss notification"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
