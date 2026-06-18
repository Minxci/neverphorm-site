import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Mobile() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-white px-6 py-20">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-bold tracking-[0.35em]">MOBILE</p>
        <p className="mb-10 text-gray-600">
          A focused look at our mobile releases.
        </p>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="/pictures/DDodgeBackground.png"
            alt="DDodge banner"
            className="h-[360px] w-full object-cover"
          />

          <div className="grid gap-10 p-10 md:grid-cols-[1fr_320px]">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src="/pictures/ddodge_logo_site.png"
                  alt="DDodge logo"
                  className="h-16 w-auto"
                />
                <h1 className="text-5xl font-bold">DDodge</h1>
              </div>

              <p className="mt-4 max-w-xl text-xl leading-relaxed text-gray-700">
                A fast-paced mobile arcade game built around timing, reflexes,
                and survival.
              </p>

              <div className="my-8 h-px bg-gray-200" />

              <p className="max-w-xl leading-7 text-gray-600">
                DDodge is a one-touch arcade experience where you hold to slow
                down and release to return to normal speed. Avoid incoming
                shapes and survive as long as you can.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                Simple to learn. Hard to master. Built for quick sessions and
                high-score chasing.
              </p>

              <button className="mt-8 rounded-lg bg-black px-6 py-3 font-semibold text-white">
                Coming to Google Play
              </button>
            </div>

            <aside className="rounded-2xl border border-gray-200 p-6">
              <Info label="Status" value="Preparing for Release" />
              <Info label="Project Type" value="Mobile Arcade" />
              <Info label="Platform" value="Android, iOS (later release)" />
              <Info label="Price" value="$0.99" />
              <Info label="Engine" value="Unity" />
            </aside>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </>
  );
}

function Info({ label, value }) {
  return (
    <div className="border-b border-gray-200 py-4 last:border-b-0">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 font-bold">{value}</p>
    </div>
  );
}