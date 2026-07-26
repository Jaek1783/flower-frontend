"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SITE } from "@/lib/site";
import styles from "./Hero.module.css";

type HeroPanel = {
  src: string;
  title: string;
  alt?: string;
};

type HeroProps = {
  imageSrc?: string;
  imageAlt?: string;
  eyebrowSub?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  panels?: HeroPanel[];
};

const FEATURES = [
  { t1: "SPECIALTY", t2: "FLOWER", icon: "fa-solid fa-mug-hot" },
  { t1: "DAILY", t2: "FLOWER", icon: "fa-solid fa-bread-slice" },
  { t1: "COMFORTABLE", t2: "FLOWER", icon: "fa-solid fa-couch" },
  { t1: "GREEN", t2: "FLOWER", icon: "fa-solid fa-leaf" },
] as const;

const DEFAULT_PANELS: HeroPanel[] = [
  {
    src: "/images/flower_1.png",
    title: "오늘의 꽃",
    alt: "매일 새롭게 입고되는 신선한 꽃",
  },
  {
    src: "/images/flower_2.png",
    title: "시즌 플라워",
    alt: "계절마다 달라지는 꽃의 색과 향",
  },
  {
    src: "/images/flower_3.png",
    title: "직접 만드는 꽃다발",
    alt: "꽃을 고르고 다듬어 나만의 꽃다발을 완성하는 플라워 클래스",
  },
];

function Multiline({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

export default function Hero({
  imageSrc = "/images/hero-background.png",
  imageAlt = `${SITE.name} 공간`,
  eyebrowSub = "허가를 받고 제작한 포트폴리오 사이트",
  eyebrow = SITE.nameEn,
  title = `꽃과 공간을 담은\n${SITE.name}`,
  subtitle = "자연의 활기와 정성으로 채운 공간,\n당신의 일상에 작은 쉼표가 되기를 바랍니다.",
  panels = DEFAULT_PANELS,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const nodes = root.querySelectorAll<HTMLElement>(`.${styles.reveal}`);
    const timer = window.setTimeout(() => {
      nodes.forEach((el) => el.classList.add(styles.revealIn));
    }, 80);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} id="top" className={styles.hero}>
      <img src={imageSrc} alt={imageAlt} className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.row}>
          <div className={styles.copy}>
            <p className={`${styles.eyebrow} ${styles.reveal}`}>{eyebrowSub}</p>
            <p className={`${styles.eyebrow} ${styles.reveal}`}>{eyebrow}</p>
            <h1
              className={`${styles.title} ${styles.reveal} ${styles.delay1}`}
            >
              <Multiline text={title} />
            </h1>
            <p
              className={`${styles.subtitle} ${styles.reveal} ${styles.delay2}`}
            >
              <Multiline text={subtitle} />
            </p>

            <div
              className={`${styles.features} ${styles.reveal} ${styles.delay3}`}
            >
              {FEATURES.map((f) => (
                <div key={`${f.t1}-${f.t2}`} className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <i className={f.icon} aria-hidden />
                  </span>
                  <p className={styles.featureLabel}>
                    {f.t1}
                    <br />
                    {f.t2}
                  </p>
                </div>
              ))}
            </div>

            <div
              className={`${styles.actions} ${styles.reveal} ${styles.delay4}`}
            >
              <Link href="/pickup" className={styles.ctaPrimary}>
                픽업 예약하기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>
                제휴문의
              </Link>
            </div>
          </div>

          {panels.length > 0 && (
            <div className={styles.panels}>
              {panels.map((panel) => (
                <figure key={panel.title} className={styles.panel}>
                  <img
                    src={panel.src}
                    alt={panel.alt ?? panel.title}
                    className={styles.panelImg}
                  />
                  {panel.title && (
                    <figcaption className={styles.panelCaption}>
                      <h3 className={styles.panelTitle}>{panel.title}</h3>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>

      <a href="#about" className={styles.scroll} aria-label="아래로 스크롤">
        <span className={styles.scrollLabel}>SCROLL</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </a>
    </section>
  );
}
