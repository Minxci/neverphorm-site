import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import { getSortedUpdates } from "@/lib/updates.js";

export default function Updates() {
  const updates = getSortedUpdates();

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
            Updates
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