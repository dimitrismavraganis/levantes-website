import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, Play, X } from "lucide-react";
import { useLevantes } from "@/lib/levantes-context";
import { activeReels, imagePairs, translations } from "@/lib/levantes-data";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const SLIDE_W = 72;
const GAP_REM = 1;
const CENTER_OFFSET = (100 - SLIDE_W) / 2;

// Thumbnail images for the carousel previews (fixed — not day/night).
const previewImages = [
  imagePairs.brunch.day,
  imagePairs.allday.day,
  imagePairs.dinner.day,
];

// Lightbox: injects a blockquote via innerHTML so React never tries to
// reconcile the node after Instagram's embed.js replaces it with an iframe.
function InstagramLightbox({
  reelId,
  onClose,
}: {
  reelId: string;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = `
      <blockquote
        class="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/${reelId}/"
        data-instgrm-version="14"
        style="margin:0 auto;max-width:540px;min-width:280px;width:100%;"
      ></blockquote>`;
    window.instgrm?.Embeds.process();
  }, [reelId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-deep/75 backdrop-blur-md animate-in fade-in duration-300"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[540px] animate-in zoom-in-95 fade-in duration-300">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-3 -top-3 z-10 rounded-full border border-border bg-card p-2 shadow-lg"
        >
          <X className="size-4" />
        </button>
        {/* Instagram injects its iframe here */}
        <div ref={containerRef} className="overflow-hidden rounded-2xl" />
      </div>
    </div>
  );
}

export function Reels() {
  const { lang } = useLevantes();
  const n = activeReels.length;
  const slides = [activeReels[n - 1], ...activeReels, activeReels[0]];

  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const touchStart = useRef<number | null>(null);

  // Load Instagram embed.js once on mount.
  useEffect(() => {
    if (!document.getElementById("ig-embed-script")) {
      const s = document.createElement("script");
      s.id = "ig-embed-script";
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(s);
    }
  }, []);

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

  const handleClose = useCallback(() => setLightboxId(null), []);

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
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="liquid-btn rounded-full border border-border bg-card p-3"
            >
              <ChevronLeft className="relative z-10 size-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="liquid-btn rounded-full border border-border bg-card p-3"
            >
              <ChevronRight className="relative z-10 size-4" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex touch-pan-y"
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
              const realIdx = (idx - 1 + n) % n;
              return (
                <button
                  key={`${reel.id}-${idx}`}
                  aria-hidden={!active}
                  tabIndex={active ? 0 : -1}
                  onClick={() => active && reel.instagramId && setLightboxId(reel.instagramId)}
                  className={`group relative aspect-[9/14] flex-shrink-0 overflow-hidden rounded-3xl border border-border/60 shadow-soft transition-all duration-700 ${
                    active ? "scale-100 opacity-100 cursor-pointer" : "scale-90 opacity-60 cursor-default"
                  }`}
                  style={{ flexBasis: `${SLIDE_W}%`, width: `${SLIDE_W}%` }}
                >
                  {/* Thumbnail */}
                  <img
                    src={previewImages[realIdx % previewImages.length]}
                    alt=""
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />

                  {/* Play button */}
                  {active && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-1 ring-white/40 transition-transform duration-300 group-hover:scale-110">
                        <Play className="size-7 fill-white text-white translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Instagram badge */}
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-deep/50 px-2.5 py-1 text-foam backdrop-blur-sm">
                    <Instagram className="size-3.5" />
                    <span className="text-[10px] font-medium uppercase tracking-wider">Reel</span>
                  </div>
                </button>
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

      {lightboxId && (
        <InstagramLightbox reelId={lightboxId} onClose={handleClose} />
      )}
    </section>
  );
}
