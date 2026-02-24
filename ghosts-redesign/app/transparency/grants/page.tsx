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
  CartesianGrid
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
type GrantType = "individual" | "organizational";
type GrantStatus = "Active" | "Closed" | "Renewed" | "Pending";

type Grant = {
  id: string;
  recipient: string;
  type: GrantType;
  area: string;
  amount: number | null;
  purpose: string;
  cycle: string;
  awardDate: string;
  status: GrantStatus;
  duration: string;
  isPlaceholder?: boolean;
};

// ── Grant Data Schema ──────────────────────────────────────────────
// Empty now — populates after first grant cycle.
const GRANTS: Grant[] = [
  // Example structure (commented out until real grants exist):
  // {
  //   id: "GWC-2026-001",
  //   recipient: "Jane Doe",
  //   type: "individual",
  //   area: "Individual Support",
  //   amount: 7500,
  //   purpose: "Career transition support — retraining stipend",
  //   cycle: "Q2 2026",
  //   awardDate: "2026-06-15",
  //   status: "Active",
  //   duration: "One-time",
  // },
];

// Placeholder row while registry is empty
const PLACEHOLDER_GRANTS: Grant[] = [
  {
    id: "—",
    recipient: "No grants awarded yet",
    type: "individual", // must match GrantType
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

const AREA_COLORS: Record<string, string> = {
  "Individual Support": C.sky,
  "Organizational": C.tealGrey,
  "Capacity Building": C.orchid,
};

const STATUS_COLORS: Record<GrantStatus, string> = {
  Active: C.neonMint,
  Closed: C.orchid,
  Renewed: C.sky,
  Pending: C.tealGrey,
};

const FILTER_OPTIONS = {
  area: ["All Areas", "Individual Support", "Organizational", "Capacity Building"],
  cycle: ["All Cycles", "Q2 2026", "Q3 2026", "Q4 2026"],
  status: ["All Statuses", "Active", "Closed", "Renewed"],
  type: ["All Types", "Individual", "Organizational"],
};
