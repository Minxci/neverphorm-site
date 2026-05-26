import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground px-4 py-24">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy <span className="text-black">Policy</span>
          </h1>

          <p className="text-muted-foreground mb-8">
            Last updated: May 2026
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Information We Collect
              </h2>
              <p>
                Project Neverphorm may collect basic information that you choose
                to provide, such as your name, email address, message content, or
                other details submitted through contact forms or direct communication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                How We Use Information
              </h2>
              <p>
                Information may be used to respond to messages, review inquiries,
                improve the website, share updates, manage supporter communication,
                or support future studio-related services and projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Cookies and Analytics
              </h2>
              <p>
                This website may use basic cookies, analytics, or third-party
                services to understand website traffic and improve the experience.
                These tools may collect general usage data such as browser type,
                pages visited, and approximate location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Data Sharing
              </h2>
              <p>
                Project Neverphorm does not sell personal information. Information
                may only be shared when necessary to operate the website, comply
                with legal requirements, protect the studio, or use trusted service
                providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Contact
              </h2>
              <p>
                For privacy-related questions, please contact Project Neverphorm
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

export default PrivacyPolicy;