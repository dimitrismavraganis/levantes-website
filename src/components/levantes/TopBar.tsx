import { useEffect, useState } from "react";
import { Sun, Moon, Languages } from "lucide-react";
import { useLevantes } from "@/lib/levantes-context";
import { translations } from "@/lib/levantes-data";

export function TopBar() {
  const { theme, toggleTheme, lang, toggleLang } = useLevantes();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switcherLabel =
    theme === "day" ? translations.hero.seeNight[lang] : translations.hero.seeDay[lang];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight md:text-3xl">Levantes</span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:inline">
            beach · gastro · bar
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a href="#catalog" className="hover:text-primary transition-colors">{translations.nav.catalog[lang]}</a>
          <a href="#about" className="hover:text-primary transition-colors">{translations.nav.about[lang]}</a>
          <a href="#reels" className="hover:text-primary transition-colors">{translations.nav.reels[lang]}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{translations.nav.contact[lang]}</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="liquid-btn flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-2 text-xs font-medium backdrop-blur-md"
          >
            <Languages className="size-3.5" />
            <span className="relative z-10">{lang === "en" ? "EN" : "ΕΛ"}</span>
          </button>

          <button
            onClick={toggleTheme}
            aria-label={switcherLabel}
            title={switcherLabel}
            className="liquid-btn flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-2 text-xs font-medium backdrop-blur-md"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              {theme === "day" ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
              <span className="hidden sm:inline">{switcherLabel}</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
