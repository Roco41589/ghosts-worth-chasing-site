"use client";

import { useState, useEffect, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line, Legend } from "recharts";

// ── GWC Design Tokens ──────────────────────────────────────────────
const C = {
  navy:     "#0B1D3A",
  mist:     "#F6F9FC",
  sky:      "#A3C9E2",
  tealGrey: "#7CAAB0",
  slateInk: "#1A2E3B",
  neonMint: "#A8FFE4",
  orchid:   "#C6C9D1",
  warn:     "#C47A7A",
};

// ── Cycle Data ─────────────────────────────────────────────────────
// Populates after each completed cycle. Empty until Q2 2026.
type CycleData = {
  id: string;
  label: string;
  status: string;
  openDate: string;
  closeDate: string;
  decisionDate: string;
  received: number;
  screened: number;
  reviewed: number;
  funded: number;
  totalAwarded: number;
  acceptanceRate: number;
  committeeNotes: string;
  whatStoodOut: string[];
  commonWeaknesses: string[];
  note: string;
};

const CYCLES: CycleData[] = [
  // Example structure shown for first planned cycle:
  // {
  //   id: "Q2-2026",
  //   label: "Q2 2026",
  //   program: "Individual Support",
  //   status: "Completed",
  //   openDate: "April 1, 2026",
  //   closeDate: "April 30, 2026",
  //   decisionDate: "June 30, 2026",
  //   received: 0,
  //   screened: 0,      // passed initial eligibility
  //   reviewed: 0,      // advanced to committee
  //   funded: 0,
  //   totalAwarded: 0,
  //   acceptanceRate: 0,
  //   avgScore: 0,
  //   whatStoodOut: [],
  //   commonWeaknesses: [],
  //   committeeNotes: "",
  // },
];

// Planned upcoming cycles
const UPCOMING = [
  {
    id: "Q2-2026",
    label: "Q2 2026",
    program: "Individual Support",
    status: "Upcoming",
    openDate: "April 1, 2026",
    closeDate: "April 30, 2026",
    decisionDate: "June 30, 2026",
    note: "First grant cycle. Four grants of $500 each. Designed as learning exercises.",
  },
  {
    id: "Q3-2026",
    label: "Q3 2026",
    program: "Individual Support",
    status: "Upcoming",
    openDate: "July 1, 2026",
    closeDate: "July 31, 2026",
    decisionDate: "September 30, 2026",
    note: "Criteria may be refined based on Q2 learnings.",
  },
];

// What we look for — pre-populated guidance even before cycles run
const STANDING_GUIDANCE = [
  {
    category: "What consistently earns high scores",
    color: C.neonMint,
    icon: "↑",
    items: [
      "Specific, bounded asks — not general support requests",
      "Clear documentation of the transition being navigated",
      "A concrete plan for how the funds will be used, with timeline",
      "Evidence that this amount meaningfully closes a real gap",
      "Applications written in plain language — not grant-speak",
      "Honest acknowledgment of what the applicant doesn't know yet",
    ],
  },
  {
    category: "What consistently earns low scores",
    color: C.warn,
    icon: "↓",
    items: [
      "Vague purpose statements ('to support my journey')",
      "Requests that exceed the program range without explanation",
      "Applications that describe the problem but not the use of funds",
      "Evidence that the applicant hasn't read our eligibility criteria",
      "Requests for work already completed or expenses already incurred",
      "Applications that appear copied from another funder's format",
    ],
  },
  {
    category: "What we're still figuring out",
    color: C.orchid,
    icon: "~",
    items: [
      "How to weigh 'organizational capacity' for solo applicants",
      "The right balance between documented need and stated intent",
      "How to assess applications from individuals mid-transition with no track record",
      "Whether our 90-day timeline is appropriate for urgent needs",
    ],
  },
];

// ── Helpers ────────────────────────────────────────────────────────
const isEmpty = CYCLES.length === 0;

const funnelStages = isEmpty
  ? [
      { stage: "Applications Received", count: null, pct: 100, sublabel: "Opens Q2 2026" },
      { stage: "Passed Eligibility Screen", count: null, pct: 68, sublabel: "Est. 60–75% historically sector-wide" },
      { stage: "Advanced to Committee Review", count: null, pct: 42, sublabel: "Top applicants by initial score" },
      { stage: "Funded", count: null, pct: 20, sublabel: "Target: 4 grants in first cycle" },
    ]
  : (() => {
      const totals = CYCLES.reduce(
        (acc, c) => ({
          received: acc.received + c.received,
          screened: acc.screened + c.screened,
          reviewed: acc.reviewed + c.reviewed,
          funded:   acc.funded   + c.funded,
        }),
        { received: 0, screened: 0, reviewed: 0, funded: 0 }
      );
      const r = totals.received || 1;
      return [
        { stage: "Applications Received",     count: totals.received, pct: 100,                              sublabel: "All programs combined" },
        { stage: "Passed Eligibility Screen",  count: totals.screened, pct: Math.round(totals.screened / r * 100), sublabel: "Met all eligibility criteria" },
        { stage: "Advanced to Committee",      count: totals.reviewed, pct: Math.round(totals.reviewed / r * 100), sublabel: "Scored above threshold" },
        { stage: "Funded",                     count: totals.funded,   pct: Math.round(totals.funded / r * 100),   sublabel: "Grants awarded" },
      ];
    })();

const overallRate = isEmpty
  ? null
  : CYCLES.reduce((s, c) => s + c.funded, 0) /
    Math.max(1, CYCLES.reduce((s, c) => s + c.received, 0)) * 100;

// ── Components ─────────────────────────────────────────────────────

function SectionRule({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "56px 0 28px" }}>
      <span style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", flexShrink: 0 }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${C.slateInk}30, transparent)` }} />
    </div>
  );
}

function FunnelViz({ stages, animate }) {
  const [widths, setWidths] = useState(stages.map(() => 0));

  useEffect(() => {
    if (animate) {
      stages.forEach((s, i) => {
        setTimeout(() => {
          setWidths(prev => {
            const next = [...prev];
            next[i] = s.pct;
            return next;
          });
        }, i * 180);
      });
    }
  }, [animate]);

  const stageColors = [
    { bg: C.sky,      text: C.navy },
    { bg: C.tealGrey, text: C.mist },
    { bg: "#5A8A95",  text: C.mist },
    { bg: C.neonMint, text: C.navy },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {stages.map((s, i) => {
        const col = stageColors[i];
        const w = widths[i];
        const isLast = i === stages.length - 1;

        return (
          <div key={i}>
            {/* Bar row */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 6 }}>
              {/* Stage label left */}
              <div style={{ width: 220, flexShrink: 0, textAlign: "right" }}>
                <span style={{ fontSize: 12, color: C.slateInk, fontFamily: "Hanken Grotesk, sans-serif", fontWeight: 500 }}>
                  {s.stage}
                </span>
              </div>

              {/* Bar */}
              <div style={{ flex: 1, height: 44, background: `${C.slateInk}08`, borderRadius: 2, overflow: "hidden", position: "relative" }}>
                <div style={{
                  height: "100%",
                  width: `${w}%`,
                  background: isLast
                    ? `linear-gradient(90deg, ${col.bg}, ${col.bg}dd)`
                    : col.bg,
                  borderRadius: 2,
                  transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex", alignItems: "center", paddingLeft: 14,
                  overflow: "hidden",
                }}>
                  {w > 20 && (
                    <span style={{
                      fontSize: 13, fontWeight: 700, color: col.text,
                      fontFamily: "Hanken Grotesk, sans-serif",
                      whiteSpace: "nowrap",
                    }}>
                      {s.count !== null ? s.count : `~${s.pct}%`}
                    </span>
                  )}
                </div>

                {/* Percentage label right of bar */}
                <div style={{
                  position: "absolute", right: 12, top: "50%",
                  transform: "translateY(-50%)",
                }}>
                  <span style={{ fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {s.pct}%
                  </span>
                </div>
              </div>

              {/* Sublabel right */}
              <div style={{ width: 200, flexShrink: 0 }}>
                <span style={{ fontSize: 10, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>
                  {s.sublabel}
                </span>
              </div>
            </div>

            {/* Connector arrow */}
            {!isLast && (
              <div style={{ display: "flex", alignItems: "center", paddingLeft: 236, marginBottom: 6 }}>
                <span style={{ fontSize: 10, color: `${C.slateInk}30`, fontFamily: "Hanken Grotesk, sans-serif" }}>▼</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function GuidanceCard({ item }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{
      border: `1px solid ${item.color}30`,
      borderTop: `3px solid ${item.color}`,
      borderRadius: 2,
      overflow: "hidden",
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", padding: "18px 20px",
          background: `${item.color}08`,
          border: "none", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{
            fontSize: 16, color: item.color,
            fontFamily: "Hanken Grotesk, sans-serif",
            fontWeight: 700, width: 20, textAlign: "center",
          }}>{item.icon}</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: C.slateInk, fontFamily: "Hanken Grotesk, sans-serif" }}>
            {item.category}
          </span>
        </div>
        <span style={{ fontSize: 12, color: C.tealGrey, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>↓</span>
      </button>
      {open && (
        <div style={{ padding: "4px 20px 20px" }}>
          {item.items.map((text, i) => (
            <div key={i} style={{
              display: "flex", gap: 12, alignItems: "flex-start",
              padding: "10px 0",
              borderBottom: i < item.items.length - 1 ? `1px solid ${C.slateInk}10` : "none",
            }}>
              <span style={{ color: item.color, fontSize: 10, flexShrink: 0, marginTop: 3, fontWeight: 700 }}>
                {item.icon}
              </span>
              <span style={{ fontSize: 12, color: C.slateInk, lineHeight: 1.7, fontFamily: "Hanken Grotesk, sans-serif" }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CycleCard({ cycle }) {
  const [expanded, setExpanded] = useState(false);
  const rate = cycle.received > 0 ? ((cycle.funded / cycle.received) * 100).toFixed(1) : "—";

  return (
    <div style={{
      border: `1px solid ${C.slateInk}18`,
      borderRadius: 2, overflow: "hidden",
      background: "white",
    }}>
      <button
        onClick={() => setExpanded(e => !e)}
        style={{
          width: "100%", padding: "20px 24px",
          background: "transparent", border: "none", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          textAlign: "left",
        }}
      >
        <div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.slateInk, fontFamily: "Hanken Grotesk, sans-serif" }}>{cycle.label}</span>
            <span style={{
              fontSize: 10, letterSpacing: "0.1em",
              color: C.tealGrey, border: `1px solid ${C.slateInk}20`,
              padding: "2px 8px", borderRadius: 2,
              fontFamily: "Hanken Grotesk, sans-serif",
            }}>{cycle.program}</span>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <span style={{ fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>
              {cycle.received} received · {cycle.funded} funded · <strong style={{ color: C.sky }}>{rate}% rate</strong>
            </span>
          </div>
        </div>
        <span style={{ fontSize: 12, color: C.tealGrey, transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>↓</span>
      </button>

      {expanded && (
        <div style={{ borderTop: `1px solid ${C.slateInk}10`, padding: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 28 }}>
            {[
              { label: "Received",    value: cycle.received },
              { label: "Screened",    value: cycle.screened },
              { label: "Reviewed",    value: cycle.reviewed },
              { label: "Funded",      value: cycle.funded },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <p style={{ fontSize: 28, fontWeight: 700, color: C.slateInk, margin: "0 0 4px", fontFamily: "Hanken Grotesk, sans-serif", lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontSize: 9, color: C.tealGrey, margin: 0, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "Hanken Grotesk, sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {cycle.committeeNotes && (
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 10px", fontFamily: "Hanken Grotesk, sans-serif" }}>Committee Notes</p>
              <p style={{ fontSize: 13, color: C.slateInk, lineHeight: 1.8, margin: 0, borderLeft: `3px solid ${C.sky}`, paddingLeft: 16 }}>
                {cycle.committeeNotes}
              </p>
            </div>
          )}

          {cycle.whatStoodOut?.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: C.neonMint, margin: "0 0 10px", fontFamily: "Hanken Grotesk, sans-serif" }}>What Stood Out — Funded Applications</p>
              {cycle.whatStoodOut.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: `1px solid ${C.slateInk}08` }}>
                  <span style={{ color: C.neonMint, fontSize: 10, flexShrink: 0 }}>↑</span>
                  <span style={{ fontSize: 12, color: C.slateInk, lineHeight: 1.6, fontFamily: "Hanken Grotesk, sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          )}

          {cycle.commonWeaknesses?.length > 0 && (
            <div>
              <p style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: C.warn, margin: "0 0 10px", fontFamily: "Hanken Grotesk, sans-serif" }}>Common Weaknesses — Declined Applications</p>
              {cycle.commonWeaknesses.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: `1px solid ${C.slateInk}08` }}>
                  <span style={{ color: C.warn, fontSize: 10, flexShrink: 0 }}>↓</span>
                  <span style={{ fontSize: 12, color: C.slateInk, lineHeight: 1.6, fontFamily: "Hanken Grotesk, sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function UpcomingCycleCard({ cycle }) {
  return (
    <div style={{
      border: `1px solid ${C.sky}30`,
      borderLeft: `3px solid ${C.sky}`,
      borderRadius: 2, padding: "20px 22px",
      background: `${C.sky}05`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <div>
          <span style={{
            fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
            color: C.sky, fontFamily: "Hanken Grotesk, sans-serif",
          }}>Upcoming</span>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: C.slateInk, margin: "6px 0 4px", fontFamily: "Hanken Grotesk, sans-serif" }}>
            {cycle.label} — {cycle.program}
          </h3>
        </div>
        <span style={{
          fontSize: 10, color: C.tealGrey,
          border: `1px solid ${C.slateInk}20`,
          padding: "3px 10px", borderRadius: 2,
          fontFamily: "Hanken Grotesk, sans-serif",
        }}>Not yet open</span>
      </div>
      <div style={{ display: "flex", gap: 24, marginBottom: 12, flexWrap: "wrap" }}>
        {[
          { label: "Opens", value: cycle.openDate },
          { label: "Closes", value: cycle.closeDate },
          { label: "Decision", value: cycle.decisionDate },
        ].map(m => (
          <div key={m.label}>
            <p style={{ fontSize: 9, color: C.tealGrey, margin: "0 0 3px", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "Hanken Grotesk, sans-serif" }}>{m.label}</p>
            <p style={{ fontSize: 12, color: C.slateInk, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{m.value}</p>
          </div>
        ))}
      </div>
      {cycle.note && (
        <p style={{ fontSize: 11, color: C.tealGrey, lineHeight: 1.65, margin: 0, fontFamily: "Hanken Grotesk, sans-serif", fontStyle: "italic" }}>
          {cycle.note}
        </p>
      )}
    </div>
  );
}

// ── Rate comparison chart (activates with data) ────────────────────
function RateChart({ cycles }) {
  if (!cycles.length) return null;
  const data = cycles.map(c => ({
    name: c.label,
    rate: c.acceptanceRate,
    funded: c.funded,
  }));
  return (
    <div style={{ border: `1px solid ${C.slateInk}15`, borderRadius: 2, padding: "24px", background: "white" }}>
      <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 20px", fontFamily: "Hanken Grotesk, sans-serif" }}>
        Acceptance Rate — Cycle Over Cycle
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={`${C.slateInk}10`} />
          <XAxis dataKey="name" tick={{ fontSize: 10, fill: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }} />
          <YAxis unit="%" tick={{ fontSize: 10, fill: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }} />
          <Tooltip
            contentStyle={{ background: C.navy, border: `1px solid rgba(163,201,226,0.2)`, borderRadius: 2, fontFamily: "Hanken Grotesk, sans-serif" }}
            labelStyle={{ color: C.mist, fontSize: 11 }}
            itemStyle={{ color: C.sky, fontSize: 11 }}
          />
          <Line type="monotone" dataKey="rate" stroke={C.sky} strokeWidth={2} dot={{ fill: C.sky, r: 4 }} name="Acceptance Rate %" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────
export default function AcceptanceRate() {
  const [mounted, setMounted] = useState(false);
  const [funnelVisible, setFunnelVisible] = useState(false);
  const funnelRef = useRef(null);

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFunnelVisible(true); },
      { threshold: 0.15 }
    );
    if (funnelRef.current) observer.observe(funnelRef.current);
    return () => observer.disconnect();
  }, []);

  const completedCycles = CYCLES.filter(c => c.status === "Completed");

  return (
    <div style={{ background: C.mist, minHeight: "100vh", fontFamily: "Hanken Grotesk, sans-serif" }}>

      {/* ── Masthead ── */}
      <div style={{
        background: C.navy, padding: "64px 32px 52px",
        opacity: mounted ? 1 : 0, transition: "opacity 0.5s ease",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 16px", fontFamily: "Hanken Grotesk, sans-serif" }}>
            Ghosts Worth Chasing — Private Foundation
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "end", flexWrap: "wrap" }}>
            <div>
              <h1 style={{ fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 700, color: C.mist, margin: "0 0 20px", letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                Acceptance Rate<br /><span style={{ color: C.sky }}>&amp; What Stood Out</span>
              </h1>
              <p style={{ fontSize: 13, color: C.orchid, lineHeight: 1.8, maxWidth: 580, margin: 0 }}>
                Published after every completed grant cycle. Applicants deserve to understand
                not just whether they were funded, but why — and what patterns the committee
                observed across the entire pool. This page is for future applicants as much
                as past ones.
              </p>
            </div>

            {/* Key rate stat */}
            <div style={{ textAlign: "center", minWidth: 140 }}>
              <p style={{
                fontSize: isEmpty ? 40 : 56, fontWeight: 700,
                color: isEmpty ? C.tealGrey : C.neonMint,
                margin: "0 0 6px", lineHeight: 1,
                fontFamily: "Hanken Grotesk, sans-serif",
              }}>
                {isEmpty ? "—" : `${overallRate?.toFixed(1)}%`}
              </p>
              <p style={{ fontSize: 10, color: C.tealGrey, margin: 0, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "Hanken Grotesk, sans-serif" }}>
                {isEmpty ? "Overall rate" : "Overall acceptance rate"}
              </p>
              {isEmpty && (
                <p style={{ fontSize: 10, color: C.orchid, margin: "8px 0 0", fontFamily: "Hanken Grotesk, sans-serif" }}>
                  First cycle Q2 2026
                </p>
              )}
            </div>
          </div>

          {/* Summary stats strip — only when data exists */}
          {!isEmpty && (
            <div style={{ display: "flex", gap: 32, marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(163,201,226,0.15)", flexWrap: "wrap" }}>
              {[
                { label: "Total Applications",  value: CYCLES.reduce((s, c) => s + c.received, 0) },
                { label: "Cycles Completed",    value: completedCycles.length },
                { label: "Total Funded",        value: CYCLES.reduce((s, c) => s + c.funded, 0) },
                { label: "Total Awarded",       value: `$${CYCLES.reduce((s, c) => s + c.totalAwarded, 0).toLocaleString()}` },
              ].map(s => (
                <div key={s.label}>
                  <p style={{ fontSize: 22, fontWeight: 700, color: C.mist, margin: "0 0 4px", fontFamily: "Hanken Grotesk, sans-serif", lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontSize: 9, color: C.tealGrey, margin: 0, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "Hanken Grotesk, sans-serif" }}>{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 32px 80px" }}>

        {/* ── Funnel ── */}
        <SectionRule label={isEmpty ? "01 — How Applications Move Through Our Process" : "01 — Application Funnel — All Cycles Combined"} />

        {isEmpty && (
          <p style={{ fontSize: 13, color: C.tealGrey, lineHeight: 1.8, marginBottom: 32, maxWidth: 640 }}>
            No cycles have completed yet. The funnel below shows our expected drop-off rates
            based on our criteria design and sector benchmarks. It will be replaced with real
            data after our first cycle closes in June 2026.
          </p>
        )}

        <div ref={funnelRef} style={{ padding: "36px 0" }}>
          <FunnelViz stages={funnelStages} animate={funnelVisible} />
        </div>

        {/* ── Rate chart (data-conditional) ── */}
        {!isEmpty && (
          <>
            <SectionRule label="02 — Rate Over Time" />
            <RateChart cycles={completedCycles} />
          </>
        )}

        {/* ── Standing guidance ── */}
        <SectionRule label={isEmpty ? "02 — What We're Looking For" : "03 — What We're Looking For"} />
        <p style={{ fontSize: 13, color: C.tealGrey, lineHeight: 1.8, marginBottom: 28, maxWidth: 680 }}>
          Before our first cycle runs, we're publishing the patterns we expect to reward and
          the patterns we expect to penalize — based on our criteria and our values. After each
          cycle, this section will be updated with observations from the actual committee review.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {STANDING_GUIDANCE.map((item, i) => <GuidanceCard key={i} item={item} />)}
        </div>

        {/* ── Cycle-by-cycle ── */}
        <SectionRule label={`${isEmpty ? "03" : "04"} — Cycle-by-Cycle Data`} />

        {completedCycles.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {completedCycles.map(cycle => <CycleCard key={cycle.id} cycle={cycle} />)}
          </div>
        ) : (
          <div style={{
            border: `1px solid ${C.slateInk}15`,
            borderRadius: 2, padding: "32px",
            background: "white", marginBottom: 32,
            textAlign: "center",
          }}>
            <p style={{ fontSize: 13, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", margin: "0 0 8px" }}>
              No cycles completed yet.
            </p>
            <p style={{ fontSize: 11, color: C.orchid, fontFamily: "Hanken Grotesk, sans-serif", margin: 0 }}>
              Data from our Q2 2026 cycle will appear here by July 2026.
            </p>
          </div>
        )}

        {/* ── Upcoming cycles ── */}
        <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 16px", fontFamily: "Hanken Grotesk, sans-serif" }}>
          Upcoming Cycles
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
          {UPCOMING.map(cycle => <UpcomingCycleCard key={cycle.id} cycle={cycle} />)}
        </div>

        {/* ── Commitment to publishing ── */}
        <div style={{
          background: C.navy, borderRadius: 2, padding: "32px",
          borderLeft: `3px solid ${C.neonMint}`,
        }}>
          <p style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 12px", fontFamily: "Hanken Grotesk, sans-serif" }}>
            Our Commitment to Applicants
          </p>
          <p style={{ fontSize: 13, color: C.orchid, lineHeight: 1.85, margin: "0 0 20px", maxWidth: 680 }}>
            Within 45 days of each cycle closing, we will publish the acceptance rate,
            application volume, funded count, and committee observations on this page.
            We will not wait for the next cycle to open before publishing the previous
            cycle's data. Applicants who were declined are owed that information promptly.
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <a href="/criteria" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Read the scoring rubric →</a>
            <a href="/transparency" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Transparency Dashboard →</a>
            <a href="/grants" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Grant Registry →</a>
          </div>
        </div>

      </div>
    </div>
  );
}
