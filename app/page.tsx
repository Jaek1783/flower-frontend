"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ message?: string } | null>(null);

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <h1 className="font-serif-eng text-4xl text-coffee-dark">Flower</h1>
      <p className="mt-3 text-sm text-muted">
        {data?.message ?? "로딩 중..."}
      </p>
    </main>
  );
}
