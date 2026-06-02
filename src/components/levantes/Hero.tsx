import { useLevantes } from "@/lib/levantes-context";
import { imagePairs, translations } from "@/lib/levantes-data";
import { LiquidButton } from "./LiquidButton";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { theme, lang } = useLevantes();

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Cross-fading image pair (both preloaded) */}
      <img
        src={imagePairs.hero.day}
        alt="Levantes by day"
        className={`absolute inset-0 size-full object-cover transition-opacity duration-[1200ms] ${
          theme === "day" ? "opacity-100" : "opacity-0"
        }`}
        fetchPriority="high"
      />
      <img
        src={imagePairs.hero.night}
        alt="Levantes by night"
        className={`absolute inset-0 size-full object-cover transition-opacity duration-[1200ms] ${
          theme === "night" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Atmospheric wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/0 to-background/90" />
      <div className="caustics absolute inset-0 pointer-events-none" />

      {/* Floating bubbles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-foam/40 backdrop-blur-sm"
            style={{
              width: `${20 + i * 12}px`,
              height: `${20 + i * 12}px`,
              left: `${10 + i * 15}%`,
              bottom: `-${30 + i * 10}px`,
              animation: `float ${6 + i * 1.4}s ease-in-out ${i * 0.6}s infinite`,
              opacity: 0.35,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="animate-liquid-reveal">
          <p className="text-xs uppercase tracking-[0.45em] text-foreground/80 mb-5">
            {theme === "day" ? "Sea · Pool · Coffee" : "Candles · Sea · Wine"}
          </p>
          <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] tracking-tight text-foreground drop-shadow-sm">
            Levantes
          </h1>
          <div className="wave-divider mx-auto mt-4 w-40 text-primary" aria-hidden />
          <p className="mx-auto mt-6 max-w-xl text-base text-foreground/85 md:text-lg">
            {translations.hero.tagline[lang]}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <LiquidButton
              variant="primary"
              onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
            >
              {translations.hero.cta[lang]}
            </LiquidButton>
            <LiquidButton
              variant="ghost"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {translations.nav.reserve[lang]}
            </LiquidButton>
          </div>
        </div>

        <a
          href="#catalog"
          aria-label="Scroll to menu"
          className="absolute bottom-8 inline-flex flex-col items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">{translations.nav.catalog[lang]}</span>
          <ChevronDown className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
