'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[480px]">
      {/* Background image */}
      <Image
        src="/hero-spices.jpg" // ensure this exists in /public
        alt="Premium BLACK-GOLD spices"
        fill
        priority
        className="object-cover opacity-80"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10" />

      {/* Animated content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:px-6 lg:px-8">
          <motion.p
            className="text-xs md:text-sm tracking-[0.3em] text-[#D4AF37] uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            BLACK • GOLD SPICES
          </motion.p>

          <motion.h1
            className="max-w-xl text-3xl md:text-5xl font-semibold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            Elevate every dish with{' '}
            <span className="text-[#D4AF37]">premium Kerala spices.</span>
          </motion.h1>

          <motion.p
            className="max-w-lg text-sm md:text-base text-zinc-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            Freshly sourced, carefully blended, and delivered to your door.
            Built on a fast, installable BLACK-GOLD PWA experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-2 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          >
            <motion.a
              href="#products"
              className="px-6 py-3 rounded-full bg-[#D4AF37] text-black text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              Shop Spices
            </motion.a>

            <motion.a
              href="#about"
              className="px-6 py-3 rounded-full border border-zinc-500 text-sm hover:border-[#D4AF37] hover:text-[#D4AF37]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              Learn our story
            </motion.a>
          </motion.div>

          {/* Animated Search Bar */}
          <motion.div
            className="mt-6 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="flex items-center gap-2 rounded-full bg-black/60 border border-zinc-700 px-4 py-2 shadow-[0_0_40px_rgba(212,175,55,0.15)]"
              whileHover={{ boxShadow: '0 0 50px rgba(212,175,55,0.35)' }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[#D4AF37] text-lg">🔍</span>
              <input
                type="text"
                placeholder="Search spices, blends, or masala..."
                className="w-full bg-transparent text-sm md:text-base text-white placeholder:text-zinc-500 focus:outline-none"
              />
              <button className="hidden md:inline-flex rounded-full bg-[#D4AF37] px-4 py-1.5 text-xs font-medium text-black hover:bg-yellow-400">
                Search
              </button>
            </motion.div>
            <p className="mt-2 text-xs text-zinc-400">
              Try: black pepper, garam masala, turmeric, chai mix…
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
