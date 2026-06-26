import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import GameCard from "@/components/GameCard.jsx";

const games = [
  {
    image: "/pictures/vecpulse-background.png",
    status: "Preparing for Release",
    title: "VecPulse",
    projectType: "Mobile Arcade",
    launchDate: "2026",
    description: {
      heading: "A fast-paced mobile arcade game built around timing, reflexes, and survival.",
      body: "VecPulse is a one-touch arcade experience where you hold to slow down and release to return to normal speed. Avoid incoming shapes and survive as long as you can. Simple to learn. Hard to master.",
    },
    overviewPath: "/mobile/vecpulse",
    locked: false,
  },
  {
    image: "/pictures/foreshadowingscreenshot.png",
    status: "In Development",
    title: "Foreshadowing",
    projectType: "Atmospheric Exploration",
    launchDate: "Q4 2026",
    description: {
      heading: "An atmospheric experience currently in development.",
      body: "Foreshadowing is a smaller, focused project built around atmosphere, exploration, environmental storytelling, and a strong sense of place. More details will be shared as the project develops.",
    },
    locked: true,
  },
];

export default function Games() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-20">
        <section className="px-6 pb-20 sm:px-10 lg:px-20">
          <div className="ml-0 mr-auto max-w-3xl">
            <div className="mb-10">
              <p className="mb-4 text-medium font-semibold uppercase tracking-[0.25em] text-primary">
                Games
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
              </p>
            </div>

            <div className="space-y-8">
              {games.map((game) => (
                <GameCard key={game.title} {...game} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}