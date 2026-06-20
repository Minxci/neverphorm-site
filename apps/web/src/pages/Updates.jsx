import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Updates() {
  const updates = [
    {
      title: "DDodge Update v0.1.9",
      date: "June 19, 2026",
      type: "Devlog",
      video: "https://www.youtube.com/shorts/-6T8ef9_rQw",
      text: "Did some major changes to this mobile game, it's been a fun small project. Only have maybe a couple or so more things to polish, add in the global leaderboard via Google Games Service and Apple Game Center, then will be ready to ship! Android build is ready for launch, then iOS, then soon after this it's back to the main game.",
    },
    {
      title: "Website Update Version 1.1.0",
      date: "June 19, 2026",
      type: "Devlog",
      text: "I updated the contact form... So that's working again.",
    },
    {
      title: "Small break + dabbling with mobile gaming",
      date: "June 11, 2026",
      type: "Devlog",
      video: "https://www.youtube.com/watch?v=eNomek-hIjI",
      text: "Took a break today from the main project and decided to toy around, dabble with the thought of mobile gaming. The music tracks are coming from the game and played at random upon a new start (if gameobject hits player). I’m not a huge fan of mobile gaming but today something just spark the idea to see what that’s about and mess around with it in Unity.",
    },
    {
      title: "Materials and Textures",
      date: "June 6, 2026",
      type: "Devlog",
      image: "/pictures/pn_rusticmetal.png",
      text: `Creating materials and textures has always been fun and relaxing. Currently working on the first batch of materials for some of the buildings here as of recently. I used to struggle with this stuff but after getting the hang of it, it becomes easy. The exporting of the models along with their added materials/textures from Blender over to Unity is what's been a pain though.`,
    },
    {
      title: "Development Project: Foreshadowing",
      date: "May 25, 2026",
      type: "Devlog",
      text: `Our debut project is being built as a focused atmospheric experience centered around night time rain, exploration, and environmental storytelling. Foreshadowing is a standalone atmospheric experience with subtle ties to future worlds and stories.`,
    },
  ];

  const today = new Date();

  const isRecent = (dateString) => {
    const postDate = new Date(dateString);
    const differenceInDays = (today - postDate) / (1000 * 60 * 60 * 24);
    return differenceInDays <= 30;
  };

  const recentPosts = updates.filter((post) => isRecent(post.date));
  const olderPosts = updates.filter((post) => !isRecent(post.date));

  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950 px-6 py-24">
        <section className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-black mb-8">
            Devlogs, News, Updates, and more
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr] gap-10 items-start">
            {/* RECENT POSTS */}
            <section>
              <h1 className="text-3xl font-semibold mb-6">Recent Posts</h1>

              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <article
                    key={post.title}
                    className="border border-neutral-200 rounded-3xl p-8 bg-neutral-50"
                  >
                    <p className="text-sm text-neutral-500 mb-3">
                      {post.date} · {post.type}
                    </p>

                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                      {post.title}
                    </h2>

                    <p className="text-neutral-700 leading-relaxed mb-6">
                      {post.text}
                    </p>

                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full rounded-2xl"
                      />
                    )}
                    {post.video && (
                      <div className="aspect-video w-full mt-4">
                        <iframe
                          className="w-full h-full rounded-2xl"
                          src={`https://www.youtube.com/embed/${new URL(post.video).searchParams.get("v")}`}
                          title={post.title}
                          allowFullScreen
                        />
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {/* OLDER POSTS */}
            <aside>
              <h2 className="text-xl font-semibold mb-6">Older Posts</h2>

              <div className="space-y-5">
                {olderPosts.map((post) => (
                  <article
                    key={post.title}
                    className="border border-neutral-200 rounded-2xl p-5 bg-neutral-50"
                  >
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-32 object-cover rounded-xl mb-4"
                      />
                    )}
                    {post.video && (
                      <div className="aspect-video w-full mt-4">
                        <iframe
                          className="w-full h-full rounded-2xl"
                          src={`https://www.youtube.com/embed/${new URL(post.video).searchParams.get("v")}`}
                          title={post.title}
                          allowFullScreen
                        />
                      </div>
                    )}

                    <p className="text-xs text-neutral-500 mb-2">
                      {post.date} · {post.type}
                    </p>

                    <h3 className="text-lg font-semibold mb-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {post.text}
                    </p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}