"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }

    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = solid
    ? "nav-link text-base font-bold tracking-wider text-coffee-dark transition hover:text-coffee"
    : "nav-link text-base font-bold tracking-wider text-white/90 transition hover:text-white";

  return (
    <header
      id="header"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-cream-light/95 shadow-sm backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between gap-2 sm:gap-3">
          <Link
            href="/"
            className="min-w-0 max-w-[calc(100%-8rem)] shrink leading-none sm:max-w-[calc(100%-12rem)] md:max-w-none"
            aria-label={`${SITE.name} 홈`}
          >
            <span
              className={`font-serif-eng text-2xl tracking-wide md:text-3xl ${
                solid ? "text-coffee-dark" : "text-white"
              }`}
            >
              {SITE.name}
            </span>
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-4">
            <nav
              className="hidden items-center gap-6 md:flex lg:gap-8"
              aria-label="주요 메뉴"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  {...(link.blank
                    ? { target: "_blank", rel: "noopener" }
                    : {})}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className={
                solid
                  ? "text-coffee md:hidden"
                  : "text-white/90 transition-colors duration-500 md:hidden"
              }
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="bg-coffee-deep/95 backdrop-blur md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                {...(link.blank ? { target: "_blank", rel: "noopener" } : {})}
                className="py-3 text-sm tracking-widest text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
