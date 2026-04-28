
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Coins, Gamepad2, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutUsPage = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 30
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true,
      margin: "-100px"
    },
    transition: {
      duration: 0.6
    }
  };

  const staggerContainer = {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: {
      once: true,
      margin: "-100px"
    }
  };

  const philosophies = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Creativity Over Conformity",
      desc: "We don't chase trends or copy what's safe. We build weird, interesting, and chaotic experiences because that's what we actually want to play."
    },
    {
      icon: <Coins className="w-8 h-8 text-primary" />,
      title: "Fair Pricing for Players",
      desc: "No predatory monetization, no endless microtransactions. We want to make good games and charge a fair price for them. It's really that simple."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Room to Lead and Create",
      desc: "Great ideas don't just come from the top down. We give our team the space to experiment, take ownership, and actually shape the games we're making."
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-primary" />,
      title: "Building Real Fun",
      desc: "We measure success by how much fun a game is, not by player retention metrics or daily active users. If it's not fun, we scrap it and try again."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Project Neverphorm</title>
        <meta name="description" content="Learn about Project Neverphorm's journey, philosophy, and the team building chaotic and unique indie games." />
      </Helmet>

      <Header />

      <main className="min-h-screen pt-24 bg-background">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-muted/20 z-0"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground font-medium text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We didn't start in a corporate boardroom. We started with a group chat, a shared frustration with the industry, and way too much coffee.
            </motion.p>
          </div>
        </section>

        {/* Our Journey & Why We Do This - Split Layout */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">How We Got Here</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Project Neverphorm wasn't born out of a master business plan. It started because a few of us realized we were spending more time talking about the games we <em>wished</em> existed rather than actually playing them.
                  </p>
                  <p>
                    We were tired of safe sequels, predictable mechanics, and games that felt like second jobs. So we decided to stop complaining and start building. We pooled our skills, opened up our code editors, and started making something weird.
                  </p>
                  <p>
                    It's been a messy, challenging, and incredibly rewarding process. Every step has been built by hand, learning as we go, and making sure we never lose sight of why we started.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                initial="initial" 
                whileInView="whileInView"
                className="bg-card/50 border border-border/50 rounded-3xl p-8 md:p-12"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Why We Do This</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We build games because we love the spark of booting up something entirely new and not quite knowing what to expect. 
                  </p>
                  <p>
                    We want to create moments of genuine surprise, catharsis, and chaos. We're not trying to optimize for maximum daily engagement or trap players in endless grinds. We just want you to sit down, play our game, and have a genuinely good time.
                  </p>
                  <p className="text-foreground font-medium mt-8">
                    If we can make you laugh, yell at your screen, or stay up way too late playing "just one more run," then we've done our jobs.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={fadeInUp} initial="initial" whileInView="whileInView">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">How We Operate</h2>
              <p className="text-lg text-muted-foreground">
                We don't really care about how things are "supposed" to be done in the industry. We've built our own set of rules for how we work and what we make.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
            >
              {philosophies.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="bg-background border border-border/50 p-8 rounded-2xl hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="mb-6 p-4 bg-muted inline-block rounded-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUsPage;
