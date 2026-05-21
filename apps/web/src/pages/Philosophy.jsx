function Philosophy() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 text-white">
      <h1 className="text-5xl font-bold text-center mb-8">
        Studio Philosophy
      </h1>

      <p className="max-w-4xl mx-auto text-center text-zinc-400 text-xl leading-9 mb-16">
        Project Neverphorm is being built around creativity,
        long-term vision, fairness, and sustainable development.
        The goal is not to become another corporate machine,
        but to create games, systems, and experiences that feel
        personal, memorable, and genuinely cared for.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0a0a0a] border border-cyan-500/20 rounded-3xl p-7 hover:border-cyan-500/50 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Creative Freedom
          </h2>

          <p className="text-zinc-300 leading-8">
            Every project under Project Neverphorm is meant to
            explore ideas without being trapped by trends,
            algorithms, or shareholder expectations.
            Games should have personality, identity,
            and experimentation behind them.
          </p>
        </div>

        <div className="bg-[#0a0a0a] border border-cyan-500/20 rounded-3xl p-7 hover:border-cyan-500/50 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            No-Crunch Development
          </h2>

          <p className="text-zinc-300 leading-8">
            Burnout destroys creativity.
            Project Neverphorm is intended to operate with
            sustainable workflows, realistic goals,
            and respect for personal life and mental health.
          </p>
        </div>

        <div className="bg-[#0a0a0a] border border-cyan-500/20 rounded-3xl p-7 hover:border-cyan-500/50 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Player Respect
          </h2>

          <p className="text-zinc-300 leading-8">
            Games should remain accessible to players.
            Project Neverphorm strongly values fair pricing,
            meaningful content, and avoiding practices that
            take advantage of players financially.
          </p>
        </div>

        <div className="bg-[#0a0a0a] border border-cyan-500/20 rounded-3xl p-7 hover:border-cyan-500/50 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Transparency & Community
          </h2>

          <p className="text-zinc-300 leading-8">
            Development is something meant to be shared.
            The community will be able to follow progress,
            see behind-the-scenes development,
            and watch projects evolve over time.
          </p>
        </div>

        <div className="bg-[#0a0a0a] border border-cyan-500/20 rounded-3xl p-7 hover:border-cyan-500/50 transition-all duration-300 md:col-span-2">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Systems & Infrastructure
          </h2>

          <p className="text-zinc-300 leading-8">
            Project Neverphorm is not only focused on games,
            but also on building efficient creative workflows,
            internal tools, and infrastructure systems that
            support development pipelines and long-term studio growth.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-20">
        <p className="text-zinc-400 text-xl leading-9">
          At its core, Project Neverphorm is being built from
          passion, risk, creativity, and long-term commitment.
          Whether the projects succeed quietly or loudly,
          the goal remains the same:
          create things that genuinely matter to people.
        </p>
      </div>
    </div>
  );
}

export default Philosophy;