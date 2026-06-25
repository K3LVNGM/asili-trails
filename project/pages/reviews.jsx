// Asili / Savera — Guest reviews.
const RvH = window.SaveraDesignSystem_d2991c;
const RvI = window.SaveraIcons;
const { REVIEWS } = window.AT;
const { ATWrap: Wrap, ATSectionHead: SectionHead, ATPageHero: PageHero } = window;

function ReviewCard({ r }) {
  return (
    <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", padding: "30px 30px", display: "flex", flexDirection: "column", gap: 16, breakInside: "avoid" }}>
      <span style={{ color: "var(--gold-300)" }}><RvI.Quote s={30} /></span>
      <RvH.StarRating value={r.rating} size={17} />
      <p style={{ margin: 0, font: "var(--fw-regular) var(--fs-md)/1.6 var(--font-sans)", color: "var(--text-body)" }}>“{r.text}”</p>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 4, paddingTop: 16, borderTop: "1px solid var(--border-light)" }}>
        <RvH.Avatar name={r.name} size={44} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ font: "var(--fw-bold) var(--fs-sm)/1.2 var(--font-sans)", color: "var(--text-strong)" }}>{r.name}</span>
          <span style={{ font: "var(--fw-regular) var(--fs-2xs)/1.4 var(--font-sans)", color: "var(--text-muted)" }}>{r.place} · {r.trip} · {r.date}</span>
        </div>
      </div>
    </div>
  );
}

function ReviewsPage() {
  const platforms = [["Feefo", "2,140 reviews", "Platinum Trusted"], ["Tripadvisor", "1,884 reviews", "Travellers' Choice"], ["Google", "960 reviews", "Rated Excellent"]];
  return (
    <React.Fragment>
      <window.ATHeader active="reviews" transparent />
      <PageHero crumbs="Home · Reviews" eyebrow="in our guests' words" title="Guest reviews"
        sub="Five thousand journeys and counting. Here's what travelling with Savera actually feels like — straight from the people who've done it."
        id="1547036967-23d11aacaee0" />

      {/* Summary band */}
      <section style={{ background: "var(--forest-900)", padding: "56px 40px" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingRight: 48, borderRight: "1px solid var(--divider-on-dark)" }}>
            <span style={{ font: "var(--fw-light) var(--fs-5xl)/0.9 var(--font-sans)", color: "#fff" }}>4.9</span>
            <RvH.StarRating value={5} size={22} />
            <span style={{ font: "var(--body-sm)", color: "var(--sage-300)" }}>from 4,984 verified reviews</span>
          </div>
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
            {platforms.map(([n, c, s], i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center", padding: "0 40px", borderRight: i < 2 ? "1px solid var(--divider-on-dark)" : "none" }}>
                <span style={{ font: "var(--fw-light) var(--fs-lg)/1 var(--font-sans)", color: "#fff", textTransform: "uppercase", letterSpacing: "var(--ls-heading)" }}>{n}</span>
                <RvH.StarRating value={5} size={16} />
                <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1.3 var(--font-sans)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-400)" }}>{s}</span>
                <span style={{ font: "var(--body-sm)", color: "var(--sage-300)" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Wrap bg="var(--surface-page)">
        <div style={{ columnGap: 28, columnWidth: 360 }}>
          {REVIEWS.map((r, i) => <div key={i} style={{ marginBottom: 28 }}><ReviewCard r={r} /></div>)}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
          <RvH.Button variant="secondary">Load more reviews</RvH.Button>
        </div>
      </Wrap>

      <Wrap bg="var(--sage-600)" py="64px">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ margin: 0, fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 26, color: "var(--gold-300)" }}>your story starts here</p>
            <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.1 var(--font-sans)", textTransform: "uppercase", color: "#fff", letterSpacing: "var(--ls-heading)" }}>Become our next happy traveller</h2>
          </div>
          <RvH.Button variant="primary" size="lg" onClick={() => (location.href = "contact.html")}>Plan my trip</RvH.Button>
        </div>
      </Wrap>
      <window.ATFooter />
    </React.Fragment>
  );
}
window.ATReviewsPage = ReviewsPage;
