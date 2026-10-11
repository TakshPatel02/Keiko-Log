import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
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
              radial-gradient(ellipse at center, rgba(14, 14, 14, 0.75) 0%, transparent 65%),
              linear-gradient(to bottom, rgba(14, 14, 14, 0.3), rgba(14, 14, 14, 0.5))
            `,
          }}
        />
      </div>

      {/* Top Brand Link */}
      <div className="absolute top-8 left-8 z-20">
        <Link
          href="/"
          className="font-light text-2xl text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded"
        >
          稽古
        </Link>
      </div>

      {/* Content Column */}
      <main className="relative z-10 w-full max-w-140 px-6 -mt-8 flex flex-col items-center text-center">
        {/* Lockup */}
        <div className="flex flex-col items-center mb-6">
          <span className="font-light text-[clamp(52px,7vw,80px)] leading-none text-text">
            四〇四
          </span>
          <span className="mt-3 text-xs sm:text-sm font-medium uppercase tracking-[0.35em] text-muted">
            404 • Not Found
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-medium text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] text-text mb-4">
          The path ends here.
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg leading-relaxed text-muted mb-8 max-w-md">
          The playlist or page you are looking for does not exist, or has been moved. Return to the dojo to continue your training.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/playlists"
            className="bg-accent text-on-accent rounded px-6 py-2.5 font-medium transition-all hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(184,50,40,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            View playlists
          </Link>
          <Link
            href="/"
            className="bg-transparent border border-border text-muted rounded px-6 py-2.5 font-medium transition-colors hover:text-text hover:border-[#3A3A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Return home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <div className="absolute bottom-6 right-6 z-10">
        <span className="text-sm text-muted opacity-80">Built by Taksh</span>
      </div>
    </div>
  );
}
