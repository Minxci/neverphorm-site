import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Mobile() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-white px-6 py-20">
      <section className="ml-0 mr-auto max-w-3xl">
        <p className="mb-4 text-xs font-bold tracking-[0.35em]">MOBILE</p>
        <p className="mb-10 text-gray-600">
          A focused look at our mobile releases.
        </p>

        <Link
          to="/mobile/ddodge"
          className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300"
        >
          <div className="overflow-hidden">
            <img
              src="/pictures/DDodgeBackground.png"
              alt="DDodge banner"
              className="h-[260px] w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-[320px]"
            />
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-[1.4fr_220px]">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/pictures/ddodge_logo_site.png"
                  alt="DDodge logo"
                  className="h-9 w-9 object-contain"
                />
                <h1 className="text-3xl font-bold group-hover:underline">
                  DDodge
                </h1>
              </div>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-700">
                A fast-paced mobile arcade game built around timing, reflexes,
                and survival.
              </p>

              <div className="my-5 h-px bg-gray-200" />

              <p className="max-w-xl text-sm leading-6 text-gray-600">
                DDodge is a one-touch arcade experience where you hold to slow
                down and release to return to normal speed. Avoid incoming
                shapes and survive as long as you can.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
                Simple to learn. Hard to master. Built for quick sessions and
                high-score chasing.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
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

            <aside className="rounded-xl border border-gray-200 p-4">
              <Info label="Status" value="Preparing for Release" />
              <Info label="Project Type" value="Mobile Arcade" />
              <Info label="Platform" value="Android, iOS (later release)" />
              <Info label="Engine" value="Unity" />
            </aside>
          </div>
        </Link>
      </section>
    </main>

    <Footer />
    </>
  );
}

function Info({ label, value }) {
  return (
    <div className="border-b border-gray-200 py-3 last:border-b-0">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 text-sm font-bold">{value}</p>
    </div>
  );
}