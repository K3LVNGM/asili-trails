// Asili / Savera — Tours listing page.
const TH = window.SaveraDesignSystem_d2991c;
const TI = window.SaveraIcons;
const { P, TOURS } = window.AT;
const { ATWrap: Wrap, ATSectionHead: SectionHead, ATCover: Cover, ATPageHero: PageHero } = window;
const tfmt = (n) => "£" + n.toLocaleString();

function TourCard({ t }) {
  const [hov, setHov] = React.useState(false);
  return (
    <article onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => (location.href = "tour-details.html")}
      style={{ display: "flex", flexDirection: "column", background: "var(--surface-card)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: hov ? "var(--shadow-md)" : "var(--shadow-card)", transform: hov ? "translateY(-4px)" : "none", transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)", cursor: "pointer" }}>
      <div style={{ position: "relative" }}>
        <Cover id={t.photo} ratio="16 / 10" zoom overlay />
        {t.badge && <div style={{ position: "absolute", top: 14, left: 14 }}><TH.Badge variant="gold">{t.badge}</TH.Badge></div>}
        <div style={{ position: "absolute", right: 14, bottom: 12, font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.16em", textTransform: "uppercase", color: "#fff", display: "inline-flex", alignItems: "center", gap: 6 }}><TI.Clock s={14} c="var(--gold-300)" />{t.nights} Nights</div>
      </div>
      <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-600)" }}>{t.region}</span>
        <h3 style={{ margin: 0, font: "var(--fw-bold) var(--fs-xl)/1.15 var(--font-sans)", color: "var(--text-strong)" }}>{t.title}</h3>
        <p style={{ margin: 0, font: "var(--body-sm)", color: "var(--text-body)", flex: 1 }}>{t.blurb}</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {t.tags.slice(0, 3).map((tag, i) => <TH.Tag key={i}>{tag}</TH.Tag>)}
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 6, paddingTop: 16, borderTop: "1px solid var(--border-light)" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ font: "var(--fw-regular) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 4 }}>Guide price from</span>
            <span style={{ font: "var(--fw-black) var(--fs-xl)/1 var(--font-sans)", color: "var(--text-strong)" }}>{tfmt(t.price)} <span style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>pp</span></span>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--gold-600)" }}>View details <TI.ArrowRight s={16} /></span>
        </div>
      </div>
    </article>
  );
}

function ToursPage() {
  const [filter, setFilter] = React.useState("All");
  const filters = ["All", "Safari", "Mountain", "Beach", "Family", "Honeymoon"];
  const match = (t) => {
    if (filter === "All") return true;
    if (filter === "Mountain") return t.title.includes("Kilimanjaro");
    if (filter === "Beach") return t.tags.includes("Beach");
    if (filter === "Family") return t.tags.includes("Families");
    if (filter === "Honeymoon") return t.tags.includes("Honeymoon");
    if (filter === "Safari") return !t.title.includes("Kilimanjaro") && !t.tags.includes("Beach");
    return true;
  };
  const list = TOURS.filter(match);
  return (
    <React.Fragment>
      <window.ATHeader active="tours" transparent />
      <PageHero crumbs="Home · Tours" eyebrow="every journey, tailor-made" title="Our Tanzania journeys"
        sub="Hand-built itineraries from the Serengeti to the summit of Kilimanjaro and the shores of Zanzibar. Each is a starting point — we shape it around you."
        id="1516026672322-bc52d61a55d5" />
      <Wrap bg="var(--surface-page)">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 18, marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {filters.map((f) => <TH.Tag key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</TH.Tag>)}
          </div>
          <span style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>{list.length} {list.length === 1 ? "journey" : "journeys"}</span>
        </div>
        <div className="at-grid at-grid-3">
          {list.map((t) => <TourCard key={t.id} t={t} />)}
        </div>
      </Wrap>
      <Wrap bg="var(--forest-800)" py="80px">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 28, color: "var(--gold-300)" }}>can't see your perfect trip?</div>
          <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.15 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "#fff", maxWidth: "20ch" }}>Every Asili Trails journey is built from scratch</h2>
          <p style={{ margin: 0, font: "var(--body)", color: "var(--sage-300)", maxWidth: "56ch" }}>Tell us your dates, your dream and your budget — a specialist will design something entirely your own.</p>
          <TH.Button variant="primary" size="lg" onClick={() => (location.href = "contact.html")} style={{ marginTop: 8 }}>Design my trip</TH.Button>
        </div>
      </Wrap>
      <window.ATFooter />
    </React.Fragment>
  );
}
window.ATToursPage = ToursPage;
