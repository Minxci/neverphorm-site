import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vecpulseScreenshots = [
  "/pictures/vecpic1.jpeg",
  "/pictures/vecpic2.jpeg",
  "/pictures/vecpic3.jpeg",
  "/pictures/vecpic4.jpeg",
  "/pictures/vecpic5.jpeg",
  "/pictures/vecpic6.jpeg",
  "/pictures/vecpic7.jpeg",
  "/pictures/vecpic8.jpeg",
];

const vecpulsePatchNotes = [
  {
    version: "v1.0",
    date: "Initial Release",
    notes: [
      "Game launch - WebGL version",
      "Added new death messages",
    ],
  },
];

export default function VecPulseOverview() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [gameOpen, setGameOpen] = useState(false);

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) =>
      i === 0 ? vecpulseScreenshots.length - 1 : i - 1
    );
  const showNext = () =>
    setLightboxIndex((i) =>
      i === vecpulseScreenshots.length - 1 ? 0 : i + 1
    );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/games"
            className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-neutral-600 transition-colors hover:text-black"
          >
            ← Back to Games
          </Link>

          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            <img
              src="/pictures/vecpulse-background.png"
              alt="VecPulse banner"
              className="h-[280px] w-full object-cover sm:h-[360px]"
            />
          </div>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/pictures/vecpulse-logo.png"
                alt="VecPulse logo"
                className="h-14 w-14 object-contain"
              />
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-black">VecPulse</h1>
                <p className="mt-1 text-neutral-600">
                  A fun mobile arcade game built around timing, reflexes, and survival.
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
            <div className="space-y-12">
              <Section title="Overview">
                <p>
                  VecPulse is a one-touch arcade experience where you hold to
                  slow down and release to return to normal speed. Avoid
                  incoming shapes and survive as long as you can.
                </p>
                <p>Simple to learn. Hard to master. Built for quick sessions and high-score chasing.</p>
              </Section>

              <Section title="Why It Was Made">
                <p className="text-black">
                  This was a break-from-main-game, experimental, "dip our
                  toes into the water" type of project for the mobile
                  experience. I (cody) have never been a real big fan of
                  mobile game development but I caved in and wanted to
                  experiment with it a little bit. Also to prove that we can ship.
                </p>
              </Section>

              <Section title="Development & Creative Direction">
                <p className="text-black">
                  The game and creative direction was pretty plain and
                  simple; wanted to make a continuous gameplay loop,
                  implementation of adding in a leaderboard would keep
                  players coming back (the competitive players), something
                  fun and simple to hop on as a time waster whether its
                  maybe a few rounds before bed, while you wait on your oil
                  change at the shop, waiting on the wife to get done
                  shopping while the husband sits in the car because he
                  refused to go into target, and many other time wasting
                  scenarios. Another thing to add here is the reasoning why it's a
                  paid game. I've played mobile games and almost every time there's ads.
                  One-time payment, zero ads thrown in your face. Sounds better and 
                  no ad annoyance. 
                </p>
              </Section>

              <Section title="Behind the Scenes">
                <p className="text-black">
                  It was fun creating this game actually! I will admit, even
                  though mobile gaming really is not something that I do or
                  enjoy, I have come to find that developing one was
                  actually pretty fun. The process of this weeks production
                  definitely helped, especially the leaderboard, since there
                  are future titles with global leaderboard planned.
                </p>
              </Section>

              <Section title="The Death Messages">
                <p className="text-black">
                Even though these are just simple lines of text, making them funny, 
                encouraging, and sometimes roast-worthy was one of my favorite parts. 
                They're ranked in rarity; Common, Uncommon, Rare, Legendary, and Ultra-Rare, 
                with more added through future updates. There's only one Ultra-Rare message, 
                and it contains a unique Claim ID. If you find it, screenshot it and email it to us. 
                Once verified, you'll get to pick a username that's permanently credited in 
                every future Neverphorm title.
                </p>
              </Section>

              <Section title="Extra Notes (updated 7/16/2026)">
                <p className="text-black">
                  Currently in review for release. May include leaderboard some time down the road, depends
                  on player demand truthfully, or any other feature really. Since there is a main project we're 
                  currently working on. 
                </p>
              </Section>
            </div>

            <aside className="space-y-6 md:sticky md:top-24 md:self-start">

              <div className="rounded-2xl border border-neutral-200 p-6">
                <Info label="Status" value="Preparing for Release" />
                <Info label="Project Type" value="Mobile Arcade" />
                <Info label="Platform" value="Android" />
                <Info label="Price" value="$0.99" />
                <Info label="Engine" value="Unity" />
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold text-neutral-700">Screenshots</p>
                <div className="grid grid-cols-3 gap-2 md:grid-cols-2">
                  {vecpulseScreenshots.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setLightboxIndex(i)}
                      className="group aspect-[9/16] overflow-hidden rounded-lg border border-neutral-200 transition-colors hover:border-neutral-400"
                    >
                      <img
                        src={src}
                        alt={`VecPulse gameplay screenshot ${i + 1}`}
                        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 p-6">
                <p className="mb-4 text-sm font-semibold text-neutral-700">
                  Patch Notes
                </p>
                <div className="space-y-5">
                  {vecpulsePatchNotes.map((entry) => (
                    <PatchEntry key={entry.version} {...entry} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 text-white/70 transition-colors hover:text-white"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-4 text-white/70 transition-colors hover:text-white sm:left-8"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <img
            src={vecpulseScreenshots[lightboxIndex]}
            alt={`VecPulse gameplay screenshot ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
          />

          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-4 text-white/70 transition-colors hover:text-white sm:right-8"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <p className="absolute bottom-6 text-sm text-white/50">
            {lightboxIndex + 1} / {vecpulseScreenshots.length}
          </p>
        </div>
      )}

      <Footer />
    </>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-black">{title}</h2>
      <div className="max-w-2xl space-y-4 leading-7 text-neutral-700">{children}</div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div className="border-b border-neutral-200 py-4 last:border-b-0">
      <p className="text-sm text-neutral-500">{label}</p>
      <p className="mt-1 font-bold text-black">{value}</p>
    </div>
  );
}

function PatchEntry({ version, date, notes }) {
  return (
    <div className="border-b border-neutral-200 pb-5 last:border-b-0 last:pb-0">
      <p className="text-sm font-bold text-black">
        {version} <span className="font-normal text-neutral-500">— {date}</span>
      </p>
      <ul className="mt-2 space-y-1.5">
        {notes.map((note, i) => (
          <li key={i} className="text-sm leading-6 text-neutral-700">
            • {note}
          </li>
        ))}
      </ul>
    </div>
  );
}