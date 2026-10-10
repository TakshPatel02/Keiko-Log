import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-dvh w-full overflow-hidden flex items-center justify-center bg-bg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-bg.webp"
          alt="Keiko background"
          fill
          priority
          className="object-cover object-[left_center]"
        />
        {/* Contrast overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, rgba(14, 14, 14, 0.55), rgba(14, 14, 14, 0.75)),
              radial-gradient(circle at 50% 50%, transparent 20%, #0E0E0E 100%)
            `,
          }}
        />
      </div>

      {/* Content Column */}
      <main className="relative z-10 w-full max-w-140 px-6 -mt-12 flex flex-col items-center text-center">
        {/* Lockup */}
        <div className="flex flex-col items-center mb-6">
          <span className="font-light text-[clamp(48px,6vw,72px)] leading-none text-muted">
            稽古
          </span>
          <span className="mt-3 text-sm font-medium uppercase tracking-[0.35em] text-muted">
            Keiko
          </span>
        </div>

        {/* Meaning Line */}
        <p className="text-base text-muted mb-4">
          Keiko (稽古): practice, training.
        </p>

        {/* Headline */}
        <h1 className="font-medium text-[clamp(1.875rem,4vw,2.75rem)] leading-[1.1] text-text mb-6">
          One problem at a time.
        </h1>
      </main>
    </div>
  );
}


