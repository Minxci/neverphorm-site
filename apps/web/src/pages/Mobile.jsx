// app/mobile/page.jsx

export default function MobilePage() {
  return (
    <main className="mobile-page">
      <section className="mobile-header">
        <p className="eyebrow">MOBILE</p>
        <p>A focused look at our mobile releases.</p>
      </section>

      <section className="mobile-card">
        <img
          src="/pictures/ddodge-banner.png"
          alt="DDodge banner"
          className="mobile-banner"
        />

        <div className="mobile-content">
          <div>
            <h1>DDodge</h1>
            <p className="lead">
              A fast-paced mobile arcade game built around timing, reflexes, and survival.
            </p>

            <hr />

            <p>
              DDodge is a one-touch arcade experience where you hold to slow down
              and release to return to normal speed. Avoid incoming shapes and
              survive as long as you can.
            </p>

            <p>
              Simple to learn. Hard to master. Built for quick sessions and
              high-score chasing.
            </p>

            <button className="google-play-btn">Coming to Google Play</button>
          </div>

          <aside className="mobile-info">
            <p>Status:<br /><strong>Preparing for Release</strong></p>
            <p>Project Type:<br /><strong>Mobile Arcade</strong></p>
            <p>Platform:<br /><strong>Android</strong></p>
            <p>Price:<br /><strong>$0.99</strong></p>
            <p>Engine:<br /><strong>Unity</strong></p>
          </aside>
        </div>
      </section>
    </main>
  );
}