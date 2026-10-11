# Contributing to Keiko

Thanks for your interest. Contributions are welcome for bug fixes, UI/UX improvements, and new videos for the existing Chai aur playlists.

**Not accepted:** new unrelated playlists or courses. If you want to track a different course, fork the repo and deploy your own copy — see the [fork guide in the README](./README.md#following-a-different-playlist-or-course-fork-it).

---

## Set up locally

```bash
git clone https://github.com/[REPO_URL].git
cd keiko
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No environment variables required.

---

## Branch naming

```
fix/short-description
feat/short-description
content/playlist-name-new-videos
```

Examples: `fix/import-dialog-overflow`, `content/leetcode-string-add-videos`.

---

## Commit messages

Use conventional commits:

```
fix: correct progress count on playlists overview
feat: add keyboard shortcut to expand video accordion
content: add 3 new videos to Chai aur LeetCode (String)
chore: update dependencies
```

---

## Opening a pull request

- Keep PRs small and focused. One concern per PR.
- In the description: explain **what** changed and **why**.
- For UI changes: include a screenshot or short screen recording.
- For new playlist videos: add them to `src/data/playlists.ts` only. Do not change any other file unless necessary.

---

## Reporting a bug

Open a GitHub Issue with:

1. Steps to reproduce (be specific — browser, OS, what you clicked)
2. Expected behaviour
3. Actual behaviour
4. Browser and version

---

## A note on scope

Keep it simple. No backend, no database, no auth, and no accounts will be added to the main repo. Progress belongs in the browser.
