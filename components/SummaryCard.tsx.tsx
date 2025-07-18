"use client";
  import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { translateToUrdu } from "@/lib/translateToUrdu";
import { simulateSummary } from "@/lib/simulateSummary";

export default function SummaryCard({ text }: { text: string }) {
  const summary = simulateSummary(text);
  const translated = translateToUrdu(summary);

  return (
    <div className="mt-6 p-4 bg-green-100 rounded-xl">
      {/* AI Summary */}
      <div>
        <h3 className="font-semibold text-md mb-1">🤖 AI Summary</h3>
        <p className="text-gray-800 mb-4">{summary}</p>
      </div>

      {/* Urdu Translation */}
      <div>
        <h3 className="font-semibold text-md mb-1">🌐 Urdu Translation</h3>
        <p className="text-green-800">{translated}</p>
      </div>
    </div>
  );
useEffect(() => {
  async function saveSummary() {
    const { error } = await supabase.from("summaries").insert([
      { original: summary, urdu: translated },
    ]);

    if (error) {
      console.error("❌ Failed to save to Supabase:", error.message);
    } else {
      console.log("✅ Saved to Supabase");
    }
  }

  saveSummary();
}, [summary, translated]);

}
