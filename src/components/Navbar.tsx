"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import LogoImg from "@/components/images/logoIMG.png";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About Us", href: "/#about" },
  {
    label: "Services",
    href: "/#services",
    hasDropdown: true,
    dropdown: [
      "E-Commerce Solutions",
      "Mobile App Development",
      "Web Development",
      "ERP & CRM Systems",
      "Business Management",
      "Support & Maintenance",
    ],
  },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Career", href: "/career" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveDropdown(null);
    
    if (href.startsWith("/#") || href.startsWith("#")) {
      const hash = href.replace("/", ""); // becomes "#about"
      if (pathname !== "/") {
        router.push("/" + hash);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-400 ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-gray-100"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="container flex items-center justify-between h-20 lg:h-[88px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <Image
            src={LogoImg}
            alt="FourStackTech Logo"
            className="h-16 lg:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick(link.href)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-500 text-gray-600 hover:text-gray-900 transition-colors duration-200 rounded-lg hover:bg-gray-50"
                style={{ fontWeight: link.label === "Home" ? 700 : 500, color: link.label === "Home" ? "var(--blue-primary)" : undefined }}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                  />
                )}
              </button>

              {/* Dropdown */}
              {link.hasDropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 py-2 z-50">
                  {link.dropdown?.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick("/contact")}
            className="btn-blue text-sm py-2.5 px-6 flex items-center gap-2"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-3 px-4 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("/contact")}
            className="mt-2 btn-blue justify-center text-sm py-3 w-full flex items-center gap-2"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
