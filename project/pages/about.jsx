// Asili / Savera — About us (adapted from supplied copy).
const AbH = window.SaveraDesignSystem_d2991c;
const AbI = window.SaveraIcons;
const { P } = window.AT;
const { ATContainer: Container, ATWrap: Wrap, ATCover: Cover, ATSectionHead: SectionHead, ATPageHero: PageHero } = window;

const VALUES = [
  ["Authenticity", "Real experiences, true to Tanzania — never rushed, never staged.", <AbI.Compass s={26} />],
  ["Sustainability", "Protecting wild places and supporting the communities who call them home.", <AbI.Leaf s={26} />],
  ["Excellence", "High-quality service and an obsession with the smallest detail.", <AbI.Award s={26} />],
  ["Adventure", "Inspiring exploration, discovery and a little wonder every day.", <AbI.Binoculars s={26} />],
  ["Connection", "Bringing people closer to nature, to culture, and to each other.", <AbI.Users s={26} />],
];
const TEAM = [
  ["Thabo Nkosi", "Lead safari specialist · Arusha"],
  ["Amani Kessy", "Northern circuit guide"],
  ["Naomi Laizer", "Cultural & community lead"],
  ["David Mollel", "Kilimanjaro mountain guide"],
];

function AboutPage() {
  return (
    <React.Fragment>
      <window.ATHeader active="about" transparent />
      <PageHero crumbs="Home · About" eyebrow="a meaningful journey back to nature" title="About Asili Trails"
        sub="We believe travel should be more than a trip — it should be a journey back to nature, culture and self-discovery. Rooted in the heart of Tanzania, we craft authentic safaris that connect you with the true spirit of Africa."
        id="1516426122078-c23e76319801" />

      {/* About us */}
      <Wrap bg="var(--surface-page)">
        <div className="at-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 28, color: "var(--gold-600)" }}>who we are</div>
            <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.12 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)" }}>Authentic safaris, beautifully run</h2>
            <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)" }}>From the endless plains of the Serengeti to the majestic slopes of Mount Kilimanjaro and the tranquil beaches of Zanzibar, our carefully curated tours showcase the richness, diversity and beauty of Tanzania.</p>
            <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)" }}>Every journey is crafted with attention to detail, comfort and a deep respect for the environment and local communities. We work closely with local guides and conservation initiatives so that every experience inspires our guests — and contributes positively to the places we explore.</p>
          </div>
          <Cover id="1518621736915-f3b1c41bfd00" ratio="4 / 5" zoom radius="var(--radius-md)" position="top" />
        </div>
      </Wrap>

      {/* Our story */}
      <Wrap bg="var(--surface-warm)">
        <div className="at-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <Cover id="1547471080-7cc2caa01a7e" ratio="4 / 5" zoom radius="var(--radius-md)" />
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 28, color: "var(--gold-600)" }}>our story</div>
            <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.12 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)" }}>Born to share the real Tanzania</h2>
            <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)" }}>Asili Trails was born from a simple idea: to share the authentic beauty of Tanzania with the world. Growing up surrounded by these natural wonders — wildlife roaming freely across vast savannas, cultures rich in tradition — we saw how transformative these experiences could be.</p>
            <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)" }}>Yet too many trips felt rushed, commercialised, disconnected from the true essence of the destination. We created Asili Trails to change that — to design journeys that are genuine, immersive and deeply rooted in local identity. We want you not just to see Tanzania, but to feel it.</p>
          </div>
        </div>
      </Wrap>

      {/* Mission & Vision */}
      <Wrap bg="var(--forest-800)">
        <div className="at-grid at-grid-2">
          {[["Our mission", <AbI.Compass s={26} />, "To provide authentic, high-quality safari experiences that connect people with nature, culture and adventure — while promoting sustainable tourism in Tanzania."],
            ["Our vision", <AbI.Sun s={26} />, "To become a leading safari company in Africa, known for delivering meaningful, responsible and unforgettable travel experiences."]].map(([t, ic, d], i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 16, padding: "8px 4px" }}>
              <span style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--teal-800)", color: "var(--gold-400)", display: "grid", placeItems: "center" }}>{ic}</span>
              <h3 style={{ margin: 0, font: "var(--fw-light) var(--fs-xl)/1.1 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "#fff" }}>{t}</h3>
              <p style={{ margin: 0, font: "var(--body)", color: "var(--sage-300)", maxWidth: "44ch" }}>{d}</p>
            </div>
          ))}
        </div>
      </Wrap>

      {/* Values */}
      <Wrap bg="var(--surface-page)">
        <SectionHead eyebrow="what we stand for" title="Our values" />
        <div className="at-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
          {VALUES.map(([t, d, ic], i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14 }}>
              <span style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--cream-100)", color: "var(--gold-600)", display: "grid", placeItems: "center" }}>{ic}</span>
              <h3 style={{ margin: 0, font: "var(--fw-bold) var(--fs-md)/1.2 var(--font-sans)", color: "var(--text-strong)" }}>{t}</h3>
              <p style={{ margin: 0, font: "var(--body-sm)", color: "var(--text-muted)" }}>{d}</p>
            </div>
          ))}
        </div>
      </Wrap>

      {/* Specialists */}
      <Wrap bg="var(--surface-warm)">
        <SectionHead eyebrow="people who know it intimately" title="Meet your specialists" intro="Every Asili Trails journey is designed and guided by people who live and breathe Tanzania." />
        <div className="at-grid at-grid-4">
          {TEAM.map(([n, r], i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14 }}>
              <AbH.Avatar name={n} size={92} ring />
              <div>
                <div style={{ font: "var(--fw-bold) var(--fs-md)/1.2 var(--font-sans)", color: "var(--text-strong)" }}>{n}</div>
                <div style={{ font: "var(--body-sm)", color: "var(--text-muted)", marginTop: 4 }}>{r}</div>
              </div>
            </div>
          ))}
        </div>
      </Wrap>

      <Wrap bg="var(--sage-600)" py="64px">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ margin: 0, fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 26, color: "var(--gold-300)" }}>let's create something unforgettable</p>
            <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.1 var(--font-sans)", textTransform: "uppercase", color: "#fff", letterSpacing: "var(--ls-heading)" }}>Your trusted partner in Tanzania</h2>
          </div>
          <AbH.Button variant="primary" size="lg" onClick={() => (location.href = "contact.html")}>Start your journey</AbH.Button>
        </div>
      </Wrap>
      <window.ATFooter />
    </React.Fragment>
  );
}
window.ATAboutPage = AboutPage;
