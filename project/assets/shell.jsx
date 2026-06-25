// Asili / Savera site — shell + shared layout helpers.
const { Button, IconButton } = window.SaveraDesignSystem_d2991c;
const I = window.SaveraIcons;
const { P } = window.AT;

const NAV = [
  ["Tours", "tours.html"],
  ["Destinations", "destinations.html"],
  ["Pricing", "pricing.html"],
  ["About", "about.html"],
  ["Blog", "blog.html"],
  ["Reviews", "reviews.html"],
  ["Contact", "contact.html"],
];
const TOURS_SUB = [
  ["All tours", "tours.html"],
  ["Mount Kilimanjaro", "kilimanjaro.html"],
  ["Tour details", "tour-details.html"],
  ["Booking", "booking.html"],
];

// ---------- Logo ----------
function Logo({ width = 200, light = false }) {
  const stroke = light ? "#D9B566" : "#C99A3F";
  return (
    <svg viewBox="0 0 380 64" width={width} aria-label="Asili Trails" style={{ display: "block" }}>
      <g fill="none" stroke={stroke} strokeWidth="2.4" strokeLinecap="round">
        <circle cx="32" cy="30" r="11" /><line x1="32" y1="6" x2="32" y2="11" /><line x1="15" y1="13" x2="18.5" y2="16.5" /><line x1="49" y1="13" x2="45.5" y2="16.5" /><line x1="8" y1="30" x2="13" y2="30" /><line x1="51" y1="30" x2="56" y2="30" />
      </g>
      <line x1="6" y1="48" x2="58" y2="48" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
      <text x="74" y="40" fontFamily="Lato, sans-serif" fontWeight="900" fontSize="26" letterSpacing="4" fill={light ? "#fff" : "var(--forest-900)"}>ASILI TRAILS</text>
    </svg>
  );
}

// ---------- Header ----------
function NavLink({ label, href, active, light }) {
  const [h, setH] = React.useState(false);
  const on = active || h;
  return (
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ cursor: "pointer", font: "var(--fw-bold) var(--fs-xs)/1 var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.14em", color: light ? "#fff" : "var(--text-strong)", paddingBottom: 5, borderBottom: `2px solid ${on ? "var(--gold-400)" : "transparent"}`, transition: "border-color var(--dur-fast) var(--ease-out), color var(--dur-fast)", whiteSpace: "nowrap" }}>
      {label}
    </a>
  );
}

function ToursMenu({ active, light }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ position: "relative" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <a href="tours.html" style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4, font: "var(--fw-bold) var(--fs-xs)/1 var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.14em", color: light ? "#fff" : "var(--text-strong)", paddingBottom: 5, borderBottom: `2px solid ${active || open ? "var(--gold-400)" : "transparent"}`, transition: "border-color var(--dur-fast)" }}>
        Tours <I.ChevronDown s={13} />
      </a>
      <div style={{ position: "absolute", top: "100%", left: -16, paddingTop: 14, opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden", transform: open ? "translateY(0)" : "translateY(-6px)", transition: "all var(--dur-fast) var(--ease-out)" }}>
        <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-md)", padding: 8, minWidth: 190, display: "flex", flexDirection: "column" }}>
          {TOURS_SUB.map(([l, h]) => (
            <a key={h} href={h} style={{ padding: "10px 14px", borderRadius: "var(--radius-sm)", font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--text-body)", whiteSpace: "nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--cream-100)"; e.currentTarget.style.color = "var(--gold-600)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-body)"; }}>{l}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header({ active, transparent = false }) {
  const [scrolled, setScrolled] = React.useState(!transparent);
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);
  const solid = scrolled;
  const light = true; // nav text is always light because header is forest or over photo
  return (
    <React.Fragment>
      <header style={{ position: "sticky", top: 0, zIndex: 200, transition: "background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)", background: solid ? "var(--forest-800)" : "transparent", boxShadow: solid ? "0 2px 18px rgba(0,0,0,0.22)" : "none" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <a href="index.html" style={{ display: "block" }}><Logo light width={186} /></a>
          <nav className="at-nav" style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <NavLink label="Home" href="index.html" active={active === "home"} light={light} />
            <ToursMenu active={active === "tours"} light={light} />
            {NAV.slice(1).map(([l, h]) => <NavLink key={h} label={l} href={h} active={active === l.toLowerCase()} light={light} />)}
          </nav>
          <div className="at-actions" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href="admin.html" title="Admin dashboard" style={{ display: "inline-flex" }}><IconButton variant="ghost" size="sm" label="Admin"><I.Grid s={16} /></IconButton></a>
            <Button variant="primary" size="sm" onClick={() => (window.location.href = "contact.html")}>Enquire</Button>
            <button className="at-burger" onClick={() => setMenu(true)} aria-label="Menu" style={{ display: "none", background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }}><I.Menu s={24} /></button>
          </div>
        </div>
      </header>
      {menu && (
        <div style={{ position: "fixed", inset: 0, zIndex: 400, background: "var(--forest-900)", padding: "24px 32px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
            <Logo light width={186} />
            <button onClick={() => setMenu(false)} aria-label="Close" style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}><I.Close s={26} /></button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[["Home", "index.html"], ...NAV, ["Admin", "admin.html"]].map(([l, h]) => (
              <a key={h} href={h} style={{ padding: "16px 0", borderBottom: "1px solid var(--divider-on-dark)", font: "var(--fw-light) var(--fs-xl)/1 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "#fff" }}>{l}</a>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

// ---------- Layout helpers ----------
const Container = ({ children, style }) => (
  <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 40px", ...style }}>{children}</div>
);
const Wrap = ({ children, bg, py = "var(--section-y)", style }) => (
  <section style={{ background: bg, padding: `${py} 40px`, ...style }}>
    <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>{children}</div>
  </section>
);
const ScriptAccent = ({ children, dark, size = 26 }) => (
  <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: size, lineHeight: 1.35, paddingBottom: "0.18em", color: dark ? "var(--gold-300)" : "var(--gold-600)" }}>{children}</div>
);
const SectionHead = ({ eyebrow, title, intro, dark, align = "center", style }) => {
  const center = align === "center";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 52, alignItems: center ? "center" : "flex-start", textAlign: center ? "center" : "left", maxWidth: center ? 720 : "none", marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0, ...style }}>
      {eyebrow && <ScriptAccent dark={dark}>{eyebrow}</ScriptAccent>}
      <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.14 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: dark ? "#fff" : "var(--text-strong)", textWrap: "balance" }}>{title}</h2>
      {intro && <p style={{ margin: 0, font: "var(--body)", color: dark ? "var(--sage-300)" : "var(--text-muted)", maxWidth: "62ch" }}>{intro}</p>}
    </div>
  );
};

// Full-bleed photo with optional slow ken-burns + overlay.
function Cover({ id, src, ratio, height, overlay = false, overlayStrong = false, zoom = false, radius = 0, children, style, position = "center" }) {
  const [hov, setHov] = React.useState(false);
  const url = src || P(id, 1600);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position: "relative", overflow: "hidden", borderRadius: radius, aspectRatio: ratio, height, background: "var(--golden-hour)", ...style }}>
      <img src={url} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: position, transform: zoom && hov ? "scale(1.06)" : "scale(1.0)", transition: "transform var(--img-zoom) var(--ease-out)" }} />
      {(overlay || overlayStrong) && <div style={{ position: "absolute", inset: 0, background: overlayStrong ? "var(--overlay-photo-strong)" : "var(--overlay-photo)" }} />}
      {children}
    </div>
  );
}

// Inner-page hero band (image bg, centered text). Header sits transparent above it.
function PageHero({ eyebrow, title, sub, id, height = 460, align = "center", crumbs }) {
  const center = align === "center";
  return (
    <section style={{ position: "relative", minHeight: height, marginTop: -72, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <img src={P(id, 1600)} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(22,32,29,0.55) 0%, rgba(22,32,29,0.25) 45%, rgba(22,32,29,0.82) 100%)" }} />
      <Container style={{ position: "relative", width: "100%", paddingBottom: 56, paddingTop: 120 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: center ? "center" : "flex-start", textAlign: center ? "center" : "left", maxWidth: center ? 820 : 760, margin: center ? "0 auto" : 0 }}>
          {crumbs && <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sage-300)" }}>{crumbs}</div>}
          {eyebrow && <ScriptAccent dark size={30}>{eyebrow}</ScriptAccent>}
          <h1 style={{ margin: 0, font: "300 clamp(38px,5vw,58px)/1.08 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "#fff", textWrap: "balance" }}>{title}</h1>
          {sub && <p style={{ margin: "4px 0 0", font: "var(--fw-regular) var(--fs-md)/1.6 var(--font-sans)", color: "rgba(255,255,255,0.92)", maxWidth: "60ch" }}>{sub}</p>}
        </div>
      </Container>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  const cols = [
    ["Destinations", [["Serengeti", "destinations.html"], ["Ngorongoro", "destinations.html"], ["Kilimanjaro", "destinations.html"], ["Zanzibar", "destinations.html"], ["Tarangire", "destinations.html"]]],
    ["Journeys", [["All tours", "tours.html"], ["Pricing", "pricing.html"], ["Booking", "booking.html"], ["Reviews", "reviews.html"]]],
    ["Asili", [["About us", "about.html"], ["The journal", "blog.html"], ["Contact", "contact.html"], ["Admin", "admin.html"]]],
  ];
  return (
    <footer style={{ background: "var(--forest-950)", color: "#fff", padding: "76px 40px 36px" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div className="at-foot-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Logo light width={210} />
            <p style={{ margin: 0, font: "var(--body-sm)", color: "var(--sage-300)", maxWidth: "34ch" }}>Tailor-made journeys through Tanzania — designed by specialists who have travelled every trail and watched every sunset. Asili Trails — rooted in the wild.</p>
            <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 26, color: "var(--gold-300)" }}>beautifully wild</div>
            <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
              {[<I.Instagram s={18} />, <I.Facebook s={18} />, <I.Mail s={18} />].map((ic, i) => (
                <span key={i} style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid var(--border-on-dark)", display: "grid", placeItems: "center", color: "var(--sage-300)" }}>{ic}</span>
              ))}
            </div>
          </div>
          {cols.map(([h, items], i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-400)" }}>{h}</div>
              {items.map(([it, href], j) => <a key={j} href={href} style={{ cursor: "pointer", font: "var(--body-sm)", color: "var(--sage-200)" }}>{it}</a>)}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, flexWrap: "wrap", gap: 16 }}>
          <span style={{ font: "var(--fw-regular) var(--fs-xs)/1.6 var(--font-sans)", color: "var(--sage-400)" }}>© 2026 Asili Trails · ATOL protected · A certified B Corp</span>
          <div style={{ display: "flex", gap: 20, font: "var(--fw-regular) var(--fs-xs)/1 var(--font-sans)", color: "var(--sage-400)" }}>
            <span>Privacy</span><span>Terms</span><span>Financial protection</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SaveraLogo: Logo, ATHeader: Header, ATFooter: Footer, ATContainer: Container, ATWrap: Wrap, ATScript: ScriptAccent, ATSectionHead: SectionHead, ATCover: Cover, ATPageHero: PageHero });
