// Asili / Savera — Home page.
const HS = window.SaveraDesignSystem_d2991c;
const Icn = window.SaveraIcons;
const { P, TOURS, DESTS, BLOG } = window.AT;
const { ATContainer: Container, ATWrap: Wrap, ATScript: Script, ATSectionHead: SectionHead, ATCover: Cover } = window;

const fmt = (n) => "£" + n.toLocaleString();

// ---------------- HERO (two directions) ----------------
function HeroCinematic() {
  return (
    <section style={{ position: "relative", minHeight: 760, marginTop: -72, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <img src={P("1516426122078-c23e76319801", 2200)} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(22,32,29,0.5) 0%, rgba(22,32,29,0.15) 38%, rgba(22,32,29,0.72) 100%)" }} />
      <div style={{ position: "relative", textAlign: "center", color: "#fff", padding: "120px 24px 0", maxWidth: 920 }}>
        <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 36, color: "var(--gold-300)", marginBottom: 12 }}>your wild Tanzania, beautifully</div>
        <h1 style={{ margin: 0, font: "300 clamp(42px, 6vw, 76px)/1.04 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", textWrap: "balance" }}>Wake the wild within you</h1>
        <p style={{ margin: "26px auto 34px", maxWidth: 560, font: "var(--fw-regular) var(--fs-md)/1.65 var(--font-sans)", color: "rgba(255,255,255,0.92)" }}>
          Hand-crafted journeys across the Serengeti, Ngorongoro, Kilimanjaro and Zanzibar — designed by specialists who have travelled every trail.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <HS.Button variant="primary" size="lg" onClick={() => (location.href = "contact.html")}>Start your journey</HS.Button>
          <HS.Button variant="ghost" size="lg" onDark onClick={() => (location.href = "tours.html")} trailingIcon={<Icn.ArrowRight s={16} />}>Browse tours</HS.Button>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.7)" }}>
        <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.24em", textTransform: "uppercase" }}>Scroll</span>
        <span style={{ width: 1, height: 36, background: "rgba(255,255,255,0.5)" }} />
      </div>
    </section>
  );
}

function HeroEditorial() {
  return (
    <section className="at-split" style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", minHeight: 760, marginTop: -72, background: "var(--forest-900)" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 6vw 80px", color: "#fff" }}>
        <div style={{ width: 52, height: 2, background: "var(--gold-400)", marginBottom: 26 }} />
        <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 32, color: "var(--gold-300)", marginBottom: 14 }}>your wild Tanzania, beautifully</div>
        <h1 style={{ margin: 0, font: "300 clamp(40px, 4.4vw, 66px)/1.05 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", textWrap: "balance" }}>Wake the wild within you</h1>
        <p style={{ margin: "26px 0 34px", maxWidth: 460, font: "var(--fw-regular) var(--fs-md)/1.7 var(--font-sans)", color: "var(--sage-300)" }}>
          Hand-crafted journeys across the Serengeti, Ngorongoro, Kilimanjaro and Zanzibar — designed by specialists who have travelled every trail.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <HS.Button variant="primary" size="lg" onClick={() => (location.href = "contact.html")}>Start your journey</HS.Button>
          <HS.Button variant="ghost" size="lg" onDark onClick={() => (location.href = "tours.html")} trailingIcon={<Icn.ArrowRight s={16} />}>Browse tours</HS.Button>
        </div>
        <div style={{ display: "flex", gap: 36, marginTop: 56 }}>
          {[["15+", "Years in Tanzania"], ["4.9★", "From 2,100 guests"], ["B Corp", "Certified"]].map(([n, l], i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ font: "var(--fw-light) var(--fs-xl)/1 var(--font-sans)", color: "#fff" }}>{n}</span>
              <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1.3 var(--font-sans)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--sage-400)" }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "relative", overflow: "hidden", minHeight: 440 }}>
        <img src={P("1516426122078-c23e76319801", 1800)} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(38,48,42,0.55) 0%, rgba(38,48,42,0) 30%)" }} />
      </div>
    </section>
  );
}

function HeroSwitch({ value, onChange }) {
  const opts = [["cinematic", "Cinematic"], ["editorial", "Editorial"]];
  return (
    <div style={{ position: "absolute", top: 96, right: 40, zIndex: 50, display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(27,36,31,0.55)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "var(--radius-pill)", padding: 4 }}>
      <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", padding: "0 8px 0 10px" }}>Hero</span>
      {opts.map(([v, l]) => (
        <button key={v} onClick={() => onChange(v)} style={{ cursor: "pointer", border: "none", borderRadius: "var(--radius-pill)", padding: "7px 14px", font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase", background: value === v ? "var(--gold-500)" : "transparent", color: value === v ? "var(--forest-900)" : "#fff", transition: "background var(--dur-fast)" }}>{l}</button>
      ))}
    </div>
  );
}

// ---------------- Sections ----------------
function FeatureBand() {
  const items = [
    [<Icn.Compass s={28} />, "Expert-led", "Every journey designed by a Tanzania specialist who has travelled it."],
    [<Icn.Leaf s={28} />, "Conservation-first", "A share of every trip funds frontline conservation and communities."],
    [<Icn.Shield s={28} />, "Fully protected", "ATOL-bonded with 24/7 on-the-ground support across the country."],
    [<Icn.Binoculars s={28} />, "Truly tailor-made", "No two Savera itineraries are ever the same — yours is built around you."],
  ];
  return (
    <Wrap bg="var(--forest-800)">
      <SectionHead eyebrow="your adventure, our expertise" title="Why travel with Savera" dark
        intro="For over fifteen years we have curated tailor-made journeys across Tanzania — from the short-grass plains of the Serengeti to a sunrise on the roof of Africa." />
      <div className="at-grid at-grid-4">
        {items.map(([icon, t, d], i) => <HS.FeatureIcon key={i} icon={icon} title={t}>{d}</HS.FeatureIcon>)}
      </div>
    </Wrap>
  );
}

function DestinationGrid() {
  return (
    <Wrap bg="var(--surface-page)">
      <SectionHead eyebrow="discover the wild" title="Our wild places" intro="Six landscapes we know intimately — and the journeys that string them together." />
      <div className="at-grid at-grid-3 tight">
        {DESTS.map((d, i) => <HS.DestinationTile key={i} image={P(d.photo, 1000)} name={d.name} kicker={d.kicker} ratio="3 / 4" onClick={() => (location.href = "destinations.html")} />)}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>
        <HS.Button variant="secondary" onClick={() => (location.href = "destinations.html")}>View all destinations</HS.Button>
      </div>
    </Wrap>
  );
}

function SignatureTrips() {
  const [saved, setSaved] = React.useState({});
  return (
    <Wrap bg="var(--surface-warm)">
      <SectionHead eyebrow="simply inspiring" title="Signature journeys" intro="A starting point for your own tailor-made trip — every itinerary is shaped around you." />
      <div className="at-grid at-grid-4">
        {TOURS.slice(0, 4).map((t, i) => (
          <HS.TripCard key={t.id} image={P(t.photo, 900)} country={t.region} title={t.title} duration={`${t.nights} Nights`} guidePrice={`${fmt(t.price)} pp`}
            saved={!!saved[i]} onSave={() => setSaved(s => ({ ...s, [i]: !s[i] }))} onClick={() => (location.href = "tour-details.html")} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>
        <HS.Button variant="secondary" onClick={() => (location.href = "tours.html")}>View all journeys</HS.Button>
      </div>
    </Wrap>
  );
}

function ReviewBand() {
  const cols = [
    ["Feefo", "2,140 reviews", "Platinum Trusted Service"],
    ["Tripadvisor", "1,884 reviews", "Travellers' Choice 2026"],
    ["Google", "960 reviews", "Rated Excellent"],
  ];
  return (
    <Wrap bg="var(--forest-900)" py="80px">
      <div className="at-grid at-grid-3" style={{ gap: 0 }}>
        {cols.map(([name, count, sub], i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, textAlign: "center", padding: "8px 32px", borderRight: i < 2 ? "1px solid var(--divider-on-dark)" : "none" }}>
            <div style={{ font: "var(--fw-light) var(--fs-lg)/1 var(--font-sans)", color: "#fff", letterSpacing: "var(--ls-heading)", textTransform: "uppercase" }}>{name}</div>
            <HS.StarRating value={5} size={20} />
            <div style={{ font: "var(--body-sm)", color: "var(--sage-300)" }}>{sub}</div>
            <a href="reviews.html" style={{ font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--sage-400)", cursor: "pointer", borderBottom: "1px solid var(--sage-600)", paddingBottom: 2 }}>{count}</a>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function ConservationBanner() {
  return (
    <section style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <img src={P("1516026672322-bc52d61a55d5", 2200)} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(22,32,29,0.35) 0%, rgba(22,32,29,0.82) 100%)" }} />
      <div style={{ position: "relative", textAlign: "center", color: "#fff", maxWidth: 720, padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
        <Icn.Award s={44} c="var(--gold-300)" />
        <p style={{ margin: 0, fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 28, color: "var(--gold-300)" }}>your once-in-a-lifetime</p>
        <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.15 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)" }}>Travel that gives back</h2>
        <p style={{ margin: 0, font: "var(--body)", color: "rgba(255,255,255,0.92)" }}>
          As a certified B Corp, we channel a share of every journey into the conservancies and communities that protect Tanzania's wild places.
        </p>
        <p style={{ margin: "6px 0 0", fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 30, color: "var(--gold-300)" }}>“The wild is worth more alive.”</p>
        <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sage-300)" }}>— Amara Singh, Founder</div>
        <HS.Button variant="secondary" size="lg" onClick={() => (location.href = "about.html")} style={{ marginTop: 8 }}>Our promise</HS.Button>
      </div>
    </section>
  );
}

function HowToBook() {
  const steps = [
    ["Share your dream", "Tell us where, when and who's travelling."],
    ["Design together", "Your specialist crafts a tailor-made route."],
    ["Refine the detail", "Adjust lodges, pace and budget until it sings."],
    ["Go wild", "Travel with 24/7 on-the-ground support."],
  ];
  return (
    <Wrap bg="var(--forest-800)">
      <SectionHead eyebrow="your taste of the wild" title="How it works" dark />
      <div className="at-grid at-grid-4" style={{ gap: 32 }}>
        {steps.map(([t, d], i) => <HS.StepItem key={i} number={i + 1} title={t}>{d}</HS.StepItem>)}
      </div>
    </Wrap>
  );
}

function JournalGrid() {
  return (
    <Wrap bg="var(--surface-page)">
      <SectionHead eyebrow="always astonishing" title="From the journal" intro="Stories, field notes and expert advice from the people who travel these wild places year-round." />
      <div className="at-grid at-grid-3">
        {BLOG.slice(0, 3).map((b, i) => <HS.BlogCard key={i} image={P(b.photo, 900)} category={b.cat} date={b.date} title={b.title} excerpt={b.excerpt} onClick={() => (location.href = "blog.html")} />)}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>
        <HS.Button variant="secondary" onClick={() => (location.href = "blog.html")}>Read the journal</HS.Button>
      </div>
    </Wrap>
  );
}

function EnquiryStrip() {
  return (
    <Wrap bg="var(--sage-600)" py="64px">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ margin: 0, fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 26, color: "var(--gold-300)" }}>start your unique journey</p>
          <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.1 var(--font-sans)", textTransform: "uppercase", color: "#fff", letterSpacing: "var(--ls-heading)" }}>Ready to explore Tanzania?</h2>
          <p style={{ margin: 0, font: "var(--body)", color: "rgba(255,255,255,0.92)" }}>Speak to a specialist today — no obligation, just expert guidance.</p>
        </div>
        <HS.Button variant="primary" size="lg" onClick={() => (location.href = "contact.html")}>Enquire now</HS.Button>
      </div>
    </Wrap>
  );
}

function HomePage() {
  const [hero, setHero] = React.useState(() => localStorage.getItem("at_hero") || "cinematic");
  const setH = (v) => { setHero(v); localStorage.setItem("at_hero", v); };
  return (
    <React.Fragment>
      <window.ATHeader active="home" transparent={hero === "cinematic"} />
      <div style={{ position: "relative" }}>
        <HeroSwitch value={hero} onChange={setH} />
        {hero === "cinematic" ? <HeroCinematic /> : <HeroEditorial />}
      </div>
      <FeatureBand />
      <DestinationGrid />
      <SignatureTrips />
      <ReviewBand />
      <ConservationBanner />
      <HowToBook />
      <JournalGrid />
      <EnquiryStrip />
      <window.ATFooter />
    </React.Fragment>
  );
}
window.ATHomePage = HomePage;
