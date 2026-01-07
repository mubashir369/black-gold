import Link from 'next/link';

export default function MainNavbar() {
  return (
    <header className="w-full bg-black/95 border-b border-zinc-800 sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-500 to-[#D4AF37]" />
          <span className="text-sm md:text-base font-semibold tracking-[0.25em] text-white">
            BLACK<span className="text-[#D4AF37]">-GOLD</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <Link href="#products" className="hover:text-[#D4AF37]">Products</Link>
          <Link href="#collections" className="hover:text-[#D4AF37]">Collections</Link>
          <Link href="#about" className="hover:text-[#D4AF37]">About</Link>
          <Link href="#contact" className="hover:text-[#D4AF37]">Contact</Link>
        </nav>

        <button className="rounded-full bg-[#D4AF37] px-4 py-2 text-xs md:text-sm font-medium text-black hover:bg-yellow-400">
          View Cart
        </button>
      </div>
    </header>
  );
}
