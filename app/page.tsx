import Hero from "@/components/contents/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* about 앵커 — 스크롤 인디케이터 대상 (섹션은 이후 추가) */}
      <div id="about" aria-hidden className="h-0 scroll-mt-20" />
    </main>
  );
}
