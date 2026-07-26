"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-cream-light/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between gap-2 sm:gap-3">
          <Link
            href="/"
            className="min-w-0 max-w-[calc(100%-8rem)] shrink leading-none sm:max-w-[calc(100%-12rem)] md:max-w-none"
            aria-label={`${SITE.name} 홈`}
          >
            <span className="font-serif-eng text-2xl tracking-wide text-coffee-dark md:text-3xl">
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
                  className="nav-link inline-flex items-center whitespace-nowrap text-base font-bold leading-none tracking-wider text-coffee-dark transition hover:text-coffee"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="text-coffee md:hidden"
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
        <div className="border-t border-cream-deep bg-cream-light md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                {...(link.blank ? { target: "_blank", rel: "noopener" } : {})}
                className="border-b border-coffee/10 py-3 text-sm font-medium tracking-widest text-coffee-dark last:border-0"
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
