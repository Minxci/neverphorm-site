import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import GameCard from "@/components/GameCard.jsx";

const games = [
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

      <main className="min-h-screen bg-white pt-24">
        <section className="px-6 pb-20 sm:px-10 lg:px-20">
          <div className="ml-0 mr-auto max-w-3xl">
            <div className="mb-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Games
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
                A focused look at what we're actively building.
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