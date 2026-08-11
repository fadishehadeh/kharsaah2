import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { GalleryItem } from "@/data/deck";

export function Gallery({ items, aspect = "aspect-4/3" }: { items: GalleryItem[]; aspect?: string }) {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);

  const go = useCallback(
    (d: number) => setI((prev) => (prev + d + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") {
        e.preventDefault();
        e.stopPropagation();
        go(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        e.stopPropagation();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open, go]);

  const current = items[i]!;

  return (
    <>
      <figure className="relative overflow-hidden rounded-2xl border border-foreground/12 bg-white shadow-[var(--shadow-plate)]">
        <div className="p-4 pb-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt ?? ""}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className={`${aspect} w-full object-contain`}
            />
          </AnimatePresence>
        </div>

        {items.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-accent p-2 text-black shadow-md transition-transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="h-4 w-4 stroke-[2.5px]" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-accent p-2 text-black shadow-md transition-transform hover:scale-110 active:scale-95"
            >
              <ChevronRight className="h-4 w-4 stroke-[2.5px]" />
            </button>
          </>
        )}

        <button
          onClick={() => setOpen(true)}
          aria-label="Open image full screen"
          className="absolute right-3 top-3 rounded-full border border-foreground/20 bg-background/70 p-2 text-foreground backdrop-blur transition-colors hover:text-accent"
        >
          <Expand className="h-3.5 w-3.5" />
        </button>

        <figcaption className="flex items-center justify-between gap-4 bg-background/70 px-4 py-3 text-xs text-muted-foreground backdrop-blur">
          <span>{current.caption ?? current.alt}</span>
          {items.length > 1 && (
            <span className="flex shrink-0 items-center gap-1.5">
              {items.map((it, idx) => (
                <button
                  key={it.src}
                  onClick={() => setI(idx)}
                  aria-label={`Go to image ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-5 bg-accent" : "w-1.5 bg-foreground/25"}`}
                />
              ))}
            </span>
          )}
        </figcaption>
      </figure>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-6 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-6 top-6 rounded-full border border-foreground/20 bg-background/70 p-3 text-foreground transition-colors hover:text-accent"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-full w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={current.alt ?? ""}
                className="mx-auto max-h-[80vh] w-auto rounded-2xl border border-foreground/12 bg-white object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                {current.caption ?? current.alt}
              </figcaption>
            </motion.figure>
            {items.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-accent p-3 text-black shadow-md transition-transform hover:scale-110 md:left-10"
                >
                  <ChevronLeft className="h-5 w-5 stroke-[2.5px]" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-accent p-3 text-black shadow-md transition-transform hover:scale-110 md:right-10"
                >
                  <ChevronRight className="h-5 w-5 stroke-[2.5px]" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
