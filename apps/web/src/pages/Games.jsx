import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Games() {
    return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-neutral-950 px-6 py-24">
        <section className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Games
          </p>
  
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            Worlds we are building.
          </h1>
  
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <div className="border border-neutral-200 rounded-2xl p-8 bg-neutral-50">
              <p className="text-sm text-neutral-500 mb-3">Debut Project</p>
              <h2 className="text-3xl font-semibold mb-4">Foreshadowing</h2>
              <p className="text-neutral-700 leading-relaxed">
                A peaceful atmospheric exploration game set in a rainy nighttime world,
                focused on walking, reflection, dark aesthetics, and uncovering notes
                tied to a larger future universe.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
    );
  }