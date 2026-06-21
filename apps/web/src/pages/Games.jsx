import { useState } from "react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";

export default function Games() {
  const [showLocked, setShowLocked] = useState(false);

  const handleCardClick = () => {
    setShowLocked(true);
  };

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
                A focused look at what we're actively building.
              </p>
            </div>

            <button
              onClick={handleCardClick}
              className="group relative block w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300"
            >
              <div className="relative h-[280px] sm:h-[380px] lg:h-[460px] overflow-hidden">
                <img
                  src="/pictures/foreshadowingscreenshot.png"
                  alt="Foreshadowing game preview"
                  className={`h-full w-full object-cover transition-all duration-300 group-hover:scale-105 ${
                    showLocked ? "blur-md scale-105" : ""
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 sm:p-10 ${
                    showLocked ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                    In Development
                  </p>

                  <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                    Foreshadowing
                  </h2>
                </div>

                {/* Locked overlay */}
                <AnimatePresence>
                  {showLocked && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 px-6 text-center"
                    >
                      <Lock className="h-8 w-8 text-white" />
                      <p className="text-lg font-semibold text-white sm:text-xl">
                        Still in development...
                      </p>
                      <p className="text-sm text-white/80 sm:text-base">
                        Overview is unavailable
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className={`p-6 transition-opacity duration-300 sm:p-10 lg:p-12 ${
                  showLocked ? "pointer-events-none opacity-40" : ""
                }`}
              >
                <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-black">
                      An atmospheric experience currently in development.
                    </h3>

                    <p className="text-lg leading-relaxed text-neutral-600">
                      Foreshadowing is a smaller, focused project built around
                      atmosphere, exploration, environmental storytelling, and
                      a strong sense of place. More details will be shared as
                      the project develops.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                    <div className="space-y-5">
                      <div>
                        <p className="mb-1 text-sm text-neutral-500">Status:</p>
                        <p className="font-semibold text-black">
                          In Development
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-sm text-neutral-500">
                          Project Type:
                        </p>
                        <p className="font-semibold text-black">
                          Atmospheric Exploration
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-sm text-neutral-500">
                          Anticipated Launch Date:
                        </p>
                        <p className="font-semibold text-black">Q4 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}