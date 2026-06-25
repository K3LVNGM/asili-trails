// Asili / Savera — Admin dashboard (static mockup).
const AdH = window.SaveraDesignSystem_d2991c;
const AdI = window.SaveraIcons;
const { BOOKINGS, ENQUIRIES } = window.AT;
const admfmt = (n) => "£" + n.toLocaleString();

const NAVI = [
  ["Dashboard", <AdI.Grid s={19} />, true],
  ["Bookings", <AdI.Cal s={19} />, false],
  ["Enquiries", <AdI.Mail s={19} />, false],
  ["Tours", <AdI.Compass s={19} />, false],
  ["Guests", <AdI.Users s={19} />, false],
  ["Reports", <AdI.Trend s={19} />, false],
];
const STAT_STYLE = {
  Confirmed: ["var(--success)", "rgba(91,122,82,0.14)"],
  "Deposit paid": ["var(--gold-600)", "rgba(181,135,47,0.16)"],
  "Balance due": ["var(--danger)", "rgba(180,84,59,0.14)"],
  Enquiry: ["var(--teal-700)", "rgba(42,77,73,0.14)"],
};
const CHART = [["Jan", 22], ["Feb", 28], ["Mar", 31], ["Apr", 35], ["May", 44], ["Jun", 52], ["Jul", 61], ["Aug", 58], ["Sep", 47], ["Oct", 39], ["Nov", 33], ["Dec", 41]];

function Logo() {
  return (
    <svg viewBox="0 0 380 64" width={176} aria-label="Asili Trails" style={{ display: "block" }}>
      <g fill="none" stroke="#D9B566" strokeWidth="2.4" strokeLinecap="round">
        <circle cx="32" cy="30" r="11" /><line x1="32" y1="6" x2="32" y2="11" /><line x1="15" y1="13" x2="18.5" y2="16.5" /><line x1="49" y1="13" x2="45.5" y2="16.5" /><line x1="8" y1="30" x2="13" y2="30" /><line x1="51" y1="30" x2="56" y2="30" />
      </g>
      <line x1="6" y1="48" x2="58" y2="48" stroke="#D9B566" strokeWidth="2.4" strokeLinecap="round" />
      <text x="74" y="40" fontFamily="Lato, sans-serif" fontWeight="900" fontSize="26" letterSpacing="4" fill="#fff">ASILI TRAILS</text>
    </svg>
  );
}

function StatCard({ icon, label, value, delta, up = true }) {
  return (
    <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-sm)", padding: "22px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ width: 42, height: 42, borderRadius: "var(--radius-sm)", background: "var(--cream-100)", color: "var(--gold-600)", display: "grid", placeItems: "center" }}>{icon}</span>
        {delta && <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", color: up ? "var(--success)" : "var(--danger)", background: up ? "rgba(91,122,82,0.12)" : "rgba(180,84,59,0.12)", padding: "5px 9px", borderRadius: "var(--radius-pill)" }}>{up ? "▲" : "▼"} {delta}</span>}
      </div>
      <div>
        <div style={{ font: "var(--fw-black) var(--fs-2xl)/1 var(--font-sans)", color: "var(--text-strong)" }}>{value}</div>
        <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1.4 var(--font-sans)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 6 }}>{label}</div>
      </div>
    </div>
  );
}

function StatusPill({ s }) {
  const [c, bg] = STAT_STYLE[s] || ["var(--text-muted)", "var(--cream-100)"];
  return <span style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.06em", color: c, background: bg, padding: "6px 12px", borderRadius: "var(--radius-pill)", whiteSpace: "nowrap" }}>{s}</span>;
}

function AdminPage() {
  const max = Math.max(...CHART.map((c) => c[1]));
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--cream-100)" }}>
      {/* Sidebar */}
      <aside style={{ width: 248, flexShrink: 0, background: "var(--forest-900)", color: "#fff", display: "flex", flexDirection: "column", position: "sticky", top: 0, height: "100vh" }}>
        <div style={{ padding: "26px 24px 20px" }}><a href="index.html"><Logo /></a></div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4, padding: "12px 16px", flex: 1 }}>
          {NAVI.map(([l, ic, active], i) => (
            <a key={i} href="admin.html" style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderRadius: "var(--radius-sm)", font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: active ? "var(--forest-900)" : "var(--sage-300)", background: active ? "var(--gold-400)" : "transparent" }}>
              <span style={{ color: active ? "var(--forest-900)" : "var(--sage-400)" }}>{ic}</span>{l}
            </a>
          ))}
        </nav>
        <div style={{ padding: "16px", borderTop: "1px solid var(--divider-on-dark)" }}>
          <a href="index.html" style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--sage-300)" }}>
            <AdI.ArrowLeft s={18} /> Back to site
          </a>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "20px 32px", background: "var(--surface-card)", borderBottom: "1px solid var(--border-light)", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <div style={{ font: "var(--fw-light) var(--fs-xl)/1.1 var(--font-sans)", color: "var(--text-strong)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Dashboard</div>
            <div style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>Good morning, Amara — here's Asili Trails today.</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--cream-100)", borderRadius: "var(--radius-pill)", padding: "9px 16px", color: "var(--text-muted)" }}>
              <AdI.Search s={16} /><span style={{ font: "var(--body-sm)" }}>Search bookings…</span>
            </div>
            <span style={{ position: "relative", color: "var(--text-body)" }}><AdI.Bell s={22} /><span style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: "50%", background: "var(--danger)" }} /></span>
            <AdH.Avatar name="Amara Singh" size={40} ring />
          </div>
        </header>

        <main style={{ padding: "28px 32px 48px", display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="at-grid at-grid-4" style={{ gap: 20 }}>
            <StatCard icon={<AdI.Cal s={20} />} label="Bookings this month" value="42" delta="12%" up />
            <StatCard icon={<AdI.Coins s={20} />} label="Revenue (MTD)" value="£486k" delta="8%" up />
            <StatCard icon={<AdI.Mail s={20} />} label="Open enquiries" value="28" delta="5%" up />
            <StatCard icon={<AdI.Trend s={20} />} label="Avg. trip value" value="£11.6k" delta="3%" up={false} />
          </div>

          <div className="at-split" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, alignItems: "start" }}>
            {/* Bookings table */}
            <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-sm)", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: "1px solid var(--border-light)" }}>
                <h2 style={{ margin: 0, font: "var(--fw-bold) var(--fs-md)/1 var(--font-sans)", color: "var(--text-strong)" }}>Recent bookings</h2>
                <a href="admin.html" style={{ font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--gold-600)" }}>View all</a>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 680 }}>
                  <thead>
                    <tr>{["Ref", "Guest", "Journey", "Departs", "Pax", "Value", "Status"].map((h, i) => (
                      <th key={i} style={{ textAlign: i >= 4 && i <= 5 ? "right" : "left", padding: "14px 18px", font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", background: "var(--cream-50)", whiteSpace: "nowrap" }}>{h}</th>
                    ))}</tr>
                  </thead>
                  <tbody>
                    {BOOKINGS.map((b, i) => (
                      <tr key={i} style={{ borderTop: "1px solid var(--border-light)" }}>
                        <td style={{ padding: "15px 18px", font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--gold-700,var(--gold-600))", whiteSpace: "nowrap" }}>{b.ref}</td>
                        <td style={{ padding: "15px 18px", font: "var(--fw-bold) var(--fs-sm)/1.2 var(--font-sans)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>{b.guest}</td>
                        <td style={{ padding: "15px 18px", font: "var(--body-sm)", color: "var(--text-body)", whiteSpace: "nowrap" }}>{b.trip}</td>
                        <td style={{ padding: "15px 18px", font: "var(--body-sm)", color: "var(--text-body)", whiteSpace: "nowrap" }}>{b.depart}</td>
                        <td style={{ padding: "15px 18px", font: "var(--body-sm)", color: "var(--text-body)", textAlign: "right" }}>{b.pax}</td>
                        <td style={{ padding: "15px 18px", font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--text-strong)", textAlign: "right", whiteSpace: "nowrap" }}>{admfmt(b.value)}</td>
                        <td style={{ padding: "15px 18px" }}><StatusPill s={b.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Enquiries */}
            <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-sm)", overflow: "hidden" }}>
              <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border-light)" }}>
                <h2 style={{ margin: 0, font: "var(--fw-bold) var(--fs-md)/1 var(--font-sans)", color: "var(--text-strong)" }}>New enquiries</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {ENQUIRIES.map((e, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "center", padding: "16px 24px", borderTop: i ? "1px solid var(--border-light)" : "none" }}>
                    <AdH.Avatar name={e.name} size={40} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ font: "var(--fw-bold) var(--fs-sm)/1.2 var(--font-sans)", color: "var(--text-strong)" }}>{e.name}</div>
                      <div style={{ font: "var(--body-sm)", color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.interest}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ font: "var(--fw-regular) var(--fs-2xs)/1.4 var(--font-sans)", color: "var(--text-muted)" }}>{e.when}</div>
                      <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1.4 var(--font-sans)", color: "var(--sage-600)" }}>{e.specialist}</div>
                    </div>
                  </div>
                ))}
                <a href="admin.html" style={{ padding: "16px 24px", borderTop: "1px solid var(--border-light)", font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)", color: "var(--gold-600)", textAlign: "center" }}>View all enquiries</a>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-sm)", padding: "24px 28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h2 style={{ margin: 0, font: "var(--fw-bold) var(--fs-md)/1 var(--font-sans)", color: "var(--text-strong)" }}>Bookings by month</h2>
              <span style={{ font: "var(--body-sm)", color: "var(--text-muted)" }}>2026 · departures</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 190 }}>
              {CHART.map(([m, v], i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", color: "var(--text-muted)" }}>{v}</div>
                  <div title={`${m}: ${v}`} style={{ width: "100%", maxWidth: 40, height: `${(v / max) * 150}px`, borderRadius: "var(--radius-xs) var(--radius-xs) 0 0", background: v === max ? "var(--gold-500)" : "var(--sage-400)" }} />
                  <div style={{ font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>{m}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
window.ATAdminPage = AdminPage;
