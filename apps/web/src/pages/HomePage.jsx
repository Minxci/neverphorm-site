import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactSection from '@/components/ContactSection.jsx';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card.jsx";
import { Link } from "react-router-dom";
import { getSortedUpdates } from "@/lib/updates.js";


const HomePage = () => {
  const latestUpdate = getSortedUpdates()[0];
  
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
    "Game Development": ["Unity", "Unreal Engine", "C++", "C#", "Maya", "Blender", "Autodesk Sketchbook", "Substance Painter", "Figma", "GitHub", "DaVinci"],
    "Web & Systems": ["React", "React Native", "TailwindCSS", "Vercel", "Vite", "VIM", "Rebase", "JavaScript", "Expo", "Supabase", "Node.js", "GitHub"],
    "Planning & Workflow": [ "IET", "Trello", "Notion", "Google Drive", "Discord", "DocuSign", "Microsoft 365"],
  };

  return <>
      <Helmet>
        <title>Project Neverphorm</title>
        <meta name="description" content="Indie Game Studio with a lot of ambitions." />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[62vh] min-h-[520px] max-h-[720px] flex items-center justify-start overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img src="/pictures/newherosection.png" alt="dev workflow" className="w-full h-full object-cover object-center" style={{
            filter: 'brightness(0.85) contrast(1.05)'
          }} />
            {/* <div className="absolute inset-0 bg-white/15"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/70"></div> */}
          </div>

          {/* Content */}
        </section>


        {/* News + Updates section */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-lg tracking-[0.25em] uppercase text-black mb-3">
                Updates
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Link
              to="/updates"
              className="block bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-neutral-300"
            >
              <p className="text-sm text-neutral-500 mb-4">
                {latestUpdate.date} · {latestUpdate.type}
              </p>

              <h3 className="text-3xl font-semibold text-black mb-4">
                {latestUpdate.title}
              </h3>

              <p className="text-neutral-600 text-lg leading-8">
                {latestUpdate.text}
              </p>
            </Link>
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
                  Project Neverphorm is an independent game development studio founded and operated by solo developer, Cody McCullough. Based in 
                  the Greater Illinois/Iowa Quad Cities area. After 15+ plus of all sorts of ideas and concepts, Cody decided to take the leap
                  and start the journey back in early 2025. With the 15+ years of only conceptualizing all these ideas and even now, there are many games
                  in the back catalog that are officially planned and now need to put into development. There is a refusal to stay stuck or algined with only
                  one genre while all these projects vary drastically on their core vision and game/creative direction.
                </p>
                <p>
                  Beyond the gaming side of the studio, there is an equal investment in building the infrastructure that supports the
                  studio itself. Managing a growing catalog of projects across scattered tools and platforms became its own challenge,
                  which led to the development of the Integration & Ecosystem Tool (IET); a centralized platform built in-house to bring planning,
                  organization, and workflow together under one roof. It reflects a broader studio mindseet: if the right tool doesn't exist yet, build it.
                </p>

              </div>
            </motion.div>


            {/* Studio Ecosystem Section */}


            <motion.aside
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Studio Infrastructure
              </h2>

              <p className="text-neutral-600 mb-6">
                Tools, software, and systems currently used across game development,
                web development, planning, and studio workflow. The development stack depends and varies
                on use of tool/software/engine. Why Unity and UE5? Because I'm not focused on only one of them,
                both are choice of engine per game/project as the engines were established for, they're merely tools themself.
              </p>

              <div className="space-y-6">
                {Object.entries(devStack).map(([category, tools]) => (
                  <div key={category}>
                    <h3 className="text-black font-semibold mb-3">
                      {category}
                    </h3>

                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
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