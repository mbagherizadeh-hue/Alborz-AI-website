"use client";
import { Printer } from "lucide-react";
export default function PrintButton({ label = "چاپ / ذخیره PDF" }: { label?: string }) {
  return <button type="button" className="btn-outline no-print" onClick={() => window.print()}><Printer size={18} />{label}</button>;
}
