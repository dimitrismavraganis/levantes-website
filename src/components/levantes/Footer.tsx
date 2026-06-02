import { Instagram } from "lucide-react";
import { useLevantes } from "@/lib/levantes-context";
import { translations, contact } from "@/lib/levantes-data";

export function Footer() {
  const { lang } = useLevantes();
  return (
    <footer className="border-t border-border bg-background px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl">Levantes</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            beach · gastro · bar
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Levantes. {translations.footer.rights[lang]}.
        </p>
        <a
          href={contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="size-4" />
          @levantes
        </a>
      </div>
    </footer>
  );
}
