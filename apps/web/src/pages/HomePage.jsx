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
  // const teamMembers = [{
  //  name: "Cody McCullough",
  //  role: "Studio Head & Creative Lead"
  //}, {
  //  name: "Katie Fogarty",
  // role: "Marketing Manager"
  //}, {
  //  name: "Matt Brown",
  //  role: "Business Operations Lead"
  //}];

  const devStack = {
    "Game Development": ["Unity", "C#", "Blender", "Substance Painter", "Figma", "GitHub"],
    "Web & Systems": ["React", "React Native", "TailwindCSS", "Vercel", "Vite", "JavaScript", "Expo", "Supabase", "Node.js", "GitHub"],
    "Planning & Workflow": ["Trello", "Notion", "Google Drive", "Discord"],
  };

  return <>
      <Helmet>
        <title>Project Neverphorm</title>
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
              
              <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                An indie game studio focused on creating unique, catharsis, and chaotic gameplay experiences.
              </p>
              
              <motion.a href="#game" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-[0.98] shadow-lg shadow-primary/20" whileHover={{
              y: -2
            }} whileTap={{
              scale: 0.98
            }}>
                View the Game
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
                    A catharsis, chaotic escape experience about walking away from the job… Your way. Navigate unpredictable environments, avoid getting caught, 
                    and find your own path out.
                    <br />
                    Every run plays out differently. Especially per mode.
                  </p> <br /><br /><br />
                  <p>
                    <strong>Anticipated release date:</strong> Late this year. <br />
                    <strong>Platforms:</strong> Steam, PS5, Xbox Series X, Switch 2.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial="initial" whileInView="animate" viewport={{
            once: true,
            margin: "-100px"
          }} variants={fadeInUp}
            className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-snug">
                About the Studio
              </h2>
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                <p>
                  Project Neverphorm is a solo, indie game development run by myself (Cody McCullough) and is based in Aledo, IL. 
                  Being 32 now and have always wanted to create video games since 2010 back in high school. It’s taking me nearly 
                  15 years to decide to take the risk and start working on games and bringing my creative imagination and worlds 
                  alive through this journey. Currently in development for my first game that is to be released around the end of 
                  the year (late 2026) as of right now. That is not promised as the amount of time I have already spent working on past projects 
                  (that never came to fruition) there’s been some hiccups along the way and am focusing on making sure that the first 
                  version of this game is well executed for what it is. 
                </p><br />
                
                <p>
                  I have a lot planned, so this first game is definitely not the first and only. This first project is not a 
                  “one and done game”, it’s most certainly not a “wait around and see what the outcome is”. There is a strong 
                  core vision and long-term commitment surrounding this. No matter how or what the outcome of this first game 
                  turns out to be, there’s already more planned in a back catalog. As much as I’ve been planning not only the 
                  game development side of this studio, but there’s also a lot I have been enjoying building such as the backend 
                  systems and workflow pipeline. There may be even a side passion project that may even be brewing up as well, 
                  and that’s more centered around the systems and tools infrastructure that’s focused on the creative field for 
                  other creative teams and studios (small to medium sizes). This project idea and concept will not be publicly available 
                  as a transactional product until the IET (Internal Ecosystem Tool) currently being developed for the studio reaches a more 
                  complete and established state.
                </p>

              </div>
            </motion.div>

            <motion.aside
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="rounded-2xl border border-cyan-500/30 bg-black/30 p-6 shadow-lg shadow-cyan-500/10"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Development Stack
              </h2>

              <p className="text-muted-foreground mb-6">
                Tools, software, and systems currently used across game development,
                web development, planning, and studio workflow.
              </p>

              <div className="space-y-6">
                {Object.entries(devStack).map(([category, tools]) => (
                  <div key={category}>
                    <h3 className="text-cyan-400 font-semibold mb-3">
                      {category}
                    </h3>

                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-100"
                      >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        {/* Team Section */}
        {/*<section className="py-24 bg-background">
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
        </section>*/}

        {/* Contact Section */}
        <div id="contactus">
          <ContactSection />
        </div> 
      </main>

      <Footer />
    </>;
};
export default HomePage;