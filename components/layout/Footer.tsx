import Link from "next/link";
import { SITE } from "@/lib/site";

type FooterProps = {
  address?: string;
  hours?: string;
  lastOrder?: string;
  phone?: string;
  email?: string;
};

export default function Footer({
  address = SITE.defaults.address,
  hours = SITE.defaults.hours,
  lastOrder = SITE.defaults.lastOrder,
  phone = SITE.defaults.phone,
  email = SITE.defaults.email,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-coffee-deep text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <Link
              href="/"
              className="inline-block leading-none"
              aria-label={`${SITE.name} 홈`}
            >
              <span className="font-serif-eng text-2xl tracking-wide text-white">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 whitespace-pre-line text-[13px] leading-relaxed text-white/70">
              {address}
            </p>
          </div>

          <div className="space-y-5 text-[13px] md:text-center">
            <div>
              <p className="font-eng text-xs tracking-widest text-white/50">
                OPEN
              </p>
              <p className="mt-1.5 text-white/80">{hours}</p>
              <p className="text-white/60">{lastOrder}</p>
            </div>
            <div>
              <p className="text-white/80">{phone}</p>
              <p className="text-white/60">{email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 md:justify-end">
            <Link
              href="/"
              className="font-eng text-[11px] tracking-wider text-white/60 transition hover:text-white"
            >
              HOME
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="font-eng text-[11px] tracking-wider text-white/40">
            © {year} {SITE.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
