// All editable content lives here. Owner can update menus, translations, reels, contact.

export { default as logo } from "@/assets/logo.png";

import heroDay from "@/assets/hero-day.jpg";
import heroNight from "@/assets/hero-night.jpg";
import brunchDay from "@/assets/cat-brunch-day.jpg";
import brunchNight from "@/assets/cat-brunch-night.jpg";
import alldayDay from "@/assets/cat-allday-day.jpg";
import alldayNight from "@/assets/cat-allday-night.jpg";
import dinnerDay from "@/assets/cat-dinner-day.jpg";
import dinnerNight from "@/assets/cat-dinner-night.jpg";
import cocktailsDay from "@/assets/cat-cocktails-day.jpg";
import cocktailsNight from "@/assets/cat-cocktails-night.jpg";
import vibeDay from "@/assets/vibe-day.jpg";
import vibeNight from "@/assets/vibe-night.jpg";

export const imagePairs = {
  hero: { day: heroDay, night: heroNight },
  brunch: { day: brunchDay, night: brunchNight },
  allday: { day: alldayDay, night: alldayNight },
  dinner: { day: dinnerDay, night: dinnerNight },
  cocktails: { day: cocktailsDay, night: cocktailsNight },
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
  hours?: { en: string; gr: string };
  items: Dish[];
}

export interface Category {
  id: "brunch" | "allday" | "dinner" | "cocktails";
  label: { en: string; gr: string };
  tagline: { en: string; gr: string };
  sections: MenuSection[];
}

export const categories: Category[] = [
  {
    id: "brunch",
    label: { en: "Brunch", gr: "Brunch" },
    tagline: { en: "Served 10:00 – 13:00", gr: "Σερβίρεται 10:00 – 13:00" },
    sections: [
      {
        title: { en: "Sandwiches", gr: "Σάντουιτς" },
        hours: { en: "10:00 – 19:00", gr: "10:00 – 19:00" },
        items: [
          {
            name: { en: "Club Sandwich (Deli)", gr: "Club Sandwich Αλλαντικών" },
            desc: { en: "Cheese, ham, bacon, lettuce, tomato & mayonnaise. Served with fries & cocktail sauce.", gr: "Τυρί, ζαμπόν, μπέικον, μαρούλι, ντομάτα & μαγιονέζα. Συνοδεύεται με πατάτες & cocktail sauce." },
            price: "€8.5",
          },
          {
            name: { en: "Club Sandwich Chicken", gr: "Club Sandwich Κοτόπουλο" },
            desc: { en: "Chicken, cheese, ham, bacon, lettuce, tomato & mayonnaise. Served with fries & cocktail sauce.", gr: "Κοτόπουλο, τυρί, ζαμπόν, μπέικον, μαρούλι, ντομάτα & μαγιονέζα. Συνοδεύεται με πατάτες & cocktail sauce." },
            price: "€9.5",
          },
          {
            name: { en: "Club Sandwich Salmon", gr: "Club Sandwich Σολομός" },
            desc: { en: "Smoked salmon, yogurt, lettuce, tomato, cucumber. Served with salad & yogurt dip.", gr: "Καπνιστός σολομός, γιαούρτι, μαρούλι, ντομάτα, αγγούρι. Συνοδεύεται με σαλάτα & ντιπ γιαουρτιού." },
            price: "€10",
          },
          {
            name: { en: "Classic Toast", gr: "Classic Toast" },
            desc: { en: "Ham or smoked turkey, edam, tomato on premium bread. Served with chips.", gr: "Ζαμπόν ή καπνιστή γαλοπούλα, ένταμ, ντομάτα σε ψωμί πολυτελείας. Συνοδεύεται με πατατάκια." },
            price: "€3.5",
          },
        ],
      },
      {
        title: { en: "Eggs & More", gr: "Αυγά & Άλλα" },
        hours: { en: "10:00 – 13:00", gr: "10:00 – 13:00" },
        items: [
          {
            name: { en: "Plain Omelette", gr: "Ομελέτα Απλή" },
            desc: { en: "Omelette base, rocket, cherry tomatoes, peppers, parmesan dust.", gr: "Βάση ομελέτας, ρόκα, τοματίνια, πιπεριές, πούδρα παρμεζάνας." },
            price: "€6.5",
          },
          {
            name: { en: "Special Omelette", gr: "Ομελέτα Special" },
            desc: { en: "Omelette base with bacon, rocket, grilled chicken, cherry tomatoes, peppers, parmesan dust.", gr: "Βάση ομελέτας με μπέικον, ρόκα, κοτόπουλο ψητό, τοματίνια, πιπεριές, πούδρα παρμεζάνας." },
            price: "€7.5",
          },
          {
            name: { en: "Spicy Avocado", gr: "Spicy Avocado" },
            desc: { en: "Toasted village bread, spicy avocado, tomato, Florina pepper, poached egg.", gr: "Φρυγανισμένο χωριάτικο ψωμί, spicy avocado, ντομάτα, πιπεριά Φλωρίνης, ποσέ αυγό." },
            price: "€8",
          },
          {
            name: { en: "Benedict Eggs", gr: "Benedict Eggs" },
            desc: { en: "Poached egg, salmon, hollandaise sauce on toasted brioche bun.", gr: "Αυγό ποσέ, σολομός, ολλανδέζ σως πάνω σε βάση από φρυγανισμένο ψωμάκι brioche." },
            price: "€9",
          },
        ],
      },
      {
        title: { en: "Pancakes", gr: "Pancakes" },
        items: [
          {
            name: { en: "Fitness Pancake", gr: "Pancake Fitness" },
            desc: { en: "Honey, walnuts, cinnamon, peanut butter.", gr: "Μέλι, καρύδια, κανέλα, υφές φυστικοβούτυρου." },
            price: "€7",
          },
          {
            name: { en: "Chocolate Pancake", gr: "Pancake Σοκολάτας" },
            desc: { en: "Hazelnut praline, lotus biscuit, banana.", gr: "Πραλίνα φουντουκιού, μπισκότο lotus, μπανάνα." },
            price: "€8",
          },
          {
            name: { en: "Dubai Pancake", gr: "Pancake Dubai" },
            desc: { en: "Pistachio praline, angel hair, crushed Aegina pistachios.", gr: "Πραλίνα φυστικιού, μαλλιά αγγέλου, τριμμένο φυστίκι Αιγίνης." },
            price: "€9",
            tags: ["signature"],
          },
        ],
      },
      {
        title: { en: "Coffees", gr: "Καφέδες" },
        items: [
          { name: { en: "Espresso", gr: "Espresso" }, desc: { en: "", gr: "" }, price: "€3" },
          { name: { en: "Double Espresso", gr: "Espresso Διπλό" }, desc: { en: "", gr: "" }, price: "€4" },
          { name: { en: "Freddo Espresso", gr: "Freddo Espresso" }, desc: { en: "", gr: "" }, price: "€4.6" },
          { name: { en: "Freddo Cappuccino", gr: "Freddo Cappuccino" }, desc: { en: "", gr: "" }, price: "€4.7" },
          { name: { en: "Single Cappuccino", gr: "Cappuccino Μονό" }, desc: { en: "", gr: "" }, price: "€3.5" },
          { name: { en: "Double Cappuccino", gr: "Cappuccino Διπλό" }, desc: { en: "", gr: "" }, price: "€4.5" },
          { name: { en: "Greek Coffee", gr: "Ελληνικός Μονός" }, desc: { en: "", gr: "" }, price: "€3" },
          { name: { en: "Double Greek Coffee", gr: "Ελληνικός Διπλός" }, desc: { en: "", gr: "" }, price: "€4" },
          { name: { en: "Frappe", gr: "Φραπέ" }, desc: { en: "", gr: "" }, price: "€4" },
        ],
      },
      {
        title: { en: "Juices & Beverages *", gr: "Χυμοί & Ροφήματα *" },
        items: [
          { name: { en: "Fresh Orange Juice", gr: "Φυσικός Χυμός Πορτοκάλι" }, desc: { en: "", gr: "" }, price: "€5.5" },
          { name: { en: "Fresh Mixed Juice", gr: "Φυσικός Χυμός Ανάμεικτος" }, desc: { en: "", gr: "" }, price: "€6.5" },
          { name: { en: "Motion Juice", gr: "Motion" }, desc: { en: "", gr: "" }, price: "€4" },
          { name: { en: "Banana Juice", gr: "Χυμός Μπανάνα" }, desc: { en: "", gr: "" }, price: "€4" },
          { name: { en: "Cherry Juice", gr: "Χυμός Βύσσινο" }, desc: { en: "", gr: "" }, price: "€4" },
          { name: { en: "Peach Juice", gr: "Χυμός Ροδάκινο" }, desc: { en: "", gr: "" }, price: "€4" },
          { name: { en: "Gia...giamas", gr: "Gia...giamas" }, desc: { en: "Ask about our flavours", gr: "Ρωτήστε για τις γεύσεις μας" }, price: "€5.5" },
          { name: { en: "Chocolate", gr: "Σοκολάτα Κρύα" }, desc: { en: "", gr: "" }, price: "€5" },
          { name: { en: "Chocolate Milkshake", gr: "Milkshake Σοκολάτα" }, desc: { en: "", gr: "" }, price: "€6" },
          { name: { en: "Vanilla Milkshake", gr: "Milkshake Βανίλια" }, desc: { en: "", gr: "" }, price: "€6" },
          { name: { en: "Strawberry Milkshake", gr: "Milkshake Φράουλα" }, desc: { en: "", gr: "" }, price: "€6" },
          { name: { en: "Strawberry Granita", gr: "Γρανίτα Φράουλα" }, desc: { en: "", gr: "" }, price: "€5.5" },
        ],
      },
      {
        title: { en: "Bubble Tea", gr: "Bubble Tea" },
        items: [
          { name: { en: "Bubble Tea Passion", gr: "Bubble Tea Passion" }, desc: { en: "320 ml", gr: "320 ml" }, price: "€5.5" },
          { name: { en: "Bubble Tea Green Apple", gr: "Bubble Tea Πράσινο Μήλο" }, desc: { en: "320 ml", gr: "320 ml" }, price: "€5.5" },
          { name: { en: "Bubble Tea Watermelon", gr: "Bubble Tea Καρπούζι" }, desc: { en: "320 ml", gr: "320 ml" }, price: "€5.5" },
        ],
      },
      {
        title: { en: "Soft Drinks & Water", gr: "Αναψυκτικά & Νερά" },
        items: [
          { name: { en: "Coca Cola", gr: "Coca Cola" }, desc: { en: "250 ml", gr: "250 ml" }, price: "€3" },
          { name: { en: "Coca Cola Zero", gr: "Coca Cola Zero" }, desc: { en: "250 ml", gr: "250 ml" }, price: "€3" },
          { name: { en: "Sprite", gr: "Sprite" }, desc: { en: "250 ml", gr: "250 ml" }, price: "€3" },
          { name: { en: "Fanta Blue", gr: "Fanta Μπλε" }, desc: { en: "250 ml", gr: "250 ml" }, price: "€3" },
          { name: { en: "Soda", gr: "Soda" }, desc: { en: "250 ml", gr: "250 ml" }, price: "€3" },
          { name: { en: "Red Bull", gr: "Red Bull" }, desc: { en: "", gr: "" }, price: "€5" },
          { name: { en: "Three Cents Pink Grapefruit", gr: "Three Cents Pink Grapefruit" }, desc: { en: "200 ml", gr: "200 ml" }, price: "€4.5" },
          { name: { en: "Water", gr: "Νερό" }, desc: { en: "0.5 l", gr: "0,5 l" }, price: "€0.5" },
          { name: { en: "Water", gr: "Νερό" }, desc: { en: "1 l", gr: "1 l" }, price: "€1" },
          { name: { en: "Sparkling Water *", gr: "Ξινό Νερό *" }, desc: { en: "250 ml", gr: "250 ml" }, price: "€3.5" },
          { name: { en: "Sparkling Water *", gr: "Ξινό Νερό *" }, desc: { en: "750 ml", gr: "750 ml" }, price: "€7.5" },
        ],
      },
      {
        title: { en: "Beers", gr: "Μπύρες" },
        items: [
          { name: { en: "Corona", gr: "Corona" }, desc: { en: "330 ml", gr: "330 ml" }, price: "€5.5" },
          { name: { en: "Stella 0%", gr: "Stella 0%" }, desc: { en: "330 ml", gr: "330 ml" }, price: "€4" },
          { name: { en: "Franziskaner WEIS", gr: "Franziskaner WEIS" }, desc: { en: "500 ml", gr: "500 ml" }, price: "€6.5" },
          { name: { en: "Stella Artois", gr: "Stella Artois" }, desc: { en: "330 ml", gr: "330 ml" }, price: "€5" },
          { name: { en: "Stella Artois", gr: "Stella Artois" }, desc: { en: "500 ml", gr: "500 ml" }, price: "€6" },
          { name: { en: "Stella Artois Draft *", gr: "Stella Artois Draft *" }, desc: { en: "", gr: "" }, price: "€6" },
        ],
      },
      {
        title: { en: "Ice Cream", gr: "Παγωτά" },
        items: [
          { name: { en: "Chocolate Ice Cream", gr: "Παγωτό Σοκολάτα" }, desc: { en: "", gr: "" }, price: "€2.5" },
          { name: { en: "Strawberry Ice Cream", gr: "Παγωτό Φράουλα" }, desc: { en: "", gr: "" }, price: "€2.5" },
          { name: { en: "Caramel Ice Cream", gr: "Παγωτό Καραμέλα" }, desc: { en: "", gr: "" }, price: "€2.5" },
          { name: { en: "Vanilla Ice Cream", gr: "Παγωτό Βανίλια" }, desc: { en: "", gr: "" }, price: "€2.5" },
          { name: { en: "Cookies Ice Cream", gr: "Παγωτό Cookies" }, desc: { en: "", gr: "" }, price: "€3" },
        ],
      },
      {
        title: { en: "Ouzo & Tsipouro", gr: "Ούζο & Τσίπουρο" },
        items: [
          { name: { en: "Giannatsi", gr: "Γιαννατσή" }, desc: { en: "200 ml", gr: "200 ml" }, price: "€11" },
          { name: { en: "Thrapsathiri", gr: "Θραψαθήρι" }, desc: { en: "200 ml", gr: "200 ml" }, price: "€12" },
        ],
      },
    ],
  },
  {
    id: "allday",
    label: { en: "All Day", gr: "Όλη Μέρα" },
    tagline: { en: "Sun-soaked plates", gr: "Πιάτα για όλη τη μέρα" },
    sections: [
      {
        title: { en: "Starters", gr: "Ορεκτικά" },
        items: [
          {
            name: { en: "Halloumi Sticks", gr: "Stick Χαλούμι" },
            desc: { en: "With tomato jam.", gr: "Με μαρμελάδα ντομάτας." },
            price: "€7",
            tags: ["v"],
          },
          {
            name: { en: "Panko Shrimp", gr: "Γαρίδες Panko" },
            desc: { en: "With chili sauce (6 pcs.).", gr: "Με τσίλι σως (6 τμχ.)." },
            price: "€9.5",
            tags: ["spicy"],
          },
          {
            name: { en: "Crispy Chicken Bites", gr: "Τραγανές Μπουκιές Κοτόπουλο" },
            desc: { en: "Crispy chicken breast bites.", gr: "Από στήθος κοτόπουλο." },
            price: "€7",
          },
          {
            name: { en: "French Fries", gr: "Πατάτες Τηγανητές" },
            desc: { en: "", gr: "" },
            price: "€5",
            tags: ["vg"],
          },
          {
            name: { en: "Fries with Cheddar & Bacon", gr: "Πατάτες με Cheddar & Μπέικον" },
            desc: { en: "Fries with cheddar and crispy bacon.", gr: "Με cheddar και crispy μπέικον." },
            price: "€7",
          },
          {
            name: { en: "Vegetable Spring Rolls", gr: "Spring Rolls Λαχανικών" },
            desc: { en: "With chili sauce (5 pcs.).", gr: "Με chili σως (5 τμχ.)." },
            price: "€8",
            tags: ["v", "spicy"],
          },
          {
            name: { en: "Assorted Mushrooms", gr: "Ποικιλία Μανιταριών" },
            desc: { en: "Aromatic with thyme.", gr: "Αρωματισμένα με θυμάρι." },
            price: "€7.5",
            tags: ["vg"],
          },
          {
            name: { en: "Bao Buns — Crispy Pork Belly", gr: "Bao Buns — Τραγανή Πανσέτα" },
            desc: { en: "Bao buns with crispy pork belly and BBQ sauce.", gr: "Με τραγανή πανσέτα και bbq σως." },
            price: "€9.5",
          },
          {
            name: { en: "Bao Buns — Chicken", gr: "Bao Buns — Κοτόπουλο" },
            desc: { en: "Bao buns with breaded chicken and chili sauce.", gr: "Με κοτόπουλο πανέ και τσίλι σως." },
            price: "€9.5",
          },
          {
            name: { en: "Bao Buns — Crispy Shrimp", gr: "Bao Buns — Τραγανή Γαρίδα" },
            desc: { en: "Bao buns with crispy shrimp, peppers, chili sauce.", gr: "Με τραγανή γαρίδα, πιπεριές, τσίλι σως." },
            price: "€9.5",
            tags: ["spicy"],
          },
          {
            name: { en: "Homemade Meatballs", gr: "Κεφτεδάκια" },
            desc: { en: "Handmade meatballs with tomato sauce.", gr: "Χειροποίητα με σάλτσα ντομάτας." },
            price: "€8",
          },
        ],
      },
      {
        title: { en: "Salads (S / L)", gr: "Σαλάτες (Μικρή / Μεγάλη)" },
        items: [
          {
            name: { en: "Manouri", gr: "Μανούρι" },
            desc: { en: "Fresh iceberg, baby spinach, rocket, French lettuce, grilled manouri cheese, prosciutto, raisins, hazelnut dust, citrus dressing, balsamic.", gr: "Δροσερό iceberg, baby σπανάκι, ρόκα, γαλλικό μαρούλι, ψητό μανούρι, προσούτο, σταφίδες, πούδρα φουντουκιού, σάλτσα εσπεριδοειδών, βαλσάμικο." },
            price: "€7.5 / €11",
          },
          {
            name: { en: "Burrata", gr: "Bourrata" },
            desc: { en: "Toasted village bread bruschetta, marinated tomato, rocket, prosciutto, mozzarella.", gr: "Μπρουσκέτα από χωριάτικο ψωμί ψητό, μαριναρισμένη ντομάτα, ροκά, προσούτο, μοτσαρέλα." },
            price: "€7.5 / €11",
          },
          {
            name: { en: "Caesar's", gr: "Caesar's" },
            desc: { en: "Green leaves, chicken fillet, crispy bacon, parmesan, croutons, Caesar's sauce.", gr: "Πράσινα λαχανικά, φιλέτο κοτόπουλο, ψητό μπέικον, παρμεζάνα, κρουτόν, Caesar's σως." },
            price: "€7.5 / €11",
            tags: ["signature"],
          },
          {
            name: { en: "Greek Salad", gr: "Χωριάτικη" },
            desc: { en: "Tomato, cucumber, peppers, onion, olives, feta.", gr: "Ντομάτα, αγγούρι, πιπεριές, κρεμμύδι, ελιές, φέτα." },
            price: "€7.5 / €11",
            tags: ["v"],
          },
        ],
      },
      {
        title: { en: "Risotto & Pasta", gr: "Ριζότο & Πάστα" },
        items: [
          {
            name: { en: "Chicken Risotto", gr: "Ριζότο Κοτόπουλο" },
            desc: { en: "Chicken, thyme, turmeric, lime.", gr: "Κοτόπουλο, θυμάρι, κουρκουμάς, λάιμ." },
            price: "€10.5",
          },
          {
            name: { en: "Mushroom Risotto with Truffle Pâté", gr: "Ριζότο Μανιταριών με Πατέ Τρούφας" },
            desc: { en: "White mushrooms, oyster mushrooms, portobello, aromatic thyme.", gr: "Λευκά μανιτάρια, πλευρώτους, πόρτο μπέλο, αρωματισμένα με θυμάρι." },
            price: "€11",
            tags: ["v", "signature"],
          },
          {
            name: { en: "Penne Chicken Alfredo", gr: "Πένες Κοτόπουλο Alfredo" },
            desc: { en: "Chicken, cream, fresh basil.", gr: "Κοτόπουλο, κρέμα γάλακτος, φρέσκο βασιλικό." },
            price: "€10.5",
          },
          {
            name: { en: "Penne Al Pesto", gr: "Πένες Al Pesto" },
            desc: { en: "Mozzarella, fresh tomato.", gr: "Μοτσαρέλα, φρέσκια ντομάτα." },
            price: "€10",
            tags: ["v"],
          },
          {
            name: { en: "Rigatoni Carbonara", gr: "Ριγκατόνι Carbonara" },
            desc: { en: "Cream, smoked pork belly.", gr: "Κρέμα γάλακτος, καπνιστή πανσέτα." },
            price: "€10",
          },
          {
            name: { en: "Penne alla Napoletana", gr: "Πένες alla Napoletana" },
            desc: { en: "Napoli sauce with fresh basil.", gr: "Νάπολι με φρέσκο βασιλικό." },
            price: "€8.5",
            tags: ["v"],
          },
        ],
      },
      {
        title: { en: "Mains", gr: "Κυρίως" },
        items: [
          {
            name: { en: "Marinated Pork Steak", gr: "Χοιρινή Μπριζόλα Μαριναρισμένη" },
            desc: { en: "Served with fries.", gr: "Σερβίρεται με πατάτες τηγανητές." },
            price: "€13",
          },
          {
            name: { en: "Pork Chops", gr: "Χοιρινά Μπριζολάκια" },
            desc: { en: "Boneless pork chops with fries and BBQ sauce.", gr: "Χωρίς κόκκαλο, με πατάτες τηγανητές, μπάρμπεκιου σως." },
            price: "€12",
          },
          {
            name: { en: "Marinated Pork Belly", gr: "Πανσετάκια Μαριναρισμένα" },
            desc: { en: "Marinated pork belly with fries and BBQ sauce.", gr: "Με πατάτες τηγανητές, μπάρμπεκιου σως." },
            price: "€12",
          },
          {
            name: { en: "Pork Souvlaki (3 pcs.)", gr: "Σουβλάκια Χοιρινά (3 τμχ.)" },
            desc: { en: "Served with pita and rougail sauce.", gr: "Σερβίρεται με πίτα, ρουγκάιλ σως." },
            price: "€11",
          },
          {
            name: { en: "Grilled Chicken Fillet", gr: "Κοτόπουλο Φιλέτο Σχάρας" },
            desc: { en: "Served with grilled vegetables.", gr: "Σερβίρεται με ψητά λαχανικά." },
            price: "€12",
          },
          {
            name: { en: "Chicken Tenderloin Bites", gr: "Μπουκιές Κοτόπουλου" },
            desc: { en: "Chicken tenderloin bites with fries and Caesar sauce.", gr: "Από καρδιά φιλέτου με πατάτες τηγανητές, σίζαρς σως." },
            price: "€11.5",
          },
          {
            name: { en: "Chicken Souvlaki (3 pcs.)", gr: "Σουβλάκια Κοτόπουλο (3 τμχ.)" },
            desc: { en: "Served with pita and rougail sauce.", gr: "Σερβίρεται με πίτα και ρουγκάιλ σως." },
            price: "€11.5",
          },
          {
            name: { en: "Yogurt Kebab", gr: "Κεμπάπ Γιαουρτλού" },
            desc: { en: "Kebab on pita with cumin sauce and yogurt sauce.", gr: "Κεμπάπ πάνω σε πίτα, σάλτσα με κύμινο, σάλτσα γιαουρτλού." },
            price: "€12",
          },
          {
            name: { en: "Beef Patty", gr: "Μπιφτέκι Μοσχαρίσιο" },
            desc: { en: "Beef patty with fries and BBQ sauce.", gr: "Με πατάτες τηγανητές, μπάρμπεκιου σως." },
            price: "€11.5",
          },
          {
            name: { en: "Mixed Grill for 2", gr: "Μιξ Γκριλ 2 Ατόμων" },
            desc: { en: "2 pork souvlaki, 2 chicken souvlaki, 2 kebabs, 1 chicken fillet, 2 pork belly, fries, pitas, BBQ sauce, yellow sauce, pink sauce.", gr: "2 σουβλάκια χοιρινά, 2 σουβλάκια κοτόπουλο, 2 κεμπάπ, 1 φιλέτο κοτόπουλο, 2 πανσετάκια, πατάτες, πιτάκια, bbq, κίτρινη & ροζ σως." },
            price: "€32",
            tags: ["signature"],
          },
        ],
      },
      {
        title: { en: "Burgers", gr: "Μπέργκερ" },
        items: [
          {
            name: { en: "Chicken Burger", gr: "Burger Κοτόπουλο" },
            desc: { en: "Crispy chicken fillet, Caesar's sauce, iceberg, tomato, parmesan, bacon. Served with fries.", gr: "Crispy φιλέτο κοτόπουλο, Caesar's σως, iceberg, ντομάτα, παρμεζάνα, μπέικον. Συνοδεύεται με πατάτες τηγανητές." },
            price: "€10",
          },
          {
            name: { en: "Jack Daniels Burger", gr: "Jack Daniels Burger" },
            desc: { en: "Juicy beef patty, Jack Daniel's sauce, tomato, iceberg, caramelised onion, cheddar, bacon. Served with fries.", gr: "Ζουμερό μοσχαρίσιο μπιφτέκι, Jack Daniel's σως, ντομάτα, iceberg, καραμελωμένο κρεμμύδι, cheddar, μπέικον. Με πατάτες τηγανητές." },
            price: "€11",
            tags: ["signature"],
          },
          {
            name: { en: "Classic Burger", gr: "Classic Burger" },
            desc: { en: "Juicy beef patty, tartare sauce, tomato, lettuce, bacon, cheddar sauce. Served with fries.", gr: "Ζουμερό μοσχαρίσιο μπιφτέκι, ταρτάρ σως, ντομάτα, μαρούλι, μπέικον, cheddar σως. Με πατάτες τηγανητές." },
            price: "€10",
          },
        ],
      },
      {
        title: { en: "Desserts", gr: "Επιδόρπια" },
        items: [
          {
            name: { en: "Baked American Cheesecake", gr: "American Cheesecake Φούρνου" },
            desc: { en: "With cherry jam.", gr: "Με μαρμελάδα κεράσι." },
            price: "€7",
          },
          {
            name: { en: "Stick Brownies", gr: "Stick Brownies" },
            desc: { en: "With vanilla ice cream.", gr: "Με παγωτό βανίλια." },
            price: "€7",
          },
          {
            name: { en: "Baked Chocolate Cheesecake", gr: "Choco Cheesecake Φούρνου" },
            desc: { en: "", gr: "" },
            price: "€7",
          },
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
          {
            name: { en: "Fish Carpaccio", gr: "Καρπάτσιο Ψαριού" },
            desc: { en: "Fresh daily fish in thin slices, marinated with citrus sauce, sea salt & chive aromatic oil.", gr: "Φρέσκο ψάρι ημέρας σε λεπτές φέτες, μαριναρισμένο με σάλτσα εσπεριδοειδών, ανθό αλατιού & αρωματικό λάδι σχοινόπρασου." },
            price: "€13",
            tags: ["signature"],
          },
          {
            name: { en: "Tuna Tataki", gr: "Τατάκι Τόνου" },
            desc: { en: "Sautéed tuna fillet marinated with sesame & bourbon glaze.", gr: "Τόνος φιλέτο σωτέ μαριναρισμένος με σουσάμι & σάλτσα bourbon glaze." },
            price: "€18",
            tags: ["signature"],
          },
          {
            name: { en: "Shrimp & Octopus Ceviche", gr: "Σεβίτσε Γαρίδας – Χταπόδι" },
            desc: { en: "Combination of shrimp and octopus with citrus sauce flavoured with dry martini.", gr: "Συνδυασμός γαρίδας – χταποδιού με σάλτσα εσπεριδοειδών αρωματισμένη με dry martini." },
            price: "€13",
          },
          {
            name: { en: "Peking Duck", gr: "Πάπια Πεκίνου" },
            desc: { en: "Duck cooked in three stages, served with Japanese steam buns, char siu sauce & vegetable batonets.", gr: "Πάπια μαγειρεμένη σε τρία στάδια, σερβίρεται με ιαπωνικές πίτες ατμού, char siu sauce & batonet λαχανικών." },
            price: "€20",
            tags: ["signature"],
          },
          {
            name: { en: "Beurre Noisette", gr: "Beurre Noisette" },
            desc: { en: "Veal medallion sautéed with beurre noisette & honey sauce.", gr: "Μενταγιόν μόσχου σωτέ με βούτυρο noisette & σάλτσα μελιού." },
            price: "€12",
          },
          {
            name: { en: "L'oeuf Vert", gr: "L'oeuf Vert" },
            desc: { en: "Poached egg on avocado base with hollandaise sauce & onion crisps.", gr: "Αυγό ποσέ σε βάση από αβοκάντο με σως ολλανδέζ & τσιπς κρεμμυδιού." },
            price: "€8.5",
            tags: ["v"],
          },
          {
            name: { en: "Fava with Octopus", gr: "Φάβα Χταπόδι" },
            desc: { en: "Santorini fava matched with slow-cooked octopus, beetroot sauce & glazed onions.", gr: "Σαντορινιά φάβα παντρεμένη με χταπόδι slow cooked, σάλτσα παντζάρι & κρεμμύδια γλασέ." },
            price: "€13",
          },
        ],
      },
      {
        title: { en: "Salads", gr: "Σαλάτες" },
        items: [
          {
            name: { en: "Mango Sea Breeze", gr: "Mango Sea Breeze" },
            desc: { en: "Mixed salad with baby rocket, quinoa, poached shrimp, mango & orange with tropical fruit dressing.", gr: "Ανάμεικτη σαλάτα με baby ρόκα, κινόα, γαρίδες ποσέ, σάρκα μάνγκο & πορτοκάλι με ντρέσινγκ τροπικών φρούτων." },
            price: "€13",
            tags: ["signature"],
          },
          {
            name: { en: "Chicken Velvet", gr: "Κοτόπουλο Velvet" },
            desc: { en: "Chicken sticks on mixed salad with avocado & green apple, marinated with light mustard sauce.", gr: "Στικ κοτόπουλο σε βάση από ανάμεικτη σαλάτα με αβοκάντο & πράσινο μήλο, μαριναρισμένα με ελαφριά σάλτσα μουστάρδας." },
            price: "€12",
          },
          {
            name: { en: "Beef with Cheese Mousse", gr: "Μοσχάρι Μους Τυριών" },
            desc: { en: "Zucchini, carrot, cucumber & fennel tagliatelle with cucumber vinaigrette, beef tagliata, baby spinach, mixed salad, French cheese mousse, melon & balsamic.", gr: "Ταλιατέλες από κολοκύθι – καρότο – αγγούρι – φινόκιο με λαδολέμονο, ταλιάτα μοσχαριού, baby σπανάκι, μους γαλλικού τυριού, υφές πεπόνι & βαλσάμικο." },
            price: "€14",
          },
        ],
      },
      {
        title: { en: "Pasta", gr: "Ζυμαρικά" },
        items: [
          {
            name: { en: "Shrimp Orzo", gr: "Κριθαρότο Γαρίδας" },
            desc: { en: "Tricolor peppers, shrimp, crayfish bisque, chimichurri.", gr: "Πιπεριές τρικολόρ, γαρίδες, μπισκ καραβίδας, τσιμιτσούρι." },
            price: "€14",
            tags: ["signature"],
          },
          {
            name: { en: "Paccheri Vento Di Mare", gr: "Paccheri Vento Di Mare" },
            desc: { en: "Daily fish fillet sautéed in buttery lemon sauce with chives.", gr: "Φιλέτο ψαριού ημέρας σωτέ, βουτυράτη σάλτσα λεμονιού με σχοινόπρασο." },
            price: "€14",
          },
        ],
      },
      {
        title: { en: "Mains", gr: "Κυρίως" },
        items: [
          {
            name: { en: "Beef Knuckle Au Beurre", gr: "Beef Knuckle Au Beurre" },
            desc: { en: "Thin slices of beef with chive butter, vegetable tagliatelle & potato chips.", gr: "Λεπτές φέτες μοσχαρίσιου κρέατος με βούτυρο σχοινόπρασου, ταλιατέλες λαχανικών & τσιπς πατάτας." },
            price: "€18",
          },
          {
            name: { en: "Golden Chicken Fillet", gr: "Golden Chicken Fillet" },
            desc: { en: "Sous vide grilled chicken on celeriac base, sautéed kale, beetroot purée lines & sweet potato.", gr: "Κοτόπουλο sous vide ψητό, σε βάση σελινόριζας, kale σωτέ, γραμμές από πουρέ παντζάρι & υφές γλυκοπατάτας." },
            price: "€14",
          },
          {
            name: { en: "Sirloin", gr: "Sirloin" },
            desc: { en: "Sautéed sirloin on sweet potato purée, baby broccoli, carrots, sautéed asparagus & sweet wine sauce.", gr: "Μοσχάρι σωτέ πάνω σε πουρέ γλυκοπατάτας, baby μπρόκολο – καρότο, σπαράγγια σωτέ & σάλτσα γλυκού κρασιού." },
            price: "€20",
          },
          {
            name: { en: "Tuna Fillet", gr: "Τόνος Φιλέτο" },
            desc: { en: "Fresh tuna fillet sautéed on a bed of fresh salad, bulgur & caramelised vegetables.", gr: "Φρέσκο φιλέτο τόνου σωτέ σε βάση από δροσερή σαλάτα, πλιγούρι & καραμελωμένα λαχανικά." },
            price: "€28",
            tags: ["signature"],
          },
          {
            name: { en: "Tri-tip", gr: "Tri-tip" },
            desc: { en: "Tender tri-tip with smashed potatoes & bourbon whisky sauce.", gr: "Τρυφερό tri-tip με πατάτες εκραζέ & σάλτσα από ουίσκι μπέρμπον." },
            price: "€25",
          },
          {
            name: { en: "Svizzarina", gr: "Σβιτσερίνα" },
            desc: { en: "Thin beef patty with mustard sauce, rocket, cherry tomatoes & parmesan.", gr: "Λεπτό μοσχαρίσιο μπιφτέκι με σάλτσα μουστάρδας, ρόκα, τοματίνια & παρμεζάνα." },
            price: "€15",
          },
          {
            name: { en: "Tomahawk (1 kg)", gr: "Μοσχίδα Tomahawk (1 kg)" },
            desc: { en: "Beef tomahawk steak, served with café de Paris butter.", gr: "Μοσχαρίσια μπριζόλα 1 kg, σερβίρεται με βούτυρο café de Paris." },
            price: "€40",
            tags: ["signature"],
          },
        ],
      },
    ],
  },
  {
    id: "cocktails",
    label: { en: "Cocktails", gr: "Cocktails" },
    tagline: { en: "From dusk to last call", gr: "Από τη δύση έως το τελευταίο ποτό" },
    sections: [
      {
        title: { en: "Cocktails", gr: "Cocktails" },
        items: [
          {
            name: { en: "Mai-Tai", gr: "Mai-Tai" },
            desc: { en: "White rum, dark aged rum, orange curaçao, lime, almond orgeat.", gr: "White rum, dark aged rum, orange curaçao, lime, almond orgeat." },
            price: "€10",
            tags: ["signature"],
          },
          {
            name: { en: "Caipirinha", gr: "Caipirinha" },
            desc: { en: "Cachaça, lime, simple syrup.", gr: "Cachaça, lime, simple syrup." },
            price: "€9",
          },
          {
            name: { en: "Negroni", gr: "Negroni" },
            desc: { en: "Gin, Campari, Martini Rosso, vermouth, orange essence.", gr: "Gin, Campari, Martini Rosso, vermouth, orange essence." },
            price: "€9",
          },
          {
            name: { en: "Zombie", gr: "Zombie" },
            desc: { en: "Signature rum blend, overproof rum, passion fruit, lime, grapefruit, cinnamon, falernum.", gr: "Signature rum blend, overproof rum, passion fruit, lime, grapefruit, cinnamon, falernum." },
            price: "€12",
            tags: ["signature", "spicy"],
          },
          {
            name: { en: "Margarita", gr: "Margarita" },
            desc: { en: "Tequila blanco, lime, triple sec, salt.", gr: "Tequila blanco, lime, triple sec, salt." },
            price: "€9",
          },
          {
            name: { en: "Old Fashioned", gr: "Old Fashioned" },
            desc: { en: "Bourbon whiskey, sugar, bitters, orange essence.", gr: "Bourbon whiskey, sugar, bitters, orange essence." },
            price: "€10",
          },
          {
            name: { en: "Mojito", gr: "Mojito" },
            desc: { en: "Cuban light rum, lime, sugar, mint, soda water.", gr: "Cuban light rum, lime, sugar, mint, soda water." },
            price: "€9",
          },
          {
            name: { en: "Aperol Spritz", gr: "Aperol Spritz" },
            desc: { en: "Aperol, prosecco, soda water.", gr: "Aperol, prosecco, soda water." },
            price: "€8",
          },
          {
            name: { en: "Daiquiri", gr: "Daiquiri" },
            desc: { en: "Original or flavoured — Cuban light rum, sugar, lime.", gr: "Original ή με γεύση — Cuban light rum, sugar, lime." },
            price: "€9",
          },
          {
            name: { en: "Porn Star Martini", gr: "Porn Star Martini" },
            desc: { en: "Passion fruit, vodka, lime, vanilla.", gr: "Passion fruit, vodka, lime, vanilla." },
            price: "€9",
          },
          {
            name: { en: "Pina Colada", gr: "Pina Colada" },
            desc: { en: "White rum, Malibu, fresh pineapple juice, coconut cream, lime.", gr: "White rum, Malibu, fresh pineapple juice, coconut cream, lime." },
            price: "€9",
          },
          {
            name: { en: "Paloma", gr: "Paloma" },
            desc: { en: "Tequila blanco, lime, Three Cents pink grapefruit soda, salt.", gr: "Tequila blanco, lime, Three Cents pink grapefruit soda, salt." },
            price: "€9",
          },
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
    address: { en: "Epar.Od. Gefiras Isthmou – Isthmion 44, Isthmia, Korinthia 20100", gr: "Επαρ.Οδ. Γεφύρας Ισθμού – Ισθμιών 44, Ισθμία, Κορινθία 20100" },
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

export const reels = {
  day: [
    { id: "d1", url: "https://www.instagram.com/reel/DMF0r52IRtF/", caption: { en: "Morning swim", gr: "Πρωινό μπάνιο" } },
    { id: "d2", url: "https://www.instagram.com/reel/DMfM_9kIQ5H/", caption: { en: "Brunch by the pool", gr: "Brunch δίπλα στην πισίνα" } },
    { id: "d3", url: "https://www.instagram.com/reel/DMKJY9JIgpC/", caption: { en: "Afternoon spritz", gr: "Απογευματινό spritz" } },
  ],
  night: [
    { id: "n1", url: "https://www.instagram.com/reel/DMF0r52IRtF/", caption: { en: "Sunset sessions", gr: "Sunset sessions" } },
    { id: "n2", url: "https://www.instagram.com/reel/DMfM_9kIQ5H/", caption: { en: "Candlelit dinner", gr: "Δείπνο με κεριά" } },
    { id: "n3", url: "https://www.instagram.com/reel/DMKJY9JIgpC/", caption: { en: "Last call", gr: "Τελευταία παραγγελία" } },
  ],
};

export const contact = {
  phone: "+30 2741048198",
  email: "hello@levantes.gr",
  instagram: "https://instagram.com/levantes_",
  mapsUrl: "https://maps.google.com/?q=Epar.Od.+Gefiras+Isthmou+Isthmion+44+Isthmia+Korinthia+Greece",
};
