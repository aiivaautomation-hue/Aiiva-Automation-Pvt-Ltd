"use client";

import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const isActive = (href) => pathname === href;

  const socialIcons = [
    { Icon: FaInstagram, label: "Instagram" },
    { Icon: CiFacebook, label: "Facebook" },
    { Icon: FaXTwitter, label: "Twitter/X" },
    { Icon: FaLinkedinIn, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-100 pt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-0 rounded-3xl pt-8 ">

        {/* Top Section */}
        <div className="w-full flex flex-wrap justify-between gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              
              <span className="text-xl font-semibold">
                AIIVA Automation Pvt. Ltd.
              </span>
            </div>

            <p className="text-gray-600 text-[15px] md:text-[17px] mb-6 max-w-md">
              Redefining modern living through intelligent smart home and commercial automation solutions.
              We deliver smart switches, locks, lighting, sensors, and energy systems designed for convenience,
              safety, and efficiency.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-lg text-orange-600 hover:bg-gray-300 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10 md:gap-20">

            {/* Company */}
            <div>
              <h3 className="text-orange-600 font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`transition ${
                        isActive(href)
                          ? "text-black"
                          : "text-black/60 hover:text-black"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-orange-600 font-semibold mb-4">Get In Touch</h3>
              <ul className="space-y-2 text-black/65">
                <li><a href="tel:+919000006000" className="hover:text-black">Sumannth - 9000006000</a></li>
                <li><a href="tel:+918978690369" className="hover:text-black">Praneetth - 8978690369</a></li>
                  <li><a href="mailto:aiivaautomation@gmail.com" className="hover:text-black">aiivaautomation@gmail.com</a></li>
                <li>
                <a href="https://www.google.com/maps/search/?api=1&query=5-9-30/1/24-25,+F-504,+The+Legend+Palace+Colony,+Himayathnagar,+Hyderabad,+Telangana+500063" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <p className="max-w-sm">AIIVA AUTOMATION PRIVATE LIMITED <p>F-504 , The Legend , Basheer bagh , Hyderabad - 500063.</p></p>
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-8" />

        {/* Bottom */}
        <div className="flex items-center py-4 justify-center text-[black]/65 text-[15px]">
          <p>© 2026 AIIVA Automation Pvt. Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
