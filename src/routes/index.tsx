import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/data/deck";
import waveDecorAsset from "@/assets/wave-decor.png";
import { DeckNav } from "@/components/deck/DeckNav";
import { SlideView } from "@/components/deck/SlideView";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al-Kharsaah Solar PV Power Plant | QatarEnergy" },
      {
        name: "description",
        content:
          "An interactive report on Al-Kharsaah, Qatar's first large-scale solar power plant: 800 MW, 1.8 million PV panels, and the partnerships behind it.",
      },
      { property: "og:title", content: "Al-Kharsaah Solar PV Power Plant | QatarEnergy" },
      {
        property: "og:description",
        content:
          "Qatar's first large-scale solar power plant — the story from concept to completion, slide by slide.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Deck,
});

function Deck() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const lockRef = useRef(0);

  const goTo = useCallback((next: number) => {
    setIndex((prev) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, next));
      setDirection(clamped >= prev ? 1 : -1);
      return clamped;
    });
  }, []);

  const step = useCallback((delta: number) => goTo(index + delta), [goTo, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (menuOpen) {
        if (e.key === "Escape") setMenuOpen(false);
        return;
      }
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        step(1);
      }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        step(-1);
      }
      if (e.key === "Home") goTo(0);
      if (e.key === "End") goTo(slides.length - 1);
      if (e.key === "m" || e.key === "M") setMenuOpen(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, goTo, menuOpen]);

  const touchStart = useRef<number | null>(null);
  const slide = slides[index]!;
  const progress = ((index + 1) / slides.length) * 100;

  return (
    <main
      className="relative h-screen w-full overflow-hidden bg-background"
      onTouchStart={(e) => (touchStart.current = e.touches[0]?.clientY ?? null)}
      onTouchEnd={(e) => {
        if (touchStart.current == null) return;
        const dy = touchStart.current - (e.changedTouches[0]?.clientY ?? 0);
        if (Math.abs(dy) > 70) step(dy > 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <DeckNav open={menuOpen} onOpenChange={setMenuOpen} current={index} onSelect={goTo} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.id}
          data-scroll
          initial={{ opacity: 0, y: direction * 48, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: direction * -48, scale: 0.99 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <SlideView slide={slide} onSelect={goTo} />
        </motion.div>
      </AnimatePresence>

      {/* Progress + controls */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center p-5 md:p-8">
        <div className="pointer-events-auto flex w-[min(32rem,92vw)] items-center gap-4 rounded-full border border-foreground/15 bg-background/85 px-5 py-3 backdrop-blur-xl shadow-lg md:gap-6 md:px-7 md:py-4">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] tracking-[0.28em] text-accent uppercase">
              {String(index + 1).padStart(2, "0")} / {slides.length}
            </p>
            <p className="mt-0.5 truncate text-xs text-muted-foreground">
              {slide.sectionTitle}
              {slide.subTitle ? ` — ${slide.subTitle}` : ""}
            </p>
          </div>
          <div className="flex h-1.5 w-24 flex-1 overflow-hidden rounded-full bg-foreground/12 md:w-36">
            <motion.div
              className="h-full bg-[image:var(--gradient-brand)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => step(-1)}
              disabled={index === 0}
              aria-label="Previous slide"
              className="rounded-full border-0 bg-accent p-2.5 text-black shadow-md transition-transform hover:scale-105 active:scale-95 disabled:opacity-30 md:p-3"
            >
              <ChevronLeft className="h-4 w-4 stroke-[2.5px]" />
            </button>
            <button
              onClick={() => step(1)}
              disabled={index === slides.length - 1}
              aria-label="Next slide"
              className="rounded-full border-0 bg-accent p-2.5 text-black shadow-md transition-transform hover:scale-105 active:scale-95 disabled:opacity-30 md:p-3"
            >
              <ChevronRight className="h-4 w-4 stroke-[2.5px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative wave — extreme bottom-right */}
      <img
        src={waveDecorAsset}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 right-0 z-50 w-56 md:w-80 lg:w-[28rem]"
        draggable={false}
      />
    </main>
  );
}
