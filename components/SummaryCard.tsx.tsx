"use client";
import { translateToUrdu } from "@/lib/translateToUrdu";

export default function SummaryCard({ text }: { text: string }) {
  const summary = `This is a blog about ${text.slice(0, 20)}...`; // simulate AI
  const translated = translateToUrdu(summary);

  return (
    <div className="mt-6 p-4 bg-green-100 rounded-xl">
      <h2 className="text-lg font-bold mb-2">🤖 AI Summary</h2>
      <p className="text-gray-800 mb-4">{summary}</p>

      <h2 className="text-lg font-bold mb-2">🌐 Urdu Translation</h2>
      <p className="text-green-800">{translated}</p>
    </div>
  );
}
