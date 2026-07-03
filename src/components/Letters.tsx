import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import letters from "../data/letters.json";

export function Letters() {
  const [open, setOpen] = useState<string | null>(null);
  const active = letters.find((l) => l.id === open);

  return (
    <section id="letters" className="bg-cream/60 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">For your eyes only</p>
          <h2 className="mt-3 font-display text-5xl text-ink">Letters</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {letters.map((letter, i) => (
            <motion.button
              key={letter.id}
              onClick={() => setOpen(letter.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-[5/3] overflow-hidden rounded-2xl border border-border bg-paper shadow-soft"
            >
              {/* envelope flap */}
              <div
                className="absolute inset-x-0 top-0 h-1/2"
                style={{
                  background: "linear-gradient(180deg, var(--beige) 0%, var(--cream) 100%)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-cream" />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-deep" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="font-display text-lg italic text-ink">{letter.preview}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scaleY: 0.1, opacity: 0, y: 40 }}
              animate={{ scaleY: 1, opacity: 1, y: 0 }}
              exit={{ scaleY: 0.1, opacity: 0, y: 40 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top" }}
              onClick={(e) => e.stopPropagation()}
              className="paper-card relative w-full max-w-lg overflow-y-auto max-h-[85vh] p-8 sm:p-10"
            >
              <span className="tape-piece" />
              <h3 className="font-display text-3xl text-ink">{active.title}</h3>
              <div className="mt-4 h-px w-12 bg-gold" />
              <p className="mt-6 whitespace-pre-line font-display text-xl leading-relaxed italic text-ink-soft">
                {active.body}
              </p>
              <button
                onClick={() => setOpen(null)}
                className="mt-8 text-sm uppercase tracking-[0.25em] text-rose-deep hover:underline"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
