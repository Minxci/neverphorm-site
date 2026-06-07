import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Updates() {
    const updates = [
      {
        title: "Development Project: Foreshadowing",
        date: "May 25, 2026",
        type: "Devlog",
        text: `
            Our debut project is being built as a focused atmospheric experience
            centered around night time rain, exploration, and environmental storytelling.

            Foreshadowing is a standalone atmospheric experience with subtle ties to future worlds and stories.`,
      },
    ];
  
    return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-neutral-950 px-6 py-24">
        <section className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-black mb-4">
            Devlogs, News, Updates, and more
          </p>
  
          <div className="space-y-6">
            {updates.map((post) => (
              <article
                key={post.title}
                className="border border-neutral-200 rounded-2xl p-8 bg-neutral-50"
              >
                <p className="text-sm text-neutral-500 mb-3">
                  {post.date} · {post.type}
                </p>
                <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                <p className="text-neutral-700 leading-relaxed">{post.text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="absolute inset-0 z-0 overflow-hidden">
            <img src="/pictures/devloggif.gif" alt="" className="w-full h-full object-cover object-center" style={{
            filter: 'brightness(0.85) contrast(1.05)'
          }} />
            {/* <div className="absolute inset-0 bg-white/15"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/70"></div> */}
          </div>
      </main>
      <Footer />
    </>
    );
  }