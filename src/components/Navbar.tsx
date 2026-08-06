"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
  Menu, X, ChevronDown, ArrowRight, Monitor, Smartphone, 
  Wifi, ShoppingCart, LayoutTemplate, ShoppingBag, Brain, 
  BookOpen, Bot, Apple, MessageCircle, Compass, Headphones
} from "lucide-react";
import LogoImg from "@/components/images/logoIMG.png";

type NavLink = {
  label: string;
  href: string;
  isMegaMenu?: boolean;
  hasDropdown?: boolean;
  dropdown?: string[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/#hero" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/#services",
    isMegaMenu: true,
  },
  { label: "Portfolio", href: "/portfolio" },
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

  const isLinkActive = (href: string) => {
    if (href === "/about" && pathname === "/about") return true;
    if (href === "/portfolio" && pathname === "/portfolio") return true;
    if (href === "/career" && pathname === "/career") return true;
    if (href === "/contact" && pathname === "/contact") return true;
    if ((href === "/#hero" || href === "/") && pathname === "/") return true;
    return false;
  };

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
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => (link.hasDropdown || link.isMegaMenu) && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200 rounded-lg hover:bg-gray-50"
                  style={{
                    fontWeight: active ? 700 : 500,
                    color: active ? "var(--blue-primary)" : "var(--text-secondary, #4b5563)",
                  }}
                >
                  {link.label}
                  {(link.hasDropdown || link.isMegaMenu) && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Simple Dropdown */}
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

                {/* Mega Menu for Services */}
                {link.isMegaMenu && activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-100 p-8 z-50 flex flex-col gap-8">
                    {/* Columns */}
                    <div className="grid grid-cols-2 gap-12">
                      {/* Column 1: Web Development */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                            <Monitor size={18} />
                          </div>
                          <h4 className="font-black text-slate-900 text-base">Web Development</h4>
                        </div>
                        <ul className="space-y-4">
                          {[
                            { icon: <Wifi size={14} />, label: "IoT Development" },
                            { icon: <ShoppingCart size={14} />, label: "Ecommerce Development" },
                            { icon: <LayoutTemplate size={14} />, label: "Corporate Webdesign" },
                            { icon: <ShoppingBag size={14} />, label: "Shopify Website Development Company" },
                            { icon: <Brain size={14} />, label: "AI Development Company" },
                            { icon: <BookOpen size={14} />, label: "LMS (Learning Management System)..." },
                          ].map((item, idx) => (
                            <li key={idx}>
                              <button
                                onClick={() => handleNavClick(link.href)}
                                className="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors w-full text-left group"
                              >
                                <span className="text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity">
                                  {item.icon}
                                </span>
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: App Development */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                            <Smartphone size={18} />
                          </div>
                          <h4 className="font-black text-slate-900 text-base">App Development</h4>
                        </div>
                        <ul className="space-y-4">
                          {[
                            { icon: <Bot size={14} />, label: "Android Development" },
                            { icon: <Apple size={14} />, label: "iOS Development" },
                            { icon: <MessageCircle size={14} />, label: "Chat and Calling App Development" },
                            { icon: <Compass size={14} />, label: "Astrology App Development Company" },
                          ].map((item, idx) => (
                            <li key={idx}>
                              <button
                                onClick={() => handleNavClick(link.href)}
                                className="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors w-full text-left group"
                              >
                                <span className="text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity">
                                  {item.icon}
                                </span>
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-slate-50/80 rounded-2xl p-5 flex items-center justify-between border border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100/50 text-blue-600 flex items-center justify-center flex-shrink-0">
                          <Headphones size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm mb-0.5">Not sure what you need?</p>
                          <p className="text-xs text-slate-500 font-medium">Talk to our experts and get the right solution for your business.</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleNavClick("/contact")}
                        className="btn-blue text-sm px-5 py-2.5 flex items-center gap-2 flex-shrink-0"
                      >
                        Talk to an Expert <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-3 px-4 rounded-xl text-sm transition-all"
                style={{
                  fontWeight: active ? 700 : 500,
                  color: active ? "var(--blue-primary)" : "var(--text-secondary, #374151)",
                  backgroundColor: active ? "var(--blue-pale, #eff6ff)" : undefined,
                }}
              >
                {link.label}
              </button>
            );
          })}
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
