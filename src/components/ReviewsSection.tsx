'use client';

import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Aisha Rahman',
    country: 'Kochi, India',
    rating: 5,
    text: 'The aroma when I opened the BLACK-GOLD garam masala was unreal. My curries finally taste like restaurant quality.',
  },
  {
    id: 2,
    name: 'Daniel Miller',
    country: 'Chicago, USA',
    rating: 5,
    text: 'I switched from supermarket spices and the difference is massive. The black pepper has real heat and depth.',
  },
  {
    id: 3,
    name: 'Fatima Noor',
    country: 'Dubai, UAE',
    rating: 4.8,
    text: 'Fast shipping, beautiful packaging, and super fresh turmeric. My golden milk and biryani both taste better now.',
  },
];

function Stars({ value }: { value: number }) {
  return (
    <span className="text-yellow-400 text-sm">
      {'★'.repeat(5)}
      <span className="sr-only">{value} out of 5 stars</span>
    </span>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-black py-12 md:py-16 border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Header with big rating badge */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              CUSTOMER LOVE
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Loved by home cooks and chefs.
            </h2>
            <p className="mt-2 text-sm text-zinc-300">
              BLACK-GOLD spices are used in kitchens from Kerala to Chicago—see what people are saying.
            </p>
          </div>

          <motion.div
            className="inline-flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/80 px-5 py-3 shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-[#D4AF37]">
                4.9 <span className="text-yellow-400">★</span>
              </span>
              <span className="text-xs text-zinc-300">
                7,000+ five-star reviews
              </span>
            </div>
          </motion.div>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-[0_0_30px_rgba(0,0,0,0.7)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow: '0 0 45px rgba(212,175,55,0.35)',
                borderColor: '#D4AF37',
              }}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-zinc-400">{review.country}</p>
                </div>
                <div className="text-right">
                  <Stars value={review.rating} />
                  <p className="text-xs text-zinc-400">
                    {review.rating.toFixed(1)} / 5.0
                  </p>
                </div>
              </div>

              <p className="flex-1 text-sm text-zinc-300 leading-relaxed">
                “{review.text}”
              </p>

              <p className="mt-4 text-xs text-zinc-500">
                Verified BLACK-GOLD customer
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
