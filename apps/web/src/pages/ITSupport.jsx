import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const services = [
  {
    title: 'IT Support',
    desc: 'Slow computers, setup, updates, printer trouble, and the day-to-day tech problems that pile up.',
    mode: 'Remote or in-person',
  },
  {
    title: 'Networking',
    desc: 'Router/firewall setup, VLANs, subnetting, DHCP, DNS, Wi-Fi channel planning, and guest network isolation.',
    mode: 'In-person',
  },
  {
    title: 'Web Development & Databases',
    desc: 'New sites and redesigns, plus database setup and backend work (Supabase and similar) for local businesses.',
    mode: 'Remote, on-site kickoff optional',
  },
];

const pricing = [
  { title: 'IT support visit', amt: '$40–$75', desc: 'Per visit, based on time and complexity.' },
  { title: 'Networking setup', amt: '$75–$150', desc: 'Router setup, Wi-Fi troubleshooting, small-business networking.' },
  { title: 'Web dev & databases', amt: '$800–$4,000+', desc: 'Scoped per project based on pages, functionality, and complexity.' },
];

export const ITSupportPage = () => {
  return (
    <div>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
              IT Support for Mercer County
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Hardware and software support for anyone in Mercer County, plus networking
              and web/database development for local businesses. 
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
            What I help with
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-lg border p-6 bg-background">
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <span className="text-xs font-medium text-primary">{s.mode}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
            Rough estimates
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.title} className="rounded-lg border p-6 bg-background">
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <div className="text-2xl font-semibold text-primary mb-2">{p.amt}</div>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Request an appointment →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSupportPage;