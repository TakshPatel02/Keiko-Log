import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keiko (稽古) — Playlist & Course Tracker",
  description: "Your playlists and courses, tracked and finished. Mark a video complete, write what you took from it, and watch the list shrink.",
};

export default function Home() {
  return (
    <div className="relative h-dvh w-full overflow-hidden flex items-center justify-center bg-bg select-none">
      {/* Background Images for Art Direction */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/home-bg.webp"
            alt="Keiko background"
            fill
            priority
            className="object-cover object-[left_center]"
          />
        </div>
        {/* Mobile Background */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src="/home-mobile-bg.webp"
            alt="Keiko background mobile"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        {/* Contrast overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, rgba(14, 14, 14, 0.7) 0%, transparent 65%),
              linear-gradient(to bottom, rgba(14, 14, 14, 0.25), rgba(14, 14, 14, 0.4))
            `,
          }}
        />
      </div>

      {/* Content Column */}
      <main className="relative z-10 w-full max-w-140 px-6 -mt-12 flex flex-col items-center text-center">
        {/* Lockup */}
        <div className="flex flex-col items-center mb-6">
          <span className="font-light text-[clamp(48px,6vw,72px)] leading-none text-text">
            稽古
          </span>
          <span className="mt-3 text-sm font-medium uppercase tracking-[0.35em] text-muted">
            Keiko
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-medium text-[clamp(1.875rem,4vw,2.75rem)] leading-[1.1] text-text mb-6">
          One problem at a time.
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg leading-relaxed text-muted mb-8">
          Your playlists and courses, tracked and finished. Mark a video complete, write what you took from it, and watch the list shrink.
        </p>

        {/* CTA Button */}
        <Link
          href="/playlists"
          className="bg-accent text-on-accent rounded px-6 py-2.5 font-medium transition-all hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(184,50,40,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Enter the dojo
        </Link>

        {/* Microcopy */}
        <p className="mt-4 text-sm text-muted">
          No account. Saved on this device. Completed is final.
        </p>
      </main>

      {/* Footer */}
      <div className="absolute bottom-6 right-6 z-10">
        <span className="text-sm text-muted opacity-80">Built by Taksh</span>
      </div>
    </div>
  );
}


