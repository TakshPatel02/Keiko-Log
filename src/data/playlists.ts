export type Video = {
  id: string;
  title: string;
  description: string;
  url?: string;
};

export type Playlist = {
  id: string;
  title: string;
  description: string;
  videos: Video[];
};

export const playlists: Playlist[] = [
  {
    id: "dsa-main",
    title: "DSA Playlist",
    description: "Core data structures and algorithms.",
    videos: [
      {
        id: "dsa-main-001",
        title: "Arrays basics",
        description: "Traversal, prefix sums.",
        url: "https://youtube.com/...",
      },
      {
        id: "dsa-main-002",
        title: "Two Pointers",
        description: "Finding pairs, sliding window.",
        url: "https://youtube.com/...",
      },
    ],
  },
  {
    id: "graphs-adv",
    title: "Advanced Graphs",
    description: "Shortest paths, MSTs, and flows.",
    videos: [
      {
        id: "graphs-001",
        title: "Dijkstra's Algorithm",
        description: "Single-source shortest path.",
        url: "https://youtube.com/...",
      },
    ],
  },
];
