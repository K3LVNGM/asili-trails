// Asili / Savera — Mount Kilimanjaro page (with Group Departures section).
const KH = window.SaveraDesignSystem_d2991c;
const KI = window.SaveraIcons;
const { P, PHOTOS } = window.AT;
const { ATContainer: Container, ATWrap: Wrap, ATCover: Cover, ATSectionHead: SectionHead, ATPageHero: PageHero } = window;

// ---------- Group Departures data ----------
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Kilimanjaro season: prime = dry, rainy = Apr/May/Nov, shoulder = Mar
const SEASON = { Jan: "prime", Feb: "prime", Mar: "shoulder", Apr: "rainy", May: "rainy", Jun: "prime", Jul: "prime", Aug: "prime", Sep: "prime", Oct: "prime", Nov: "rainy", Dec: "prime" };

const DEPARTURES = {
  "2026-Jul": [
    { d: 4, route: "Kilimanjaro via Lemosho route", nights: 7, end: "11 Jul", price: 2742, feat: [["compass", "Best acclimatisation"], ["camera", "Clear summit views"]], avail: 5 },
    { d: 15, route: "Kilimanjaro via Machame route", nights: 7, end: "22 Jul", price: 3072, feat: [["leaf", "Tropical forest start"], ["users", "Small mixed group"]], avail: 6 },
  ],
  "2026-Aug": [
    { d: 1, route: "Kilimanjaro via Lemosho route", nights: 7, end: "08 Aug", price: 2742, feat: [["compass", "For experienced hikers"], ["mountains", "High-altitude drop-off"]], avail: 6 },
    { d: 5, route: "Kilimanjaro via Machame route", nights: 6, end: "11 Aug", price: 3072, feat: [["leaf", "Starts in tropical forest"], ["binoculars", "Excellent for birdlife"]], avail: 4 },
    { d: 9, route: "Kilimanjaro via Marangu route", nights: 5, end: "14 Aug", price: 2380, feat: [["lodge", "Hut accommodation"], ["users", "Smaller group of six"]], avail: 8 },
    { d: 14, route: "Kilimanjaro via Lemosho + Crater", nights: 8, end: "22 Aug", price: 3640, feat: [["compass", "Crater camp variation"], ["camera", "Photographic focus"]], avail: 3 },
    { d: 20, route: "Kilimanjaro via Rongai route", nights: 6, end: "26 Aug", price: 2820, feat: [["leaf", "Quietest trail"], ["binoculars", "Approach from the north"]], avail: 5 },
  ],
  "2026-Sep": [
    { d: 7, route: "Kilimanjaro via Lemosho route", nights: 7, end: "14 Sep", price: 2742, feat: [["compass", "For experienced hikers"], ["camera", "Clearest summit window"]], avail: 5 },
  ],
  "2026-Oct": [
    { d: 3, route: "Kilimanjaro via Marangu route", nights: 5, end: "08 Oct", price: 2380, feat: [["lodge", "Hut accommodation"], ["users", "Smaller group of six"]], avail: 7 },
  ],
  "2027-Jul": [
    { d: 5, route: "Kilimanjaro via Lemosho route", nights: 7, end: "12 Jul", price: 2790, feat: [["compass", "Best acclimatisation"], ["camera", "Clear summit views"]], avail: 4 },
    { d: 17, route: "Kilimanjaro via Machame route", nights: 7, end: "24 Jul", price: 3120, feat: [["leaf", "Tropical forest start"], ["users", "Small mixed group"]], avail: 6 },
  ],
  "2027-Aug": [
    { d: 1, route: "Kilimanjaro via Lemosho route", nights: 7, end: "08 Aug", price: 2842, feat: [["compass", "For experienced hikers"], ["mountains", "High-altitude drop-off"]], avail: 7 },
    { d: 2, route: "Kilimanjaro via Machame route", nights: 7, end: "09 Aug", price: 3172, feat: [["leaf", "Starts in tropical forest"], ["binoculars", "Forest birds & colobus"]], avail: 4 },
    { d: 4, route: "Safari add-on: Tarangire & Ngorongoro", nights: 4, end: "08 Aug", price: 1460, feat: [["paw", "Elephant herds"], ["paw", "Lion prides on the crater floor"]], avail: 6, highlight: true },
    { d: 11, route: "Kilimanjaro via Marangu route", nights: 6, end: "17 Aug", price: 2480, feat: [["lodge", "Hut accommodation"], ["users", "Smaller group of six"]], avail: 5 },
    { d: 18, route: "Kilimanjaro via Lemosho + Crater", nights: 8, end: "26 Aug", price: 3740, feat: [["compass", "Crater camp variation"], ["camera", "Photographic focus"]], avail: 2 },
    { d: 24, route: "Kilimanjaro via Rongai route", nights: 6, end: "30 Aug", price: 2920, feat: [["leaf", "Quietest trail"], ["binoculars", "Approach from the north"]], avail: 5 },
  ],
  "2027-Sep": [
    { d: 1, route: "Kilimanjaro via Lemosho route", nights: 7, end: "08 Sep", price: 2842, feat: [["compass", "For experienced hikers"], ["camera", "Clearest summit window"]], avail: 5 },
    { d: 12, route: "Kilimanjaro via Rongai route", nights: 6, end: "18 Sep", price: 2920, feat: [["leaf", "Quietest trail"], ["binoculars", "Approach from the north"]], avail: 7 },
  ],
};

const FEAT_ICON = { compass: <KI.Compass s={18} />, mountains: <KI.Award s={18} />, leaf: <KI.Leaf s={18} />, binoculars: <KI.Binoculars s={18} />, lodge: <KI.Lodge s={18} />, users: <KI.Users s={18} />, camera: <KI.Camera s={18} />, paw: <KI.Paw s={18} /> };

function RainGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ display: "inline-block", verticalAlign: -2, marginLeft: 4 }}>
      <path d="M7 13a4 4 0 0 1 .5-7.95A6 6 0 0 1 19 8a3.5 3.5 0 0 1-1 6.85H7z" fill="currentColor" opacity="0.5"/>
      <path d="M9 18l-1 3M13 18l-1 3M17 18l-1 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function YearTab({ year, active, onClick }) {
  return (
    <button onClick={onClick} style={{ cursor: "pointer", border: "none", padding: "12px 28px", borderRadius: "var(--radius-pill)", font: "var(--fw-bold) var(--fs-md)/1 var(--font-sans)", letterSpacing: "0.08em", background: active ? "var(--forest-700)" : "var(--surface-card)", color: active ? "#fff" : "var(--text-strong)", boxShadow: active ? "none" : "var(--shadow-sm)", transition: "all var(--dur-fast)" }}>{year}</button>
  );
}

function MonthPill({ m, season, available, selected, onClick }) {
  const rainy = season === "rainy";
  const styles = rainy
    ? { background: "var(--sage-200)", color: "var(--sage-600)", border: "1.5px solid transparent" }
    : selected
      ? { background: "var(--forest-700)", color: "#fff", border: "2px solid var(--gold-500)", boxShadow: "0 0 0 3px rgba(217,181,102,0.18)" }
      : { background: "var(--forest-600,var(--forest-700))", color: "#fff", border: "1.5px solid transparent" };
  return (
    <button onClick={available ? onClick : undefined} disabled={!available}
      style={{ cursor: available ? "pointer" : "not-allowed", padding: "9px 14px", minWidth: 62, borderRadius: "var(--radius-pill)", font: "var(--fw-bold) var(--fs-xs)/1 var(--font-sans)", letterSpacing: "0.06em", textTransform: "uppercase", transition: "all var(--dur-fast)", ...styles }}>
      {m}{rainy && <RainGlyph />}
    </button>
  );
}

function DateBadge({ day, month, accent }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: 76, height: 76, borderRadius: "var(--radius-sm)", border: `2px solid ${accent ? "var(--gold-500)" : "var(--forest-700)"}`, background: "var(--surface-card)", flexShrink: 0 }}>
      <span style={{ font: "var(--fw-black) var(--fs-xl)/1 var(--font-sans)", color: "var(--text-strong)" }}>{String(day).padStart(2, "0")}</span>
      <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.14em", textTransform: "uppercase", color: accent ? "var(--gold-600)" : "var(--forest-700)", marginTop: 6 }}>{month}</span>
    </div>
  );
}

function DepartureRow({ dep, monthShort }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24, padding: "22px 0", borderTop: "1px dashed var(--border-light)" }}>
      <DateBadge day={dep.d} month={monthShort} accent={dep.highlight} />
      <div style={{ flex: "1.4 1 240px", minWidth: 220 }}>
        <h3 style={{ margin: 0, font: "var(--fw-bold) var(--fs-md)/1.25 var(--font-sans)", color: "var(--text-strong)" }}>{dep.route} <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>· {dep.nights} days</span></h3>
        <div style={{ marginTop: 6, font: "var(--body-sm)", color: "var(--text-muted)" }}>From {String(dep.d).padStart(2, "0")} {MONTHS_FULL[MONTHS_SHORT.indexOf(monthShort)]} — {dep.end}</div>
      </div>
      <div style={{ flex: "0 0 110px", textAlign: "right" }}>
        <div style={{ font: "var(--fw-black) var(--fs-xl)/1 var(--font-sans)", color: "var(--text-strong)" }}>${dep.price.toLocaleString()}</div>
        <div style={{ font: "var(--fw-regular) var(--fs-2xs)/1.4 var(--font-sans)", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>per person</div>
      </div>
      <div style={{ flex: "1 1 220px", minWidth: 200, display: "flex", flexDirection: "column", gap: 8 }}>
        {dep.feat.map(([ic, t], i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10, font: "var(--body-sm)", color: "var(--text-body)" }}>
            <span style={{ color: dep.highlight ? "var(--gold-600)" : "var(--sage-600)", flexShrink: 0 }}>{FEAT_ICON[ic]}</span>{t}
          </span>
        ))}
      </div>
      <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "stretch", gap: 4 }}>
        <button onClick={() => (location.href = "booking.html")}
          style={{ cursor: "pointer", border: "none", padding: "12px 22px", borderRadius: "var(--radius-sm)", font: "var(--fw-black) var(--fs-sm)/1 var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", background: dep.highlight ? "var(--gold-500)" : "var(--forest-700)", whiteSpace: "nowrap" }}>
          Join group
        </button>
        <span style={{ font: "var(--fw-regular) var(--fs-2xs)/1.4 var(--font-sans)", color: "var(--text-muted)", textAlign: "center" }}>Deposit $100 · {dep.avail} spaces</span>
      </div>
    </div>
  );
}

function GroupDepartures() {
  const [year, setYear] = React.useState(2026);
  const [month, setMonth] = React.useState("Aug");
  const availableMonths = React.useMemo(() => MONTHS_SHORT.filter((m) => DEPARTURES[`${year}-${m}`]), [year]);
  const key = `${year}-${month}`;
  const list = DEPARTURES[key] || [];
  return (
    <Wrap bg="var(--surface-page)">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, marginBottom: 40 }}>
        <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 26, lineHeight: 1, color: "var(--gold-600)", marginBottom: 4 }}>join a group climb</div>
        <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.15 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)", maxWidth: "24ch", textWrap: "balance" }}>The best time to climb Kilimanjaro together</h2>
        <div style={{ width: 60, height: 2, background: "var(--gold-500)", marginTop: 4 }} />
        <p style={{ margin: 0, font: "var(--body)", color: "var(--text-muted)", maxWidth: "56ch" }}>Fixed-departure group climbs led by our senior mountain guides — share the experience, halve the cost.</p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 28 }}>
        {[2026, 2027].map((y) => <YearTab key={y} year={y} active={year === y} onClick={() => { setYear(y); const m = MONTHS_SHORT.find((m) => DEPARTURES[`${y}-${m}`]); if (m) setMonth(m); }} />)}
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 8, paddingBottom: 36, borderBottom: "1px solid var(--border-light)" }}>
        {MONTHS_SHORT.map((m) => {
          const has = availableMonths.includes(m);
          return <MonthPill key={m} m={m} season={SEASON[m]} available={has} selected={month === m} onClick={() => setMonth(m)} />;
        })}
      </div>

      <div style={{ marginTop: 12 }}>
        {list.length === 0 ? (
          <p style={{ textAlign: "center", padding: "40px 0", font: "var(--body)", color: "var(--text-muted)" }}>
            No group climbs scheduled for {MONTHS_FULL[MONTHS_SHORT.indexOf(month)]} {year}. Try a different month — or <a href="contact.html" style={{ color: "var(--gold-600)", fontWeight: 700, borderBottom: "1px solid var(--gold-400)" }}>request a private climb</a>.
          </p>
        ) : list.map((d, i) => <DepartureRow key={i} dep={d} monthShort={month} />)}
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 28, marginTop: 32, flexWrap: "wrap", font: "var(--body-sm)", color: "var(--text-muted)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--forest-700)" }} /> Prime season
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--sage-200)", border: "1.5px solid var(--sage-400)" }} /> Rainy — climbs paused
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid var(--gold-500)", background: "var(--forest-700)" }} /> Currently viewing
        </span>
      </div>
    </Wrap>
  );
}

// ---------- Mountain content blocks ----------
const STATS = [
  ["5,895 m", "Summit altitude"],
  ["5", "Climate zones"],
  ["7", "Established routes"],
  ["6 – 9", "Days on the mountain"],
];

const ROUTES = [
  { name: "Lemosho", days: "7–8", best: true, blurb: "Our most-recommended route — long, beautiful and built for acclimatisation. Approaches from the west through the rainforest of the Lemosho Glades.", success: "92%" },
  { name: "Machame", days: "6–7", best: false, blurb: "The 'Whisky Route' — scenic, popular and demanding. Crosses the Shira Plateau and the Barranco Wall before the summit night.", success: "88%" },
  { name: "Marangu", days: "5–6", best: false, blurb: "The original 'Coca-Cola Route' — the only path with hut accommodation. Shorter and easier underfoot, but a tougher summit.", success: "78%" },
  { name: "Rongai", days: "6–7", best: false, blurb: "The only northern route, approaching from the Kenyan border. Drier, quieter and a true wilderness feel — ideal in the green seasons.", success: "85%" },
  { name: "Northern Circuit", days: "9", best: false, blurb: "The longest route on the mountain — a near-360° traverse with the highest summit success rate. Reserve for serious adventurers.", success: "95%" },
];

const ZONES = [
  ["Cultivation", "800 – 1,800 m", "Coffee farms and banana groves on the lower slopes."],
  ["Rainforest", "1,800 – 2,800 m", "Dripping, mossy montane forest alive with colobus monkeys."],
  ["Heather & Moorland", "2,800 – 4,000 m", "Giant lobelias and groundsels under huge skies."],
  ["Alpine Desert", "4,000 – 5,000 m", "A high, dry, lunar landscape between Kibo and Mawenzi."],
  ["Arctic Summit", "5,000 – 5,895 m", "Glaciers, snowfields and the roof of Africa."],
];

function MountainStats() {
  return (
    <Wrap bg="var(--forest-900)" py="64px">
      <div className="at-grid at-grid-4" style={{ alignItems: "center" }}>
        {STATS.map(([v, l], i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
            <span style={{ font: "var(--fw-light) var(--fs-3xl)/1 var(--font-sans)", color: "var(--gold-300)" }}>{v}</span>
            <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1.3 var(--font-sans)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sage-300)" }}>{l}</span>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function Intro() {
  return (
    <Wrap bg="var(--surface-page)">
      <div className="at-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <Cover id="1505765050516-f72dcac9c60e" ratio="4 / 5" zoom radius="var(--radius-md)" />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 28, color: "var(--gold-600)" }}>the roof of Africa</div>
          <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.12 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)" }}>One mountain, five worlds</h2>
          <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)" }}>
            At 5,895 metres, Mount Kilimanjaro is the highest free-standing mountain on earth — a dormant volcano that rises straight off the East African plain to an equatorial glacier. No technical climbing, no fixed ropes; just six to nine days of hiking through forests, moorlands, alpine desert and finally snow.
          </p>
          <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)" }}>
            Reaching Uhuru Peak at sunrise is the trek of a lifetime — and it's far more achievable than most people believe, provided you choose the right route, the right pace, and the right team. Every Asili Trails climb is led by senior guides with hundreds of summits between them.
          </p>
        </div>
      </div>
    </Wrap>
  );
}

function Zones() {
  return (
    <Wrap bg="var(--surface-warm)">
      <SectionHead eyebrow="from the equator to the snow" title="Five climate zones in one climb" intro="Few places on earth let you walk through five distinct ecosystems in a week. On Kilimanjaro, you do it in days." />
      <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 920, margin: "0 auto" }}>
        {ZONES.map(([n, alt, d], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "160px 160px 1fr", gap: 24, alignItems: "center", padding: "22px 0", borderTop: "1px solid var(--border-light)" }}>
            <div style={{ font: "var(--fw-bold) var(--fs-md)/1.2 var(--font-sans)", color: "var(--text-strong)" }}>{n}</div>
            <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1.2 var(--font-sans)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-600)" }}>{alt}</div>
            <div style={{ font: "var(--body)", color: "var(--text-body)" }}>{d}</div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function Routes() {
  return (
    <Wrap bg="var(--surface-page)">
      <SectionHead eyebrow="choose your path" title="The routes up the mountain" intro="Five of the seven established routes — each with its own pace, scenery and summit success rate. Your specialist will help you choose." />
      <div className="at-grid at-grid-3">
        {ROUTES.map((r, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 14, background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", padding: "26px 28px", position: "relative", border: r.best ? "1.5px solid var(--gold-500)" : "1px solid var(--border-light)" }}>
            {r.best && <div style={{ position: "absolute", top: -12, left: 24, font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--forest-900)", background: "var(--gold-500)", padding: "6px 12px", borderRadius: "var(--radius-pill)" }}>Most recommended</div>}
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
              <h3 style={{ margin: 0, font: "var(--fw-light) var(--fs-xl)/1 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)" }}>{r.name}</h3>
              <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>{r.days} days</span>
            </div>
            <p style={{ margin: 0, font: "var(--body-sm)", color: "var(--text-body)", flex: 1 }}>{r.blurb}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px dashed var(--border-light)" }}>
              <span style={{ font: "var(--fw-regular) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>Summit success</span>
              <span style={{ font: "var(--fw-black) var(--fs-md)/1 var(--font-sans)", color: r.best ? "var(--gold-600)" : "var(--text-strong)" }}>{r.success}</span>
            </div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function PrivateClimb() {
  return (
    <Wrap bg="var(--sage-600)" py="64px">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ margin: 0, fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 26, color: "var(--gold-300)" }}>your own pace, your own team</p>
          <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.1 var(--font-sans)", textTransform: "uppercase", color: "#fff", letterSpacing: "var(--ls-heading)" }}>Or design a private climb</h2>
          <p style={{ margin: 0, font: "var(--body)", color: "rgba(255,255,255,0.9)", maxWidth: "52ch" }}>Any route, any month, any number of climbers. A specialist will tailor everything from dates to dietary needs.</p>
        </div>
        <KH.Button variant="primary" size="lg" onClick={() => (location.href = "contact.html")}>Design my climb</KH.Button>
      </div>
    </Wrap>
  );
}

function KilimanjaroPage() {
  return (
    <React.Fragment>
      <window.ATHeader active="tours" transparent />
      <PageHero crumbs="Home · Tours · Mount Kilimanjaro" eyebrow="the roof of Africa" title="Mount Kilimanjaro"
        sub="At 5,895 metres, Kilimanjaro is the highest free-standing mountain on earth — and the most rewarding multi-day trek in Africa. Choose a fixed group climb below, or design a private route with a specialist."
        id="1505765050516-f72dcac9c60e" height={520} />
      <MountainStats />
      <Intro />
      <Zones />
      <Routes />
      <GroupDepartures />
      <PrivateClimb />
      <window.ATFooter />
    </React.Fragment>
  );
}
window.ATKilimanjaroPage = KilimanjaroPage;
