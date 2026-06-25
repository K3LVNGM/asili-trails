// Asili / Savera — Tour Details (sample: The Great Migration).
const DH = window.SaveraDesignSystem_d2991c;
const DI = window.SaveraIcons;
const { P, TOURS } = window.AT;
const { ATContainer: Container, ATWrap: Wrap, ATCover: Cover } = window;
const dfmt = (n) => "£" + n.toLocaleString();
const TRIP = window.AT.TOURS[0]; // Great Migration

function DetailHero() {
  return (
    <section style={{ position: "relative", minHeight: 600, marginTop: -72, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <img src={P(TRIP.photo, 2200)} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--overlay-photo-strong)" }} />
      <Container style={{ position: "relative", paddingBottom: 52, paddingTop: 130, width: "100%" }}>
        <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
          <DH.Badge variant="gold">{TRIP.nights} Nights</DH.Badge>
          <DH.Badge variant="glass">{TRIP.badge}</DH.Badge>
        </div>
        <div style={{ font: "var(--fw-bold) var(--fs-xs)/1 var(--font-sans)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-300)", marginBottom: 12 }}>{TRIP.region}</div>
        <h1 style={{ margin: 0, font: "300 clamp(40px,5vw,62px)/1.06 var(--font-sans)", textTransform: "uppercase", color: "#fff", letterSpacing: "var(--ls-heading)", maxWidth: 880, textWrap: "balance" }}>{TRIP.title}</h1>
        <div style={{ display: "flex", gap: 26, marginTop: 24, flexWrap: "wrap" }}>
          {[[<DI.Pin s={18} />, TRIP.route], [<DI.Cal s={18} />, "Best " + TRIP.best], [<DI.Lodge s={18} />, "3 luxury camps"], [<DI.Users s={18} />, TRIP.group]].map(([ic, t], i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--fw-regular) var(--fs-sm)/1 var(--font-sans)", color: "rgba(255,255,255,0.94)" }}>
              <span style={{ color: "var(--gold-300)" }}>{ic}</span>{t}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ItineraryList() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {TRIP.days.map(([d, t, desc], i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: 28, padding: "28px 0", borderTop: "1px solid var(--border-light)" }}>
          <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1.4 var(--font-sans)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-600)" }}>{d}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <h3 style={{ margin: 0, font: "var(--heading-3)", color: "var(--text-strong)" }}>{t}</h3>
            <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)" }}>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PriceCard() {
  return (
    <div className="at-aside" style={{ position: "sticky", top: 96, background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", padding: "var(--pad-lg)", display: "flex", flexDirection: "column", gap: 18 }}>
      <div>
        <div style={{ font: "var(--fw-regular) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>Guide price from</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 6 }}>
          <span style={{ font: "var(--fw-black) var(--fs-2xl)/1 var(--font-sans)", color: "var(--text-strong)" }}>{dfmt(TRIP.price)}</span>
          <span style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>per person</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {[[<DI.Plane s={16} />, "International & internal flights"], [<DI.Lodge s={16} />, `${TRIP.nights} nights full-board luxury`], [<DI.Compass s={16} />, "Private expert guiding"], [<DI.Camera s={16} />, "Dawn hot-air balloon flight"], [<DI.Shield s={16} />, "ATOL financial protection"]].map(([ic, t], i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10, font: "var(--body-sm)", color: "var(--text-body)" }}>
            <span style={{ color: "var(--sage-600)" }}>{ic}</span>{t}
          </span>
        ))}
      </div>
      <DH.Button variant="primary" fullWidth onClick={() => (location.href = "booking.html")}>Book this journey</DH.Button>
      <DH.Button variant="ghost" fullWidth onClick={() => (location.href = "contact.html")}>Enquire first</DH.Button>
      <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid var(--border-light)" }}>
        <DH.Avatar name="Thabo Nkosi" size={44} ring />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>Your specialist</span>
          <span style={{ font: "var(--fw-bold) var(--fs-sm)/1.2 var(--font-sans)", color: "var(--text-strong)" }}>Thabo Nkosi · Arusha</span>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const ids = ["1535941339077-2dd1c7963098", "1546182990-dffeafbe841d", "1518621736915-f3b1c41bfd00", "1456926631375-92c8ce872def", "1547036967-23d11aacaee0", "1557050543-4d5f4e07ef46"];
  return (
    <div className="at-grid at-grid-3 tight">
      {ids.map((id, i) => <Cover key={i} id={id} ratio="4 / 3" zoom radius="var(--radius-sm)" />)}
    </div>
  );
}

function Lodges() {
  const lodges = [["Serengeti Migration Camp", "1546026423-cc4642628d2b"], ["Ngorongoro Crater Lodge", "1500964757637-c85e8a162699"], ["Highlands Tented Camp", "1523592121529-f6dde35f079e"]];
  return (
    <div className="at-grid at-grid-3">
      {lodges.map(([n, id], i) => (
        <div key={i} style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
          <Cover id={id} ratio="4 / 3" zoom />
          <div style={{ padding: "16px 18px" }}>
            <h3 style={{ margin: "0 0 6px", font: "var(--heading-3)", color: "var(--text-strong)" }}>{n}</h3>
            <DH.StarRating value={5} size={15} />
          </div>
        </div>
      ))}
    </div>
  );
}

function RelatedTrips() {
  const rel = TOURS.slice(1, 4);
  return (
    <Wrap bg="var(--surface-warm)">
      <h2 style={{ margin: "0 0 36px", font: "var(--fw-light) var(--fs-xl)/1.1 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)" }}>You might also love</h2>
      <div className="at-grid at-grid-3">
        {rel.map((t) => (
          <DH.TripCard key={t.id} image={P(t.photo, 900)} country={t.region} title={t.title} duration={`${t.nights} Nights`} guidePrice={`${dfmt(t.price)} pp`} onClick={() => (location.href = "tour-details.html")} />
        ))}
      </div>
    </Wrap>
  );
}

function TourDetailPage() {
  const [tab, setTab] = React.useState("itinerary");
  const overview = (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <p style={{ margin: 0, font: "var(--fw-regular) var(--fs-md)/1.7 var(--font-sans)", color: "var(--text-body)" }}>{TRIP.blurb}</p>
      <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)" }}>
        This is the journey Tanzania is famous for. You'll follow the herds across the Serengeti's short-grass plains as predators shadow their every move, drift over the savanna in a dawn balloon, and descend into the Ngorongoro Crater — a self-contained Eden of lion, rhino and flamingo. Every drive is private, every camp hand-picked, every sunset earned.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
        {TRIP.tags.map((t, i) => <DH.Tag key={i}>{t}</DH.Tag>)}
      </div>
    </div>
  );
  return (
    <React.Fragment>
      <window.ATHeader active="tours" transparent />
      <DetailHero />
      <section style={{ background: "var(--surface-page)", padding: "64px 0 var(--section-y)" }}>
        <Container>
          <div className="at-split" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 56, alignItems: "start" }}>
            <div>
              <DH.Tabs onChange={setTab} value={tab} items={[
                { value: "overview", label: "Overview", content: overview },
                { value: "itinerary", label: "Day by day", content: <ItineraryList /> },
                { value: "lodges", label: "Lodges", content: <Lodges /> },
                { value: "gallery", label: "Gallery", content: <Gallery /> },
              ]} />
            </div>
            <PriceCard />
          </div>
        </Container>
      </section>
      <RelatedTrips />
      <window.ATFooter />
    </React.Fragment>
  );
}
window.ATTourDetailPage = TourDetailPage;
