import { FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-500 to-[#D4AF37]" />
              <span className="text-sm font-semibold tracking-[0.25em] text-white">
                BLACK<span className="text-[#D4AF37]">-GOLD</span>
              </span>
            </div>
            <p className="text-sm text-zinc-300">
              Premium spices sourced from Kerala and blended in small batches,
              delivered in PWA-fast experience to your door.
            </p>
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} BLACK-GOLD Spices. All rights reserved.
            </p>
          </div>

          {/* Shop links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Shop</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="#products" className="hover:text-[#D4AF37]">New Arrivals</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37]">Best Sellers</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37]">Gift Boxes</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37]">Flatpacks</a></li>
            </ul>
          </div>

          {/* Company & Social */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="#about" className="hover:text-[#D4AF37]">Our Story</a></li>
              <li><a href="#reviews" className="hover:text-[#D4AF37]">Reviews</a></li>
              <li><span className="text-zinc-500">Wholesale (coming soon)</span></li>
              <li><span className="text-zinc-500">Careers (coming soon)</span></li>
            </ul>

           <div className="mt-4 space-y-2">
  <p className="text-sm font-semibold text-white">Follow</p>
  <div className="flex gap-3 text-sm text-zinc-300">
    <a
      href="#"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
      aria-label="Instagram"
    >
      <FaInstagram className="h-4 w-4" />
    </a>
    <a
      href="#"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
      aria-label="YouTube"
    >
      <FaYoutube className="h-4 w-4" />
    </a>
    <a
      href="#"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
      aria-label="Facebook"
    >
      <FaFacebookF className="h-4 w-4" />
    </a>
  </div>
</div>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-900 pt-4 text-xs text-zinc-500 flex flex-wrap items-center justify-between gap-2">
          {/* <p>Made with Next.js, Framer Motion & Tailwind CSS.</p> */}
          <p>Optimized as a BLACK-GOLD PWA for fast, installable shopping.</p>
        </div>
      </div>
    </footer>
  );
}
