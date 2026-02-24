"use client";

import { useState, useEffect, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

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

// ── Types ───────────────────────────────────────────────────────────
type GrantType   = "individual" | "organizational";
type GrantStatus = "Active" | "Closed" | "Renewed" | "Pending";
type SortDir     = "asc" | "desc";

type Grant = {
  id:            string;
  recipient:     string;
  type:          GrantType | "—";
  area:          string;
  amount:        number | null;
  purpose:       string;
  cycle:         string;
  awardDate:     string;
  status:        GrantStatus | "Pending";
  duration:      string;
  isPlaceholder?: boolean;
};

type AreaBreakdownEntry = { name: string; value: number; color: string };

// ── Grant Data ─────────────────────────────────────────────────────
// ADD NEW GRANTS HERE — newest first.
// {
//   id: "GWC-2026-001",
//   recipient: "Jane Doe",
//   type: "individual",
//   area: "Individual Support",
//   amount: 500,
//   purpose: "Career transition support — professional certification retraining.",
//   cycle: "Q2 2026",
//   awardDate: "2026-06-30",
//   status: "Active",
//   duration: "One-time",
// }
const GRANTS: Grant[] = [];

const PLACEHOLDER_GRANTS: Grant[] = [
  {
    id:            "—",
    recipient:     "No grants awarded yet",
    type:          "—",
    area:          "—",
    amount:        null,
    purpose:       "First grant cycle anticipated Q2 2026",
    cycle:         "—",
    awardDate:     "—",
    status:        "Pending",
    duration:      "—",
    isPlaceholder: true,
  },
];

const AREA_COLORS: Record<string, string> = {
  "Individual Support": C.sky,
  "Organizational":     C.tealGrey,
  "Capacity Building":  C.orchid,
};

const STATUS_COLORS: Record<string, string> = {
  Active:  C.neonMint,
  Closed:  C.orchid,
  Renewed: C.sky,
  Pending: C.tealGrey,
};

const FILTER_OPTIONS = {
  area:   ["All Areas",     "Individual Support", "Organizational", "Capacity Building"],
  cycle:  ["All Cycles",    "Q2 2026", "Q3 2026", "Q4 2026"],
  status: ["All Statuses",  "Active", "Closed", "Renewed"],
  type:   ["All Types",     "Individual", "Organizational"],
};

// ── Helpers ────────────────────────────────────────────────────────
const fmt = (n: number | null | undefined): string =>
  n == null ? "—" : `$${n.toLocaleString()}`;

const computeStats = (grants: Grant[]) => {
  if (!grants.length) return { total: 0, count: 0, avgSize: 0, individuals: 0, orgs: 0 };
  const total       = grants.reduce((s, g) => s + (g.amount || 0), 0);
  const individuals = grants.filter(g => g.type === "individual").length;
  const orgs        = grants.filter(g => g.type === "organizational").length;
  return { total, count: grants.length, avgSize: Math.round(total / grants.length), individuals, orgs };
};

const computeAreaBreakdown = (grants: Grant[]): AreaBreakdownEntry[] => {
  const map: Record<string, number> = {};
  grants.forEach(g => {
    if (!g.area || g.area === "—") return;
    map[g.area] = (map[g.area] || 0) + (g.amount || 0);
  });
  return Object.entries(map).map(([name, value]) => ({
    name, value, color: AREA_COLORS[name] || C.orchid,
  }));
};

// ── Sub-components ─────────────────────────────────────────────────

function SectionRule({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "48px 0 24px" }}>
      <span style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", flexShrink: 0 }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${C.slateInk}30, transparent)` }} />
    </div>
  );
}

function StatCard({ label, value, sub, highlight }: { label: string; value: string | number; sub?: string; highlight?: boolean }) {
  return (
    <div style={{
      border:     `1px solid ${highlight ? C.neonMint + "50" : C.slateInk + "20"}`,
      borderTop:  `2px solid ${highlight ? C.neonMint : C.sky}`,
      borderRadius: 2, padding: "20px 18px",
      background: highlight ? `${C.neonMint}06` : "transparent",
    }}>
      <p style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 8px", fontFamily: "Hanken Grotesk, sans-serif" }}>{label}</p>
      <p style={{ fontSize: 28, fontWeight: 700, color: highlight ? C.neonMint : C.slateInk, margin: "0 0 4px", fontFamily: "Hanken Grotesk, sans-serif", lineHeight: 1 }}>{value}</p>
      {sub && <p style={{ fontSize: 11, color: C.tealGrey, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{sub}</p>}
    </div>
  );
}

function SelectFilter({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{label}</span>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          padding: "8px 28px 8px 12px",
          border: `1px solid ${C.slateInk}25`,
          borderRadius: 2, background: C.mist,
          color: C.slateInk, fontSize: 12,
          fontFamily: "Hanken Grotesk, sans-serif",
          cursor: "pointer", outline: "none",
          appearance: "none" as const,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%237CAAB0' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 10px center",
        }}
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function SortHeader({ label, field, sortField, sortDir, onSort }: {
  label: string; field: keyof Grant;
  sortField: keyof Grant; sortDir: SortDir;
  onSort: (f: keyof Grant) => void;
}) {
  const active = sortField === field;
  return (
    <th
      onClick={() => onSort(field)}
      style={{ padding: "12px 16px", textAlign: "left", cursor: "pointer", userSelect: "none" }}
    >
      <span style={{
        fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase",
        color: active ? C.slateInk : C.tealGrey,
        fontFamily: "Hanken Grotesk, sans-serif",
        display: "flex", alignItems: "center", gap: 4,
      }}>
        {label}
        <span style={{ fontSize: 8, opacity: active ? 1 : 0.3 }}>
          {active ? (sortDir === "asc" ? "↑" : "↓") : "↕"}
        </span>
      </span>
    </th>
  );
}

function GrantRow({ grant, index }: { grant: Grant; index: number }) {
  const isPlaceholder = grant.isPlaceholder;
  return (
    <tr style={{
      background: isPlaceholder ? "transparent" : index % 2 === 0 ? "white" : `${C.slateInk}03`,
      borderBottom: `1px solid ${C.slateInk}08`,
      opacity: isPlaceholder ? 0.6 : 1,
    }}>
      <td style={{ padding: "12px 16px", fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", whiteSpace: "nowrap" }}>{grant.id}</td>
      <td style={{ padding: "12px 16px", fontSize: 12, color: C.slateInk, fontFamily: "Hanken Grotesk, sans-serif", fontWeight: isPlaceholder ? 400 : 500 }}>{grant.recipient}</td>
      <td style={{ padding: "12px 16px" }}>
        {grant.area !== "—" && (
          <span style={{
            fontSize: 10, padding: "3px 8px", borderRadius: 2,
            background: `${AREA_COLORS[grant.area] || C.orchid}20`,
            color: AREA_COLORS[grant.area] || C.orchid,
            fontFamily: "Hanken Grotesk, sans-serif",
          }}>{grant.area}</span>
        )}
        {grant.area === "—" && <span style={{ fontSize: 11, color: C.tealGrey }}>—</span>}
      </td>
      <td style={{ padding: "12px 16px", fontSize: 12, color: C.slateInk, fontFamily: "Hanken Grotesk, sans-serif", fontWeight: 600, whiteSpace: "nowrap" }}>{fmt(grant.amount)}</td>
      <td style={{ padding: "12px 16px", fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", maxWidth: 280 }}>{grant.purpose}</td>
      <td style={{ padding: "12px 16px", fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", whiteSpace: "nowrap" }}>{grant.cycle}</td>
      <td style={{ padding: "12px 16px", fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", whiteSpace: "nowrap" }}>{grant.awardDate}</td>
      <td style={{ padding: "12px 16px" }}>
        <span style={{
          fontSize: 10, padding: "3px 8px", borderRadius: 2,
          background: `${STATUS_COLORS[grant.status] || C.orchid}20`,
          color: STATUS_COLORS[grant.status] || C.orchid,
          fontFamily: "Hanken Grotesk, sans-serif",
        }}>{grant.status}</span>
      </td>
    </tr>
  );
}

function CustomPieTooltip({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number }> }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: C.navy, border: `1px solid rgba(163,201,226,0.2)`, borderRadius: 2, padding: "8px 12px" }}>
      <p style={{ fontSize: 11, color: C.mist, margin: "0 0 4px", fontFamily: "Hanken Grotesk, sans-serif" }}>{payload[0].name}</p>
      <p style={{ fontSize: 13, fontWeight: 700, color: C.sky, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{fmt(payload[0].value)}</p>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────
export default function GrantRegistryClient() {
  const [mounted, setMounted]   = useState(false);
  const [search,  setSearch]    = useState("");
  const [sortField, setSortField] = useState<keyof Grant>("awardDate");
  const [sortDir,   setSortDir]   = useState<SortDir>("desc");
  const [filters, setFilters]   = useState({
    area:   "All Areas",
    cycle:  "All Cycles",
    status: "All Statuses",
    type:   "All Types",
  });

  useEffect(() => { setMounted(true); }, []);

  const stats        = useMemo(() => computeStats(GRANTS), []);
  const areaBreakdown = useMemo(() => computeAreaBreakdown(GRANTS), []);
  const isEmpty      = GRANTS.length === 0;

  const handleSort = (field: keyof Grant) => {
    if (sortField === field) {
      setSortDir(d => d === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const filtered = useMemo(() => {
    if (isEmpty) return [];
    return GRANTS
      .filter(g => {
        if (filters.area   !== "All Areas"     && g.area   !== filters.area)   return false;
        if (filters.cycle  !== "All Cycles"    && g.cycle  !== filters.cycle)  return false;
        if (filters.status !== "All Statuses"  && g.status !== filters.status) return false;
        if (filters.type   !== "All Types"     && g.type   !== filters.type.toLowerCase()) return false;
        if (search) {
          const q = search.toLowerCase();
          if (!g.recipient.toLowerCase().includes(q) && !g.purpose.toLowerCase().includes(q)) return false;
        }
        return true;
      })
      .sort((a, b) => {
        const av = a[sortField] ?? "";
        const bv = b[sortField] ?? "";
        if (av < bv) return sortDir === "asc" ? -1 : 1;
        if (av > bv) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
  }, [filters, search, sortField, sortDir, isEmpty]);

  const displayGrants = isEmpty ? PLACEHOLDER_GRANTS : filtered;

  if (!mounted) return null;

  return (
    <div style={{ background: C.mist, minHeight: "100vh", fontFamily: "Hanken Grotesk, sans-serif" }}>

      {/* ── Masthead ── */}
      <div style={{ background: C.navy, padding: "64px 48px 52px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 16px" }}>
            Ghosts Worth Chasing — Private Foundation
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32 }}>
            <div>
              <h1 style={{ fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 700, color: C.mist, margin: "0 0 16px", letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                Grant<br /><span style={{ color: C.sky }}>Registry</span>
              </h1>
              <p style={{ fontSize: 13, color: C.orchid, lineHeight: 1.8, maxWidth: 520, margin: 0 }}>
                Every grant awarded by Ghosts Worth Chasing, listed without exception.
                Updated within 30 days of each award. The 990-PF is the governing legal record —
                this registry is a convenience reference.
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 40, fontWeight: 700, color: isEmpty ? C.tealGrey : C.neonMint, margin: "0 0 4px", lineHeight: 1 }}>
                {fmt(stats.total)}
              </p>
              <p style={{ fontSize: 10, color: C.tealGrey, margin: 0, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Total granted
              </p>
            </div>
          </div>

          {/* Running total bar */}
          <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(163,201,226,0.15)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 10, color: C.tealGrey, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                2026 target: $1,000
              </span>
              <span style={{ fontSize: 10, color: C.tealGrey }}>
                {fmt(stats.total)} awarded
              </span>
            </div>
            <div style={{ height: 4, background: "rgba(163,201,226,0.15)", borderRadius: 2, overflow: "hidden" }}>
              <div style={{
                height: "100%",
                width: `${Math.min(100, (stats.total / 1000) * 100)}%`,
                background: C.neonMint,
                borderRadius: 2,
                transition: "width 1s ease",
              }} />
            </div>
            <p style={{ fontSize: 10, color: C.orchid, margin: "8px 0 0", fontStyle: "italic" }}>
              Two cycles planned for 2026 — Q3 and Q4, one grant of $500 each. Designed to develop process, not maximize impact.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px 80px" }}>

        {/* ── Stat cards ── */}
        <SectionRule label="At a Glance" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
          <StatCard label="Total Granted"           value={fmt(stats.total)}                    highlight={stats.total > 0} />
          <StatCard label="Grants Awarded"          value={stats.count}                         sub="Across all programs" />
          <StatCard label="Individuals Supported"   value={isEmpty ? "0" : stats.individuals}  sub="Individual Support program" />
          <StatCard label="Organizations Supported" value={isEmpty ? "0" : stats.orgs}         sub="Organizational grants" />
          <StatCard label="Average Grant Size"      value={isEmpty ? "—" : fmt(stats.avgSize)} sub="Across all grant types" />
          <StatCard label="Total Applications"      value="—"                                   sub="Opens Q3 2026" />
          <StatCard label="Acceptance Rate"         value="—"                                   sub="Applications funded ÷ received" />
        </div>

        {/* Applications context note — shown when no cycles have run */}
        {isEmpty && (
          <div style={{
            marginTop: 16,
            padding: "14px 20px",
            border: `1px solid ${C.slateInk}15`,
            borderLeft: `3px solid ${C.sky}`,
            borderRadius: 2,
            background: "white",
          }}>
            <p style={{ fontSize: 12, color: C.tealGrey, margin: 0, lineHeight: 1.7, fontFamily: "Hanken Grotesk, sans-serif" }}>
              Total applications received and acceptance rate will populate after Q3 2026 closes.
              Both figures are published within 45 days of each cycle closing —
              see <a href="/transparency/acceptance" style={{ color: C.sky, textDecoration: "none" }}>Acceptance Rate</a> for
              the full cycle-by-cycle breakdown including what the committee observed.
            </p>
          </div>
        )}

        {/* ── Charts — only when data exists ── */}
        {!isEmpty && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 32 }}>
            <div style={{ border: `1px solid ${C.slateInk}18`, borderRadius: 2, padding: "24px" }}>
              <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 20px" }}>
                Grants by Program Area
              </p>
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
              <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 20px" }}>
                Grants Over Time
              </p>
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
        <div style={{ background: "white", border: `1px solid ${C.slateInk}15`, borderRadius: 2, padding: "20px 24px", marginBottom: 0 }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-end" }}>
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
                <SortHeader label="ID"         field="id"        sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <SortHeader label="Recipient"  field="recipient" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <SortHeader label="Area"       field="area"      sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <SortHeader label="Amount"     field="amount"    sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <th style={{ padding: "12px 16px", textAlign: "left" }}>
                  <span style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>Purpose</span>
                </th>
                <SortHeader label="Cycle"      field="cycle"     sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <SortHeader label="Award Date" field="awardDate" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
                <SortHeader label="Status"     field="status"    sortField={sortField} sortDir={sortDir} onSort={handleSort} />
              </tr>
            </thead>
            <tbody>
              {displayGrants.map((grant, i) => <GrantRow key={`${grant.id}-${i}`} grant={grant} index={i} />)}
            </tbody>
          </table>
        </div>

        {/* ── Registry notes ── */}
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div style={{ borderLeft: `3px solid ${C.sky}`, paddingLeft: 20 }}>
            <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 10px", fontFamily: "Hanken Grotesk, sans-serif" }}>
              Registry Policy
            </p>
            <p style={{ fontSize: 12, color: C.tealGrey, lineHeight: 1.8, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>
              Every grant awarded by Ghosts Worth Chasing is listed here, without exception.
              Grant amounts, recipients, and purposes are published as awarded. We do not
              aggregate, anonymize, or delay publication beyond 30 days. Individual grantees
              may request anonymization — any such grants are listed with purpose and amount
              intact but recipient marked as "Anonymous."
            </p>
          </div>
          <div style={{ borderLeft: `3px solid ${C.neonMint}`, paddingLeft: 20 }}>
            <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 10px", fontFamily: "Hanken Grotesk, sans-serif" }}>
              Data Accuracy
            </p>
            <p style={{ fontSize: 12, color: C.tealGrey, lineHeight: 1.8, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>
              This registry is maintained manually and updated following each grant cycle.
              Discrepancies between this registry and our 990-PF filings should be reported
              to roconnor@ghostsworthchasing.org. The 990-PF is the governing legal document;
              this registry is a convenience record.
            </p>
          </div>
        </div>

        {/* ── Cross-links ── */}
        <div style={{ marginTop: 40, display: "flex", gap: 24, flexWrap: "wrap" }}>
          <a href="/transparency"          style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>← Transparency Dashboard</a>
          <a href="/criteria"              style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Grantmaking Criteria →</a>
          <a href="/transparency/decisions" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Decision Log →</a>
          <a href="/transparency/documents" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>990 Reading Room →</a>
        </div>

      </div>
    </div>
  );
}
