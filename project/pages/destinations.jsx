// Asili / Savera — Destinations.
const NH = window.SaveraDesignSystem_d2991c;
const NI = window.SaveraIcons;
const { P } = window.AT;
const { ATContainer: Container, ATWrap: Wrap, ATCover: Cover, ATSectionHead: SectionHead, ATPageHero: PageHero } = window;

const PLACES = [
  { name: "Serengeti", kicker: "The endless plains", photo: "1535941339077-2dd1c7963098", best: "Jun – Oct",
    body: "Fourteen thousand square kilometres of golden grass and the greatest wildlife spectacle on earth. The Serengeti is the stage for the Great Migration — and home to lion, cheetah and leopard in extraordinary density.",
    species: ["Lion", "Cheetah", "Wildebeest", "Leopard"] },
  { name: "Ngorongoro Crater", kicker: "Africa's Eden", photo: "1500964757637-c85e8a162699", best: "All year",
    body: "The world's largest intact volcanic caldera — a 600-metre-deep bowl sheltering some 25,000 large animals, including one of the best chances anywhere to see the endangered black rhino.",
    species: ["Black rhino", "Flamingo", "Hippo", "Elephant"] },
  { name: "Mount Kilimanjaro", kicker: "The roof of Africa", photo: "1505765050516-f72dcac9c60e", best: "Jan – Mar · Jun – Oct",
    body: "At 5,895 metres, the highest free-standing mountain on earth rises from the savanna through five climate zones to an equatorial glacier. A summit at sunrise is the trek of a lifetime.",
    species: ["5 climate zones", "Glaciers", "Uhuru Peak"] },
  { name: "Tarangire", kicker: "Baobab country", photo: "1549366021-9f761d450615", best: "Jun – Oct",
    body: "Famous for its ancient baobabs and the largest elephant herds in northern Tanzania, Tarangire is a quieter, wilder counterpoint to the Serengeti — and superb for birdlife along the river.",
    species: ["Elephant", "Baobab", "550 bird species"] },
  { name: "Zanzibar", kicker: "The spice islands", photo: "1505881502353-a1986add3762", best: "Jun – Mar",
    body: "Trade dust for turquoise. The Zanzibar archipelago pairs the carved-door labyrinth of UNESCO-listed Stone Town with powder-white beaches and the coral gardens of the Mnemba atoll.",
    species: ["Stone Town", "Coral reefs", "Spice farms"] },
  { name: "Lake Manyara", kicker: "Rift valley jewel", photo: "1523592121529-f6dde35f079e", best: "Jun – Oct",
    body: "A slender soda lake beneath the Rift Valley escarpment, framed by groundwater forest. Famous for its tree-climbing lions and shallows stained pink with thousands of flamingos.",
    species: ["Tree-climbing lions", "Flamingo", "Baboon"] },
];

function PlaceRow({ p, flip, i }) {
  const text = (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center", padding: "8px 4px" }}>
      <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 26, color: "var(--gold-600)" }}>{p.kicker}</div>
      <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.1 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)" }}>{p.name}</h2>
      <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)" }}>{p.body}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
        {p.species.map((s, j) => <NH.Tag key={j}>{s}</NH.Tag>)}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 10 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--body-sm)", color: "var(--text-muted)" }}><NI.Cal s={16} c="var(--sage-600)" /> Best {p.best}</span>
        <a href="tours.html" style={{ display: "inline-flex", alignItems: "center", gap: 6, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--gold-600)" }}>Explore tours <NI.ArrowRight s={16} /></a>
      </div>
    </div>
  );
  const img = <Cover id={p.photo} ratio="4 / 3" zoom radius="var(--radius-md)" position={p.name === "Mount Kilimanjaro" ? "center" : "center"} />;
  return (
    <div className="at-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "stretch" }}>
      {flip ? <React.Fragment>{text}{img}</React.Fragment> : <React.Fragment>{img}{text}</React.Fragment>}
    </div>
  );
}

function DestinationsPage() {
  return (
    <React.Fragment>
      <window.ATHeader active="destinations" transparent />
      <PageHero crumbs="Home · Destinations" eyebrow="from the plains to the shore" title="Where we'll take you"
        sub="Tanzania holds the whole of Africa in one country — the Serengeti, a snow-capped equator, ancient baobabs and the warm Indian Ocean. These are the wild places we know best."
        id="1547471080-7cc2caa01a7e" />
      <Wrap bg="var(--surface-page)">
        <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
          {PLACES.map((p, i) => <PlaceRow key={p.name} p={p} flip={i % 2 === 1} i={i} />)}
        </div>
      </Wrap>
      <Wrap bg="var(--sage-600)" py="64px">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ margin: 0, fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 26, color: "var(--gold-300)" }}>combine them beautifully</p>
            <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.1 var(--font-sans)", textTransform: "uppercase", color: "#fff", letterSpacing: "var(--ls-heading)" }}>Bush, mountain &amp; beach in one trip</h2>
          </div>
          <NH.Button variant="primary" size="lg" onClick={() => (location.href = "tours.html")}>See our journeys</NH.Button>
        </div>
      </Wrap>
      <window.ATFooter />
    </React.Fragment>
  );
}
window.ATDestinationsPage = DestinationsPage;
