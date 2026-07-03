import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const items = [
  { label: "Home", href: "#home" },
  { label: "Chapters", href: "#chapters" },
  { label: "Gallery", href: "#gallery" },
  { label: "Playlist", href: "#playlist" },
  { label: "Letters", href: "#letters" },
  { label: "Random Memory", href: "#random" },
  { label: "Final Surprise", href: "#final" },
];

export function FloatingMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="paper-card mb-3 w-56 overflow-hidden p-2"
          >
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 font-display text-lg text-ink transition-colors hover:bg-cream"
              >
                {it.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-deep text-primary-foreground shadow-soft transition-transform active:scale-95"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  );
}
