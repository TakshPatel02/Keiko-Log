"use client";

import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Playlist, Video } from "@/src/data/playlists";
import { getState, TrackerState, completeVideo, saveNote } from "@/src/lib/storage";

const KANJI_NUMERALS = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
function getKanji(index: number) {
  if (index < KANJI_NUMERALS.length) return KANJI_NUMERALS[index];
  return (index + 1).toString();
}

type FilterType = "All" | "Remaining" | "Completed";

export default function PlaylistClient({
  playlist,
  index,
}: {
  playlist: Playlist;
  index: number;
}) {
  const [state, setState] = useState<TrackerState | null>(null);
  const [filter, setFilter] = useState<FilterType>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [confirmDialog, setConfirmDialog] = useState<{ isOpen: boolean; videoId: string | null }>({
    isOpen: false,
    videoId: null,
  });

  useEffect(() => {
    setState(getState());
  }, []);

  // Handle escape to close dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && confirmDialog.isOpen) {
        setConfirmDialog({ isOpen: false, videoId: null });
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [confirmDialog.isOpen]);

  if (!state) {
    return (
      <div className="min-h-dvh bg-bg flex items-center justify-center">
        <span className="text-muted">Loading...</span>
      </div>
    );
  }

  const completedVideosCount = playlist.videos.filter(
    (v) => state.progress[v.id]?.completedAt
  ).length;
  const isAllComplete =
    completedVideosCount === playlist.videos.length && playlist.videos.length > 0;
  const percent =
    playlist.videos.length > 0
      ? Math.round((completedVideosCount / playlist.videos.length) * 100)
      : 0;

  let filteredVideos = playlist.videos;
  if (filter === "Remaining") {
    filteredVideos = playlist.videos.filter((v) => !state.progress[v.id]?.completedAt);
  } else if (filter === "Completed") {
    filteredVideos = playlist.videos.filter((v) => state.progress[v.id]?.completedAt);
  }

  // Find the first incomplete video in the whole playlist to mark as NEXT
  const firstIncompleteId = playlist.videos.find((v) => !state.progress[v.id]?.completedAt)?.id;

  const handleComplete = (videoId: string, note: string) => {
    try {
      completeVideo(videoId, note);
      setState(getState());
      setConfirmDialog({ isOpen: false, videoId: null });
      setExpandedId(null);
    } catch (e: any) {
      alert(e.message || "Failed to complete video");
    }
  };

  return (
    <div className="relative min-h-dvh bg-bg text-text pb-20">
      {/* Background Layer (Same as /playlists) */}
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

      <div className="relative z-10 w-full max-w-200 mx-auto px-6 pt-12">
        {/* Header */}
        <Link
          href="/playlists"
          className="inline-block text-muted text-sm hover:text-text transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded"
        >
          ← Playlists
        </Link>

        <header className="mb-10">
          <div className="flex items-baseline flex-wrap gap-x-4 gap-y-2 mb-3">
            <div className="flex items-center gap-3">
              <span className="text-[1.75rem] text-muted font-light">{getKanji(index)}</span>
              <h1 className="text-[2rem] font-medium leading-none">{playlist.title}</h1>
            </div>
            <div className="flex items-center gap-2">
              {playlist.completed ? (
                <span className="text-xs px-2 py-0.5 rounded border border-border text-muted bg-surface/80 font-normal">
                  Completed Series
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded border border-accent/30 text-accent bg-accent/5 font-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Ongoing Series
                </span>
              )}
              {isAllComplete && (
                <span className="text-accent text-sm font-medium">完了</span>
              )}
            </div>
          </div>
          <p className="text-muted mb-6">{playlist.description}</p>

          {/* Playlist Completion Status Notice */}
          {playlist.completed ? (
            <div className="flex items-start sm:items-center gap-3 px-4 py-3 rounded-md bg-surface border border-border text-xs text-muted mb-8">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-border text-text shrink-0 text-[10px] mt-0.5 sm:mt-0 font-bold">
                ✓
              </span>
              <p className="leading-relaxed">
                <span className="text-text font-medium mr-1.5">Playlist Complete:</span>
                This playlist is fully completed. All curriculum videos have been published, so no new videos will be added here.
              </p>
            </div>
          ) : (
            <div className="flex items-start sm:items-center gap-3 px-4 py-3 rounded-md bg-surface border border-accent/25 text-xs text-muted mb-8">
              <span className="relative flex h-2 w-2 shrink-0 mt-1 sm:mt-0 ml-1 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <p className="leading-relaxed">
                <span className="text-text font-medium mr-1.5">Ongoing Playlist:</span>
                This playlist is currently in progress. More videos will be added here as new lessons are released.
              </p>
            </div>
          )}

          <div className="mb-8">
            <div className="h-0.75 bg-[#333] rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-accent transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="flex justify-between text-[0.8125rem] text-muted">
              <span>
                {completedVideosCount} / {playlist.videos.length} completed
              </span>
              <span>{percent}%</span>
            </div>
          </div>

          <div className="flex gap-4 text-sm">
            {(["All", "Remaining", "Completed"] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded px-1 ${
                  filter === f ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </header>

        {/* Video List */}
        <div className="flex flex-col gap-2">
          {filteredVideos.map((video, idx) => {
            const progress = state.progress[video.id];
            const isCompleted = !!progress?.completedAt;
            const isNext = video.id === firstIncompleteId;
            const isExpanded = expandedId === video.id;
            
            // Format 001, 002...
            const globalIndex = playlist.videos.findIndex((v) => v.id === video.id);
            const indexStr = (globalIndex + 1).toString().padStart(3, "0");

            return (
              <div
                key={video.id}
                className={`bg-surface border overflow-hidden rounded-md transition-colors ${
                  isExpanded ? "border-[#3A3A3A]" : "border-border hover:border-[#3A3A3A]"
                }`}
              >
                <button
                  aria-expanded={isExpanded}
                  onClick={() => setExpandedId(isExpanded ? null : video.id)}
                  className="w-full flex items-center gap-4 p-4 sm:px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-md"
                >
                  {/* Status Icon */}
                  <div className="shrink-0 w-11 flex items-center justify-center transition-all duration-200">
                    {isCompleted ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                        <circle cx="12" cy="12" r="10" fill="currentColor" />
                        <path d="M9 12l2 2 4-4" stroke="var(--bg)" />
                      </svg>
                    ) : (
                      <div className="w-4.5 h-4.5 rounded-full border border-border" />
                    )}
                  </div>
                  
                  <span className="text-faint font-mono text-sm shrink-0">{indexStr}</span>
                  
                  <div className="flex flex-col items-start flex-1 text-left">
                    <div className="flex items-center gap-3">
                      <span className={`font-medium ${isCompleted ? "text-muted" : "text-text"}`}>
                        {video.title}
                      </span>
                      {isNext && (
                        <span className="text-[10px] uppercase font-bold text-accent tracking-wider">
                          Next
                        </span>
                      )}
                    </div>
                    {isCompleted && progress?.completedAt && (
                      <span className="text-[0.75rem] text-faint mt-0.5">
                        完了 · {new Date(progress.completedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                      </span>
                    )}
                  </div>

                  <div className="shrink-0 w-11 flex items-center justify-end text-muted">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-2">
                        <p className="text-muted mb-4">{video.description}</p>
                        {video.url && (
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-text text-sm mb-6 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded"
                          >
                            Open video ↗
                          </a>
                        )}
                        
                        <VideoNoteEditor
                          videoId={video.id}
                          initialNote={progress?.note || ""}
                          isCompleted={isCompleted}
                          onCompleteRequest={() => setConfirmDialog({ isOpen: true, videoId: video.id })}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* End of list indicator */}
        <div className="mt-8 pt-6 border-t border-border/40 text-center text-xs text-muted">
          {playlist.completed ? (
            <p className="flex items-center justify-center gap-2">
              <span className="text-faint">•</span>
              <span>This playlist is fully completed. No further videos will be added.</span>
              <span className="text-faint">•</span>
            </p>
          ) : (
            <p className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span className="text-text font-medium">More videos are coming soon.</span>
              <span>This series is currently in active development.</span>
            </p>
          )}
        </div>
      </div>

      {/* Confirm Dialog */}
      {confirmDialog.isOpen && confirmDialog.videoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setConfirmDialog({ isOpen: false, videoId: null })}
          />
          <div
            role="dialog"
            aria-modal="true"
            className="relative bg-surface border border-border rounded-lg p-6 max-w-100 w-full shadow-2xl"
          >
            <h2 className="text-xl font-medium text-text mb-2">Mark as completed?</h2>
            <p className="text-muted text-sm mb-6">
              This can't be undone. You can still edit your note afterward.
            </p>
            <div className="flex justify-end gap-3">
              <button
                autoFocus
                onClick={() => setConfirmDialog({ isOpen: false, videoId: null })}
                className="px-4 py-2 text-sm text-text rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text hover:bg-border/50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const draftNote = getState().progress[confirmDialog.videoId!]?.note || "";
                  handleComplete(confirmDialog.videoId!, draftNote);
                }}
                className="px-4 py-2 text-sm bg-accent text-on-accent rounded font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-surface hover:bg-accent-hover transition-colors"
              >
                Mark complete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function VideoNoteEditor({
  videoId,
  initialNote,
  isCompleted,
  onCompleteRequest,
}: {
  videoId: string;
  initialNote: string;
  isCompleted: boolean;
  onCompleteRequest: () => void;
}) {
  const [note, setNote] = useState(initialNote);
  const [savedStatus, setSavedStatus] = useState<"idle" | "saving" | "saved">("idle");
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isChanged = note !== initialNote;

  // Auto-save logic (debounced)
  useEffect(() => {
    if (!isCompleted && note !== initialNote) {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(() => {
        saveNote(videoId, note);
      }, 500);
    }
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [note, videoId, isCompleted, initialNote]);

  const handleManualSave = () => {
    saveNote(videoId, note);
    setSavedStatus("saved");
    setTimeout(() => setSavedStatus("idle"), 2000);
  };

  const hasContent = note.trim().length > 0;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor={`note-${videoId}`} className="text-sm text-text font-medium">
          What did you do or learn? Problems solved, key takeaways.
        </label>
        <textarea
          id={`note-${videoId}`}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your notes here..."
          maxLength={2000}
          className="w-full min-h-30 bg-bg border border-border rounded-md p-3 text-text text-[16px] resize-y focus-visible:outline-none focus-visible:border-[#3A3A3A] focus-visible:ring-1 focus-visible:ring-text placeholder:text-faint transition-colors"
        />
      </div>

      <div className="flex items-center justify-between mt-1">
        <span className="text-xs text-faint">
          {note.length} / 2000
        </span>

        {isCompleted ? (
          <div className="flex items-center gap-3">
            {savedStatus === "saved" && <span className="text-sm text-muted">Saved</span>}
            {isChanged && savedStatus !== "saved" && (
              <button
                onClick={handleManualSave}
                className="px-4 py-2 text-sm text-text bg-transparent border border-border rounded hover:border-[#3A3A3A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
              >
                Save
              </button>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {!hasContent && <span className="text-sm text-muted">Add a note to complete.</span>}
            <button
              onClick={onCompleteRequest}
              disabled={!hasContent}
              className="px-4 py-2 text-sm bg-accent text-on-accent rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Mark complete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
