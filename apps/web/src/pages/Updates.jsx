import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Updates() {
    const updates = [
      {
        title: "Materials and textures",
        date: "June 6, 2026",
        type: "Devlog",
        image: "/pictures/pn_rusticmetal.png",
        text: `Creating material and textures has always been fun and relaxing. Currently working on the first batch of materials for some of the buildings
        here as of recently. I used to struggle with this stuff but after getting the hang of it, it becomes easy. The exporting of the models along with their added materials/textures from Blender over to
        Unity is what's been a pain though. `
      },
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
      <main className="bg-white text-neutral-950 px-6 py-24">
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
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full rounded-2xl mt-6"
                  /> )}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 h-[300px] overflow-hidden rounded-3xl">
          <img
            src="/pictures/devloggif.gif"
            alt=""
            className="w-full h-full object-cover"
          />
        </section>
      </main>
      <Footer />
    </>
    );
  }