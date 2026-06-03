import { useEffect } from "react";
import { X, Leaf, Flame, Sparkles } from "lucide-react";
import { useLevantes } from "@/lib/levantes-context";
import { translations, type Category } from "@/lib/levantes-data";

interface Props {
  category: Category | null;
  onClose: () => void;
}

const tagIcon = {
  v: <Leaf className="size-3" />,
  vg: <Leaf className="size-3" />,
  spicy: <Flame className="size-3" />,
  signature: <Sparkles className="size-3" />,
};

export function MenuModal({ category, onClose }: Props) {
  const { lang } = useLevantes();

  useEffect(() => {
    if (!category) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [category, onClose]);

  if (!category) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <button
        aria-label={translations.catalog.close[lang]}
        onClick={onClose}
        className="absolute inset-0 bg-deep/60 backdrop-blur-md animate-in fade-in duration-300"
      />
      <div
        className="relative z-10 flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-background shadow-liquid animate-liquid-reveal"
        style={{ maxHeight: "min(88dvh, 56rem)" }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-background/95 backdrop-blur px-6 py-4 md:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              {translations.catalog.eyebrow[lang]}
            </p>
            <h2 id="menu-title" className="font-display text-3xl md:text-4xl">
              {category.label[lang]}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label={translations.catalog.close[lang]}
            className="liquid-btn rounded-full border border-border bg-card p-2.5"
          >
            <X className="relative z-10 size-4" />
          </button>
        </div>

        {/* Scrollable menu body */}
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 md:py-10">
          {category.sections.map((section, sIdx) => (
            <section key={sIdx} className="mb-10 last:mb-0">
              <div className="mb-4 flex items-center gap-3">
                <h3 className="font-display text-xl text-primary md:text-2xl">
                  {section.title[lang]}
                </h3>
                <div className="h-px flex-1 bg-border" />
              </div>
              <ul className="divide-y divide-border/60">
                {section.items.map((dish, dIdx) => (
                  <li key={dIdx} className="grid grid-cols-[1fr_auto] gap-4 py-4">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h4 className="text-base font-medium text-foreground md:text-lg">
                          {dish.name[lang]}
                        </h4>
                        {dish.tags?.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] uppercase tracking-wider text-secondary-foreground"
                          >
                            {tagIcon[t]}
                            {translations.tags[t][lang]}
                          </span>
                        ))}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {dish.desc[lang]}
                      </p>
                    </div>
                    <div className="self-start whitespace-nowrap font-display text-lg text-foreground tabular-nums">
                      {dish.price}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
