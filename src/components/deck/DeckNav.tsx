import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { slides, sections } from "@/data/deck";
import logoAsset from "@/assets/logo1.png";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  current: number;
  onSelect: (i: number) => void;
  is4K?: boolean;
};

export function DeckNav({ open, onOpenChange, current, onSelect, is4K = false }: Props) {
  const grouped = sections.map((title, idx) => ({
    title,
    number: idx + 1,
    items: slides
      .map((s, i) => ({ ...s, index: i }))
      .filter((s) => s.section === idx + 1),
  }));

  return (
    <>
      <header className="pointer-events-none fixed left-0 top-0 z-[70] flex flex-col items-start pr-5 pb-14 md:pr-8 md:pb-16">
        <img
          src={logoAsset}
          alt="QatarEnergy"
          className={`pointer-events-auto w-auto ${is4K ? "h-48" : "h-28 md:h-40"}`}
          draggable={false}
        />
        <button
          onClick={() => onOpenChange(true)}
          className={`pointer-events-auto group rounded-full border border-foreground/15 bg-background/40 backdrop-blur-xl transition-colors hover:border-accent/60 ${is4K ? "mt-6 ml-6 p-5" : "mt-2 ml-5 p-3"}`}
          aria-label="Open contents menu"
        >
          <Menu className={`${is4K ? "h-7 w-7" : "h-5 w-5"} text-foreground/80 transition-transform group-hover:rotate-90`} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-background/92 backdrop-blur-2xl"
          >
            <div className={`mx-auto px-6 py-8 md:px-10 md:py-12 ${is4K ? "max-w-7xl" : "max-w-5xl"}`}>
              <div className="mb-10 flex items-center justify-between">
                <p className="font-display text-xs tracking-[0.3em] text-accent uppercase">
                  Contents
                </p>
                <button
                  onClick={() => onOpenChange(false)}
                  aria-label="Close menu"
                  className="rounded-full border border-foreground/15 p-2.5 transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ol className="space-y-6">
                {grouped.map((g, gi) => (
                  <motion.li
                    key={g.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * gi, duration: 0.4 }}
                    className="border-b border-foreground/10 pb-5"
                  >
                    <button
                      onClick={() => {
                        onSelect(g.items[0]?.index ?? 0);
                        onOpenChange(false);
                      }}
                      className="group flex w-full items-baseline gap-4 text-left"
                    >
                      <span className="font-mono text-xs text-accent">
                        {String(g.number).padStart(2, "0")}
                      </span>
                      <span className={`font-display leading-tight transition-colors group-hover:text-accent ${is4K ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                        {g.title}
                      </span>
                    </button>
                    {g.items.length > 1 && (
                      <ul className="mt-3 ml-10 flex flex-wrap gap-x-6 gap-y-1.5">
                        {g.items.map((it) => (
                          <li key={it.id}>
                            <button
                              onClick={() => {
                                onSelect(it.index);
                                onOpenChange(false);
                              }}
                              className={`text-sm transition-colors hover:text-accent ${
                                it.index === current
                                  ? "text-accent"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {it.subTitle ?? it.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
