import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useLevantes } from "@/lib/levantes-context";
import { reels, translations } from "@/lib/levantes-data";

// Slide geometry. One active slide centered, with the neighbours peeking on
// each side. The width lives in the --slide-w custom property so it can shrink
// per breakpoint (see the wrapper below) without any JS measuring: a reel at
// 72% of a 1280px container is a ~920px-wide, ~1430px-tall monster on desktop.
const GAP_REM = 1; // matches the track gap
// Centers the active slide, then steps the track by one slide + gap per index.
const trackX = (pos: number) =>
  `translateX(calc((100% - var(--slide-w)) / 2 - ${pos} * (var(--slide-w) + ${GAP_REM}rem)))`;

export function Reels() {
  const { theme, lang } = useLevantes();
  const set = reels[theme];
  const n = set.length;

  // Clone last + first onto the ends for a seamless infinite loop.
  const slides = [set[n - 1], ...set, set[0]];

  // `pos` indexes into the cloned array; real slides live at 1..n.
  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    setAnimate(true);
    setPos(1);
  }, [theme]);

  const go = (dir: 1 | -1) => {
    setAnimate(true);
    setPos((p) => p + dir);
  };

  // After landing on a clone, snap (without animation) to the matching real slide.
  const handleTransitionEnd = () => {
    if (pos === 0) {
      setAnimate(false);
      setPos(n);
    } else if (pos === n + 1) {
      setAnimate(false);
      setPos(1);
    }
  };

  // Re-enable the transition on the frame after a no-animation snap.
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchStart.current = null;
  };

  // Real index currently centered (0..n-1), used for dots.
  const realActive = (pos - 1 + n) % n;

  return (
    <section id="reels" className="relative px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4 md:mb-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary">
              {translations.reels.eyebrow[lang]}
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              {translations.reels.title[lang]}
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => go(-1)} aria-label="Previous" className="liquid-btn rounded-full border border-border bg-card p-3">
              <ChevronLeft className="relative z-10 size-4" />
            </button>
            <button onClick={() => go(1)} aria-label="Next" className="liquid-btn rounded-full border border-border bg-card p-3">
              <ChevronRight className="relative z-10 size-4" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden [--slide-w:76%] md:[--slide-w:48%] lg:[--slide-w:32%]">
          <div
            className="flex touch-pan-y"
            style={{
              gap: `${GAP_REM}rem`,
              transform: trackX(pos),
              transition: animate
                ? "transform 700ms cubic-bezier(0.65,0,0.35,1)"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {slides.map((reel, idx) => {
              const active = idx === pos;
              return (
                <a
                  key={`${reel.id}-${idx}`}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-hidden={!active}
                  tabIndex={active ? 0 : -1}
                  className={`relative aspect-[9/16] flex-shrink-0 overflow-hidden rounded-3xl border border-border/60 shadow-soft transition-all duration-700 ${
                    active ? "scale-100 opacity-100" : "scale-90 opacity-60"
                  }`}
                  style={{ flexBasis: "var(--slide-w)", width: "var(--slide-w)" }}
                >
                  <img
                    src={reel.image}
                    alt={reel.caption[lang]}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-foam">
                    <p className="font-display text-xl md:text-2xl">{reel.caption[lang]}</p>
                    <Instagram className="size-5 opacity-90" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {set.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAnimate(true);
                setPos(idx + 1);
              }}
              aria-label={`Go to reel ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${realActive === idx ? "w-8 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
