"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  if (!show) return null;
  return (
    <button aria-label="بازگشت به ابتدای صفحه" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="no-print fixed bottom-5 left-5 z-40 rounded-full bg-brand-600 p-3 text-white shadow-lg hover:bg-brand-700">
      <ArrowUp size={20} />
    </button>
  );
}
