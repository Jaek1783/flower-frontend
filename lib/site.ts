export const SITE = {
  name: "Flower",
  nameEn: "FLOWER",
  copyright: "FLOWER. ALL RIGHTS RESERVED.",
  defaults: {
    address: "주소 미설정",
    hours: "10:00 - 21:00",
    lastOrder: "LAST ORDER 20:30",
    phone: "000-0000-0000",
    email: "hello@flower.kr",
  },
} as const;

export type NavLink = {
  href: string;
  label: string;
  blank?: boolean;
};

/** 일반 페이지(히어로 없는 페이지) 공통 네비 — brbl/summer header.blade.php 와 동일 */
export const NAV_LINKS: NavLink[] = [
  { href: "/#menu", label: "메뉴" },
  { href: "/reviews", label: "후기" },
  { href: "/gallery", label: "갤러리" },
  { href: "/faq", label: "FAQ" },
  { href: "/location", label: "오시는 길" },
  { href: "/pickup", label: "픽업 예약" },
  { href: "/pickup/lookup", label: "픽업 확인" },
  { href: "/contact", label: "제휴문의" },
];
