import { useState, useEffect } from "react";

// ── GWC Design Tokens ──────────────────────────────────────────────
const C = {
  navy:     "#0B1D3A",
  mist:     "#F6F9FC",
  sky:      "#A3C9E2",
  tealGrey: "#7CAAB0",
  slateInk: "#1A2E3B",
  neonMint: "#A8FFE4",
  orchid:   "#C6C9D1",
};

// ── Decision Type Config ───────────────────────────────────────────
const TYPES = {
  Founding:    { color: C.neonMint, label: "Founding",    desc: "Events constitutive of the foundation itself" },
  Legal:       { color: C.sky,      label: "Legal",       desc: "Filings, determinations, and compliance actions" },
  Grantmaking: { color: C.tealGrey, label: "Grantmaking", desc: "Criteria, cycles, awards, and process decisions" },
  Operations:  { color: C.orchid,   label: "Operations",  desc: "Infrastructure, systems, and administrative choices" },
  Governance:  { color: "#E8C97A",  label: "Governance",  desc: "Board, policy, and institutional structure" },
  Financial:   { color: "#A3C9A3",  label: "Financial",   desc: "Capital allocation, investment, and endowment" },
};

// ── Decision Log Data ──────────────────────────────────────────────
// Each entry is a binding institutional record.
const DECISIONS = [
  {
    id: "DL-2026-005",
    date: "2026-02-20",
    displayDate: "February 20, 2026",
    type: "Operations",
    title: "Transparency infrastructure buildout initiated",
    summary: "Decision to develop and publish six transparency features: Transparency Dashboard, Grantmaking Criteria, Grant Registry, Decision Log, Acceptance Rate page, and 990 Reading Room.",
    rationale: "Hyper-transparency is a founding value of Ghosts Worth Chasing. Rather than treating transparency as a compliance exercise, the foundation committed early to building infrastructure that makes our operations genuinely legible to applicants, donors, and the public. These six features represent the minimum viable expression of that commitment.",
    madeBy: "Ryan O'Connor, Founder & Chair",
    status: "Active",
    linkedTo: [],
  },
  {
    id: "DL-2026-004",
    date: "2026-01-15",
    displayDate: "January 15, 2026",
    type: "Grantmaking",
    title: "Grantmaking criteria framework drafted for board review",
    summary: "A weighted scoring rubric and eligibility framework was developed establishing five criteria: Mission Alignment (30%), Demonstrated Need (25%), Organizational Capacity (20%), Use of Funds Specificity (15%), and Long-Term Viability (10%).",
    rationale: "Before opening any application cycle, the foundation needed a published, binding criteria framework. Applicants deserve to know exactly how decisions are made. Vague criteria protect funders at the expense of applicants — a dynamic we are not willing to replicate.",
    madeBy: "Ryan O'Connor, Founder & Chair",
    status: "Active",
    linkedTo: ["DL-2026-005"],
  },
  {
    id: "DL-2025-003",
    date: "2025-06-01",
    displayDate: "June 2025",
    type: "Grantmaking",
    title: "First grant cycle design: four $500 learning grants for Q2 2026",
    summary: "Decision to design first grant cycle as four $500 grants, explicitly structured as operational learning exercises rather than impact-maximizing awards.",
    rationale: "A foundation that has never made a grant should not pretend to have mastered grantmaking. The first cycle exists to test the application process, identify friction points, evaluate the scoring rubric in practice, and develop the decision-making instincts of the founding team. Impact will be real but modest — this is intentional.",
    madeBy: "Ryan O'Connor, Founder & Chair",
    status: "Planned — Q2 2026",
    linkedTo: ["DL-2026-004"],
  },
  {
    id: "DL-2024-002",
    date: "2024-09-15",
    displayDate: "September 2024",
    type: "Legal",
    title: "IRS Form 1023 filed — 501(c)(3) determination pending",
    summary: "Application for tax-exempt status under Section 501(c)(3) of the Internal Revenue Code filed with the IRS. Determination pending as of filing date.",
    rationale: "501(c)(3) status is required for the foundation to accept tax-deductible contributions and to operate as a recognized public charity. The application was filed promptly following incorporation to minimize the gap between founding and operational status.",
    madeBy: "Ryan O'Connor, Founder & Chair",
    status: "Pending IRS Determination",
    linkedTo: [],
  },
  {
    id: "DL-2024-001",
    date: "2024-09-01",
    displayDate: "September 2024",
    type: "Founding",
    title: "Ghosts Worth Chasing incorporated; $7,500 initial contribution made",
    summary: "The foundation was formally incorporated. An initial contribution of $7,500 was made by the founder to signal institutional seriousness and establish the opening endowment.",
    rationale: "The founding contribution was sized to be meaningful without being performative. It represents a genuine financial commitment to the foundation's mission rather than a nominal placeholder. The amount was chosen to be sufficient to fund the first learning grants while leaving capital in the endowment for compounding.",
    madeBy: "Ryan O'Connor, Founder & Chair",
    status: "Closed — Complete",
    linkedTo: ["DL-2024-002"],
  },
];

const ALL_TYPES = ["All", ...Object.keys(TYPES)];

// ── Components ─────────────────────────────────────────────────────

function TypeBadge({ type, small }) {
  const cfg = TYPES[type] || { color: C.orchid, label: type };
  return (
    <span style={{
      fontSize: small ? 9 : 10,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: cfg.color,
      border: `1px solid ${cfg.color}50`,
      padding: small ? "1px 7px" : "3px 10px",
      borderRadius: 2,
      fontFamily: "Hanken Grotesk, sans-serif",
      whiteSpace: "nowrap",
      flexShrink: 0,
    }}>{cfg.label}</span>
  );
}

function StatusPill({ status }) {
  const isActive = status === "Active";
  const isPending = status.includes("Pending") || status.includes("Planned");
  const color = isActive ? C.neonMint : isPending ? C.sky : C.orchid;
  return (
    <span style={{
      fontSize: 10, letterSpacing: "0.1em",
      color, fontFamily: "Hanken Grotesk, sans-serif",
    }}>● {status}</span>
  );
}

function DecisionEntry({ decision, isLast, globalExpanded }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = TYPES[decision.type] || { color: C.orchid };

  useEffect(() => {
    if (globalExpanded !== null) setExpanded(globalExpanded);
  }, [globalExpanded]);

  return (
    <div style={{ display: "flex", gap: 0 }}>
      {/* ── Timeline spine ── */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        width: 56, flexShrink: 0,
      }}>
        {/* Node */}
        <div style={{
          width: 14, height: 14, borderRadius: 2,
          background: cfg.color,
          flexShrink: 0,
          marginTop: 18,
          boxShadow: `0 0 12px ${cfg.color}60`,
          transform: "rotate(45deg)",
        }} />
        {/* Spine */}
        {!isLast && (
          <div style={{
            width: 1, flex: 1, minHeight: 40,
            background: `linear-gradient(180deg, ${cfg.color}40, rgba(163,201,226,0.1))`,
            margin: "6px 0",
          }} />
        )}
      </div>

      {/* ── Entry card ── */}
      <div style={{
        flex: 1,
        marginBottom: isLast ? 0 : 24,
        marginTop: 8,
      }}>
        <div
          onClick={() => setExpanded(e => !e)}
          style={{
            cursor: "pointer",
            border: `1px solid ${expanded ? cfg.color + "50" : "rgba(163,201,226,0.15)"}`,
            borderLeft: `3px solid ${cfg.color}`,
            borderRadius: 2,
            padding: "18px 22px",
            background: expanded ? `${cfg.color}06` : "rgba(246,249,252,0.03)",
            transition: "all 0.2s ease",
          }}
        >
          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 8 }}>
                <TypeBadge type={decision.type} small />
                <span style={{ fontSize: 10, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", letterSpacing: "0.06em" }}>
                  {decision.displayDate}
                </span>
                <span style={{ fontSize: 10, color: "rgba(163,201,226,0.3)", fontFamily: "Hanken Grotesk, sans-serif" }}>·</span>
                <span style={{ fontSize: 10, color: "rgba(163,201,226,0.4)", fontFamily: "Hanken Grotesk, sans-serif", letterSpacing: "0.08em" }}>
                  {decision.id}
                </span>
              </div>

              <h3 style={{
                fontSize: 15, fontWeight: 600, color: C.mist,
                fontFamily: "Hanken Grotesk, sans-serif",
                margin: "0 0 6px", lineHeight: 1.35,
              }}>{decision.title}</h3>

              <p style={{
                fontSize: 12, color: C.orchid, lineHeight: 1.65,
                fontFamily: "Hanken Grotesk, sans-serif", margin: 0,
              }}>{decision.summary}</p>
            </div>

            {/* Expand toggle */}
            <div style={{
              width: 28, height: 28, borderRadius: 1,
              border: `1px solid rgba(163,201,226,0.2)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              color: C.tealGrey, fontSize: 14,
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}>
              ↓
            </div>
          </div>

          {/* Status */}
          <div style={{ marginTop: 12 }}>
            <StatusPill status={decision.status} />
          </div>
        </div>

        {/* ── Expanded detail ── */}
        {expanded && (
          <div style={{
            border: `1px solid ${cfg.color}30`,
            borderTop: "none",
            borderLeft: `3px solid ${cfg.color}`,
            background: C.mist,
            padding: "24px 24px 24px 22px",
            borderRadius: "0 0 2px 2px",
          }}>
            {/* Rationale */}
            <div style={{ marginBottom: 24 }}>
              <p style={{
                fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
                color: C.tealGrey, margin: "0 0 10px", fontFamily: "Hanken Grotesk, sans-serif",
              }}>Rationale</p>
              <p style={{
                fontSize: 13, color: C.slateInk, lineHeight: 1.85,
                fontFamily: "Hanken Grotesk, sans-serif", margin: 0,
                borderLeft: `2px solid ${cfg.color}40`,
                paddingLeft: 16,
              }}>{decision.rationale}</p>
            </div>

            {/* Meta row */}
            <div style={{
              display: "flex", gap: 32, flexWrap: "wrap",
              paddingTop: 18, borderTop: `1px solid ${C.slateInk}12`,
            }}>
              <div>
                <p style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 5px", fontFamily: "Hanken Grotesk, sans-serif" }}>Decision Made By</p>
                <p style={{ fontSize: 12, color: C.slateInk, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{decision.madeBy}</p>
              </div>
              <div>
                <p style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 5px", fontFamily: "Hanken Grotesk, sans-serif" }}>Record ID</p>
                <p style={{ fontSize: 12, color: C.slateInk, margin: 0, fontFamily: "Hanken Grotesk, sans-serif", fontFamily: "monospace" }}>{decision.id}</p>
              </div>
              <div>
                <p style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 5px", fontFamily: "Hanken Grotesk, sans-serif" }}>Date Recorded</p>
                <p style={{ fontSize: 12, color: C.slateInk, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{decision.displayDate}</p>
              </div>
              {decision.linkedTo.length > 0 && (
                <div>
                  <p style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 5px", fontFamily: "Hanken Grotesk, sans-serif" }}>Related Entries</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {decision.linkedTo.map(id => (
                      <span key={id} style={{
                        fontSize: 11, color: cfg.color,
                        border: `1px solid ${cfg.color}40`,
                        padding: "2px 8px", borderRadius: 2,
                        fontFamily: "monospace", cursor: "pointer",
                      }}>{id}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TypeLegend() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {Object.entries(TYPES).map(([key, cfg]) => (
        <div key={key} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: 1, background: cfg.color, flexShrink: 0, marginTop: 3, transform: "rotate(45deg)" }} />
          <div>
            <span style={{ fontSize: 11, color: C.mist, fontFamily: "Hanken Grotesk, sans-serif", display: "block" }}>{cfg.label}</span>
            <span style={{ fontSize: 10, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{cfg.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────
export default function DecisionLog() {
  const [mounted, setMounted] = useState(false);
  const [activeType, setActiveType] = useState("All");
  const [globalExpanded, setGlobalExpanded] = useState(null);
  const [sortOrder, setSortOrder] = useState("desc"); // newest first by default

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const filtered = DECISIONS
    .filter(d => activeType === "All" || d.type === activeType)
    .sort((a, b) => sortOrder === "desc"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date)
    );

  const typeCounts = DECISIONS.reduce((acc, d) => {
    acc[d.type] = (acc[d.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{
      background: C.navy,
      minHeight: "100vh",
      fontFamily: "Hanken Grotesk, sans-serif",
    }}>
      {/* Subtle grain texture */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── Masthead ── */}
        <div style={{
          padding: "64px 48px 48px",
          borderBottom: "1px solid rgba(163,201,226,0.1)",
          opacity: mounted ? 1 : 0, transition: "opacity 0.5s ease",
        }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 16px", fontFamily: "Hanken Grotesk, sans-serif" }}>
              Ghosts Worth Chasing — Private Foundation
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "end" }}>
              <div>
                <h1 style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontWeight: 700, color: C.mist,
                  margin: "0 0 20px", letterSpacing: "-0.025em", lineHeight: 1.05,
                }}>
                  Decision<br /><span style={{ color: C.sky }}>Log</span>
                </h1>
                <p style={{ fontSize: 13, color: C.orchid, lineHeight: 1.8, maxWidth: 580, margin: 0 }}>
                  A chronological record of every significant institutional decision made by
                  Ghosts Worth Chasing — including the reasoning behind each one. This log is
                  permanent. Entries are never removed, only superseded by subsequent entries.
                </p>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: "right" }}>
                <div>
                  <p style={{ fontSize: 32, fontWeight: 700, color: C.mist, margin: 0, lineHeight: 1, fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {DECISIONS.length}
                  </p>
                  <p style={{ fontSize: 10, color: C.tealGrey, margin: "4px 0 0", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Entries to date
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: C.orchid, margin: "0 0 4px" }}>Last entry: Feb 20, 2026</p>
                  <p style={{ fontSize: 10, color: C.tealGrey, margin: 0, letterSpacing: "0.08em" }}>Log initiated: Sep 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main layout: sidebar + log ── */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 48px 80px", display: "grid", gridTemplateColumns: "220px 1fr", gap: 56 }}>

          {/* ── Left sidebar ── */}
          <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.5s ease 0.1s" }}>

            {/* Controls */}
            <div style={{ marginBottom: 36 }}>
              <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 14px", fontFamily: "Hanken Grotesk, sans-serif" }}>
                Filter by Type
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {ALL_TYPES.map(type => {
                  const count = type === "All" ? DECISIONS.length : (typeCounts[type] || 0);
                  const cfg = type === "All" ? { color: C.sky } : TYPES[type];
                  const active = activeType === type;
                  return (
                    <button
                      key={type}
                      onClick={() => setActiveType(type)}
                      style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "8px 12px",
                        background: active ? `${cfg.color}15` : "transparent",
                        border: `1px solid ${active ? cfg.color + "50" : "transparent"}`,
                        borderRadius: 2,
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <span style={{ fontSize: 12, color: active ? C.mist : C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{type}</span>
                      <span style={{
                        fontSize: 10, color: active ? cfg.color : "rgba(163,201,226,0.3)",
                        fontFamily: "Hanken Grotesk, sans-serif",
                        background: active ? `${cfg.color}20` : "transparent",
                        padding: "1px 7px", borderRadius: 10,
                      }}>{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sort */}
            <div style={{ marginBottom: 36 }}>
              <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 14px", fontFamily: "Hanken Grotesk, sans-serif" }}>
                Sort Order
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {[["desc", "Newest first"], ["asc", "Oldest first (founding order)"]].map(([val, label]) => (
                  <button
                    key={val}
                    onClick={() => setSortOrder(val)}
                    style={{
                      padding: "8px 12px",
                      background: sortOrder === val ? `${C.sky}12` : "transparent",
                      border: `1px solid ${sortOrder === val ? C.sky + "40" : "transparent"}`,
                      borderRadius: 2, cursor: "pointer",
                      fontSize: 11, color: sortOrder === val ? C.mist : C.tealGrey,
                      fontFamily: "Hanken Grotesk, sans-serif",
                      textAlign: "left",
                    }}
                  >{label}</button>
                ))}
              </div>
            </div>

            {/* Expand/Collapse all */}
            <div style={{ marginBottom: 36 }}>
              <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 14px", fontFamily: "Hanken Grotesk, sans-serif" }}>
                View
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <button onClick={() => setGlobalExpanded(true)} style={{ padding: "8px 12px", background: "transparent", border: "1px solid transparent", borderRadius: 2, cursor: "pointer", fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", textAlign: "left" }}>
                  Expand all entries
                </button>
                <button onClick={() => { setGlobalExpanded(false); setTimeout(() => setGlobalExpanded(null), 50); }} style={{ padding: "8px 12px", background: "transparent", border: "1px solid transparent", borderRadius: 2, cursor: "pointer", fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", textAlign: "left" }}>
                  Collapse all entries
                </button>
              </div>
            </div>

            {/* Legend */}
            <div>
              <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 16px", fontFamily: "Hanken Grotesk, sans-serif" }}>
                Entry Types
              </p>
              <TypeLegend />
            </div>
          </div>

          {/* ── Timeline ── */}
          <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.5s ease 0.2s" }}>

            {/* Result count when filtered */}
            {activeType !== "All" && (
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginBottom: 24, paddingBottom: 16,
                borderBottom: "1px solid rgba(163,201,226,0.1)",
              }}>
                <span style={{ fontSize: 12, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>
                  Showing {filtered.length} {activeType} {filtered.length === 1 ? "entry" : "entries"}
                </span>
                <button onClick={() => setActiveType("All")} style={{
                  fontSize: 11, color: C.sky, background: "transparent",
                  border: "none", cursor: "pointer", fontFamily: "Hanken Grotesk, sans-serif",
                }}>
                  Show all →
                </button>
              </div>
            )}

            {filtered.length === 0 ? (
              <div style={{ padding: "48px 0", textAlign: "center" }}>
                <p style={{ fontSize: 13, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>
                  No entries of this type yet.
                </p>
              </div>
            ) : (
              filtered.map((decision, i) => (
                <DecisionEntry
                  key={decision.id}
                  decision={decision}
                  isLast={i === filtered.length - 1}
                  globalExpanded={globalExpanded}
                />
              ))
            )}

            {/* Log integrity note */}
            <div style={{
              marginTop: 48, paddingTop: 32,
              borderTop: "1px solid rgba(163,201,226,0.12)",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                <div>
                  <p style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 10px", fontFamily: "Hanken Grotesk, sans-serif" }}>
                    Log Integrity Policy
                  </p>
                  <p style={{ fontSize: 12, color: C.orchid, lineHeight: 1.8, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>
                    Entries in this log are permanent. No entry may be deleted or materially
                    altered after publication. If a decision is reversed, a new entry is added
                    citing the original. This log is the institutional memory of the foundation.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 10px", fontFamily: "Hanken Grotesk, sans-serif" }}>
                    What Qualifies as a Decision
                  </p>
                  <p style={{ fontSize: 12, color: C.orchid, lineHeight: 1.8, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>
                    Any action that commits the foundation's capital, changes its operating
                    policies, affects its legal structure, or establishes precedent for future
                    grantmaking is logged here. Routine administrative tasks are not.
                  </p>
                </div>
              </div>

              {/* Cross-links */}
              <div style={{ marginTop: 32, display: "flex", gap: 24, flexWrap: "wrap" }}>
                <a href="/transparency" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>← Transparency Dashboard</a>
                <a href="/grants" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Grant Registry →</a>
                <a href="/criteria" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Grantmaking Criteria →</a>
                <a href="/documents" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>990 Reading Room →</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
