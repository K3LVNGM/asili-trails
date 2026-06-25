// Asili / Savera — Pricing & travel styles.
const PrH = window.SaveraDesignSystem_d2991c;
const PrI = window.SaveraIcons;
const { TIERS } = window.AT;
const { ATWrap: Wrap, ATSectionHead: SectionHead, ATPageHero: PageHero } = window;
const prfmt = (n) => "£" + n.toLocaleString();

function TierCard({ t }) {
  const feat = t.featured;
  return (
    <div style={{ position: "relative", background: feat ? "var(--forest-800)" : "var(--surface-card)", color: feat ? "#fff" : "var(--text-strong)", borderRadius: "var(--radius-md)", boxShadow: feat ? "var(--shadow-lg)" : "var(--shadow-card)", padding: "36px 32px", display: "flex", flexDirection: "column", gap: 18, transform: feat ? "translateY(-12px)" : "none", border: feat ? "none" : "1px solid var(--border-light)" }}>
      {feat && <div style={{ position: "absolute", top: 18, right: 18, font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--forest-900)", background: "var(--gold-500)", padding: "6px 12px", borderRadius: "var(--radius-pill)" }}>Most loved</div>}
      <div>
        <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.18em", textTransform: "uppercase", color: t.accent }}>{t.name}</div>
        <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 22, color: feat ? "var(--gold-300)" : "var(--gold-600)", marginTop: 8 }}>{t.tagline}</div>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ font: "var(--fw-regular) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase", color: feat ? "var(--sage-300)" : "var(--text-muted)" }}>from</span>
        <span style={{ font: "var(--fw-black) var(--fs-3xl)/1 var(--font-sans)" }}>{prfmt(t.from)}</span>
        <span style={{ font: "var(--body-sm)", color: feat ? "var(--sage-300)" : "var(--text-muted)" }}>pp</span>
      </div>
      <div style={{ height: 1, background: feat ? "var(--divider-on-dark)" : "var(--border-light)" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {t.points.map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", font: "var(--body-sm)", color: feat ? "var(--sage-200)" : "var(--text-body)" }}>
            <span style={{ color: feat ? "var(--gold-400)" : "var(--sage-600)", flexShrink: 0, marginTop: 1 }}><PrI.Check s={16} /></span>{p}
          </div>
        ))}
      </div>
      <PrH.Button variant={feat ? "primary" : "secondary"} fullWidth onClick={() => (location.href = "booking.html")}>Start with {t.name}</PrH.Button>
    </div>
  );
}

const COMPARE = [
  ["Accommodation", "Classic camps & lodges", "Premium tented camps", "Exclusive-use lodges"],
  ["Vehicle", "Shared / private 4x4", "Private 4x4", "Private 4x4 + light aircraft"],
  ["Guiding", "Expert driver-guide", "Dedicated specialist guide", "Private guide & trip designer"],
  ["Balloon safari", "Optional add-on", "Included", "Included"],
  ["Bush dining & sundowners", "—", "Included", "Bespoke & private"],
  ["Park & conservation fees", "Included", "Included", "Included"],
  ["Financial protection", "ATOL", "ATOL", "ATOL"],
];

const FAQ = [
  ["Are flights included?", "International flights can be added to any package, and all internal flights and light-aircraft transfers within Tanzania are included from Signature level upward. We'll always quote both options clearly."],
  ["Is anything not included?", "Guide and camp gratuities, premium drinks, travel insurance and personal spending are excluded. Everything else on your itinerary — parks, meals, transfers and guiding — is covered."],
  ["When is the best time to travel?", "The dry season (June–October) offers the best general game-viewing and the river crossings. Calving season (January–March) is superb for predators. Your specialist will match the timing to what you most want to see."],
  ["How far ahead should I book?", "Prime camps for peak season sell out 8–12 months ahead. That said, we can often arrange last-minute trips — talk to a specialist and we'll tell you honestly what's possible."],
  ["Do you tailor every trip?", "Always. The prices here are starting points for our most-loved routes; every Asili Trails journey is then shaped around your dates, pace, interests and budget."],
];

function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--border-light)" }}>
      <button onClick={() => setOpen((o) => !o)} style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "22px 0", textAlign: "left" }}>
        <span style={{ font: "var(--fw-bold) var(--fs-md)/1.3 var(--font-sans)", color: "var(--text-strong)" }}>{q}</span>
        <span style={{ color: "var(--gold-600)", transform: open ? "rotate(180deg)" : "none", transition: "transform var(--dur-fast)", flexShrink: 0 }}><PrI.ChevronDown s={20} /></span>
      </button>
      {open && <p style={{ margin: "0 0 22px", font: "var(--body)", color: "var(--text-body)", maxWidth: "70ch" }}>{a}</p>}
    </div>
  );
}

function PricingPage() {
  return (
    <React.Fragment>
      <window.ATHeader active="pricing" transparent />
      <PageHero crumbs="Home · Pricing" eyebrow="honest, transparent pricing" title="Travel styles & pricing"
        sub="No hidden costs, no pressure. Choose the level of comfort that suits you — then we tailor the journey, and the price, around your trip."
        id="1500964757637-c85e8a162699" />
      <Wrap bg="var(--surface-page)">
        <SectionHead eyebrow="three ways to travel" title="Find your level of comfort" intro="Every tier includes private guiding, all park fees and full financial protection. The difference is in the camps, the pace and the touches." />
        <div className="at-grid at-grid-3" style={{ alignItems: "stretch", paddingTop: 12 }}>
          {TIERS.map((t) => <TierCard key={t.name} t={t} />)}
        </div>
        <p style={{ textAlign: "center", marginTop: 40, font: "var(--body-sm)", color: "var(--text-muted)" }}>Prices are per person, twin-share, and exclude international flights unless stated. Single travellers and groups welcome.</p>
      </Wrap>

      <Wrap bg="var(--surface-warm)">
        <SectionHead align="left" eyebrow="compare the detail" title="What's included" />
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
            <thead>
              <tr>
                <th style={thLeft}></th>
                {TIERS.map((t) => <th key={t.name} style={{ ...th, color: t.featured ? "var(--gold-600)" : "var(--text-strong)" }}>{t.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={i} style={{ background: i % 2 ? "transparent" : "rgba(255,255,255,0.5)" }}>
                  <td style={tdLeft}>{row[0]}</td>
                  {row.slice(1).map((c, j) => <td key={j} style={{ ...td, fontWeight: j === 1 ? 700 : 400, color: j === 1 ? "var(--text-strong)" : "var(--text-body)" }}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Wrap>

      <Wrap bg="var(--surface-page)">
        <SectionHead eyebrow="good to know" title="Frequently asked" />
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {FAQ.map(([q, a], i) => <FaqItem key={i} q={q} a={a} />)}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
          <PrH.Button variant="primary" size="lg" onClick={() => (location.href = "contact.html")}>Talk to a specialist</PrH.Button>
        </div>
      </Wrap>
      <window.ATFooter />
    </React.Fragment>
  );
}
const th = { padding: "16px 18px", textAlign: "left", font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.14em", textTransform: "uppercase", borderBottom: "2px solid var(--border-light)" };
const thLeft = { ...th, width: "28%" };
const td = { padding: "16px 18px", font: "var(--body-sm)", color: "var(--text-body)", borderBottom: "1px solid var(--border-light)" };
const tdLeft = { ...td, font: "var(--fw-bold) var(--fs-sm)/1.3 var(--font-sans)", color: "var(--text-strong)", textTransform: "uppercase", letterSpacing: "0.06em" };
window.ATPricingPage = PricingPage;
