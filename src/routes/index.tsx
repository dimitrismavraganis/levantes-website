import { createFileRoute } from "@tanstack/react-router";
import { LevantesProvider } from "@/lib/levantes-context";
import { TopBar } from "@/components/levantes/TopBar";
import { Hero } from "@/components/levantes/Hero";
import { Catalog } from "@/components/levantes/Catalog";
import { Vibe } from "@/components/levantes/Vibe";
import { Reels } from "@/components/levantes/Reels";
import { Contact } from "@/components/levantes/Contact";
import { Footer } from "@/components/levantes/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Levantes — All-Day Beach Gastro Bar" },
      {
        name: "description",
        content:
          "Levantes is an all-day beach gastro bar by the sea. Morning swims and coffee, all-day plates, candlelit dinners and drinks.",
      },
      { property: "og:title", content: "Levantes — All-Day Beach Gastro Bar" },
      { property: "og:description", content: "Sea, pool, brunch, dinner, drinks. By day and by night." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LevantesPage,
});

function LevantesPage() {
  return (
    <LevantesProvider>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <TopBar />
        <main>
          <Hero />
          <Catalog />
          <Vibe />
          <Reels />
          <Contact />
        </main>
        <Footer />
      </div>
    </LevantesProvider>
  );
}
