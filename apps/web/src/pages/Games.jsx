import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Games() {
  return (
    <>
    <Header />

    <main className="min-h-screen bg-white pt-24">
      <section className="px-6 sm:px-10 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-primary mb-4">
              Games
            </p>

            <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed">
              A focused look at what Project Neverphorm is actively building.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
            <div className="relative h-[280px] sm:h-[380px] lg:h-[460px] overflow-hidden">
              <img
                src="/pictures/foreshadowingscreenshot.png"
                alt="Foreshadowing game preview"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <p className="text-sm font-semibold tracking-[0.25em] uppercase text-white/70 mb-3">
                  In Development
                </p>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                  Foreshadowing
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-10 lg:p-12">
              <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-10">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    An atmospheric experience currently in development.
                  </h3>

                  <p className="text-neutral-600 leading-relaxed text-lg">
                    Foreshadowing is a smaller, focused project built around
                    atmosphere, exploration, environmental storytelling, and a
                    strong sense of place. More details will be shared as the
                    project develops.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-neutral-200 p-6">
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Status:</p>
                      <p className="font-semibold text-black">In Development</p>
                    </div>

                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Project Type:</p>
                      <p className="font-semibold text-black">
                        Atmospheric Exploration
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Anticipated Launch Date:</p>
                      <p className="font-semibold text-black">
                        Q4 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </main>

    <Footer />
    </>
  );
}