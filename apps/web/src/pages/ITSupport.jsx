import { Helmet } from 'react-helmet';

const services = [
  {
    eyebrow: 'Hardware & software',
    title: 'IT support',
    desc: "Slow computers, setup, updates, printer trouble, malware cleanup, and the day-to-day tech problems that pile up — especially for folks who'd rather not deal with them alone.",
    mode: 'Remote or in-person',
  },
  {
    eyebrow: 'Wired & wireless',
    title: 'Networking',
    desc: 'Home and small-business networking — routers, Wi-Fi dead zones, and getting devices talking to each other properly. For panel work or new wiring, I work alongside MerCo Electric here in Aledo.',
    mode: 'In-person',
  },
  {
    eyebrow: 'Design, build & data',
    title: 'Web Development & Databases',
    desc: 'New sites and redesigns for local businesses, built to actually be easy to navigate — plus database setup and backend work (Supabase and similar) for anything that needs to store or manage real data.',
    mode: 'Remote, on-site kickoff optional',
  },
];

const pricing = [
  {
    title: 'IT support visit',
    amt: '$40–$75',
    desc: 'Per visit, based on time and complexity. Simple stuff — a setup, a printer fix — lands on the low end.',
  },
  {
    title: 'Networking setup',
    amt: '$75–$150',
    desc: 'Router setup, Wi-Fi troubleshooting, and small-business networking. Larger jobs quoted individually.',
  },
  {
    title: 'Web dev & databases',
    amt: '$800–$4,000+',
    desc: 'Scoped per project based on pages, functionality, design complexity, and any backend/database work.',
  },
];

export const ITSupportPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this to PocketBase (or whatever backend) once client is confirmed
  };

  return (
    <div className="bg-[#161D26] text-[#F2EFE6] font-serif leading-relaxed antialiased">
      <Helmet>
        <title>IT Support — Project Neverphorm</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* SUBNAV */}
      <nav className="sticky top-0 z-20 bg-[#161D26]/90 backdrop-blur-md border-b border-[#33404E]">
        <div className="max-w-[1080px] mx-auto px-[1.75rem] flex items-center justify-between py-4">
          <div className="font-['Space_Grotesk'] font-bold text-base">
            Project <span className="text-[#E8A33D]">Neverphorm</span>
          </div>
          <div className="hidden sm:flex gap-7 font-['JetBrains_Mono'] text-[0.78rem] tracking-wide">
            <a href="#isp-services" className="text-[#A9B4C0] hover:text-[#E8A33D] transition-colors">Services</a>
            <a href="#isp-pricing" className="text-[#A9B4C0] hover:text-[#E8A33D] transition-colors">Pricing</a>
            <a href="#isp-book" className="text-[#A9B4C0] hover:text-[#E8A33D] transition-colors">Book</a>
          </div>
          
            <a href="#isp-book"
            className="font-['JetBrains_Mono'] text-[0.75rem] border border-[#b98431] text-[#E8A33D] px-4 py-2 rounded-sm"
          >
            Request a visit
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-[5.5rem] pb-[4.5rem] border-b border-[#33404E]">
        <div className="max-w-[1080px] mx-auto px-[1.75rem]">
          <div className="font-['JetBrains_Mono'] text-[0.72rem] tracking-[0.14em] uppercase text-[#8FA382]">
            IT Support · Networking · Web — Mercer County
          </div>
          <h1 className="font-['Space_Grotesk'] font-semibold text-4xl md:text-[2.6rem] leading-tight max-w-2xl mt-[1.125rem] mb-5">
            Computer trouble, without the drive to the Quad Cities.
          </h1>
          <p className="text-[#A9B4C0] max-w-lg text-base md:text-[1.05rem]">
            Hardware and software help for anyone in Mercer County — slow computers, setup,
            printers, Wi-Fi that won't behave, and everything in between. Plus networking and
            web development for local businesses.
          </p>
          <div className="flex gap-[0.625rem] mt-8 flex-wrap">
            <div className="font-['JetBrains_Mono'] text-[0.72rem] border border-[#33404E] text-[#A9B4C0] px-3 py-[0.375rem] rounded-sm">
              Remote support <b className="text-[#8FA382] font-medium">available</b>
            </div>
            <div className="font-['JetBrains_Mono'] text-[0.72rem] border border-[#33404E] text-[#A9B4C0] px-3 py-[0.375rem] rounded-sm">
              On-site visits <b className="text-[#8FA382] font-medium">Mercer County</b>
            </div>
            <div className="font-['JetBrains_Mono'] text-[0.72rem] border border-[#33404E] text-[#A9B4C0] px-3 py-[0.375rem] rounded-sm">
              Simple fixes <b className="text-[#8FA382] font-medium">from $40</b>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="isp-services" className="py-[4.5rem] border-b border-[#33404E]">
        <div className="max-w-[1080px] mx-auto px-[1.75rem]">
          <h2 className="font-['Space_Grotesk'] font-semibold text-2xl md:text-[1.7rem] mb-2">
            What I help with
          </h2>
          <p className="text-[#A9B4C0] max-w-[520px] mb-11">
            Three areas, one appointment. Tell me what's going on and I'll tell you whether
            it's a remote fix or a visit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#33404E] border border-[#33404E]">
            {services.map((s) => (
              <div key={s.title} className="bg-[#161D26] p-7">
                <div className="font-['JetBrains_Mono'] text-[0.72rem] tracking-[0.14em] uppercase text-[#8FA382] mb-3.5">
                  {s.eyebrow}
                </div>
                <h3 className="font-['Space_Grotesk'] font-semibold text-lg mb-2.5">{s.title}</h3>
                <p className="text-[#A9B4C0] text-sm">{s.desc}</p>
                <span className="inline-block mt-4 font-['JetBrains_Mono'] text-[0.68rem] text-[#E8A33D] tracking-wide">
                  {s.mode}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="isp-pricing" className="py-[4.5rem] border-b border-[#33404E]">
        <div className="max-w-[1080px] mx-auto px-[1.75rem]">
          <h2 className="font-['Space_Grotesk'] font-semibold text-2xl md:text-[1.7rem] mb-2">
            Rough estimates
          </h2>
          <p className="text-[#A9B4C0] max-w-[520px] mb-11">
            Every job is a little different, but here's what to expect before you reach out.
            Final quote is always confirmed before any work starts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricing.map((p) => (
              <div key={p.title} className="bg-[#212C39] border border-[#33404E] p-6 rounded-sm">
                <h3 className="font-['Space_Grotesk'] font-semibold text-base mb-1.5">{p.title}</h3>
                <div className="font-['Space_Grotesk'] text-2xl text-[#E8A33D] my-2.5">{p.amt}</div>
                <p className="text-[#A9B4C0] text-[0.88rem]">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 pl-[1.125rem] pr-[1.125rem] py-4 border-l-2 border-[#b98431] bg-[#1D2733] text-[#A9B4C0] text-[0.88rem] max-w-xl">
            Some issues come down to your internet provider or building wiring rather than
            your equipment. If it's a provider issue I'll say so plainly, and if it needs an
            electrician, I'll point you to MerCo Electric here in Aledo — no charge for a
            diagnosis that ends there.
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="isp-book" className="py-[4.5rem]">
        <div className="max-w-[1080px] mx-auto px-[1.75rem] grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="font-['JetBrains_Mono'] text-[0.72rem] tracking-[0.14em] uppercase text-[#8FA382]">
              Get started
            </div>
            <h2 className="font-['Space_Grotesk'] font-semibold text-2xl md:text-[1.7rem] mt-4 mb-2">
              Request an appointment
            </h2>
            <p className="text-[#A9B4C0] mt-3.5 text-[0.95rem] max-w-[400px]">
              Remote sessions are usually available same-day. On-site visits are scheduled
              around Mercer County — just let me know where you're located.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-[#212C39] border border-[#33404E] p-7 rounded-sm"
          >
            <div className="flex flex-col">
              <label htmlFor="isp-name" className="font-['JetBrains_Mono'] text-[0.68rem] tracking-wide uppercase text-[#6B7684] mb-1.5">
                Name
              </label>
              <input
                id="isp-name"
                type="text"
                placeholder="Your name"
                className="bg-[#1D2733] border border-[#33404E] text-[#F2EFE6] px-3 py-2.5 text-[0.92rem] rounded-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="isp-contact" className="font-['JetBrains_Mono'] text-[0.68rem] tracking-wide uppercase text-[#6B7684] mb-1.5">
                Phone or email
              </label>
              <input
                id="isp-contact"
                type="text"
                placeholder="Best way to reach you"
                className="bg-[#1D2733] border border-[#33404E] text-[#F2EFE6] px-3 py-2.5 text-[0.92rem] rounded-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="isp-service" className="font-['JetBrains_Mono'] text-[0.68rem] tracking-wide uppercase text-[#6B7684] mb-1.5">
                Service
              </label>
              <select
                id="isp-service"
                className="bg-[#1D2733] border border-[#33404E] text-[#F2EFE6] px-3 py-2.5 text-[0.92rem] rounded-sm"
              >
                <option>IT support</option>
                <option>Networking</option>
                <option>Web development &amp; databases</option>
                <option>Not sure — let's talk</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="isp-details" className="font-['JetBrains_Mono'] text-[0.68rem] tracking-wide uppercase text-[#6B7684] mb-1.5">
                Details
              </label>
              <textarea
                id="isp-details"
                placeholder="What's going on?"
                className="bg-[#1D2733] border border-[#33404E] text-[#F2EFE6] px-3 py-2.5 text-[0.92rem] rounded-sm min-h-[80px] resize-y"
              />
            </div>
            <button
              type="submit"
              className="mt-1.5 bg-[#E8A33D] text-[#161D26] font-['Space_Grotesk'] font-semibold text-[0.9rem] px-[1.125rem] py-3 rounded-sm"
            >
              Request appointment
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center">
        <div className="max-w-[1080px] mx-auto px-[1.75rem]">
          <p className="text-[#6B7684] text-[0.82rem] font-['JetBrains_Mono']">
            Project Neverphorm — game studio first, community tech support second. Proceeds fund studio development.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ITSupportPage;