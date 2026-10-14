"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// ─── Slide types ──────────────────────────────────────────────────────────────

interface ImageSlide {
  type: "image";
  src: string;
  alt: string;
}

interface CardSlide {
  type: "card";
}

type Slide = ImageSlide | CardSlide;

// ─── Slide definitions ────────────────────────────────────────────────────────

const IMAGE_SLIDES: ImageSlide[] = [
  { type: "image", src: "/home page rotations/img 1.webp", alt: "MASIS campaign visual 1" },
  { type: "image", src: "/home page rotations/img 2.webp", alt: "MASIS campaign visual 2" },
  { type: "image", src: "/home page rotations/img 3.webp", alt: "MASIS campaign visual 3" },
  { type: "image", src: "/home page rotations/img 4.webp", alt: "MASIS campaign visual 4" },
  { type: "image", src: "/home page rotations/img 5.webp", alt: "MASIS campaign visual 5" },
];

const CARD_SLIDE: CardSlide = { type: "card" };

// All slides: images + the original branded card
const ALL_SLIDES: Slide[] = [...IMAGE_SLIDES, CARD_SLIDE];

const INTERVAL_MS = 4000;

// Pick a random index that is NOT the current one
function nextRandom(currentIndex: number, total: number): number {
  if (total <= 1) return 0;
  let next: number;
  do {
    next = Math.floor(Math.random() * total);
  } while (next === currentIndex);
  return next;
}

// ─── The original branded MASIS card (kept as a JSX slide) ───────────────────

function MasisCard() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />

      {/* Top tag */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          Full-Funnel Growth
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      {/* Central Graphic */}
      <div className="relative z-10 py-6 my-auto text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-500/25 mb-4 border border-blue-400/20">
          <svg
            width="40"
            height="40"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 14V4L7 10L9 7L11 10L16 4V14"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-white text-lg font-bold tracking-tight">MASIS Agency</h3>
        <p className="text-slate-400 text-xs mt-1">Creative • Performance • Technology</p>
      </div>

      {/* Bottom metrics mini-bar */}
      <div className="relative z-10 grid grid-cols-2 gap-3 pt-4 border-t border-blue-500/15">
        <div className="bg-white/[0.02] border border-blue-500/10 rounded-xl p-2.5 text-center">
          <div className="text-xs font-bold text-white">360°</div>
          <div className="text-[10px] text-slate-500">Multi-Channel</div>
        </div>
        <div className="bg-white/[0.02] border border-blue-500/10 rounded-xl p-2.5 text-center">
          <div className="text-xs font-bold text-amber-400">ROI-First</div>
          <div className="text-[10px] text-slate-500">Targeted Reach</div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function HeroRotatingVisual() {
  // Start at index 0 (deterministic — avoids hydration mismatch)
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detect prefers-reduced-motion (lazy initial state — runs once on mount, client only)
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  // Subscribe to future changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (reducedMotion) return; // static for reduced-motion users

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => nextRandom(prev, ALL_SLIDES.length));
    }, INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reducedMotion]);

  const currentSlide = ALL_SLIDES[currentIndex];

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div
      className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-gradient-to-br from-blue-950/40 via-[#0e1628] to-[#07090f] border border-blue-500/20 overflow-hidden shadow-2xl shadow-blue-950/50"
      aria-label="MASIS rotating visuals"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          variants={reducedMotion ? undefined : fadeVariants}
          initial={reducedMotion ? undefined : "initial"}
          animate={reducedMotion ? undefined : "animate"}
          exit={reducedMotion ? undefined : "exit"}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {currentSlide.type === "image" ? (
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt}
              fill
              className="object-cover rounded-3xl"
              sizes="380px"
              priority={currentIndex === 0}
            />
          ) : (
            <MasisCard />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
