'use client';

import { motion } from 'framer-motion';

export default function ContactStrip() {
  return (
    <section className="bg-black border-t border-zinc-900 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            NEED HELP?
          </p>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold">
            Questions about BLACK-GOLD spices or orders?
          </h2>
          <p className="mt-2 text-sm text-zinc-300">
            Reach out anytime—our team in Kerala is here to help with product recommendations,
            shipping, and wholesale enquiries.
          </p>
        </div>

        <motion.div
          className="flex flex-col items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-5 py-4 shadow-[0_0_30px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#D4AF37] text-lg">📧</span>
            <a
              href="mailto:support@blackgoldspices.com"
              className="hover:text-[#D4AF37]"
            >
              support@blackgoldspices.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#D4AF37] text-lg">📞</span>
            <a
              href="tel:+919876543210"
              className="hover:text-[#D4AF37]"
            >
              +91 98765 43210
            </a>
          </div>
          <p className="text-xs text-zinc-400">
            Mon–Sat · 9:00 AM – 7:00 PM IST · Kochi, Kerala
          </p>
        </motion.div>
      </div>
    </section>
  );
}
