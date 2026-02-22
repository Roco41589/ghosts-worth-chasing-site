import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer } from "recharts";

// ── GWC Design Tokens ──────────────────────────────────────────────
const C = {
  navy:      "#0B1D3A",
  mist:      "#F6F9FC",
  sky:       "#A3C9E2",
  tealGrey:  "#7CAAB0",
  slateInk:  "#1A2E3B",
  neonMint:  "#A8FFE4",
  orchid:    "#C6C9D1",
};

// ── Mock Data ──────────────────────────────────────────────────────
const allocationData = [
  { name: "Endowment",            value: 70, color: C.sky },
  { name: "Operating Expenses",   value: 10, color: C.tealGrey },
  { name: "Organizational Grants",value: 10, color: C.orchid },
  { name: "Individual Support",   value: 10, color: C.neonMint },
];

const grantsByArea = [
  { area: "Individual Support", grants: 0, target: 4 },
  { area: "Organizational",     grants: 0, target: 2 },
  { area: "Endowment",          grants: 0, target: 1 },
];

const cycleHistory = [
  { cycle: "Q1 2026", applications: 0, funded: 0, rate: 0 },
];

const recentDecisions = [
  { date: "Sep 2024", title: "Foundation incorporated, initial $7,500 contribution made", type: "Founding" },
  { date: "Sep 2024", title: "501(c)(3) application filed with IRS", type: "Legal" },
  { date: "Jan 2025", title: "Grant criteria framework drafted for board review", type: "Grantmaking" },
  { date: "Feb 2026", title: "Transparency dashboard and infrastructure buildout initiated", type: "Operations" },
];

const recentGrants = [
  { recipient: "—", amount: "—", area: "—", date: "No grants awarded yet", status: "Pending first cycle" },
];

const documents = [
  { title: "Articles of Incorporation", year: "2024", status: "Filed", available: false },
  { title: "IRS Form 1023 (501c3 Application)", year: "2024", status: "Pending Determination", available: false },
  { title: "Form 990-PF", year: "2025", status: "Not yet due", available: false },
];

// ── Helpers ────────────────────────────────────────────────────────
const daysSince = (dateStr) => {
  const start = new Date(dateStr);
  const now = new Date("2026-02-20");
  return Math.floor((now - start) / (1000 * 60 * 60 * 24));
};

const FOUNDING_DATE = "2024-09-01";

// ── Sub-components ─────────────────────────────────────────────────

function StatusPill({ label, value, variant = "default" }) {
  const variants = {
    default:  { bg: "rgba(163,201,226,0.15)", border: C.sky,      text: C.sky },
    pending:  { bg: "rgba(198,201,209,0.15)", border: C.orchid,   text: C.orchid },
    active:   { bg: "rgba(168,255,228,0.15)", border: C.neonMint, text: C.neonMint },
    warning:  { bg: "rgba(124,170,176,0.15)", border: C.tealGrey, text: C.tealGrey },
  };
  const v = variants[variant];
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 4,
      padding: "10px 18px",
      background: v.bg,
      border: `1px solid ${v.border}`,
      borderRadius: 2,
      minWidth: 160,
    }}>
      <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: v.border, fontFamily: "Hanken Grotesk, sans-serif" }}>{label}</span>
      <span style={{ fontSize: 13, color: C.mist, fontFamily: "Hanken Grotesk, sans-serif", fontWeight: 500 }}>{value}</span>
    </div>
  );
}

function StatCard({ label, value, sub, accent = false }) {
  return (
    <div style={{
      background: "rgba(246,249,252,0.04)",
      border: `1px solid rgba(163,201,226,0.2)`,
      borderRadius: 2,
      padding: "24px 20px",
      display: "flex", flexDirection: "column", gap: 8,
      position: "relative",
      overflow: "hidden",
    }}>
      {accent && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: C.neonMint,
        }} />
      )}
      <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{label}</span>
      <span style={{ fontSize: 32, fontWeight: 700, color: accent ? C.neonMint : C.mist, fontFamily: "Hanken Grotesk, sans-serif", lineHeight: 1 }}>{value}</span>
      {sub && <span style={{ fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{sub}</span>}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12, marginBottom: 20,
    }}>
      <span style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: "rgba(163,201,226,0.2)" }} />
    </div>
  );
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: C.slateInk, border: `1px solid rgba(163,201,226,0.3)`, padding: "8px 14px", borderRadius: 2 }}>
      <span style={{ color: C.mist, fontSize: 12, fontFamily: "Hanken Grotesk, sans-serif" }}>
        {payload[0].name}: {payload[0].value}%
      </span>
    </div>
  );
}

function AllocationLegend({ data }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, justifyContent: "center" }}>
      {data.map(d => (
        <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 10, height: 10, borderRadius: 1, background: d.color, flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: C.orchid, fontFamily: "Hanken Grotesk, sans-serif", flex: 1 }}>{d.name}</span>
          <span style={{ fontSize: 12, color: C.mist, fontFamily: "Hanken Grotesk, sans-serif", fontWeight: 600 }}>{d.value}%</span>
        </div>
      ))}
    </div>
  );
}

function DecisionFeed({ items }) {
  const typeColors = {
    Founding:    C.neonMint,
    Legal:       C.sky,
    Grantmaking: C.tealGrey,
    Operations:  C.orchid,
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 16, position: "relative" }}>
          {/* timeline spine */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20, flexShrink: 0 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: typeColors[item.type] || C.sky, flexShrink: 0, marginTop: 4 }} />
            {i < items.length - 1 && <div style={{ width: 1, flex: 1, background: "rgba(163,201,226,0.2)", marginTop: 4, minHeight: 32 }} />}
          </div>
          <div style={{ paddingBottom: 24 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 4 }}>
              <span style={{ fontSize: 10, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", letterSpacing: "0.08em" }}>{item.date}</span>
              <span style={{
                fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase",
                color: typeColors[item.type] || C.sky,
                fontFamily: "Hanken Grotesk, sans-serif",
                border: `1px solid ${typeColors[item.type] || C.sky}`,
                padding: "1px 6px", borderRadius: 2,
              }}>{item.type}</span>
            </div>
            <p style={{ fontSize: 12, color: C.mist, fontFamily: "Hanken Grotesk, sans-serif", margin: 0, lineHeight: 1.5 }}>{item.title}</p>
          </div>
        </div>
      ))}
      <div style={{ marginTop: 4 }}>
        <a href="#" style={{ fontSize: 11, color: C.sky, fontFamily: "Hanken Grotesk, sans-serif", letterSpacing: "0.08em", textDecoration: "none" }}>
          View full decision log →
        </a>
      </div>
    </div>
  );
}

function DocumentRow({ doc }) {
  const statusColor = doc.status === "Filed" ? C.neonMint : doc.status === "Pending Determination" ? C.orchid : C.tealGrey;
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 0",
      borderBottom: "1px solid rgba(163,201,226,0.1)",
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={{ fontSize: 12, color: C.mist, fontFamily: "Hanken Grotesk, sans-serif" }}>{doc.title}</span>
        <span style={{ fontSize: 10, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{doc.year}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 10, color: statusColor, fontFamily: "Hanken Grotesk, sans-serif", letterSpacing: "0.08em" }}>{doc.status}</span>
        {doc.available ? (
          <a href="#" style={{ fontSize: 10, color: C.sky, fontFamily: "Hanken Grotesk, sans-serif", textDecoration: "none", border: `1px solid ${C.sky}`, padding: "3px 10px", borderRadius: 2 }}>Download</a>
        ) : (
          <span style={{ fontSize: 10, color: "rgba(163,201,226,0.3)", fontFamily: "Hanken Grotesk, sans-serif", border: "1px solid rgba(163,201,226,0.15)", padding: "3px 10px", borderRadius: 2 }}>—</span>
        )}
      </div>
    </div>
  );
}

function BoardGauge({ filled, target }) {
  const pct = (filled / target) * 100;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase" }}>Board Composition</span>
        <span style={{ fontSize: 11, color: C.mist, fontFamily: "Hanken Grotesk, sans-serif" }}>{filled} of {target} seats filled</span>
      </div>
      <div style={{ height: 4, background: "rgba(163,201,226,0.15)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: C.sky, borderRadius: 2, transition: "width 1s ease" }} />
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {Array.from({ length: target }).map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 24, borderRadius: 2,
            background: i < filled ? "rgba(163,201,226,0.25)" : "rgba(163,201,226,0.06)",
            border: `1px solid ${i < filled ? C.sky : "rgba(163,201,226,0.15)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {i < filled && <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.sky }} />}
          </div>
        ))}
      </div>
      <span style={{ fontSize: 10, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>Recruiting 3–5 independent members post-determination</span>
    </div>
  );
}

// ── Main Dashboard ─────────────────────────────────────────────────
export default function TransparencyDashboard() {
  const [mounted, setMounted] = useState(false);
  const [lastUpdated] = useState("February 20, 2026");

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  const days = daysSince(FOUNDING_DATE);

  return (
    <div style={{
      background: C.navy,
      minHeight: "100vh",
      fontFamily: "Hanken Grotesk, sans-serif",
      color: C.mist,
      padding: "0",
    }}>
      {/* Subtle grid texture */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(163,201,226,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(163,201,226,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "48px 32px" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 40, opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 8px 0" }}>
                Ghosts Worth Chasing — Private Foundation
              </p>
              <h1 style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 700,
                color: C.mist,
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}>
                Transparency<br />
                <span style={{ color: C.sky }}>Dashboard</span>
              </h1>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 10, color: C.tealGrey, margin: "0 0 4px 0", letterSpacing: "0.1em" }}>LAST UPDATED</p>
              <p style={{ fontSize: 12, color: C.orchid, margin: 0 }}>{lastUpdated}</p>
              <p style={{ fontSize: 10, color: C.tealGrey, margin: "8px 0 0 0" }}>
                All data reflects actual foundation activity.<br />No rounding, no projections.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 24, height: 1, background: `linear-gradient(90deg, ${C.sky}, transparent)` }} />
        </div>

        {/* ── Status Strip ── */}
        <div style={{
          display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40,
          opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.1s",
        }}>
          <StatusPill label="501(c)(3) Status"   value="Determination Pending" variant="pending" />
          <StatusPill label="Current Cycle"       value="Pre-Operational"       variant="warning" />
          <StatusPill label="Foundation Age"      value={`${days} days`}        variant="default" />
          <StatusPill label="Grant Activity"      value="First cycle: Q2 2026"  variant="default" />
          <StatusPill label="Fiscal Year"         value="Calendar Year"         variant="default" />
        </div>

        {/* ── Stat Cards ── */}
        <div style={{ marginBottom: 40, opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>
          <SectionLabel>Key Indicators</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
            <StatCard label="Total Capital Deployed" value="$0"    sub="First grants planned Q2 2026" />
            <StatCard label="Grants Awarded"         value="0"     sub="Across all program areas" />
            <StatCard label="Individuals Supported"  value="0"     accent={true} sub="The ghost counter" />
            <StatCard label="Orgs Supported"         value="0"     sub="Organizational grants" />
            <StatCard label="Acceptance Rate"        value="—"     sub="No cycles completed yet" />
            <StatCard label="Avg. Grant Size"        value="—"     sub="Est. $500–$25k individual" />
            <StatCard label="Days to Decision"       value="—"     sub="Target: 90 days" />
            <StatCard label="Initial Endowment"      value="$7,500" sub="Founder contribution, Sep 2024" />
          </div>
        </div>

        {/* ── Charts Row ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40,
          opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.3s",
        }}>

          {/* Allocation Donut */}
          <div style={{ background: "rgba(246,249,252,0.03)", border: "1px solid rgba(163,201,226,0.15)", borderRadius: 2, padding: "24px" }}>
            <SectionLabel>Capital Allocation Model</SectionLabel>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie data={allocationData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value" strokeWidth={0}>
                    {allocationData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <AllocationLegend data={allocationData} />
            </div>
            <p style={{ fontSize: 10, color: C.tealGrey, margin: "16px 0 0 0", lineHeight: 1.6 }}>
              Capital allocation is fixed by founding policy. Grantmaking begins upon 501(c)(3) determination.
            </p>
          </div>

          {/* Cycle Funnel — placeholder */}
          <div style={{ background: "rgba(246,249,252,0.03)", border: "1px solid rgba(163,201,226,0.15)", borderRadius: 2, padding: "24px" }}>
            <SectionLabel>Application Funnel</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
              {[
                { stage: "Applications Received", count: "—", width: "100%", color: "rgba(163,201,226,0.3)" },
                { stage: "Advanced to Review",    count: "—", width: "70%",  color: "rgba(163,201,226,0.45)" },
                { stage: "Final Consideration",   count: "—", width: "45%",  color: "rgba(163,201,226,0.6)" },
                { stage: "Funded",                count: "—", width: "25%",  color: C.sky },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: 11, color: C.orchid, fontFamily: "Hanken Grotesk, sans-serif" }}>{s.stage}</span>
                    <span style={{ fontSize: 11, color: C.mist, fontFamily: "Hanken Grotesk, sans-serif", fontWeight: 600 }}>{s.count}</span>
                  </div>
                  <div style={{ height: 6, background: "rgba(163,201,226,0.08)", borderRadius: 1 }}>
                    <div style={{ height: "100%", width: s.width, background: s.color, borderRadius: 1 }} />
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 10, color: C.tealGrey, margin: "20px 0 0 0", lineHeight: 1.6 }}>
              Funnel data populates after first grant cycle closes. First cycle anticipated Q2 2026.
            </p>
          </div>
        </div>

        {/* ── Board + Governance ── */}
        <div style={{
          background: "rgba(246,249,252,0.03)", border: "1px solid rgba(163,201,226,0.15)", borderRadius: 2,
          padding: "24px", marginBottom: 20,
          opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.35s",
        }}>
          <SectionLabel>Institutional Health</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <BoardGauge filled={2} target={7} />
            <div>
              <p style={{ fontSize: 10, color: C.tealGrey, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 12px 0" }}>Governance Checklist</p>
              {[
                { label: "Articles of Incorporation", done: true },
                { label: "IRS 501(c)(3) Application Filed", done: true },
                { label: "Founding Contribution Made", done: true },
                { label: "501(c)(3) Determination Received", done: false },
                { label: "Grantmaking Criteria Published", done: false },
                { label: "First 990-PF Filed", done: false },
                { label: "Independent Board Seated", done: false },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", borderBottom: "1px solid rgba(163,201,226,0.08)" }}>
                  <div style={{
                    width: 14, height: 14, borderRadius: 1, flexShrink: 0,
                    background: item.done ? "rgba(168,255,228,0.2)" : "transparent",
                    border: `1px solid ${item.done ? C.neonMint : "rgba(163,201,226,0.25)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {item.done && <span style={{ fontSize: 9, color: C.neonMint }}>✓</span>}
                  </div>
                  <span style={{ fontSize: 11, color: item.done ? C.mist : C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Decision Log + 990 Room ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20,
          opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.4s",
        }}>
          <div style={{ background: "rgba(246,249,252,0.03)", border: "1px solid rgba(163,201,226,0.15)", borderRadius: 2, padding: "24px" }}>
            <SectionLabel>Decision Log — Recent</SectionLabel>
            <DecisionFeed items={recentDecisions} />
          </div>

          <div style={{ background: "rgba(246,249,252,0.03)", border: "1px solid rgba(163,201,226,0.15)", borderRadius: 2, padding: "24px" }}>
            <SectionLabel>990 Reading Room</SectionLabel>
            {documents.map((doc, i) => <DocumentRow key={i} doc={doc} />)}
            <p style={{ fontSize: 10, color: C.tealGrey, margin: "16px 0 0 0", lineHeight: 1.6 }}>
              All public filings are hosted directly by the foundation. Documents added as filed — no delays.
            </p>
            <div style={{ marginTop: 12 }}>
              <a href="#" style={{ fontSize: 11, color: C.sky, fontFamily: "Hanken Grotesk, sans-serif", letterSpacing: "0.08em", textDecoration: "none" }}>
                View full document archive →
              </a>
            </div>
          </div>
        </div>

        {/* ── Grant Registry Preview ── */}
        <div style={{
          background: "rgba(246,249,252,0.03)", border: "1px solid rgba(163,201,226,0.15)", borderRadius: 2,
          padding: "24px", marginBottom: 20,
          opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.45s",
        }}>
          <SectionLabel>Grant Registry — Most Recent</SectionLabel>
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: 0,
          }}>
            {["Recipient", "Amount", "Program Area", "Date", "Status"].map(h => (
              <div key={h} style={{ padding: "8px 12px", borderBottom: `1px solid rgba(163,201,226,0.2)` }}>
                <span style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: C.tealGrey }}>{h}</span>
              </div>
            ))}
            {["No grants awarded yet", "—", "—", "—", "Pending first cycle"].map((v, i) => (
              <div key={i} style={{ padding: "12px 12px", borderBottom: "1px solid rgba(163,201,226,0.08)" }}>
                <span style={{ fontSize: 12, color: i === 0 ? C.orchid : C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 10, color: C.tealGrey, margin: 0 }}>Registry updates within 30 days of each grant award.</p>
            <a href="#" style={{ fontSize: 11, color: C.sky, fontFamily: "Hanken Grotesk, sans-serif", letterSpacing: "0.08em", textDecoration: "none" }}>
              Full grant registry →
            </a>
          </div>
        </div>

        {/* ── Footer note ── */}
        <div style={{
          marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(163,201,226,0.15)",
          opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease 0.5s",
        }}>
          <p style={{ fontSize: 11, color: C.tealGrey, lineHeight: 1.8, maxWidth: 600, margin: 0 }}>
            This dashboard reflects the actual operational state of Ghosts Worth Chasing as of the date above.
            Data is updated manually following each significant event. No figures are projected or estimated.
            For questions, contact <span style={{ color: C.sky }}>roconnor@ghostsworthchasing.org</span>.
          </p>
        </div>

      </div>
    </div>
  );
}
