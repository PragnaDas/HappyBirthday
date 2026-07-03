import { motion } from "framer-motion";
import playlist from "../data/playlist.json";

export function Playlist() {
  return (
    <section id="playlist" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Sound of us
          </p>
          <h2 className="mt-3 font-display text-5xl text-ink">
            Playlist
          </h2>
        </div>

        <div className="space-y-6">
          {playlist.map((song, i) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="paper-card flex flex-col gap-5 p-5 sm:flex-row sm:items-center"
            >
              <img
                src={song.albumImage}
                alt={song.song}
                className="h-24 w-24 flex-shrink-0 rounded-xl object-cover shadow-soft sm:h-28 sm:w-28"
              />

              <div className="flex-1">
                <h3 className="font-display text-2xl text-ink">
                  {song.song}
                </h3>

                <p className="text-sm text-ink-soft">
                  {song.artist}
                </p>

                <p className="mt-2 font-display text-base italic text-rose-deep">
                  "{song.note}"
                </p>

                {song.spotifyLink && (
                  <a
                    href={song.spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1DB954] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm114.9 357.2c-4.5 7.4-14.1 9.8-21.5 5.3-58.9-36-133-44.2-220.3-24.2-8.5 2-17-3.4-19-11.9s3.4-17 11.9-19c95.6-21.9 177.8-12.6 243.8 27.7 7.4 4.5 9.8 14.2 5.1 22.1zm30.7-68.3c-5.7 9.2-17.8 12.1-27 6.5-67.4-41.5-170.2-53.5-249.9-29.2-10.3 3.1-21.2-2.7-24.3-13s2.7-21.2 13-24.3c91.2-27.7 204.6-14.3 278.7 31.3 9.1 5.5 12 17.6 6.5 28.7zm2.6-71.1C315.4 177.8 184.7 173.7 110.8 196c-12.2 3.7-25.2-3.2-28.9-15.4-3.7-12.2 3.2-25.2 15.4-28.9 84.8-25.7 226-20.7 322.5 37.1 11.1 6.6 14.7 21 8.1 32-6.6 10.9-20.9 14.6-31.7 8z" />
                    </svg>

                    Listen on Spotify
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}