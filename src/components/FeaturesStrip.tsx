'use client';

import { motion } from 'framer-motion';

export default function FeaturesStrip() {
  return (
    <section className="bg-black pb-12 md:pb-16 border-t border-zinc-900 -mt-1">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pt-8">
        <h2 className="sr-only">Why shop BLACK-GOLD</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Refill Packets Ship Free */}
          <motion.div
            className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 shadow-[0_0_30px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{
              y: -6,
              boxShadow: '0 0 45px rgba(212,175,55,0.35)',
              borderColor: '#D4AF37',
            }}
          >
            <div className="flex items-center gap-3">
              <motion.span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-lg"
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                📦
              </motion.span>
              <h3 className="text-sm md:text-base font-semibold">
                Refill Packets Ship Free
              </h3>
            </div>
            <p className="text-xs md:text-sm text-zinc-300">
              Our convenient Flatpack refill packaging ships free, delivered right to your home.
            </p>
          </motion.div>

          {/* Now at Costco */}
          <motion.div
            className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 shadow-[0_0_30px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            whileHover={{
              y: -6,
              boxShadow: '0 0 45px rgba(212,175,55,0.35)',
              borderColor: '#D4AF37',
            }}
          >
            <div className="flex items-center gap-3">
              <motion.span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-lg"
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                🏬
              </motion.span>
              <h3 className="text-sm md:text-base font-semibold">
                Now at Costco
              </h3>
            </div>
            <p className="text-xs md:text-sm text-zinc-300">
              Find exclusive, limited edition jars of our best selling spices in your Midwest store.
            </p>
          </motion.div>

          {/* 7,000+ five-star reviews */}
          <motion.div
            className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 shadow-[0_0_30px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            whileHover={{
              y: -6,
              boxShadow: '0 0 45px rgba(212,175,55,0.35)',
              borderColor: '#D4AF37',
            }}
          >
            <div className="flex items-center gap-3">
              <motion.span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-lg"
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                ⭐
              </motion.span>
              <h3 className="text-sm md:text-base font-semibold">
                7,000+ five-star reviews
              </h3>
            </div>
            <p className="text-xs md:text-sm text-zinc-300">
              Don&apos;t take our word for it. Thousands of people love our spices—try for yourself and discover why.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
