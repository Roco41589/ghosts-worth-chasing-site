"use client";

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

// ── Types ───────────────────────────────────────────────────────────
type DocStatus = "Available" | "Pending" | "Not Yet Due" | "Filed — Not Yet Posted";

type GWCDocument = {
  id:          string;
  title:       string;
  subtitle?:   string;
  type:        string;
  description: string;
  year:        string;
  filedDate:   string | null;
  postedDate:  string | null;
  status:      DocStatus;
  statusNote:  string;
  mandatory:   boolean;
  fileUrl:     string | null;
  fileSize:    string | null;
};

type GuideSection = {
  part:        string;
  title:       string;
  explains:    string;
  whyMatters:  string;
};

type TimelineEvent = {
  date:  string;
  label: string;
  done:  boolean;
  type:  string;
};

type ThirdPartySource = {
  name:  string;
  url:   string;
  desc:  string;
  delay: string;
};

// ── Document Registry ──────────────────────────────────────────────
const DOCUMENTS: GWCDocument[] = [
  {
    id: "DOC-001", title: "Articles of Incorporation", type: "Formation",
    description: "The founding legal document establishing Ghosts Worth Chasing as a nonprofit corporation. Filed with the relevant state authority.",
    year: "2024", filedDate: "September 2024", postedDate: null,
    status: "Pending", statusNote: "Will be posted upon 501(c)(3) determination",
    mandatory: true, fileUrl: null, fileSize: null,
  },
  {
    id: "DOC-002", title: "IRS Form 1023", type: "Tax Exemption",
    description: "Application for recognition of exemption under Section 501(c)(3) of the Internal Revenue Code. Includes organizational narrative, program descriptions, and financial projections.",
    year: "2024", filedDate: "September 2024", postedDate: null,
    status: "Pending", statusNote: "Filed Sept 2024 — IRS determination pending. Will be posted upon determination.",
    mandatory: true, fileUrl: null, fileSize: null,
  },
  {
    id: "DOC-003", title: "IRS Determination Letter", type: "Tax Exemption",
    description: "Official IRS letter confirming 501(c)(3) status. This document is the legal basis for the foundation's tax-exempt operations and donors' ability to deduct contributions.",
    year: "2025 or 2026", filedDate: null, postedDate: null,
    status: "Pending", statusNote: "Awaiting IRS determination — typically 6–18 months from filing",
    mandatory: true, fileUrl: null, fileSize: null,
  },
  {
    id: "DOC-004", title: "Form 990-PF (Private Foundation Return)", subtitle: "Tax Year 2024", type: "Annual Filing",
    description: "The annual information return required of all private foundations. Discloses assets, grants made, operating expenses, compensation, and investment activity.",
    year: "2024", filedDate: null, postedDate: null,
    status: "Not Yet Due", statusNote: "Due by November 15, 2025 (extended) or May 15, 2025 (standard). Will be posted within 30 days of filing.",
    mandatory: true, fileUrl: null, fileSize: null,
  },
  {
    id: "DOC-005", title: "Form 990-PF (Private Foundation Return)", subtitle: "Tax Year 2025", type: "Annual Filing",
    description: "Annual information return for fiscal year 2025.",
    year: "2025", filedDate: null, postedDate: null,
    status: "Not Yet Due", statusNote: "Due May or November 2026.",
    mandatory: true, fileUrl: null, fileSize: null,
  },
  {
    id: "DOC-006", title: "Conflict of Interest Policy", type: "Governance",
    description: "The foundation's policy governing conflicts of interest among board members, officers, and key employees. Required by the IRS as part of good governance practice.",
    year: "2024", filedDate: "September 2024", postedDate: null,
    status: "Pending", statusNote: "Will be posted upon 501(c)(3) determination",
    mandatory: false, fileUrl: null, fileSize: null,
  },
  {
    id: "DOC-007", title: "Whistleblower Policy", type: "Governance",
    description: "Policy protecting individuals who report concerns about illegal activity, misuse of funds, or other improper conduct by the foundation or its leadership.",
    year: "2024", filedDate: "September 2024", postedDate: null,
    status: "Pending", statusNote: "Will be posted upon 501(c)(3) determination",
    mandatory: false, fileUrl: null, fileSize: null,
  },
  {
    id: "DOC-008", title: "Document Retention Policy", type: "Governance",
    description: "Policy governing how long the foundation retains various categories of records and the procedures for their secure disposal.",
    year: "2024", filedDate: "September 2024", postedDate: null,
    status: "Pending", statusNote: "Will be posted upon 501(c)(3) determination",
    mandatory: false, fileUrl: null, fileSize: null,
  },
  {
    id: "DOC-009", title: "Investment Policy Statement", type: "Financial",
    description: "The foundation's policy governing the investment of endowment assets, including target allocation, risk tolerance, spending policy, and manager selection criteria.",
    year: "2026", filedDate: null, postedDate: null,
    status: "Not Yet Due", statusNote: "To be established post-501(c)(3) determination",
    mandatory: false, fileUrl: null, fileSize: null,
  },
];

// ── Config ─────────────────────────────────────────────────────────
const DOC_TYPES: Record<string, { color: string; icon: string }> = {
  "Formation":     { color: C.sky,      icon: "◈" },
  "Tax Exemption": { color: C.tealGrey, icon: "◉" },
  "Annual Filing": { color: C.neonMint, icon: "◎" },
  "Governance":    { color: C.orchid,   icon: "◆" },
  "Financial":     { color: "#E8C97A",  icon: "◇" },
};

const STATUS_CONFIG: Record<string, { color: string; dot: string; label: string }> = {
  "Available":               { color: C.neonMint, dot: "●", label: "Available" },
  "Pending":                 { color: C.orchid,   dot: "◌", label: "Pending" },
  "Not Yet Due":             { color: C.tealGrey, dot: "○", label: "Not Yet Due" },
  "Filed — Not Yet Posted":  { color: C.sky,      dot: "◍", label: "Filed — Not Yet Posted" },
};

const GUIDE_SECTIONS: GuideSection[] = [
  { part: "Part I",     title: "Revenue & Expenses",                   explains: "What the foundation earned (investment returns, contributions) and spent (grants, operating costs, professional fees) during the year.", whyMatters: "Shows whether the foundation is spending responsibly and where money comes from." },
  { part: "Part II",    title: "Balance Sheet",                        explains: "Assets (what the foundation owns) and liabilities (what it owes) at year end.", whyMatters: "Reveals the foundation's financial health and endowment size." },
  { part: "Part VII-A", title: "Statements Regarding Activities",      explains: "Yes/no questions about lobbying, political activity, grants to individuals, and international grants.", whyMatters: "Confirms the foundation is operating within IRS rules." },
  { part: "Part VIII",  title: "Information About Officers, Directors", explains: "Names, titles, hours worked, and compensation of key individuals.", whyMatters: "Shows who controls the foundation and whether compensation is reasonable." },
  { part: "Part IX-A",  title: "Summary of Direct Charitable Activities", explains: "Description of the foundation's charitable programs and what they accomplished.", whyMatters: "The mission in practice — what actually happened." },
  { part: "Part XV",    title: "Grants & Contributions Paid",          explains: "Every grant paid during the year — recipient, address, purpose, and amount.", whyMatters: "The most scrutinized section. Full grantmaking record." },
];

const THIRD_PARTY_SOURCES: ThirdPartySource[] = [
  { name: "ProPublica Nonprofit Explorer", url: "https://projects.propublica.org/nonprofits", desc: "Free searchable database of 990s. Typically lags filing by 12–18 months.", delay: "12–18 months after filing" },
  { name: "Candid / GuideStar",            url: "https://candid.org",                        desc: "Sector's primary funder research database. Includes 990s and self-reported data.", delay: "Variable — we update our profile directly" },
  { name: "IRS Tax Exempt Organization Search", url: "https://apps.irs.gov/app/eos",         desc: "Official IRS tool confirming our tax-exempt status and filing history.", delay: "Near real-time after determination" },
];

const TIMELINE_EVENTS: TimelineEvent[] = [
  { date: "Sep 2024",     label: "Foundation incorporated",                         done: true,  type: "Formation" },
  { date: "Sep 2024",     label: "Form 1023 filed with IRS",                        done: true,  type: "Tax Exemption" },
  { date: "2025–2026",    label: "IRS 501(c)(3) determination expected",            done: false, type: "Tax Exemption" },
  { date: "May/Nov 2025", label: "First 990-PF due (Tax Year 2024)",                done: false, type: "Annual Filing" },
  { date: "Q3 2026",      label: "Governance documents published post-determination", done: false, type: "Governance" },
  { date: "May/Nov 2026", label: "Second 990-PF due (Tax Year 2025)",               done: false, type: "Annual Filing" },
];

// ── Sub-components ─────────────────────────────────────────────────

function SectionRule({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "52px 0 24px" }}>
      <span style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", flexShrink: 0 }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${C.slateInk}25, transparent)` }} />
    </div>
  );
}

function TypeFilterPill({ label, active, count, onClick }: { label: string; active: boolean; count: number; onClick: () => void }) {
  const cfg = label === "All Documents" ? { color: C.sky } : DOC_TYPES[label] || { color: C.orchid };
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 8,
      padding: "8px 16px",
      border: `1.5px solid ${active ? cfg.color : C.slateInk + "50"}`,
      background: active ? `${cfg.color}18` : "white",
      borderRadius: 2, cursor: "pointer", transition: "all 0.15s ease", outline: "none",
    }}>
      {label !== "All Documents" && (
        <span style={{ fontSize: 12, color: cfg.color }}>{DOC_TYPES[label]?.icon}</span>
      )}
      <span style={{ fontSize: 12, color: C.slateInk, fontWeight: active ? 600 : 400, fontFamily: "Hanken Grotesk, sans-serif" }}>{label}</span>
      <span style={{ fontSize: 10, color: active ? cfg.color : C.slateInk, background: active ? `${cfg.color}20` : `${C.slateInk}10`, padding: "1px 7px", borderRadius: 10, fontFamily: "Hanken Grotesk, sans-serif", fontWeight: 500 }}>{count}</span>
    </button>
  );
}

function DocumentCard({ doc, index, mounted }: { doc: GWCDocument; index: number; mounted: boolean }) {
  const [hovered, setHovered] = useState(false);
  const typeCfg   = DOC_TYPES[doc.type]      || { color: C.orchid, icon: "◈" };
  const statusCfg = STATUS_CONFIG[doc.status] || { color: C.tealGrey, dot: "○", label: doc.status };
  const isAvailable = doc.status === "Available";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border:      `1px solid ${hovered ? typeCfg.color + "50" : "rgba(163,201,226,0.12)"}`,
        borderTop:   `2px solid ${isAvailable ? typeCfg.color : typeCfg.color + "50"}`,
        borderRadius: 2, padding: "24px",
        background:  hovered ? `#0F2444` : C.navy,
        transition:  "all 0.2s ease",
        opacity:     mounted ? 1 : 0,
        transform:   mounted ? "translateY(0)" : "translateY(8px)",
        transitionDelay: `${index * 0.04}s`,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ fontSize: 18, color: typeCfg.color }}>{typeCfg.icon}</span>
          <div>
            <span style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: typeCfg.color, fontFamily: "Hanken Grotesk, sans-serif", display: "block", marginBottom: 2 }}>{doc.type}</span>
            <span style={{ fontSize: 11, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif" }}>{doc.id} · {doc.year}</span>
          </div>
        </div>
        <span style={{ fontSize: 11, color: statusCfg.color, fontFamily: "Hanken Grotesk, sans-serif", display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ fontSize: 10 }}>{statusCfg.dot}</span>{statusCfg.label}
        </span>
      </div>

      <h3 style={{ fontSize: 14, fontWeight: 600, color: C.mist, fontFamily: "Hanken Grotesk, sans-serif", margin: "0 0 4px", lineHeight: 1.3 }}>{doc.title}</h3>
      {doc.subtitle && <p style={{ fontSize: 11, color: C.tealGrey, margin: "0 0 12px", fontFamily: "Hanken Grotesk, sans-serif" }}>{doc.subtitle}</p>}
      <p style={{ fontSize: 12, color: C.orchid, lineHeight: 1.75, fontFamily: "Hanken Grotesk, sans-serif", margin: "0 0 16px" }}>{doc.description}</p>

      <div style={{ borderTop: "1px solid rgba(163,201,226,0.12)", paddingTop: 16 }}>
        <p style={{ fontSize: 10, color: C.tealGrey, fontFamily: "Hanken Grotesk, sans-serif", margin: "0 0 12px", lineHeight: 1.6, fontStyle: "italic" }}>{doc.statusNote}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 16 }}>
            {doc.filedDate && (
              <div>
                <p style={{ fontSize: 9, color: C.tealGrey, margin: "0 0 2px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Hanken Grotesk, sans-serif" }}>Filed</p>
                <p style={{ fontSize: 11, color: C.mist, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{doc.filedDate}</p>
              </div>
            )}
            {doc.postedDate && (
              <div>
                <p style={{ fontSize: 9, color: C.tealGrey, margin: "0 0 2px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Hanken Grotesk, sans-serif" }}>Posted</p>
                <p style={{ fontSize: 11, color: C.mist, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{doc.postedDate}</p>
              </div>
            )}
          </div>
          {isAvailable && doc.fileUrl ? (
            <a href={doc.fileUrl} download style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", background: C.sky, color: C.navy, fontSize: 11, fontFamily: "Hanken Grotesk, sans-serif", textDecoration: "none", borderRadius: 2, letterSpacing: "0.06em", fontWeight: 600 }}>
              ↓ Download PDF {doc.fileSize && <span style={{ fontSize: 9 }}>({doc.fileSize})</span>}
            </a>
          ) : (
            <span style={{ padding: "8px 16px", border: "1px solid rgba(163,201,226,0.2)", color: C.tealGrey, fontSize: 11, fontFamily: "Hanken Grotesk, sans-serif", borderRadius: 2, letterSpacing: "0.06em" }}>Not yet available</span>
          )}
        </div>
      </div>
    </div>
  );
}

function FilingTimeline() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", left: 11, top: 8, bottom: 8, width: 1, background: `linear-gradient(180deg, ${C.sky}, rgba(163,201,226,0.1))` }} />
      {TIMELINE_EVENTS.map((event, i) => {
        const cfg = DOC_TYPES[event.type] || { color: C.orchid };
        return (
          <div key={i} style={{ display: "flex", gap: 20, marginBottom: i < TIMELINE_EVENTS.length - 1 ? 20 : 0, position: "relative" }}>
            <div style={{ width: 22, height: 22, borderRadius: 2, border: `1.5px solid ${event.done ? cfg.color : C.slateInk + "40"}`, background: event.done ? C.navy : `${C.slateInk}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1, transform: "rotate(45deg)", marginTop: 2 }}>
              {event.done && <span style={{ fontSize: 8, color: cfg.color, transform: "rotate(-45deg)" }}>✓</span>}
            </div>
            <div style={{ paddingBottom: 4 }}>
              <p style={{ fontSize: 10, color: event.done ? cfg.color : C.slateInk, margin: "0 0 3px", letterSpacing: "0.08em", fontFamily: "Hanken Grotesk, sans-serif" }}>{event.date}</p>
              <p style={{ fontSize: 12, color: C.slateInk, fontWeight: event.done ? 500 : 400, margin: 0, fontFamily: "Hanken Grotesk, sans-serif", lineHeight: 1.4 }}>{event.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function GuideRow({ section }: { section: GuideSection }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.slateInk}20` }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: "100%", padding: "16px 12px", background: "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ fontSize: 10, color: C.mist, fontFamily: "monospace", letterSpacing: "0.06em", flexShrink: 0, background: C.navy, padding: "3px 10px", borderRadius: 2 }}>{section.part}</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: C.slateInk, fontFamily: "Hanken Grotesk, sans-serif" }}>{section.title}</span>
        </div>
        <span style={{ fontSize: 11, color: C.slateInk, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0, marginLeft: 16 }}>↓</span>
      </button>
      {open && (
        <div style={{ marginBottom: 12, borderRadius: 2, background: C.navy, padding: "24px 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ borderLeft: `2px solid ${C.sky}`, paddingLeft: 16 }}>
              <p style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 8px", fontFamily: "Hanken Grotesk, sans-serif" }}>What It Contains</p>
              <p style={{ fontSize: 12, color: C.orchid, lineHeight: 1.75, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{section.explains}</p>
            </div>
            <div style={{ borderLeft: `2px solid ${C.neonMint}`, paddingLeft: 16 }}>
              <p style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 8px", fontFamily: "Hanken Grotesk, sans-serif" }}>Why It Matters</p>
              <p style={{ fontSize: 12, color: C.mist, lineHeight: 1.75, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{section.whyMatters}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────
export default function ReadingRoom() {
  const [mounted,    setMounted]    = useState(false);
  const [activeType, setActiveType] = useState("All Documents");

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const typeCounts = DOCUMENTS.reduce<Record<string, number>>((acc, d) => {
    acc[d.type] = (acc[d.type] || 0) + 1;
    return acc;
  }, {});

  const filtered       = activeType === "All Documents" ? DOCUMENTS : DOCUMENTS.filter(d => d.type === activeType);
  const availableCount = DOCUMENTS.filter(d => d.status === "Available").length;

  return (
    <div style={{ background: "#EDF2F7", minHeight: "100vh", fontFamily: "Hanken Grotesk, sans-serif" }}>

      {/* ── Masthead ── */}
      <div style={{ background: C.navy, padding: "64px 48px 52px", opacity: mounted ? 1 : 0, transition: "opacity 0.5s ease" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 16px", fontFamily: "Hanken Grotesk, sans-serif" }}>
            Ghosts Worth Chasing — Private Foundation
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "end" }}>
            <div>
              <h1 style={{ fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 700, color: C.mist, margin: "0 0 20px", letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                990<br /><span style={{ color: C.sky }}>Reading Room</span>
              </h1>
              <p style={{ fontSize: 13, color: C.orchid, lineHeight: 1.8, maxWidth: 560, margin: 0 }}>
                Every public document filed by or on behalf of Ghosts Worth Chasing, hosted directly here.
                We do not wait for ProPublica or Candid to surface our filings. Documents are posted
                within 30 days of being finalized. Nothing is redacted beyond what law requires.
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 40, fontWeight: 700, color: C.mist, margin: "0 0 4px", lineHeight: 1 }}>{DOCUMENTS.length}</p>
                <p style={{ fontSize: 10, color: C.tealGrey, margin: 0, letterSpacing: "0.12em", textTransform: "uppercase" }}>Documents tracked</p>
              </div>
              <div>
                <p style={{ fontSize: 24, fontWeight: 700, color: availableCount > 0 ? C.neonMint : C.tealGrey, margin: "0 0 4px", lineHeight: 1 }}>{availableCount}</p>
                <p style={{ fontSize: 10, color: C.tealGrey, margin: 0, letterSpacing: "0.12em", textTransform: "uppercase" }}>Available to download</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 36, paddingTop: 24, borderTop: "1px solid rgba(163,201,226,0.15)", display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { label: "Posting Policy",      value: "Within 30 days of filing" },
              { label: "Redaction Policy",    value: "None beyond legal requirement" },
              { label: "Format",              value: "PDF — original as filed" },
              { label: "Third-party copies",  value: "Also on ProPublica Nonprofit Explorer" },
            ].map(m => (
              <div key={m.label}>
                <p style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 4px" }}>{m.label}</p>
                <p style={{ fontSize: 12, color: C.mist, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px 80px" }}>

        {/* ── Type filters ── */}
        <SectionRule label="Document Archive" />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
          <TypeFilterPill label="All Documents" active={activeType === "All Documents"} count={DOCUMENTS.length} onClick={() => setActiveType("All Documents")} />
          {Object.keys(DOC_TYPES).map(type => typeCounts[type] ? (
            <TypeFilterPill key={type} label={type} active={activeType === type} count={typeCounts[type]} onClick={() => setActiveType(type)} />
          ) : null)}
        </div>

        {/* ── Document grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16, marginBottom: 16 }}>
          {filtered.map((doc, i) => <DocumentCard key={doc.id} doc={doc} index={i} mounted={mounted} />)}
        </div>
        <p style={{ fontSize: 11, color: C.tealGrey, margin: "8px 0 0", fontFamily: "Hanken Grotesk, sans-serif" }}>
          Showing {filtered.length} of {DOCUMENTS.length} tracked documents
        </p>

        {/* ── Two column: Timeline + Guide ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 56 }}>
          <div>
            <SectionRule label="Filing Timeline" />
            <p style={{ fontSize: 12, color: C.slateInk, lineHeight: 1.75, marginBottom: 28 }}>Key milestones in the foundation's public filing history and upcoming obligations.</p>
            <FilingTimeline />
          </div>
          <div>
            <SectionRule label="How to Read a 990-PF" />
            <p style={{ fontSize: 12, color: C.slateInk, lineHeight: 1.75, marginBottom: 20 }}>The 990-PF is a dense document. This guide explains the sections most relevant to understanding a foundation's grantmaking, governance, and financial health. Click any part to expand.</p>
            {GUIDE_SECTIONS.map((section, i) => <GuideRow key={i} section={section} />)}
          </div>
        </div>

        {/* ── Third-party sources ── */}
        <SectionRule label="Third-Party Sources" />
        <p style={{ fontSize: 13, color: C.slateInk, lineHeight: 1.8, marginBottom: 24, maxWidth: 680 }}>
          Our filings will also appear in the following public databases once processed. We list them here because applicants and donors should not have to rely on us as the sole source of our own public records.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {THIRD_PARTY_SOURCES.map((source, i) => (
            <div key={i} style={{ border: "1px solid rgba(163,201,226,0.12)", borderRadius: 2, padding: "20px", background: C.navy }}>
              <a href={source.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 600, color: C.mist, fontFamily: "Hanken Grotesk, sans-serif", textDecoration: "none", display: "block", marginBottom: 8 }}>
                {source.name} ↗
              </a>
              <p style={{ fontSize: 11, color: C.orchid, lineHeight: 1.65, margin: "0 0 12px", fontFamily: "Hanken Grotesk, sans-serif" }}>{source.desc}</p>
              <div style={{ borderTop: "1px solid rgba(163,201,226,0.12)", paddingTop: 10 }}>
                <p style={{ fontSize: 9, color: C.tealGrey, margin: "0 0 2px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Hanken Grotesk, sans-serif" }}>Posting Lag</p>
                <p style={{ fontSize: 11, color: C.sky, margin: 0, fontFamily: "Hanken Grotesk, sans-serif" }}>{source.delay}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Discrepancy note ── */}
        <div style={{ marginTop: 48, padding: "24px 28px", border: "1px solid rgba(163,201,226,0.15)", borderLeft: `3px solid ${C.neonMint}`, borderRadius: 2, background: C.navy }}>
          <p style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: C.tealGrey, margin: "0 0 10px", fontFamily: "Hanken Grotesk, sans-serif" }}>Notice a Discrepancy?</p>
          <p style={{ fontSize: 13, color: C.orchid, lineHeight: 1.8, margin: "0 0 14px", maxWidth: 680 }}>
            If you believe a document listed here differs from the version on file with the IRS or another database, please contact us. We treat all discrepancy reports seriously. The version filed with the IRS is the governing legal record.
          </p>
          <a href="mailto:roconnor@ghostsworthchasing.org" style={{ fontSize: 12, color: C.sky, fontFamily: "Hanken Grotesk, sans-serif", textDecoration: "none" }}>
            roconnor@ghostsworthchasing.org →
          </a>
        </div>

        {/* ── Cross-links ── */}
        <div style={{ marginTop: 40, display: "flex", gap: 24, flexWrap: "wrap" }}>
          <a href="/transparency"           style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>← Transparency Dashboard</a>
          <a href="/transparency/decisions" style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Decision Log →</a>
          <a href="/transparency/grants"    style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Grant Registry →</a>
          <a href="/criteria"               style={{ fontSize: 11, color: C.sky, textDecoration: "none", fontFamily: "Hanken Grotesk, sans-serif" }}>Grantmaking Criteria →</a>
        </div>

      </div>
    </div>
  );
}
