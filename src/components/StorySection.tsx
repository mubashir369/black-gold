'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StorySection() {
  return (
    <section
      id="about"
      className="bg-black py-12 md:py-16 border-t border-zinc-900"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:px-6 lg:px-8">
        {/* Image side */}
        <motion.div
          className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden rounded-3xl border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Image
            src="/story-kerala.jpg" // add this in /public
            alt="Spice fields and markets in Kerala"
            fill
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Small overlay badge */}
          <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 text-xs text-zinc-200 border border-zinc-700 flex items-center gap-2">
            <span className="text-[#D4AF37] text-lg">📍</span>
            From Kerala, India
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          className="w-full md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            OUR ORIGIN STORY
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            From Kerala to your kitchen.
          </h2>
          <p className="text-sm md:text-base text-zinc-300">
            BLACK-GOLD was born in the spice-rich hills of Kerala, where
            pepper, cardamom, and turmeric have been traded for centuries.
            We work with trusted growers and small farms to bring that same
            freshness and aroma straight into your home.
          </p>

          <div className="mt-4 grid gap-3 text-sm text-zinc-200">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-[#D4AF37]">✅</span>
              <p>
                Carefully sourced whole and ground spices, selected at peak
                flavour and handled in small batches.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-[#D4AF37]">✅</span>
              <p>
                Slow-roasted and blended to preserve natural oils, colour,
                and aroma—no fillers or shortcuts.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-[#D4AF37]">✅</span>
              <p>
                Packed in BLACK-GOLD jars and Flatpacks that lock in freshness
                and ship fast across India and beyond.
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-zinc-400">
            Every jar is a small piece of Kerala—curated for home cooks,
            cafes, and chefs who care about authentic flavour.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
