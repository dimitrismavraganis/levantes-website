import { Phone, MapPin, Clock } from "lucide-react";
import { useLevantes } from "@/lib/levantes-context";
import { translations, contact, mapEmbedUrl } from "@/lib/levantes-data";

export function Contact() {
  const { lang } = useLevantes();

  return (
    <section id="contact" className="relative px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-primary">
          {translations.contact.eyebrow[lang]}
        </p>
        <h2 className="mt-3 font-display text-5xl md:text-6xl">
          {translations.contact.title[lang]}
        </h2>
        <p className="mt-4 text-muted-foreground">{translations.contact.sub[lang]}</p>

        <ul className="mx-auto mt-8 inline-flex flex-col gap-4 text-left text-sm">
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 size-4 text-primary" />
            <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
              {contact.phone}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-4 text-primary" />
            <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              {translations.contact.address[lang]}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="mt-0.5 size-4 text-primary" />
            <span>{translations.contact.hours[lang]}</span>
          </li>
        </ul>
      </div>

      {/* Google Maps pin. Keyed on `lang` so switching language remounts the
          iframe with map labels in that language. */}
      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border/60 shadow-soft md:mt-16">
        <iframe
          key={lang}
          src={mapEmbedUrl(lang)}
          title={translations.contact.mapTitle[lang]}
          className="block h-[320px] w-full border-0 md:h-[420px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
