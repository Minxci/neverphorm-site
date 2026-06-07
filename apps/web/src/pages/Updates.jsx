import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Updates() {
  const updates = [
    {
      title: "Materials and Textures",
      date: "June 6, 2026",
      type: "Devlog",
      image: "/pictures/pn_rusticmetal.png",
      text: `Creating materials and textures has always been fun and relaxing. Recently, I started working on the first batch of materials for some of the buildings in Foreshadowing. I used to struggle with this part of development, but after getting the hang of it, it has started to feel much easier. Exporting models with their added materials and textures from Blender over to Unity has been the real pain though.`,
    },
    {
      title: "Development Project: Foreshadowing",
      date: "May 25, 2026",
      type: "Devlog",
      image: "/pictures/devloggif.gif",
      text: `Our debut project is being built as a focused atmospheric experience centered around nighttime rain, exploration, and environmental storytelling. Foreshadowing is a standalone atmospheric experience with subtle ties to future worlds and stories.`,
    },
  ];

  const newestPost = updates[0];
  const olderPosts = updates.slice(1);

  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950 px-6 py-24">
        <section className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-black mb-8">
            Devlogs, News, Updates, and more
          </p>

          {/* NEWEST POST */}
          <article className="border border-neutral-200 rounded-3xl p-8 md:p-10 bg-neutral-50 mb-14">
            <p className="text-sm text-neutral-500 mb-3">
              {newestPost.date} · {newestPost.type}
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              {newestPost.title}
            </h1>

            <p className="text-neutral-700 leading-relaxed text-base md:text-lg mb-8">
              {newestPost.text}
            </p>

            {newestPost.image && (
              <img
                src={newestPost.image}
                alt={newestPost.title}
                className="w-full rounded-2xl object-cover"
              />
            )}
          </article>

          {/* OLDER POSTS */}
          {olderPosts.length > 0 && (
            <section>
              <h2 className="text-sm uppercase tracking-[0.25em] text-black mb-6">
                Older Posts
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {olderPosts.map((post) => (
                  <article
                    key={post.title}
                    className="border border-neutral-200 rounded-2xl p-6 bg-neutral-50"
                  >
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-xl mb-5"
                      />
                    )}

                    <p className="text-sm text-neutral-500 mb-3">
                      {post.date} · {post.type}
                    </p>

                    <h3 className="text-xl font-semibold mb-3">
                      {post.title}
                    </h3>

                    <p className="text-neutral-700 leading-relaxed">
                      {post.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}