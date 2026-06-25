// Asili / Savera — Journal (blog) listing.
const BlH = window.SaveraDesignSystem_d2991c;
const BlI = window.SaveraIcons;
const { P, BLOG } = window.AT;
const { ATWrap: Wrap, ATCover: Cover, ATSectionHead: SectionHead, ATPageHero: PageHero } = window;

function Featured({ b }) {
  return (
    <article onClick={() => (location.href = "blog.html")} className="at-split" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 48, alignItems: "center", cursor: "pointer" }}>
      <Cover id={b.photo} ratio="16 / 10" zoom radius="var(--radius-md)" />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold-600)" }}>{b.cat} · {b.date} · {b.read} read</span>
        <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.12 var(--font-sans)", color: "var(--text-strong)", textWrap: "balance" }}>{b.title}</h2>
        <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)" }}>{b.excerpt} Our specialists share the timing, the tactics and the small details that turn a good safari into an unforgettable one.</p>
        <a href="blog.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--gold-600)", marginTop: 4 }}>Read the story <BlI.ArrowRight s={16} /></a>
      </div>
    </article>
  );
}

function BlogPage() {
  const [cat, setCat] = React.useState("All");
  const cats = ["All", ...Array.from(new Set(BLOG.map((b) => b.cat)))];
  const rest = BLOG.slice(1).filter((b) => cat === "All" || b.cat === cat);
  return (
    <React.Fragment>
      <window.ATHeader active="blog" transparent />
      <PageHero crumbs="Home · Journal" eyebrow="stories from the wild" title="The Asili Trails Journal"
        sub="Field notes, expert guides and conservation stories from the people who travel Tanzania year-round."
        id="1456926631375-92c8ce872def" />
      <Wrap bg="var(--surface-page)">
        <Featured b={BLOG[0]} />
      </Wrap>
      <Wrap bg="var(--surface-warm)">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
          <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-xl)/1.1 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)" }}>Latest stories</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {cats.map((c) => <BlH.Tag key={c} active={cat === c} onClick={() => setCat(c)}>{c}</BlH.Tag>)}
          </div>
        </div>
        <div className="at-grid at-grid-3">
          {rest.map((b, i) => <BlH.BlogCard key={i} image={P(b.photo, 900)} category={`${b.cat} · ${b.read}`} date={b.date} title={b.title} excerpt={b.excerpt} onClick={() => (location.href = "blog.html")} />)}
        </div>
      </Wrap>
      <Wrap bg="var(--forest-800)" py="80px">
        <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 28, color: "var(--gold-300)" }}>never miss a story</div>
          <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.12 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "#fff" }}>Join the Asili journal</h2>
          <p style={{ margin: 0, font: "var(--body)", color: "var(--sage-300)" }}>Seasonal travel advice, conservation news and quiet trip ideas — once a month, never spam.</p>
          <div style={{ display: "flex", gap: 12, width: "100%", maxWidth: 460, marginTop: 8, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 200 }}><BlH.Input placeholder="your@email.com" type="email" onDark /></div>
            <BlH.Button variant="primary">Subscribe</BlH.Button>
          </div>
        </div>
      </Wrap>
      <window.ATFooter />
    </React.Fragment>
  );
}
window.ATBlogPage = BlogPage;
