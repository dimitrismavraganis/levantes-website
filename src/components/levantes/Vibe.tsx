import { useLevantes } from "@/lib/levantes-context";
import { imagePairs, translations } from "@/lib/levantes-data";

export function Vibe() {
  const { theme, lang } = useLevantes();
  return (
    <section id="about" className="relative overflow-hidden px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
          <img
            src={imagePairs.vibe.day}
            alt="Levantes by day"
            loading="lazy"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
              theme === "day" ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={imagePairs.vibe.night}
            alt="Levantes by night"
            loading="lazy"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
              theme === "night" ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="caustics absolute inset-0 pointer-events-none" />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">
            {translations.about.eyebrow[lang]}
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05]">
            {translations.about.title[lang]}
          </h2>
          <div className="wave-divider my-5 w-28 text-primary" aria-hidden />
          <p className="text-lg leading-relaxed text-muted-foreground">
            {translations.about.body[lang]}
          </p>
        </div>
      </div>
    </section>
  );
}
