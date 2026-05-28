# MRDN — Claude Code Context File
# Read this completely before making any changes to the codebase.
# This is the source of truth for all content and brand decisions.

---

## 1. BRAND RULES

- The product is called **MRDN** (not Meridian, not meridian)
- All display text showing "MERIDIAN" or "Meridian" must be changed to **MRDN**
- Version string for ALL modules: **v1.0** (not v2, not v4.0, not v4.2)
- Copyright year: **2026** everywhere
- The four modules are: **HELIX**, **NEXUS**, **ORION**, **AEGIS** — no fifth module called VANTAGE
- Remove all instances of "VANTAGE" from any operational chains
- Remove all placeholder copyright strings like "©2024 ARCH-DATA CO." — these are template leftovers

---

## 2. MODULE DESCRIPTIONS (use exactly these)

**HELIX**
- Short label: `GOV INTELLIGENCE`
- One-line: `Government and defence intelligence. Connects 15–20 Indian ministries into a unified threat graph.`

**NEXUS**  
- Short label: `ENTERPRISE OPS`
- One-line: `Enterprise operational intelligence. Real-time graph across all departments, enriched with live market signals.`

**ORION**
- Short label: `DATA INGESTION`
- One-line: `Autonomous data ingestion engine. Replaces manual integration pipelines with agent-driven onboarding.`

**AEGIS**
- Short label: `AI INTERFACE`
- One-line: `Multilingual AI layer. Natural-language interface across all Indian languages for every operator.`

---

## 3. FILE-BY-FILE CONTENT CHANGES

### components/Header.tsx
- Change: `MERIDIAN` (logo text) → `MRDN`

### components/Footer.tsx
- Change: `© 2026 MERIDIAN SYSTEMS` → `© 2026 MRDN`
- Keep: `CLASSIFICATION: INTERNAL` and `SYSTEM_ONLINE` — these are fine

### pages/Platform.tsx
- Change: `SYS-MERIDIAN / v4.2.0 // SOVEREIGN BUILD` → `SYS-MRDN / v1.0 // SOVEREIGN BUILD`
- Change: `> INIT MERIDIAN_v4.1` → `> INIT MRDN_v1.0`
- Change module sub-labels:
  - `DATA FABRIC` → `GOV INTELLIGENCE`
  - `SEC PROTOCOL` → `ENTERPRISE OPS`
  - `INTEL LAYER` → `DATA INGESTION`
  - `SCHEDULER` → `AI INTERFACE`
- REPLACE the `FORECAST DELTA +12.4%` bar chart component with the India Data Growth chart described in Section 4 below.

### pages/Mission.tsx
- Change: all instances of `Meridian` → `MRDN`
- Change this specific sentence:
  OLD: `Helix secures the ingestion. Nexus maps the relationships. Orion automates the reasoning. Aegis enables natural language interaction.`
  NEW: `Orion ingests the data. Helix maps the government threat graph. Nexus maps the enterprise operations graph. Aegis makes every node queryable in any Indian language.`
- Change the closing quote:
  OLD: `"India relies on foreign software for its most sensitive intelligence. That ends with Meridian."`
  NEW: `"India relies on foreign software for its most sensitive intelligence. That ends with MRDN."`

### pages/Systems.tsx
- Change: same HELIX/NEXUS/ORION/AEGIS sub-label fixes as Platform.tsx
- Remove entirely: `©2024 ARCH-DATA CO.` and `SENSITIVE_DATA_HANDLING` and `RESTRICTED_ACCESS` and `SYSTEM_000` — these are template artifacts
- Change: any version references → `v1.0`

### pages/systems/Helix.tsx
- Change: `SOVEREIGN INTELLIGENCE // HELIX v4.0` → `SOVEREIGN INTELLIGENCE // HELIX v1.0`
- Remove entirely: `©2024 ARCH-DATA CO.` and `SENSITIVE_DATA_HANDLING` and `RESTRICTED_ACCESS` and `SYSTEM_000` — template artifacts
- Keep: all other content — it is accurate

### pages/systems/Nexus.tsx
- Change: `SYSTEM_PROTOCOL: NEXUS_V2` → `SYSTEM_PROTOCOL: NEXUS_V1.0`
- Change: `© 2024 MERIDIAN TACTICAL SYSTEMS. ALL RIGHTS RESERVED.` → `© 2026 MRDN`
- Change this sentence:
  OLD: `The architecture utilizes a non-linear hyper-graph database optimized for extremely high concurrency and massive-scale entity linking.`
  NEW: `The architecture utilises a formal ontology graph connecting every operational entity across departments, systems, and external signals in real time.`
- Keep: all external signal enrichment content — it is accurate and strong

### pages/systems/Orion.tsx
- Change: `SYSTEM DESIGNATION // ORION-V2` → `SYSTEM DESIGNATION // ORION-V1.0`
- Change: `zero on-site headcount` → `one human review checkpoint — schema approval only`
- Change: `© 2024 MERIDIAN PLATFORM // UNCLASSIFIED SYSTEM` → `© 2026 MRDN`
- Change: `HELIX / NEXUS / ORION / AEGIS / VANTAGE` → `HELIX / NEXUS / ORION / AEGIS`
- Keep: all other content — it is accurate

### pages/systems/Aegis.tsx
- Change: `© 2024 MERIDIAN STRATEGIC. ALL RIGHTS RESERVED. CLASSIFIED_LEVEL_A` → `© 2026 MRDN`
- Change: `HELIX / NEXUS / ORION / AEGIS / VANTAGE` → `HELIX / NEXUS / ORION / AEGIS`
- Change: `BhAi_LLM_v2` → `BhAi_LLM_v1.0`
- Remove: `THROUGHPUT: 4.9PB/s` — this number is not realistic, just delete this stat line
- Keep: `QUERY_LATENCY: <100MS` — this is fine
- Keep: all other content — it is accurate and strong

### pages/Contact.tsx
- Change: `Meridian is currently deploying in closed beta` → `MRDN is currently deploying in closed beta`

### pages/Intelligence.tsx
- Change: all dates from `2024.11.xx` → `2026.05.xx` (use 2026.05.20, .19, .18, .17, .16, .15)
- Change this specific brief text:
  OLD: `Orion detected an emergent phishing syntax targeting government endpoints. Within 12 seconds, Aegis extracted the threat vector, and Helix automatically updated firewall schemas across all 15 active nodes.`
  NEW: `Orion detected an emergent phishing syntax targeting government endpoints. Within 12 seconds, Aegis extracted the threat vector, and Helix cross-referenced the signatures across 15 active ministry nodes, elevating threat scores to HIGH and triggering automated response protocols.`
- Keep: all other intelligence briefs — they are accurate

---

## 4. NEW CHART — INDIA DATA GROWTH (replaces FORECAST DELTA chart)

Replace the existing bar chart widget on Platform.tsx with a new Recharts area chart.

**What it shows:** India's internet user base growth 2005–2025 as a proxy for data generated without being turned into intelligence. The visual story: massive data growth, zero intelligence extracted.

**Implementation — use Recharts AreaChart:**

```tsx
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip } from 'recharts';

const indiaDataGrowth = [
  { year: '2005', users: 50 },
  { year: '2008', users: 80 },
  { year: '2010', users: 100 },
  { year: '2013', users: 213 },
  { year: '2015', users: 354 },
  { year: '2017', users: 450 },
  { year: '2019', users: 627 },
  { year: '2021', users: 759 },
  { year: '2023', users: 870 },
  { year: '2025', users: 900 },
];
```

**Visual style — match existing MRDN dark aesthetic:**
- Background: transparent (match surrounding dark panel)
- Area fill: use the same red/orange accent colour already used on the site (the bar chart uses it)
- Area stroke: same accent colour, opacity 1
- Fill opacity: 0.3
- X-axis: year labels, same monospace font as rest of site
- Y-axis: hidden (cleaner look)
- Grid: no grid lines, or very subtle dark lines
- No legend

**Labels to add ABOVE the chart (as plain text, not inside Recharts):**
```
INDIA_CONNECTED_USERS          2005–2025
```

**Label BELOW the chart (small, accent colour):**
```
SOURCE: WORLD BANK / TRAI / ITU
```

**The key label to add as a flat reference line near the bottom of the chart:**
- A `<ReferenceLine y={0} label={{ value: 'INTELLIGENCE EXTRACTED: ~0%', position: 'insideBottomLeft', fill: '#666', fontSize: 10 }} stroke="#333" />`

This creates the visual contrast: massive data growth towering above a near-zero intelligence extraction baseline. That gap IS the MRDN pitch.

---

## 5. THINGS TO NOT TOUCH

- The overall visual design and layout — do not change colours, fonts, spacing, animations
- The terminal/console aesthetic — keep all the > commands, blinking cursors, etc.
- The SYSTEM_LOG content in Platform.tsx — it is fine as-is
- The NOD-098, FLX-SYNC, SIGNAL_LATENCY stats — fine as decorative elements
- The intelligence briefs content (except the firewall one and the dates noted above)
- The Aegis capability layer list (L1 through L6) — accurate and strong
- The Orion pipeline steps — accurate
- The Helix threat scoring matrix — accurate

---

## 6. WHAT MRDN ACTUALLY IS (for context if you need it)

MRDN is a sovereign intelligence platform for India. Four modules:

**HELIX** — Government and defence intelligence operating system. Connects data from Indian intelligence agencies (NATGRID, CCTNS, IB feeds, FIU-IND, IVFRT) via physical data diodes into a cross-agency ontology graph. A convergence engine continuously scans for threat patterns across agencies simultaneously. When signals from independent agencies converge on the same entities or geography, a composite threat score is computed and an alert is dispatched automatically. This is the cross-agency correlation that failed before 26/11, Pulwama, and Pahalgam.

**NEXUS** — Enterprise consequence intelligence. Connects ERP (SAP/Tally/Oracle), GPS telematics, IoT sensors, lab records, and external signals (commodity prices, RBI circulars, tariff announcements) into a formal ontology graph for large Indian enterprises. Three pillars: Internal Intelligence (finds fraud, anomalies, and leakage inside the enterprise's own data), External Intelligence (connects external events to internal operations automatically), Predictive Intelligence (entity-level predictions — which supplier will default, which project will overrun, which machine will fail).

**ORION** — Autonomous data onboarding engine. A LangGraph-based multi-agent pipeline that discovers, maps, and connects a client's data sources in 4–6 weeks vs Palantir's 6–8 months with forward-deployed engineers. One human review checkpoint: schema approval. Everything else is agent-driven.

**AEGIS** — The AI interface layer for both Helix and Nexus. Runs on BhAi's fine-tuned multilingual model. Supports all 22 Indian scheduled languages. Uses schema-constrained Graph RAG — the LLM traverses the formal ontology graph and cannot generate hallucinated answers because the schema acts as a constraint. Runs fully on-premise for Helix (air-gapped, no external API calls). The data flywheel: every client deployment makes Aegis smarter.

---

## 7. DEPLOYMENT MODEL

**NEXUS:** Cloud-hosted on AWS India region (ap-south-1) for standard clients. On-premise deployment option for clients with strict data localisation requirements. All data stays in India.

**HELIX:** On-premise only. Government data never touches any cloud. Hardware data diodes (physical unidirectional gateways) between agency feeds and the Helix graph. No internet connection from the Helix environment outward.

---

*End of context file. Read this before every Claude Code session on the MRDN project.*
