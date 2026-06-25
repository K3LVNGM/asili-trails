// Asili / Savera — Booking (multi-step + summary + confirmation).
const BH = window.SaveraDesignSystem_d2991c;
const BI = window.SaveraIcons;
const { P, TOURS, TIERS } = window.AT;
const { ATContainer: Container } = window;
const bfmt = (n) => "£" + n.toLocaleString();

const STEPS = ["Journey", "Travel style", "Your details", "Review"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const EXTRAS = [
  ["balloon", "Dawn hot-air balloon flight", 480],
  ["flights", "International flights from London", 950],
  ["zanzibar", "Add 4 nights on Zanzibar", 1400],
  ["photography", "Private photographic guide", 620],
];
const TIER_MULT = { Classic: 1, Signature: 1.32, Bespoke: 1.85 };

function StepDots({ step }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap" }}>
      {STEPS.map((s, i) => {
        const done = i < step, active = i === step;
        return (
          <React.Fragment key={i}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 30, height: 30, borderRadius: "50%", display: "grid", placeItems: "center", flexShrink: 0, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", background: done ? "var(--gold-500)" : active ? "var(--forest-800)" : "var(--cream-200)", color: done || active ? "#fff" : "var(--text-muted)", border: active ? "2px solid var(--gold-500)" : "none" }}>
                {done ? <BI.Check s={16} /> : i + 1}
              </span>
              <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1.2 var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase", color: active ? "var(--text-strong)" : "var(--text-muted)", whiteSpace: "nowrap" }}>{s}</span>
            </div>
            {i < STEPS.length - 1 && <span style={{ flex: 1, minWidth: 24, height: 1, background: "var(--border-light)", margin: "0 16px" }} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

const Field = ({ label, children }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>
    {children}
  </label>
);

function BookingPage() {
  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [b, setB] = React.useState({ trip: TOURS[0].id, month: "July", year: "2026", pax: 2, style: "Signature", extras: { balloon: true }, first: "", last: "", email: "", phone: "", country: "", notes: "" });
  const set = (k, v) => setB((s) => ({ ...s, [k]: v }));
  const toggleExtra = (k) => setB((s) => ({ ...s, extras: { ...s.extras, [k]: !s.extras[k] } }));
  const trip = TOURS.find((t) => t.id === b.trip);
  const base = Math.round(trip.price * TIER_MULT[b.style]);
  const extrasTotal = EXTRAS.reduce((a, [k, , p]) => a + (b.extras[k] ? p : 0), 0);
  const perPerson = base + extrasTotal;
  const total = perPerson * b.pax;

  const next = () => { setStep((s) => Math.min(s + 1, STEPS.length - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const back = () => { setStep((s) => Math.max(s - 1, 0)); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <React.Fragment>
      <window.ATHeader active="tours" />
      <section style={{ background: "var(--forest-800)", padding: "120px 40px 56px" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 28, color: "var(--gold-300)", marginBottom: 8 }}>your journey begins here</div>
          <h1 style={{ margin: 0, font: "var(--fw-light) var(--fs-3xl)/1.05 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "#fff" }}>Book your journey</h1>
        </div>
      </section>

      <section style={{ background: "var(--surface-warm)", padding: "48px 40px var(--section-y)", minHeight: "60vh" }}>
        <Container style={{ padding: 0 }}>
          {done ? (
            <div style={{ maxWidth: 640, margin: "40px auto", background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", padding: "56px 48px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <span style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--success)", color: "#fff", display: "grid", placeItems: "center" }}><BI.Check s={38} /></span>
              <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 28, color: "var(--gold-600)" }}>thank you</div>
              <h2 style={{ margin: 0, font: "var(--fw-light) var(--fs-2xl)/1.1 var(--font-sans)", textTransform: "uppercase", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)" }}>Request received</h2>
              <p style={{ margin: 0, font: "var(--body)", color: "var(--text-body)", maxWidth: "46ch" }}>
                Your provisional booking for <strong>{trip.title}</strong> ({b.month} {b.year}, {b.pax} {b.pax > 1 ? "travellers" : "traveller"}) is with our specialists. Thabo will confirm availability and hold your places within 24 hours.
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, padding: "14px 24px", background: "var(--cream-100)", borderRadius: "var(--radius-sm)" }}>
                <span style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>Estimated total</span>
                <span style={{ font: "var(--fw-black) var(--fs-xl)/1 var(--font-sans)", color: "var(--text-strong)" }}>{bfmt(total)}</span>
              </div>
              <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
                <BH.Button variant="primary" onClick={() => (location.href = "index.html")}>Back to home</BH.Button>
                <BH.Button variant="ghost" onClick={() => (location.href = "tours.html")}>Browse more</BH.Button>
              </div>
            </div>
          ) : (
            <div className="at-split" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 40, alignItems: "start" }}>
              <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)", padding: "36px 40px" }}>
                <div style={{ marginBottom: 36 }}><StepDots step={step} /></div>

                {step === 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <h2 style={{ margin: 0, font: "var(--heading-3)", color: "var(--text-strong)" }}>Choose your journey & dates</h2>
                    <Field label="Journey"><BH.Select value={trip.title} onChange={(e) => { const t = TOURS.find((x) => x.title === e.target.value); set("trip", t.id); }} options={TOURS.map((t) => t.title)} /></Field>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      <Field label="Travel month"><BH.Select value={b.month} onChange={(e) => set("month", e.target.value)} options={MONTHS} /></Field>
                      <Field label="Year"><BH.Select value={b.year} onChange={(e) => set("year", e.target.value)} options={["2026", "2027"]} /></Field>
                    </div>
                    <Field label="Travellers">
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <button onClick={() => set("pax", Math.max(1, b.pax - 1))} style={stepBtn}>−</button>
                        <span style={{ font: "var(--fw-bold) var(--fs-xl)/1 var(--font-sans)", minWidth: 28, textAlign: "center" }}>{b.pax}</span>
                        <button onClick={() => set("pax", Math.min(12, b.pax + 1))} style={stepBtn}>+</button>
                        <span style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>adults sharing</span>
                      </div>
                    </Field>
                  </div>
                )}

                {step === 1 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <h2 style={{ margin: 0, font: "var(--heading-3)", color: "var(--text-strong)" }}>Your style of travel</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {TIERS.map((t) => {
                        const sel = b.style === t.name;
                        return (
                          <button key={t.name} onClick={() => set("style", t.name)} style={{ textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "18px 20px", borderRadius: "var(--radius-sm)", background: sel ? "var(--cream-100)" : "var(--surface-card)", border: `1.5px solid ${sel ? "var(--gold-500)" : "var(--border-light)"}`, transition: "all var(--dur-fast)" }}>
                            <div>
                              <div style={{ font: "var(--fw-bold) var(--fs-md)/1.2 var(--font-sans)", color: "var(--text-strong)" }}>{t.name}</div>
                              <div style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>{t.tagline}</div>
                            </div>
                            <span style={{ font: "var(--fw-black) var(--fs-md)/1 var(--font-sans)", color: sel ? "var(--gold-600)" : "var(--text-strong)", whiteSpace: "nowrap" }}>{bfmt(Math.round(trip.price * TIER_MULT[t.name]))} pp</span>
                          </button>
                        );
                      })}
                    </div>
                    <div>
                      <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>Add to your journey</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        {EXTRAS.map(([k, l, p]) => (
                          <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <BH.Checkbox label={l} checked={!!b.extras[k]} onChange={() => toggleExtra(k)} />
                            <span style={{ font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--text-body)" }}>+{bfmt(p)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                    <h2 style={{ margin: 0, font: "var(--heading-3)", color: "var(--text-strong)" }}>Your details</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      <BH.Input label="First name" placeholder="Jane" value={b.first} onChange={(e) => set("first", e.target.value)} required />
                      <BH.Input label="Last name" placeholder="Okoro" value={b.last} onChange={(e) => set("last", e.target.value)} required />
                      <BH.Input label="Email" type="email" placeholder="jane@email.com" value={b.email} onChange={(e) => set("email", e.target.value)} required />
                      <BH.Input label="Phone" type="tel" placeholder="+44…" value={b.phone} onChange={(e) => set("phone", e.target.value)} />
                    </div>
                    <BH.Input label="Country of residence" placeholder="United Kingdom" value={b.country} onChange={(e) => set("country", e.target.value)} />
                    <BH.Textarea label="Anything we should know?" rows={4} placeholder="Special occasions, dietary needs, must-sees…" value={b.notes} onChange={(e) => set("notes", e.target.value)} />
                  </div>
                )}

                {step === 3 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <h2 style={{ margin: 0, font: "var(--heading-3)", color: "var(--text-strong)" }}>Review your journey</h2>
                    {[["Journey", trip.title], ["Dates", `${b.month} ${b.year}`], ["Travellers", `${b.pax} adult${b.pax > 1 ? "s" : ""}`], ["Style", b.style], ["Extras", EXTRAS.filter(([k]) => b.extras[k]).map(([, l]) => l).join(", ") || "None"], ["Lead traveller", [b.first, b.last].filter(Boolean).join(" ") || "—"], ["Email", b.email || "—"]].map(([k, v], i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "12px 0", borderBottom: "1px solid var(--border-light)" }}>
                        <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1.4 var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>{k}</span>
                        <span style={{ font: "var(--body)", color: "var(--text-strong)", textAlign: "right" }}>{v}</span>
                      </div>
                    ))}
                    <p style={{ margin: "6px 0 0", font: "var(--body-sm)", color: "var(--text-muted)" }}>This is a provisional request — no payment is taken now. A specialist confirms availability and holds your places before any deposit.</p>
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 36, gap: 16 }}>
                  {step > 0 ? <BH.Button variant="ghost" onClick={back} leadingIcon={<BI.ArrowLeft s={16} />}>Back</BH.Button> : <span />}
                  {step < STEPS.length - 1
                    ? <BH.Button variant="primary" onClick={next} trailingIcon={<BI.ArrowRight s={16} />}>Continue</BH.Button>
                    : <BH.Button variant="primary" size="lg" onClick={() => { setDone(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Confirm request</BH.Button>}
                </div>
              </div>

              {/* Summary */}
              <div className="at-aside" style={{ position: "sticky", top: 96, display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
                  <div style={{ position: "relative", height: 150 }}>
                    <img src={P(trip.photo, 800)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "var(--overlay-photo)" }} />
                    <div style={{ position: "absolute", left: 18, bottom: 14, color: "#fff" }}>
                      <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold-300)", marginBottom: 4 }}>{trip.region}</div>
                      <div style={{ font: "var(--fw-bold) var(--fs-md)/1.1 var(--font-sans)" }}>{trip.title}</div>
                    </div>
                  </div>
                  <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
                    {[["Dates", `${b.month} ${b.year}`], ["Travellers", `${b.pax}`], ["Style", b.style]].map(([k, v], i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", font: "var(--body-sm)" }}>
                        <span style={{ color: "var(--text-muted)" }}>{k}</span><span style={{ color: "var(--text-strong)", fontWeight: 700 }}>{v}</span>
                      </div>
                    ))}
                    <div style={{ height: 1, background: "var(--border-light)", margin: "4px 0" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", font: "var(--body-sm)" }}>
                      <span style={{ color: "var(--text-muted)" }}>Per person</span><span style={{ color: "var(--text-strong)", fontWeight: 700 }}>{bfmt(perPerson)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>Est. total</span>
                      <span style={{ font: "var(--fw-black) var(--fs-xl)/1 var(--font-sans)", color: "var(--text-strong)" }}>{bfmt(total)}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 4px", font: "var(--body-sm)", color: "var(--text-muted)" }}>
                  <BI.Shield s={18} c="var(--sage-600)" /> ATOL protected · no payment today
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
      <window.ATFooter />
    </React.Fragment>
  );
}
const stepBtn = { width: 40, height: 40, borderRadius: "var(--radius-sm)", border: "1.5px solid var(--border-light)", background: "var(--surface-card)", color: "var(--text-strong)", font: "var(--fw-bold) 20px/1 var(--font-sans)", cursor: "pointer" };
window.ATBookingPage = BookingPage;
