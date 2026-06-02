// All editable content lives here. Owner can update menus, translations, reels, contact.

import heroDay from "@/assets/hero-day.jpg";
import heroNight from "@/assets/hero-night.jpg";
import brunchDay from "@/assets/cat-brunch-day.jpg";
import brunchNight from "@/assets/cat-brunch-night.jpg";
import alldayDay from "@/assets/cat-allday-day.jpg";
import alldayNight from "@/assets/cat-allday-night.jpg";
import dinnerDay from "@/assets/cat-dinner-day.jpg";
import dinnerNight from "@/assets/cat-dinner-night.jpg";
import vibeDay from "@/assets/vibe-day.jpg";
import vibeNight from "@/assets/vibe-night.jpg";

export const imagePairs = {
  hero: { day: heroDay, night: heroNight },
  brunch: { day: brunchDay, night: brunchNight },
  allday: { day: alldayDay, night: alldayNight },
  dinner: { day: dinnerDay, night: dinnerNight },
  vibe: { day: vibeDay, night: vibeNight },
};

export type Lang = "en" | "gr";
export type Theme = "day" | "night";

type DishTag = "v" | "vg" | "spicy" | "signature";

export interface Dish {
  name: { en: string; gr: string };
  desc: { en: string; gr: string };
  price: string;
  tags?: DishTag[];
}

export interface MenuSection {
  title: { en: string; gr: string };
  items: Dish[];
}

export interface Category {
  id: "brunch" | "allday" | "dinner";
  label: { en: string; gr: string };
  tagline: { en: string; gr: string };
  sections: MenuSection[];
}

export const categories: Category[] = [
  {
    id: "brunch",
    label: { en: "Brunch", gr: "Brunch" },
    tagline: { en: "Mornings by the sea", gr: "Πρωινά δίπλα στη θάλασσα" },
    sections: [
      {
        title: { en: "Eggs & Savory", gr: "Αυγά & Αλμυρά" },
        items: [
          { name: { en: "Levantes Benedict", gr: "Levantes Benedict" }, desc: { en: "Poached eggs, smoked salmon, dill hollandaise, sourdough", gr: "Αυγά ποσέ, καπνιστός σολομός, hollandaise με άνηθο, ψωμί προζύμης" }, price: "€14", tags: ["signature"] },
          { name: { en: "Aegean Shakshuka", gr: "Αιγαιοπελαγίτικο Shakshuka" }, desc: { en: "Slow-cooked tomatoes, feta, peppers, herbs", gr: "Σιγομαγειρεμένη ντομάτα, φέτα, πιπεριές, μυρωδικά" }, price: "€12", tags: ["v"] },
          { name: { en: "Avocado Toast", gr: "Avocado Toast" }, desc: { en: "Smashed avocado, soft egg, chili, lime", gr: "Αβοκάντο, μαλακό αυγό, τσίλι, λάιμ" }, price: "€11", tags: ["v"] },
        ],
      },
      {
        title: { en: "Sweet", gr: "Γλυκά" },
        items: [
          { name: { en: "Honey & Yogurt Bowl", gr: "Μπολ με Μέλι & Γιαούρτι" }, desc: { en: "Greek yogurt, thyme honey, walnuts, seasonal fruit", gr: "Στραγγιστό γιαούρτι, θυμαρίσιο μέλι, καρύδια, φρούτα εποχής" }, price: "€9", tags: ["v"] },
          { name: { en: "Brioche French Toast", gr: "French Toast με Brioche" }, desc: { en: "Caramelized brioche, mascarpone, berries", gr: "Καραμελωμένο brioche, μασκαρπόνε, μούρα" }, price: "€11" },
        ],
      },
      {
        title: { en: "Sips", gr: "Ροφήματα" },
        items: [
          { name: { en: "Cold Brew Tonic", gr: "Cold Brew Tonic" }, desc: { en: "House cold brew, tonic, orange peel", gr: "Cold brew, τόνικ, φλούδα πορτοκαλιού" }, price: "€6" },
          { name: { en: "Fresh Citrus Juice", gr: "Φρέσκος Χυμός" }, desc: { en: "Pressed daily", gr: "Φρεσκοστυμμένος" }, price: "€5", tags: ["vg"] },
        ],
      },
    ],
  },
  {
    id: "allday",
    label: { en: "All-Day", gr: "Όλη μέρα" },
    tagline: { en: "Sun-soaked plates", gr: "Πιάτα για όλη τη μέρα" },
    sections: [
      {
        title: { en: "Small Plates", gr: "Μικρά Πιάτα" },
        items: [
          { name: { en: "Marinated Olives", gr: "Μαριναρισμένες Ελιές" }, desc: { en: "Kalamata, orange, oregano", gr: "Καλαμών, πορτοκάλι, ρίγανη" }, price: "€6", tags: ["vg"] },
          { name: { en: "Crispy Calamari", gr: "Καλαμαράκια Τραγανά" }, desc: { en: "Lemon aioli, sea salt", gr: "Αϊόλι λεμονιού, ανθός αλατιού" }, price: "€13", tags: ["signature"] },
          { name: { en: "Tzatziki & Pita", gr: "Τζατζίκι & Πίτα" }, desc: { en: "House tzatziki, warm pita", gr: "Σπιτικό τζατζίκι, ζεστή πίτα" }, price: "€8", tags: ["v"] },
        ],
      },
      {
        title: { en: "Salads & Bowls", gr: "Σαλάτες & Bowls" },
        items: [
          { name: { en: "Levantes Greek Salad", gr: "Ελληνική Σαλάτα Levantes" }, desc: { en: "Heirloom tomato, barrel feta, caper leaves", gr: "Ντομάτα παλιάς ποικιλίας, φέτα βαρελίσια, κάππαρη" }, price: "€12", tags: ["v", "signature"] },
          { name: { en: "Watermelon & Feta", gr: "Καρπούζι & Φέτα" }, desc: { en: "Mint, olive oil, balsamic glaze", gr: "Δυόσμος, ελαιόλαδο, βαλσάμικο" }, price: "€11", tags: ["v"] },
          { name: { en: "Grain Bowl", gr: "Grain Bowl" }, desc: { en: "Freekeh, roasted vegetables, tahini", gr: "Φρίκε, ψητά λαχανικά, ταχίνι" }, price: "€13", tags: ["vg"] },
        ],
      },
      {
        title: { en: "Mains", gr: "Κυρίως" },
        items: [
          { name: { en: "Octopus Souvlaki", gr: "Σουβλάκι Χταποδιού" }, desc: { en: "Charred octopus, fava, capers", gr: "Σχάρας χταπόδι, φάβα, κάππαρη" }, price: "€19", tags: ["signature"] },
          { name: { en: "Beach Burger", gr: "Beach Burger" }, desc: { en: "Aged beef, graviera, tomato jam", gr: "Παλαιωμένο βοδινό, γραβιέρα, μαρμελάδα ντομάτας" }, price: "€17" },
        ],
      },
    ],
  },
  {
    id: "dinner",
    label: { en: "Dinner", gr: "Δείπνο" },
    tagline: { en: "Evenings under the stars", gr: "Βράδια κάτω από τα αστέρια" },
    sections: [
      {
        title: { en: "Starters", gr: "Ορεκτικά" },
        items: [
          { name: { en: "Sea Bream Crudo", gr: "Crudo Τσιπούρας" }, desc: { en: "Citrus, olive oil, sea salt", gr: "Εσπεριδοειδή, ελαιόλαδο, αλάτι" }, price: "€16", tags: ["signature"] },
          { name: { en: "Burrata Levantes", gr: "Burrata Levantes" }, desc: { en: "Burrata, peach, basil oil", gr: "Μπουράτα, ροδάκινο, λάδι βασιλικού" }, price: "€15", tags: ["v"] },
          { name: { en: "Grilled Shrimp", gr: "Γαρίδες Σχάρας" }, desc: { en: "Garlic, chili, ouzo butter", gr: "Σκόρδο, τσίλι, βούτυρο ούζου" }, price: "€18", tags: ["spicy"] },
        ],
      },
      {
        title: { en: "Mains", gr: "Κυρίως" },
        items: [
          { name: { en: "Whole Grilled Sea Bass", gr: "Λαβράκι Σχάρας" }, desc: { en: "Lemon, capers, samphire", gr: "Λεμόνι, κάππαρη, κρίταμο" }, price: "€32", tags: ["signature"] },
          { name: { en: "Lamb Kleftiko", gr: "Αρνί Κλέφτικο" }, desc: { en: "Slow-cooked lamb, herbs, lemon potatoes", gr: "Σιγομαγειρεμένο αρνί, μυρωδικά, λεμονάτες πατάτες" }, price: "€28" },
          { name: { en: "Aegean Risotto", gr: "Ριζότο Αιγαίου" }, desc: { en: "Mussels, saffron, sea greens", gr: "Μύδια, σαφράν, θαλασσινά χόρτα" }, price: "€24" },
        ],
      },
      {
        title: { en: "Desserts", gr: "Επιδόρπια" },
        items: [
          { name: { en: "Olive Oil Cake", gr: "Κέικ Ελαιολάδου" }, desc: { en: "Citrus, mastiha ice cream", gr: "Εσπεριδοειδή, παγωτό μαστίχα" }, price: "€10", tags: ["v"] },
          { name: { en: "Chocolate Wave", gr: "Σοκολατένιο Κύμα" }, desc: { en: "Dark chocolate, sea salt, olive oil", gr: "Μαύρη σοκολάτα, ανθός αλατιού, ελαιόλαδο" }, price: "€11", tags: ["signature"] },
        ],
      },
    ],
  },
];

export const translations = {
  nav: {
    catalog: { en: "Menu", gr: "Μενού" },
    about: { en: "About", gr: "Σχετικά" },
    reels: { en: "Reels", gr: "Reels" },
    contact: { en: "Contact", gr: "Επικοινωνία" },
    reserve: { en: "Reserve", gr: "Κράτηση" },
  },
  hero: {
    tagline: { en: "All-day beach gastro bar — sea, pool, and a table waiting.", gr: "All-day beach gastro bar — θάλασσα, πισίνα και ένα τραπέζι σε περιμένει." },
    cta: { en: "Explore the menu", gr: "Δες το μενού" },
    seeNight: { en: "See Levantes at night", gr: "Δες το Levantes τη νύχτα" },
    seeDay: { en: "See Levantes at day", gr: "Δες το Levantes τη μέρα" },
  },
  catalog: {
    eyebrow: { en: "The catalog", gr: "Ο κατάλογος" },
    title: { en: "What we serve", gr: "Τι σερβίρουμε" },
    sub: { en: "From sunrise espresso to midnight wine.", gr: "Από τον espresso της αυγής έως το κρασί των μεσάνυχτων." },
    openMenu: { en: "Open menu", gr: "Άνοιγμα μενού" },
    close: { en: "Close", gr: "Κλείσιμο" },
  },
  about: {
    eyebrow: { en: "The place", gr: "Ο χώρος" },
    title: { en: "From the first dive to the last drink.", gr: "Από τη πρώτη βουτιά μέχρι το τελευταίο ποτό." },
    body: {
      en: "We open with coffee and the sea. We linger through long lunches, hand you a towel, refill your glass. Then the lights come on — candles by the water, plates between friends, a place that knows two lives.",
      gr: "Ανοίγουμε με καφέ και θάλασσα. Μένουμε για μεγάλα μεσημέρια, σου δίνουμε πετσέτα, ξαναγεμίζουμε το ποτήρι σου. Μετά ανάβουν τα φώτα — κεριά δίπλα στο νερό, πιάτα ανάμεσα σε φίλους, ένας χώρος που ζει δύο ζωές.",
    },
  },
  reels: {
    eyebrow: { en: "On the feed", gr: "Στο feed" },
    title: { en: "Moments from the shore", gr: "Στιγμές από την ακτή" },
  },
  contact: {
    eyebrow: { en: "Find us", gr: "Βρες μας" },
    title: { en: "Reserve a table", gr: "Κράτησε τραπέζι" },
    sub: { en: "Walk-ins welcome — booking recommended for dinner.", gr: "Οι περαστικοί είναι ευπρόσδεκτοι — προτείνεται κράτηση για το δείπνο." },
    name: { en: "Name", gr: "Όνομα" },
    date: { en: "Date", gr: "Ημερομηνία" },
    time: { en: "Time", gr: "Ώρα" },
    guests: { en: "Guests", gr: "Άτομα" },
    message: { en: "Note", gr: "Σημείωση" },
    send: { en: "Request reservation", gr: "Αίτημα κράτησης" },
    sent: { en: "Thanks — we'll be in touch shortly.", gr: "Ευχαριστούμε — θα επικοινωνήσουμε σύντομα." },
    hours: { en: "Open daily · 09:00 — 01:00", gr: "Καθημερινά · 09:00 — 01:00" },
    address: { en: "Aegean Coast Rd, Greece", gr: "Παραλιακή Αιγαίου, Ελλάδα" },
  },
  tags: {
    v: { en: "Veg", gr: "Χορτ." },
    vg: { en: "Vegan", gr: "Vegan" },
    spicy: { en: "Spicy", gr: "Πικάντικο" },
    signature: { en: "Signature", gr: "Signature" },
  },
  footer: {
    rights: { en: "All rights reserved", gr: "Με την επιφύλαξη παντός δικαιώματος" },
  },
} as const;

// Instagram reels — placeholders; replace with real embeds.
export const reels = {
  day: [
    { id: "d1", caption: { en: "Morning swim", gr: "Πρωινό μπάνιο" } },
    { id: "d2", caption: { en: "Brunch by the pool", gr: "Brunch δίπλα στην πισίνα" } },
    { id: "d3", caption: { en: "Afternoon spritz", gr: "Απογευματινό spritz" } },
  ],
  night: [
    { id: "n1", caption: { en: "Sunset sessions", gr: "Sunset sessions" } },
    { id: "n2", caption: { en: "Candlelit dinner", gr: "Δείπνο με κεριά" } },
    { id: "n3", caption: { en: "Last call", gr: "Τελευταία παραγγελία" } },
  ],
};

export const contact = {
  phone: "+30 210 000 0000",
  email: "hello@levantes.gr",
  instagram: "https://instagram.com/levantes",
  mapsUrl: "https://maps.google.com/?q=Aegean+Sea",
};
