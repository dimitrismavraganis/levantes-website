import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { useLevantes } from "@/lib/levantes-context";
import { translations, contact } from "@/lib/levantes-data";
import { LiquidButton } from "./LiquidButton";

export function Contact() {
  const { lang } = useLevantes();
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">
            {translations.contact.eyebrow[lang]}
          </p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">
            {translations.contact.title[lang]}
          </h2>
          <p className="mt-4 text-muted-foreground">{translations.contact.sub[lang]}</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 text-primary" />
              <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 text-primary" />
              <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                {contact.email}
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

        <form
          onSubmit={submit}
          className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label={translations.contact.name[lang]} name="name" required />
            <Field label={translations.contact.guests[lang]} name="guests" type="number" min={1} max={20} defaultValue={2} required />
            <Field label={translations.contact.date[lang]} name="date" type="date" required />
            <Field label={translations.contact.time[lang]} name="time" type="time" required />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {translations.contact.message[lang]}
            </label>
            <textarea
              name="message"
              rows={3}
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <LiquidButton type="submit" variant="primary">
              {translations.contact.send[lang]}
            </LiquidButton>
            {sent && (
              <span className="inline-flex items-center gap-1.5 text-sm text-primary animate-fade-up">
                <Check className="size-4" /> {translations.contact.sent[lang]}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
