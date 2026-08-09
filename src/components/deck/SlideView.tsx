import { motion } from "motion/react";
import type { Slide } from "@/data/deck";
import { sections, slides } from "@/data/deck";
import { SlideMedia } from "./SlideMedia";
import { Gallery } from "./Gallery";


const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Kicker({ slide }: { slide: Slide }) {
  if (!slide.kicker) return null;
  return (
    <p className="font-mono text-[11px] tracking-[0.3em] text-accent uppercase">{slide.kicker}</p>
  );
}

function TextBox({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <div
      className={`glass-panel flex flex-col ${wide ? "max-w-4xl" : "max-w-2xl"} w-full max-h-[calc(100vh-14rem)] p-7 md:max-h-[calc(100vh-18rem)] md:p-10`}
    >
      <div className="glow-scroll flex-1 pr-3">
        {children}
      </div>
    </div>
  );
}

export function SlideView({
  slide,
  onSelect,
}: {
  slide: Slide;
  onSelect: (i: number) => void;
}) {
  const useSoftDim = slide.layout === "title" || slide.layout === "chapter";

  return (
    <section className="relative h-full w-full">
      <SlideMedia media={slide.media} dim={useSoftDim ? "soft" : "strong"} />

      <div data-slide-scroll className="relative z-10 h-full w-full overflow-y-auto overscroll-contain">
        <div className="mx-auto flex min-h-full max-w-7xl flex-col justify-center px-5 pt-32 pb-40 md:px-12 md:pt-36 md:pb-44">
          {slide.layout === "title" && (
            <div className="max-w-4xl">
              <Reveal>
                <p className="font-mono text-xs tracking-[0.42em] text-accent uppercase">
                  {slide.kicker}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-8xl">
                  {slide.title}
                </h1>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-3 h-px w-40 bg-[image:var(--gradient-brand)]" />
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                  {slide.lead}
                </p>
              </Reveal>
            </div>
          )}

          {slide.layout === "toc" && (
            <div>
              <Reveal>
                <Kicker slide={slide} />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
                  {slide.title}
                </h2>
              </Reveal>
              <ol className="mt-3 grid gap-x-12 gap-y-1 md:grid-cols-2">
                {sections.map((title, i) => (
                  <motion.li
                    key={title}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.16 + i * 0.05, duration: 0.5, ease }}
                  >
                    <button
                      onClick={() => {
                        const target = slides.findIndex((s) => s.section === i + 1);
                        if (target >= 0) onSelect(target);
                      }}
                      className="group flex w-full items-baseline gap-5 border-b border-foreground/10 py-3.5 text-left"
                      data-section={i + 1}
                    >
                      <span className="font-mono text-xs text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg transition-colors group-hover:text-accent md:text-xl">
                        {title}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ol>
            </div>
          )}

          {slide.layout === "split" && (
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <TextBox>
                  <Kicker slide={slide} />
                  <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-balance md:text-5xl">
                    {slide.title}
                  </h2>
                  {slide.lead && (
                    <p className="mt-1.5 text-base leading-relaxed text-foreground/90 md:text-lg">
                      {slide.lead}
                    </p>
                  )}
                  {slide.bullets && (
                    <ul className="mt-1.5 space-y-3">
                      {slide.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/80 md:text-base">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {slide.body && (
                    <div className="mt-1.5 space-y-3.5">
                      {slide.body.map((p) => (
                        <p key={p} className="text-sm leading-relaxed text-foreground/75 md:text-base">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </TextBox>
              </Reveal>
              <Reveal delay={0.18}>
                {slide.gallery ? (
                  <Gallery items={slide.gallery} />
                ) : (
                  <figure className="overflow-hidden rounded-2xl border border-foreground/12 shadow-[var(--shadow-plate)]">
                    <img
                      src={slide.media.kind === "video" ? slide.media.poster : slide.media.src}
                      alt={slide.media.alt}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover"
                    />
                    {slide.caption && (
                      <figcaption className="bg-background/70 px-4 py-3 text-xs text-muted-foreground backdrop-blur">
                        {slide.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </Reveal>

            </div>
          )}

          {slide.layout === "statement" && (
            <div className="mx-auto text-center">
              <Reveal>
                <Kicker slide={slide} />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mx-auto mt-3 max-w-4xl font-display text-3xl leading-tight tracking-tight text-balance md:text-5xl">
                  {slide.title}
                </h2>
              </Reveal>
              {slide.lead && (
                <Reveal delay={0.16}>
                  <p className="mx-auto mt-1.5 max-w-3xl text-lg leading-relaxed text-foreground/90">
                    {slide.lead}
                  </p>
                </Reveal>
              )}
              {slide.body && (
                <Reveal delay={0.24}>
                  <div className="mx-auto mt-1.5 max-w-3xl space-y-4">
                    {slide.body.map((p) => (
                      <p key={p} className="text-sm leading-relaxed text-foreground/75 md:text-base">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          )}

          {slide.layout === "facts" && (
            <div>
              <Reveal>
                <Kicker slide={slide} />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
                  {slide.title}
                </h2>
              </Reveal>
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                {slide.facts?.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.14 + i * 0.06, duration: 0.55, ease }}
                    className="glass-panel p-5"
                  >
                    <p className="font-mono text-[10px] tracking-[0.24em] text-accent uppercase">
                      {f.label}
                    </p>
                    <p className="mt-2.5 text-base leading-snug text-foreground/90">{f.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {slide.layout === "timeline" && (
            <div>
              <Reveal>
                <Kicker slide={slide} />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
                  {slide.title}
                </h2>
              </Reveal>
              <div className="glow-scroll-x mt-3 flex gap-6 pb-4">
                {slide.timeline?.map((t, i) => (
                  <motion.article
                    key={`${t.year}-${i}`}
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.14 + i * 0.07, duration: 0.55, ease }}
                    className="relative w-[300px] shrink-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                      <span className="h-px flex-1 bg-foreground/20" />
                    </div>
                    <p className="mt-4 font-display text-3xl text-accent">{t.year}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">{t.text}</p>
                    {t.link && (
                      <a
                        href={t.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="story-link mt-3 inline-block text-xs text-accent"
                      >
                        {t.link.label}
                      </a>
                    )}
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {slide.layout === "chapter" && (
            <div className="flex min-h-[calc(100vh-16rem)] flex-col items-start justify-center">
              <Reveal>
                <p className="font-display text-[8rem] leading-none tracking-tight text-accent/40 select-none md:text-[11rem]">
                  {slide.kicker}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="-mt-4 font-display text-5xl leading-tight tracking-tight text-balance md:text-7xl">
                  {slide.title}
                </h2>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-4 h-px w-32 bg-[image:var(--gradient-brand)]" />
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl">
                  {slide.lead}
                </p>
              </Reveal>
            </div>
          )}

          {slide.layout === "stats" && (
            <div>
              <Reveal>
                <Kicker slide={slide} />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-2 font-display text-2xl tracking-tight md:text-3xl">
                  {slide.title}
                </h2>
              </Reveal>
              <div className="mt-3 grid gap-2 grid-cols-2 md:grid-cols-3">
                {slide.facts?.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.14 + i * 0.07, duration: 0.6, ease }}
                    className="glass-panel flex flex-col gap-1 p-4"
                  >
                    <p className="font-mono text-xs tracking-[0.18em] text-foreground/90 uppercase">
                      {f.label}
                    </p>
                    <p className="font-display text-xl leading-tight text-accent md:text-2xl">
                      {f.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {slide.layout === "glossary" && (
            <div className="flex flex-col h-full">
              <Reveal>
                <Kicker slide={slide} />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-2 font-display text-3xl tracking-tight md:text-5xl">
                  {slide.title}
                </h2>
              </Reveal>
              <div className="glow-scroll mt-4 flex-1 overflow-y-auto pr-2" style={{ maxHeight: "calc(100vh - 22rem)" }}>
                <div className="grid gap-x-8 gap-y-0 md:grid-cols-2">
                  {slide.rows?.map((r, i) => (
                    <motion.div
                      key={r.key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.025, duration: 0.4, ease }}
                      className="border-b border-foreground/10 py-2.5"
                    >
                      <p className="text-sm font-semibold text-accent leading-snug">{r.key}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-foreground/70">{r.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {slide.layout === "rows" && (
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <Reveal>
                  <Kicker slide={slide} />
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                    {slide.title}
                  </h2>
                </Reveal>
                <div className="glow-scroll mt-3 max-h-[calc(100vh-22rem)] divide-y divide-foreground/10 border-y border-foreground/10 pr-3 md:max-h-[calc(100vh-24rem)]">
                  {slide.rows?.map((r, i) => (
                    <motion.div
                      key={r.key}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.045, duration: 0.45, ease }}
                      className="grid gap-1 py-3.5 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-6"
                    >
                      <p className="font-display text-sm text-accent md:text-base">{r.key}</p>
                      <p className="text-sm leading-relaxed text-foreground/78">{r.value}</p>
                    </motion.div>
                  ))}
                </div>
                {slide.caption && !slide.gallery && (
                  <p className="mt-4 text-xs text-muted-foreground">{slide.caption}</p>
                )}
              </div>
              <Reveal delay={0.2}>
                {slide.gallery ? (
                  <Gallery items={slide.gallery} aspect="aspect-3/4" />
                ) : (
                  <figure className="overflow-hidden rounded-2xl border border-foreground/12 shadow-[var(--shadow-plate)]">
                    <img
                      src={slide.media.kind === "video" ? slide.media.poster : slide.media.src}
                      alt={slide.media.alt}
                      loading="lazy"
                      className="aspect-3/4 w-full object-cover"
                    />
                  </figure>
                )}
              </Reveal>

            </div>
          )}
        </div>
      </div>
    </section>
  );
}
