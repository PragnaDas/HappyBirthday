import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gallery from "../data/gallery.json";

const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-cream/60 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Scrapbook</p>
          <h2 className="mt-3 font-display text-5xl text-ink">Gallery</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {gallery.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className={`paper-card group block p-3 ${rotations[i % rotations.length]} transition-transform`}
            >
              <img src={item.src} alt={item.caption} className="aspect-square w-full rounded-md object-cover" />
              <p className="mt-3 text-center font-display text-base italic text-ink-soft">{item.caption}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="paper-card max-w-lg p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={gallery[active].src} alt="" className="w-full rounded-md" />
              <p className="mt-4 text-center font-display text-xl italic">{gallery[active].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
