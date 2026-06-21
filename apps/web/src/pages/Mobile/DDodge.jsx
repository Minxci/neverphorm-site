import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DDodgeOverview() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Back link */}
          <Link
            to="/mobile"
            className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-neutral-600 transition-colors hover:text-black"
          >
            ← Back to Mobile
          </Link>

          {/* Hero banner */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            <img
              src="/pictures/DDodgeBackground.png"
              alt="DDodge banner"
              className="h-[280px] w-full object-cover sm:h-[360px]"
            />
          </div>

          {/* Title row */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/pictures/ddodge_logo_site.png"
                alt="DDodge logo"
                className="h-14 w-14 object-contain"
              />
              <div>
                <h1 className="text-4xl font-bold tracking-tight">DDodge</h1>
                <p className="mt-1 text-neutral-600">
                  A fun mobile arcade game built around timing,
                  reflexes, and survival.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <img
                src="/pictures/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-10 w-auto opacity-50"
              />
              <img
                src="/pictures/app-store-badge.png"
                alt="Download on the App Store"
                className="h-10 w-auto opacity-50"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_280px]">
            {/* Main content column */}
            <div className="space-y-12">
              <Section title="Overview">
                <p>
                  DDodge is a one-touch arcade experience where you hold to
                  slow down and release to return to normal speed. Avoid
                  incoming shapes and survive as long as you can.
                </p>
                <p>
                  Simple to learn. Hard to master. Built for quick sessions
                  and high-score chasing.
                </p>
              </Section>

              <Section title="Why It Was Made">
                <p className="text-black">
                  This was a break-from-main-game, experimental, "dip our toes into the water" type of project for the mobile experience. I (cody) have never been
                  a real big fan of mobile game development but I caved in and wanted to experiment with it a little bit.
                </p>
              </Section>

              <Section title="Development & Creative Direction">
                <p className="text-black">
                  The game and creative direction was pretty plain and simple; wanted to make a continuous gameplay loop, implementation of adding in a leaderboard would
                  keep players coming back (the competitive players), something fun and simple to hop on as a time waster whether its maybe a few rounds before bed, while you
                  wait on your oil change at the shop, waiting on the wife to get done shopping while the husband sits in the car because he refused to go into target, and many other
                  time wasting scenarios. 
                </p>
              </Section>

              <Section title="Behind the Scenes">
                <p className="text-black">
                  It was fun creating this game actually! I will admit, even though mobile gaming really is not something that I do or enjoy, I have come to find that developing one
                  was actually pretty fun. The process of this weeks production definitely helped, especially the leaderboard, since there are future titles with global
                  leaderboard planned.
                </p>
              </Section>

              <Section title="The Death Messages">
                <p className="text-black">
                    Even though these are just simple texts, adding in encouraging, funny, roast-worthy, jokingly death messages was fun and I plan on adding much more
                    through updates to the game. The messages do range between common, uncommon, rare, legendary, and ultra-rare. With that said, there is only 1 ultra-rare
                    death message and the thought process and innovative process behind this one is that it will contain a "Claim ID" number for the player to screenshot. The 
                    purpose to this ultra-rare death message means once it is found, the player sends the screenshot of the message to us via email. Once we see internally that 
                    the player did actually trigger this claim id code, you have the option to use an alias/username and your pick of username will forever be permanently inside 
                    future title projects credit screen. 
                </p>
              </Section>
            </div>

            {/* Sidebar */}
            <aside className="h-fit rounded-2xl border border-neutral-200 p-6">
              <Info label="Status" value="Preparing for Release" />
              <Info label="Project Type" value="Mobile Arcade" />
              <Info label="Platform" value="Android, iOS (later release)" />
              <Info label="Engine" value="Unity" />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold tracking-tight">{title}</h2>
      <div className="max-w-2xl space-y-4 leading-7 text-neutral-700">
        {children}
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div className="border-b border-neutral-200 py-4 last:border-b-0">
      <p className="text-sm text-neutral-500">{label}</p>
      <p className="mt-1 font-bold">{value}</p>
    </div>
  );
}