import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="mb-10 md:mb-14 text-center">
          {eyebrow ? (
            <p className="mb-3 text-xs tracking-[0.22em] text-white/55">
              {eyebrow.toUpperCase()}
            </p>
          ) : null}

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            {title}
            <span className="text-purple-400">.</span>
          </motion.h2>
        </div>

        {children}
      </div>
    </section>
  );
}
