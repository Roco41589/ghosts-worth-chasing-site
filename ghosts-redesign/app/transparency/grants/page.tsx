import { useState, useEffect, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

// ── GWC Design Tokens ──────────────────────────────────────────────
const C = {
  navy:     "#0B1D3A",
  mist:     "#F6F9FC",
  sky:      "#A3C9E2",
  tealGrey: "#7CAAB0",
  slateInk: "#1A2E3B",
  neonMint: "#A8FFE4",
  orchid:   "#C6C9D1",
  red:      "#C47A7A",
};

// ── Grant Data Schema ──────────────────────────────────────────────
// This is the data file structure. Empty now — populates after first cycle.
const GRANTS = [
  // Example structure (commented out until real grants exist):
  // {
  //   id: "GWC-2026-001",
  //   recipient: "Jane Doe",
  //   type: "individual",         // "individual" | "organizational"
  //   area: "Individual Support",
  //   amount: 7500,
  //   purpose: "Career transition support — retraining stipend",
  //   cycle: "Q2 2026",
  //   awardDate: "2026-06-15",
  //   status: "Active",           // "Active" | "Closed" | "Renewed"
  //   duration: "One-time",
  // },
];

// Placeholder rows to show the schema while empty
const PLACEHOLDER_GRANTS = [
  {
    id: "—",
    recipient: "No grants awarded yet",
    type: "—",
    area: "—",
    amount: null,
    purpose: "First grant cycle anticipated Q2 2026",
    cycle: "—",
    awardDate: "—",
    status: "Pending",
    duration: "—",
    isPlaceholder: true,
  },
];

const AREA_COLORS = {
  "Individual Support":    C.sky,
  "Organizational":        C.tealGrey,
  "Capacity Building":     C.orchid,
};

const STATUS_COLORS = {
  "Active":   C.neonMint,
  "Closed":   C.orchid,
  "Renewed":  C.sky,
  "Pending":  C.tealGrey,
};

const FILTER_OPTIONS = {
  area:   ["All Areas", "Individual Support", "Organizational", "Capacity Building"],
  cycle:  ["All Cycles", "Q2 2026", "Q3 2026", "Q4 2026"],
  status: ["All Statuses", "Active", "Closed", "Renewed"],
  type:   ["All Types", "Individual", "Organizational"],
};

// ── Helpers ────────────────────────────────────────────────────────
const fmt = (n) => n == null ? "—" : `$${n.toLocaleString()}`;

const computeStats = (grants) => {
  if (!grants.length) return { total: 0, count: 0, avgSize: 0, individuals: 0, orgs: 0 };
  const total = grants.reduce((s, g) => s + (g.amount || 0), 0);
  const individuals = grants.filter(g => g.type === "individual").length;
  const orgs = grants.filter(g => g.type === "organizational").length;
  return {
    total,
    count: grants.length,
    avgSize: Math.round(total / grants.length),
    individuals,
    orgs,
  };
};

const computeAreaBreakdown = (grants) => {
  const map = {};
  grants.forEach(g => {
    if (!g.area || g.area === "—") return;
    map[g.area] = (map[g.area] || 0) + (g.amount || 0);
  });
  return Object.entries(map).map(([name, value]) => ({ name, value, color: AREA_COLORS[name] || C.orchid }));
};

// ── Components ─────────────────────────────────────────────────────

function SectionRule({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "48px 0 24px" }}>
      <span style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", flexShrink: 0 }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${C.slateInk}30, transparent)` }} />
    </div>
  );
}

function StatCard({ label, value, sub, highlight }) {
  return (
    <div style={{
      border: `1px solid ${highlight ? C.neonMint + "50" : C.slateInk + "20"}`,
      borderTop: `2px solid ${highlight ? C.neonMint : C.sky}`,
      borderRadius: 2, padding: "20px 18px",
      background: highlight ? `${C.neonMint}06` : "transparent",
    }}>
      <p style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 8px", fontFamily: "Hanken Grotesk, sans-serif" }}>{label}</p>
      <p style={{ fontSize: 28, fontWeight: 700, color: highlight ? C.neonMint : C.slateInk, margin: "0 0 4px", fontFamily: "Hanken Grotesk, sans-serif", lineHeight: 1 }}>{value}</p>
      {sub && <p style={{ fontSize: 11, color: C.tealGrey, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{sub}</p>}
    </div>
  );
}

function FilterPill({ label, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      padding: "6px 14px",
      border: `1px solid ${active ? C.sky : C.slateInk + "30"}`,
      background: active ? `${C.sky}18` : "transparent",
      borderRadius: 2, cursor: "pointer",
      fontSize: 11, color: active ? C.slateInk : C.tealGrey,
      fontFamily: "Hanken Grotesk, sans-serif",
      letterSpacing: "0.04em",
      transition: "all 0.15s ease",
    }}>{label}</button>
  );
}

function SelectFilter({ label, options, value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{label}</span>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          padding: "8px 12px",
          border: `1px solid ${C.slateInk}25`,
          borderRadius: 2, background: C.mist,
          color: C.slateInk, fontSize: 12,
          fontFamily: "Hanken Grotesk, sans-serif",
          cursor: "pointer", outline: "none",
          appearance: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%237CAAB0' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 10px center",
          paddingRight: 28,
          minWidth: 160,
        }}
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function GrantRow({ grant, index }) {
  const [hovered, setHovered] = useState(false);

  if (grant.isPlaceholder) {
    return (
      <tr>
        <td colSpan={8} style={{ padding: "32px 16px", textAlign: "center" }}>
          <p style={{ fontSize: 13, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", margin: "0 0 6px" }}>
            No grants have been awarded yet.
          </p>
          <p style={{ fontSize: 11, color: C.orchid, fontFamily: "Hanken Grotesk, sans-serif", margin: 0 }}>
            First grant cycle anticipated Q2 2026. This registry will update within 30 days of each award.
          </p>
        </td>
      </tr>
    );
  }

  const statusColor = STATUS_COLORS[grant.status] || C.tealGrey;
  const areaColor = AREA_COLORS[grant.area] || C.orchid;

  return (
    <tr
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${C.sky}08` : index % 2 === 0 ? "transparent" : `${C.slateInk}04`,
        transition: "background 0.15s ease",
      }}
    >
      <td style={{ padding: "14px 16px", borderBottom: `1px solid ${C.slateInk}10` }}>
        <span style={{ fontSize: 10, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", letterSpacing: "0.06em" }}>{grant.id}</span>
      </td>
      <td style={{ padding: "14px 16px", borderBottom: `1px solid ${C.slateInk}10` }}>
        <span style={{ fontSize: 12, color: C.slateInk, fontFamily: "Hanken Grotesk, sans-serif", fontWeight: 500 }}>{grant.recipient}</span>
      </td>
      <td style={{ padding: "14px 16px", borderBottom: `1px solid ${C.slateInk}10` }}>
        <span style={{
          fontSize: 10, color: areaColor,
          fontFamily: "Hanken Grotesk, sans-serif",
          border: `1px solid ${areaColor}40`,
          padding: "2px 8px", borderRadius: 2,
          whiteSpace: "nowrap",
        }}>{grant.area}</span>
      </td>
      <td style={{ padding: "14px 16px", borderBottom: `1px solid ${C.slateInk}10`, textAlign: "right" }}>
        <span style={{ fontSize: 13, color: C.slateInk, fontFamily: "Hanken Grotesk, sans-serif", fontWeight: 600 }}>{fmt(grant.amount)}</span>
      </td>
      <td style={{ padding: "14px 16px", borderBottom: `1px solid ${C.slateInk}10` }}>
        <span style={{ fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{grant.purpose}</span>
      </td>
      <td style={{ padding: "14px 16px", borderBottom: `1px solid ${C.slateInk}10` }}>
        <span style={{ fontSize: 11, color: C.slateInk, fontFamily: "Hanken Grotesk, sans-serif" }}>{grant.cycle}</span>
      </td>
      <td style={{ padding: "14px 16px", borderBottom: `1px solid ${C.slateInk}10` }}>
        <span style={{ fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{grant.awardDate}</span>
      </td>
      <td style={{ padding: "14px 16px", borderBottom: `1px solid ${C.slateInk}10` }}>
        <span style={{
          fontSize: 10, color: statusColor,
          fontFamily: "Hanken Grotesk, sans-serif",
          letterSpacing: "0.08em",
        }}>{grant.status}</span>
      </td>
    </tr>
  );
}

function SortHeader({ label, field, sortField, sortDir, onSort }) {
  const active = sortField === field;
  return (
    <th
      onClick={() => onSort(field)}
      style={{
        padding: "12px 16px",
        textAlign: field === "amount" ? "right" : "left",
        cursor: "pointer",
        background: active ? `${C.sky}10` : "transparent",
        userSelect: "none",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{
        fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase",
        color: active ? C.slateInk : C.tealGrey,
        fontFamily: "Hanken Grotesk, sans-serif",
        display: "flex", alignItems: "center", gap: 4,
        justifyContent: field === "amount" ? "flex-end" : "flex-start",
      }}>
        {label}
        {active && <span style={{ color: C.sky, fontSize: 8 }}>{sortDir === "asc" ? "↑" : "↓"}</span>}
        {!active && <span style={{ color: C.orchid + "60", fontSize: 8 }}>↕</span>}
      </span>
    </th>
  );
}

function CustomPieTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: C.navy, border: `1px solid rgba(163,201,226,0.25)`, padding: "8px 14px", borderRadius: 2 }}>
      <p style={{ fontSize: 11, color: C.mist, margin: "0 0 2px", fontFamily: "Hanken Grotesk, sans-serif" }}>{payload[0].name}</p>
      <p style={{ fontSize: 13, color: C.sky, margin: 0, fontFamily: "Hanken Grotesk, sans-serif", fontWeight: 600 }}>{fmt(payload[0].value)}</p>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────
export default function GrantRegistry() {
  const [mounted, setMounted] = useState(false);
  const [filters, setFilters] = useState({ area: "All Areas", cycle: "All Cycles", status: "All Statuses", type: "All Types" });
  const [sortField, setSortField] = useState("awardDate");
  const [sortDir, setSortDir] = useState("desc");
  const [search, setSearch] = useState("");

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const handleSort = (field) => {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("desc"); }
  };

  const filtered = useMemo(() => {
    let g = [...GRANTS];
    if (filters.area !== "All Areas") g = g.filter(x => x.area === filters.area);
    if (filters.cycle !== "All Cycles") g = g.filter(x => x.cycle === filters.cycle);
    if (filters.status !== "All Statuses") g = g.filter(x => x.status === filters.status);
    if (filters.type !== "All Types") g = g.filter(x => x.type === filters.type.toLowerCase());
    if (search) g = g.filter(x =>
      x.recipient.toLowerCase().includes(search.toLowerCase()) ||
      x.purpose?.toLowerCase().includes(search.toLowerCase())
    );
    g.sort((a, b) => {
      let av = a[sortField], bv = b[sortField];
      if (typeof av === "number") return sortDir === "asc" ? av - bv : bv - av;
      return sortDir === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
    });
    return g;
  }, [filters, sortField, sortDir, search]);

  const displayGrants = filtered.length > 0 ? filtered : PLACEHOLDER_GRANTS;
  const stats = computeStats(GRANTS);
  const areaBreakdown = computeAreaBreakdown(GRANTS);
  const isEmpty = GRANTS.length === 0;

  // Running total as % of annual target ($5,000 × 4 learning grants = $20,000 first year)
  const annualTarget = 20000;
  const pctOfTarget = isEmpty ? 0 : Math.min(100, (stats.total / annualTarget) * 100);

  return (
    <div style={{ background: C.mist, minHeight: "100vh", fontFamily: "Hanken Grotesk, sans-serif" }}>

      {/* ── Masthead ── */}
      <div style={{
        background: C.navy, padding: "64px 32px 48px",
        opacity: mounted ? 1 : 0, transition: "opacity 0.5s ease",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 16px", fontFamily: "Hanken Grotesk, sans-serif" }}>
            Ghosts Worth Chasing — Private Foundation
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <div>
              <h1 style={{ fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 700, color: C.mist, margin: "0 0 16px", letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                Grant<br /><span style={{ color: C.sky }}>Registry</span>
              </h1>
              <p style={{ fontSize: 13, color: C.orchid, lineHeight: 1.75, maxWidth: 560, margin: 0 }}>
                A complete, unedited record of every grant awarded by Ghosts Worth Chasing.
                Updated within 30 days of each award. No grants are omitted, redacted, or summarized.
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 6px" }}>Registry Status</p>
              <p style={{ fontSize: 12, color: C.neonMint, margin: "0 0 4px", fontFamily: "Hanken Grotesk, sans-serif" }}>Pre-operational</p>
              <p style={{ fontSize: 10, color: C.tealGrey, margin: 0 }}>Last updated: Feb 20, 2026</p>
            </div>
          </div>

          {/* Running total bar */}
          <div style={{ marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(163,201,226,0.15)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>
                2026 Grantmaking Progress
              </span>
              <span style={{ fontSize: 11, color: C.orchid, fontFamily: "Hanken Grotesk, sans-serif" }}>
                {fmt(stats.total)} of {fmt(annualTarget)} target
              </span>
            </div>
            <div style={{ height: 8, background: "rgba(163,201,226,0.12)", borderRadius: 1, overflow: "hidden" }}>
              <div style={{
                height: "100%", width: `${pctOfTarget}%`,
                background: `linear-gradient(90deg, ${C.sky}, ${C.neonMint})`,
                borderRadius: 1, transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }} />
            </div>
            <p style={{ fontSize: 10, color: C.tealGrey, margin: "8px 0 0", fontFamily: "Hanken Grotesk, sans-serif" }}>
              Target based on four $5,000 learning grants planned for 2026 — designed to develop grantmaking process, not maximize impact.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 80px" }}>

        {/* ── Stats ── */}
        <SectionRule label="Summary Statistics" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 8 }}>
          <StatCard label="Total Granted"        value={isEmpty ? "$0" : fmt(stats.total)}      sub="Across all program areas" highlight={!isEmpty} />
          <StatCard label="Grants Awarded"       value={isEmpty ? "0" : stats.count}            sub="Since foundation founding" />
          <StatCard label="Individuals Supported" value={isEmpty ? "0" : stats.individuals}     sub="Individual support grants" />
          <StatCard label="Organizations Supported" value={isEmpty ? "0" : stats.orgs}          sub="Organizational grants" />
          <StatCard label="Average Grant Size"   value={isEmpty ? "—" : fmt(stats.avgSize)}     sub="Across all grant types" />
          <StatCard label="Acceptance Rate"      value="—"                                       sub="No cycles completed" />
        </div>

        {/* ── Charts (only when data exists) ── */}
        {!isEmpty && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 32 }}>
            <div style={{ border: `1px solid ${C.slateInk}18`, borderRadius: 2, padding: "24px" }}>
              <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 20px" }}>Grants by Program Area</p>
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <ResponsiveContainer width={140} height={140}>
                  <PieChart>
                    <Pie data={areaBreakdown} cx="50%" cy="50%" innerRadius={38} outerRadius={60} paddingAngle={3} dataKey="value" strokeWidth={0}>
                      {areaBreakdown.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                    </Pie>
                    <Tooltip content={<CustomPieTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ flex: 1 }}>
                  {areaBreakdown.map(d => (
                    <div key={d.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: `1px solid ${C.slateInk}10` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 8, height: 8, borderRadius: 1, background: d.color }} />
                        <span style={{ fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{d.name}</span>
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 600, color: C.slateInk, fontFamily: "Hanken Grotesk, sans-serif" }}>{fmt(d.value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ border: `1px solid ${C.slateInk}18`, borderRadius: 2, padding: "24px" }}>
              <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 20px" }}>Grants Over Time</p>
              <ResponsiveContainer width="100%" height={140}>
                <BarChart data={[]} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={`${C.slateInk}12`} />
                  <XAxis dataKey="cycle" tick={{ fontSize: 10, fill: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }} />
                  <YAxis tick={{ fontSize: 10, fill: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }} />
                  <Bar dataKey="total" fill={C.sky} radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* ── Filters ── */}
        <SectionRule label="Grant Registry" />

        <div style={{
          background: "white", border: `1px solid ${C.slateInk}15`,
          borderRadius: 2, padding: "20px 24px", marginBottom: 0,
        }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-end" }}>
            {/* Search */}
            <div style={{ flex: 1, minWidth: 200, display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>Search</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Recipient name or purpose..."
                style={{
                  padding: "8px 12px", border: `1px solid ${C.slateInk}25`, borderRadius: 2,
                  background: C.mist, color: C.slateInk, fontSize: 12,
                  fontFamily: "Hanken Grotesk, sans-serif", outline: "none",
                }}
              />
            </div>

            <SelectFilter label="Program Area" options={FILTER_OPTIONS.area}   value={filters.area}   onChange={v => setFilters(f => ({ ...f, area: v }))} />
            <SelectFilter label="Cycle"        options={FILTER_OPTIONS.cycle}  value={filters.cycle}  onChange={v => setFilters(f => ({ ...f, cycle: v }))} />
            <SelectFilter label="Status"       options={FILTER_OPTIONS.status} value={filters.status} onChange={v => setFilters(f => ({ ...f, status: v }))} />

            {/* Reset */}
            <button
              onClick={() => { setFilters({ area: "All Areas", cycle: "All Cycles", status: "All Statuses", type: "All Types" }); setSearch(""); }}
              style={{
                padding: "8px 16px", border: `1px solid ${C.slateInk}20`,
                borderRadius: 2, background: "transparent", cursor: "pointer",
                fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif",
                alignSelf: "flex-end",
              }}
            >Reset</button>
          </div>

          {!isEmpty && (
            <p style={{ fontSize: 11, color: C.tealGrey, margin: "14px 0 0", fontFamily: "Hanken Grotesk, sans-serif" }}>
              Showing {filtered.length} of {GRANTS.length} grants
            </p>
          )}
        </div>

        {/* ── Table ── */}
        <div style={{ overflowX: "auto", border: `1px solid ${C.slateInk}15`, borderTop: "none" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${C.slateInk}15` }}>
                <SortHeader label="ID"         field="id"         sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <SortHeader label="Recipient"  field="recipient"  sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <SortHeader label="Area"       field="area"       sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <SortHeader label="Amount"     field="amount"     sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <th style={{ padding: "12px 16px", textAlign: "left" }}>
                  <span style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>Purpose</span>
                </th>
                <SortHeader label="Cycle"      field="cycle"      sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <SortHeader label="Award Date" field="awardDate"  sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <SortHeader label="Status"     field="status"     sortField={sortField} sortDir={sortDir} onSort={handleSort} />
              </tr>
            </thead>
            <tbody>
              {displayGrants.map((grant, i) => <GrantRow key={grant.id || i} grant={grant} index={i} />)}
            </tbody>
          </table>
        </div>

        {/* ── Registry Notes ── */}
        <div style={{
          marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        }}>
          <div style={{ borderLeft: `3px solid ${C.sky}`, paddingLeft: 20 }}>
            <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 10px", fontFamily: "Hanken Grotesk, sans-serif" }}>
              Registry Policy
            </p>
            <p style={{ fontSize: 12, color: C.tealGrey, lineHeight: 1.8, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>
              Every grant awarded by Ghosts Worth Chasing is listed here, without exception.
              Grant amounts, recipients, and purposes are published as awarded. We do not
              aggregate, anonymize, or delay publication beyond 30 days. Individual grantees
              may request anonymization on a case-by-case basis — any such grants are listed
              with purpose and amount intact but recipient marked as "Anonymous."
            </p>
          </div>
          <div style={{ borderLeft: `3px solid ${C.neonMint}`, paddingLeft: 20 }}>
            <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 10px", fontFamily: "Hanken Grotesk, sans-serif" }}>
              Data Accuracy
            </p>
            <p style={{ fontSize: 12, color: C.tealGrey, lineHeight: 1.8, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>
              This registry is maintained manually and updated following each grant cycle.
              Discrepancies between this registry and our 990-PF filings should be reported
              to <span style={{ color: C.sky }}>roconnor@ghostsworthchasing.org</span>.
              The 990-PF is the governing legal document; this registry is a convenience record.
            </p>
          </div>
        </div>

        {/* ── Cross-links ── */}
        <div style={{ marginTop: 40, display: "flex", gap: 24, flexWrap: "wrap" }}>
          <a href="/transparency" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>← Transparency Dashboard</a>
          <a href="/criteria" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Grantmaking Criteria →</a>
          <a href="/decisions" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Decision Log →</a>
          <a href="/documents" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>990 Reading Room →</a>
        </div>
      </div>
    </div>
  );
}
