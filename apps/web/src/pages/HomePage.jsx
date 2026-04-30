import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactSection from '@/components/ContactSection.jsx';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card.jsx";
const HomePage = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };
  const teamMembers = [{
    name: "Cody McCullough",
    role: "Studio Head & Creative Lead"
  }, {
    name: "Katie Fogarty",
    role: "Marketing & Community Manager"
  }, {
    name: "Matt Brown",
    role: "Business Operations Lead"
  }, {
    name: "Dakota Schroeder",
    role: "Gameplay Programmer"
  }, {
    name: "Wynn Brownfield",
    role: "3D & Technical Artist"
  }, {
    name: "Could Be You",
    role: "Open Position",
    isOpenPosition: true
  }];
  return <>
      <Helmet>
        <title>Project Neverphorm - We don't conform. We build experiences.</title>
        <meta name="description" content="An indie game studio focused on creating unique and chaotic gameplay experiences. Discover No 2 Weeks, our chaotic escape simulator." />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1601742338208-65f764c09990" alt="Dark green foliage atmospheric background" className="w-full h-full object-cover scale-105" style={{
            filter: 'blur(3px) brightness(1.1) contrast(1.05)'
          }} />
            <div className="absolute inset-0 bg-black/65"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{
              letterSpacing: '-0.02em'
            }}>
                Project <span className="animated-gradient-text">Neverphorm</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
                We don't conform. We build experiences.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                An indie game studio focused on creating unique, catharsis, and chaotic gameplay experiences.
              </p>
              
              <motion.a href="#game" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-[0.98] shadow-lg shadow-primary/20" whileHover={{
              y: -2
            }} whileTap={{
              scale: 0.98
            }}>
                View Our Game
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }}>
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            </div>
          </motion.div>
        </section>

        {/* Game Section - No 2 Weeks */}
        <section id="game" className="py-24 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-3xl mx-auto" initial="initial" whileInView="animate" viewport={{
            once: true,
            margin: "-100px"
          }} variants={fadeInUp}>
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug text-center">
                  Working Title
                </h2>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <p>
                    A chaotic escape experience about walking away from the job… Your way. Navigate unpredictable environments, avoid getting caught, and find your own path out.
                  </p>
                  <p>
                    Every run plays out differently.
                  </p>
                  <p>
                    <strong>Anticipated release date:</strong> Late this year.
                  </p>
                  <p>
                    <strong>Platforms:</strong> Steam, PS5, Xbox Series X, Switch 2.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial="initial" whileInView="animate" viewport={{
            once: true,
            margin: "-100px"
          }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-snug">
                About Project Neverphorm
              </h2>
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-prose mx-auto">
                <p>
                  Based in Aledo, IL, Project Neverphorm is an independent game studio built on creativity, freedom, and the drive to build things our own way. We're not here to follow the industry, we're here to carve out our own path.
                </p>
                <p>
                  Right now, we're focused on building our first project, No 2 Weeks. It's the start of everything for u, where we learn, experiment, and push ideas into something real.
                </p>
                <p>
                  We're not trying to overpromise anything. We're just focused on putting something solid out, building from it, and growing over time.
                </p>
                <p className="text-foreground font-medium">
                  This is just the beginning.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 leading-snug text-center">
              The Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => <motion.div key={member.name} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: "-50px"
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <Card className={`h-full transition-all duration-300 team-card-hover ${member.isOpenPosition ? 'bg-card/50 border-primary/30' : 'bg-card/50 border-border/50'}`}>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                      <CardDescription className={`font-medium mt-1 ${member.isOpenPosition ? 'text-primary' : 'text-primary/80'}`}>
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contactus">
          <ContactSection />
        </div> 
      </main>

      <Footer />
    </>;
};
export default HomePage;