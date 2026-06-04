import { useState, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLevantes } from "@/lib/levantes-context";
import { categories, imagePairs, translations } from "@/lib/levantes-data";
import { MenuModal } from "./MenuModal";

export function Catalog() {
  const { theme, lang } = useLevantes();
  const [openId, setOpenId] = useState<string | null>(null);

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  const openCategory = categories.find((c) => c.id === openId) ?? null;

  return (
    <section id="catalog" className="relative px-5 py-20 md:py-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">
            {translations.catalog.eyebrow[lang]}
          </p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">
            {translations.catalog.title[lang]}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            {translations.catalog.sub[lang]}
          </p>
          <div className="wave-divider mx-auto mt-5 w-32 text-primary" aria-hidden />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {categories.map((cat) => {
            const img = imagePairs[cat.id].day;
            return (
              <button
                key={cat.id}
                onClick={() => setOpenId(cat.id)}
                onMouseMove={handleMove}
                className="liquid-card group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl border border-border/50 bg-card text-left shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  src={img}
                  alt={cat.label[lang]}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/30 to-transparent" />
                <div className="relative z-10 p-6 md:p-8 text-foam">
                  <p className="text-[10px] uppercase tracking-[0.4em] opacity-80">
                    {cat.tagline[lang]}
                  </p>
                  <h3 className="mt-2 font-display text-4xl md:text-5xl">{cat.label[lang]}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium opacity-90 transition-all group-hover:gap-3">
                    {translations.catalog.openMenu[lang]}
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <MenuModal category={openCategory} onClose={() => setOpenId(null)} />
    </section>
  );
}
