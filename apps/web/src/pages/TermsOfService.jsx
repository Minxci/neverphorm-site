import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const TermsOfService = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground px-4 py-24">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of <span className="text-cyan-400">Service</span>
          </h1>

          <p className="text-muted-foreground mb-8">
            Last updated: May 2026
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Use of This Website
              </h2>
              <p>
                By using this website, you agree to use it responsibly and not
                misuse, damage, disrupt, or attempt to interfere with the website,
                its services, or its content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Studio Content
              </h2>
              <p>
                All studio names, logos, written content, game concepts, artwork,
                screenshots, branding, and related materials belong to Project
                Neverphorm unless otherwise stated. Content may not be copied,
                redistributed, modified, or used commercially without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Project Information
              </h2>
              <p>
                Game details, release plans, features, pricing, development updates,
                and studio plans are subject to change. Any future release dates,
                features, or project descriptions are not guaranteed unless formally
                announced.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Third-Party Links
              </h2>
              <p>
                This website may include links to third-party websites, platforms,
                stores, social media pages, or services. Project Neverphorm is not
                responsible for the content, privacy practices, or policies of
                third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Limitation of Liability
              </h2>
              <p>
                This website is provided as-is. Project Neverphorm is not responsible
                for damages, losses, interruptions, or issues that may occur from
                using this website or relying on information provided here.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Contact
              </h2>
              <p>
                For questions about these terms, please contact Project Neverphorm
                through the contact page.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TermsOfService;