import aerialQatarLogo from "@/assets/aerial-qatar-logo.jpg";
import aerialQatarLogoAlt from "@/assets/aerial-qatar-logo-alt.jpg";
import aerialRows from "@/assets/aerial-rows.jpg";
import arrayHorizon from "@/assets/array-horizon.jpg";
import arrayFence from "@/assets/array-fence.jpg";
import arrayFenceWide from "@/assets/array-fence-wide.jpg";
import panelsDiagonal from "@/assets/panels-diagonal.jpg";
import panelsField from "@/assets/panels-field.jpg";
import panelsPerimeter from "@/assets/panels-perimeter.jpg";
import panelUnderside from "@/assets/panel-underside.jpg";
import arrayPanorama from "@/assets/array-panorama.jpg";
import bifacialRow from "@/assets/bifacial-row.jpg";
import singleRowPerspective from "@/assets/single-row-perspective.jpg";
import heroLoopV3 from "@/assets/hero-loop-v3.mp4";
import heroLoopV2 from "@/assets/hero-loop-v2.mp4";
import panelCloseupLoop from "@/assets/panel-closeup-loop.mp4";
import qatarMap from "@/assets/qatar-map.jpg";
// Client-supplied images
import client2 from "@/assets/client-2.jpg";
import client20 from "@/assets/client-20.jpg";
import client25 from "@/assets/client-25.jpg";
import client27 from "@/assets/client-27.jpg";
import client28 from "@/assets/client-28.jpg";
import client29 from "@/assets/client-29.jpg";
import client30 from "@/assets/client-30.jpg";
import client33 from "@/assets/client-33.jpg";
import client34 from "@/assets/client-34.jpg";
import client39 from "@/assets/client-39.jpg";
import client005 from "@/assets/client-005.jpg";
import client0983 from "@/assets/client-0983.jpg";
import client140230 from "@/assets/client-140230.jpg";
import client140243 from "@/assets/client-140243.jpg";

const photo = {
  aerialQatarLogo,
  aerialQatarLogoAlt,
  aerialRows,
  arrayHorizon,
  arrayFence,
  arrayFenceWide,
  panelsDiagonal,
  panelsField,
  panelsPerimeter,
  panelUnderside,
  arrayPanorama,
  bifacialRow,
  singleRowPerspective,
  // client images
  c2: client2,
  c20: client20,
  c25: client25,
  c27: client27,
  c28: client28,
  c29: client29,
  c30: client30,
  c33: client33,
  c34: client34,
  c39: client39,
  c005: client005,
  c0983: client0983,
  c140230: client140230,
  c140243: client140243,
};

export type Media =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster: string; alt: string };

export type Fact = { label: string; value: string };
export type TimelineItem = { year: string; text: string; link?: { label: string; href: string } };
export type Row = { key: string; value: string };
export type GalleryItem = { src: string; alt?: string; caption?: string };


export type Slide = {
  id: string;
  section: number;
  sectionTitle: string;
  /** Sub-slide label, when a section spans several slides */
  subTitle?: string;
  kicker?: string;
  title: string;
  lead?: string;
  body?: string[];
  bullets?: string[];
  facts?: Fact[];
  timeline?: TimelineItem[];
  rows?: Row[];
  caption?: string;
  /** Optional multi-image gallery shown in place of the single side image */
  gallery?: GalleryItem[];

  layout: "title" | "toc" | "split" | "facts" | "timeline" | "rows" | "statement" | "chapter" | "stats" | "glossary";
  media: Media;
};

export const sections = [
  "About Al-Kharsaah",
  "Al-Kharsaah at a glance",
  "Timeline",
  "Maximizing Qatar's abundance of sunlight",
  "The origins of the project",
  "Building the Al-Kharsaah Solar PV Power Plant",
  "Environmental and economic impact",
  "Empowering people and communities",
  "Partnerships that drive change",
  "Challenges and resilience",
  "Looking ahead",
  "Glossary",
];

export const slides: Slide[] = [
  {
    id: "title",
    section: 0,
    sectionTitle: "Title",
    layout: "title",
    kicker: "QatarEnergy",
    title: "Al-Kharsaah Solar PV Power Plant",
    lead: "Qatar's first large-scale solar power plant — a story of vision, partnership and lower-carbon energy.",
    media: {
      kind: "video",
      src: heroLoopV3,
      poster: photo.aerialQatarLogo,
      alt: "Aerial footage of the Al-Kharsaah solar plant",
    },
  },
  {
    id: "contents",
    section: 0,
    sectionTitle: "Contents",
    layout: "toc",
    kicker: "Report",
    title: "Contents",
    media: { kind: "image", src: photo.aerialRows, alt: "Aerial view of tracker rows stretching across the Al-Kharsaah site" },
  },

  // 1
  {
    id: "about",
    section: 1,
    sectionTitle: sections[0]!,
    layout: "split",
    kicker: "01 — About",
    title: "About Al-Kharsaah",
    lead: "This report captures the story of the Al-Kharsaah Solar PV Power Plant — a significant step in the State of Qatar's push to promote the development of renewable energy and achieve a lower-carbon future.",
    body: [
      "Developed under the leadership of QatarEnergy, in partnership with Qatar General Electricity and Water Corporation (Kahramaa), Marubeni, and TotalEnergies, the project demonstrates how vision and collaboration can transform ambition into achievement.",
      "The report follows the journey of Al-Kharsaah from concept to completion. It highlights the strategic foresight that guided its development, the engineering excellence that shaped its design, and the environmental and economic value it continues to deliver.",
      "This story addresses the partnerships, people, and innovation that made the project possible. It also reflects on the lessons and insights captured to inform future renewable energy initiatives and support continued innovation.",
    ],
    media: { kind: "image", src: photo.aerialQatarLogoAlt, alt: "The Al-Kharsaah plant seen from the air, surrounded by open desert" },
  },

  // 2
  {
    id: "at-a-glance",
    section: 2,
    sectionTitle: sections[1]!,
    layout: "stats",
    kicker: "02 — At a glance",
    title: "Al-Kharsaah at a glance",
    facts: [
      { label: "Name", value: "Al-Kharsaah Solar PV Power Plant" },
      { label: "Location", value: "Al-Kharsaah, Qatar" },
      { label: "Capacity", value: "800 megawatts (MW)" },
      { label: "Technology", value: "Photovoltaic (PV) solar panels with tracking systems" },
      {
        label: "Inaugurated",
        value:
          "18 October 2022 by His Highness Sheikh Tamim bin Hamad Al Thani, the Amir of the State of Qatar",
      },
      { label: "Operational since", value: "March 2023" },
      {
        label: "Developed by",
        value: "QatarEnergy in partnership with our shareholders, Marubeni and TotalEnergies",
      },
      {
        label: "Significance",
        value:
          "Qatar's first large-scale solar power plant and a significant step towards its renewables target of 4,000 MW by 2030",
      },
      {
        label: "Contribution",
        value:
          "Supplies renewable electricity to Qatar's national grid, avoiding hundreds of thousands of metric tons of CO₂ emissions annually",
      },
    ],
    media: { kind: "image", src: photo.c2, alt: "Aerial overview of Al-Kharsaah solar panels" },
  },

  // 3
  {
    id: "timeline",
    section: 3,
    sectionTitle: sections[2]!,
    layout: "timeline",
    kicker: "03 — Timeline",
    title: "From memorandum to megawatts",
    timeline: [
      {
        year: "2015",
        text: "QatarEnergy (formerly known as Qatar Petroleum) and Nebras Energy (formerly known as Qatar Electricity and Water Company) sign a memorandum of understanding (MoU) to explore solar power generation, establishing the framework for Qatar's first dedicated solar joint venture.",
      },
      {
        year: "2016",
        text: "The Supreme Council for Economic Affairs and Investment of the State of Qatar approves the creation of a solar joint venture, marking Qatar's formal entry into solar development.",
      },
      {
        year: "2016",
        text: "His Highness Sheikh Tamim bin Hamad Al Thani, the Amir of the State of Qatar, announces plans for a solar power project starting at 200 MW, later expanded to 500 MW.",
      },
      {
        year: "2020",
        text: "A company responsible for developing and operating the plant is established.",
      },
      {
        year: "2020",
        text: "The engineering, procurement, and construction (EPC) contract is finalized and financial arrangements are completed, launching full-scale implementation.",
      },
      {
        year: "2022",
        text: "October 18 — the plant is energized and begins supplying Qatar's first large-scale solar power to the national grid, initially delivering 400 MW before reaching its full generation milestone of 800 MW.",
      },
      {
        year: "2022",
        text: "October 25 — His Highness Sheikh Tamim bin Hamad Al Thani highlights Al-Kharsaah during the opening of the 51st session of the Shura Council, noting that the project covers 10% of Qatar's electricity consumption.",
        link: {
          label: "HH The Amir Inaugurates Shura Council's Ordinary Session",
          href: "https://www.youtube.com/results?search_query=HH+The+Amir+Inaugurates+Shura+Council%27s+Ordinary+Session",
        },
      },
      {
        year: "2023",
        text: "Completion of the facility establishes Al-Kharsaah as Qatar's first solar power plant and among the largest solar power plants in the region.",
      },
    ],
    media: { kind: "image", src: photo.panelsPerimeter, alt: "Panel rows along the site boundary road" },
  },

  // 4
  {
    id: "sunlight",
    section: 4,
    sectionTitle: sections[3]!,
    layout: "split",
    kicker: "04 — National vision",
    title: "Maximizing Qatar's abundance of sunlight",
    lead: "Benefiting from Qatar's abundant sunlight and commitment to sustainability, the Al-Kharsaah Solar PV Power Plant marks a significant step in the ongoing efforts to develop and maximize the country's natural resources.",
    body: [
      "For decades Qatar has driven progress across the world through its leadership in natural gas, a lower-carbon fuel. Guided by the Qatar National Vision 2030, the country set out to diversify its energy mix and develop renewable power capacity.",
      "The Al-Kharsaah Solar PV Power Plant emerged as a milestone on that journey: Qatar's first large-scale solar power project and a significant step towards achieving its target of 4,000 MW of renewable capacity by 2030. The project also reflects Qatar's broader philosophy that sustainable development is not a choice between growth and conservation, but a balance of both.",
      "In every respect, Al-Kharsaah is a symbol of how vision, partnership, and innovation can converge.",
    ],
    caption: "Location of the Al-Kharsaah Solar PV Power Plant within the State of Qatar",
    media: { kind: "image", src: qatarMap, alt: "Map of Qatar showing the plant location" },
  },

  // 5
  {
    id: "origins",
    section: 5,
    sectionTitle: sections[4]!,
    layout: "split",
    kicker: "05 — Origins",
    title: "The origins of the project",
    lead: "In 2015, QatarEnergy (formerly known as Qatar Petroleum) and Nebras Energy (formerly known as Qatar Electricity and Water Company) signed an agreement to investigate solar power generation.",
    body: [
      "The following year, the Supreme Council for Economic Affairs and Investment endorsed a joint initiative between QatarEnergy and Nebras Energy to advance large-scale solar power generation, marking a strategic step toward harnessing Qatar's abundant sunlight as a reliable and sustainable source of energy.",
      "From this, QatarEnergy emerged as a driving force, partnering with Marubeni Corporation of Japan and TotalEnergies of France to develop and operate Qatar's first solar power plant.",
      "The vision began to take physical form by 2020. Following years of detailed planning and engineering, the EPC contracts were signed and construction commenced, marking a major step towards realization of the project.",
      "In 2022, Al-Kharsaah delivered its first flow of electricity to the national grid. Within months, it reached full operational capacity, providing enough electricity to meet up to 10% of Qatar's peak energy demand and power hundreds of thousands of homes, while reducing carbon emissions by an estimated 26 million metric tons over its lifetime.",
      "Al-Kharsaah generates up to 800 megawatts-peak (MWp) DC, equivalent to 700 megawatts (MW) AC, supplying approximately 2,000 gigawatt-hours (GWh) of clean electricity to the national grid each year.",
    ],
    media: { kind: "image", src: photo.c140243, alt: "Al-Kharsaah site landscape" },
  },

  // 6 — sub-slides
  {
    id: "chapter-building",
    section: 6,
    sectionTitle: sections[5]!,
    layout: "chapter",
    title: sections[5]!,
    kicker: "06",
    lead: "How 1.8 million panels were designed, built, and connected to power Qatar.",
    media: { kind: "image", src: photo.c28, alt: "Solar panels at Al-Kharsaah" },
  },
  {
    id: "build-performance",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "Designed for performance",
    layout: "split",
    kicker: "06.1 — Building the plant",
    title: "Designed for performance",
    lead: "Located approximately 80 kilometers west of Doha and covering approximately 10 square kilometers, Al-Kharsaah is one of the largest solar power plants in the Middle East. It is powered by more than 1.8 million photovoltaic (PV) panels.",
    body: [
      "The panels are dual-sided, generating power from both sides by capturing direct sunlight and light reflected from the ground. This approach increases efficiency and maintains steady energy output, even in Qatar's challenging desert environment.",
      "Each panel is mounted on a solar tracking system that follows the sun's movement throughout the day. By adjusting the tilt of the panels, the system maximizes exposure to sunlight and enhances total energy generation, as compared to fixed installations.",
      "These PV modules have an average conversion efficiency of 20%, while the tracking systems increase annual generation by approximately 15% to 20% compared to fixed-tilt systems.",
    ],
    gallery: [
      { src: photo.singleRowPerspective, alt: "Long tracker row angled toward the sun", caption: "Effect of tilt on solar energy capture" },
      { src: photo.panelsDiagonal, alt: "Tracker structures carrying long rows of panels", caption: "Benefit of using a tracking system" },
      { src: photo.arrayHorizon, alt: "Tracker rows following the sun across the site", caption: "Single-axis trackers across the solar field" },
      { src: photo.panelsField, alt: "Panel field reaching the desert horizon", caption: "More than 1.8 million bifacial PV panels" },
    ],
    caption: "Effect of tilt on solar energy capture · Benefit of using a tracking system",
    media: { kind: "image", src: photo.c30, alt: "Solar tracker rows at Al-Kharsaah" },
  },
  {
    id: "build-cells",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "Selection of solar cells",
    layout: "split",
    kicker: "06.2 — Building the plant",
    title: "Selection of solar cells",
    lead: "During the design stage, several PV cell technologies were evaluated to identify the optimal balance between efficiency, cost, and suitability for Qatar's desert conditions.",
    body: [
      "PV cells are broadly classified into crystalline and thin-film types. After extensive evaluation, the project adopted bifacial mono-c-Si modules.",
      "The PV modules were also selected for their resistance to high temperatures and sand accumulation, making them ideally suited for Qatar's environment. While performance naturally degrades over time, the modules were specified for low degradation rates to ensure stable output and long-term reliability.",
    ],
    bullets: [
      "Increased efficiency, capturing sunlight on both sides of the panel",
      "Reduced land footprint, maximizing energy yield per square meter",
      "Superior performance under diffuse or low-light conditions",
    ],
    gallery: [
      { src: photo.panelUnderside, alt: "Close-up of the mounting structure beneath a panel row", caption: "Ideematec bifacial tracker layout and specifications" },
      { src: photo.bifacialRow, alt: "Bifacial panels raised on their steel mounting structure", caption: "Bifacial mono-c-Si modules capture reflected light" },
      { src: photo.panelsPerimeter, alt: "Panel rows along the site boundary road", caption: "Module rows engineered for heat and sand resistance" },
    ],
    caption: "Ideematec bifacial tracker layout and specifications",
    media: { kind: "image", src: photo.panelUnderside, alt: "Close-up of the mounting structure beneath a panel row" },
  },
  {
    id: "build-feasibility",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "Feasibility and site studies",
    layout: "split",
    kicker: "06.3 — Building the plant",
    title: "Feasibility and site studies",
    lead: "Before construction began, extensive feasibility studies were undertaken to confirm that Al-Kharsaah was the best available location for Qatar's first large-scale solar power plant.",
    bullets: [
      "Site selection: analyzing topography, soil composition, and proximity to the national electrical grid to optimize performance and minimize environmental disruption",
      "Economic viability: assessing investment requirements, operational costs, and power purchase economics to confirm feasibility and long-term value creation",
      "Solar resource assessment: evaluating long-term irradiation levels and meteorological data to ensure consistent energy generation potential",
    ],
    body: [
      "The results confirmed that Al-Kharsaah offered both the technical and environmental conditions necessary for a high-performing, large-scale solar facility.",
      "Social considerations were a key part of the site studies, including the presence of nearby communities, schools, and local facilities. The assessments reviewed how people use the surrounding area day to day — school travel routes, access roads, and nearby services — to ensure safety and minimal disruption, supporting responsible, long-term development around Al-Kharsaah.",
    ],
    media: { kind: "image", src: qatarMap, alt: "Site location study map" },
  },
  {
    id: "build-precision",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "Built with precision",
    layout: "split",
    kicker: "06.4 — Building the plant",
    title: "Built with precision",
    lead: "The plant is divided into two identical phases, each made up of multiple 'AC blocks' containing inverters and transformers that convert the electricity produced by the solar panels into a form suitable for the power grid.",
    body: [
      "These inverters ensure that the power supplied to Qatar's national grid matches its required voltage and frequency, maintaining a stable and reliable supply of electricity.",
      "The PV modules are arranged throughout the site to maximize solar gain. Approximately 3,240 inverters are distributed across the two phases to convert electricity from DC to AC for efficient grid connection.",
      "At the peak of construction, more than 800 engineers, technicians, and specialists worked on-site, supported by digital project management systems that optimized scheduling, logistics, and safety.",
      "Despite global supply chain disruption at the time, the project stayed on track through collaboration, adaptability, and effective planning — ensuring timely delivery without compromising quality.",
    ],
    gallery: [
      { src: photo.arrayPanorama, alt: "Elevated panorama over the aligned tracker rows", caption: "Project site layout and phase plan" },
      { src: photo.aerialRows, alt: "Aerial view of tracker rows stretching across the site", caption: "Two identical phases of AC blocks" },
      { src: photo.arrayFenceWide, alt: "Wide view of the plant behind its perimeter fence", caption: "Approximately 3,240 inverters across both phases" },
    ],
    caption: "Project site layout and phase plan",
    media: { kind: "image", src: photo.c20, alt: "Aligned tracker rows across the site" },
  },
  {
    id: "build-resource",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "A model of resource efficiency",
    layout: "split",
    kicker: "06.5 — Building the plant",
    title: "A model of resource efficiency",
    lead: "From concept to operation, Al-Kharsaah was designed for high performance and low environmental impact — guided by resource efficiency, circularity, and long-term sustainability.",
    bullets: [
      "No fuel combustion is involved in energy generation, resulting in zero direct emissions of CO₂, NO₂, SO₂, or particulates",
      "Recyclable materials, including aluminium and glass, were prioritized in the design of PV modules and support structures",
      "The system layout enables future technology upgrades and supports the eventual reuse or recycling of solar components at end of life",
      "Electrical and control systems meet IEC and ISO sustainability standards, ensuring durability and safety in Qatar's desert environment",
    ],
    media: { kind: "image", src: photo.c25, alt: "Panel field at Al-Kharsaah" },
  },
  {
    id: "build-components",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "Main project components",
    layout: "rows",
    kicker: "06.6 — Building the plant",
    title: "Main project components",
    rows: [
      {
        key: "PV modules",
        value: "More than 1.8 million PV panels capture sunlight and convert it into electricity",
      },
      { key: "Inverters", value: "Convert DC from the panels into AC for the national grid" },
      {
        key: "Trackers",
        value: "Solar tracking systems follow the sun's movement throughout the day",
      },
      {
        key: "Electrical systems",
        value: "Wiring, grounding, and lightning protection for safe, reliable operation",
      },
      {
        key: "Substations",
        value: "Manage power distribution and grid connection across both phases",
      },
      {
        key: "Control and administration buildings",
        value: "Centralized control room, offices, and support facilities",
      },
      {
        key: "Maintenance and storage",
        value: "On-site buildings for servicing, spare parts, and technical support",
      },
      {
        key: "Access roads and drainage",
        value: "Ensure site accessibility and water management",
      },
      {
        key: "Perimeter and security",
        value: "Fencing, lighting, and surveillance infrastructure for site safety",
      },
      {
        key: "Module cleaning system",
        value: "Automated cleaning that minimizes water use and maintains performance",
      },
    ],
    gallery: [
      { src: photo.bifacialRow, alt: "Bifacial panels raised on their steel mounting structure", caption: "Facility and grid substations" },
      { src: photo.panelsPerimeter, alt: "Perimeter and security infrastructure", caption: "Perimeter, lighting and security infrastructure" },
      { src: photo.aerialQatarLogoAlt, alt: "Aerial view of the plant", caption: "Access roads and drainage across the 10 km² site" },
    ],
    caption: "Facility and grid substations",
    media: { kind: "image", src: photo.c28, alt: "Solar panel array at Al-Kharsaah" },
  },
  {
    id: "build-life",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "Extended operational life",
    layout: "split",
    kicker: "06.7 — Building the plant",
    title: "Extended operational life",
    lead: "The plant was engineered for a minimum lifespan of 30 years.",
    body: [
      "Its structural and electrical systems were designed to withstand Qatar's desert environment — high temperatures, dust, and wind exposure — while maintaining stable power generation efficiency.",
      "Civil works were designed for a minimum lifespan of at least 30 years, ensuring that during this period no major structural repairs would be required due to wear, fatigue, or material distress.",
      "Advanced materials and construction techniques were used to enhance durability, reduce maintenance needs, and optimize long-term asset integrity.",
    ],
    media: { kind: "image", src: photo.panelsDiagonal, alt: "Tracker structures carrying long rows of panels" },
  },
  {
    id: "build-access",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "Access and transportation planning",
    layout: "split",
    kicker: "06.8 — Building the plant",
    title: "Access and transportation planning",
    lead: "The Al-Kharsaah site required careful planning to ensure efficient and secure access for large-scale construction activities.",
    body: [
      "The nearest asphalt road, Umm Bab Road, lies roughly one kilometer from the site's southwestern boundary, while the recently constructed Dukhan Road provides a major route for transporting materials and equipment.",
      "QatarEnergy conducted detailed surveys of the surrounding access roads to assess their capacity and condition, developing a comprehensive transport and logistics plan that addressed weight restrictions, turning radii, and timing constraints. In coordination with local authorities, the team obtained all necessary transport permits for oversized equipment.",
      "Within the site, QatarEnergy designed and constructed a network of internal roads engineered to handle frequent vehicle movements while minimizing dust and soil erosion — essential for maintaining PV panel performance and long-term accessibility.",
    ],
    media: { kind: "image", src: photo.c29, alt: "Access road through the solar field" },
  },
  {
    id: "build-waste",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "Construction phase waste management",
    layout: "split",
    kicker: "06.9 — Building the plant",
    title: "Construction phase waste management",
    lead: "QatarEnergy implemented disciplined materials management practices to minimize waste generation and reduce the project's environmental footprint.",
    body: [
      "Primary waste streams, including concrete debris and excavated materials, were managed to maximize on-site reuse and minimize off-site disposal.",
      "Additional waste included packaging materials from photovoltaic equipment, food and organic waste from workforce facilities, reusable materials such as earth fill and PVC piping, non-recyclable waste including contaminated soil and damaged materials, sanitary waste, and limited quantities of hazardous waste such as paint residues and solvent containers.",
      "All construction-related waste was managed in accordance with the Construction Environmental Management Plan (CEMP), implemented by the EPC Contractor, defining clear accountabilities for segregation, storage, recycling, and disposal in full compliance with Qatari regulations.",
    ],
    media: { kind: "image", src: photo.c33, alt: "Site infrastructure at Al-Kharsaah" },
  },
  {
    id: "build-om",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "Operations and maintenance concept",
    layout: "split",
    kicker: "06.10 — Building the plant",
    title: "Operations and maintenance concept",
    lead: "The O&M concept was developed to ensure long-term operational reliability, safety, and environmental performance under Qatar's climatic conditions. The facility operates without combustion, generating electricity without greenhouse gas emissions or air pollutants.",
    bullets: [
      "Automated robotic panel cleaning systems designed to minimize water consumption",
      "Electrical and mechanical systems engineered to withstand high ambient temperatures",
      "Dust and sand mitigation measures integrated into plant layout and maintenance regimes",
      "Comprehensive fire protection, drainage, wastewater management, and corrosion protection systems",
    ],
    caption: "Example of robotic cleaning system",
    media: { kind: "image", src: photo.arrayFence, alt: "Panel rows viewed over the site fence" },
  },
  {
    id: "build-hazop",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "Hazard and operability study",
    layout: "statement",
    kicker: "06.11 — Building the plant",
    title: "Hazard and operability study",
    lead: "A comprehensive HAZOP study was conducted during project execution to confirm the safety and operability of the facility, facilitated by an independent third-party specialist in accordance with IEC 61882.",
    body: [
      "The assessment verified that potential hazards and operational risks associated with construction, operation, and maintenance were systematically identified and mitigated.",
      "Residual risks, where applicable, were addressed through additional engineering controls and incorporated into the operation and maintenance manuals and project procedures.",
    ],
    media: { kind: "image", src: photo.c34, alt: "Panel mounting structures" },
  },
  {
    id: "build-operational-waste",
    section: 6,
    sectionTitle: sections[5]!,
    subTitle: "Operational phase impacts and waste",
    layout: "split",
    kicker: "06.12 — Building the plant",
    title: "Operational phase impacts and waste management",
    lead: "Panel cleaning is undertaken using fully automated robotic systems that operate without potable water or chemical agents.",
    body: [
      "Four 'SunPower GB6' cleaning systems, comprising 24 autonomous robots operated by trained technicians, enable the full solar field to be cleaned in less than four days. Average water consumption is maintained below 0.1 liters per kilowatt-hour generated — a reduction of more than 90 percent compared to conventional cleaning methods.",
      "Operational wastewater generation is minimal. Where practicable, wastewater is treated and reused for non-potable applications. Stormwater and drainage systems were designed in accordance with Kahramaa and Ministry of Municipality and Environment requirements, with effluent quality meeting Qatari regulations and IFC guidelines.",
      "Waste generation during operations is inherently low and largely limited to domestic waste and small quantities of maintenance-related materials. PV module disposal during routine operations is negligible due to an expected operational lifespan exceeding 30 years.",
      "An operational phase waste inventory defines management pathways following the hierarchy of reduction, reuse, and recycling, with residual waste disposed of through licensed facilities.",
    ],
    caption:
      "Preliminary envisaged drainage patterns · Impact of module tables on ground permeability",
    media: { kind: "image", src: photo.c39, alt: "Solar panels across the desert field" },
  },

  // 7
  {
    id: "chapter-impact",
    section: 7,
    sectionTitle: sections[6]!,
    layout: "chapter",
    title: sections[6]!,
    kicker: "07",
    lead: "Measurable progress on climate, ecology, and Qatar's long-term economic resilience.",
    media: { kind: "image", src: photo.c005, alt: "Desert landscape at Al-Kharsaah" },
  },
  {
    id: "impact-ecology",
    section: 7,
    sectionTitle: sections[6]!,
    subTitle: "Protecting the desert ecosystem",
    layout: "split",
    kicker: "07.1 — Impact",
    title: "Environmental and economic impact",
    lead: "Throughout construction and operation, specific measures were implemented to protect the native desert ecosystem and minimize environmental disturbance.",
    body: [
      "Comprehensive ecological surveys were undertaken as part of the Environmental and Social Impact Assessment (ESIA) to establish baseline biodiversity conditions, focusing on sensitive habitats and regionally significant species including the spiny-tailed lizard (Uromastyx aegyptia microlepis), native trees, and shrubland vegetation.",
      "Project layout, access roads, and construction activities were optimized to avoid wildlife corridors, vegetation clusters, and known nesting or breeding areas. Relocation plans were developed for small desert fauna where unavoidable interactions occurred.",
      "Natural buffer zones were established around site boundaries, allowing native vegetation to regenerate and providing safe passage for resident and migratory species.",
      "By increasing the share of renewable energy in the national power mix, the plant is expected to avoid approximately 26 million metric tons of CO₂ emissions over a 25-year period, calculated in line with QatarEnergy's carbon accounting methodology and GHG Protocol Scope 2 emission factors.",
    ],
    media: { kind: "image", src: photo.arrayHorizon, alt: "Desert landscape surrounding the solar field" },
  },
  {
    id: "impact-baseline",
    section: 7,
    sectionTitle: sections[6]!,
    subTitle: "Baseline data collection",
    layout: "split",
    kicker: "07.2 — Impact",
    title: "Baseline data collection",
    bullets: [
      "Spiny-tailed lizard survey: a trained ecologist identified occupied burrows within and up to 50 meters beyond the project boundary, helping estimate the potential population affected by construction",
      "Flora and fauna mapping: using handheld GPS devices, the team recorded rare or notable species and documented sightings, burrows, and traces through photographs and field notes",
      "Tree and habitat survey: all trees within the project footprint were mapped and assessed to guide site layout and minimize vegetation disturbance",
    ],
    body: [
      "Findings informed the project's environmental management approach, ensuring construction zones avoided key habitats wherever possible, with mitigation measures to protect native wildlife and preserve Qatar's natural desert ecology.",
    ],
    caption: "Potential spiny-tailed lizard burrows observed on site",
    media: { kind: "image", src: photo.c005, alt: "Desert landscape surrounding the solar field" },
  },
  {
    id: "impact-heritage",
    section: 7,
    sectionTitle: sections[6]!,
    subTitle: "Archaeology and cultural heritage",
    layout: "statement",
    kicker: "07.3 — Impact",
    title: "Archaeology and cultural heritage",
    lead: "William Sale Partnership Ltd. (WSP) worked alongside Qatar Museums to evaluate potential heritage sensitivities within the Al-Kharsaah project area.",
    body: [
      "Following consultations and land-use approvals from municipal authorities, it was confirmed that no archaeological sites were present within the designated boundaries.",
      "To ensure continued diligence, a 'watching brief and chance finds' procedure was incorporated into the Construction Environmental Management Plan (CEMP) under the ESIA framework — ensuring any unexpected discoveries would be documented and managed responsibly, in line with Qatar's national heritage protection standards.",
    ],
    media: { kind: "image", src: photo.c0983, alt: "Qatari desert around the Al-Kharsaah plant" },
  },
  {
    id: "impact-economic",
    section: 7,
    sectionTitle: sections[6]!,
    subTitle: "Economic growth and local value",
    layout: "split",
    kicker: "07.4 — Impact",
    title: "Driving economic growth and local value",
    lead: "Through QatarEnergy, the project continues to strengthen Qatar's capability in solar operations and maintenance.",
    body: [
      "Local technicians receive training in advanced monitoring systems, performance analysis, and predictive maintenance — essential skills underpinning the next generation of solar projects across Ras Laffan Industrial City, Mesaieed Industrial City, and the Dukhan Concession Area.",
      "Al-Kharsaah brings together all three of QatarEnergy's sustainability pillars:",
    ],
    bullets: [
      "Climate change and environmental action: significant reduction of greenhouse gas emissions, a minimal land and water footprint, and efficient lifecycle design",
      "Operational responsibility: safe, reliable, and efficient plant operations, underpinned by strong asset integrity, performance monitoring, and international standards",
      "Social and economic development: local employment, technical skills, innovation, and long-term knowledge transfer supporting national capacity building",
    ],
    media: { kind: "image", src: photo.c140230, alt: "Aerial view of the Al-Kharsaah plant" },
  },

  // 8
  {
    id: "chapter-people",
    section: 8,
    sectionTitle: sections[7]!,
    layout: "chapter",
    title: sections[7]!,
    kicker: "08",
    lead: "Over 800 professionals. 25 nationalities. One shared mission.",
    media: { kind: "image", src: photo.aerialQatarLogo, alt: "Aerial view of Al-Kharsaah" },
  },
  {
    id: "people-capability",
    section: 8,
    sectionTitle: sections[7]!,
    subTitle: "Building national capability",
    layout: "split",
    kicker: "08.1 — People",
    title: "Empowering people and communities",
    lead: "The Al-Kharsaah Solar PV Power Plant is also a story of people: the engineers, technicians, and local partners who turned a national vision into reality.",
    body: [
      "More than 800 professionals contributed to the plant's construction, representing over 25 nationalities and a wide range of technical disciplines. Qatari engineers and graduates played an integral role across project management, environmental compliance, and quality assurance. The project supported over 20 local subcontractors and suppliers.",
      "Specialized training programs upskilled local technicians in solar operations, maintenance planning, and performance optimization, introducing digital twin technology, real-time energy monitoring, and predictive maintenance analytics.",
      "The project also collaborated with local academic and research institutions to share technical knowledge and align future curricula with renewable energy competencies.",
    ],
    media: { kind: "image", src: photo.arrayFenceWide, alt: "Wide view of the Al-Kharsaah plant" },
  },
  {
    id: "people-indicators",
    section: 8,
    sectionTitle: sections[7]!,
    subTitle: "People and community development",
    layout: "rows",
    kicker: "08.2 — People",
    title: "People and community development",
    rows: [
      { key: "Jobs created during construction", value: "Over 800 professionals employed" },
      { key: "Local contractors engaged", value: "20+ Qatari subcontractors and suppliers" },
      {
        key: "Training hours delivered",
        value: "More than 25,000 hours of technical and safety training",
      },
      { key: "Qatari workforce participation", value: "Qatari engineers active in key roles" },
      { key: "Safety performance", value: "Over 500,000 safe work-hours, zero lost-time incidents" },
      { key: "HSE standards applied", value: "ISO 45001 and ISO 14001 compliance" },
      { key: "Academic collaboration", value: "Partnerships with local universities and research bodies" },
      {
        key: "Digital tools introduced",
        value: "Digital twin systems, real-time monitoring, predictive maintenance analytics",
      },
    ],
    caption: "Values are approximate and based on project data and internal reporting.",
    media: { kind: "image", src: photo.c27, alt: "Solar panels at Al-Kharsaah" },
  },
  {
    id: "people-hse",
    section: 8,
    sectionTitle: sections[7]!,
    subTitle: "Health, safety, and wellbeing",
    layout: "split",
    kicker: "08.3 — People",
    title: "Commitment to health, safety, and wellbeing",
    lead: "Ensuring the health and safety of everyone involved was a central principle throughout construction and commissioning.",
    body: [
      "A comprehensive health, safety, and environment (HSE) management plan was implemented, consistent with ISO 45001 and ISO 14001 standards. Strict protocols governed site access, equipment handling, and high-voltage electrical work.",
      "More than 500,000 safe work-hours were recorded during peak construction periods without a lost-time incident. Regular training sessions and safety drills were conducted for all site personnel, supported by digital permit-to-work systems and real-time safety monitoring technologies.",
      "The project's safety performance set a benchmark for large-scale solar developments in Qatar, demonstrating that operational excellence and safety leadership go hand in hand.",
    ],
    media: { kind: "video", src: panelCloseupLoop, poster: photo.bifacialRow, alt: "Solar panel close-up footage" },
  },
  {
    id: "people-community",
    section: 8,
    sectionTitle: sections[7]!,
    subTitle: "Community and environmental integration",
    layout: "split",
    kicker: "08.4 — People",
    title: "Community and environmental integration",
    lead: "While the project site lies in a relatively remote area, the development team worked to ensure that Al-Kharsaah contributed positively to nearby communities.",
    body: [
      "Local contractors and service providers were engaged for civil works, transport, and logistics, supporting regional economic activity.",
      "The project supported local awareness programs focused on sustainability, energy efficiency, and environmental protection, strengthening community understanding of renewable energy and its role in Qatar's long-term prosperity.",
      "Environmental monitoring continued beyond construction. Regular biodiversity assessments, soil surveys, and air quality checks ensure the surrounding ecosystem remains protected, and wildlife corridors established during design are maintained throughout operations.",
    ],
    media: { kind: "image", src: photo.arrayHorizon, alt: "Desert landscape surrounding the solar field" },
  },

  // 9
  {
    id: "chapter-partners",
    section: 9,
    sectionTitle: sections[8]!,
    layout: "chapter",
    title: sections[8]!,
    kicker: "09",
    lead: "QatarEnergy, Marubeni, TotalEnergies and Kahramaa — a partnership built on shared ambition.",
    media: { kind: "image", src: photo.aerialRows, alt: "Aerial view of Al-Kharsaah tracker rows" },
  },
  {
    id: "partners-collab",
    section: 9,
    sectionTitle: sections[8]!,
    subTitle: "Collaboration in action",
    layout: "split",
    kicker: "09.1 — Partnerships",
    title: "Partnerships that drive change",
    lead: "The partnership model extended beyond ownership and governance. It was the foundation for day-to-day collaboration throughout design, construction, and commissioning.",
    bullets: [
      "QatarEnergy provided leadership, strategic oversight, and alignment with the nation's energy-mix goals",
      "Kahramaa ensured grid connectivity and operational integration within Qatar's power system",
      "Marubeni Corporation and TotalEnergies brought international experience in utility-scale solar projects, supporting engineering, procurement, and operational excellence",
    ],
    body: [
      "Together these partners created a dynamic framework that allowed adaptation to Qatar's specific environmental and technical conditions, while ensuring the project met international standards for performance, safety, and sustainability.",
    ],
    media: { kind: "image", src: photo.aerialRows, alt: "Aerial panorama of the Al-Kharsaah plant" },
  },
  {
    id: "partners-ppa",
    section: 9,
    sectionTitle: sections[8]!,
    subTitle: "The power purchase agreement",
    layout: "statement",
    kicker: "09.2 — Partnerships",
    title: "The power purchase agreement with Kahramaa",
    lead: "January 2020 saw the signing of a power purchase agreement (PPA) for Kahramaa to buy up to 800 MW of electricity — 10% of peak demand — from the project.",
    body: [
      "The agreement incorporates a build, own, operate, and transfer (BOOT) model and has a term of 25 years, after which ownership will be transferred to Kahramaa.",
      "This arrangement guarantees a stable supply of renewable electricity to the national grid, while ensuring reliability and long-term value for Qatar.",
    ],
    media: { kind: "image", src: photo.aerialQatarLogoAlt, alt: "The plant seen from the air with the QATAR wordmark" },
  },
  {
    id: "partners-innovation",
    section: 9,
    sectionTitle: sections[8]!,
    subTitle: "Innovation and knowledge sharing",
    layout: "split",
    kicker: "09.3 — Partnerships",
    title: "Innovation and knowledge sharing",
    lead: "Innovation lies at the heart of Al-Kharsaah's success.",
    body: [
      "The project incorporated smart control systems and data-driven operational platforms that monitor energy production, panel efficiency, and equipment status in real time. These technologies improve operational reliability and serve as valuable learning tools for Qatar's next generation of engineers and technicians.",
      "By sharing lessons learned with upcoming solar projects, QatarEnergy continues to build a framework of best practices in design, environmental management, and stakeholder collaboration — transforming knowledge into a lasting national asset.",
    ],
    media: { kind: "image", src: photo.panelsField, alt: "Panels tracking the sun across the field" },
  },

  // 10
  {
    id: "challenges",
    section: 10,
    sectionTitle: sections[9]!,
    layout: "split",
    kicker: "10 — Resilience",
    title: "Challenges and resilience",
    lead: "Delivering one of the region's largest solar power plants was an exciting challenge.",
    body: [
      "Constructing a 10-km² facility with over 1.8 million PV modules required precise site leveling, robust foundations, and careful control of dust and soil erosion. Engineering complexity increased with single-axis trackers and more than 3,200 inverters, all synchronized for optimal output and grid compatibility. Equipment was rigorously tested to perform reliably in extreme desert conditions exceeding 50°C.",
      "Environmental and climatic challenges were addressed through innovation: automated, water-efficient robotic cleaning systems mitigated dust accumulation, while performance-driven cleaning schedules maximized efficiency. Ecological protection measures ensured compliance with QatarEnergy's environmental management system and national regulations.",
      "Global supply chain disruptions added complexity. The team coordinated multiple international suppliers through digital tracking systems and phased deliveries, maintaining the commissioning timeline despite pandemic-related delays.",
      "Integrating 800 MW into Qatar's national grid required close coordination with Kahramaa. Advanced inverters, supervisory control and data acquisition systems, and extensive grid stability testing ensured safe synchronization and reliable performance.",
    ],
    media: { kind: "video", src: heroLoopV2, poster: photo.singleRowPerspective, alt: "Aerial footage of the Al-Kharsaah plant" },
  },

  // 11
  {
    id: "chapter-ahead",
    section: 11,
    sectionTitle: sections[10]!,
    layout: "chapter",
    title: sections[10]!,
    kicker: "11",
    lead: "From 800 MW to 4,000 MW — the road to Qatar's renewable future.",
    media: { kind: "image", src: photo.c140230, alt: "Aerial view of the Al-Kharsaah plant" },
  },
  {
    id: "ahead-next",
    section: 11,
    sectionTitle: sections[10]!,
    subTitle: "The next phases",
    layout: "split",
    kicker: "11.1 — Looking ahead",
    title: "The next phases of Qatar's solar expansion",
    lead: "Al-Kharsaah represented the starting point of Qatar's large-scale solar development, establishing a solid foundation for continued expansion of reliable, efficient, and renewable power infrastructure.",
    bullets: [
      "Ras Laffan Industrial City Solar PV Power Plant: inaugurated in April 2025 with the capacity to generate 458 MW",
      "Mesaieed Industrial City Solar PV Power Plant: also inaugurated in April 2025, with a potential output of 417 MW",
      "Dukhan Concession Area Solar PV Power Plant: announced September 2025, with 2,000 MW by mid-2029 — taking Qatar to the QNV 2030 target of 4,000 MW, around 30% of peak demand",
    ],
    media: { kind: "image", src: photo.arrayHorizon, alt: "Sunlit panels stretching to the horizon" },
  },
  {
    id: "ahead-innovation",
    section: 11,
    sectionTitle: sections[10]!,
    subTitle: "Taking forward innovations",
    layout: "split",
    kicker: "11.2 — Looking ahead",
    title: "Taking forward innovations",
    lead: "The lessons learned from Al-Kharsaah are already informing future design and operational models.",
    body: [
      "Advanced simulation tools, artificial intelligence (AI), and digital twin technology will enhance predictive maintenance and improve efficiency across all upcoming solar assets.",
      "Future projects will emphasize hybridization, integrating Battery Energy Storage Systems (BESS), smart grid management, and data-driven optimization to ensure stable power delivery under variable solar conditions.",
      "In line with QatarEnergy's climate change framework, new facilities will employ carbon-neutral construction practices, expanded local content participation, and enhanced recycling and waste management frameworks.",
    ],
    media: { kind: "image", src: photo.panelsDiagonal, alt: "Tracker structures with rows of panels" },
  },
  {
    id: "ahead-legacy",
    section: 11,
    sectionTitle: sections[10]!,
    subTitle: "A legacy of light",
    layout: "statement",
    kicker: "11.3 — Looking ahead",
    title: "A legacy of light",
    lead: "The ambition is clear: to establish Qatar, by 2030, as a regional hub for renewable expertise — exporting not only energy, but also knowledge and capability.",
    body: [
      "Through partnerships with global technology leaders and local universities, QatarEnergy Renewable Solutions aims to create a knowledge-driven clean energy sector, fostering innovation in solar technology, grid optimization, and environmental management.",
      "The Al-Kharsaah Solar PV Power Plant demonstrates how long-term planning, coordination, and commitment can deliver meaningful results. It reflects Qatar's practical approach to sustainability and its responsibility to meet the country's growing energy needs.",
    ],
    media: { kind: "image", src: photo.aerialQatarLogo, alt: "Aerial view of Qatar's first large-scale solar plant" },
  },

  {
    id: "glossary",
    section: 12,
    sectionTitle: sections[11]!,
    layout: "glossary",
    title: "Glossary",
    kicker: "12 — GLOSSARY",
    media: { kind: "image", src: photo.bifacialRow, alt: "Al-Kharsaah solar panel array" },
    rows: [
      { key: "AC (Alternating current)", value: "The form of electrical current used by the national grid, produced after conversion from direct current generated by solar panels." },
      { key: "AC block", value: "A functional unit within the solar power plant comprising inverters, transformers, and associated equipment used to convert and transmit electricity to the grid." },
      { key: "Battery energy storage system (BESS)", value: "A system used to store electricity generated from renewable sources for later use, supporting grid stability and power availability during periods of low solar generation." },
      { key: "Bifacial photovoltaic (PV) modules", value: "Solar panels designed to generate electricity from both the front and rear sides by capturing direct sunlight and reflected light from the ground, improving overall efficiency." },
      { key: "BOOT (Build, own, operate, transfer)", value: "A project delivery and ownership model whereby a facility is built, owned, and operated by a project company for a defined period before ownership is transferred to the offtaker." },
      { key: "Carbon dioxide (CO₂)", value: "A greenhouse gas produced primarily through the combustion of fossil fuels. The Al-Kharsaah Solar PV Power Plant avoids CO₂ emissions by generating electricity without combustion." },
      { key: "Construction Environmental Management Plan (CEMP)", value: "A formal plan implemented during construction to manage environmental impacts, including waste management, biodiversity protection, and regulatory compliance." },
      { key: "Crystalline silicon (c-Si) solar cells", value: "A category of photovoltaic cells manufactured from crystalline silicon, including monocrystalline and multicrystalline variants, widely used for high-efficiency solar power generation." },
      { key: "DC (Direct current)", value: "The form of electrical current generated by photovoltaic panels, which must be converted to alternating current before being supplied to the national grid." },
      { key: "Digital twin", value: "A digital representation of a physical asset or system used to monitor performance, simulate behavior, and support predictive maintenance." },
      { key: "Engineering, procurement and construction (EPC)", value: "A contracting model in which a single contractor is responsible for the engineering design, procurement of equipment, and construction of a project." },
      { key: "Environmental and social impact assessment (ESIA)", value: "A formal process undertaken to identify, assess, and mitigate potential environmental and social impacts associated with a project." },
      { key: "Greenhouse gas (GHG)", value: "Gases, such as carbon dioxide, that trap heat in the atmosphere and contribute to climate change." },
      { key: "Hazard and operability study (HAZOP)", value: "A structured and systematic examination of a project to identify potential hazards and operational risks and ensure safe and reliable operation." },
      { key: "IEC (International Electrotechnical Commission)", value: "An international standards organization that prepares and publishes specifications for electrical, electronic, and related technologies." },
      { key: "ISO (International Organization for Standardization)", value: "An international body that develops and publishes standards to ensure quality, safety, efficiency, and environmental responsibility." },
      { key: "Kahramaa (Qatar General Electricity and Water Corporation)", value: "The national entity responsible for electricity transmission and distribution and the offtaker of electricity generated by the Al-Kharsaah Solar PV Power Plant." },
      { key: "Megawatt (MW)", value: "A unit of power equal to one million watts, used to express installed and operating capacity of power generation facilities." },
      { key: "Megawatt-peak (MWp)", value: "The maximum power output of a solar power system under standard test conditions, expressed in direct current terms." },
      { key: "Memorandum of Understanding (MoU)", value: "A non-binding agreement between parties outlining mutual intent and cooperation, often preceding formal contractual arrangements." },
      { key: "National grid", value: "The electricity transmission and distribution network serving the State of Qatar." },
      { key: "Operations and maintenance (O&M)", value: "Activities undertaken to operate, monitor, and maintain a facility to ensure safe, reliable, and efficient performance throughout its lifecycle." },
      { key: "Photovoltaic (PV) technology", value: "Technology that converts sunlight directly into electricity using semiconductor materials." },
      { key: "Power purchase agreement (PPA)", value: "A long-term contractual agreement under which electricity generated by a power plant is sold to an offtaker at agreed terms and conditions." },
      { key: "Qatar National Vision 2030 (QNV 2030)", value: "The State of Qatar's long-term development framework guiding economic diversification, social development, environmental protection, and sustainable growth." },
      { key: "Renewable energy", value: "Energy derived from natural resources that are replenished continuously, such as solar energy." },
      { key: "Solar tracking system", value: "A mechanical system that adjusts the orientation of solar panels to follow the sun throughout the day, increasing energy generation compared to fixed systems." },
      { key: "Thin-film solar cells", value: "A type of photovoltaic technology that uses thin layers of semiconductor materials, typically offering lower efficiency but potential cost and material advantages." },
    ],
  },
];
