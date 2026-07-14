import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";

export default function GameCard({
  image,
  status,
  title,
  price,
  projectType,
  launchDate,
  description,
  overviewPath,
  locked = false,
  minimal = false,
}) {
  const [showLocked, setShowLocked] = useState(false);

  if (minimal) {
    return (
      <div className="flex min-h-[200px] w-full items-center justify-center rounded-2xl border border-neutral-200 bg-white sm:min-h-[260px] lg:min-h-[320px]">
        <p className="text-lg font-semibold text-black">In development....</p>
      </div>
    );
  }

  const cardContent = (
    <>
      <div className="relative h-[200px] overflow-hidden sm:h-[260px] lg:h-[320px]">
        <img
          src={image}
          alt={`${title} preview`}
          className={`h-full w-full object-cover transition-all duration-300 group-hover:scale-105 ${
            showLocked ? "scale-105 blur-md" : ""
          }`}
        />
        {price && (
          <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-black/70 backdrop-blur-sm text-white text-base sm:text-lg font-bold px-4 py-1.5 sm:px-5 sm:py-2 rounded-full">
            {price}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div
          className={`absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300 sm:p-7 ${
            showLocked ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            {status}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-lg sm:text-3xl lg:text-4xl">
            {title}
          </h2>
        </div>

        <AnimatePresence>
          {showLocked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 px-6 text-center"
            >
              <Lock className="h-6 w-6 text-white" />
              <p className="text-base font-semibold text-white sm:text-lg">
                Still in development...
              </p>
              <p className="text-xs text-white/80 sm:text-sm">
                Overview is unavailable
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className={`p-5 transition-opacity duration-300 sm:p-6 lg:p-7 ${
          showLocked ? "pointer-events-none opacity-40" : ""
        }`}
      >
        <div className="grid gap-6 md:grid-cols-[1.4fr_220px]">
          <div>
            <h3 className="mb-3 text-lg font-bold text-black">
              {description.heading}
            </h3>
            <p className="text-sm leading-6 text-neutral-600">
              {description.body}
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <div className="space-y-4">
              <div>
                <p className="mb-1 text-xs text-neutral-500">Status:</p>
                <p className="text-sm font-bold text-black">{status}</p>
              </div>
              <div>
                <p className="mb-1 text-xs text-neutral-500">Project Type:</p>
                <p className="text-sm font-bold text-black">{projectType}</p>
              </div>
              <div>
                <p className="mb-1 text-xs text-neutral-500">
                  Anticipated Launch Date:
                </p>
                <p className="text-sm font-bold text-black">{launchDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const sharedClasses =
    "group relative block w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300";

  if (locked || !overviewPath) {
    return (
      <button onClick={() => setShowLocked(true)} className={sharedClasses}>
        {cardContent}
      </button>
    );
  }

  return (
    <Link to={overviewPath} className={sharedClasses}>
      {cardContent}
    </Link>
  );
}