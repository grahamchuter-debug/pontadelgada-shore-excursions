import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Should I stay in Ponta Delgada or explore the island?",
    answer:
      "Both work well depending on your call length. Ponta Delgada's historic centre fills two to three hours comfortably close to the ship. With five or more usable hours, most passengers prefer to combine a short city stop with one landscape excursion such as Sete Cidades.",
  },
  {
    question: "How much time do I need for Sete Cidades?",
    answer:
      "Allow around 2–3 hours at the viewpoints and village, plus roughly 40–45 minutes' driving each way from Ponta Delgada — so around 4–5 hours in total including transfers.",
  },
  {
    question: "What if the crater viewpoints are cloudy on the day?",
    answer:
      "It happens, even on otherwise fine days at sea level. Sete Cidades and Lagoa do Fogo both carry a genuinely high cloud-risk profile because of their altitude. An early departure improves your odds, but no operator can guarantee a clear view.",
  },
  {
    question: "Are there active or hiking excursions from Ponta Delgada?",
    answer:
      "Yes. The Lagoa do Fogo Hike is our clearest active option, with a real trail descending towards the crater lake. A São Miguel e-bike tour offers a less strenuous active alternative along the coast and countryside.",
  },
  {
    question: "Are private tours available from Ponta Delgada?",
    answer:
      "A private São Miguel concept is in development as a future product; it is not yet a currently bookable exclusive. In the meantime, ask our partner network about private vehicle options for Sete Cidades, Lagoa do Fogo or Ponta Delgada.",
  },
  {
    question: "What should I wear on a São Miguel shore excursion?",
    answer:
      "Supportive shoes with grip, a waterproof or windproof layer for altitude and boat trips, and sun protection even on a cloudy day. Basalt paving in Ponta Delgada can be slippery when wet.",
  },
  {
    question: "Is Sao Miguel the same as Ponta Delgada?",
    answer:
      "Not quite. São Miguel is the largest island in the Azores archipelago; Ponta Delgada is its capital city and the island's main cruise port. Sete Cidades, Lagoa do Fogo and Furnas are all located elsewhere on São Miguel, reached by road from Ponta Delgada.",
  },
  {
    question: "Can I visit Furnas on a short port call?",
    answer:
      "Generally, no. Furnas is roughly 45 minutes from Ponta Delgada by road and rewards a longer, unhurried visit to its fumaroles and gardens. Choose Sete Cidades or Ponta Delgada's historic centre instead on a shorter call.",
  },
  {
    question: "How early should I return to the ship in Ponta Delgada?",
    answer:
      "Aim to reach the terminal 60–90 minutes before all-aboard. Allow more margin when returning from Lagoa do Fogo or Furnas, since São Miguel's crater roads and changeable weather can affect journey times.",
  },
  {
    question: "Are Ponta Delgada shore excursions accessible for limited mobility?",
    answer:
      "Central Ponta Delgada and the waterfront have accessible sections, but historic basalt paving can be uneven. Sete Cidades' main viewpoints are reachable by vehicle with short walks; the Lagoa do Fogo trail and Furnas are more demanding. Discuss exact needs with the operator before booking.",
  },
  {
    question: "What currency and language are used in Ponta Delgada?",
    answer:
      "The Azores use the euro, as part of Portugal. Portuguese is the local language, and English is widely understood in visitor-facing businesses. Cards are common, but carrying a small amount of cash is useful for markets and smaller cafés.",
  },
  {
    question: "Is English widely spoken in Ponta Delgada?",
    answer:
      "Yes, particularly in hotels, restaurants and tour operations aimed at cruise passengers. A few Portuguese phrases are still appreciated, especially outside the main visitor areas.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
