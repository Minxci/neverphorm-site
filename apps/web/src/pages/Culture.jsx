import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

function Culture() {
  const cards = [
    {
      title: "Creative Freedom",
      text: "Every project under Project Neverphorm is meant to explore ideas without being trapped by trends, algorithms, or shareholder expectations. Games should have personality, identity, and experimentation behind them.",
    },
    {
      title: "No-Crunch Development",
      text: "Burnout destroys creativity. Project Neverphorm is intended to operate with sustainable workflows, realistic goals, and respect for personal life and mental health.",
    },
    {
      title: "Player Respect",
      text: "Games should remain accessible to players. Project Neverphorm strongly values fair pricing, meaningful content, and avoiding practices that take advantage of players financially.",
    },
    {
      title: "Transparency & Community",
      text: "Development is something meant to be shared. The community will be able to follow progress, see behind-the-scenes development, and watch projects evolve over time.",
    },
    {
      title: "Systems & Infrastructure",
      text: "Project Neverphorm is not only focused on games, but also on building efficient creative workflows, internal tools, and infrastructure systems that support development pipelines and long-term studio growth.",
      wide: true,
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-black">
        <section className="max-w-7xl mx-auto px-6 pt-36 pb-24">
          <h1 className="text-5xl font-bold text-center mb-8 text-black">
            Studio Culture
          </h1>

          <p className="max-w-4xl mx-auto text-center text-neutral-600 text-xl leading-9 mb-16">
            Project Neverphorm is being built around creativity, long-term
            vision, fairness, and sustainable development. The goal is not to
            become another corporate machine, but to create games, systems, and
            experiences that feel personal, memorable, and genuinely cared for.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className={`bg-white border border-neutral-200 rounded-3xl p-7 shadow-sm ${
                  card.wide ? "md:col-span-2" : ""
                }`}
              >
                <h2 className="text-2xl font-semibold text-black mb-4">
                  {card.title}
                </h2>

                <p className="text-neutral-600 leading-8">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center mt-20">
            <p className="text-neutral-600 text-xl leading-9">
              At its core, Project Neverphorm is being built from passion, risk,
              creativity, and long-term commitment. Whether the projects succeed
              quietly or loudly, the goal remains the same: create things that
              genuinely matter to people.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Culture;