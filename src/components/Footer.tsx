"use client";

import { usePathname, useRouter } from "next/navigation";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import LogoImg from "@/components/images/logoIMG.png";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

const hireLinks = [
  "Hire Dedicated React Js Developer",
  "Hire Node Js Developer",
  "Hire Laravel Developers",
  "Hire Backend Developers",
  "Hire Android App Developers",
  "Hire iOS App Developers",
  "Hire React Native Developers",
  "Hire Flutter App Developers",
  "Hire Shopify Developers",
  "Hire WordPress Developers",
  "Hire A Dedicated PHP Developer",
];

const socials = [
  { label: "X", icon: "𝕏", href: "#" },
  { label: "Facebook", icon: "f", href: "#" },
  { label: "Instagram", icon: "◉", href: "#" },
  { label: "LinkedIn", icon: "in", href: "#" },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const hash = href.replace("/", "");
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
    <footer style={{ background: "#f8fafd" }}>
      {/* Top CTA Bar */}
      {pathname !== "/contact" && (
        <div
          className="py-10"
          style={{
            background: "linear-gradient(135deg, var(--blue-primary) 0%, #4f79ff 100%)",
          }}
        >
          <div className="container text-center text-white">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-blue-200">
              READY TO GET STARTED?
            </p>
            <h2 className="text-2xl lg:text-4xl font-black mb-4">
              Start Your Project Today
            </h2>
            <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
              Partner with us to build innovative digital solutions that drive growth
              and transform your business.
            </p>
            <a
              href="/contact"
              className="btn-white flex items-center gap-2"
            >
              Let&apos;s Work Together <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div
        className="py-12"
        style={{ borderBottom: "1px solid var(--border-light)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr_1.2fr] gap-10">
            {/* Col 1: Company Info */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src={LogoImg}
                  alt="FourStackTech Logo"
                  className="h-20 w-auto object-contain"
                />
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                Since 2026, FourStackTech has been the go-to partner for businesses
                that refuse to compromise on quality or innovation. We build custom
                CRM, ERP, HRM systems and React Native mobile apps. Our team is
                technology leaders with proven expertise, treating every project
                like it&apos;s our own.
              </p>



              {/* Social icons */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                  Follow Us
                </span>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all hover:scale-110"
                    style={{
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border-light)",
                      color: "var(--text-secondary)",
                    }}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4
                className="font-bold text-sm uppercase tracking-widest mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Navigation
              </h4>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="flex items-center gap-2 text-sm text-left transition-colors hover:text-blue-600"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <ArrowRight size={14} className="text-blue-600" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Hire Developers */}
            <div>
              <h4
                className="font-bold text-sm uppercase tracking-widest mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Hire Developers
              </h4>
              <ul className="flex flex-col gap-2">
                {hireLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="flex items-center gap-2 text-sm transition-colors hover:text-blue-600"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <ArrowRight size={14} className="text-blue-600" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4
                className="font-bold text-sm uppercase tracking-widest mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Contact
              </h4>

              {/* Address */}
              {/* <div className="flex gap-3 mb-4">
                <MapPin
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "var(--blue-primary)" }}
                />
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  172, 2nd Floor, Atlanta Shopping Mall,
                  <br />
                  Althan - Bhimrad Rd, Vesu, Surat,
                  <br />
                  Gujarat. 395017
                </p>
              </div> */}

              {/* Email */}
              <div className="flex gap-3 mb-5">
                <Mail
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "var(--blue-primary)" }}
                />
                <a
                  href="mailto:letstalk@fourstacktech.com"
                  className="text-sm hover:text-blue-600 transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  letstalk@fourstacktech.com
                </a>
              </div>

              {/* HR */}
              <div className="mb-8">
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  HR DEPARTMENT
                </p>
                <div className="flex items-center gap-2 mb-1">
                  <Phone size={13} style={{ color: "var(--blue-primary)" }} />
                  <a href="tel:+917777960192" className="text-sm" style={{ color: "var(--text-muted)" }}>
                    +91 95372 95884
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} style={{ color: "var(--blue-primary)" }} />
                  <a href="mailto:hr@fourstacktech.com" className="text-sm" style={{ color: "var(--text-muted)" }}>
                    hr@fourstacktech.com
                  </a>
                </div>
              </div>

              {/* Sales */}
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  SALES DEPARTMENT
                </p>
                <div className="flex items-center gap-2 mb-1">
                  <Phone size={13} style={{ color: "var(--blue-primary)" }} />
                  <a href="tel:+919054906119" className="text-sm" style={{ color: "var(--text-muted)" }}>
                    +91 96019 53185
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} style={{ color: "var(--blue-primary)" }} />
                  <a href="mailto:sales@fourstacktech.com" className="text-sm" style={{ color: "var(--text-muted)" }}>
                    sales@fourstacktech.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-4" style={{ background: "#f8fafd" }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "var(--text-light)" }}>
            © 2026 FourStackTech. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Terms & Conditions", "Privacy Policy", "Disclaimer"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs hover:text-blue-600 transition-colors"
                style={{ color: "var(--text-light)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
