'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Malabar Black Pepper',
    image: '/products/black-pepper.jpg',
    mrp: 499,
    price: 349,
    rating: 4.8,
    reviews: 1320,
    badge: 'New',
  },
  {
    id: 2,
    name: 'Golden Turmeric Powder',
    image: '/products/turmeric.jpg',
    mrp: 299,
    price: 219,
    rating: 4.7,
    reviews: 980,
    badge: 'Best Seller',
  },
  {
    id: 3,
    name: 'Signature Garam Masala',
    image: '/products/garam-masala.jpg',
    mrp: 399,
    price: 289,
    rating: 4.9,
    reviews: 740,
    badge: 'Limited',
  },
];

export default function ProductSection() {
  return (
    <section
      id="products"
      className="bg-black py-12 md:py-16 border-t border-zinc-900"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              NEW ARRIVALS
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Fresh drops from BLACK-GOLD.
            </h2>
            <p className="mt-2 text-sm text-zinc-300">
              Explore our latest premium spices, freshly packed and ready to ship.
            </p>
          </div>
          <button className="self-start rounded-full border border-zinc-700 px-4 py-2 text-xs md:text-sm text-zinc-200 hover:border-[#D4AF37] hover:text-[#D4AF37]">
            View all products
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => {
            const discount = Math.round(
              ((product.mrp - product.price) / product.mrp) * 100
            );

            return (
              <motion.article
                key={product.id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 shadow-[0_0_30px_rgba(0,0,0,0.7)] flex flex-col"
                whileHover={{
                  y: -6,
                  boxShadow: '0 0 45px rgba(212,175,55,0.35)',
                  borderColor: '#D4AF37',
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                {/* Badge */}
                <div className="absolute left-3 top-3 z-10 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-black">
                  {product.badge}
                </div>

                {/* Image */}
                <div className="relative h-44 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <h3 className="text-sm md:text-base font-semibold">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="text-yellow-400">★★★★★</span>
                    <span>{product.rating.toFixed(1)}</span>
                    <span className="text-zinc-500">
                      ({product.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-[#D4AF37]">
                      ₹{product.price}
                    </span>
                    <span className="text-xs text-zinc-500 line-through">
                      MRP ₹{product.mrp}
                    </span>
                    <span className="text-xs font-medium text-emerald-400">
                      {discount}% OFF
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-zinc-400">
                    Inclusive of all taxes. Free shipping on refill Flatpacks.
                  </p>

                  {/* CTA */}
                  <div className="mt-3 flex items-center justify-between">
                    <button className="rounded-full bg-[#D4AF37] px-4 py-1.5 text-xs font-semibold text-black hover:bg-yellow-400">
                      Add to cart
                    </button>
                    <button className="text-xs text-zinc-400 hover:text-[#D4AF37]">
                      View details
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
