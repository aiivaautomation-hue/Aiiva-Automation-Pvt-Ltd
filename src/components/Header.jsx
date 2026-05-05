"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";


export default function Navbar() {
  const { cart, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
<>
    <style>{`
        .nav-link { position: relative; }
        .nav-link::after {
          content: '';
          color:.nav-link { position: relative; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 12px;
          width: 0; height: 2px;
          background: black;
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link:hover::after { width: calc(100% - 24px); };
          position: absolute;
          bottom: 0; left: 12px;
          width: 0; height: 2px;
          background: black;
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link:hover::after { width: calc(100% - 24px); }

        .drawer {
          transform: translateY(-120%);
          transition: transform 0.32s cubic-bezier(0.16,1,0.3,1);
        }
        .drawer.open { transform: translateX(0); }
      `}</style>

    <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[50] transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <div className="w-full font-serif flex justify-center fixed top-4 z-50 px-4">
      <header className="w-full max-w-7xl">
      <div className="w-[100%] bg-[white] mx-auto px-4 py-3 flex items-center justify-between rounded-2xl shadow-sm">
        
        {/* Logo */}
        <div className="w-[33%] flex items-center justify-start ">
          <div className="flex flex-col items-center gap-1">
              {/* Logo Icon */}
  <Image
    src="/logo-final-img.jpg"
    alt="AIIVA logo"
    width={50}
    height={50}
    className="object-contain"
  />

  {/* Recreated Text Logo */}
  <div className="flex flex-col items-center leading-[1.1]">
  <span className="font-extrabold font-montserrat text-[8px] md:text-[12px] tracking-[1px] text-[#2b2b2b]">
    AIIVA AUTOMATION
  </span>
  <span className="font-[500] font-montserrat text-[8px] tracking-[0px] text-[#2b2b2b]">
    PRIVATE LIMITED
  </span>
</div>
          </div>
        </div>
    

        {/* Desktop Menu */}
        <nav className="w-[33%] lg:items-center lg:justify-center hidden lg:flex gap-2 flex-shrink-0">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`nav-link text-[13px] font-bold tracking-[2px] no-underline px-3 py-1.5 rounded transition-colors duration-200 whitespace-nowrap
                  ${isActive(href) ? "text-black/95 font-bold" : "text-black/65 hover:text-black/95"}`}
              >
                {label}
              </Link>
            ))}
        </nav>

          {/* RIGHT — desktop phone + mobile burger */}
          <div className="lg:w-[33%] flex items-center justify-end gap-1 md:gap-3 lg:gap-4">
            {/* Cart Icon */}
            <button
              onClick={() => setOpen(true)}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-black/25 bg-white hover:border-black/60 transition-colors duration-200"
            >
              {/* Modern Cart Icon */}
              <svg
                className="w-5 h-5 text-gray-800"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10
                  0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.17
                  14h9.66c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 21.3
                  5H5.21L4.27 3H1v2h2l3.6 7.59-1.35 2.44C4.52 16.37 5.48 18
                  7 18h12v-2H7l1.1-2z"/>
              </svg>
            </button>

            {/* Phone icon only */}
            <a
              href="tel:+919000006000"
              className=" flex items-center justify-center w-9 h-9 rounded-full border border-black/25 hover:border-black/60 transition-colors duration-200"
              aria-label="Call us"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="black">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                  stroke="rgba(255,255,255,0.75)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full border border-black/15 hover:bg-black/[0.07] hover:border-black/25 transition-all duration-200"
            >
              <div className="flex flex-col gap-[5px] w-[18px]">
                <span
                  className={`block h-[1.5px] bg-black rounded-full transition-all duration-300 origin-center
                  ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
                />
                <span
                  className={`block h-[1.5px] bg-black rounded-full transition-all duration-300
                  ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
                />
                <span
                  className={`block h-[1.5px] bg-black rounded-full transition-all duration-300 origin-center
                  ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      
        {/* ── Mobile drawer ── */}
        <div
          className={`drawer fixed top-0 left-0 w-[100%] border-b bg-white border-[black]/[0.4] z-[999] flex flex-col overflow-y-auto shadow-[4px_0_40px_rgba(0,0,0,0.6)] lg:hidden ${menuOpen ? "open" : ""}`}
        >
          {/* Drawer head */}
          <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-[black]/[0.07]">
            <Link
              href="/"
              className="flex items-center gap-2 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  <div className="w-5 h-5 border-2 border-orange-500 rounded-full"></div>
                  <div className="w-5 h-5 border-2 border-orange-300 rounded-full -ml-2"></div>
                </div>
                <div className="flex flex-col leading-0.6">
                  <span className="text-[15px] font-semibold sm:text-sm tracking-[2px] text-[black]">
                    AIIVA
                  </span>
                  <span className="text-[10px] sm:text-[12px] font-semibold tracking-[1.7px] text-orange-500">
                    Automation
                  </span>
                </div>
              </div>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-[black]/[0.06] border border-[black]/10 hover:bg-[black]/[0.12] transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="rgba(0,0,0,0.65)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex flex-col gap-1 px-3 pt-4 pb-4">
            {navLinks.map(({ label, href }, i) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}
                className={`flex group items-center justify-between px-4 py-3 rounded-xl text-[13px] font-medium tracking-[0.3px] no-underline border transition-all duration-200 font-arimo
                  ${
                    isActive(href)
                      ? "bg-[black]/[0.08] text-[black] font-semibold border-[black]/25 hover:border-black"
                      : "text-[black]/65 border-[black]/[0.6] hover:bg-[black]/[0.25] hover:text-[black] hover:border-[black]/[0.07]"
                  }`}
              >
                <span>{label}</span>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4 2l4 4-4 4"
                    stroke={
                      isActive(href) ? "rgba(0,0,0)" : "rgba(0,0,0,0.6)"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </nav>
        
        </div>
        </header>
      </div>


</>
  );
}
