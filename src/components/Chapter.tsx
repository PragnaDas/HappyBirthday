import { motion } from "framer-motion";

export type ChapterData = {
  id: string;
  title: string;
  subtitle: string;
  story: string;
  images?: string[];
  videos?: string[];
};

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Chapter({ chapter, index }: { chapter: ChapterData; index: number }) {
  const reverse = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.section
      id={chapter.id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fade}
      className="px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className={`flex flex-col gap-8 ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} sm:items-start`}>
          <div className="sm:w-1/3">
            <div className="font-display text-6xl italic text-gold sm:text-7xl">{num}</div>
            <div className="mt-2 h-px w-16 bg-gold-soft" />
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-ink-soft">{chapter.subtitle}</p>
          </div>
          <div className="sm:w-2/3">
            <h2 className="font-display text-4xl text-ink sm:text-5xl">{chapter.title}</h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-ink-soft">{chapter.story}</p>

            {chapter.images && chapter.images.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-3">
                {chapter.images.map((src, i) => (
                  <img key={i} src={src} alt="" className="rounded-xl object-cover shadow-soft" />
                ))}
              </div>
            )}

            {chapter.videos && chapter.videos.length > 0 && (
              <div className="mt-6 space-y-4">
                {chapter.videos.map((src, i) => (
                  <video key={i} src={src} controls className="w-full rounded-xl shadow-soft" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
