import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useLevantes } from "@/lib/levantes-context";
import { reels, translations, imagePairs } from "@/lib/levantes-data";

export function Reels() {
  const { theme, lang } = useLevantes();
  const set = reels[theme];
  const [i, setI] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => setI(0), [theme]);

  const go = (dir: 1 | -1) => setI((v) => (v + dir + set.length) % set.length);

  // Image fallback for reel previews — alternating cat photos
  const previewFor = (idx: number) => {
    const keys = ["brunch", "allday", "dinner"] as const;
    return imagePairs[keys[idx % keys.length]][theme];
  };

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
            ref={trackRef}
            className="flex gap-5 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ transform: `translateX(calc(-${i} * (66% + 1.25rem)))` }}
          >
            {set.map((reel, idx) => {
              const active = idx === i;
              return (
                <a
                  key={reel.id}
                  href="#"
                  className={`relative flex-shrink-0 overflow-hidden rounded-3xl border border-border/60 shadow-soft transition-all duration-700 ${
                    active ? "w-[66%] scale-100 opacity-100" : "w-[33%] scale-95 opacity-70"
                  } aspect-[9/14]`}
                  style={{ minWidth: active ? "66%" : "33%" }}
                >
                  <img
                    src={previewFor(idx)}
                    alt={reel.caption[lang]}
                    loading="lazy"
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
              onClick={() => setI(idx)}
              aria-label={`Go to reel ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
