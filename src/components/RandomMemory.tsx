import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import memories from "../data/memories.json";

export function RandomMemory() {
  const [current, setCurrent] = useState<number | null>(null);

  const pick = () => {
    let next = Math.floor(Math.random() * memories.length);

    if (memories.length > 1 && next === current) {
      next = (next + 1) % memories.length;
    }

    setCurrent(next);
  };

  const memory = current !== null ? memories[current] : null;

  return (
    <section id="random" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          Out of the blue
        </p>

        <h2 className="mt-3 font-display text-5xl text-ink">
          A Random Memory
        </h2>

        <p className="mt-4 text-ink-soft">
          Press the button. Let the universe pick one.
        </p>

        <button
          onClick={pick}
          className="mt-8 rounded-full bg-ink px-8 py-4 font-display text-lg text-paper shadow-soft transition-transform active:scale-95"
        >
          Show Me A Random Memory
        </button>

        <div className="mt-12 min-h-[250px]">
          <AnimatePresence mode="wait">
            {memory && (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="paper-card overflow-hidden text-left"
              >
                <div className="flex justify-center bg-[#f8f5ef]">
                  <img
                    src={memory.photo}
                    alt={memory.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl text-ink">
                    {memory.title}
                  </h3>

                  <p className="mt-3 text-ink-soft">
                    {memory.story}
                  </p>

                  <p className="mt-4 font-display text-lg italic text-rose-deep">
                    "{memory.quote}"
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}