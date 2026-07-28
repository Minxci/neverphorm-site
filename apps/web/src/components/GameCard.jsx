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
      <div className="flex min-h-[120px] w-full items-center justify-center rounded-2xl border border-neutral-200 bg-white sm:min-h-[140px]">
        <p className="text-sm font-semibold text-black">In development....</p>
      </div>
    );
  }

  const cardContent = (
    <>
      <div className="relative h-[120px] overflow-hidden sm:h-[140px]">
        <img
          src={image}
          alt={`${title} preview`}
          className={`h-full w-full object-cover transition-all duration-300 group-hover:scale-105 ${
            showLocked ? "scale-105 blur-md" : ""
          }`}
        />
        {price && (
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
            {price}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-opacity duration-300 ${
            showLocked ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
            {status}
          </p>
          <h2 className="text-lg font-bold tracking-tight text-white drop-shadow-lg">
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
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 px-4 text-center"
            >
              <Lock className="h-5 w-5 text-white" />
              <p className="text-sm font-semibold text-white">
                Still in development...
              </p>
              <p className="text-xs text-white/80">
                Overview is unavailable
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className={`p-4 transition-opacity duration-300 ${
          showLocked ? "pointer-events-none opacity-40" : ""
        }`}
      >
        <h3 className="mb-1 text-sm font-bold text-black line-clamp-2">
          {description.heading}
        </h3>
        <p className="text-xs text-neutral-500">
          {status} · {projectType}
        </p>
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