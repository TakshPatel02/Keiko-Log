export type VideoProgress = {
  completedAt: string; // ISO string
  note: string;
};

export type TrackerState = {
  version: number;
  progress: Record<string, VideoProgress>;
};

const STORAGE_KEY = "keiko:v1";

export function getState(): TrackerState {
  if (typeof window === "undefined") {
    return { version: 1, progress: {} };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.version === 1 && typeof parsed.progress === "object") {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Failed to parse state", e);
  }
  return { version: 1, progress: {} };
}

export function saveState(state: TrackerState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function markVideoComplete(videoId: string, note: string) {
  const state = getState();
  state.progress[videoId] = {
    completedAt: new Date().toISOString(),
    note,
  };
  saveState(state);
}

export function exportState(): string {
  return JSON.stringify(getState(), null, 2);
}

export function importState(json: string): boolean {
  try {
    const parsed = JSON.parse(json);
    if (parsed.version === 1 && typeof parsed.progress === "object") {
      saveState(parsed);
      return true;
    }
  } catch (e) {
    console.error("Invalid import file", e);
  }
  return false;
}
