// Asili / Savera — Contact (modern multi-step enquiry).
const CtH = window.SaveraDesignSystem_d2991c;
const CtI = window.SaveraIcons;
const { P, PHOTOS } = window.AT;
const { ATContainer: Container, ATPageHero: PageHero, ATCover: Cover } = window;

const STEPS = ["Where", "When & who", "How", "About you"];

const DEST_OPTIONS = [
  { id: "serengeti",   name: "Serengeti",        kicker: "Endless plains",      photo: "1535941339077-2dd1c7963098" },
  { id: "ngorongoro",  name: "Ngorongoro",       kicker: "The Crater",          photo: "1500964757637-c85e8a162699" },
  { id: "kilimanjaro", name: "Kilimanjaro",      kicker: "Roof of Africa",      photo: "1505765050516-f72dcac9c60e" },
  { id: "tarangire",   name: "Tarangire",        kicker: "Baobab country",      photo: "1549366021-9f761d450615" },
  { id: "zanzibar",    name: "Zanzibar",         kicker: "Spice islands",       photo: "1505881502353-a1986add3762" },
  { id: "unsure",      name: "Not sure yet",     kicker: "Surprise me",         photo: "1516026672322-bc52d61a55d5" },
];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const TRIP_TYPES = [
  ["safari",    "Classic safari",      <CtI.Paw s={16} />],
  ["mountain",  "Mountain trek",       <CtI.Award s={16} />],
  ["beach",     "Beach & coast",       <CtI.Sun s={16} />],
  ["family",    "Family adventure",    <CtI.Users s={16} />],
  ["honeymoon", "Honeymoon",           <CtI.Heart s={16} />],
  ["wildlife",  "Wildlife photography",<CtI.Camera s={16} />],
];

const STYLES = [
  { id: "Classic",   tagline: "Authentic safari, beautifully run",  from: "£2,950" },
  { id: "Signature", tagline: "Our most-loved level of comfort",     from: "£5,600", featured: true },
  { id: "Bespoke",   tagline: "Ultra-luxury, entirely your own",     from: "£9,800" },
];

// ---------- Progress ----------
function StepProgress({ step, total, labels }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span style={{ font: "var(--fw-light) var(--fs-4xl)/1 var(--font-sans)", color: "var(--gold-600)" }}>{String(step + 1).padStart(2, "0")}</span>
          <span style={{ font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            / {String(total).padStart(2, "0")} · {labels[step]}
          </span>
        </div>
        <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          {Math.round(((step + 1) / total) * 100)}%
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${total}, 1fr)`, gap: 8 }}>
        {Array.from({ length: total }).map((_, i) => (
          <span key={i} style={{ height: 3, borderRadius: 2, background: i <= step ? "var(--gold-500)" : "var(--border-light)", transition: "background var(--dur-base) var(--ease-out)" }} />
        ))}
      </div>
    </div>
  );
}

// ---------- Step 1: Destination tiles ----------
function DestTile({ d, selected, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}
      style={{ position: "relative", padding: 0, border: "none", cursor: "pointer", borderRadius: "var(--radius-md)", overflow: "hidden", aspectRatio: "4 / 3", background: "var(--cream-200)", boxShadow: selected ? "0 0 0 3px var(--gold-500), var(--shadow-md)" : "var(--shadow-card)", transform: hov && !selected ? "translateY(-2px)" : "none", transition: "transform var(--dur-fast), box-shadow var(--dur-fast)" }}>
      <img src={P(d.photo, 600)} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform var(--img-zoom)", transform: hov || selected ? "scale(1.05)" : "scale(1)" }} />
      <div style={{ position: "absolute", inset: 0, background: selected ? "linear-gradient(180deg, rgba(22,32,29,0.1) 0%, rgba(22,32,29,0.7) 100%)" : "linear-gradient(180deg, rgba(22,32,29,0.15) 0%, rgba(22,32,29,0.65) 100%)" }} />
      {selected && (
        <span style={{ position: "absolute", top: 12, right: 12, width: 32, height: 32, borderRadius: "50%", background: "var(--gold-500)", color: "var(--forest-900)", display: "grid", placeItems: "center" }}>
          <CtI.Check s={18} />
        </span>
      )}
      <div style={{ position: "absolute", left: 16, right: 16, bottom: 14, textAlign: "left", color: "#fff" }}>
        <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-300)", marginBottom: 6 }}>{d.kicker}</div>
        <div style={{ font: "var(--fw-bold) var(--fs-lg)/1.1 var(--font-sans)" }}>{d.name}</div>
      </div>
    </button>
  );
}

function TripTypeChip({ id, label, icon, selected, onClick }) {
  return (
    <button onClick={onClick} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, padding: "11px 18px", borderRadius: "var(--radius-pill)", font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", background: selected ? "var(--forest-700)" : "var(--surface-card)", color: selected ? "#fff" : "var(--text-strong)", border: `1.5px solid ${selected ? "var(--forest-700)" : "var(--border-light)"}`, transition: "all var(--dur-fast)" }}>
      <span style={{ color: selected ? "var(--gold-300)" : "var(--gold-600)" }}>{icon}</span>{label}
    </button>
  );
}

// ---------- Stepper ----------
function NumberStepper({ value, onChange, min = 1, max = 12, suffix }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 14, background: "var(--surface-card)", border: "1.5px solid var(--border-light)", borderRadius: "var(--radius-pill)", padding: "5px 6px" }}>
      <button onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min}
        style={{ cursor: value > min ? "pointer" : "not-allowed", width: 34, height: 34, borderRadius: "50%", border: "none", background: "var(--cream-100)", color: "var(--text-strong)", font: "var(--fw-bold) 18px/1 var(--font-sans)", opacity: value <= min ? 0.4 : 1 }}>−</button>
      <span style={{ minWidth: 56, textAlign: "center", font: "var(--fw-bold) var(--fs-md)/1 var(--font-sans)", color: "var(--text-strong)" }}>{value}{suffix ? ` ${suffix}` : ""}</span>
      <button onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max}
        style={{ cursor: value < max ? "pointer" : "not-allowed", width: 34, height: 34, borderRadius: "50%", border: "none", background: "var(--cream-100)", color: "var(--text-strong)", font: "var(--fw-bold) 18px/1 var(--font-sans)", opacity: value >= max ? 0.4 : 1 }}>+</button>
    </div>
  );
}

// ---------- Style cards ----------
function StyleCard({ s, selected, onClick }) {
  return (
    <button onClick={onClick} style={{ cursor: "pointer", textAlign: "left", padding: "22px 24px", border: `1.5px solid ${selected ? "var(--gold-500)" : "var(--border-light)"}`, borderRadius: "var(--radius-md)", background: selected ? "var(--cream-100)" : "var(--surface-card)", boxShadow: selected ? "0 0 0 2px rgba(217,181,102,0.18)" : "none", display: "flex", flexDirection: "column", gap: 10, position: "relative", transition: "all var(--dur-fast)" }}>
      {s.featured && <span style={{ position: "absolute", top: -10, right: 18, font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--forest-900)", background: "var(--gold-500)", padding: "5px 10px", borderRadius: "var(--radius-pill)" }}>Most loved</span>}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-sans)", color: "var(--text-strong)" }}>{s.id}</span>
        <span style={{ font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--gold-600)" }}>from {s.from} pp</span>
      </div>
      <span style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>{s.tagline}</span>
    </button>
  );
}

// ---------- Reusable field ----------
const FieldLabel = ({ children }) => (
  <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>{children}</div>
);

// ---------- ContactPage ----------
function ContactPage() {
  const [step, setStep] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  const [anim, setAnim] = React.useState("in");
  const [data, setData] = React.useState({
    dests: ["serengeti"], types: ["safari"],
    month: "August", year: "2026", duration: 10, adults: 2, children: 0,
    style: "Signature", budget: 6000,
    first: "", last: "", email: "", phone: "", country: "", dream: "", agree: false,
  });
  const set = (k, v) => setData((s) => ({ ...s, [k]: v }));
  const toggle = (k, v) => setData((s) => ({ ...s, [k]: s[k].includes(v) ? s[k].filter((x) => x !== v) : [...s[k], v] }));

  const go = (dir) => {
    setAnim("out");
    setTimeout(() => {
      setStep((s) => Math.max(0, Math.min(STEPS.length - 1, s + dir)));
      setAnim("in");
    }, 180);
  };

  const fmtBudget = (n) => "£" + Math.round(n).toLocaleString();

  // Validation per step (lightweight)
  const stepValid = [
    data.dests.length > 0,
    data.adults >= 1,
    !!data.style,
    data.first.trim() && data.last.trim() && /.+@.+\..+/.test(data.email),
  ];

  return (
    <React.Fragment>
      <style>{`
        @keyframes ctFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ctFadeOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-6px); } }
        .ct-pane { animation: ctFadeIn 280ms var(--ease-out) both; }
        .ct-pane.out { animation: ctFadeOut 180ms var(--ease-in) both; }
      `}</style>

      <window.ATHeader active="contact" transparent />
      <PageHero crumbs="Home · Contact" eyebrow="no obligation, just expert guidance" title="Speak to a specialist"
        sub="Tell us about your dream trip and a Tanzania specialist — not a call centre — will be in touch within 24 hours."
        id="1505881502353-a1986add3762" height={420} />

      <section style={{ background: "var(--surface-warm)", padding: "var(--section-y) 40px" }}>
        <Container style={{ padding: 0 }}>
          <div className="at-split" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 56, alignItems: "start" }}>

            {/* Main form card */}
            <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", padding: "40px 44px", overflow: "hidden" }}>
              {sent ? (
                <div className="ct-pane" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 18, padding: "32px 0" }}>
                  <span style={{ width: 84, height: 84, borderRadius: "50%", background: "var(--success)", color: "#fff", display: "grid", placeItems: "center" }}><CtI.Check s={42} /></span>
                  <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 32, color: "var(--gold-600)", lineHeight: 1.2 }}>thank you</div>
                  <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.1 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)" }}>Your enquiry is on its way</h2>
                  <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)", maxWidth: "44ch" }}>
                    A specialist will be in touch within 24 hours to start designing your tailor-made Tanzania journey.
                    {data.dests.length ? <> We've noted your interest in <strong>{data.dests.filter(id => id !== "unsure").map(id => DEST_OPTIONS.find(d => d.id === id)?.name).filter(Boolean).join(", ") || "Tanzania"}</strong>.</> : null}
                  </p>
                  <div style={{ display: "flex", gap: 14, marginTop: 12, flexWrap: "wrap", justifyContent: "center" }}>
                    <CtH.Button variant="primary" onClick={() => (location.href = "tours.html")}>Browse journeys</CtH.Button>
                    <CtH.Button variant="ghost" onClick={() => (location.href = "index.html")}>Back to home</CtH.Button>
                  </div>
                </div>
              ) : (
                <React.Fragment>
                  <StepProgress step={step} total={STEPS.length} labels={STEPS} />

                  <div className={`ct-pane ${anim === "out" ? "out" : ""}`} key={step} style={{ marginTop: 36 }}>
                    {step === 0 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
                        <div>
                          <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.12 var(--font-sans)", color: "var(--text-strong)", textWrap: "balance" }}>Where would you love to go?</h2>
                          <p style={{ margin: "10px 0 0", font: "var(--body)", color: "var(--text-muted)" }}>Tap any that catch your eye — you can choose more than one, or pick "Not sure yet".</p>
                        </div>
                        <div className="at-grid at-grid-3" style={{ gap: 16 }}>
                          {DEST_OPTIONS.map((d) => <DestTile key={d.id} d={d} selected={data.dests.includes(d.id)} onClick={() => toggle("dests", d.id)} />)}
                        </div>
                        <div>
                          <FieldLabel>And what kind of trip?</FieldLabel>
                          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                            {TRIP_TYPES.map(([id, lbl, ic]) => <TripTypeChip key={id} id={id} label={lbl} icon={ic} selected={data.types.includes(id)} onClick={() => toggle("types", id)} />)}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 1 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
                        <div>
                          <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.12 var(--font-sans)", color: "var(--text-strong)" }}>When, and how long?</h2>
                          <p style={{ margin: "10px 0 0", font: "var(--body)", color: "var(--text-muted)" }}>Rough dates are perfect — we'll firm them up together.</p>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                          <div>
                            <FieldLabel>Travel month</FieldLabel>
                            <CtH.Select value={data.month} onChange={(e) => set("month", e.target.value)} options={MONTHS} />
                          </div>
                          <div>
                            <FieldLabel>Year</FieldLabel>
                            <CtH.Select value={data.year} onChange={(e) => set("year", e.target.value)} options={["2026", "2027", "2028"]} />
                          </div>
                        </div>

                        <div>
                          <FieldLabel>Roughly how many days?</FieldLabel>
                          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                            <input type="range" min={3} max={21} step={1} value={data.duration} onChange={(e) => set("duration", +e.target.value)}
                              style={{ flex: 1, minWidth: 200, accentColor: "var(--gold-500)" }} />
                            <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-sans)", color: "var(--text-strong)", minWidth: 90, textAlign: "right" }}>
                              {data.duration} {data.duration === 1 ? "day" : "days"}
                            </span>
                          </div>
                        </div>

                        <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
                          <div>
                            <FieldLabel>Adults</FieldLabel>
                            <NumberStepper value={data.adults} min={1} max={12} onChange={(v) => set("adults", v)} />
                          </div>
                          <div>
                            <FieldLabel>Children</FieldLabel>
                            <NumberStepper value={data.children} min={0} max={8} onChange={(v) => set("children", v)} />
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
                        <div>
                          <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.12 var(--font-sans)", color: "var(--text-strong)" }}>How would you like to travel?</h2>
                          <p style={{ margin: "10px 0 0", font: "var(--body)", color: "var(--text-muted)" }}>Pick a level of comfort. Every Asili Trails itinerary is then tailored around you.</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                          {STYLES.map((s) => <StyleCard key={s.id} s={s} selected={data.style === s.id} onClick={() => set("style", s.id)} />)}
                        </div>
                        <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: 24 }}>
                          <FieldLabel>Approximate budget per person (excl. flights)</FieldLabel>
                          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                            <input type="range" min={1500} max={15000} step={250} value={data.budget} onChange={(e) => set("budget", +e.target.value)}
                              style={{ flex: 1, minWidth: 200, accentColor: "var(--gold-500)" }} />
                            <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-sans)", color: "var(--text-strong)", minWidth: 110, textAlign: "right" }}>
                              {fmtBudget(data.budget)}{data.budget >= 15000 ? "+" : ""}
                            </span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, font: "var(--fw-regular) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                            <span>£1,500</span><span>£15,000+</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                        <div>
                          <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.12 var(--font-sans)", color: "var(--text-strong)" }}>How can we reach you?</h2>
                          <p style={{ margin: "10px 0 0", font: "var(--body)", color: "var(--text-muted)" }}>One quick step. We'll never share your details.</p>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                          <CtH.Input label="First name" placeholder="Jane" value={data.first} onChange={(e) => set("first", e.target.value)} required />
                          <CtH.Input label="Last name" placeholder="Okoro" value={data.last} onChange={(e) => set("last", e.target.value)} required />
                          <CtH.Input label="Email" type="email" placeholder="jane@email.com" value={data.email} onChange={(e) => set("email", e.target.value)} required />
                          <CtH.Input label="Phone" type="tel" placeholder="+44…" value={data.phone} onChange={(e) => set("phone", e.target.value)} />
                        </div>
                        <CtH.Input label="Country of residence" placeholder="United Kingdom" value={data.country} onChange={(e) => set("country", e.target.value)} />
                        <CtH.Textarea label="Tell us about your dream trip (optional)" rows={4} placeholder="Special occasions, must-sees, dietary needs, anything we should know…" value={data.dream} onChange={(e) => set("dream", e.target.value)} />

                        {/* Summary */}
                        <div style={{ background: "var(--cream-100)", borderRadius: "var(--radius-sm)", padding: "18px 22px", display: "flex", flexDirection: "column", gap: 10 }}>
                          <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-600)" }}>Your trip so far</div>
                          {[
                            ["Where", data.dests.length ? data.dests.map(id => DEST_OPTIONS.find(d => d.id === id)?.name).filter(Boolean).join(" · ") : "—"],
                            ["When", `${data.month} ${data.year} · ${data.duration} days`],
                            ["Who", `${data.adults} adult${data.adults > 1 ? "s" : ""}${data.children ? ` · ${data.children} child${data.children > 1 ? "ren" : ""}` : ""}`],
                            ["Style", `${data.style} · ~${fmtBudget(data.budget)} pp`],
                          ].map(([k, v], i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                              <span style={{ font: "var(--fw-regular) var(--fs-2xs)/1.2 var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{k}</span>
                              <span style={{ font: "var(--body-sm)", color: "var(--text-strong)", fontWeight: 700, textAlign: "right" }}>{v}</span>
                            </div>
                          ))}
                        </div>

                        <CtH.Checkbox label="Send me the Asili Trails journal and trip ideas (no spam, ever)" checked={data.agree} onChange={(e) => set("agree", e.target.checked)} />
                      </div>
                    )}
                  </div>

                  {/* Footer controls */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginTop: 36, paddingTop: 24, borderTop: "1px solid var(--border-light)" }}>
                    {step > 0
                      ? <CtH.Button variant="ghost" onClick={() => go(-1)} leadingIcon={<CtI.ArrowLeft s={16} />}>Back</CtH.Button>
                      : <span style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>Takes about a minute</span>}
                    {step < STEPS.length - 1
                      ? <CtH.Button variant="primary" disabled={!stepValid[step]} onClick={() => go(1)} trailingIcon={<CtI.ArrowRight s={16} />}>Continue</CtH.Button>
                      : <CtH.Button variant="primary" size="lg" disabled={!stepValid[step]} onClick={() => setSent(true)}>Send enquiry</CtH.Button>}
                  </div>
                </React.Fragment>
              )}
            </div>

            {/* Sidebar — kept */}
            <div className="at-aside" style={{ display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 96 }}>
              <div style={{ background: "var(--forest-800)", borderRadius: "var(--radius-md)", padding: "30px", color: "#fff" }}>
                <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 26, color: "var(--gold-300)", marginBottom: 14, lineHeight: 1.2 }}>talk to a human</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[[<CtI.Phone s={18} />, "+44 (0)20 7946 0817", "Mon–Sat, 9am–7pm GMT"], [<CtI.Mail s={18} />, "hello@asilitrails.com", "We reply within 24 hours"], [<CtI.Pin s={18} />, "Arusha, Tanzania", "& London, United Kingdom"]].map(([ic, a, b], i) => (
                    <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <span style={{ color: "var(--gold-400)", marginTop: 2 }}>{ic}</span>
                      <div>
                        <div style={{ font: "var(--fw-bold) var(--fs-sm)/1.3 var(--font-sans)", color: "#fff" }}>{a}</div>
                        <div style={{ font: "var(--body-sm)", color: "var(--sage-300)" }}>{b}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", padding: "24px 26px", display: "flex", alignItems: "center", gap: 16 }}>
                <CtH.Avatar name="Thabo Nkosi" size={56} ring />
                <div>
                  <div style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>Your specialist today</div>
                  <div style={{ font: "var(--fw-bold) var(--fs-md)/1.2 var(--font-sans)", color: "var(--text-strong)" }}>Thabo Nkosi</div>
                  <div style={{ marginTop: 4 }}><CtH.StarRating value={5} size={14} /></div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "4px 8px" }}>
                {[[<CtI.Shield s={20} />, "ATOL financial protection"], [<CtI.Award s={20} />, "Certified B Corp"], [<CtI.Compass s={20} />, "24/7 on-the-ground support"]].map(([ic, t], i) => (
                  <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 12, font: "var(--body-sm)", color: "var(--text-body)" }}>
                    <span style={{ color: "var(--sage-600)" }}>{ic}</span>{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <window.ATFooter />
    </React.Fragment>
  );
}
window.ATContactPage = ContactPage;
