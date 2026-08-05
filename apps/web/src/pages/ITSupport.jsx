import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const styles = `
.itsupport-page {
  --isp-bg: #161D26;
  --isp-bg-alt: #1D2733;
  --isp-bg-card: #212C39;
  --isp-line: #33404E;
  --isp-amber: #E8A33D;
  --isp-amber-dim: #b98431;
  --isp-sage: #8FA382;
  --isp-text: #F2EFE6;
  --isp-text-muted: #A9B4C0;
  --isp-text-faint: #6B7684;

  background: var(--isp-bg);
  color: var(--isp-text);
  font-family: 'Source Serif 4', serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.itsupport-page a { color: inherit; }
.itsupport-page .eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--isp-sage);
}
.itsupport-page h1, .itsupport-page h2, .itsupport-page h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.itsupport-page .isp-wrap { max-width: 1080px; margin: 0 auto; padding: 0 28px; }

/* SUBNAV */
.itsupport-page .isp-subnav {
  position: sticky; top: 0; z-index: 20;
  background: rgba(22,29,38,0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--isp-line);
}
.itsupport-page .isp-subnav .isp-wrap {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 16px; padding-bottom: 16px;
}
.itsupport-page .isp-brand { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1rem; }
.itsupport-page .isp-brand span { color: var(--isp-amber); }
.itsupport-page .isp-navlinks { display: flex; gap: 28px; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; letter-spacing: 0.04em; }
.itsupport-page .isp-navlinks a { color: var(--isp-text-muted); text-decoration: none; transition: color .15s; }
.itsupport-page .isp-navlinks a:hover { color: var(--isp-amber); }
.itsupport-page .isp-nav-cta {
  font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;
  border: 1px solid var(--isp-amber-dim); color: var(--isp-amber);
  padding: 8px 16px; border-radius: 2px; text-decoration: none;
}

/* HERO */
.itsupport-page .isp-hero { padding: 88px 0 72px; border-bottom: 1px solid var(--isp-line); }
.itsupport-page .isp-hero h1 { font-size: 2.6rem; max-width: 680px; margin: 18px 0 20px; line-height: 1.15; }
.itsupport-page .isp-hero p.isp-lede { color: var(--isp-text-muted); max-width: 560px; font-size: 1.05rem; }
.itsupport-page .isp-hero-badges { display: flex; gap: 10px; margin-top: 32px; flex-wrap: wrap; }
.itsupport-page .isp-badge {
  font-family: 'JetBrains Mono', monospace; font-size: 0.72rem;
  border: 1px solid var(--isp-line); color: var(--isp-text-muted);
  padding: 6px 12px; border-radius: 2px;
}
.itsupport-page .isp-badge b { color: var(--isp-sage); font-weight: 500; }

/* SECTIONS */
.itsupport-page .isp-section { padding: 72px 0; border-bottom: 1px solid var(--isp-line); }
.itsupport-page .isp-section h2 { font-size: 1.7rem; margin-bottom: 8px; }
.itsupport-page .isp-section-sub { color: var(--isp-text-muted); max-width: 520px; margin-bottom: 44px; }
.itsupport-page .isp-service-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--isp-line); border: 1px solid var(--isp-line); }
.itsupport-page .isp-service-card { background: var(--isp-bg); padding: 28px 24px; }
.itsupport-page .isp-service-card .eyebrow { margin-bottom: 14px; }
.itsupport-page .isp-service-card h3 { font-size: 1.1rem; margin-bottom: 10px; }
.itsupport-page .isp-service-card p { color: var(--isp-text-muted); font-size: 0.92rem; }
.itsupport-page .isp-service-card .isp-mode {
  display: inline-block; margin-top: 16px;
  font-family: 'JetBrains Mono', monospace; font-size: 0.68rem;
  color: var(--isp-amber); letter-spacing: 0.05em;
}

/* PRICING */
.itsupport-page .isp-pricing-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-top: 8px; }
.itsupport-page .isp-price-card { background: var(--isp-bg-card); border: 1px solid var(--isp-line); padding: 26px 22px; border-radius: 2px; }
.itsupport-page .isp-price-card h3 { font-size: 1rem; margin-bottom: 6px; }
.itsupport-page .isp-price-card .isp-amt { font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; color: var(--isp-amber); margin: 10px 0; }
.itsupport-page .isp-price-card p { color: var(--isp-text-muted); font-size: 0.88rem; }
.itsupport-page .isp-disclaimer {
  margin-top: 28px; padding: 16px 18px; border-left: 2px solid var(--isp-amber-dim);
  background: var(--isp-bg-alt); color: var(--isp-text-muted); font-size: 0.88rem; max-width: 640px;
}

/* BOOKING */
.itsupport-page .isp-booking { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
.itsupport-page .isp-booking-copy p { color: var(--isp-text-muted); margin-top: 14px; font-size: 0.95rem; max-width: 400px; }
.itsupport-page .isp-form { display: flex; flex-direction: column; gap: 16px; background: var(--isp-bg-card); border: 1px solid var(--isp-line); padding: 28px; border-radius: 2px; }
.itsupport-page .isp-field { display: flex; flex-direction: column; }
.itsupport-page .isp-field label {
  font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--isp-text-faint); margin-bottom: 6px;
}
.itsupport-page .isp-field input, .itsupport-page .isp-field textarea, .itsupport-page .isp-field select {
  background: var(--isp-bg-alt); border: 1px solid var(--isp-line); color: var(--isp-text);
  padding: 10px 12px; font-family: 'Source Serif 4', serif; font-size: 0.92rem; border-radius: 2px;
}
.itsupport-page .isp-field textarea { min-height: 80px; resize: vertical; }
.itsupport-page .isp-submit-btn {
  margin-top: 6px; background: var(--isp-amber); color: #161D26; border: none;
  font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 0.9rem;
  padding: 12px 18px; border-radius: 2px; cursor: pointer;
}

/* FOOTER */
.itsupport-page .isp-footer { padding: 40px 0; text-align: center; }
.itsupport-page .isp-footer p { color: var(--isp-text-faint); font-size: 0.82rem; font-family: 'JetBrains Mono', monospace; }

@media (max-width: 760px) {
  .itsupport-page .isp-service-grid, .itsupport-page .isp-pricing-grid, .itsupport-page .isp-booking { grid-template-columns: 1fr; }
  .itsupport-page .isp-navlinks { display: none; }
  .itsupport-page .isp-hero h1 { font-size: 2rem; }
}
`;

export const ITSupportPage = () => {
  return (
    <div className="itsupport-page">
      <Helmet>
        <title>IT Support — Project Neverphorm</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>{styles}</style>
      </Helmet>

      <nav className="isp-subnav">
        <div className="isp-wrap">
          <div className="isp-brand">Project <span>Neverphorm</span></div>
          <div className="isp-navlinks">
            <a href="#isp-services">Services</a>
            <a href="#isp-pricing">Pricing</a>
            <a href="#isp-book">Book</a>
          </div>
          <a className="isp-nav-cta" href="#isp-book">Request a visit</a>
        </div>
      </nav>

      <section className="isp-hero">
        <div className="isp-wrap">
          <div className="eyebrow">IT Support · Networking · Web — Mercer County</div>
          <h1>Computer trouble, without the drive to the Quad Cities.</h1>
          <p className="isp-lede">
            Hardware and software help for anyone in Mercer County — slow computers, setup,
            printers, Wi-Fi that won't behave, and everything in between. Plus networking and
            web development for local businesses.
          </p>
          <div className="isp-hero-badges">
            <div className="isp-badge">Remote support <b>available</b></div>
            <div className="isp-badge">On-site visits <b>Mercer County</b></div>
            <div className="isp-badge">Simple fixes <b>from $40</b></div>
          </div>
        </div>
      </section>

      <section className="isp-section" id="isp-services">
        <div className="isp-wrap">
          <h2>What I help with</h2>
          <p className="isp-section-sub">
            Three areas, one appointment. Tell me what's going on and I'll tell you whether
            it's a remote fix or a visit.
          </p>
          <div className="isp-service-grid">
            <div className="isp-service-card">
              <div className="eyebrow">Hardware &amp; software</div>
              <h3>IT support</h3>
              <p>
                Slow computers, setup, updates, printer trouble, malware cleanup, and the
                day-to-day tech problems that pile up, especially for folks who'd rather
                not deal with them alone.
              </p>
              <span className="isp-mode">Remote or in-person</span>
            </div>
            <div className="isp-service-card">
              <div className="eyebrow">Wired &amp; wireless</div>
              <h3>Networking</h3>
              <p>
                Home and small-business networking; routers, Wi-Fi dead zones, and getting
                devices talking to each other properly. For panel work or new wiring, I will point you to
                MerCo Electric here in Aledo.
              </p>
              <span className="isp-mode">In-person</span>
            </div>
            <div className="isp-service-card">
              <div className="eyebrow">Design, build &amp; data</div>
              <h3>Web Development &amp; Databases</h3>
              <p>
                New sites and redesigns for local businesses, built to actually be easy to
                navigate — plus database setup and backend work (Supabase and similar) for
                anything that needs to store or manage real data.
              </p>
              <span className="isp-mode">Remote, on-site kickoff optional</span>
            </div>
          </div>
        </div>
      </section>

      <section className="isp-section" id="isp-pricing">
        <div className="isp-wrap">
          <h2>Rough estimates</h2>
          <p className="isp-section-sub">
            Every job is a little different, but here's what to expect before you reach out.
            Final quote is always confirmed before any work starts.
          </p>
          <div className="isp-pricing-grid">
            <div className="isp-price-card">
              <h3>IT support visit</h3>
              <div className="isp-amt">$40–$75</div>
              <p>Per visit, based on time and complexity. Simple stuff — a setup, a printer fix — lands on the low end.</p>
            </div>
            <div className="isp-price-card">
              <h3>Networking setup</h3>
              <div className="isp-amt">$75–$150</div>
              <p>Router setup, Wi-Fi troubleshooting, and small-business networking. Larger jobs quoted individually.</p>
            </div>
            <div className="isp-price-card">
              <h3>Web dev &amp; databases</h3>
              <div className="isp-amt">$800–$4,000+</div>
              <p>Scoped per project based on pages, functionality, design complexity, and any backend/database work.</p>
            </div>
          </div>
          <div className="isp-disclaimer">
            Some issues come down to your internet provider or building wiring rather than
            your equipment. If it's a provider issue I'll say so plainly, and if it needs an
            electrician, I'll point you to MerCo Electric here in Aledo, no charge for a
            diagnosis that ends there.
          </div>
        </div>
      </section>

      <section className="isp-section" id="isp-book" style={{ borderBottom: 'none' }}>
        <div className="isp-wrap isp-booking">
          <div className="isp-booking-copy">
            <div className="eyebrow">Get started</div>
            <h2>Request an appointment</h2>
            <p>
              Remote sessions are usually available same-day. On-site visits are scheduled
              around Mercer County, just let me know where you're located.
            </p>
          </div>
          <form className="isp-form" onSubmit={(e) => e.preventDefault()}>
            <div className="isp-field">
              <label htmlFor="isp-name">Name</label>
              <input id="isp-name" type="text" placeholder="Your name" />
            </div>
            <div className="isp-field">
              <label htmlFor="isp-contact">Phone or email</label>
              <input id="isp-contact" type="text" placeholder="Best way to reach you" />
            </div>
            <div className="isp-field">
              <label htmlFor="isp-service">Service</label>
              <select id="isp-service">
                <option>IT support</option>
                <option>Networking</option>
                <option>Web development &amp; databases</option>
                <option>Not sure — let's talk</option>
              </select>
            </div>
            <div className="isp-field">
              <label htmlFor="isp-details">Details</label>
              <textarea id="isp-details" placeholder="What's going on?" />
            </div>
            <button className="isp-submit-btn" type="submit">Request appointment</button>
          </form>
        </div>
      </section>

      <footer className="isp-footer">
        <div className="isp-wrap">
          <p>Project Neverphorm — game studio first, community tech support second. Proceeds fund studio development.</p>
        </div>
      </footer>
    </div>
  );
};

export default ITSupportPage;