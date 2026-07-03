import { motion } from "framer-motion";
import { Chapter } from "./components/Chapter";
import { Gallery } from "./components/Gallery";
import { Playlist } from "./components/Playlist";
import { Letters } from "./components/Letters";
import { RandomMemory } from "./components/RandomMemory";
import { FinalSurprise } from "./components/FinalSurprise";
import { FloatingMenu } from "./components/FloatingMenu";
import chapters from "./data/chapters.json";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingMenu />

      <section
        id="home"
        className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(232,184,184,0.45), transparent 60%), radial-gradient(circle at 75% 80%, rgba(201,162,83,0.35), transparent 55%), var(--cream)",
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-gold"
        >
          For you
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-6 font-display text-6xl text-ink sm:text-8xl"
        >
          Happy Birthday <span className="text-rose-deep">❤️</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-8 max-w-md font-display text-2xl italic leading-relaxed text-ink-soft"
        >
          This isn't a gift.
          <br />
          It's a journey.
        </motion.p>
        <motion.a
          href="#chapters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-12 inline-flex rounded-full bg-ink px-8 py-4 font-display text-lg text-paper shadow-soft transition-transform hover:scale-[1.02] active:scale-95"
        >
          Begin the Journey
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ink-soft"
        >
          Scroll
        </motion.div>
      </section>

      <div id="chapters" className="bg-background">
        <div className="px-6 pt-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Our story</p>
          <h2 className="mt-3 font-display text-5xl text-ink sm:text-6xl">Chapters</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold-soft" />
        </div>
        {chapters.map((c, i) => (
          <Chapter key={c.id} chapter={c} index={i} />
        ))}
      </div>

      <Gallery />
      <Playlist />
      <Letters />
      <RandomMemory />
      <FinalSurprise />

      <footer className="px-6 py-12 text-center text-xs uppercase tracking-[0.3em] text-ink-soft">
        Made with ❤️
      </footer>
    </div>
  );
}
