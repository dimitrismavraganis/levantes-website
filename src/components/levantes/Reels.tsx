import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLevantes } from "@/lib/levantes-context";
import { activeReels, translations } from "@/lib/levantes-data";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const SLIDE_W = 72;
const GAP_REM = 1;
const CENTER_OFFSET = (100 - SLIDE_W) / 2;

export function Reels() {
  const { lang } = useLevantes();
  const n = activeReels.length;
  const slides = [activeReels[n - 1], ...activeReels, activeReels[0]];

  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);
  const touchStart = useRef<number | null>(null);

  // Load Instagram embed.js once; it auto-processes all blockquotes on load.
  useEffect(() => {
    if (!document.getElementById("ig-embed-script")) {
      const s = document.createElement("script");
      s.id = "ig-embed-script";
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(s);
    }
  }, []);

  // Re-process any unprocessed blockquotes after navigation.
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [pos]);

  const go = (dir: 1 | -1) => {
    setAnimate(true);
    setPos((p) => p + dir);
  };

  const handleTransitionEnd = () => {
    if (pos === 0) {
      setAnimate(false);
      setPos(n);
    } else if (pos === n + 1) {
      setAnimate(false);
      setPos(1);
    }
  };

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

        <div className="relative overflow-hidden">
          <div
            className="flex touch-pan-y items-start"
            style={{
              gap: `${GAP_REM}rem`,
              transform: `translateX(calc(${CENTER_OFFSET}% - ${pos} * (${SLIDE_W}% + ${GAP_REM}rem)))`,
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
                <div
                  key={`${reel.id}-${idx}`}
                  aria-hidden={!active}
                  className={`flex-shrink-0 overflow-hidden rounded-3xl border border-border/60 shadow-soft transition-all duration-700 bg-card ${
                    active ? "scale-100 opacity-100" : "scale-90 opacity-60"
                  }`}
                  style={{
                    flexBasis: `${SLIDE_W}%`,
                    width: `${SLIDE_W}%`,
                    pointerEvents: active ? "auto" : "none",
                  }}
                >
                  {/* Instagram replaces this blockquote with an iframe on load */}
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={`https://www.instagram.com/reel/${reel.instagramId}/`}
                    data-instgrm-version="14"
                    style={{
                      background: "transparent",
                      border: 0,
                      borderRadius: 0,
                      margin: 0,
                      maxWidth: "100%",
                      minWidth: 280,
                      width: "100%",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {activeReels.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAnimate(true);
                setPos(idx + 1);
              }}
              aria-label={`Go to reel ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                realActive === idx ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
