import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Updates() {
    const updates = [
      {
        title: "Development Sprint Project: Foreshadowing",
        date: "May 25, 2026",
        type: "Devlog",
        text: `
            Our debut project is being built as a focused atmospheric experience
            centered around nighttime rain, exploration, and environmental storytelling.

            Foreshadowing acts as both a standalone experience and the beginning
            of a much larger connected universe planned for future Project Neverphorm titles.`,
      },
    ];
  
    return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-neutral-950 px-6 py-24">
        <section className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Updates
          </p>
  
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-12">
            Studio news & devlogs.
          </h1>
  
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
      </main>
      <Footer />
    </>
    );
  }