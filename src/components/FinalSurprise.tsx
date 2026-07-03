import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Confetti = { id: number; left: number; delay: number; color: string; rotate: number };

export function FinalSurprise() {
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShowConfetti(true)),
      { threshold: 0.4 },
    );
    const el = document.getElementById("final");
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const confetti = useMemo<Confetti[]>(() => {
    const colors = ["var(--rose)", "var(--rose-deep)", "var(--gold)", "var(--gold-soft)", "var(--beige)"];
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      color: colors[i % colors.length],
      rotate: Math.random() * 360,
    }));
  }, []);

  return (
    <section id="final" className="relative overflow-hidden bg-gradient-to-b from-cream to-rose/30 px-6 py-32">
      {showConfetti && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {confetti.map((c) => (
            <motion.div
              key={c.id}
              initial={{ y: -50, opacity: 0, rotate: 0 }}
              animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: c.rotate }}
              transition={{ duration: 6 + Math.random() * 3, delay: c.delay, ease: "easeIn", repeat: Infinity, repeatDelay: 2 }}
              style={{ left: `${c.left}%`, background: c.color }}
              className="absolute top-0 h-3 w-2 rounded-sm"
            />
          ))}
        </div>
      )}

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">The end (almost)</p>
        <h2 className="mt-4 font-display text-6xl text-ink sm:text-7xl">Happy Birthday ❤️</h2>
        <p className="mt-8 font-display text-2xl italic leading-relaxed text-ink-soft">
          If you made it all the way here — thank you. This little world was created just for you, page by page, with every memory, word, and detail carrying a little piece of us.
          Since you're so far away, this is the little way I could give you something on your birthday — a place where you can revisit our moments, our laughs, and all the little things that made them special.
          May this year be softer, brighter, and full of the things you secretly hope for. I hope life gives you all the happiness, success, and beautiful moments you deserve.
        </p>

        <button
          onClick={() => setRevealed(true)}
          disabled={revealed}
          className="mt-10 rounded-full bg-rose-deep px-8 py-4 font-display text-lg text-primary-foreground shadow-soft transition-transform active:scale-95 disabled:opacity-60"
        >
          One Last Thing ❤️
        </button>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="paper-card mx-auto mt-10 max-w-lg p-8"
            >
              <p className="font-display text-2xl italic text-ink">
                I love you. I have, in all the little moments — in the laughter, the conversations, the chaos, and the quiet days. Thank you for being the person you are and for becoming such a beautiful part of my story. Happy birthday, my favorite person. ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
