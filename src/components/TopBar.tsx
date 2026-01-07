export default function TopBar() {
  return (
    <div className="w-full bg-zinc-950 text-zinc-300 text-xs md:text-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[#D4AF37] font-semibold">
            BLACK-GOLD SPICES
          </span>
          <span>📧 support@blackgoldspices.com</span>
          <span>📞 +91 98765 43210</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline">Country:</span>
          <span className="font-medium">🇮🇳 India</span>
        </div>
      </div>
    </div>
  );
}
