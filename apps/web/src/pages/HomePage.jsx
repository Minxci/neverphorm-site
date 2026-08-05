import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactSection from '@/components/ContactSection.jsx';
import { getSortedUpdates } from "@/lib/updates.js";
import GameCard from "@/components/GameCard.jsx";
import { games } from "@/data/games.js";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const HomePage = () => {
  const latestUpdate = getSortedUpdates()[0];

  return (
    <>
      <Helmet>
        <title>Project Neverphorm</title>
        <meta name="description" content="Indie Game Studio with a lot of ambitions." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background text-foreground font-serif">
        {/* About Section — asymmetric split, left rail label */}
        <section className="py-28 bg-muted/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="lg:sticky lg:top-28 lg:self-start"
              >
                <p className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  About
                </p>
                <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.25em] text-muted-foreground/60 mt-1">
                  The Studio
                </p>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="max-w-3xl"
              >
                <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-semibold mb-8 leading-tight text-left text-foreground">
                  One developer.<br />No genre allegiance.
                </h2>
                <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground text-left">
                  <p>
                    Project Neverphorm is an independent game development studio founded and
                    operated by solo developer, Cody McCullough. After 15+ years of all sorts
                    of ideas and concepts, Cody decided to take the leap and start the journey
                    back in early 2025.
                  </p>
                  <p>
                    With 15+ years of only conceptualizing these ideas, there are now games in
                    the back catalog that are officially planned and need to be put into
                    development. There is a refusal to stay stuck or aligned with only one
                    genre, as these projects vary drastically in their core vision and
                    game/creative direction.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section className="py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-baseline justify-between mb-12">
              <p className="font-['JetBrains_Mono'] text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
                Games
              </p>
              <span className="hidden sm:block font-['JetBrains_Mono'] text-xs text-muted-foreground uppercase tracking-wide">
                {games.length} in the catalog
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {games.map((game) => (
                <GameCard key={game.title} {...game} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contactus" className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-28">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;