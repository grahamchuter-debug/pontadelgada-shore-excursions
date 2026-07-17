import type { ExcursionPage } from "./types";

export const PORT_LOGISTICS =
  "Berth, gangway and meeting arrangements in Ponta Delgada can change. Follow your cruise line and excursion provider’s latest instructions. Always compare the excursion duration and meeting time with your ship’s all-aboard time.";

export const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
};

export const excursions: ExcursionPage[] = [
  {
    slug: "sete-cidades-island-tour",
    title: "Sete Cidades Island Tour by Van",
    seoTitle: "Sete Cidades Island Tour by Van",
    metaDescription:
      "A half-day minivan tour to Sete Cidades' crater lakes and western São Miguel scenery — a cruise-friendly introduction to the Azores' classic view.",
    category: "Scenic & Historical Tours",
    badge: "editors-choice",
    tagline:
      "São Miguel's most photographed crater lakes, reached by minivan in a single well-paced half-day.",
    duration: "3 Hours",
    pace: "Relaxed",
    groupType: "Small",
    activityLevel: "Easy",
    foodBeverage: "Not included",
    locations: [
      "Sete Cidades",
      "Vista do Rei viewpoint",
      "Western São Miguel",
      "Pineapple plantation stop",
    ],
    experienceStyle: "Guided minivan sightseeing",
    bestFor:
      "First-time visitors who want São Miguel's signature crater-lake view without committing a full day ashore",
    cruiseSuitability:
      "At roughly three hours door-to-door, this is one of the more forgiving excursions to fit around a typical Ponta Delgada call, leaving room either side for lunch or an independent wander into town.",
    whyRecommend:
      "It is the most efficient way to tick off São Miguel's headline view on a first visit, without gambling a large share of your port day on a longer itinerary.",
    planningCaveat:
      "Sete Cidades sits at altitude, and cloud or mist regularly settles over the crater rim, particularly in the morning — a perfectly clear view of both lakes cannot be promised on any single visit. This is also a viewpoint-led tour rather than a full exploration of the crater floor; passengers wanting more time on foot inside Sete Cidades should compare it with the dedicated nature walk.",
    suitabilityLabel: "Half-day port favourite",
    overview:
      "This half-day minivan tour is the most practical way to see Sete Cidades, the volcanic double-crater lake that appears on almost every São Miguel postcard, without giving up your whole day in port.",
    body: [
      "From Ponta Delgada, the road climbs steadily into the western highlands of São Miguel, and the scenery gradually shifts from farmland to open crater country. Your driver-guide points out this change along the way, including a stop connected to one of the island's pineapple growers — a curiosity for passengers who associate the Azores purely with the sea.",
      "The main event is the view down into the Sete Cidades caldera from a recognised viewpoint such as Vista do Rei, where two lakes — described in local legend as one green, one blue — sit side by side inside a vast, forested crater. On a clear day the effect is genuinely dramatic; on a cloudy one, it is honestly more atmospheric than crisp.",
      "Because the tour is built around a small vehicle rather than a full coach, the pace tends to feel more personal, with time to stop, take photographs and ask the driver-guide questions about the caldera's volcanic history and the villages tucked inside it.",
      "At around three hours in total, this is designed as an introduction rather than a full exploration of Sete Cidades. Passengers who want to walk the crater floor or spend longer in the area should compare this tour with the full-day Sete Cidades and Lagoa do Fogo itinerary or the dedicated Sete Cidades Nature Walk.",
    ],
    highlights: [
      "Panoramic view over the Sete Cidades twin crater lakes",
      "Stop connected to a local pineapple grower en route",
      "Small-vehicle touring with a driver-guide",
      "Western São Miguel's volcanic scenery",
    ],
    included: [
      "Return minivan transport with a driver-guide",
      "Small-group format",
      "Viewpoint stop over Sete Cidades",
      "Commentary on the caldera's history and geology",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Cloud and mist regularly settle over the crater rim, especially in the morning; a clear view can't be promised on any single visit.",
      "Bring a light waterproof layer — the highlands are noticeably cooler and damper than the harbourside in Ponta Delgada.",
      "This is a viewpoint-based tour rather than a walking tour, so it suits passengers who want the classic view without a long hike.",
      "Confirm the exact meeting point and time with the operator after booking, and check it against your ship's schedule.",
    ],
    faqs: [
      {
        question: "Does this tour go down into the Sete Cidades crater itself?",
        answer:
          "It's primarily a viewpoint tour, focused on the classic overlook of the twin lakes rather than an extended walk around the crater floor. For more time inside the caldera, look at the Sete Cidades Nature Walk or the full-day Sete Cidades and Lagoa do Fogo tour.",
      },
      {
        question: "Will I definitely see both lakes clearly?",
        answer:
          "In good weather, yes — the view from the main lookout takes in both lakes at once. Sete Cidades sits at altitude, though, and cloud or mist can reduce visibility on any given day; this is normal for the area and outside any operator's control.",
      },
      {
        question: "Is three hours enough time to enjoy Sete Cidades?",
        answer:
          "It's enough for a genuine, well-paced look at the main viewpoint and surrounding scenery, though it isn't intended as a full exploration of the crater or its villages. Treat it as an efficient introduction rather than a complete day out.",
      },
      {
        question: "What is the pineapple plantation stop about?",
        answer:
          "São Miguel is known for growing pineapples in greenhouses, and this tour includes a stop connected to that local industry as a point of interest on the way to or from Sete Cidades.",
      },
      {
        question: "Is this tour suitable if my port time is limited?",
        answer:
          "Its roughly three-hour running time makes it one of the more flexible options for a standard Ponta Delgada call, but always check the confirmed start time against your ship's all-aboard before booking.",
      },
    ],
    relatedExcursionSlugs: [
      "sete-cidades-nature-walk",
      "sete-cidades-e-bike",
      "sete-cidades-lagoa-do-fogo",
      "private-sete-cidades",
    ],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/sete-cidades-island-tour-by-van/eudgsetevan",
      productId: "eudgsetevan",
    },
    ctaLabel: "Check Availability",
  },
  {
    slug: "sete-cidades-lagoa-do-fogo",
    title: "Full Day Sete Cidades and Lagoa do Fogo Exploration",
    seoTitle: "Full Day Sete Cidades and Lagoa do Fogo Exploration",
    metaDescription:
      "See São Miguel's two most famous crater lakes, Sete Cidades and Lagoa do Fogo, on one full-day small-group tour — best suited to a longer Ponta Delgada call.",
    category: "Full-Day Nature Tours",
    badge: "best-full-day",
    tagline:
      "Two volcanic worlds in one day — the lush Sete Cidades caldera and the bare, dramatic slopes of Lagoa do Fogo.",
    duration: "8 Hours",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Easy",
    foodBeverage: "Lunch included",
    locations: ["Sete Cidades", "Lagoa do Fogo", "Central São Miguel highlands"],
    experienceStyle: "Full-day guided small-group exploration",
    bestFor:
      "Passengers with a long port call who want to see São Miguel's two most famous crater lakes in a single, unhurried day",
    cruiseSuitability:
      "Running close to eight hours, this genuinely takes up most of a working day — it only makes sense on a call where your ship's time in Ponta Delgada comfortably exceeds that, once transfers and a sensible buffer are added.",
    whyRecommend:
      "For passengers whose sailing gives them an unusually long day in Ponta Delgada, this is the single most complete way to compare São Miguel's two signature volcanic lakes without booking two separate tours.",
    planningCaveat:
      "This is an eight-hour commitment on top of getting to and from the meeting point, so it leaves little margin on a standard or short call. Weather can also differ sharply between the two locations — Lagoa do Fogo sits higher and more exposed than Sete Cidades — so pack for both. If your port window is on the shorter side, a half-day Sete Cidades tour or a dedicated Lagoa do Fogo hike will fit far more comfortably.",
    suitabilityLabel: "Full port day — long calls only",
    overview:
      "This full-day small-group tour is the most complete way to see São Miguel's two most celebrated crater lakes, Sete Cidades and Lagoa do Fogo, in a single excursion — but it takes up the vast majority of a typical port day, so it only suits sailings with a genuinely long call.",
    body: [
      "The day is built around two separate volcanic landscapes rather than one. Sete Cidades supplies the postcard view of twin lakes inside a vast forested caldera in the island's west, while Lagoa do Fogo — the 'Lake of Fire' — sits higher in the island's central mountains, ringed by bare, dramatic slopes rather than farmland.",
      "Moving between the two areas takes a meaningful amount of driving time, which is part of why the tour runs to around eight hours in total. A small-group format keeps things more personal than a full coach, with stops built in for photographs and orientation at each viewpoint.",
      "A meal and beverages are included as part of the day, giving it a different rhythm from São Miguel's shorter half-day options — there is time to properly settle in at each stop rather than glancing and moving on.",
      "Because this occupies most of a working day, it is best matched to calls where your ship is in Ponta Delgada for a genuinely long window. On a standard shorter call, the half-day Sete Cidades tour or the dedicated Lagoa do Fogo hike are usually the more realistic choice.",
    ],
    highlights: [
      "Two of São Miguel's most iconic crater lakes in a single day",
      "Central highland scenery around Lagoa do Fogo",
      "Western caldera views at Sete Cidades",
      "Meal and beverages included during the day",
      "Small-group pacing across a full day",
    ],
    included: [
      "Small-group transport for the full day",
      "Driver-guide with commentary at both locations",
      "Meal and beverages, as specified for this tour",
      "Viewpoint stops at Sete Cidades and Lagoa do Fogo",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "This is an eight-hour commitment, so it only makes sense on a call where your ship is in port for considerably longer than that once transfer and buffer time are factored in.",
      "Weather can differ noticeably between the two areas — Lagoa do Fogo sits higher and is more exposed, so pack a warm, waterproof layer even if Ponta Delgada itself is mild.",
      "Confirm the exact meeting time and pick-up arrangements with the operator, then check this against your ship's published all-aboard time before booking.",
      "If your call is on the shorter side, a half-day version of Sete Cidades or a dedicated Lagoa do Fogo hike will fit more comfortably.",
    ],
    faqs: [
      {
        question: "Is eight hours realistic for a cruise call in Ponta Delgada?",
        answer:
          "Only on calls with a long time in port. Because this tour runs close to a full working day, it leaves little margin if your ship's window is on the shorter side — check your specific sailing's schedule carefully before booking.",
      },
      {
        question: "What's included to eat and drink?",
        answer:
          "A meal and beverages are included as part of this full-day itinerary, though the specific menu is set by the tour operator rather than by us.",
      },
      {
        question: "How different are Sete Cidades and Lagoa do Fogo?",
        answer:
          "Sete Cidades is a low-lying, forested double-crater lake in the west of the island, while Lagoa do Fogo sits higher in the central highlands, surrounded by bare volcanic slopes. Seeing both in one day gives a good sense of how varied São Miguel's volcanic scenery is.",
      },
      {
        question: "Is this a walking tour?",
        answer:
          "The tour is rated an easy activity level by the operator and is built around scenic stops and viewpoints rather than a dedicated hike. Passengers wanting a proper walking route should look at the Lagoa do Fogo Nature Hike or the Sete Cidades Nature Walk instead.",
      },
      {
        question: "Can this be shortened if I only have a few hours in port?",
        answer:
          "Not as a single booking — the two-location itinerary is what makes it an eight-hour day. If your time ashore is shorter, choose one destination rather than both.",
      },
    ],
    relatedExcursionSlugs: [
      "sete-cidades-island-tour",
      "lagoa-do-fogo-hike",
      "sete-cidades-nature-walk",
    ],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/full-day-sete-cidades-lagoa-do-fogo-exploration/eudgbeatrackhalf",
      productId: "eudgbeatrackhalf",
    },
    ctaLabel: "Check Availability",
  },
  {
    slug: "whale-watching-catamaran",
    title: "Dolphin and Whale Watching by Catamaran",
    seoTitle: "Dolphin and Whale Watching by Catamaran",
    metaDescription:
      "Search for dolphins and whales in the deep Atlantic waters off Ponta Delgada on a stable catamaran trip — an easy half-day, with no sightings guaranteed.",
    category: "Wildlife & Boat Trips",
    badge: "best-first-time",
    tagline:
      "The Azores' famous deep-water dolphins and whales, searched for from the steady deck of a catamaran.",
    duration: "3 Hours",
    pace: "Relaxed",
    groupType: "Standard",
    activityLevel: "Easy",
    foodBeverage: "Not included",
    locations: ["Coastal waters off Ponta Delgada"],
    experienceStyle: "Guided catamaran wildlife watching",
    bestFor:
      "Passengers wanting a comfortable, stable-boat introduction to the Azores' dolphin and whale-watching waters",
    cruiseSuitability:
      "A three-hour round trip from Ponta Delgada fits comfortably within most port calls, with time to spare either side.",
    whyRecommend:
      "The catamaran's stability makes this the most approachable wildlife-watching option for passengers who are unsure how they'll cope with a few hours on open water.",
    planningCaveat:
      "This is genuine wild-animal watching, not a marine park visit: sightings of dolphins and whales are searched for, never guaranteed, and depend entirely on what the crew finds on the day. Sea conditions can also affect comfort, so take usual seasickness precautions if needed.",
    suitabilityLabel: "Easy half-day wildlife trip",
    overview:
      "This catamaran trip heads out from Ponta Delgada into the deep Atlantic waters that make the Azores one of Europe's most respected destinations for dolphin and whale watching, using a stable multi-hulled boat suited to a relaxed few hours at sea.",
    body: [
      "São Miguel's position in the mid-Atlantic, close to a steep underwater shelf, brings a wide range of cetacean species within a realistic distance of the harbour. A trained crew uses local knowledge, radio contact with other boats and visual scanning to search the waters for dolphins and whales during the trip.",
      "The catamaran format offers a steadier ride than a smaller rigid-hull boat, which tends to suit passengers who prefer to stay seated and take in the Atlantic scenery rather than a fast, bouncing crossing. Onboard commentary explains what species are typically present in the season of your visit and what signs the crew is watching for.",
      "Because this is genuinely wild-animal watching rather than a zoo or aquarium visit, no sighting can ever be promised. Most trips do encounter some form of marine life, but the exact species, number and proximity vary from one sailing to the next and depend entirely on conditions on the day.",
      "At around three hours including time at sea, this is one of the more straightforward excursions to fit into a typical port day, and it pairs naturally with independent time in Ponta Delgada afterwards.",
    ],
    highlights: [
      "Search for dolphins and, seasonally, whales in Azorean Atlantic waters",
      "Stable catamaran suited to a relaxed few hours at sea",
      "Crew commentary on local marine life",
      "Straightforward half-day format",
    ],
    included: [
      "Return catamaran trip from Ponta Delgada",
      "Trained crew searching for and identifying marine life",
      "Onboard safety briefing and equipment",
      "Commentary on the species typically present",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Sightings of dolphins and whales can never be guaranteed on any wildlife-watching trip; crews search likely areas using experience and local knowledge, but wild animals don't follow a schedule.",
      "If you're prone to seasickness, consider taking your usual precaution in good time before boarding, even though the catamaran format is more stable than a smaller boat.",
      "Bring a wind-resistant layer — it can feel considerably cooler on open water than on land, even on a mild day in Ponta Delgada.",
      "Camera or phone zoom is useful, since marine life is typically viewed at a respectful distance rather than up close.",
    ],
    faqs: [
      {
        question: "Is seeing dolphins or whales guaranteed?",
        answer:
          "No responsible operator can guarantee wildlife sightings. The crew actively searches known feeding and transit areas using experience and local knowledge, and most trips do see some marine life, but this is wild-animal watching, not a certainty.",
      },
      {
        question: "What might I see?",
        answer:
          "Common dolphins are frequently reported in Azorean waters, and various whale species pass through seasonally. Exactly what's present on your specific date depends on the time of year and conditions at sea.",
      },
      {
        question: "Is the catamaran comfortable for people who get seasick?",
        answer:
          "A catamaran generally offers a steadier ride than a smaller speedboat, which is one reason we highlight it for passengers who prefer a gentler few hours on the water. Sea conditions still vary, so take your usual precautions if you're prone to motion sickness.",
      },
      {
        question: "How long does the trip take overall?",
        answer:
          "The tour itself runs for around three hours. Confirm the exact meeting point and time with the operator so you can plan your journey there and back within your port day.",
      },
      {
        question: "Is this suitable for children?",
        answer:
          "The operator rates the activity level as easy, but always check age and other requirements directly with the operator before booking, as these details aren't specified on the source listing.",
      },
    ],
    relatedExcursionSlugs: [
      "whale-watching-speedboat",
      "private-whale-watching",
      "southern-coast-boat-trip",
    ],
    featured: true,
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/dolphin-and-whale-watching-by-catamaran/eudgdolwhal",
      productId: "eudgdolwhal",
    },
    ctaLabel: "Check Availability",
  },
  {
    slug: "azorean-flavours-food-walk",
    title: "Azorean Flavours Food Walk",
    seoTitle: "Azorean Flavours Food Walk",
    metaDescription:
      "Taste São Miguel's produce on a small-group walking food tour through central Ponta Delgada — a cruise-friendly excursion that never leaves town.",
    category: "Food & Walking Tours",
    badge: "best-food",
    tagline:
      "Cheeses, bread and Azorean specialities, tasted on foot through Ponta Delgada's historic streets.",
    duration: "3 Hours 30 Minutes",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    foodBeverage: "Tastings included",
    locations: ["Ponta Delgada historic centre"],
    experienceStyle: "Guided small-group walking food tour",
    bestFor: "Food-curious passengers who want to taste São Miguel's produce without leaving Ponta Delgada",
    cruiseSuitability:
      "Staying entirely within Ponta Delgada removes the travel-time risk of an inland excursion, making it a dependable choice on tighter port calls.",
    whyRecommend:
      "Because it never leaves the town centre, this is one of the lowest-risk excursions on the list for passengers nervous about traffic, road closures or a tight all-aboard.",
    planningCaveat:
      "Tastings are provided at several stops rather than as a single sit-down meal, so treat this as a flavour introduction rather than a guaranteed lunch replacement. Comfortable shoes matter, as historic-centre paving can be uneven, and dietary requirements should be declared to the operator well before the day.",
    suitabilityLabel: "Short-call friendly, stays in town",
    overview:
      "This small-group walking tour explores Ponta Delgada's food culture at street level, pairing tastings of Azorean produce with a guided introduction to the historic centre — all within comfortable walking distance of the harbour.",
    body: [
      "Rather than travelling out to the island's countryside, this tour keeps you in Ponta Delgada itself, moving on foot between stops chosen to reflect São Miguel's food traditions — think local cheeses, bread, pastries or regional drinks, tasted at working shops, cafés or small producers rather than at a single set restaurant.",
      "A guide provides context along the way, connecting the tastings to the wider story of São Miguel's farming and fishing communities and pointing out landmarks in the historic centre between stops.",
      "Because the tour is walking-based and involves several stops over roughly three and a half hours, it moves at more of a moderate pace than a simple sightseeing stroll — comfortable footwear is genuinely useful.",
      "Its town-centre format makes it one of the more resilient tours on a tight schedule, since it isn't dependent on a long road transfer that could be affected by traffic or weather in the highlands.",
    ],
    highlights: [
      "Tastings of Azorean produce at multiple stops",
      "Guided walk through Ponta Delgada's historic centre",
      "Local context on São Miguel's food traditions",
      "Compact, town-based format",
    ],
    included: [
      "English-speaking food guide",
      "Beverage and food tastings at several stops, as specified for this tour",
      "Guided walking route through central Ponta Delgada",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Let the operator know about allergies or dietary requirements when booking, well before the day of the tour.",
      "Wear comfortable walking shoes — cobbled and paved historic-centre streets can be uneven in places.",
      "Tastings are provided at each stop rather than a single sit-down meal, so treat this as a flavour introduction rather than a full lunch replacement unless the operator confirms otherwise.",
      "Because the tour stays in Ponta Delgada, it's a sensible option to pair with independent exploring before or after.",
    ],
    faqs: [
      {
        question: "Does this tour count as lunch?",
        answer:
          "It includes beverage and food tastings at several stops rather than a single formal meal, so it may not fully replace lunch depending on portion sizes — check with the operator if this matters to your plans.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Expect a genuine walk through the historic centre at a moderate pace over roughly three and a half hours, with several stops along the way.",
      },
      {
        question: "Do we go outside Ponta Delgada?",
        answer:
          "No, this tour is designed to stay within the town itself, which is part of why it suits passengers with a shorter or less predictable port window.",
      },
      {
        question: "Can vegetarians or those with allergies join?",
        answer:
          "Provision varies by stop and producer, so declare any dietary requirements to the operator in advance rather than assuming they can be accommodated on the day.",
      },
      {
        question: "Are the drinks local Azorean specialities?",
        answer:
          "The tastings focus on Azorean specialities rather than a general café menu; ask the operator for specifics on the drinks included if you have a preference.",
      },
    ],
    relatedExcursionSlugs: ["azorean-cooking-experience", "sete-cidades-nature-walk"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/azorean-flavors-food-walk/eudgpontafood",
      productId: "eudgpontafood",
    },
    ctaLabel: "View Excursion",
  },
  {
    slug: "sete-cidades-nature-walk",
    title: "Sete Cidades Nature Walk",
    seoTitle: "Sete Cidades Nature Walk",
    metaDescription:
      "Walk through the Sete Cidades caldera on a guided nature walk — a ground-level alternative to a vehicle tour, close to São Miguel's famous crater lakes.",
    category: "Walking Tours",
    badge: "best-short-call",
    tagline: "Sete Cidades on foot — closer to the lakeshore and the crater's quiet farmland.",
    duration: "3 Hours 30 Minutes",
    pace: "Moderate",
    groupType: "Standard",
    activityLevel: "Easy",
    foodBeverage: "Not included",
    locations: ["Sete Cidades crater trails"],
    experienceStyle: "Guided nature walking tour",
    bestFor: "Passengers who'd rather walk through Sete Cidades at ground level than view it from a coach window",
    cruiseSuitability:
      "At three and a half hours, this fits a similar window to the van-based sightseeing tour, making it a straightforward swap for passengers who prefer walking to riding.",
    whyRecommend:
      "It offers a genuinely different perspective on Sete Cidades than the classic overlook tours — closer to the lakes, the farmland and the small community living inside the crater.",
    planningCaveat:
      "This is rated an easy activity level, but it remains a real outdoor walk of a few hours rather than a short stroll, over paths that can be uneven or muddy after rain. Highland weather can also differ noticeably from conditions at the harbour, so pack accordingly.",
    suitabilityLabel: "Ground-level alternative to the van tour",
    overview:
      "This tour takes you on foot into the Sete Cidades caldera itself, following trails around the crater rather than simply admiring it from a roadside viewpoint.",
    body: [
      "Where the minivan tour concentrates on the classic overlook, this walking tour brings you down into the crater and around its lower ground, passing closer to the lakeshore, farmland and villages that sit inside the vast Sete Cidades caldera.",
      "A guide leads the group along established paths, pointing out the volcanic origins of the crater and the everyday life of the small community that still farms inside it — a different perspective from the postcard view most visitors see from above.",
      "The operator rates this an easy activity level, and the pace is comfortable rather than strenuous, but it is a genuine outdoor walk lasting around three and a half hours, so reasonably fit walkers will get the most from it.",
      "As with any excursion in São Miguel's highlands, conditions can change quickly; a fine spell at sea level in Ponta Delgada doesn't guarantee the same weather inside the crater.",
    ],
    highlights: [
      "Ground-level walking route inside the Sete Cidades caldera",
      "Views of the crater's lakes from path level rather than a roadside overlook",
      "Guided commentary on the volcano's history and local farming life",
      "A quieter, slower-paced alternative to a vehicle-based tour",
    ],
    included: [
      "Guide for the duration of the walk",
      "Guided route within the Sete Cidades crater",
      "Group format as specified by the operator",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear proper walking shoes; paths inside the crater can be uneven, muddy after rain, or simply longer underfoot than they look on a map.",
      "Pack a light waterproof layer regardless of the forecast in Ponta Delgada, since the highlands often see different weather.",
      "This is rated an easy activity level, but it is still a genuine walk of a few hours rather than a short stroll, so plan accordingly if mobility is a concern.",
      "Food and drink aren't included, so bring water and a snack for the walk.",
    ],
    faqs: [
      {
        question: "How is this different from the Sete Cidades Island Tour by Van?",
        answer:
          "The van tour is a vehicle-based sightseeing trip focused on the main viewpoint, while this tour puts you on foot inside the crater itself, following trails at a closer, slower pace.",
      },
      {
        question: "How difficult is the walking?",
        answer:
          "The operator rates it an easy activity level, and paths are generally manageable, but it is a real outdoor walk lasting roughly three and a half hours rather than a short amble.",
      },
      {
        question: "Is there anywhere to buy food or drink during the walk?",
        answer:
          "This isn't specified by the operator, so it's sensible to bring your own water and a snack rather than assume shops will be available along the route.",
      },
      {
        question: "What should I wear?",
        answer:
          "Sturdy, comfortable walking shoes and a layer for wind or light rain are sensible, since the crater's paths and highland weather can differ from conditions down at the harbour.",
      },
      {
        question: "Can I combine this with the van tour on the same visit?",
        answer:
          "Not on the same booking, since each is a separate tour with its own schedule. Choose whichever format — walking or vehicle-based — best matches how you want to experience Sete Cidades on this call.",
      },
    ],
    relatedExcursionSlugs: ["sete-cidades-island-tour", "sete-cidades-e-bike", "lagoa-do-fogo-hike"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/sete-cidades-nature-walk/eudgsetecwalk",
      productId: "eudgsetecwalk",
    },
    ctaLabel: "View Excursion",
  },
  {
    slug: "lagoa-do-fogo-hike",
    title: "Lagoa do Fogo Nature Hike",
    seoTitle: "Lagoa do Fogo Nature Hike",
    metaDescription:
      "Hike into São Miguel's dramatic central highlands to Lagoa do Fogo on a guided nature hike, with lunch included — best for reasonably fit passengers.",
    category: "Hiking & Active",
    badge: "best-active",
    tagline: "The 'Lake of Fire' on foot — bare volcanic slopes, wide skies and a proper highland hike.",
    duration: "6 Hours 30 Minutes",
    pace: "Active",
    groupType: "Standard",
    activityLevel: "Moderate",
    foodBeverage: "Lunch included",
    locations: ["Lagoa do Fogo", "Serra de Água de Pau nature reserve"],
    experienceStyle: "Guided nature hike",
    bestFor: "Reasonably fit passengers who want a proper hike through São Miguel's dramatic central highlands",
    cruiseSuitability:
      "At roughly six and a half hours, this uses a substantial part of a port day, so it is best matched to calls with a genuinely comfortable window once transfer and buffer time are added.",
    whyRecommend:
      "For active passengers who find viewpoint tours too passive, this is the most physically engaging way to experience São Miguel's volcanic highlands on a single call.",
    planningCaveat:
      "This is rated a moderate activity level and runs for around six and a half hours in total, so it suits reasonably fit walkers comfortable with sustained effort on uneven ground rather than those seeking a gentle outing. Highland weather can also turn quickly and differ sharply from conditions at the harbour.",
    suitabilityLabel: "Longer, more active port day",
    overview:
      "This guided hike takes you up into the Serra de Água de Pau highlands to Lagoa do Fogo, the 'Lake of Fire', for a proper walking day rather than a brief viewpoint stop.",
    body: [
      "Lagoa do Fogo sits inside a volcanic crater high in the centre of São Miguel, surrounded by bare, wind-scoured slopes that look markedly different from the lush farmland closer to Ponta Delgada. Reaching a good vantage point, or the lakeshore itself depending on the route the guide sets on the day, involves a genuine walk over uneven highland terrain.",
      "At around six and a half hours including transfer and hiking time, this is one of the longer excursions in the collection, and the operator rates it a moderate activity level rather than easy — reasonable fitness and comfort with sustained walking will make the day considerably more enjoyable.",
      "Lunch is included partway through the day, giving a natural break in the hike and a chance to refuel before continuing.",
      "Because so much of the day happens at altitude, weather can differ sharply from conditions in Ponta Delgada — wind, cloud and rain are all common on the reserve's exposed slopes, even when the harbour is calm and sunny.",
    ],
    highlights: [
      "A genuine hike through the Serra de Água de Pau highlands",
      "Views over Lagoa do Fogo's dramatic volcanic crater",
      "Lunch included during the day",
      "A longer, more active alternative to São Miguel's viewpoint-based tours",
    ],
    included: ["Guide for the full hike", "Lunch, as specified for this tour", "Guided route through the Lagoa do Fogo area"],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "This is rated a moderate activity level and runs for around six and a half hours in total, so it suits reasonably fit walkers rather than those looking for a gentle outing.",
      "Highland weather can turn quickly; pack a proper waterproof and warm layer even if the forecast for Ponta Delgada itself looks mild.",
      "Wear worn-in walking shoes or boots — the terrain around Lagoa do Fogo is uneven volcanic ground rather than a paved path.",
      "Given the length of this excursion, check the confirmed return time carefully against your ship's all-aboard before booking.",
    ],
    faqs: [
      {
        question: "How fit do I need to be for this hike?",
        answer:
          "The operator rates it a moderate activity level. It suits passengers who are comfortable with several hours of sustained walking on uneven ground, rather than those seeking a gentle stroll.",
      },
      {
        question: "Is six and a half hours realistic for my port call?",
        answer:
          "That depends entirely on your ship's schedule. Because this excursion takes up a large part of a working day, check the confirmed start and return times against your specific sailing's all-aboard time before booking.",
      },
      {
        question: "What's the weather like at Lagoa do Fogo?",
        answer:
          "The lake sits high in a central volcanic reserve, and conditions there are often cooler, windier and cloudier than at sea level in Ponta Delgada. Come prepared for a change in weather even on a mild-looking day.",
      },
      {
        question: "Is lunch a packed meal or a sit-down stop?",
        answer:
          "The tour includes lunch as part of the day; the exact format is set by the operator, so ask directly if you have specific dietary needs.",
      },
      {
        question: "How does this differ from the Sete Cidades Nature Walk?",
        answer:
          "This hike is longer, rated a higher activity level, and explores the central highlands around Lagoa do Fogo rather than the western Sete Cidades caldera. Choose based on how much time and effort you want to commit on this call.",
      },
    ],
    relatedExcursionSlugs: ["sete-cidades-lagoa-do-fogo", "sete-cidades-nature-walk"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/lagoa-do-fogo-nature-hike/eudgfogohike",
      productId: "eudgfogohike",
    },
    ctaLabel: "Check Availability",
  },
  {
    slug: "whale-watching-speedboat",
    title: "Dolphin and Whale Speedboat Adventure",
    seoTitle: "Dolphin and Whale Speedboat Adventure",
    metaDescription:
      "Search for dolphins and whales off Ponta Delgada aboard a fast speedboat — a livelier alternative to the catamaran trip, with no sightings guaranteed.",
    category: "Wildlife & Boat Trips",
    badge: "best-repeat",
    tagline: "The same Atlantic search for dolphins and whales, at a faster, livelier pace.",
    duration: "3 Hours",
    pace: "Moderate",
    groupType: "Standard",
    activityLevel: "Easy",
    foodBeverage: "Not included",
    locations: ["Coastal waters off Ponta Delgada"],
    experienceStyle: "Guided speedboat wildlife watching",
    bestFor: "Passengers who want a livelier, faster boat ride alongside the search for dolphins and whales",
    cruiseSuitability:
      "At around three hours, this fits comfortably within most standard Ponta Delgada calls, just as the catamaran option does.",
    whyRecommend:
      "It suits passengers who've already tried a calmer wildlife-watching trip on a previous visit and want to experience the same waters from a faster, more hands-on angle.",
    planningCaveat:
      "As with any wildlife-watching trip, sightings of dolphins and whales are searched for, never guaranteed. The speedboat format is also firmer and wetter than a catamaran, so it may not suit passengers with back or neck concerns, or those particularly prone to seasickness.",
    suitabilityLabel: "Faster-paced wildlife trip",
    overview:
      "This trip searches the same rich Atlantic waters off Ponta Delgada for dolphins and whales as our catamaran option, but does so aboard a smaller, faster speedboat for a livelier ride.",
    body: [
      "The waters off São Miguel drop away quickly into deep Atlantic channels, which is a large part of why the island has built a reputation for dolphin and whale watching. This trip uses a speedboat rather than a catamaran, covering ground faster and giving a more exhilarating, hands-on feel to the crossing.",
      "A trained crew searches for marine life using the same local knowledge and spotting techniques as any responsible whale-watching operator, scanning the water and listening for reports from other boats in the area.",
      "The trade-off for the livelier ride is a firmer, bumpier experience than a catamaran, especially if the sea has any swell on the day. Passengers who prefer a smoother, more stable few hours at sea may find our catamaran option more comfortable.",
      "As with any wildlife-watching trip, sightings depend on the animals themselves rather than the boat — the crew will search likely areas, but nothing in the ocean can be promised in advance.",
    ],
    highlights: [
      "Faster, more exhilarating speedboat format",
      "Search for dolphins and whales in Azorean Atlantic waters",
      "Crew commentary and local spotting knowledge",
      "A livelier alternative to the catamaran trip",
    ],
    included: [
      "Return speedboat trip from Ponta Delgada",
      "Trained crew searching for marine life",
      "Safety equipment and briefing",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "This is a firmer, faster ride than a catamaran; it may not suit passengers with back or neck issues, or those who are particularly prone to seasickness.",
      "Sightings of dolphins and whales are never guaranteed on any wildlife-watching trip, whichever boat you choose.",
      "Expect to get wetter and windier than on a catamaran — waterproof clothing and a secure bag for valuables are sensible.",
      "If you've already done a calmer wildlife-watching trip on a previous visit, this is a way to see the same waters from a different, faster perspective.",
    ],
    faqs: [
      {
        question: "What's the difference between this and the catamaran whale-watching trip?",
        answer:
          "Both search the same general waters off Ponta Delgada for dolphins and whales, but this trip uses a smaller, faster speedboat, giving a livelier and less stable ride than the catamaran.",
      },
      {
        question: "Is this suitable for people who get seasick easily?",
        answer:
          "It's a firmer ride than the catamaran option, so passengers prone to seasickness may prefer that alternative instead. Take your usual precautions in good time if you do choose the speedboat.",
      },
      {
        question: "Are sightings guaranteed?",
        answer:
          "No. This is wild-animal watching, and no operator can guarantee dolphin or whale sightings on any given trip, regardless of the boat used.",
      },
      {
        question: "Will I get wet on this trip?",
        answer: "Likely more so than on a catamaran, given the speed and boat type. Wear or bring suitable waterproof clothing.",
      },
      {
        question: "How long is the trip in total?",
        answer:
          "The excursion runs for around three hours, which fits comfortably within most standard Ponta Delgada port calls.",
      },
    ],
    relatedExcursionSlugs: ["whale-watching-catamaran", "private-whale-watching"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/dolphin-whale-speedboat-adventure/eudgdolwhlspd",
      productId: "eudgdolwhlspd",
    },
    ctaLabel: "Check Availability",
  },
  {
    slug: "sete-cidades-e-bike",
    title: "Sete Cidades E-Bike Exploration",
    seoTitle: "Sete Cidades E-Bike Exploration",
    metaDescription:
      "Explore the Sete Cidades caldera by electric bike on a guided tour — an active, self-paced way to see São Miguel's volcanic crater and viewpoints.",
    category: "Cycling Tours",
    tagline: "The Sete Cidades caldera by electric bike — an active, open-air way to cover more ground.",
    duration: "3 Hours",
    pace: "Active",
    groupType: "Standard",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Sete Cidades", "Western São Miguel crater roads"],
    experienceStyle: "Guided e-bike exploration",
    bestFor: "Passengers who want an active, independent-feeling way to cover more of the Sete Cidades area than walking allows",
    cruiseSuitability: "At around three hours, this fits a standard Ponta Delgada call without difficulty.",
    whyRecommend:
      "It suits active passengers who want more physical engagement than a van tour but more ground coverage than a walking tour, in a single well-timed half-day.",
    planningCaveat:
      "Even with electric assistance, this is an active tour that requires basic comfort and confidence on a bicycle over undulating highland roads. Minimum age, height or experience requirements aren't specified by the operator, so confirm these directly if relevant to your group.",
    suitabilityLabel: "Active half-day, self-paced",
    overview:
      "This tour explores the roads and viewpoints around Sete Cidades by electric bicycle, covering more ground than a walking tour while still keeping things at a manageable effort level thanks to the electric assist.",
    body: [
      "Electric bikes make the climbs around the Sete Cidades caldera considerably more approachable than on a standard bicycle, while still giving a genuinely active, open-air way to see the crater and its surrounding roads.",
      "A guide leads the route, choosing stops for views over the twin lakes and explaining the volcanic landscape along the way. Riding rather than driving or walking gives a different sense of scale to the caldera and its steep inner slopes.",
      "The operator rates this a moderate activity level, reflecting the fact that even with electric assistance, cycling on undulating highland roads takes more physical engagement than sitting in a van or bus.",
      "At around three hours, the tour is a practical length for most port calls, though it does require a basic level of comfort and confidence on a bicycle, electric-assisted or not.",
    ],
    highlights: [
      "E-bike exploration of the Sete Cidades caldera and surrounding roads",
      "Guided stops at key viewpoints over the twin lakes",
      "Active, open-air alternative to a van or walking tour",
      "Electric assistance for a more approachable ride",
    ],
    included: [
      "Electric bicycle for the duration of the tour",
      "Guide leading the route",
      "Safety equipment as provided by the operator",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Even with electric assistance, this is an active tour — reasonable balance and confidence on a bicycle are useful.",
      "The operator doesn't specify minimum age, height or experience requirements, so confirm these directly if relevant to your group.",
      "Dress in layers suitable for both riding effort and highland weather, which can be cooler and windier than in Ponta Delgada.",
      "Food and drink aren't included, so bring water for the ride.",
    ],
    faqs: [
      {
        question: "Do I need cycling experience for an e-bike tour?",
        answer:
          "Basic comfort and confidence riding a bicycle is useful, since the electric motor assists with effort but doesn't replace balance and control. If you're not a confident cyclist, a van-based or walking tour of Sete Cidades may suit you better.",
      },
      {
        question: "Is this tour physically demanding?",
        answer:
          "The operator rates it a moderate activity level. Electric assistance makes the climbs around the caldera easier than on a standard bike, but it's still a genuinely active few hours rather than a passive sightseeing trip.",
      },
      {
        question: "What should I bring?",
        answer:
          "Water, sun or wind protection depending on conditions, and clothing you're happy to cycle in. Food and drink aren't included on this tour.",
      },
      {
        question: "Is there a minimum age for this tour?",
        answer:
          "This isn't specified by the operator, so check directly with them if you're booking for children or a mixed-age group.",
      },
      {
        question: "How does this compare with the Sete Cidades Nature Walk?",
        answer:
          "The e-bike tour covers more ground more quickly and requires cycling ability; the nature walk is on foot, covers less distance, and suits those who'd rather walk than ride.",
      },
    ],
    relatedExcursionSlugs: ["sete-cidades-island-tour", "sete-cidades-nature-walk"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/sete-cidades-ebike-exploration/eudgemtbself",
      productId: "eudgemtbself",
    },
    ctaLabel: "View Excursion",
  },
  {
    slug: "southern-coast-boat-trip",
    title: "Half Day Ponta Delgada Southern Coast Boat Trip",
    seoTitle: "Half Day Ponta Delgada Southern Coast Boat Trip",
    metaDescription:
      "Explore São Miguel's volcanic southern coastline by small boat from Ponta Delgada — cliffs, coves and sea caves on a relaxed half-day trip.",
    category: "Coastal Boat Trips",
    badge: "best-value",
    tagline: "Cliffs, coves and sea caves along São Miguel's southern shore, seen from a small boat.",
    duration: "3 Hours",
    pace: "Relaxed",
    groupType: "Small",
    activityLevel: "Easy",
    foodBeverage: "Not included",
    locations: ["Southern coastline near Ponta Delgada"],
    experienceStyle: "Small-boat coastal sightseeing",
    bestFor: "Passengers who want to see São Miguel's coastline from the water without a wildlife-watching focus",
    cruiseSuitability: "At around three hours, this small-boat trip fits easily within a standard Ponta Delgada call.",
    whyRecommend:
      "It's a straightforward, easy-going way to see the island's coastline from the water for passengers who'd rather not build a whole excursion around a wildlife search.",
    planningCaveat:
      "This is a small boat on an exposed Atlantic coastline, so sea conditions on the day can affect the exact route and how close it gets to certain features. The focus is coastal scenery rather than wildlife, so any marine life seen along the way should be treated as an incidental bonus, not the purpose of the trip.",
    suitabilityLabel: "Easy half-day, small group",
    overview:
      "This small-boat trip follows São Miguel's dramatic southern coastline from Ponta Delgada, focusing on cliffs, coves and sea caves rather than a specific search for wildlife.",
    body: [
      "Rather than concentrating purely on dolphins and whales, this trip is built around the coastal scenery itself — the volcanic cliffs, sea caves and inlets along São Miguel's southern shore, seen from a small boat rather than the deck of a cruise ship.",
      "A skipper or guide points out notable features along the route and explains a little of the coastline's volcanic origins, keeping the pace relaxed rather than fast or thrill-focused.",
      "Because it's a small boat operating along an exposed Atlantic coast, expect some movement on the water; conditions on the day may affect exactly which stretches of coastline are covered.",
      "Marine life is occasionally spotted incidentally on trips like this, but that isn't the stated focus of the tour, so any sightings should be treated as a bonus rather than an expectation.",
    ],
    highlights: [
      "São Miguel's volcanic southern coastline seen from the water",
      "Sea caves, cliffs and coves along the route",
      "Small-boat format with a relaxed pace",
      "Skipper commentary on the coastline",
    ],
    included: [
      "Return small-boat trip along the southern coast",
      "Skipper or guide commentary",
      "Safety equipment and briefing",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Sea conditions can affect the exact route and how close the boat gets to certain features on the day.",
      "This is a small, open or semi-open boat, so bring a layer against wind and spray even in good weather.",
      "The focus is coastal scenery rather than wildlife, so treat any marine life sightings as a pleasant bonus rather than the main event.",
      "Food and drink aren't included, so plan accordingly if the trip runs close to a mealtime.",
    ],
    faqs: [
      {
        question: "Is this a wildlife-watching trip?",
        answer:
          "Not primarily — the focus is on São Miguel's coastal scenery, cliffs and sea caves rather than a dedicated search for dolphins or whales. Any marine life seen along the way is an incidental bonus.",
      },
      {
        question: "How rough is the boat ride?",
        answer:
          "That depends on conditions on the day. This is a small boat on an exposed Atlantic coastline, so some movement is normal; the operator will adjust the route for safety and comfort as needed.",
      },
      {
        question: "What will I actually see?",
        answer:
          "Volcanic cliffs, coves and sea caves along São Miguel's southern shore, with commentary from the skipper or guide on the coastline's geology and history.",
      },
      {
        question: "Is this suitable for a short port call?",
        answer: "Yes — at around three hours, it fits comfortably into most standard Ponta Delgada calls.",
      },
      {
        question: "Is food provided?",
        answer: "No, food and drink aren't included on this tour.",
      },
    ],
    relatedExcursionSlugs: ["whale-watching-catamaran", "whale-watching-speedboat"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/half-day-ponta-delgada-southern-coast-boat-trip/eudgboatactiv",
      productId: "eudgboatactiv",
    },
    ctaLabel: "View Excursion",
  },
  {
    slug: "private-sete-cidades",
    title: "Private Half-Day Sete Cidades",
    seoTitle: "Private Half-Day Sete Cidades",
    metaDescription:
      "See Sete Cidades on a private half-day tour with your own vehicle and guide — flexible pacing for families or small groups, from Ponta Delgada.",
    category: "Private Tours",
    badge: "best-private",
    tagline: "The classic Sete Cidades sightseeing route, at your own pace, with your own private guide.",
    duration: "3 Hours",
    pace: "Relaxed",
    groupType: "Private",
    activityLevel: "Easy",
    foodBeverage: "Not included",
    locations: ["Sete Cidades"],
    experienceStyle: "Private guided sightseeing",
    bestFor: "Small groups or families who want Sete Cidades at their own pace, without joining a shared tour",
    cruiseSuitability:
      "At around three hours, this fits a standard Ponta Delgada call, though the operator notes a possible taxi transfer to the departure point that is worth factoring into your timing.",
    whyRecommend:
      "For families or groups of friends who'd rather not share a vehicle and schedule with strangers, this gives the classic Sete Cidades experience with more flexibility over pacing.",
    planningCaveat:
      "The operator notes that some departures may require a short taxi transfer to reach the tour's starting point, at an estimated cost of around seven euros each way, which is not included in the tour price — confirm this directly for your booking rather than assuming it applies. The operator also states the vehicle used can carry up to eight guests as a private group.",
    suitabilityLabel: "Private, flexible half-day",
    overview:
      "This private version of the classic Sete Cidades sightseeing route uses your own vehicle and guide rather than a shared group, giving more flexibility over stops and pacing.",
    body: [
      "The itinerary covers similar ground to the shared minivan tour — the viewpoints and volcanic scenery of the Sete Cidades caldera — but with a private vehicle rather than sharing seats with other cruise passengers.",
      "According to the operator, the vehicle used can accommodate a private group of up to eight guests, which suits families or groups of friends travelling together who'd rather stay as a single private party for the day.",
      "The operator also notes that some departures may require a short taxi transfer to reach the tour's starting point, at an estimated cost of around seven euros each way, which is not included in the tour price. Treat this as a supplier-stated detail to confirm directly, rather than a guarantee, since arrangements can vary.",
      "Because the group is private, the exact pacing and any minor route adjustments can generally be discussed with your guide on the day, within the tour's overall three-hour running time.",
    ],
    highlights: [
      "Private vehicle and guide rather than a shared group",
      "Sete Cidades viewpoints and volcanic scenery",
      "Flexible pacing within the tour's timeframe",
      "Vehicle capacity for private groups, per the operator",
    ],
    included: [
      "Private guide for the duration of the tour",
      "Private vehicle, capacity as specified by the operator",
      "Sete Cidades viewpoint stops",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Confirm directly with the operator whether a taxi transfer is needed to reach the departure point, and budget for the estimated cost (reported as around seven euros each way) since this is not included in the tour price.",
      "Because this is a private tour, use the opportunity to ask your guide questions or request minor adjustments to pacing within the available time.",
      "As with any Sete Cidades tour, weather and cloud at the crater rim can vary, so a clear view can't be promised.",
      "Food and drink aren't included, so plan accordingly.",
    ],
    faqs: [
      {
        question: "Is transport to the meeting point included?",
        answer:
          "Not necessarily — the operator notes that some departures may need a short taxi transfer to the start point, at an estimated cost of around seven euros each way, which isn't included in the tour price. Confirm the arrangements for your specific booking directly with the operator.",
      },
      {
        question: "How many people can book this private tour together?",
        answer:
          "The operator states the vehicle used can carry up to eight guests, making it suitable for a family or small group travelling as one private party.",
      },
      {
        question: "What's the benefit of a private tour over the shared minivan version?",
        answer:
          "You're not sharing the vehicle or schedule with other passengers, which gives more flexibility over pacing and minor stops, within the tour's overall running time.",
      },
      {
        question: "How long does the tour last?",
        answer: "Around three hours, similar in length to the shared version of the Sete Cidades sightseeing tour.",
      },
      {
        question: "Is lunch included?",
        answer: "No, food and drink are not included on this tour.",
      },
    ],
    relatedExcursionSlugs: ["sete-cidades-island-tour", "private-whale-watching"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-half-day-sete-cidades/eudgpvtsete",
      productId: "eudgpvtsete",
    },
    ctaLabel: "Check Availability",
  },
  {
    slug: "azorean-cooking-experience",
    title: "Small Group Azorean Cooking in Outside Farmhouse",
    seoTitle: "Small Group Azorean Cooking in Outside Farmhouse",
    metaDescription:
      "Cook Azorean dishes with a local host at a rural São Miguel farmhouse — a hands-on small-group food experience with a meal and drinks included.",
    category: "Food & Culinary Experiences",
    tagline: "A hands-on Azorean cooking session at a rural farmhouse, away from the harbour.",
    duration: "4 Hours",
    pace: "Relaxed",
    groupType: "Small",
    activityLevel: "Easy",
    foodBeverage: "Lunch included",
    locations: ["Rural farmhouse, São Miguel countryside"],
    experienceStyle: "Small-group hands-on cooking class",
    bestFor: "Food-focused passengers who want a hands-on, rural take on Azorean cuisine rather than a walking tasting tour",
    cruiseSuitability:
      "At four hours plus transfer time to the rural setting, this needs a reasonably comfortable port window rather than a very short call.",
    whyRecommend:
      "It suits passengers who want to actively cook rather than simply taste, and who are happy trading a little more transfer time for a more immersive, rural food experience.",
    planningCaveat:
      "The distance and transfer time to the farmhouse setting aren't detailed by the operator, so factor an unspecified amount of travel time either way into your overall port-day plan. Dietary requirements should be flagged well in advance, since the menu is largely set by the host.",
    suitabilityLabel: "Hands-on food half-day",
    overview:
      "This small-group experience takes cruise passengers out to a rural farmhouse setting to cook and share Azorean dishes, offering a more hands-on alternative to a walking food tour in town.",
    body: [
      "Rather than tasting food prepared by someone else, this experience puts you in the kitchen — or, given the farmhouse setting, quite possibly outdoors — alongside a local host, learning to prepare Azorean dishes using regional ingredients.",
      "The rural setting is part of the appeal: this is a working farmhouse environment rather than a restaurant, giving a more grounded sense of where São Miguel's food actually comes from.",
      "A meal and beverages are included as you sit down to enjoy the dishes prepared during the session, rounding out what is a genuinely sociable few hours away from the ship.",
      "At four hours including any transfer to and from the rural setting, this sits between the compact food walk in Ponta Delgada and a full-day countryside excursion — factor the travel time into your overall port-day plan.",
    ],
    highlights: [
      "Hands-on cooking of Azorean dishes with a local host",
      "Rural farmhouse setting outside Ponta Delgada",
      "Meal and beverages included as part of the session",
      "Small-group format for a more personal experience",
    ],
    included: [
      "Hands-on cooking session with a local host",
      "Ingredients for the dishes prepared during the session",
      "Meal and beverages, as specified for this tour",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Factor in transfer time to and from the rural farmhouse setting when planning your overall port day.",
      "Let the operator know about allergies or dietary requirements well in advance, since the menu is fixed by the host rather than chosen freely on the day.",
      "This is a hands-on session rather than a passive demonstration, so wear clothing you don't mind getting a little messy.",
      "Small-group format means places may be limited — book ahead of your sailing where possible.",
    ],
    faqs: [
      {
        question: "Do I need cooking experience to join?",
        answer:
          "No, the session is designed for visitors rather than experienced cooks. The local host guides the group through preparing the dishes.",
      },
      {
        question: "Is this a demonstration or do I actually cook?",
        answer: "It's described as hands-on, so expect to be actively involved in preparing the food rather than simply watching.",
      },
      {
        question: "How far is the farmhouse from Ponta Delgada?",
        answer:
          "This isn't specified in detail by the operator, so factor in an unknown amount of transfer time either way when planning your day, and confirm timings when you book.",
      },
      {
        question: "What's included to eat and drink?",
        answer:
          "A meal and beverages are included, based on the dishes prepared during the session; specific menu details are set by the host.",
      },
      {
        question: "Is this suitable for a short port call?",
        answer:
          "At four hours plus any transfer time, it needs a reasonably comfortable port window — check the confirmed schedule against your ship's all-aboard time before booking.",
      },
    ],
    relatedExcursionSlugs: ["azorean-flavours-food-walk"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/small-group-azorean-cooking-in-outside-farmhouse/eudgzorfoodfarm",
      productId: "eudgzorfoodfarm",
    },
    ctaLabel: "View Excursion",
  },
  {
    slug: "private-whale-watching",
    title: "Private Whale Watching",
    seoTitle: "Private Whale Watching",
    metaDescription:
      "Search for dolphins and whales off Ponta Delgada with a private boat and crew — a flexible, personal wildlife trip, with sightings never guaranteed.",
    category: "Private Tours",
    tagline: "A dedicated boat and crew, searching the same Atlantic waters for dolphins and whales.",
    duration: "3 Hours",
    pace: "Relaxed",
    groupType: "Private",
    activityLevel: "Easy",
    foodBeverage: "Not included",
    locations: ["Coastal waters off Ponta Delgada"],
    experienceStyle: "Private wildlife-watching boat trip",
    bestFor: "Passengers who want a private boat and crew for their whale-watching trip rather than joining a shared sailing",
    cruiseSuitability: "At around three hours, this fits comfortably within most standard Ponta Delgada calls.",
    whyRecommend:
      "It suits passengers who value flexibility, photography time or simply privacy on the water more than they value the lower cost of a shared sailing.",
    planningCaveat:
      "A private booking changes who shares the boat with you, not how the ocean behaves — sightings of dolphins and whales are never guaranteed on any trip, however it is booked or marketed, so treat any claim of easy or assured sightings with caution.",
    suitabilityLabel: "Private wildlife trip",
    overview:
      "This private version of São Miguel's whale-watching trips gives you a dedicated boat and crew rather than sharing the sailing with other passengers, while searching the same rich Atlantic waters off Ponta Delgada.",
    body: [
      "The private format means the boat and crew are dedicated to your group for the duration of the trip, which can suit those wanting more flexibility over pacing, photography or simply a quieter, more personal few hours on the water.",
      "The crew searches for dolphins and whales using the same local knowledge and spotting methods as any Azorean wildlife-watching operator, scanning the waters and drawing on experience of where marine life is likely to be found.",
      "It's worth being clear-eyed about this regardless of the private format: sightings of dolphins and whales are never guaranteed. A private booking changes who you share the boat with, not how the ocean behaves on the day.",
      "At around three hours, the trip fits comfortably within most standard port calls in Ponta Delgada, leaving time either side for other plans.",
    ],
    highlights: [
      "Dedicated private boat and crew",
      "Search for dolphins and whales in Azorean Atlantic waters",
      "Flexible pacing for photography or a quieter private group",
      "Comfortable three-hour format",
    ],
    included: [
      "Private boat and crew for the duration of the trip",
      "Crew commentary and marine-life spotting",
      "Safety equipment and briefing",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Even on a private booking, dolphin and whale sightings can't be guaranteed; treat any marketing suggesting otherwise with healthy scepticism.",
      "Use the private, flexible format to discuss photography stops or pacing preferences with your skipper before setting off.",
      "Bring a wind-resistant layer, as open water typically feels cooler and breezier than the harbour.",
      "Food and drink aren't included on this tour.",
    ],
    faqs: [
      {
        question: "Does booking privately increase the chance of seeing whales or dolphins?",
        answer:
          "Not directly. A private booking means a dedicated boat and crew for your group, but it doesn't change how the ocean behaves — sightings depend on wild animals being present on the day, and can never be guaranteed.",
      },
      {
        question: "What's the benefit of a private trip over the shared catamaran or speedboat options?",
        answer:
          "You have the boat and crew's full attention, without other passengers, which can suit those wanting more flexibility over pacing or a quieter, more personal experience.",
      },
      {
        question: "How long does the private trip last?",
        answer: "Around three hours, similar in length to the shared whale-watching options.",
      },
      {
        question: "Can I request a particular pace or focus, like photography?",
        answer:
          "Since it's a private booking, it's reasonable to discuss preferences with your skipper before or during the trip, though the final decision on routing rests with the crew for safety and practical reasons.",
      },
      {
        question: "Is food or drink provided?",
        answer: "No, food and drink aren't included on this tour.",
      },
    ],
    relatedExcursionSlugs: ["whale-watching-catamaran", "private-sete-cidades"],
    supplier: {
      ...SEG_SUPPLIER,
      url: "https://www.shoreexcursionsgroup.com/tour/private-whale-watching/eudgpvtwhale",
      productId: "eudgpvtwhale",
    },
    ctaLabel: "Check Availability",
  },
];

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((excursion) => excursion.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((excursion) => excursion.slug);
}

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((excursion) => excursion.featured);
}

export function getExcursionsByCategory(category: string): ExcursionPage[] {
  return excursions.filter((excursion) => excursion.category === category);
}
