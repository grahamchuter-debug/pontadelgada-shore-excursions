import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Ponta Delgada Cruise Port Guide",
  subtitle:
    "Terminals, walking times, historic Ponta Delgada, weather, transport and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Portas do Mar",
      quay: "Purpose-built cruise terminal on the central waterfront, with a berthing line of around 360 m",
      usedBy: "Most cruise ships calling at Ponta Delgada",
      cityAccess:
        "Around 200 metres — about a 10-minute flat walk — to the main avenue and historic centre; shops, cafés and tourist information are inside the terminal",
    },
    {
      name: "Commercial Port",
      quay: "Industrial berths roughly 2 km from the historic centre, used when Portas do Mar is unavailable or occupied by another vessel",
      usedBy: "Selected calls, particularly when more than one ship is in port on the same day",
      cityAccess:
        "A shuttle is typically provided to the main port area; walking is not usually practical or permitted while cargo operations are under way",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Ponta Delgada",
      paragraphs: [
        "Most ships berth at Portas do Mar, a modern terminal complex on Ponta Delgada's waterfront, only around 200 metres from the historic centre. Some calls — especially when several ships are in port together — use the commercial pier instead, roughly 2 km farther out.",
        "Check the ship's daily programme and signs in the terminal before setting out. A shuttle is typically provided between the commercial pier and the main port area when it is used.",
        "Berth, gangway and meeting arrangements can change. Follow your cruise line and excursion provider's latest instructions for your specific sailing rather than relying on general guidance.",
      ],
    },
    {
      heading: "Walking from the port",
      paragraphs: [
        "From Portas do Mar, follow Avenida Infante Dom Henrique towards Praça Gonçalo Velho Cabral and the Portas da Cidade gates. The route is flat, well-signed and normally takes around 10 minutes at an easy pace.",
        "Ponta Delgada is one of the more walkable Azorean ports because the historic centre begins almost immediately beyond the terminal. Sete Cidades, Lagoa do Fogo and Furnas, by contrast, are road journeys and need different timing.",
        "The historic centre's basalt-and-white paving is attractive but can be uneven or slippery when wet, so footwear with grip matters even on this short walk.",
      ],
    },
    {
      heading: "Historic Ponta Delgada highlights",
      paragraphs: [
        "Portas da Cidade, the three-arched city gates on Praça Gonçalo Velho Cabral, is Ponta Delgada's best-known landmark and a natural starting point for exploring on foot.",
        "Igreja Matriz de São Sebastião anchors the main square with a striking facade; nearby lanes lead through the historic centre's distinctive black-and-white basalt streets.",
        "Forte de São Brás, a star-shaped fortification on the waterfront, once defended the harbour and now offers views back across the bay. Check current opening hours before relying on an interior visit.",
      ],
    },
    {
      heading: "Weather: city versus crater viewpoints",
      paragraphs: [
        "São Miguel's weather can vary considerably between the coast and the island's interior. A clear morning in Ponta Delgada does not guarantee a clear view at Sete Cidades or Lagoa do Fogo, both of which sit at altitude and carry a genuinely high cloud-risk profile.",
        "An early departure for crater-lake excursions meaningfully improves your chances of a clear view, but no honest operator can guarantee one. Check a forecast for the specific viewpoint, not just the city, before deciding on timing.",
        "If your chosen viewpoint is in cloud on the day, a good guide will adjust the plan rather than force a view that isn't there. Ponta Delgada's historic centre and waterfront work well as a lower-altitude alternative.",
      ],
    },
    {
      heading: "Marine conditions and whale watching",
      paragraphs: [
        "Whale and dolphin watching trips depart directly from Ponta Delgada's marina, close to the cruise terminal. São Miguel's position above deep coastal water makes it one of the Azores' best-placed departure points for this kind of excursion.",
        "Sea conditions affect comfort and can occasionally affect whether a trip runs at all. Passengers prone to seasickness should consider precautions in advance, and sightings themselves are never guaranteed.",
        "Ask your operator about its policy for rough seas or cancelled trips before booking, particularly if your port call has limited flexibility for rescheduling.",
      ],
    },
    {
      heading: "Independent exploring versus organised excursions",
      paragraphs: [
        "Ponta Delgada's historic centre is genuinely suited to independent exploring: it is compact, close to the terminal and easy to navigate on foot without a guide.",
        "Sete Cidades, Lagoa do Fogo and Furnas are a different proposition. Road distance, changeable crater-rim weather and, for the Lagoa do Fogo trail, genuine walking terrain all favour an organised excursion or a carefully planned private itinerary over casual improvisation.",
        "Independent travellers taking a rental car or taxi to the island's interior should build in the same return buffer as an organised tour, and should not assume mobile signal or navigation will be reliable on every rural road.",
      ],
    },
    {
      heading: "Meeting points and all-aboard",
      paragraphs: [
        "Ship-sponsored excursions usually meet within the controlled area around the terminal. Independent operators may meet at an agreed landmark just outside, such as the main square — read your confirmation literally and allow time to reach it.",
        "All-aboard time is earlier than the ship's published departure. For a city day, plan to reach the terminal 60–90 minutes before all-aboard; for Sete Cidades, Lagoa do Fogo or Furnas, allow a larger margin to absorb road or weather delays.",
        "Berth, gangway and meeting arrangements can change between sailings. Confirm the details for your specific call with your cruise line or excursion provider rather than assuming last season's information still applies.",
      ],
    },
    {
      heading: "Accessibility, footwear and responsible tourism",
      paragraphs: [
        "Central Ponta Delgada and the waterfront promenade are broadly manageable, but historic basalt paving is uneven in places. Sete Cidades' main viewpoints are reachable by vehicle with short walks; the Lagoa do Fogo trail and a full Furnas day involve significantly more walking. Discuss specific accessibility needs directly with your operator before booking.",
        "Supportive, grippy footwear is worth prioritising over style: basalt paving can be slippery when wet, and volcanic ground on trails is loose underfoot. A packable waterproof layer is sensible on almost any excursion, whatever the coastal forecast suggests.",
        "Please travel considerately: respect marked trails and viewpoint barriers at the crater lakes, follow marine-wildlife-watching guidance on whale trips, and support local producers and guides where you can. São Miguel's landscapes are working environments as well as visitor attractions.",
      ],
    },
    {
      heading: "Short versus long port calls",
      paragraphs: [
        "On a short call — roughly six hours or fewer ashore — stay close to Ponta Delgada. The historic centre, a whale-watching trip or Sete Cidades by van (one of the more time-efficient landscape excursions) all fit comfortably.",
        "On a long call, a full-day combination of Sete Cidades and Lagoa do Fogo, or a Furnas excursion, becomes realistic — but only with an honest calculation of usable hours after disembarkation and a conservative return buffer.",
        "Whatever your call length, currency (the euro) and language (Portuguese, with English widely understood in visitor-facing businesses) are rarely the limiting factor. Road time and changeable weather usually are.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Ponta Delgada from the cruise terminal?",
      answer:
        "Yes, when your ship berths at Portas do Mar — it is around a 10-minute flat walk to the historic centre. If your ship uses the commercial pier instead, a shuttle is typically provided.",
    },
    {
      question: "What can I see close to Ponta Delgada port?",
      answer:
        "Portas da Cidade, Praça Gonçalo Velho Cabral, Igreja Matriz de São Sebastião, Forte de São Brás and the waterfront promenade are all within or beside the compact historic centre.",
    },
    {
      question: "Do I need transport for Sete Cidades or Lagoa do Fogo?",
      answer:
        "Yes for a realistic visit. Both sit roughly 30–45 minutes from Ponta Delgada by road, and organised transport or a private vehicle is the practical way to reach them within a cruise-day timeframe.",
    },
    {
      question: "Is Sete Cidades or Lagoa do Fogo guaranteed to be clear?",
      answer:
        "No. Both carry a genuinely high cloud-risk profile because of their altitude. An early departure improves the odds but cannot guarantee a clear view on any given day.",
    },
    {
      question: "How early should I be back at the ship?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger contingency for Sete Cidades, Lagoa do Fogo or Furnas excursions.",
    },
    {
      question: "What currency and language are used in Ponta Delgada?",
      answer:
        "The Azores use the euro, as part of Portugal. Portuguese is the local language, with English widely understood in hotels, restaurants and tour operations.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
