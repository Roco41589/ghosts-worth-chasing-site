"use client";

import { useState, useEffect } from "react";

// ── GWC Design Tokens ──────────────────────────────────────────────
const C = {
  navy: "#0B1D3A",
  mist: "#F6F9FC",
  sky: "#A3C9E2",
  tealGrey: "#7CAAB0",
  slateInk: "#1A2E3B",
  neonMint: "#A8FFE4",
  orchid: "#C6C9D1",
};

// ── Decision Type Config ───────────────────────────────────────────
const TYPES = {
  Founding: { color: C.neonMint, label: "Founding" },
  Legal: { color: C.sky, label: "Legal" },
  Grantmaking: { color: C.tealGrey, label: "Grantmaking" },
  Operations: { color: C.orchid, label: "Operations" },
  Governance: { color: "#E8C97A", label: "Governance" },
  Financial: { color: "#A3C9A3", label: "Financial" },
} as const;

type DecisionType = keyof typeof TYPES;

type Decision = {
  id: string;
  date: string;
  displayDate: string;
  type: DecisionType;
  title: string;
  summary: string;
  rationale: string;
  madeBy: string;
  status: string;
  linkedTo: string[];
};

type TypeBadgeProps = {
  type: DecisionType;
  small?: boolean;
};

type StatusPillProps = {
  status: string;
};

type DecisionEntryProps = {
  decision: Decision;
  isLast: boolean;
  globalExpanded: boolean | null;
};

// ── Decision Log Data ──────────────────────────────────────────────
const DECISIONS: Decision[] = [
  {
    id: "DL-2026-005",
    date: "2026-02-20",
    displayDate: "February 20, 2026",
    type: "Operations",
    title: "Transparency infrastructure buildout initiated",
    summary:
      "Decision to develop and publish six transparency features.",
    rationale:
      "Hyper-transparency is a founding value of Ghosts Worth Chasing.",
    madeBy: "Ryan O'Connor, Founder & Chair",
    status: "Active",
    linkedTo: [],
  },
];

const ALL_TYPES: ("All" | DecisionType)[] = [
  "All",
  ...Object.keys(TYPES),
] as ("All" | DecisionType)[];

// ── Components ─────────────────────────────────────────────────────

function TypeBadge({ type, small }: TypeBadgeProps) {
  const cfg = TYPES[type];
  return (
    <span
      style={{
        fontSize: small ? 9 : 10,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: cfg.color,
        border: `1px solid ${cfg.color}50`,
        padding: small ? "1px 7px" : "3px 10px",
        borderRadius: 2,
      }}
    >
      {cfg.label}
    </span>
  );
}

function StatusPill({ status }: StatusPillProps) {
  const isActive = status === "Active";
  const isPending =
    status.includes("Pending") || status.includes("Planned");

  const color = isActive
    ? C.neonMint
    : isPending
    ? C.sky
    : C.orchid;

  return (
    <span
      style={{
        fontSize: 10,
        letterSpacing: "0.1em",
        color,
      }}
    >
      ● {status}
    </span>
  );
}

function DecisionEntry({
  decision,
  isLast,
  globalExpanded,
}: DecisionEntryProps) {
  const [expanded, setExpanded] = useState(false);
  const cfg = TYPES[decision.type];

  useEffect(() => {
    if (globalExpanded !== null) setExpanded(globalExpanded);
  }, [globalExpanded]);

  return (
    <div style={{ marginBottom: isLast ? 0 : 24 }}>
      <div
        onClick={() => setExpanded((e) => !e)}
        style={{
          cursor: "pointer",
          border: `1px solid rgba(163,201,226,0.15)`,
          padding: 20,
          borderLeft: `3px solid ${cfg.color}`,
          background: expanded
            ? `${cfg.color}10`
            : "rgba(246,249,252,0.03)",
        }}
      >
        <TypeBadge type={decision.type} small />
        <h3 style={{ marginTop: 10 }}>{decision.title}</h3>
        <p>{decision.summary}</p>
        <StatusPill status={decision.status} />
      </div>

      {expanded && (
        <div style={{ padding: 20, background: C.mist }}>
          <p style={{ color: C.slateInk }}>
            {decision.rationale}
          </p>
        </div>
      )}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────
export default function DecisionLog() {
  const [mounted, setMounted] = useState(false);
  const [activeType, setActiveType] =
    useState<"All" | DecisionType>("All");
  const [globalExpanded, setGlobalExpanded] =
    useState<boolean | null>(null);
  const [sortOrder, setSortOrder] =
    useState<"desc" | "asc">("desc");

  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
  }, []);

  const filtered = DECISIONS.filter(
    (d) => activeType === "All" || d.type === activeType
  ).sort((a, b) =>
    sortOrder === "desc"
      ? new Date(b.date).getTime() -
        new Date(a.date).getTime()
      : new Date(a.date).getTime() -
        new Date(b.date).getTime()
  );

  const typeCounts = DECISIONS.reduce<Record<string, number>>(
    (acc, d) => {
      acc[d.type] = (acc[d.type] || 0) + 1;
      return acc;
    },
    {}
  );

  return (
    <div style={{ padding: 48, background: C.navy }}>
      <h1 style={{ color: C.mist }}>Decision Log</h1>

      {filtered.map((decision, i) => (
        <DecisionEntry
          key={decision.id}
          decision={decision}
          isLast={i === filtered.length - 1}
          globalExpanded={globalExpanded}
        />
      ))}
    </div>
  );
}
